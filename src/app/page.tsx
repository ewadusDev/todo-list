import { mockData } from "@/lib/data";
import TodoList from "./ui/home/todolist";


export default function Home() {
  return (
    <main className="w-[900px]">
      <h1 className="text-5xl">Upcoming</h1>
      <div className="h-full w-full flex flex-col items-center justify-center">
        {/* Main Welcome Content*/}

        {/* <div className=" flex flex-col items-center justify-center px-28 gap-10">
          <h1 className="text-5xl">Welcome to ToDoPy</h1>
          <p>A to-do app is a simple, user-friendly digital tool designed to help individuals and teams organize tasks and manage their daily activities efficiently. Users can create, edit, and prioritize tasks, set deadlines or reminders, categorize items, and track their progress, all within an intuitive and accessible interface. These apps are essential for improving productivity, reducing stress, and ensuring that important responsibilities are not forgotten.</p>
          <button className="bg-green-400 px-5 py-2 rounded-2xl mt-5 hover:bg-green-500">Go to tasks</button>
        </div> */}

        {/*  todo overall */}
        <div className="grid grid-cols-2 gap-7 w-[700px]">
          <TodoList title="Today" data={mockData} className="col-span-2" />
          <TodoList title="Tomorrow" data={mockData} />
          <TodoList title="This Week" data={mockData} />
        </div>

      </div>

    </main>
  );
}
