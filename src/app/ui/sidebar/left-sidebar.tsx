"use client"

import Link from "next/link"
import CheckedIcon from "../svg/CheckedIcon"
import FavoriteIcon from "../svg/FavoriteIcon"
import SunIcon from "../svg/SunIcon"
import TrashIcon from "../svg/TrashIcon"
import { useState } from "react"
import { usePathname } from "next/navigation"
import ColapIcon from "../svg/ColapIcon"



const icons = [{ name: "Tasks", icon: SunIcon, path: "/" }, { name: "Starred", icon: FavoriteIcon, path: "favorite" }, { name: "Trash", icon: TrashIcon, path: "trash" }, { name: "Done", icon: CheckedIcon, path: "done" }]


const LeftSidebar = () => {
    const [isShown, setIsShown] = useState<boolean>(true)
    const pathname = usePathname()

    return (
        <aside className="h-full">

            {/* nav area */}
            <div className={`bg-white text-white shadow-md/60 h-full transition-all duration-200 ease-in-out ${isShown ? 'w-20' : 'w-64'}`} >

                <div className="flex items-center justify-end p-4 pr-7">
                    <button onClick={() => setIsShown(!isShown)} className="hover:cursor-pointer">
                        {isShown ? <ColapIcon width={32} height={32} stroke="#000" /> : <ColapIcon width={32} height={32} />}
                    </button>
                </div>

                <ul className="mt-4">
                    {icons.map((icon, index) => {
                        return (
                            <Link href={icon.path} key={index} className={`flex h-15 justify-start pl-6 items-center gap-6 hover:cursor-pointer ${pathname === icon.path ? 'bg-[#1C78C3]' : ''} hover:bg-[#1C78C3]`}>
                                <li className={`flex h-12 justify-start items-center gap-6  `}>
                                    {pathname === icon.path ? (<icon.icon width={24} height={24} stroke="#FFFF" />) : (<icon.icon width={24} height={24} stroke="#000" />)}
                                    {!isShown && <span className={`text-[16px]${pathname === icon.path ? ' text-white' : ''} text-black transition-all duration-200 ease-in-out`}>{icon.name}</span>}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>

        </aside >
    )
}
export default LeftSidebar