import MainWorkPlace from "./ui/home/main-workplace";
import TodoList from "./ui/home/todolist";
import Navbar from "./ui/navbar";
import LeftSidebar from "./ui/sidebar/left-sidebar";
import RightSideBar from "./ui/sidebar/right-sidebar";


export default async function Home(props: { searchParams?: Promise<{ query: string }> }) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''

  return (
    <main>
      <Navbar />
      <div className="relative h-[calc(100vh-48px)] bg-[#F5F5F5] flex flex-row">
        <LeftSidebar />
        <MainWorkPlace />
        <RightSideBar />
      </div>

      {/* <RightSideBar /> */}

      {/* <div className="border"> */}
      {/* <div className="grid grid-cols-2 gap-7 w-[700px]">
          <TodoList title="" className="col-span-2 overflow-scroll" query={query} />
        </div> */}

      {/* </div> */}

    </main>
  );
}
