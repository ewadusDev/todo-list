"use client"
import Link from "next/link"
import Button from "../ui/button"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";



const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRePassword, setShowRePassword] = useState<boolean>(false);

  return (
    <section className="flex items-center justify-center w-[450px] h-[600px] bg-white rounded-3xl">
      <div className="w-full px-12 border">
        <h1 className="text-3xl font-bold">Sign up</h1>
        <form className="flex flex-col gap-2">
          <input type="text" name="firstname" placeholder="First Name" className="h-10 w-full border rounded-xl px-2" />
          <input type="text" name="lastname" placeholder="Last Name" className="h-10 w-full border rounded-xl px-2" />
          <input type="email" name="email" placeholder="E-mail address" className="h-10 w-full border rounded-xl px-2" />

          {/* Password Field */}
          <div className="relative h-10 w-full border rounded-xl">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="*********" className="w-full h-full px-2 pr-10" />
            <button type="button" className="absolute top-1/2 right-3 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)} >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="relative h-10 w-full border rounded-xl">
            <input type={showRePassword ? "text" : "password"}  name="repassword" placeholder="*********" className="w-full h-full px-2 pr-10"/>
            <button type="button" className="absolute top-1/2 right-3 -translate-y-1/2" onClick={() => setShowRePassword(!showRePassword)}>
              {showRePassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
          <Button name="Sign Up" type="submit" />
        </form>
        <p>Don&apos;t have an account? <span><Link href={"/signin"} className="font-semibold hover:underline text-blue-500">Sign in</Link></span></p>


      </div>

    </section>
  )
}
export default SignUpPage