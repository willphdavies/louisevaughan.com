"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { IconList } from "../Icons";
import { NavItem } from "./Header";

type SideMenuProps = {
  items: NavItem[];
};

export function SideMenu({ items = [] }: SideMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        title="Open main menu"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="w-6 h-6" />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-30 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={() => setIsOpen(false)}
      />

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold text-black">Slak Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-gray-900"
            aria-label="Close menu"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <ul className="p-4 bg-gray-100 h-full">
          {items.map(({ href, label }) => (
            <li
              key={href}
              className="w-full border-b border-gray-200 shadow-[0_1px_1px_rgba(0,0,0,0.03)]"
            >
              <a
                href={href}
                className="block w-full px-4 py-3 text-gray-700 hover:text-blue-500 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="fixed bottom-0 left-0 w-full p-4 bg-gray-100 border-t">
          <IconList classNames="text-black px-2" />
        </div>
      </div>
    </>
  );
}
