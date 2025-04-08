import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { CiCircleList } from "react-icons/ci";
import Link from "next/link";


const Sidenav = () => {
    return (
        <nav className="px-5 flex flex-col w-[300px] justify-between py-7 bg-[#F4F4F4] rounded-4xl">
            <div className="">
                <div className="flex justify-between">
                    <h5>Menu</h5>
                    <RxHamburgerMenu />
                </div>

                <div className="flex flex-col">
                    <div className="relative">
                        <input className="w-full h-10 border rounded-2xl px-2"
                            type="text" placeholder="     Search" />
                        <IoMdSearch className="absolute top-1/2 left-3 -translate-y-1/2" />
                    </div>
                </div>

                <div className="flex flex-col gap-5 mt-5">
                    <h6>Tasks</h6>
                    <ul className="flex flex-col gap-3.5 ">
                        <Link href={"/"}>
                            <li className="flex items-center gap-2 hover:bg-gray-200 hover:cursor-pointer rounded-2xl px-2">
                                <FaArrowRight />Upcoming
                            </li>
                        </Link>
                        {/* <Link href={"/today"}>
                            <li className="flex items-center gap-2 hover:bg-gray-200 hover:cursor-pointer rounded-2xl px-2"><CiCircleList />Today </li>
                        </Link> */}

                    </ul>
                </div>
            </div>

            <div>
                <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-2 hover:bg-gray-200 hover:cursor-pointer rounded-2xl px-2"><FaArrowRight />Setting</li>
                    <li className="flex items-center gap-2 hover:bg-gray-200 hover:cursor-pointer rounded-2xl px-2"><CiCircleList />Singout </li>
                </ul>

            </div>

        </nav>
    )
}
export default Sidenav