import TaskCheckbox from "./new-task-checkbox"
import TaskFavorite from "./new-task-favorite"

type TodoProps = {
    id: string
    is_done: boolean
    task: string
    time: string
}


const CompletedLists = ({ completedTodos, setSelectedData, handleIsActiveRightSideBar }: { completedTodos: TodoProps[], setSelectedData: (value: TodoProps | null) => void, handleIsActiveRightSideBar: () => void }) => {
    const handleClick = (todo: TodoProps) => {
        setSelectedData(todo)
        handleIsActiveRightSideBar()
    }

    return (
        <ul className="h-[40px]">
            {completedTodos.map((todo) => {
                return (
                    <li key={todo.id} className="w-full h-[52px] rounded-[3px] flex flex-row items-center justify-between overflow-hidden px-2 pl-4 bg-gray-100 shadow-md border-y-1 border-gray-200 gap-5 hover:bg-gray-200 pr-4"
                        onClick={() => handleClick(todo)}
                    >
                        <div className="flex gap-5 w-full items-center">
                            <TaskCheckbox todo={todo} />
                            <p className="line-through w-full">{todo.task}</p>
                        </div>
                        <TaskFavorite todo={todo} />
                    </li>
                )
            })}

        </ul>
    )
}
export default CompletedLists