import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Moving Services in Orlando, FL | Movers On The Move",
  },
  description:
    "Explore moving labor, furniture delivery, loading and unloading, apartment moving, and local moving support from Movers On The Move in Orlando, FL.",
};

const benefits = [
  "less stress on moving day",
  "safer handling of heavy items",
  "extra labor when you need it",
  "local service with direct communication",
  "faster, more organized moves",
];

export default function ServicesPage() {
  return (
    <div className="bg-mo-white">
      <section className="border-b border-mo-light bg-gradient-to-br from-mo-charcoal to-mo-black py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Moving Services in Orlando, FL
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-mo-light">
            Moving labor and delivery support for homes, apartments, and
            businesses—plus loading, unloading, and local moving help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            {SERVICES.map((s) => (
              <article key={s.title}>
                <h2 className="font-heading text-2xl font-bold uppercase text-mo-charcoal">
                  {s.title}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-mo-slate">
                  {s.description}
                </p>
              </article>
            ))}
          </div>
          <aside className="h-fit rounded-2xl border border-mo-light bg-mo-light/40 p-6">
            <h2 className="font-heading text-lg font-bold uppercase text-mo-charcoal">
              Benefits
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-mo-slate">
              {benefits.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-mo-orange">•</span>
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-mo-orange px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              <Phone className="h-4 w-4" />
              Call now to book
            </a>
            <Link
              href="/contact"
              className="mt-3 block w-full rounded-full border-2 border-mo-charcoal py-3 text-center text-sm font-bold text-mo-charcoal transition hover:bg-mo-charcoal hover:text-white"
            >
              Request a quote
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
