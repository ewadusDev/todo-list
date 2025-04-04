import Image from "next/image"
import ImageCover from "../../../public/coverpage.png";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex h-screen justify-center items-center bg-gray-200">
            <div className="flex gap-5">
                <div className="relative w-[450px] h-[600px] rounded-3xl overflow-hidden">
                    <Image src={ImageCover} fill alt="Image Cover" className="object-cover" />
                </div>
            </div>
            {children}
        </main>
    )

}