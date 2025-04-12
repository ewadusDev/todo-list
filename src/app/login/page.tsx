"use client"

import { useState, useEffect } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Logo from "../ui/svg/Logo";


const SignInPage = () => {

  const router = useRouter()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      router.replace("/")
    }
  }, [router, isAuthenticated, session])

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
    if (!email) setError("Email is required")
    if (!password) setError("Password is required")

    const result = await signIn("credentials", {
      email: email as string,
      password: password as string,
      redirect: false,
    })

    if (result?.error) {
      setError(result.error)
    } else {
      setIsAuthenticated(true)
    }


  }

  return (
    <main className="container mx-auto flex justify-center items-center h-screen">
      <section className="w-[1110px] h-[468px] bg-white rounded-[53px]">
        <div className="p-14 flex flex-row h-full">
          {/* left */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex justify-start items-center gap-2">
              <Logo className="w-[50px] h-[50px] text-[#1C78C3]" />
              <h2 className="text-[#1C78C3] text-2xl font-bold">To-Do List</h2>
            </div>
            <h1 className="text-5xl font-semibold">Log in</h1>
            <p>Use email account.</p>
          </div>

          {/* right */}
          <div className="w-full flex items-center">
            <form className="w-full flex flex-col gap-6" onSubmit={handleLogin}>
              <input type="email" placeholder="Email" name="email" required className="w-full h-14 border rounded-[3px] p-4 text-2xl  focus:outline-none focus:ring-2 focus:ring-[#1C78C3] focus:border-transparent" />
              <div className="relative h-14 w-full ">
                <input type={showPassword ? "text" : "password"} name="password" placeholder="*********" className="w-full h-full border rounded-[3px] p-4 text-2xl  focus:outline-none focus:ring-2 focus:ring-[#1C78C3] focus:border-transparent" />
                <button type="button" className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 mr-1.5" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaRegEye className="text-[#1C78C3] text-2xl" /> : < FaRegEyeSlash className="text-[#1C78C3] text-2xl" />}
                </button>
              </div>
              <p>Please do not use the actual data for registration.</p>
              {/* Buttons */}
              <div className="flex flex-row justify-end gap-7">
                <Link href={"/signup"} className="px-8 py-3.5 rounded-[45px] hover:cursor-pointer hover:bg-[#F5F5F5]">
                  <button type="button" className="text-[#1C78C3]">Create Account</button>
                </Link>
                <button type="submit" className="bg-[#1C78C3] text-white px-8 py-3.5 rounded-[45px] hover:cursor-pointer hover:bg-[#125993]">Log in</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )


}
export default SignInPage