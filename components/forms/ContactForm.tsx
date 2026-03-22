"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import { SITE } from "@/lib/site";

const initial = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  pickup: "",
  dropoff: "",
  message: "",
};

type ContactFormProps = {
  pickupLabel?: string;
  dropoffLabel?: string;
};

export function ContactForm({
  pickupLabel = "Pickup / Move Location",
  dropoffLabel = "Drop-off Location",
}: ContactFormProps) {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Quote request from ${form.name || "website"}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Service needed: ${form.service}`,
        `Preferred date: ${form.date}`,
        `Pickup / move location: ${form.pickup}`,
        `Drop-off location: ${form.dropoff}`,
        "",
        form.message,
      ].join("\n"),
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 8000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border border-mo-light bg-mo-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-mo-charcoal">
          Full Name
          <input
            required
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="rounded-lg border border-mo-light bg-mo-white px-3 py-2.5 text-mo-black outline-none ring-mo-blue focus:ring-2"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-mo-charcoal">
          Phone Number
          <input
            required
            type="tel"
            name="phone"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="rounded-lg border border-mo-light bg-mo-white px-3 py-2.5 text-mo-black outline-none ring-mo-blue focus:ring-2"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-mo-charcoal">
        Email Address
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="rounded-lg border border-mo-light bg-mo-white px-3 py-2.5 text-mo-black outline-none ring-mo-blue focus:ring-2"
        />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-mo-charcoal">
          Type of Service Needed
          <input
            name="service"
            placeholder="e.g. Loading, apartment move"
            value={form.service}
            onChange={(e) =>
              setForm((f) => ({ ...f, service: e.target.value }))
            }
            className="rounded-lg border border-mo-light bg-mo-white px-3 py-2.5 text-mo-black outline-none ring-mo-blue focus:ring-2"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-mo-charcoal">
          Moving Date / Preferred Date
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
            className="rounded-lg border border-mo-light bg-mo-white px-3 py-2.5 text-mo-black outline-none ring-mo-blue focus:ring-2"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-mo-charcoal">
          {pickupLabel}
          <input
            name="pickup"
            value={form.pickup}
            onChange={(e) => setForm((f) => ({ ...f, pickup: e.target.value }))}
            className="rounded-lg border border-mo-light bg-mo-white px-3 py-2.5 text-mo-black outline-none ring-mo-blue focus:ring-2"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-mo-charcoal">
          {dropoffLabel}
          <input
            name="dropoff"
            value={form.dropoff}
            onChange={(e) =>
              setForm((f) => ({ ...f, dropoff: e.target.value }))
            }
            className="rounded-lg border border-mo-light bg-mo-white px-3 py-2.5 text-mo-black outline-none ring-mo-blue focus:ring-2"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-mo-charcoal">
        Message
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={(e) =>
            setForm((f) => ({ ...f, message: e.target.value }))
          }
          className="resize-y rounded-lg border border-mo-light bg-mo-white px-3 py-2.5 text-mo-black outline-none ring-mo-blue focus:ring-2"
        />
      </label>
      {sent && (
        <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-800">
          Your email app should open with your message. Prefer a faster answer?
          Call {SITE.phoneDisplay}.
        </p>
      )}
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-mo-orange px-8 py-4 text-base font-bold text-white transition hover:bg-orange-600"
      >
        <Send className="h-5 w-5" />
        Send Request
      </button>
      <p className="text-xs text-mo-slate">
        By submitting, your device will open an email draft to {SITE.email}. You
        can also call us directly for immediate help.
      </p>
    </form>
  );
}
