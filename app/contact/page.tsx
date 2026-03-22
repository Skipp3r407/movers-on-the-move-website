import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "Contact Movers On The Move | Call for Moving Help in Orlando",
  },
  description:
    "Contact Movers On The Move in Orlando, FL for a free quote on moving labor, furniture delivery, and local moving services.",
};

export default function ContactPage() {
  return (
    <div className="bg-mo-white">
      <section className="border-b border-mo-light bg-gradient-to-br from-mo-charcoal via-mo-black to-mo-charcoal py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-mo-light">
            Call, email, or send a message—we respond fast so you can get on the
            schedule.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-mo-charcoal">
                Movers On The Move
              </h2>
              <p className="mt-2 text-mo-slate">{SITE.location}</p>
            </div>
            <ul className="space-y-4 text-mo-charcoal">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-mo-orange" />
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="text-lg font-semibold hover:text-mo-blue"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-mo-blue" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all font-medium hover:text-mo-blue"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-mo-slate" />
                <span>{SITE.location}</span>
              </li>
            </ul>
            <p className="text-sm text-mo-slate">
              Need help with a move, delivery, or loading job? Fill out the form
              and we&apos;ll get back to you as soon as possible.
            </p>
            <p className="rounded-xl bg-mo-light/60 p-4 text-sm text-mo-charcoal">
              Ready to move? Let&apos;s make it easier. Call today or request
              your free quote online.
            </p>
          </div>
          <div className="lg:col-span-3">
            <ContactForm
              pickupLabel="Current Location"
              dropoffLabel="Destination"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
