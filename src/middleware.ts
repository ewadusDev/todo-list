import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("next-auth.session-token"); // token ถุกเก็บใน cookies browser

    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

// Apply middleware only to specific routes
export const config = {
    matcher: ['/', '/favorite', '/done', '/seed','/trash'], // Protects /dashboard and any sub-routes // ใส่ page ที่ต้องการดัก
};
