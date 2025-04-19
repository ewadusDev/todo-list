
import Navbar from "../ui/navbar"
import LeftSidebar from "../ui/sidebar/left-sidebar"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { getDoneTodos } from "@/lib/actions"
import MainWorkPlace from "../ui/home/workplace"


const DonePage = async (props: { searchParams?: Promise<{ query: string }> }) => {
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


  const fetchTodos = await getDoneTodos(query || '', session!.user!.id)

  return (
    <main>
      <Navbar />
      <div className="relative h-[calc(100vh-48px)] bg-[#F5F5F5] flex flex-row">
        <LeftSidebar />
        <MainWorkPlace todos={fetchTodos} title="Done" icon={"doneIcon"} />
      </div>
    </main>
  )
}
export default DonePage