import Favorite from "./new-favorite"
import TaskCheckbox from "./new-task-checkbox"
import { TodoProps } from "@/types/base"


const CompletedLists = ({ completedTodos, setSelectedData, setIsActiveRightSideBar, isGrid }: { completedTodos: TodoProps[], setSelectedData: (value: TodoProps | null) => void, setIsActiveRightSideBar: (data: boolean) => void, isGrid: boolean }) => {
    const handleClick = (todo: TodoProps) => {
        setSelectedData(todo)
        setIsActiveRightSideBar(true)
    }

    if (isGrid) return (
        <ul className="grid grid-cols-2 gap-2" >
            {completedTodos.map((todo) => {
                return (
                    <li key={todo.id} className=" h-[52px] rounded-[3px] flex flex-row justify-between items-center overflow-hidden px-4 bg-white shadow-md border-y-1 border-gray-200 gap-5 hover:bg-gray-100 pr-20"
                        onClick={() => handleClick(todo)} >
                        <div className="flex gap-5 ">
                            <TaskCheckbox todo={todo} />
                            <p className="line-through w-full">{todo.task}</p>
                        </div>
                        <Favorite todo={todo} />
                    </li>
                )
            })}
        </ul>
    )

    return (
        <ul className="h-[40px]">
            {completedTodos.map((todo) => {
                return (
                    <li key={todo.id} className="w-full h-[52px] rounded-[3px] flex flex-row items-center justify-between overflow-hidden px-2 pl-4 bg-gray-100 shadow-md border-y-1 border-gray-200 gap-5 hover:bg-gray-200 pr-20"
                        onClick={() => handleClick(todo)}
                    >
                        <div className="flex gap-5 w-full items-center">
                            <TaskCheckbox todo={todo} />
                            <p className="line-through w-full">{todo.task}</p>
                        </div>
                        <Favorite todo={todo} />
                    </li>
                )
            })}

        </ul>
    )
}
export default CompletedLists