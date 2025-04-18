import { Checkbox } from "@mui/material"
import FavoriteIcon from "../svg/FavoriteIcon"
import { useActionState } from "react"
import { State, updateFavorite } from "@/lib/actions"
import { TodoProps } from "@/types/base"



const Favorite = ({ todo }: { todo?: TodoProps }) => {
    const initialState: State = { errors: {}, message: '' }
    const [state, formAction] = useActionState(updateFavorite, initialState)

    if (todo === undefined) return (<>Not found todo data</>)

    return (
        <form className=""
            action={formAction} >
            <input type="hidden" name="id" value={todo.id} />
            <input type="hidden" name="is_favorite" value={(!todo.is_favorite).toString()} />
            <Checkbox
                icon={<FavoriteIcon width={24} height={24} />}
                checkedIcon={<FavoriteIcon fill="#1C78C3" width={24} height={24} />}
                checked={todo.is_favorite}
                onChange={(e) => e.currentTarget.form?.requestSubmit()}
            />
        </form>
    )
}
export default Favorite