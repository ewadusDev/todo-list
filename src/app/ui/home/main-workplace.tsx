"use client"

import { createTodo } from "@/lib/actions"
import { useSession } from "next-auth/react";
import GridIcon from "../svg/GridIcon"
import HouseIcon from "../svg/HouseIcon"
import ListIcon from "../svg/ListIcon"
import CheckIcon from "../svg/CheckIcon";
import ArrowDownIcon from "../svg/ArrowDownIcon";
import FavoriteIcon from "../svg/FavoriteIcon";
import { useState } from "react";
import ArrowRightIcon from "../svg/ArrowRightIcon";
import SortDownIcon from "../svg/SortDownIcon";
import SortUpIcon from "../svg/SortUpIcon";


const MainWorkPlace = () => {
    const { data: session } = useSession()
    const [isShownComplete, setIsShownComplete] = useState<boolean>(true)
    const [isSorted, setIsSorted] = useState<boolean>(false)

    const handleShowComplete = () => setIsShownComplete(!isShownComplete)
    const handleIsSorted = () => setIsSorted(!isSorted)
    const createTodoList = createTodo.bind(null, session?.user.id)

    return (
        <section className="w-full flex flex-col py-16 px-14">
            <div className="flex justify-between w-full">
                <div className="flex gap-6">
                    <div className="flex flex-row text-2xl gap-1  items-center text-[#1C78C3]">
                        <HouseIcon width={33} height={33} stroke={"#1C78C3"} />
                        Task
                    </div>
                    <div className="flex flex-row text-md gap-1 items-center text-[#1C78C3]">
                        <GridIcon width={25} height={25} />
                        Grid
                    </div>
                    <div className="flex flex-row text-md gap-1 items-center text-[#1C78C3]">
                        <ListIcon width={25} height={25} stroke={"#1C78C3"} />
                        List
                    </div>
                </div>

                <div className="flex text-md gap-1 items-center text-[#1C78C3] select-none" onClick={handleIsSorted}>
                    {isSorted ? (<SortDownIcon width={25} height={25} stroke="#1C78C3" />) : (<SortUpIcon width={24} height={24} stroke="#1C78C3" />)}
                    Sort
                </div>
            </div>

            {/* Adding Todo */}
            <div className="pt-7">
                <div className="w-full h-[52px] rounded-[3px] flex flex-row justify-between items-center overflow-hidden px-4 bg-white shadow-md border-y-1 border-gray-200 ">
                    <form className="flex w-full gap-5 "
                        action={createTodoList} >
                        < CheckIcon width={24} height={24} className="grow-1" />
                        <input type="text" name="task" className=" w-full outline-hidden text-[#1C78C3] placeholder-[#1C78C3]" placeholder="Add new task" />
                    </form>
                </div>


            </div>


            {/* Display Todos */}
            <div className="pt-2">
                <div className="w-full h-[52px] rounded-[3px] bg-white flex flex-row items-center ">
                    <p className="w-full pl-15 text-start">Title</p>
                    <p className="w-full pr-15 text-end">Importance</p>
                </div>

                <div>
                    <ul>
                        <li className="w-full h-[52px] rounded-[3px] flex flex-row justify-between items-center overflow-hidden px-4 bg-white shadow-md border-y-1 border-gray-200 gap-5">
                            <div className="flex gap-5  w-full">
                                <form className="flex flex-row items-center overflow-hidden"
                                    action={createTodoList} >
                                    < CheckIcon width={24} height={24} className="grow-1" />
                                </form>

                                <form action="" className="w-full">
                                    <input type="hidden" />
                                    <input type="text" name="task" defaultValue={"shopping"} className="w-full" />
                                </form>

                            </div>

                            <form action="" className="pr-18">
                                <FavoriteIcon width={24} height={24} />
                            </form>
                        </li>
                    </ul>

                </div>

                {/* Completed Section */}
                <div className="">
                    <div className="h-[60px] flex gap-2 items-center" onClick={handleShowComplete}>
                        {isShownComplete ? (<ArrowDownIcon width={24} height={24} />) : (<ArrowRightIcon width={24} height={24} />)}

                        <p className="select-none">Complete 2</p>
                    </div>

                    {isShownComplete && (
                        <div>
                            <ul>
                                <li className="w-full h-[52px] rounded-[3px] flex flex-row items-center justify-between overflow-hidden px-2 pl-4 bg-white shadow-md border-y-1 border-gray-200 gap-5">

                                    <div className="flex gap-5 w-full">
                                        <form className="flex flex-row items-center overflow-hidden"
                                            action={createTodoList} >
                                            < CheckIcon width={24} height={24} className="grow-1" />
                                        </form>

                                        <p className="line-through border w-full">Shopping</p>
                                    </div>

                                    <form action="" className="pr-20">
                                        <FavoriteIcon width={24} height={24} />
                                    </form>
                                </li>
                            </ul>
                        </div>


                    )}


                </div>

            </div>




        </section>
    )
}
export default MainWorkPlace