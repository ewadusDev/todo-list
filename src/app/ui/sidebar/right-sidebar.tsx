"use client"

import UploadBox from "./upload-box";
import ColapIcon from "../svg/ColapIcon";
import Trash from "../home/new-trash";
import TaskCheckbox from "../home/new-task-checkbox";
import TaskEdit from "../home/new-task-edit";
import Favorite from "../home/new-favorite";
import { TodoProps } from "@/types/base"


const RightSideBar = ({ isActiveRightSideBar, setIsActiveRightSideBar, selectedData, todos }: { isActiveRightSideBar: boolean, setIsActiveRightSideBar: (value: boolean) => void, selectedData: TodoProps | null, todos: TodoProps[] }) => {
  const handleSetIsActiveRightSideBar = () => setIsActiveRightSideBar(false)

  const targetedTodo = todos.find((todo) => todo.id === selectedData?.id)

  return (
    <aside className={`p-3 ${isActiveRightSideBar ? 'w-[380px]' : 'hidden'}  shadow-md/60 flex flex-col justify-between`} >
      <div >
        <div className="w-full flex gap-2 bg-white px-[11px] py-3 rounded-[3px] items-center">
          {/* Checkbox */}
          <TaskCheckbox todo={targetedTodo} />
          {/* Input */}
          <TaskEdit id={targetedTodo?.id} task={targetedTodo?.task} />
        </div>

        <div className="w-full bg-white px-[11px] py-3 rounded-[3px] mt-7 flex items-center gap-2">
          <Favorite todo={targetedTodo} />
          <p>Add to important</p>
        </div>
        <UploadBox id={targetedTodo?.id} image={targetedTodo?.image} />

      </div>

      <div className="flex justify-between items-center px-5 pb-3">
        <ColapIcon width={30} height={30} onClick={handleSetIsActiveRightSideBar} className="hover:cursor-pointer" />
        <p className="text-sm text-gray-400">Created: 12/12/2025</p>
        <Trash id={selectedData?.id} handleSetIsActiveRightSideBar={handleSetIsActiveRightSideBar} />

      </div>

    </aside>
  )


}
export default RightSideBar