"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Dünya", href: "#" },
  { name: "Karakterler", href: "#" },
  { name: "Taşlar", href: "#" },
  { name: "Bölgeler", href: "#" },
  { name: "Sezonlar", href: "#" },
  { name: "Hikaye", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full">
        <div className="flex h-20 items-center justify-between px-8">

          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-black tracking-[0.3em] text-white"
          >
            VOLMERRA
          </Link>

          {/* Desktop */}
          <nav className="hidden gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-white/80 transition hover:text-orange-400"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}
         <button
  type="button"
  onClick={() => setOpen(!open)}
  className="relative z-[100] text-white md:hidden"
>
            {open ? <X size={34} /> : <Menu size={34} />}
          </button>

        </div>
      </header>


      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col justify-center gap-8 px-10">

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-bold uppercase tracking-[0.25em] text-white transition hover:text-orange-400"
            >
              {link.name}
            </Link>
          ))}

        </div>
      </div>
    </>
  );
}