import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="bg-mo-light/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-mo-blue">
            Get in Touch
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold uppercase tracking-tight text-mo-black sm:text-4xl">
            Get Your Free Quote
          </h2>
          <p className="mt-4 text-lg text-mo-slate">
            Need help with a move, delivery, loading, or unloading job? Reach
            out today.
          </p>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-mo-light bg-mo-white p-6 shadow-sm">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-mo-charcoal">
                Contact
              </h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-mo-orange" />
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="font-semibold text-mo-black hover:text-mo-blue"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-mo-blue" />
                  <a
                    href={`mailto:${SITE.email}`}
                    className="break-all font-medium text-mo-charcoal hover:text-mo-blue"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-mo-slate" />
                  <span className="text-mo-charcoal">{SITE.location}</span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-mo-slate">
              Ready to move? Let&apos;s make it easier. Call today or request
              your free quote online.
            </p>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
