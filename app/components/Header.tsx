"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex h-24 items-center justify-between">

          {/* Logo */}
          <Logo />


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  text-sm
                  font-medium
                  text-slate-600
                  transition
                  hover:text-[#0f3d5e]
                "
              >
                {link.name}
              </a>
            ))}


            <a
              href="/contact"
              className="
                rounded-lg
                bg-[#0f3d5e]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-[#0c314c]
              "
            >
              Start Request
            </a>

          </nav>



          {/* Mobile Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>


        </div>



        {/* Mobile Navigation */}
        {open && (

          <div className="md:hidden border-t border-slate-200 py-6">

            <nav className="flex flex-col gap-5">

              {navLinks.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    text-sm
                    font-medium
                    text-slate-700
                    hover:text-[#0f3d5e]
                  "
                >
                  {link.name}
                </a>

              ))}


              <a
                href="/contact"
                className="
                  mt-2
                  rounded-lg
                  bg-[#0f3d5e]
                  px-5
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Start Request
              </a>

            </nav>

          </div>

        )}

      </div>

    </header>
  );
}