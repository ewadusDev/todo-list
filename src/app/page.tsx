
import TodoList from "./ui/home/todolist";

export default async function Home(props: { searchParams?: Promise<{ query: string }> }) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''

  return (
    <main className="w-[900px] ">
      <h1 className="text-5xl">Upcoming</h1>
      <div className=" w-full flex flex-col items-center justify-center">     

        {/*  todo overall */}
        <div className="grid grid-cols-2 gap-7 w-[700px]">
          <TodoList title="" className="col-span-2 overflow-scroll" query={query} />
          {/* <TodoList title="Tomorrow" data={mockData} />
          <TodoList title="This Week" data={mockData} /> */}
        </div>

      </div>

    </main>
  );
}
