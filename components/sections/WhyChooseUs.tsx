import { CheckCircle2 } from "lucide-react";
import { WHY_CHOOSE } from "@/lib/site";

export function WhyChooseUs() {
  return (
    <section className="relative border-y border-mo-light bg-mo-light/40 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mo-blue/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-tight text-mo-black sm:text-4xl">
          Why Choose Movers On The Move
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-mo-light bg-mo-white p-6 shadow-sm"
            >
              <CheckCircle2
                className="h-6 w-6 shrink-0 text-mo-orange"
                aria-hidden
              />
              <div>
                <h3 className="font-heading text-lg font-bold uppercase text-mo-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mo-slate">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
