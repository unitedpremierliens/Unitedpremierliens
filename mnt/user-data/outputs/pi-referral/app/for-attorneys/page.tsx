import type { Metadata } from "next";
import { Zap, ShieldCheck, ClipboardMinus, Map, Headset, Building2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import AttorneyReferralForm from "@/components/forms/AttorneyReferralForm";

export const metadata: Metadata = {
  title: "For Attorneys — Referral Network",
  description:
    "Give your personal injury clients faster access to qualified medical providers. Reduce administrative work with a dedicated referral coordination team.",
  alternates: { canonical: "/for-attorneys" },
};

const BENEFITS = [
  {
    icon: Zap,
    title: "Fast Patient Placement",
    copy: "Most clients are scheduled with a specialist within 24–48 hours of referral.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Provider Network",
    copy: "Every provider is credential-verified and reviewed for consistent quality of care.",
  },
  {
    icon: ClipboardMinus,
    title: "Reduced Administrative Work",
    copy: "We handle scheduling coordination and documentation requests, freeing up your staff.",
  },
  {
    icon: Building2,
    title: "Wide Specialty Coverage",
    copy: "From chiropractic to neurology to diagnostic imaging, one referral covers every specialty your case needs.",
  },
  {
    icon: Map,
    title: "Statewide Availability",
    copy: "Our network spans urban and rural markets, so location is rarely a barrier to care.",
  },
  {
    icon: Headset,
    title: "Dedicated Referral Coordinators",
    copy: "A single point of contact manages your firm's cases from intake through treatment completion.",
  },
];

export default function ForAttorneysPage() {
  return (
    <>
      <section className="bg-navy-950 py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal className="eyebrow border-teal-400/20 bg-teal-400/10 text-teal-300">For Attorneys</Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-4xl font-bold text-white md:text-5xl">
                Give every client a faster path to treatment
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-lg text-white/60">
                Attorney referrals matter — treatment delays can affect both
                recovery and case value. United Premier Liens gives your firm a
                reliable partner for placing clients with qualified providers,
                without adding to your team&apos;s workload.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="glass-card p-8">
            <h2 className="font-display text-xl font-semibold text-white">
              Submit a Client Referral
            </h2>
            <p className="mt-1.5 text-sm text-white/50">
              A coordinator will follow up within one business hour.
            </p>
            <div className="mt-6 rounded-2xl bg-white p-6">
              <AttorneyReferralForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Why Firms Partner With Us"
            title="Built to support your caseload, not complicate it"
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
