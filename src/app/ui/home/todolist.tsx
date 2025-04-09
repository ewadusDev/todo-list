
import { getTodos } from "@/lib/actions";
import TaskList from "./task-list";
import Form from "./input-form";

type TodoListProps = {
    title: string
    data?: { id: string, is_done: boolean, task: string }[]
    className?: string
}

const TodoList = async ({ title, className }: TodoListProps) => {
    const todoLists = await getTodos()
    const sortedData = todoLists.sort((a, b) => Number(b.time) - Number(a.time))

    return (
        <section className={`w-full ${className}  rounded-4xl p-5 shadow-md border`}>
            <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-semibold">{title}</h2>
                <Form />
                <div className="flex justify-end">
                    <button className="border w-fit py-2 px-5 rounded-xl">Sorting</button>
                </div>
                <TaskList data={sortedData} />
            </div>
        </section>
    )
}
export default TodoList