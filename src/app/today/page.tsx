

import TodoList from "../ui/home/todolist";


const Today = async () => {

    return (
        <main className="w-[900px] rounded-4xl flex flex-col justify-between">
            <h1 className="text-5xl">Today</h1>
            <div className="grid grid-cols-2 gap-7 w-full h-11/12">
                <TodoList title="Today" className="col-span-2" />
            </div>
        </main>
    )
}
export default Today