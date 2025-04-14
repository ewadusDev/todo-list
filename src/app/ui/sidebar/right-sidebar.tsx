import ImageIcon from "../svg/ImageIcon"






const RightSideBar = () => {
  return (
    <aside className="absolute right-0 w-[380px] h-[calc(100vh-48px)] shadow-md/60 ">
      <div className="p-3">
        <div className="w-full flex gap-6 bg-white px-[11px] py-3 rounded-[3px]">
          <form
          // action={formAction}
          >
            <input type="hidden" name="id" value={"123123"} />
            <input type="hidden" name="is_done" value={(false).toString()} />
            <input type="checkbox"
            // defaultChecked={todo.is_done}
            // onChange={(e) => e.currentTarget.form?.requestSubmit()}
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

        <div className="w-full bg-white px-[11px] py-3 rounded-[3px] mt-7">
          <form className=" flex gap-6"
          // action={formAction}
          >
            <input type="hidden" name="id" value={"123123"} />
            <input type="hidden" name="is_done" value={(false).toString()} />
            <input type="checkbox"
            // defaultChecked={todo.is_done}
            // onChange={(e) => e.currentTarget.form?.requestSubmit()}
            />
            <p>Add to important</p>
          </form>
        </div>

        <div className="w-full flex gap-5 bg-white px-[11px] py-3 rounded-[3px] mt-1">
          <ImageIcon width={20} height={20} />
          <p>Add Image</p>
        </div>

      </div>
    </aside>
  )
}
export default RightSideBar