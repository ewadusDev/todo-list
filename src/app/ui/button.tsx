import { deleteTodo } from "@/lib/actions";
import { FaRegTrashAlt } from "react-icons/fa";

type ButtonProp = {
    name: string,
    action?: () => void,
    type: "button" | "submit" | "reset"

}


export const Button = ({ name, type, action }: ButtonProp) => {
    return (
        <button className="bg-[#76DE37] w-full rounded-xl h-10 border border-black shadow-2xl hover:cursor-pointer hover:bg-green-600" type={type} onClick={action}>{name}</button>
    )
}

export const TrashButton = ({ id }: { id: string }) => {

    const removeTodo = deleteTodo.bind(null, id);

    return (

        <form action={removeTodo}>
            <button
                type="submit"
                className="hidden group-hover:block group-hover:cursor-pointer">
                <FaRegTrashAlt />
            </button>
        </form>

    )
}
