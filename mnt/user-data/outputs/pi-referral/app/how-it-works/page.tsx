import type { Metadata } from "next";
import { PhoneCall, ClipboardList, Users2, CalendarCheck, Stethoscope } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See exactly how United Premier Liens matches personal injury patients with qualified medical providers in as little as 24 hours.",
  alternates: { canonical: "/how-it-works" },
};

const STEPS = [
  {
    icon: PhoneCall,
    title: "Contact Us",
    description:
      "Reach out by phone, form, or referral portal. Patients, attorneys, and law firm staff can all initiate a request directly.",
  },
  {
    icon: ClipboardList,
    title: "Tell Us About the Injury",
    description:
      "Share basic details — injury type, location, urgency, and any existing case information. This takes less than five minutes.",
  },
  {
    icon: Users2,
    title: "We Match the Patient",
    description:
      "A coordinator reviews the case and selects a provider from our vetted network based on specialty, proximity, and availability.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Scheduled Quickly",
    description:
      "Most patients are scheduled within 24–48 hours of initial contact, eliminating the delays common with self-directed searches.",
  },
  {
    icon: Stethoscope,
    title: "Patient Receives Treatment",
    description:
      "The patient begins care with a qualified provider, and documentation is coordinated to support both recovery and any related legal matter.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-navy-950 py-24 text-center">
        <div className="container-premium">
          <Reveal className="eyebrow border-teal-400/20 bg-teal-400/10 text-teal-300">How It Works</Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold text-white md:text-5xl">
              Five steps from first call to first appointment
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              We designed our process to remove every unnecessary delay
              between an injury and the treatment that follows.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl space-y-6">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08} className="surface-card flex gap-6 p-8">
                <div className="flex flex-col items-center">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-900">
                    <step.icon className="h-6 w-6 text-teal-400" />
                  </span>
                  {i < STEPS.length - 1 && <span className="mt-2 w-px flex-1 bg-ink-300" />}
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-ink-500">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink-100">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Timelines"
            title="What to expect after you reach out"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { time: "Within 1 hour", copy: "A coordinator reviews your request and begins the matching process." },
              { time: "Within 24 hours", copy: "Most patients receive a confirmed appointment with a specialist." },
              { time: "Ongoing", copy: "Your coordinator stays available for scheduling, records, and follow-up care." },
            ].map((item, i) => (
              <Reveal key={item.time} delay={i * 0.08} className="surface-card p-7 text-center">
                <p className="font-display text-lg font-semibold text-teal-600">{item.time}</p>
                <p className="mt-2.5 text-sm text-ink-500">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
