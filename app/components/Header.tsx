"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {

  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-8 py-5">


        <div className="flex items-center justify-between">


          {/* Brand */}

          <a href="/" className="block">

            <h1 className="text-2xl font-bold text-slate-900">
              WZ Financial Group
            </h1>

            <p className="text-sm text-gray-500 mt-1">
  Digital Solutions • Operational Support • Professional Services
</p>

          </a>




          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8">

            <a href="/" className="text-slate-700 hover:text-blue-600 transition">
              Home
            </a>

            <a href="/services" className="text-slate-700 hover:text-blue-600 transition">
              Services
            </a>

            <a href="/platform" className="text-slate-700 hover:text-blue-600 transition">
              Platform
            </a>

            <a href="/compliance" className="text-slate-700 hover:text-blue-600 transition">
              Compliance
            </a>

            <a href="/about" className="text-slate-700 hover:text-blue-600 transition">
              About
            </a>

            <a href="/contact" className="text-slate-700 hover:text-blue-600 transition">
              Contact
            </a>

          </nav>




          {/* Desktop CTA */}

          <a
            href="/contact"
            className="
              hidden lg:block
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:bg-blue-700
              transition
            "
          >
            Get Started
          </a>




          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-slate-900"
          >

            {open ? <X size={28} /> : <Menu size={28} />}

          </button>


        </div>




        {/* Mobile Menu */}

        {open && (

          <div className="lg:hidden mt-6 space-y-4 border-t pt-6">


            <a href="/" className="block text-slate-700">
              Home
            </a>


            <a href="/services" className="block text-slate-700">
              Services
            </a>


            <a href="/platform" className="block text-slate-700">
              Platform
            </a>


            <a href="/compliance" className="block text-slate-700">
              Compliance
            </a>


            <a href="/about" className="block text-slate-700">
              About
            </a>


            <a href="/contact" className="block text-slate-700">
              Contact
            </a>


            <a
              href="/contact"
              className="
                inline-block
                bg-blue-600
                text-white
                px-6
                py-3
                rounded-xl
                font-semibold
              "
            >
              Get Started
            </a>


          </div>

        )}


      </div>

    </header>
  );
}