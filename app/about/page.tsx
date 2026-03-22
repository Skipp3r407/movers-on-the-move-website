import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "About Movers On The Move | Orlando Moving Labor Company",
  },
  description:
    "Learn more about Movers On The Move, a local Orlando business providing dependable moving labor and delivery services with responsive customer care.",
};

const trust = [
  "local Orlando service",
  "dependable labor support",
  "easy communication",
  "careful handling of belongings",
  "flexible service for different moving needs",
];

export default function AboutPage() {
  return (
    <div className="bg-mo-white">
      <section className="border-b border-mo-light bg-mo-black py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            About Movers On The Move
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-mo-light">
            Local moving labor and delivery built on reliability, care, and
            straight talk.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold uppercase text-mo-charcoal">
          Our Story
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-mo-slate">
          Movers On The Move provides dependable moving labor and delivery
          services for customers throughout Orlando, Florida. We understand that
          moving can be stressful, time-consuming, and physically demanding,
          which is why we focus on making the process smoother with reliable
          help, careful handling, and responsive service.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-mo-slate">
          Whether you need help moving out of an apartment, loading a truck,
          delivering furniture, or getting heavy items moved safely, our goal is
          to provide practical support you can count on.
        </p>

        <h2 className="mt-14 font-heading text-2xl font-bold uppercase text-mo-charcoal">
          Mission
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-mo-slate">
          Our mission is to provide Orlando customers with trustworthy moving
          labor and delivery services that are professional, efficient, and
          handled with care.
        </p>

        <h2 className="mt-14 font-heading text-2xl font-bold uppercase text-mo-charcoal">
          Why Customers Trust Us
        </h2>
        <ul className="mt-6 space-y-3">
          {trust.map((t) => (
            <li key={t} className="flex items-start gap-3 text-mo-slate">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mo-orange" />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-2xl bg-mo-blue p-8 text-white">
          <p className="text-lg font-medium">
            Need moving help? Contact Movers On The Move today for a free
            quote.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-mo-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-orange-600"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
