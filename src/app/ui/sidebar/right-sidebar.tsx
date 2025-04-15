"use client"

import CheckedIcon from "../svg/CheckedIcon";
import CheckIcon from "../svg/CheckIcon";
import FavoriteIcon from "../svg/FavoriteIcon";
import Checkbox from '@mui/material/Checkbox';;
import UploadBox from "./upload-box";
// import { updateTodo } from "@/lib/actions";
import ColapIcon from "../svg/ColapIcon";
import TrashIcon from "../svg/TrashIcon";
import { useState } from "react";


const RightSideBar = () => {
  const [isShown, setIsShown] = useState<boolean>(true)

  const handleIsShown = () => setIsShown(!isShown)




  return (

    // <aside className="  shadow-md/60 flex flex-col justify-between">

    <aside className={`p-3  ${isShown ? 'w-[380px]' : 'hidden'} shadow-md/60 flex flex-col justify-between`} >
      <div >
        <div className="w-full flex gap-2 bg-white px-[11px] py-3 rounded-[3px] items-center">
          <form
          // action={formAction}
          >
            <input type="hidden" name="id" value={"123123"} />
            <input type="hidden" name="is_done" value={(false).toString()} />
            <Checkbox
              // defaultChecked={todo.is_done}
              // onChange={(e) => e.currentTarget.form?.requestSubmit()}
              icon={<CheckIcon width={24} height={24} />}
              checkedIcon={<CheckedIcon fill="#1C78C3" width={24} height={24} />}

            />

          </form>

          <form
            // action={formAction}
            className="w-full"
          >
            <p className="hidden">
              {/* {state.message} */}

            </p>
            <input type="hidden" name="id"
            // value={id} 
            />
            <input name="task" className="w-full outline-none" maxLength={40}
              // defaultValue={task} 
              defaultValue={"Shpping"}
            />
          </form>

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

      <div className="flex justify-between px-5 pb-3">
        <ColapIcon width={24} height={24} onClick={handleIsShown} />
        <p>Created: 12/12/2025</p>
        <TrashIcon width={24} height={24} />

      </div>

    </aside>
  )


}
export default RightSideBar