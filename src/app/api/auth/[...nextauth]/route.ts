import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";


async function getUser(email: string) {
    try {
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email])
        return user.rows[0]
    } catch (error) {
        console.error('DB Query Error', error)
    }
}


const handler = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "email" },
                password: { label: "password", type: "password", placeholder: "password" }
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) throw new Error("Please enter email and password")

                const { email, password } = credentials;
                const user = await getUser(email)

                if (!user) throw new Error("not found user in our system")

                const passwordMatch = await bcrypt.compare(password, user.password)

                if (!passwordMatch) throw new Error("Invalid password")

                console.log("loged in", user)

                return user
            }
        })
    ],
    pages: {
        signIn: "/signin"
    }

})


export { handler as GET, handler as POST }