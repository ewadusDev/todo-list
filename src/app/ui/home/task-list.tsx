"use client"

import TaskCheckbox from "./task-checkbox"
import { TrashButton } from "../button"
import { useState, useEffect } from "react"


type todoProps = {
    id: string
    is_done: boolean
    task: string
    time: string
}



const TaskList = ({ data }: { data: todoProps[] }) => {
    const [isSorted, setIsSorted] = useState<boolean>(false)
    const sortAsc = (items: todoProps[]) => [...items].sort((a, b) => Number(a.time) - Number(b.time))
    const sortDesc = (items: todoProps[]) => [...items].sort((a, b) => Number(b.time) - Number(a.time))
    const [lists, setLists] = useState<todoProps[]>(sortDesc(data)) // default initial

    const handleToggle = () => {
        const sorted = isSorted ? sortDesc(data) : sortAsc(data)
        setLists(sorted)
        setIsSorted(!isSorted)
    }

    // Update list when data or sort state changes
    useEffect(() => {
        const sorted = isSorted ? sortAsc(data) : sortDesc(data)
        setLists(sorted)
    }, [data, isSorted])


    return (
        <div>
            <div className="flex justify-end">
                <button className="border w-fit py-2 px-5 rounded-xl hover:cursor-pointer" onClick={handleToggle}>{isSorted ? "เก่าสุด" : "ล่าสุด"}</button>
            </div>
            <ul >
                {lists?.map((todo) => {
                    return (
                        <li key={todo.id} className="group border-b-2 px-2 py-3 flex justify-between items-center ">
                            <div className="flex gap-5">
                                <TaskCheckbox todo={todo} />
                                <p>{todo.task}</p>
                            </div>
                            <TrashButton id={todo.id} />
                        </li>
                    )
                })}
            </ul>
        </div>

    )

}

export default TaskList

