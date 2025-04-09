"use server"

import { revalidatePath } from "next/cache";
import pool from "./db";
import * as uuid from "uuid";
import { z } from "zod";
import { sampleTodos } from "./data";

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

export async function getTodos() {

    try {
        const response = await pool.query('SELECT * FROM todos');
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