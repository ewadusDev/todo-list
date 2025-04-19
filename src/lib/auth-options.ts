import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";

async function getUser(email: string) {
    try {
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email])
        return user.rows[0]
    } catch (error) {
        console.error('DB Query Error', error)
    }
}


export const authOptions: AuthOptions = {
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

                console.log("authorize", user)
                return user
            }
        })
    ],
    callbacks: {
        jwt({ token, user }: { token: { id: string, email: string, firstname: string, lastname: string }, user: { id: string, email: string, firstname: string, lastname: string } }) {
            if (user) {
                token.id = user.id
                token.email = user.email
                token.firstname = user.firstname
                token.lastname = user.lastname
            }
            return token
        },
        async session({ session, token }: { session: { user: { id: string, email: string, firstname: string, lastname: string }, expires: string; }, token: { id: string, email: string, firstname: string, lastname: string } }) {
            if (session.user && token.id) {
                session.user.id = token.id
                session.user.email = token.email
                session.user.firstname = token.firstname
                session.user.lastname = token.lastname

            }
            return session;
        },

    },
    pages: {
        signIn: "/login"
    }

}
