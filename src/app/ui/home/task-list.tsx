"use client"

import { updateCheckbox, type State } from "@/lib/actions"
import { useActionState, useEffect, useState } from "react"



const TaskList = ({ todo }: { todo: { id: string, task: string, is_done: boolean } }) => {    const initialState: State = { errors: {}, message: '' }
    const [state, formAction] = useActionState(updateCheckbox, initialState)
    const [stateMessage, setStateMessage] = useState<string>("")

    useEffect(() => {
        setStateMessage(state.message || '')

        if (state.message) {
            const timeout = setTimeout(() => {
                setStateMessage('')
            }, 1000)

            return () => clearTimeout(timeout) // cleanup if unmounted
        }
    }, [state.message])



    return (

        <form action={formAction}>
            {stateMessage && <p> {stateMessage}</p>}
            <input type="hidden" name="id" value={todo.id} />
            <input type="hidden" name="is_done" value={(!todo.is_done).toString()} />
            <input type="checkbox"
                defaultChecked={todo.is_done}
                onChange={(e) => e.currentTarget.form?.requestSubmit()}
            />
        </form>

    )
}
export default TaskList