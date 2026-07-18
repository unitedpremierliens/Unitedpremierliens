import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Coverage Areas",
  description:
    "United Premier Liens's personal injury referral network spans urban and rural markets across the United States.",
  alternates: { canonical: "/coverage-areas" },
};

const REGIONS = [
  { region: "Northeast", states: "NY, NJ, PA, MA, CT" },
  { region: "Southeast", states: "FL, GA, NC, SC, TN" },
  { region: "Midwest", states: "IL, OH, MI, IN, WI" },
  { region: "Southwest", states: "TX, AZ, NM, OK" },
  { region: "West", states: "CA, WA, OR, NV" },
  { region: "Mountain", states: "CO, UT, ID, MT" },
];

export default function CoverageAreasPage() {
  return (
    <>
      <section className="bg-navy-950 py-24 text-center">
        <div className="container-premium">
          <Reveal className="eyebrow border-teal-400/20 bg-teal-400/10 text-teal-300">Coverage Areas</Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold text-white md:text-5xl">
              Nationwide coverage, local expertise
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              Our provider network spans 48 states, with dense coverage in
              both major metro areas and underserved rural communities.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-premium">
          <SectionHeading title="Where we operate" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((r, i) => (
              <Reveal key={r.region} delay={i * 0.06} className="surface-card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  <MapPin className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{r.region}</h3>
                <p className="mt-2.5 text-sm text-ink-500">{r.states}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center text-sm text-ink-500">
            Don&apos;t see your state listed? We&apos;re expanding continually — contact us to confirm coverage in your area.
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
