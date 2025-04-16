import { Checkbox } from "@mui/material"
import CheckIcon from "../svg/CheckIcon"
import { createTodo } from "@/lib/actions"
import { useSession } from "next-auth/react"



const TaskAddForm = () => {
    const { data: session } = useSession()
    const createTodoList = createTodo.bind(null, session?.user.id)
    return (
        <div className="pt-7">
            <div className="w-full h-[52px] rounded-[3px] flex flex-row justify-between items-center overflow-hidden px-4 bg-white shadow-md border-y-1 border-gray-200 ">
                <form className="flex w-full gap-5 "
                    action={createTodoList} >
                    <Checkbox
                        disabled
                        icon={< CheckIcon width={24} height={24} />}
                        className="grow-1"
                    />
                    <input type="text" name="task" className=" w-full outline-hidden text-[#1C78C3] placeholder-[#1C78C3]" placeholder="Add new task" />
                </form>
            </div>
        </div>
    )
}
export default TaskAddForm