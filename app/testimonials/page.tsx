import type { Metadata } from "next";
import Link from "next/link";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Customer Reviews | Movers On The Move Orlando",
  },
  description:
    "Read customer reviews for Movers On The Move and see why Orlando customers trust our moving labor and delivery services.",
};

export default function TestimonialsPage() {
  return (
    <div className="bg-mo-white">
      <section className="border-b border-mo-light bg-gradient-to-r from-mo-blue to-blue-800 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Customer Reviews
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Real feedback from Orlando and Central Florida customers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.author + t.quote.slice(0, 24)}
              className="flex flex-col rounded-2xl border border-mo-light bg-mo-light/30 p-6"
            >
              <Quote className="h-8 w-8 text-mo-orange" aria-hidden />
              <p className="mt-4 flex-1 text-lg leading-relaxed text-mo-charcoal">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-mo-slate">
                — {t.author}
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-12 rounded-2xl bg-mo-charcoal p-8 text-center text-white">
          <p className="text-lg">
            Join our growing list of happy customers. Call today for your quote.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-mo-orange px-8 py-3 text-sm font-bold uppercase tracking-wide transition hover:bg-orange-600"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
