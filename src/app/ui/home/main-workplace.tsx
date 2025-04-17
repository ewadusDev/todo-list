"use client"

import { useEffect, useState } from "react";
import TopMenu from "./new-top-menu";
import TaskAddForm from "./new-task-add-form";
import CompletedTitle from "./new-completed-title";
import CompletedLists from "./new-completed-lists";
import UncompletedTitle from "./new-uncompleted-title";
import UncompletedLists from "./new-uncompleted-lists";
import RightSideBar from "../sidebar/right-sidebar";


type TodoProps = {
    id: string
    is_done: boolean
    task: string
    time: string
}

const sortAsc = (items: TodoProps[]) => [...items].sort((a, b) => Number(a.time) - Number(b.time))
const sortDesc = (items: TodoProps[]) => [...items].sort((a, b) => Number(b.time) - Number(a.time))


const MainWorkPlace = ({ todos }: { todos: TodoProps[] }) => {
    const [isShownComplete, setIsShownComplete] = useState<boolean>(true)
    const [isSorted, setIsSorted] = useState<boolean>(false)
    const [lists, setLists] = useState<TodoProps[]>(sortDesc(todos))
    const unComlpeteTodos = lists.filter((todo) => todo.is_done !== true)
    const completedTodos = lists.filter((todo) => todo.is_done === true)
    const [isActiveRightSideBar, setIsActiveRightSideBar] = useState<boolean>(false)
    const [selectedData, setSelectedData] = useState<TodoProps | null>(null)

    const handleShowComplete = () => setIsShownComplete(!isShownComplete)

    const handleIsSorted = () => {
        const sorted = isSorted ? sortDesc(todos) : sortAsc(todos)
        setLists(sorted)
        setIsSorted(!isSorted)
    }


    // Update list when data or sort state changes
    useEffect(() => {
        const sorted = isSorted ? sortAsc(todos) : sortDesc(todos)
        setLists(sorted)
    }, [isSorted, todos])


    return (
        <>
            <section className="w-full h-full flex flex-col pt-5 px-14"
            >
                <TopMenu handleIsSorted={handleIsSorted} isSorted={isSorted} />
                {/* Adding Todo */}
                <TaskAddForm />
                {/* Display Todos */}

                <div className="pt-2 h-full overflow-y-scroll">
                    <UncompletedTitle unComlpeteTodos={unComlpeteTodos} />
                    <div className="">
                        <UncompletedLists unComlpeteTodos={unComlpeteTodos} setSelectedData={setSelectedData} setIsActiveRightSideBar={setIsActiveRightSideBar} />
                    </div>
                    {/* Completed Section */}
                    <div>
                        <CompletedTitle isShownComplete={isShownComplete} completedTodos={completedTodos} handleShowComplete={handleShowComplete} />
                        {isShownComplete && (
                            <div>
                                <CompletedLists completedTodos={completedTodos} setIsActiveRightSideBar={setIsActiveRightSideBar} setSelectedData={setSelectedData} />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Right side bar */}
            <RightSideBar isActiveRightSideBar={isActiveRightSideBar} setIsActiveRightSideBar={setIsActiveRightSideBar} selectedData={selectedData} todos={todos} />
        </>

    )
}
export default MainWorkPlace