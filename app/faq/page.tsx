import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: {
    absolute: "FAQ | Movers On The Move Orlando, FL",
  },
  description:
    "Get answers to common questions about moving labor, delivery services, booking, and service areas for Movers On The Move.",
};

export default function FaqPage() {
  return (
    <div className="bg-mo-white">
      <section className="border-b border-mo-light bg-mo-black py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Common Questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-mo-light">
            Straight answers about how we work and how to book your move.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <FaqAccordion />
        <p className="mt-10 text-center text-mo-slate">
          Still have questions?{" "}
          <Link href="/contact" className="font-semibold text-mo-blue underline">
            Contact us today
          </Link>{" "}
          and we&apos;ll be happy to help.
        </p>
      </section>
    </div>
  );
}
