"use client"

import FavoriteIcon from "../svg/FavoriteIcon";
import Checkbox from '@mui/material/Checkbox';
import UploadBox from "./upload-box";
import ColapIcon from "../svg/ColapIcon";
import Trash from "../home/new-trash";
import TaskCheckbox from "../home/new-task-checkbox";
import TaskEdit from "../home/new-task-edit";


type TodoProps = {
  id: string
  is_done: boolean
  task: string
  time: string
}


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


          <TaskEdit id={targetedTodo?.id} task={targetedTodo?.task}/>

        </div>

        <div className="w-full bg-white px-[11px] py-3 rounded-[3px] mt-7 flex items-center gap-2">
          <form
          // action={formAction}
          >
            <input type="hidden" name="id" value={"123123"} />
            <input type="hidden" name="is_done" value={(false).toString()} />
            <Checkbox
              icon={<FavoriteIcon width={24} height={24} />}
              checkedIcon={<FavoriteIcon fill="#1C78C3" width={24} height={24} />}
            // defaultChecked={todo.is_done}
            // onChange={(e) => e.currentTarget.form?.requestSubmit()}
            />
          </form>
          <p>Add to important</p>

        </div>

        <UploadBox id={"13"} />

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