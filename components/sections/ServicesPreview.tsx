import Link from "next/link";
import {
  Armchair,
  Building2,
  Home,
  Layers,
  MapPinned,
  Package,
} from "lucide-react";
import { SERVICES } from "@/lib/site";

const icons = [Home, Layers, Armchair, Building2, Package, MapPinned];

export function ServicesPreview() {
  const preview = SERVICES;
  return (
    <section className="bg-mo-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-mo-black sm:text-4xl">
            Moving Help That Makes the Job Easier
          </h2>
          <p className="mt-4 text-lg text-mo-slate">
            Whether you&apos;re moving across town, need help loading a truck,
            or need furniture delivered safely, Movers On The Move is here to
            help with dependable labor and professional support.
          </p>
        </div>
        <p className="mt-10 text-center font-heading text-sm font-bold uppercase tracking-wider text-mo-blue">
          Popular Services
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((s, i) => {
            const Icon = icons[i]!;
            return (
              <div
                key={s.title}
                className="group flex flex-col rounded-2xl border border-mo-light bg-mo-white p-6 shadow-sm transition hover:border-mo-blue/30 hover:shadow-md"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mo-black text-white transition group-hover:bg-mo-blue">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase text-mo-charcoal">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mo-slate">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-mo-black px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-mo-charcoal"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
