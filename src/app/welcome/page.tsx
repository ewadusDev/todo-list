"use client";

import Link from "next/link";
import Button from "../ui/button";

const WelcomePage = () => {
    return (
        <section className="w-[450px] h-[600px] flex items-center justify-center bg-gray-100 rounded-3xl shadow-md">
            <div className="flex flex-col gap-6 items-center px-12 text-center">
                <h1 className="text-3xl font-bold">ToDo Py</h1>
                <p className="text-gray-600">
                    Stay Organized, Get Things Done: Your Ultimate To-Do List App.
                    A todo list app is a digital task management tool designed to help users organize
                    and prioritize their daily activities and responsibilities.
                </p>
                <Link href={"/"} className="w-full">
                    <Button name="Get Started" type="button" />
                </Link>
                <p className="text-gray-500">
                    Already have an account?
                    <Link href={"/signin"} className="font-semibold hover:underline text-blue-500">
                        Sign In
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default WelcomePage;
