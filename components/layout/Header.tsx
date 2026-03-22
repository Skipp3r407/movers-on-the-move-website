"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-mo-light/80 bg-mo-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-mo-black text-mo-white transition group-hover:bg-mo-charcoal"
            aria-hidden
          >
            <svg
              viewBox="0 0 32 32"
              className="h-6 w-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 20 L14 12 L18 16 L26 8"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 8h6v6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-heading text-lg font-bold uppercase tracking-tight text-mo-black sm:text-xl">
            Movers On The Move
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-mo-charcoal transition hover:bg-mo-light hover:text-mo-black",
                pathname === link.href && "bg-mo-light text-mo-black",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-full bg-mo-orange px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mo-orange"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-mo-light text-mo-charcoal lg:hidden"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-mo-black/50 lg:hidden"
          aria-hidden
          onClick={() => setOpen(false)}
        />
      )}
      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-y-0 right-0 z-[70] w-[min(100%,20rem)] transform border-l border-mo-light bg-mo-white shadow-xl transition duration-200 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full pointer-events-none",
        )}
      >
        <div className="flex items-center justify-between border-b border-mo-light px-4 py-3">
          <span className="font-heading text-sm font-bold uppercase text-mo-black">
            Menu
          </span>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-mo-charcoal"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col p-4" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-3 text-base font-medium text-mo-charcoal",
                pathname === link.href && "bg-mo-light text-mo-black",
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phoneTel}`}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-mo-blue px-4 py-3 text-center font-semibold text-white"
          >
            <Phone className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
