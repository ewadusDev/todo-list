import Image from "next/image"
import ImageCover from "../../../public/coverpage.png";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex justify-center items-center h-screen bg-gray-200">
            <div className="flex gap-5">
                <div className="relative w-[450px] h-[600px] rounded-3xl overflow-hidden">
                    <Image src={ImageCover} alt="Image Cover" fill className="object-cover" />
                </div>

                {children}

            </div>
        </main>
    )

}