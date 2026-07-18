import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach the United Premier Liens team by phone, email, or contact form. Available to patients, attorneys, and medical providers nationwide.",
  alternates: { canonical: "/contact" },
};

const CONTACT_ITEMS = [
  { icon: Phone, label: "Phone", value: "(800) 555-0142" },
  { icon: Mail, label: "Email", value: "referrals@unitedpremierliens.com" },
  { icon: MapPin, label: "Coverage", value: "Nationwide — 48 states" },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 7am–8pm ET" },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950 py-24 text-center">
        <div className="container-premium">
          <Reveal className="eyebrow border-teal-400/20 bg-teal-400/10 text-teal-300">Contact</Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold text-white md:text-5xl">
              We're here to help
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              Whether you're a patient, attorney, or provider, our team is
              ready to answer questions or start a referral.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-premium grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="space-y-6">
            {CONTACT_ITEMS.map((item) => (
              <div key={item.label} className="surface-card flex items-center gap-4 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  <item.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-ink-500">
                    {item.label}
                  </p>
                  <p className="font-display font-semibold text-navy-900">{item.value}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.1} className="surface-card p-8">
            <h2 className="font-display text-xl font-semibold text-navy-900">Send a Message</h2>
            <p className="mt-1.5 text-sm text-ink-500">
              Fill out the form and a member of our team will follow up shortly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
