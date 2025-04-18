
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            email: string;
            firstname: string;
            lastname: string;
            image: string;
        };
        expires: string;
    }

    interface User {
        id: string;
        email: string;
        password: string; // include only if returned from DB (you may omit for security)
        firstname: string;
        lastname: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        email: string;
        firstname: string;
        lastname: string;
    }
}