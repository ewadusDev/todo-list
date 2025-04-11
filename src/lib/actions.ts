"use server"

import { revalidatePath } from "next/cache";
import pool from "./db";
import * as uuid from "uuid";
import { z } from "zod";
import { sampleTodos } from "./data";
import bcrypt from "bcryptjs";

// Type ต้อง match กับ z object  โดยรับ error string[] ออกมา
export type State = {
    errors?: {
        id?: string[]
        task?: string[]
        is_done?: string[]
    },
    message: string
}

const FormSchema = z.object({
    id: z.string({
        invalid_type_error: "Please enter a valid ID"
    }),
    task: z.string({
        invalid_type_error: "Please enter a task"
    }),
    is_done: z.coerce.boolean({
        invalid_type_error: "Please check the checkbox"
    }),
    time: z.number()

})

export async function createTodo(formData: FormData) {
    const rawData = {
        id: uuid.v4(),
        task: formData.get("task"),
        time: Date.now(),
        is_done: false
    }

    // Validate using Zod
    const parse = FormSchema.safeParse(rawData);

    if (!parse.success) {
        console.error('❌ Validation failed:', parse.error.flatten().fieldErrors);
        throw new Error('Validation error');
    }

    const { id, task, time, is_done } = parse.data

    try {
        await pool.query(
            'INSERT INTO todos (id, task, time, is_done) VALUES ($1, $2, $3, $4)',
            [id, task, time, is_done]
        )
        console.log('✅ Todo created successfully!');

        revalidatePath('/');
    } catch (error) {
        console.error('❌ DB Error:', error);
        throw new Error('Database insert failed');
    }
}

export async function updateCheckbox(prevState: State, formData: FormData) {
    const validatedFields = {
        id: formData.get("id"),
        is_done: formData.get("is_done")
    }

    const { id, is_done } = validatedFields

    try {
        await pool.query(
            'UPDATE todos SET is_done = $1 WHERE id = $2',
            [is_done, id]
        )
        revalidatePath('/');
        return {
            message: "Todo updated successfully!"
        }

    } catch (error) {
        revalidatePath('/');
        console.error('❌ DB Error:', error);
        return {
            errors: {
                id: ["Todo update failed"],
                task: ["Todo update failed"],
                is_done: ["Todo update failed"]
            },
            message: "Todo update failed"
        }
    }
}

export const seedDatabase = async () => {

    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS todos (
              id UUID PRIMARY KEY,
              task TEXT NOT NULL,
              time BIGINT NOT NULL,
              is_done BOOLEAN DEFAULT FALSE
            );
          `);

        for (const todo of sampleTodos) {
            await pool.query(
                'INSERT INTO todos (id, task, time, is_done) VALUES ($1, $2, $3, $4)',
                [todo.id, todo.task, todo.time, todo.is_done]
            );
        }
        console.log('✅ Seeded todos successfully!');

    } catch (error) {
        console.error('❌ DB Error:', error);
        throw new Error('Database insert failed');
    } finally {
        pool.end();
        console.log('Database connection closed');
    }
}



export async function getTodos(query: string) {

    try {
        const response = await pool.query('SELECT * FROM todos WHERE task LIKE $1', [`%${query}%`]);
        return response.rows;
    } catch (error) {
        console.error('❌ DB Error:', error);
        throw new Error('Database query failed');
    }

}



export async function deleteTodo(id: string) {
    try {
        await pool.query('DELETE FROM todos WHERE id = $1', [id]);
        revalidatePath('/');
        console.log('✅ Todo deleted successfully!');
    } catch (err) {
        console.error(err);
        revalidatePath('/');
        throw new Error('Database delete failed');
    }
}


export async function updateTask(prevState: State, formData: FormData) {
    const validatedFields = {
        id: formData.get("id"),
        task: formData.get("task")
    }

    const { id, task } = validatedFields

    try {
        pool.query(
            'UPDATE todos SET task = $1 WHERE id = $2',
            [task, id]
        )
        revalidatePath('/');
        return {
            errors: {},
            message: "Todo updated successfully!"
        }


    } catch (err) {
        revalidatePath('/');
        console.error(err)
        return {
            errors: {
                id: [id?.toString() || ""],
                task: [task?.toString() || ""],
            },
            message: "Todo update failed"
        }
    }

}


const FormSchemaCreateUser = z.object({
    firstname: z.string({
        required_error: "Please enter a firstname",
        invalid_type_error: "Please enter a firstname"
    }),
    lastname: z.string({
        required_error: "Please enter a lastname",
        invalid_type_error: "Please enter a lastname"
    }),
    email: z.string({
        invalid_type_error: "Please enter a email"
    }),
    password: z.string({
        invalid_type_error: "Please enter a password"
    }).min(6, 'please enter at least 6 characters'),
    cfpassword: z.string({
        invalid_type_error: "Please enter a password"
    }).min(6, 'please enter at least 6 characters')
}).refine((data) => data.password === data.cfpassword, {
    path: ["cfpassword"],
    message: "Your password do not match"
})

export async function createUser(prevState: string, formData: FormData) {
    const validatedFields = FormSchemaCreateUser.safeParse(Object.fromEntries(formData))

    if (!validatedFields.success) {
        console.error('❌ Validation failed:', validatedFields.error.flatten().fieldErrors);
        return "Please check your fields"
    }

    const { firstname, lastname, email, password } = validatedFields.data
    const hashPassword = await bcrypt.hash(password, 10)

    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
              id UUID PRIMARY KEY,
              firstname TEXT NOT NULL,
              lastname TEXT NOT NULL,
              email TEXT NOT NULL,
              password TEXT NOT NULL)
            `)

        await pool.query(
            'INSERT INTO users (id, firstname, lastname, email, password) VALUES($1, $2, $3, $4, $5)',
            [uuid.v4(), firstname, lastname, email, hashPassword]
        )
        revalidatePath("/signup")
        return "create successfully"


    } catch (error) {
        revalidatePath("/signup")
        console.error(error)
        return "create failed"
    }


}