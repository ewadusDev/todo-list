import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import pool from "@/lib/db";
import * as uuid from "uuid";


export async function POST(request: NextResponse) {
    const { email, password, confirmPassword, firstname, lastname } = await request.json()
    const hashPassword = await bcrypt.hash(password, 10)

    if (!email || !password || !confirmPassword || !firstname || !lastname) {
        return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    if (password !== confirmPassword) {
        return NextResponse.json({ message: "Password do not match" }, { status: 400 })
    }

    const existUser = await pool.query('SELECT * FROM users WHERE email = $1', [email])

    if (existUser.rows.length > 0) {
        return NextResponse.json({ message: "User already exists" }, { status: 400 })
    }

    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
              id UUID PRIMARY KEY,
              firstname TEXT NOT NULL,
              lastname TEXT NOT NULL,
              username TEXT NOT NULL,
              password TEXT NOT NULL)
            `)

        await pool.query(
            'INSERT INTO users (id, firstname, lastname, username, password) VALUES($1, $2, $3, $4, $5)',
            [uuid.v4(), firstname, lastname, email, hashPassword]
        )


    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Something went wrong when create user" }, { status: 500 })
    }

}