"use client";

import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white font">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        <ul className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wide">
          <li className="cursor-pointer hover:text-blue-600">WHO WE SERVE</li>
          <li className="cursor-pointer hover:text-blue-600">SOLUTIONS</li>
          <li className="cursor-pointer hover:text-blue-600">RESOURCES</li>
          <li className="cursor-pointer hover:text-blue-600">ABOUT US</li>
          <li className="cursor-pointer hover:text-blue-600">CONTACT US</li>
        </ul>

        <div className="hidden md:flex items-center gap-6 text-xs font-semibold">

          <Search size={18} className="cursor-pointer" />

          <div className="flex items-center gap-1 cursor-pointer">
            <span>IND</span>
            <ChevronDown size={14} />
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <span>ENGLISH</span>
            <ChevronDown size={14} />
          </div>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 text-sm font-medium bg-white border-t">

          <p className="py-2 border-b">WHO WE SERVE</p>
          <p className="py-2 border-b">SOLUTIONS</p>
          <p className="py-2 border-b">RESOURCES</p>
          <p className="py-2 border-b">ABOUT US</p>
          <p className="py-2 border-b">CONTACT US</p>

          <div className="pt-2 flex justify-between">
            <span>IND</span>
            <span>ENGLISH</span>
          </div>
        </div>
      )}
    </nav>
  );
};
