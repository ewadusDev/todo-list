"use client"
import { createTodo } from "@/lib/actions";
import { IoMdAddCircleOutline } from "react-icons/io";


const Form = () => {
    return (
        <form className="w-full rounded-2xl flex flex-row border items-center overflow-hidden px-2"
            action={createTodo} >
            <IoMdAddCircleOutline className="grow-1" />
            <input type="text" name="task" className="px-2 py-2 grow-50 outline-hidden" placeholder="Add new task" />
        </form>
    )
}
export default Form