"use client"
import { createTodo } from "@/lib/actions";
import { useSession } from "next-auth/react";
import { IoMdAddCircleOutline } from "react-icons/io";



const Form = () => {
    const { data: session } = useSession()
    const createTodoList = createTodo.bind(null, session?.user.id)

    return (
        <form className="w-full rounded-2xl flex flex-row border items-center overflow-hidden px-2"
            action={createTodoList} >
            <IoMdAddCircleOutline className="grow-1" />

            <input type="text" name="task" className="px-2 py-2 grow-50 outline-hidden" placeholder="Add new task" />
        </form>
    )
}
export default Form