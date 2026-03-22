import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mo-black text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden
      >
        <svg className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <pattern
              id="speed"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#speed)" />
        </svg>
      </div>
      <div className="absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-mo-blue/25 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-mo-orange/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="flex-1">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-mo-light">
            Orlando &amp; Central Florida
          </p>
          <h1 className="mt-5 font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Reliable Moving Labor &amp; Delivery Services in Orlando, FL
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mo-light sm:text-xl">
            From apartment moves and home relocations to furniture delivery and
            loading help, Movers On The Move delivers dependable service,
            careful handling, and the muscle you need to get the job done right.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-mo-orange px-8 py-4 text-base font-bold text-white shadow-lg shadow-mo-orange/30 transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mo-orange"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur transition hover:border-white/60 hover:bg-white/10"
            >
              Request a Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="relative flex-1 lg:max-w-md">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-mo-charcoal to-mo-black shadow-2xl">
            <div
              className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.35)_0%,transparent_45%,rgba(249,115,22,0.25)_100%)]"
              aria-hidden
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <span className="font-heading text-6xl font-bold text-white/90">
                407
              </span>
              <span className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-mo-light">
                Local • Fast • Dependable
              </span>
              <p className="mt-6 text-sm leading-relaxed text-mo-light/90">
                Placeholder for your team or truck photo—swap in a real image
                anytime in{" "}
                <code className="rounded bg-white/10 px-1 py-0.5 text-xs">
                  public/
                </code>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
