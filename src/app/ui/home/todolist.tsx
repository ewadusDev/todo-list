import { getTodos } from "@/lib/actions";
import TaskList from "./task-list";
import Form from "./input-form";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";



type TodoListProps = {
    title: string
    data?: { id: string, is_done: boolean, task: string }[]
    className?: string,
    query?: string
}

const TodoList = async ({ title, className, query }: TodoListProps) => {
    const session = await getServerSession(authOptions)

    if (!session || !session.user?.id) {
        return (
            <section className={`w-full ${className} rounded-4xl p-5 shadow-md border`}>
                <h2 className="text-2xl font-semibold text-red-500">You must be signed in to view tasks</h2>
            </section>
        );
    }

    const todoLists = await getTodos(query || '', session!.user!.id);

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