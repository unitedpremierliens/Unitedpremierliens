import type { Metadata } from "next";
import { ShieldCheck, Target, HeartHandshake, Building2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how United Premier Liens built a nationwide referral network dedicated exclusively to personal injury patients, attorneys, and medical providers.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity First",
    copy: "Every provider in our network is credential-verified. We never place a patient with a provider we wouldn't trust ourselves.",
  },
  {
    icon: Target,
    title: "Speed With Purpose",
    copy: "Delayed treatment can affect both recovery and legal outcomes. We built our process to remove friction at every step.",
  },
  {
    icon: HeartHandshake,
    title: "People Before Paperwork",
    copy: "Behind every referral is a person navigating a difficult moment. Our coordinators treat every case with that in mind.",
  },
  {
    icon: Building2,
    title: "Built to Scale",
    copy: "From solo practitioners to statewide firms, our infrastructure supports referral volume without sacrificing quality.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-950 py-24 text-center">
        <div className="container-premium">
          <Reveal className="eyebrow border-teal-400/20 bg-teal-400/10 text-teal-300">About United Premier Liens</Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold text-white md:text-5xl">
              A referral network built exclusively for personal injury care
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              We exist for one reason: to get injured patients in front of the
              right medical provider as quickly and reliably as possible —
              while giving attorneys and providers a partner they can count on.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-premium grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-5 font-display text-3xl font-bold text-navy-900">
              Why we built United Premier Liens
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              Personal injury cases move fast, but medical scheduling often
              doesn&apos;t. Patients were left calling clinic after clinic
              while attorneys lost valuable time waiting on treatment records.
              We built United Premier Liens to close that gap — a dedicated
              coordination layer between patients, legal teams, and vetted
              medical providers.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              Today, our coordinators manage referrals across a nationwide
              network of specialists, giving every stakeholder in a personal
              injury case a faster, more transparent path to treatment.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="surface-card p-10">
            <h3 className="font-display text-xl font-semibold text-navy-900">Our Mission</h3>
            <p className="mt-3 text-ink-500">
              To make timely, quality medical care accessible to every
              personal injury patient — regardless of where they live or who
              represents them.
            </p>
            <h3 className="mt-8 font-display text-xl font-semibold text-navy-900">Our Standard</h3>
            <p className="mt-3 text-ink-500">
              Every provider in our network meets strict credentialing
              requirements and is reviewed on an ongoing basis for quality of
              care and patient experience.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-ink-100">
        <div className="container-premium">
          <SectionHeading eyebrow="What We Value" title="The principles behind every referral" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="surface-card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{v.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
