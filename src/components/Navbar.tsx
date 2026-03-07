"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = (path: string) =>
    `text-[14px] tracking-[3px] transition-transform duration-200 inline-block
     ${pathname === path ? "text-white" : "text-neutral-400"}
     hover:text-white hover:scale-110`;

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] bg-black/60 backdrop-blur-md">

      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-14 py-5">

        {/* Logo */}
        <Link href="/" data-navbar-hover>
          <Image
            src="/logo.png"
            alt="3THVN logo"
            width={120}
            height={40}
            priority
            className="h-[50px] w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 boldini">
          <Link href="/" data-navbar-hover className={linkClasses("/")}>HOME</Link>
          <Link href="/music" data-navbar-hover className={linkClasses("/music")}>MUSIC</Link>
          <Link href="/tours" data-navbar-hover className={linkClasses("/tours")}>TOURS</Link>
          <Link href="/about" data-navbar-hover className={linkClasses("/about")}>ABOUT</Link>
          <Link href="/contact" data-navbar-hover className={linkClasses("/contact")}>CONTACT</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl boldini"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-7 py-8 bg-black/90 boldini">
          <Link href="/" className={linkClasses("/")}>HOME</Link>
          <Link href="/music" className={linkClasses("/music")}>MUSIC</Link>
          <Link href="/tours" className={linkClasses("/tours")}>TOURS</Link>
          <Link href="/about" className={linkClasses("/about")}>ABOUT</Link>
          <Link href="/contact" className={linkClasses("/contact")}>CONTACT</Link>
        </div>
      )}
    </nav>
  );
}