import type { Metadata } from "next";
import { TrendingUp, Network, Headset, Handshake, ClipboardCheck, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProviderApplicationForm from "@/components/forms/ProviderApplicationForm";

export const metadata: Metadata = {
  title: "For Medical Providers — Join Our Referral Network",
  description:
    "Join a nationwide personal injury referral network. Receive qualified patient referrals, grow your practice, and simplify onboarding.",
  alternates: { canonical: "/for-providers" },
};

const BENEFITS = [
  {
    icon: Users,
    title: "Receive Qualified Referrals",
    copy: "Every referral is pre-screened for specialty fit, so you spend less time on intake and more time on care.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Practice",
    copy: "Consistent, qualified referral volume helps fill your schedule without added marketing spend.",
  },
  {
    icon: Network,
    title: "Expand Your Professional Network",
    copy: "Connect with attorneys and complementary specialists across your region.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    copy: "A network liaison is available for scheduling questions, documentation, and case coordination.",
  },
  {
    icon: Handshake,
    title: "Long-Term Relationships",
    copy: "We prioritize lasting partnerships with providers over one-off placements.",
  },
  {
    icon: ClipboardCheck,
    title: "Simple Onboarding",
    copy: "Credentialing and setup are designed to take days, not months.",
  },
];

export default function ForProvidersPage() {
  return (
    <>
      <section className="bg-navy-950 py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal className="eyebrow border-teal-400/20 bg-teal-400/10 text-teal-300">For Medical Providers</Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-4xl font-bold text-white md:text-5xl">
                Grow your practice with qualified referrals
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-lg text-white/60">
                Join a nationwide network built exclusively for personal
                injury care. We bring the referrals — you focus on providing
                excellent treatment.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="glass-card p-8">
            <h2 className="font-display text-xl font-semibold text-white">Apply to Join</h2>
            <p className="mt-1.5 text-sm text-white/50">
              Our credentialing team typically responds within two business days.
            </p>
            <div className="mt-6 rounded-2xl bg-white p-6">
              <ProviderApplicationForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Benefits of Joining"
            title="A referral partner that respects your practice"
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
