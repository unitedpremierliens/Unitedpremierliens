import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Users,
  Stethoscope,
  Bone,
  Activity,
  Brain,
  Scan,
  Scissors,
  HeartPulse,
  Building2,
  Gavel,
  UserRound,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatCounter from "@/components/StatCounter";
import TestimonialCard from "@/components/TestimonialCard";
import SpecialtyCard from "@/components/SpecialtyCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "United Premier Liens | Personal Injury Doctor Referral Network",
  description:
    "Connecting personal injury patients, attorneys, and law firms with vetted medical providers nationwide. Same-day placement, treatment on a medical lien with zero upfront cost to patients.",
  alternates: { canonical: "/" },
};

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "HIPAA-Conscious Process" },
  { icon: Clock, label: "Same-Day Placement" },
  { icon: Users, label: "1,200+ Vetted Providers" },
  { icon: Building2, label: "Nationwide Coverage" },
];

const STEPS = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Call, submit a form, or message our team — patients, attorneys, and providers all start here.",
  },
  {
    number: "02",
    title: "Tell Us About the Injury",
    description:
      "Share the injury type, location, and any urgency so we can match the right specialty from the start.",
  },
  {
    number: "03",
    title: "We Match the Patient",
    description:
      "Our coordinators pair the case with a qualified, in-network provider based on specialty and proximity.",
  },
  {
    number: "04",
    title: "Appointment Scheduled Quickly",
    description:
      "Most patients are scheduled within 24–48 hours — no waiting weeks for an available provider.",
  },
  {
    number: "05",
    title: "Patient Receives Treatment",
    description:
      "The patient begins care with proper documentation to support both recovery and any related legal case.",
  },
];

const SPECIALTIES = [
  {
    icon: Activity,
    title: "Chiropractic Care",
    description: "Spinal alignment and soft-tissue therapy for whiplash and musculoskeletal injuries.",
    referredWhen: "Neck, back, or joint pain following a collision.",
  },
  {
    icon: Bone,
    title: "Orthopedic Specialists",
    description: "Diagnosis and treatment of fractures, joint damage, and musculoskeletal trauma.",
    referredWhen: "Suspected fractures, ligament tears, or joint instability.",
  },
  {
    icon: HeartPulse,
    title: "Pain Management",
    description: "Interventional and non-surgical approaches to chronic post-accident pain.",
    referredWhen: "Persistent pain unresolved by initial treatment.",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Evaluation of concussions, nerve damage, and post-traumatic neurological symptoms.",
    referredWhen: "Head trauma, dizziness, or numbness after an accident.",
  },
  {
    icon: Stethoscope,
    title: "Physical Therapy",
    description: "Structured rehabilitation programs to restore mobility and strength.",
    referredWhen: "Ongoing recovery support after acute treatment.",
  },
  {
    icon: Scan,
    title: "Diagnostic Imaging",
    description: "MRI, CT, and X-ray centers for fast, accurate injury documentation.",
    referredWhen: "Confirming the extent of injury for treatment or case evidence.",
  },
  {
    icon: Building2,
    title: "Spine Specialists",
    description: "Advanced evaluation and care for herniated discs and spinal trauma.",
    referredWhen: "Radiating pain, disc injuries, or spinal compression.",
  },
  {
    icon: Scissors,
    title: "Surgical Referrals",
    description: "Coordinated referrals to trusted surgeons for cases requiring intervention.",
    referredWhen: "Injuries that don't respond to conservative treatment.",
  },
  {
    icon: UserRound,
    title: "Primary Care & Urgent Care",
    description: "Immediate evaluation and ongoing coordination of overall recovery.",
    referredWhen: "Initial evaluation immediately following an accident.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container-premium relative flex flex-col items-center py-28 text-center md:py-36">
          <Reveal className="eyebrow border-teal-400/20 bg-teal-400/10 text-teal-300">
            <Sparkles className="h-3.5 w-3.5" />
            Nationwide Personal Injury Referral Network
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-7 max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl">
              The right doctor, matched in hours — not weeks.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              United Premier Liens connects personal injury patients, attorneys, and law
              firms with a vetted network of chiropractors, orthopedic specialists,
              and diagnostic providers — so recovery can start without delay.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Link href="/for-patients" className="btn-teal">
              Find a Doctor
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/for-providers" className="btn-secondary !border-white/15 !bg-transparent !text-white hover:!bg-white/10">
              Join Our Network
            </Link>
          </Reveal>

          <Reveal delay={0.4} className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-2 text-white/70">
                <badge.icon className="h-6 w-6 text-teal-400" />
                <span className="text-xs font-medium leading-tight">{badge.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-navy-900 py-16">
        <div className="container-premium grid grid-cols-2 gap-10 md:grid-cols-4">
          <StatCounter value={1200} suffix="+" label="Vetted Providers" />
          <StatCounter value={48} suffix=" States" label="Coverage Area" />
          <StatCounter value={24} suffix="hr" label="Avg. Placement Time" />
          <StatCounter value={38000} suffix="+" label="Patients Matched" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section bg-white">
        <div className="container-premium">
          <SectionHeading
            eyebrow="How It Works"
            title="From first call to first appointment"
            description="A streamlined, five-step process built to remove friction for patients, attorneys, and providers alike."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-5">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08} className="relative">
                <div className="surface-card h-full p-6">
                  <span className="font-display text-3xl font-bold text-teal-500/30">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-ink-100">
        <div className="container-premium grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
              Built for speed, trusted for quality
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              United Premier Liens isn&apos;t a directory — it&apos;s an active coordination
              service. Every referral is reviewed by a real coordinator who
              understands personal injury cases and matches patients to
              providers with the right specialty, location, and availability.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Every provider is credential-verified before joining the network",
                "Dedicated coordinators manage each case from intake to appointment",
                "Transparent communication with attorneys throughout treatment",
                "No cost or obligation for patients at any point in the process",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-700">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15} className="grid grid-cols-2 gap-5">
            {[
              { icon: Gavel, label: "For Attorneys", href: "/for-attorneys", copy: "Fast, reliable placements that reduce case friction." },
              { icon: UserRound, label: "For Patients", href: "/for-patients", copy: "Compassionate guidance to the right specialist." },
              { icon: Stethoscope, label: "For Providers", href: "/for-providers", copy: "Grow your practice with qualified referrals." },
              { icon: Building2, label: "Provider Network", href: "/provider-network", copy: "Explore our full specialty coverage." },
            ].map((card) => (
              <Link key={card.label} href={card.href} className="surface-card flex flex-col gap-3 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-900">
                  <card.icon className="h-5 w-5 text-teal-400" />
                </span>
                <span className="font-display font-semibold text-navy-900">{card.label}</span>
                <span className="text-sm text-ink-500">{card.copy}</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="section bg-white">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Medical Specialties"
            title="A referral network built for every stage of recovery"
            description="From first evaluation to long-term rehabilitation, our providers cover the full continuum of personal injury care."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SPECIALTIES.map((s, i) => (
              <SpecialtyCard key={s.title} {...s} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-ink-100">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Success Stories"
            title="Trusted by attorneys, patients, and providers"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="Our clients get seen within a day or two instead of waiting weeks. It's changed how quickly we can build a case."
              name="Sarah M."
              role="Personal Injury Attorney"
            />
            <TestimonialCard
              quote="I didn't know where to start after my accident. They found me a chiropractor near my house the same week."
              name="David R."
              role="Patient"
              delay={0.08}
            />
            <TestimonialCard
              quote="The referrals are well-qualified and the coordination team is responsive. It's a genuine partnership."
              name="Dr. Elena Cho"
              role="Orthopedic Specialist, Network Provider"
              delay={0.16}
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
