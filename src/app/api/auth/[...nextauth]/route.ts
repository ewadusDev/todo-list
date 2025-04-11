import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

type Session = {
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
        id?: string;
    };
    expires: string;
}
type User = {
    id: string;
    name: string;
    email: string;
}



async function getUser(email: string) {
    try {
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email])
        return user.rows[0]
    } catch (error) {
        console.error('DB Query Error', error)
    }
}


export const authOptions = {
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

                return user
            }
        })
    ],
    callbacks: {
        jwt({ token, user }: { token: { id: string, name: string, email: string }, user: User }) {
            if (user) {
                token.id = user.id
                token.name = user.name

            }
            return token
        },
        async session({ session, token }: { session: Session, token: User }) {
            if (session.user && token.id) {
                session.user.id = token.id
                session.user.email = token.email
            }
            return session;
        },

    },
    pages: {
        signIn: "/signin"
    }

}



const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }