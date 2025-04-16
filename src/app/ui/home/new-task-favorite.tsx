"use client"

import { updateCheckbox, State } from "@/lib/actions"
import { Checkbox } from "@mui/material"
import { useActionState, useEffect, useState } from "react"
import FavoriteIcon from "../svg/FavoriteIcon"


const TaskFavorite = ({ todo }: { todo: { id: string, task: string, is_done: boolean } }) => {
    const initialState: State = { errors: {}, message: '' }
    const [state, formAction] = useActionState(updateCheckbox, initialState)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [stateMessage, setStateMessage] = useState<string>("")


    useEffect(() => {
        setStateMessage(state.message || '')

        if (state.message) {
            const timeout = setTimeout(() => {
                setStateMessage('')
            }, 1000)

            return () => clearTimeout(timeout)
        }
    }, [state.message])


    return (
        <form action={"implement later"} className="pr-16">
            <input type="hidden" name="id" value={todo.id} />
            <input type="hidden" name="is_done" value={(!todo.is_done).toString()} />
            < Checkbox
                icon={< FavoriteIcon width={24} height={24} />}
                checkedIcon={<FavoriteIcon fill="#1C78C3" width={24} height={24} />}
                // defaultChecked={todo.is_done}
                onChange={(e) => e.currentTarget.form?.requestSubmit()}
            />
        </form>
    )
}
export default TaskFavorite