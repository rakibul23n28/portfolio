"use client"; // 👈 This one needs to be a client component

import { useState } from "react";
import NavLinks from "../NavLinks";

export default function MenuToggle() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md dark:bg-gray-800 z-50">
          <NavLinks />
        </div>
      )}
    </>
  );
}
