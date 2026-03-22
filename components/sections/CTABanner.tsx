import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-mo-blue to-blue-700 py-14 sm:py-20">
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-mo-orange/30 blur-2xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
          Need Moving Help in Orlando? Let&apos;s Get You Scheduled.
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          Call now for fast assistance, dependable service, and a free quote for
          your move or delivery job.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-mo-orange px-10 py-4 text-base font-bold text-white shadow-lg transition hover:bg-orange-600 sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            Call {SITE.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-white/80 bg-white/10 px-10 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white hover:text-mo-blue sm:w-auto"
          >
            Get Your Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
