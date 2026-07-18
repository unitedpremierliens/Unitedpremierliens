import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real outcomes from attorneys, patients, and medical providers who work with United Premier Liens's referral network.",
  alternates: { canonical: "/success-stories" },
};

const STORIES = [
  {
    quote: "Our clients get seen within a day or two instead of waiting weeks. It's changed how quickly we can build a case.",
    name: "Sarah M.",
    role: "Personal Injury Attorney, Regional Firm",
  },
  {
    quote: "I didn't know where to start after my accident. They found me a chiropractor near my house the same week.",
    name: "David R.",
    role: "Patient",
  },
  {
    quote: "The referrals are well-qualified and the coordination team is responsive. It's a genuine partnership.",
    name: "Dr. Elena Cho",
    role: "Orthopedic Specialist, Network Provider",
  },
  {
    quote: "As a solo practitioner, referral volume used to be unpredictable. This network changed that completely.",
    name: "Dr. Marcus Webb",
    role: "Chiropractor, Network Provider",
  },
  {
    quote: "Every client we've referred has had a smooth scheduling experience. That reliability matters for our firm.",
    name: "James T.",
    role: "Paralegal, Injury Law Group",
  },
  {
    quote: "After my injury, I was overwhelmed. The coordinator walked me through everything and found care fast.",
    name: "Priya K.",
    role: "Patient",
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="bg-navy-950 py-24 text-center">
        <div className="container-premium">
          <Reveal className="eyebrow border-teal-400/20 bg-teal-400/10 text-teal-300">Success Stories</Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold text-white md:text-5xl">
              Real outcomes, real relationships
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-premium">
          <SectionHeading title="What our network has to say" />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {STORIES.map((s, i) => (
              <TestimonialCard key={s.name} {...s} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
