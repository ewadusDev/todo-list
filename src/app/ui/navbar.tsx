"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import LogoIcon from "./svg/LogoIcon"
import SearchIcon from "./svg/SearchIcon";
import BentoIcon from "./svg/BentoIcon";
import SettingIcon from "./svg/SettingIcon";
import ProfileIcon from "./svg/ProfileIcon";
import Link from "next/link";
import AppDrawerModal from "./modal/app-drawer-modal";
import { useState } from "react";


const Navbar = () => {
    const [isShownAppDrawerModal, setIsShownAppDrawerModal] = useState(false)

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const params = new URLSearchParams(searchParams)
        setTimeout(() => {
            if (event.target.value) {
                params.set('query', event.target.value)
            } else {
                params.delete('query')
            }
            replace(`${pathname}?${params.toString()}`)
        }, 300);

    }

    return (
        <nav className="bg-[#1C78C3] h-[48px] relative">
            <div className="flex justify-between items-center w-full h-full px-7">
                <div className="hover:cursor-pointer">
                    <Link href={"/"} className="flex items-center gap-2 ">
                        <LogoIcon className="w-9" stroke="#fff" />
                        <h2 className="font-semibold text-white">To-Do List</h2>
                    </Link>

                </div>
                {/* Search */}
                <div className="w-1/3 bg-white rounded-[5px] flex flex-row  items-center overflow-hidden px-2">
                    <SearchIcon className="w-5 h-fit" />
                    <input className="px-2 py-2 grow-50 outline-hidden"
                        type="text" placeholder="Search" onChange={handleSearch}
                        defaultValue={searchParams.get('query')?.toString()}
                    />
                </div>
                {/* profile */}
                <div className="flex flex-row gap-2 items-center">
                    <SettingIcon className="w-[24px] hover:cursor-pointer" />
                    <BentoIcon className="w-[24px] hover:cursor-pointer" onClick={() => setIsShownAppDrawerModal(!isShownAppDrawerModal)} />
                    <ProfileIcon width={36} height={36} fill="#fff" className="hover:cursor-pointer" />
                </div>

                {/* Display Modal */}

                {isShownAppDrawerModal && <AppDrawerModal className={"absolute right-12 top-9 z-10"} setIsShownAppDrawerModal={setIsShownAppDrawerModal} />}



            </div>
        </nav >
    )
}
export default Navbar