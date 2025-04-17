"use client"
import { useState } from "react"
import CloseIcon from "../svg/CloseIcon"
import SearchIcon from "../svg/SearchIcon"
import LogoIcon from "../svg/LogoIcon"


const apps = [{ name: "To-do List", icon: LogoIcon }, { name: "Blog", icon: LogoIcon }, { name: "Map Drawer", icon: LogoIcon }, { name: "Portfolio", icon: LogoIcon }]

const AppDrawerModal = ({ className, setIsShownAppDrawerModal }: { className: string, setIsShownAppDrawerModal: (state: boolean) => void }) => {
    const [search, setSearch] = useState<string>("")
    const selectedIcon = apps.filter(app => app.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    return (
        <div className={`w-[300px] h-[240px] flex flex-col shadow-2xl rounded-[30px] overflow-hidden px-4 py-3 bg-white ${className}`}>
            <div className="flex flex-row w-full items-center px-2 ">
                <div className="w-full flex rounded-[5px] bg-[#F5F5F5] p-2">
                    <SearchIcon className="w-5 h-fit" width={24} height={24} />
                    <input type="text" placeholder="Search" className="px-2  grow-50 outline-hidden" onChange={e => setSearch(e.target.value)} />
                </div>
                <CloseIcon width={24} height={24} onClick={() => setIsShownAppDrawerModal(false)} className="hover:cursor-pointer" />
            </div>
            <div className={`grid grid-cols-3 ${selectedIcon.length < 3 ? "place-items-start" : "place-items-center"}  h-full w-full gap-2 py-2 mx-auto mt-4`}>
                {selectedIcon.map(app => {
                    return (
                        <div className="w-15 h-17 flex flex-col items-center hover:bg-[#F5F5F5] rounded-[3px] hover:cursor-pointer" key={app.name}>
                            <app.icon width={36} height={36} />
                            <p className="text-[10px] text-center">{app.name}</p>
                        </div>)
                })}

            </div>
        </div>

    )
}
export default AppDrawerModal