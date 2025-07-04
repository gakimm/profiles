'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import clsx from "clsx"; // optional, helps with conditional classNames

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  
    // Cleanup saat komponen di-unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
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
          </div>

          {/* Nav Links - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/#about" className="text-sm tracking-tight text-black hover:text-indigo-700">About Me</Link>
            <Link href="/#projects" className="text-sm tracking-tight text-black hover:text-indigo-700">Portofolio</Link>
            <Link href="/#contact" className="text-sm tracking-tight text-black hover:text-indigo-700">Contact Me</Link>
          </div>

          {/* Hamburger menu - Visible on Mobile only */}
          <button
            className="md:hidden text-black"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {/* Overlay (blur background) */}
{sidebarOpen && (
  <div
    onClick={() => setSidebarOpen(false)}
    className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
  ></div>
)}

      {/* Sidebar panel (setengah kiri) */}
      <div className={clsx(
        "fixed top-0 left-0 h-full w-2/3 max-w-xs z-40 bg-white shadow-md transform transition-transform duration-300 md:hidden",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between p-4">
          <Link href="/" onClick={() => setSidebarOpen(false)}>
          <Image 
            src="/kimmycode-light.png"
            alt="Nav Logo Kimmycode"
            width={100}
            height={100}
          /></Link>
          <button onClick={() => setSidebarOpen(false)} className="text-black">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col space-y-4 p-4">
          <Link href="/#about" onClick={() => setSidebarOpen(false)} className="text-base text-black hover:text-indigo-700">About Me</Link>
          <Link href="/#projects" onClick={() => setSidebarOpen(false)} className="text-base text-black hover:text-indigo-700">Portofolio</Link>
          <Link href="/#contact" onClick={() => setSidebarOpen(false)} className="text-base text-black hover:text-indigo-700">Contact Me</Link>
        </div>
      </div>

    </>
  );
}
