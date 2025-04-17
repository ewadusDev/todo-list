"use client"
import { updateTask } from "@/lib/actions"
import { useActionState } from "react"


const TaskEdit = ({ id, task }: { id: string | undefined, task: string | undefined }) => {
    const [state, formAction] = useActionState(updateTask, { errors: {}, message: '' })

    if (id === undefined || task === undefined) return (<>Not found id and task</>)

    return (
        <form action={formAction} className="w-full flex items-center">
            <p className="hidden">{state.message}</p>
            <input type="hidden" name="id" value={id} />
            <input type="text" name="task" defaultValue={task} className="w-full" />
        </form>
    )
}
export default TaskEdit