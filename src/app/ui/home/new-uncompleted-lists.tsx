import Favorite from "./new-favorite"
import TaskCheckbox from "./new-task-checkbox"
import TaskEdit from "./new-task-edit"
import { TodoProps } from "@/types/base"


const UncompletedLists = ({ unComlpeteTodos, setSelectedData, setIsActiveRightSideBar }: { unComlpeteTodos: TodoProps[], setSelectedData: (value: TodoProps | null) => void, setIsActiveRightSideBar: (data: boolean) => void }) => {

    const handleClick = (todo: TodoProps) => {
        setSelectedData(todo)
        setIsActiveRightSideBar(true)
    }

    return (
        <ul>
            {unComlpeteTodos.map((todo) => {
                return (
                    <li key={todo.id} className="w-full h-[52px] rounded-[3px] flex flex-row justify-between items-center overflow-hidden px-4 bg-white shadow-md border-y-1 border-gray-200 gap-5 hover:bg-gray-100"
                        onClick={() => handleClick(todo)}
                    >
                        <div className="flex gap-5 w-full">
                            <TaskCheckbox todo={todo} />
                            <TaskEdit id={todo.id} task={todo.task} />
                        </div>
                        <Favorite todo={todo} />
                    </li>
                )
            })}
        </ul>
    )
}
export default UncompletedLists