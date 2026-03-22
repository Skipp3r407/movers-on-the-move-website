import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-mo-light bg-mo-charcoal text-mo-light">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-heading text-2xl font-bold uppercase tracking-tight text-white">
              {SITE.name}
            </p>
            <p className="mt-2 max-w-sm text-sm text-mo-light/90">
              Reliable moving labor &amp; delivery services in Orlando, FL.
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mt-6 inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-mo-orange px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-orange-600 sm:w-auto"
            >
              Call Today for a Free Quote
            </a>
          </div>
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mo-light transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-mo-orange" />
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="text-mo-light hover:text-white"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-mo-blue" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all text-mo-light hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mo-slate" />
                <span>{SITE.location}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-mo-slate">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
        <div className="mt-6 text-center text-sm text-slate-400">
          Website Design by{" "}
          <a
            href="https://elevatedigitalstudios.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 transition-colors hover:text-white hover:underline focus-visible:rounded-sm focus-visible:text-mo-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mo-orange"
          >
            Elevate Digital Co.
          </a>
        </div>
      </div>
    </footer>
  );
}
