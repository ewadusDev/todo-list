

import TodoList from "../ui/home/todolist";


const Today = async () => {

    return (
        <main className="w-[900px]">
            <h1 className="text-5xl">Today</h1>
            <div className="h-full w-full flex flex-col items-center justify-center mt-5">
                <div className="grid grid-cols-2 gap-7 w-[700px]">
                    <TodoList title="" className="col-span-2 h-10/12 overflow-scroll" />
                </div>
            </div>

        </main>
    )
}
export default Today