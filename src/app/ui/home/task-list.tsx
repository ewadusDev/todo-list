
import TaskCheckbox from "./task-checkbox"
import { TrashButton } from "../button"





const TaskList = ({ data }: { data: { id: string, is_done: boolean, task: string }[] }) => {

    return (
        <ul>
            {data?.map((todo) => {
                return (
                    <li key={todo.id} className="group border-b-2 px-2 py-3 flex justify-between items-center ">
                        <div className="flex gap-5">
                            <TaskCheckbox todo={todo} />
                            <p>{todo.task}</p>
                        </div>
                        <TrashButton id={todo.id} />
                    </li>
                )
            })}
        </ul>
    )

}

export default TaskList

