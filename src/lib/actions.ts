"use server"

// import { revalidatePath } from "next/cache";
import pool from "./db";


export async function createTodo() {
    console.log("Creating todo...")

    try {

       const response =  await pool.query('SELECT NOW()')
        console.log("✅ PostgreSQL connected successfully!'")
        console.log(response.fields[0].name)


    } catch (error) {
        console.error("Error creating todo:", error);
    }
}