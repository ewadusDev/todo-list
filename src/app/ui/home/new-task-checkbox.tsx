"use client"

import { updateCheckbox, State } from "@/lib/actions"
import { Checkbox } from "@mui/material"
import { useActionState } from "react"
import CheckIcon from "../svg/CheckIcon"
import CheckedIcon from "../svg/CheckedIcon"
import { TodoProps } from "@/types/base"

const TaskCheckbox = ({ todo }: { todo: TodoProps | undefined }) => {
    const initialState: State = { errors: {}, message: '' }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, formAction] = useActionState(updateCheckbox, initialState)

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.currentTarget.form?.requestSubmit()
    }


    if (todo === undefined) return (<>Not found todo data</>)
    return (
        <form action={formAction}>
            <input type="hidden" name="id" value={todo.id} />
            <input type="hidden" name="is_done" value={(!todo.is_done).toString()} />
            < Checkbox
                icon={< CheckIcon width={24} height={24} />}
                checkedIcon={<CheckedIcon fill="#1C78C3" width={24} height={24} />}
                checked={todo.is_done}
                onChange={handleOnChange}
            />
        </form>
    )
}
export default TaskCheckbox