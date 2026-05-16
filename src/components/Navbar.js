"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto w-full px-5 py-4 md:px-6 md:py-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo-removebg.png"
              alt="Travel With Us Official"
              className="h-12 w-auto"
            />
            <span className="sr-only">Travel With Us Official</span>
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="mt-1 block h-0.5 w-6 bg-white"></span>
            <span className="mt-1 block h-0.5 w-6 bg-white"></span>
          </button>

          <div className="hidden items-center gap-5 md:flex">
            <Link href="/" className="transition hover:text-slate-100">
              Home
            </Link>
            <Link href="/dubai" className="transition hover:text-slate-100">
              Dubai
            </Link>
            <Link href="/malaysia" className="transition hover:text-slate-100">
              Malaysia
            </Link>
            <Link href="/sri-lanka" className="transition hover:text-slate-100">
              Sri Lanka
            </Link>
          </div>
        </div>

        {isOpen ? (
          <div
            id="mobile-menu"
            className="mt-4 flex flex-col gap-3 border-t border-white/20 pt-4 md:hidden"
          >
            <Link
              href="/"
              className="block rounded-lg px-3 py-2 text-sm transition hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/dubai"
              className="block rounded-lg px-3 py-2 text-sm transition hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Dubai
            </Link>
            <Link
              href="/malaysia"
              className="block rounded-lg px-3 py-2 text-sm transition hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Malaysia
            </Link>
            <Link
              href="/sri-lanka"
              className="block rounded-lg px-3 py-2 text-sm transition hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Sri Lanka
            </Link>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
