'use client'

import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react"; // install lucide-react: npm i lucide-react
import Image from "next/image";

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo + Nav Links */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-lg font-medium tracking-tight text-black">
            <Image 
                 src="/kimmycode-light.png"
                 alt="Nav Logo Kimmycode"
                 className="mr-4"
                 width={120}
                 height={120}
                 priority
            />
          </Link>
          <Link href="/#about" className="text-sm tracking-tight text-black hover:text-indigo-700">About Me</Link>
          <Link href="/#projects" className="text-sm tracking-tight text-black hover:text-indigo-700">Portofolio</Link>
          <Link href="/#contact" className="text-sm tracking-tight text-black hover:text-indigo-700">Contact Me</Link>
        </div>

        {/* Login Button */}
        {/* <div>
          <Link
            href="/login"
            className="text-sm text-gray-700 hover:text-black px-3 py-1 transition"
          >
            Login
          </Link>
        </div> */}
      </div>
    </nav>
  );
}
