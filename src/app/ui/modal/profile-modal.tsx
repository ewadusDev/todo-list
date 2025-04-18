"use client"

import { Button } from "@mui/material"
import CloseIcon from "../svg/CloseIcon"
import ProfileIcon from "../svg/ProfileIcon"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"



const ProfileModal = ({ className, setIsShownProfileModal }: { className: string, setIsShownProfileModal: (state: boolean) => void}) => {
    const router = useRouter()
    const { data: session } = useSession()


    useEffect(() => {
        if (!session) {
            router.replace("/login")
        }
    }, [router, session])

    const handleModal = () => {
        setIsShownProfileModal(false)
    }

    return (
        <div className={`w-[300px] h-[240px] flex flex-col shadow-2xl rounded-[30px] overflow-hidden px-4 py-3 bg-white ${className} items-center gap-2`}>
            <div className="flex flex-row w-full items-center px-2">
                <p className="w-full text-center">{session?.user.email}</p>
                <CloseIcon width={24} height={24} onClick={handleModal} className="hover:cursor-pointer" />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <ProfileIcon width={62} height={62} />
                <p>{session?.user.firstname + " " + session?.user.lastname || "no name"}</p>
            </div>
            <Button variant="outlined" disabled >Mnanage your Account</Button>
            <Button variant="contained" onClick={() => signOut()}>Logout</Button>
        </div>
    )
}
export default ProfileModal