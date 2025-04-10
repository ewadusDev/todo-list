"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { IoMdSearch } from "react-icons/io";


const SearchBox = () => {
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
        <div className="w-full rounded-2xl flex flex-row border items-center overflow-hidden px-2">
            <IoMdSearch className="grow-1" />
            <input className="px-2 py-2 grow-50 outline-hidden"
                type="text" placeholder="Search" onChange={handleSearch}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </div>
    )
}
export default SearchBox