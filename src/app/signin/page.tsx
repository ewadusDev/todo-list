
"use client"

import { useState } from "react";
import Button from "../ui/button"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";



const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="flex items-center justify-center w-[450px] h-[600px] bg-white rounded-3xl">
      <div className="w-full px-12">
        <div className="relative flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl font-bold">Sign in</h1>
          <input type='email' placeholder="mailexample@mail.com" className="h-10 w-full border rounded-xl px-2" />
          <div className="relative h-10 w-full border rounded-xl">
            <input type={showPassword ? "text" : "password"} placeholder="*********" className="w-full h-full px-2" />
            <button className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2" onClick={() =>setShowPassword(!showPassword)}>
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          <Button name="Sign In" type="button" />
          <div className="flex gap-5">
            <div>-----</div>
            <p>or</p>
            <div>-----</div>
          </div>
          <Button name="Google" type="button" />
          <Button name="Facebook" type="button" />
          <p>Don&apos;t have an account? <span>
            <Link href={"/signup"} className="font-semibold hover:underline text-blue-500">Sign up</Link></span></p>
        </div>
      </div>


    </section>
  )
}
export default SignInPage