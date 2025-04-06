import { IoMdAddCircleOutline } from "react-icons/io";


type TodoListProps = {
    title: string
    data?: { isDone: boolean, task: string }[]
    className?: string
}


const TodoList = ({ title, data, className }: TodoListProps) => {
    return (
        <section className={`w-full ${className}  rounded-4xl p-5 shadow-md border`}>
            <div className="flex flex-col gap-5">
                <h2 className="text-4xl font-semibold">{title}</h2>
                <div className="w-full rounded-2xl flex flex-row border items-center overflow-hidden px-2">
                    <IoMdAddCircleOutline className="grow-1" />
                    <input type="text" className=" px-2 py-2 grow-50 outline-hidden" placeholder="Add new task" />
                </div>
                <ul>
                    {data?.map((item, index) => {
                        return (
                            <li key={index} className="border-b-2 px-2 py-3">
                                <span><input type="checkbox" checked={item.isDone} readOnly /></span> {item.task}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
export default TodoList