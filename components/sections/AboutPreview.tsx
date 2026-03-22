import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MOVING_IMG =
  "https://images.unsplash.com/photo-1600518464441-915698a5e21e?auto=format&fit=crop&w=1200&q=80";

export function AboutPreview() {
  return (
    <section className="bg-mo-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mo-charcoal shadow-xl">
          <Image
            src={MOVING_IMG}
            alt="Movers loading a truck with boxes and furniture"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
          />
          <div
            className="absolute inset-0 bg-gradient-to-tr from-mo-black/70 via-mo-black/25 to-mo-blue/30"
            aria-hidden
          />
          <p className="absolute bottom-4 left-4 right-4 text-xs text-white/90">
            Stock photo: replace with your crew or truck anytime.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-mo-black sm:text-4xl">
            Local Moving Help You Can Count On
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mo-slate">
            Movers On The Move is built around one simple goal: provide reliable
            moving labor and delivery services that make moving less stressful.
            We help customers in Orlando with the strength, support, and service
            they need to move with confidence.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-mo-blue transition hover:text-mo-orange"
          >
            Learn more about us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
