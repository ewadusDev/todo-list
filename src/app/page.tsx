import MainWorkPlace from "./ui/home/workplace";
import Navbar from "./ui/navbar";
import LeftSidebar from "./ui/sidebar/left-sidebar";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next"
import { getTodos } from "@/lib/actions";


export default async function Home(props: { searchParams?: Promise<{ query: string }> }) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''
  const session = await getServerSession(authOptions)


  if (!session || !session.user?.id) {
    return (
      <main>
        <Navbar />
        <section className="relative h-[calc(100vh-48px)] bg-[#F5F5F5] flex flex-row">
          <h2 className="text-2xl font-semibold text-red-500">You must be signed in to view tasks</h2>
        </section>
      </main >

    )
  }

  const fetchTodos = await getTodos(query || '', session!.user!.id)

  // console.log("fetchTodos", fetchTodos)

  return (
    <main>
      <Navbar />
      <div className="relative h-[calc(100vh-48px)] bg-[#F5F5F5] flex flex-row">
        <LeftSidebar />
        <MainWorkPlace todos={fetchTodos} title="Tasks" icon={"houseIcon"} />
      </div>
    </main>
  );
}
