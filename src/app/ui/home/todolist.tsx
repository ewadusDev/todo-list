
import { createTodo, getTodos } from "@/lib/actions";
import { IoMdAddCircleOutline } from "react-icons/io";
import TaskList from "./task-list";
import { TrashButton } from "../button";


type TodoListProps = {
    title: string
    data?: { id: string, is_done: boolean, task: string }[]
    className?: string
}


const TodoList = async ({ title, className }: TodoListProps) => {
    const todoLists = await getTodos()

    return (
        <section className={`w-full ${className}  rounded-4xl p-5 shadow-md border`}>
            <div className="flex flex-col gap-5">
                <h2 className="text-4xl font-semibold">{title}</h2>
                <form className="w-full rounded-2xl flex flex-row border items-center overflow-hidden px-2"
                    action={createTodo} >
                    <IoMdAddCircleOutline className="grow-1" />
                    <input type="text" name="task" className=" px-2 py-2 grow-50 outline-hidden" placeholder="Add new task" />
                </form>
                <ul>
                    {todoLists?.map((todo) => {
                        return (
                            <li key={todo.id} className="group border-b-2 px-2 py-3 flex justify-between items-center ">
                                <div className="flex gap-5">
                                    <TaskList todo={todo} />
                                    <p>{todo.task}</p>
                                </div>
                                <TrashButton id={todo.id} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
export default TodoList