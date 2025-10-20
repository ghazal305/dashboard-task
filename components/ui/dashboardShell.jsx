"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

export default function DashboardShell({ children }) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((s) => !s);
  }
  function close() {
    setOpen(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 md:grid md:grid-cols-[16rem_1fr]">
        <aside className="hidden md:block bg-white border-r">
          <div className="h-full">
            <Sidebar open={true} onClose={() => {}} />
          </div>
        </aside>

        <div className="flex flex-col">
          <Topbar onToggleSidebar={toggle} />
          <main className="p-6 flex-1">
            {children}
          </main>
        </div>
      </div>

      <div className={`fixed inset-0 z-40 md:hidden pointer-events-auto ${open ? "" : "pointer-events-none"}`}>
        <div
          onClick={close}
          className={`fixed inset-0 bg-black/30 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          aria-hidden="true"
        />
        <div className={`fixed left-0 top-0 h-full w-64 bg-white shadow transform transition-transform ${open ? "translate-x-0" : "-translate-x-full"}`}>
          <Sidebar open={open} onClose={close} />
        </div>
      </div>
    </div>
  );
}
