import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Orlando Moving Service Areas | Movers On The Move",
  },
  description:
    "Movers On The Move proudly serves Orlando and surrounding Central Florida areas with reliable moving labor and delivery services.",
};

export default function ServiceAreasPage() {
  return (
    <div className="bg-mo-white">
      <section className="border-b border-mo-light bg-mo-black py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Orlando Moving Labor &amp; Delivery Services
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-mo-light">
            Movers On The Move proudly serves customers in Orlando, Florida and
            nearby communities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-mo-slate">
          We help homeowners, renters, students, and small businesses with
          reliable local moving assistance and delivery support.
        </p>
        <h2 className="mt-12 font-heading text-2xl font-bold uppercase text-mo-charcoal">
          Areas Served
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {SERVICE_AREAS.map((area) => (
            <li
              key={area}
              className="flex items-center gap-2 rounded-lg border border-mo-light bg-mo-light/30 px-4 py-3 text-mo-charcoal"
            >
              <MapPin className="h-4 w-4 text-mo-blue" aria-hidden />
              {area}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-mo-slate">
          If you&apos;re searching for moving help in Orlando, local movers near
          me, furniture delivery in Orlando, or loading and unloading services in
          Central Florida, Movers On The Move is ready to help.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-mo-orange px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-orange-600"
          >
            Check availability in your area
          </Link>
        </div>
      </section>
    </div>
  );
}
