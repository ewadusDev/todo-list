"use client"
import { updateTask } from "@/lib/actions"
import { useActionState } from "react"


const TaskEdit = ({ id, task }: { id: string, task: string }) => {
    const [state, formAction] = useActionState(updateTask, { errors: {}, message: '' })


    return (
        <form action={formAction}>
            <p className="hidden">{state.message}</p>
            <input type="hidden" name="id" value={id} />
            <input type="text" name="task" defaultValue={task} />
        </form>
    )
}
export default TaskEdit