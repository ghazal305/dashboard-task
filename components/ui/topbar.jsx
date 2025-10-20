"use client";

import { HiMenu } from "react-icons/hi";

export default function Topbar({ onToggleSidebar, title = "Dashboard" }) {
  return (
    <header className="w-full bg-white border-b p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 md:hidden"
          aria-label="Toggle sidebar"
        >
          <HiMenu className="text-xl" />
        </button>

        <h1 className="text-lg font-semibold">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-sm">Mohamed</div>
        <div className="w-8 h-8 rounded-full bg-gray-200" />
      </div>
    </header>
  );
}
