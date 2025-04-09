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

    return (
        <section className={`w-full ${className}  rounded-4xl p-5 shadow-md border`}>
            <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-semibold">{title}</h2>
                <Form />
                <TaskList data={todoLists} />
            </div>
        </section>
    )
}
export default TodoList