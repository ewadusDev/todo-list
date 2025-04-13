"use client"

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useActionState, useState, useEffect } from "react";
import { createUser } from "@/lib/actions";
import Logo from "../ui/svg/LogoIcon";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [state, formAction] = useActionState(createUser, "")

  console.log(state)

  useEffect(() => {
    if (state) {
      router.replace("/login")
    }
    if (session) {
      router.replace("/")
    }
  }, [router, session, state])


  return (
    <main className="container mx-auto flex justify-center items-center h-screen">
      <section className="w-[1110px] bg-white rounded-[53px]">
        <div className="p-14 flex flex-row h-full">
          
          {/* left */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex justify-start items-center gap-2">
              <Logo className="w-[50px] h-[50px] text-[#1C78C3]" />
              <h2 className="text-[#1C78C3] text-2xl font-bold">To-Do List</h2>
            </div>
            <h1 className="text-5xl font-semibold">Create an account</h1>
            <p>Enter your  information</p>
            <p>Please do not use the actual data for registration</p>
          </div>

          {/* right */}
          <div className="w-full flex items-center">
            <form className="w-full flex flex-col gap-6" action={formAction}>
              <input type="text" placeholder="First Name" name="firstname" required className="w-full h-14 border rounded-[3px] p-4 text-2xl  focus:outline-none focus:ring-2 focus:ring-[#1C78C3] focus:border-transparent" />
              <input type="text" placeholder="Last Name" name="lastname" required className="w-full h-14 border rounded-[3px] p-4 text-2xl  focus:outline-none focus:ring-2 focus:ring-[#1C78C3] focus:border-transparent" />
              <input type="email" placeholder="Email" name="email" required className="w-full h-14 border rounded-[3px] p-4 text-2xl  focus:outline-none focus:ring-2 focus:ring-[#1C78C3] focus:border-transparent" />
              <div className="relative h-14 w-full ">
                <input type={showPassword ? "text" : "password"} name="password" placeholder="*********" className="w-full h-full border rounded-[3px] p-4 text-2xl  focus:outline-none focus:ring-2 focus:ring-[#1C78C3] focus:border-transparent" />
                <button type="button" className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 mr-1.5" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaRegEye className="text-[#1C78C3] text-2xl" /> : < FaRegEyeSlash className="text-[#1C78C3] text-2xl" />}
                </button>
              </div>
              <div className="relative h-14 w-full ">
                <input type={showPassword ? "text" : "password"} name="cfpassword" placeholder="*********" className="w-full h-full border rounded-[3px] p-4 text-2xl focus:outline-none focus:ring-2 focus:ring-[#1C78C3] focus:border-transparent" />
                <button type="button" className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 mr-1.5" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaRegEye className="text-[#1C78C3] text-2xl" /> : < FaRegEyeSlash className="text-[#1C78C3] text-2xl" />}
                </button>
              </div>
              <p>Please do not use the actual data for registration.</p>
              {/* Buttons */}
              <div className="flex flex-row justify-end gap-7">
                <button type="submit" className="bg-[#1C78C3] text-white px-8 py-3.5 rounded-[45px] hover:cursor-pointer hover:bg-[#125993]">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SignUpPage