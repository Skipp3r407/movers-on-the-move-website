import Link from "next/link";
import { MapPin } from "lucide-react";
const homeAreas = [
  "Orlando",
  "Winter Park",
  "Kissimmee",
  "Altamonte Springs",
  "Oviedo",
  "Sanford",
  "Apopka",
  "Nearby Central Florida areas",
];

export function ServiceAreasSection() {
  return (
    <section className="bg-mo-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-mo-black sm:text-4xl">
            Serving Orlando and Surrounding Areas
          </h2>
          <p className="mt-4 text-lg text-mo-slate">
            We provide moving labor and delivery services in:
          </p>
        </div>
        <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {homeAreas.map((area) => (
            <li
              key={area}
              className="inline-flex items-center gap-2 rounded-full border border-mo-light bg-mo-light/50 px-4 py-2 text-sm font-medium text-mo-charcoal"
            >
              <MapPin className="h-4 w-4 text-mo-blue" aria-hidden />
              {area}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-mo-slate">
          Need help outside Orlando?{" "}
          <Link href="/contact" className="font-semibold text-mo-blue underline">
            Contact us
          </Link>{" "}
          to check availability.
        </p>
      </div>
    </section>
  );
}
