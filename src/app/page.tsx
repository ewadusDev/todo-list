import TodoList from "./ui/home/todolist";
import Navbar from "./ui/navbar";
import LeftSidebar from "./ui/sidebar/left-sidebar";
import RightSideBar from "./ui/sidebar/right-sidebar";
import Sidenav from "./ui/sidebar/sidenav";



export default async function Home(props: { searchParams?: Promise<{ query: string }> }) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''

  return (
    <main className="relativ h-screen bg-[#F5F5F5]">
      <Navbar />
      <LeftSidebar />

      {/* <Sidenav/> */}


      <div className=" w-full flex flex-col items-center justify-center">

        {/* todo overall
        <div className="grid grid-cols-2 gap-7 w-[700px]">
          <TodoList title="" className="col-span-2 overflow-scroll" query={query} />
        </div> */}

      </div>

    </main>
  );
}
