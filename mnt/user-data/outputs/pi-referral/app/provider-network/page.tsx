import type { Metadata } from "next";
import {
  Activity,
  Bone,
  HeartPulse,
  Brain,
  Stethoscope,
  Scan,
  Building2,
  Scissors,
  UserRound,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SpecialtyCard from "@/components/SpecialtyCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Provider Network — Medical Specialties",
  description:
    "Explore United Premier Liens's nationwide network of chiropractors, orthopedic specialists, pain management clinics, neurologists, and diagnostic imaging centers.",
  alternates: { canonical: "/provider-network" },
};

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

export default function ProviderNetworkPage() {
  return (
    <>
      <section className="bg-navy-950 py-24 text-center">
        <div className="container-premium">
          <Reveal className="eyebrow border-teal-400/20 bg-teal-400/10 text-teal-300">Provider Network</Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold text-white md:text-5xl">
              One network, every specialty a case needs
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              Our providers are credential-verified and experienced in
              personal injury care — from first evaluation through full
              recovery.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-premium">
          <SectionHeading title="Specialties available nationwide" align="center" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SPECIALTIES.map((s, i) => (
              <SpecialtyCard key={s.title} {...s} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="A provider in your specialty is waiting"
        description="Whether you need care or want to refer a patient, our network is ready to help."
      />
    </>
  );
}
