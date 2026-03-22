import Link from "next/link";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";

type Props = {
  limit?: number;
};

export function TestimonialsSection({ limit = 3 }: Props) {
  const items = TESTIMONIALS.slice(0, limit);
  return (
    <section className="bg-mo-charcoal py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          What Customers Are Saying
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <blockquote
              key={t.author + t.quote.slice(0, 20)}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <Quote className="h-8 w-8 text-mo-orange" aria-hidden />
              <p className="mt-4 flex-1 text-lg leading-relaxed text-mo-light">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 text-sm font-semibold text-white/90">
                — {t.author}
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-mo-black"
          >
            Read More Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
