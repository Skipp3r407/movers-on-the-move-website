import { CalendarCheck, MessageCircle, PackageCheck, Truck } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Call or request a quote",
    body: "Tell us what you're moving, when, and where—by phone or our quick form.",
    Icon: MessageCircle,
  },
  {
    step: "02",
    title: "We confirm the details",
    body: "We align on timing, crew size, and any stairs or heavy items.",
    Icon: CalendarCheck,
  },
  {
    step: "03",
    title: "Crew arrives ready",
    body: "We show up on time with the muscle and focus to keep your move on track.",
    Icon: Truck,
  },
  {
    step: "04",
    title: "Careful handling throughout",
    body: "Boxes, furniture, and valuables are moved with steady, respectful care.",
    Icon: PackageCheck,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-mo-charcoal py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-mo-light">
            A straightforward process so you know what to expect on moving day.
          </p>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ step, title, body, Icon }) => (
            <li
              key={step}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <span className="font-heading text-4xl font-bold text-mo-orange/90">
                {step}
              </span>
              <Icon className="mt-4 h-8 w-8 text-mo-blue" aria-hidden />
              <h3 className="mt-4 font-heading text-lg font-bold uppercase">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mo-light">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
