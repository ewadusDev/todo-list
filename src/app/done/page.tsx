"use client"
import { useState } from "react";




const DonePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 text-lg font-bold">Sidebar Menu</div>
        <ul className="p-4 space-y-2">
          <li>Dashboard</li>
          <li>Settings</li>
          <li>Profile</li>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )} */}

      {/* Main content */}
      <div className="flex-1 p-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Toggle Sidebar
        </button>
        <p className="mt-4">Main content goes here...</p>
      </div>
    </div>
  );
}
export default DonePage