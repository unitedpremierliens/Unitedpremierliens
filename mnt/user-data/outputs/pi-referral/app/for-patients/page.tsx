import type { Metadata } from "next";
import { Search, HeartHandshake, CalendarDays, Award, Smile, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PatientRequestForm from "@/components/forms/PatientRequestForm";

export const metadata: Metadata = {
  title: "For Patients — Find a Doctor After an Accident",
  description:
    "Get matched with a trusted personal injury doctor near you — no confusing searches, no upfront cost, no waiting weeks for an appointment. Treatment available on a medical lien basis.",
  alternates: { canonical: "/for-patients" },
};

const BENEFITS = [
  {
    icon: Search,
    title: "No Confusing Searches",
    copy: "Skip the endless calls to clinics that aren't taking new patients or don't handle injury cases.",
  },
  {
    icon: Award,
    title: "Trusted Providers",
    copy: "Every provider in our network is credential-verified and experienced with personal injury care.",
  },
  {
    icon: CalendarDays,
    title: "Convenient Appointments",
    copy: "We work around your schedule and location to find an appointment time that fits your life.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    copy: "Our coordinators understand that an accident is stressful — we're here to make this part easier.",
  },
  {
    icon: Smile,
    title: "Experienced Doctors",
    copy: "From chiropractors to neurologists, our network covers every specialty involved in injury recovery.",
  },
  {
    icon: MessageCircle,
    title: "Simple Contact Options",
    copy: "Call, message, or fill out a short form — however is easiest for you to reach us.",
  },
];

export default function ForPatientsPage() {
  return (
    <>
      <section className="bg-navy-950 py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal className="eyebrow border-teal-400/20 bg-teal-400/10 text-teal-300">For Patients</Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-4xl font-bold text-white md:text-5xl">
                Injured in an accident? We'll find your doctor.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-lg text-white/60">
                You shouldn&apos;t have to navigate recovery alone. Tell us
                what happened, and we&apos;ll match you with a trusted provider
                near you — treatment is available on a medical lien basis, so
                there&apos;s nothing to pay upfront.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="glass-card p-8">
            <h2 className="font-display text-xl font-semibold text-white">Request a Doctor</h2>
            <p className="mt-1.5 text-sm text-white/50">
              A coordinator will call you shortly after you submit this form.
            </p>
            <div className="mt-6 rounded-2xl bg-white p-6">
              <PatientRequestForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Why Patients Choose Us"
            title="A simpler way to get the care you need"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06} className="surface-card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{b.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{b.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
