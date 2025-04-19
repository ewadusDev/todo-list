import ArrowDownIcon from "../svg/ArrowDownIcon"
import ArrowRightIcon from "../svg/ArrowRightIcon"
import { TodoProps } from "@/types/base"

const CompletedTitle = ({ isShownComplete, completedTodos, handleShowComplete }: { isShownComplete: boolean, completedTodos: TodoProps[], handleShowComplete: () => void }) => {
    return (
        <div className="h-[60px] flex gap-2 items-center" onClick={handleShowComplete}>
            {isShownComplete ? (<ArrowDownIcon width={24} height={24} />) : (<ArrowRightIcon width={24} height={24} />)}
            <p className="select-none font-semibold">Completed ({completedTodos.length})</p>
        </div>
    )
}
export default CompletedTitle