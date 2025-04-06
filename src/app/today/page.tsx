
import { mockData } from "@/lib/data";
import TodoList from "../ui/home/todolist";
import { createTodo } from "@/lib/actions";



const Today = async () => {
   await createTodo()
    return (
        <main className="w-[900px] rounded-4xl flex flex-col justify-between">
            <h1 className="text-5xl">Today</h1>
            <div className="grid grid-cols-2 gap-7 w-full h-11/12">
                <TodoList title="Today" data={mockData} className="col-span-2" />
            </div>
        </main>
    )
}
export default Today