import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "./SessionWrapper";


export const metadata: Metadata = {
  title: "To-Do List",
  description: "Created by ruknakub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        {/* <body className="flex justify-center h-screen p-3 gap-5"> */}
        <body className="bg-[#F5F5F5]">
          {/* <Sidenav /> */}
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
