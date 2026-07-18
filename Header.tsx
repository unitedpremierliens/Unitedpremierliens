"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/for-attorneys", label: "For Attorneys" },
  { href: "/for-patients", label: "For Patients" },
  { href: "/for-providers", label: "For Providers" },
  { href: "/provider-network", label: "Provider Network" },
  { href: "/coverage-areas", label: "Coverage Areas" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/80 backdrop-blur-xl">
      <div className="container-premium flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl">
            <Image src="/logo.jpeg" alt="United Premier Liens logo" fill className="object-cover" priority />
          </span>
          <span className="font-display text-base font-bold leading-tight tracking-tight text-navy-900 sm:text-lg">
            United Premier <span className="text-teal-600">Liens</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-navy-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="btn-secondary !px-5 !py-2.5 text-[13px]">
            Join Our Network
          </Link>
          <Link href="/for-patients" className="btn-teal !px-5 !py-2.5 text-[13px]">
            Find a Doctor
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          className="rounded-lg p-2 text-navy-900 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-ink-100 lg:hidden"
          >
            <div className="container-premium flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-100"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Link href="/contact" className="btn-secondary" onClick={() => setOpen(false)}>
                  Join Our Network
                </Link>
                <Link href="/for-patients" className="btn-teal" onClick={() => setOpen(false)}>
                  Find a Doctor
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
