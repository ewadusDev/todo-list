
"use client"

import { useState, useEffect } from "react";
import { Button } from "../ui/button"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const SignInPage = () => {
  const router = useRouter()
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
    <section className="flex items-center justify-center w-[450px] h-[600px] bg-white rounded-3xl">
      <div className="w-full px-12">
        <div className="relative flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl font-bold">Sign in</h1>

          <form onSubmit={handleLogin} className=" w-full">
            <input type='email' placeholder="mailexample@mail.com" name="email" className="h-10 w-full border rounded-xl px-2" />
            <div className="relative h-10 w-full border rounded-xl">
              <input type={showPassword ? "text" : "password"} name="password" placeholder="*********" className="w-full h-full px-2" />
              <button type="button" className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            <Button name="Sign In" type="submit" />
            {error && (
              <p>{error}</p>
            )}
          </form>

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