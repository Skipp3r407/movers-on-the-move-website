import { Clock, MapPin, ShieldCheck, Truck } from "lucide-react";

const badges = [
  {
    title: "Orlando Local",
    subtitle: "Central FL service",
    Icon: MapPin,
  },
  {
    title: "Careful Handling",
    subtitle: "Your items protected",
    Icon: ShieldCheck,
  },
  {
    title: "Fast Response",
    subtitle: "Call or message us",
    Icon: Clock,
  },
  {
    title: "Dependable Crew",
    subtitle: "Ready to work",
    Icon: Truck,
  },
];

export function TrustBadges() {
  return (
    <section className="border-b border-mo-light bg-mo-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {badges.map(({ title, subtitle, Icon }) => (
            <li
              key={title}
              className="flex items-center gap-3 rounded-xl border border-mo-light bg-mo-light/40 px-4 py-3"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mo-black text-white">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="font-heading text-sm font-bold uppercase leading-tight text-mo-charcoal">
                  {title}
                </p>
                <p className="text-xs text-mo-slate">{subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
