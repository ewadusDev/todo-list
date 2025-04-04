import Image from "next/image";
import ImageCover from "../../../public/coverpage.png";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex items-center justify-center h-screen bg-gray-200">
            <div className="flex gap-10 p-10 bg-white rounded-3xl shadow-lg">
                {/* Left Side - Image */}
                <div className="relative w-[450px] h-[600px] rounded-3xl overflow-hidden">
                    <Image src={ImageCover} alt="Cover Page" fill className="object-cover" />
                </div>
                {/* Right Side - Content */}
                {children}
            </div>
        </main>
    );
}
