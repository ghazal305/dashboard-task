"use client";

import Link from "next/link";
import { Fragment } from "react";
import { HiHome, HiTable, HiChartBar, HiLogout } from "react-icons/hi";

export default function Sidebar({ open, onClose }) {
  const nav = [
    { href: "/dashboard", label: "Home", icon: <HiHome /> },
    { href: "/dashboard/table", label: "Table", icon: <HiTable /> },
    { href: "/dashboard/charts", label: "Charts", icon: <HiChartBar /> },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-full z-40 transform bg-white border-r p-4 transition-transform duration-200
        ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64`}
      aria-hidden={!open && undefined}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <button
          onClick={onClose}
          className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-gray-100"
          aria-label="Close sidebar"
        >
          ✕
        </button>
      </div>

      <nav className="space-y-1">
        {nav.map((n) => (
          <Link
            href={n.href}
            key={n.href}
            onClick={() => onClose && onClose()}
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100"
          >
            <span className="text-xl">{n.icon}</span>
            <span className="text-sm font-medium">{n.label}</span>
          </Link>
        ))}

        <div className="border-t mt-4 pt-4">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100">
            <span className="text-xl">
              <HiLogout />
            </span>
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </nav>
    </aside>
  );
}
