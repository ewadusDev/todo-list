

import { deleteTodo } from "@/lib/actions";
import TrashIcon from "../svg/TrashIcon";


const Trash = ({ id, handleSetIsActiveRightSideBar }: { id?: string, handleSetIsActiveRightSideBar: () => void }) => {
    if (id === undefined) return (<>Not found id</>)
    const removeTodo = deleteTodo.bind(null, id);

    return (

        <form action={removeTodo}>
            <button
                type="submit"
                className="hover:cursor-pointer">
                <TrashIcon width={28} height={28}
                    onClick={() => handleSetIsActiveRightSideBar()}
                />
            </button>
        </form>

    )
}
export default Trash