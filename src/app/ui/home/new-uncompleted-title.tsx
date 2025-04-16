
type TodoProps = {
    id: string
    is_done: boolean
    task: string
    time: string
}

const UncompletedTitle = ({ unComlpeteTodos }: { unComlpeteTodos: TodoProps[] }) => {
    return (
        <div className="w-full h-[52px] rounded-[3px] bg-white flex flex-row items-center">
            <p className="w-full pl-15 text-start font-semibold">Title ({unComlpeteTodos.length})</p>
            <p className="w-full pr-15 text-end font-semibold">Importance</p>
        </div>
    )
}
export default UncompletedTitle