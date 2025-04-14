"use client"

import Link from "next/link"
import CheckedIcon from "../svg/CheckedIcon"
import HamburgerIcon from "../svg/HamburgerIcon"
import StarIcon from "../svg/StarIcon"
import SunIcon from "../svg/SunIcon"
import TrashIcon from "../svg/TrashIcon"
import { useState } from "react"
import { usePathname } from "next/navigation"



const icons = [{ name: "Tasks", icon: SunIcon, path: "/" }, { name: "Starred", icon: StarIcon, path: "favorite" }, { name: "Trash", icon: TrashIcon, path: "trash" }, { name: "Done", icon: CheckedIcon, path: "done" }]


const LeftSidebar = () => {
    const [isShown, setIsShown] = useState<boolean>(true)
    const pathname = usePathname()
    console.log(pathname)


    if (!isShown) {
        return (
            <aside className="pt-8 ">
                <button className="ml-8 hover:cursor-pointer" onClick={() => setIsShown(!isShown)}>
                    <HamburgerIcon width={32} height={32} />
                </button>

            </aside>
        )
    }


    return (
        <aside className={`${isShown ? 'block' : 'hidden'} absolute left-0   w-[300px] h-[calc(100vh-48px)] shadow-md/60 bg-white`}>
            <div className="flex flex-col gap-5 pt-8">
                <button className="ml-8 hover:cursor-pointer" onClick={() => setIsShown(!isShown)}>
                    <HamburgerIcon width={32} height={32} />
                </button>
                <div>
                    <ul>
                        {icons.map((icon, index) => {
                            return (
                                <Link href={icon.path} key={index}>
                                    <li className={`flex h-12 justify-start items-center gap-6 pl-8 hover:cursor-pointer ${pathname === icon.path ? 'bg-gray-200' : ''} hover:bg-gray-200`}>
                                        <icon.icon width={24} height={24} />
                                        <span className="text-[16px]">{icon.name}</span></li>
                                </Link>
                            )
                        })}
                    </ul>

                </div>

            </div>

        </aside>
    )
}
export default LeftSidebar