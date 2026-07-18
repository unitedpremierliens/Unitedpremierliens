import type { Metadata } from "next";
import { ArrowRight, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description:
    "Guides and insights for personal injury patients, attorneys, and medical providers navigating the referral and recovery process.",
  alternates: { canonical: "/blog" },
};

const ARTICLES = [
  {
    title: "What to Expect at Your First Post-Accident Appointment",
    excerpt:
      "A walkthrough of what typically happens during an initial evaluation, from intake paperwork to treatment planning.",
    readTime: "5 min read",
    category: "Patients",
  },
  {
    title: "How Attorneys Can Streamline Client Medical Referrals",
    excerpt:
      "Practical steps for reducing administrative overhead while ensuring clients receive timely, well-documented care.",
    readTime: "6 min read",
    category: "Attorneys",
  },
  {
    title: "Choosing the Right Specialist for a Whiplash Injury",
    excerpt:
      "An overview of when to see a chiropractor versus an orthopedic specialist or neurologist after a collision.",
    readTime: "4 min read",
    category: "Patients",
  },
  {
    title: "Credentialing Standards in Our Provider Network",
    excerpt:
      "A look at how we evaluate and onboard new medical providers to maintain consistent quality of care.",
    readTime: "5 min read",
    category: "Providers",
  },
  {
    title: "Understanding Diagnostic Imaging After an Accident",
    excerpt:
      "When MRI, CT, or X-ray imaging is typically recommended, and how it supports both treatment and documentation.",
    readTime: "5 min read",
    category: "Patients",
  },
  {
    title: "Building a Long-Term Referral Partnership as a Provider",
    excerpt:
      "What sustainable, high-quality referral relationships look like from the provider's side of the network.",
    readTime: "6 min read",
    category: "Providers",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy-950 py-24 text-center">
        <div className="container-premium">
          <Reveal className="eyebrow border-teal-400/20 bg-teal-400/10 text-teal-300">Resources</Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold text-white md:text-5xl">
              Guides for patients, attorneys, and providers
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-premium">
          <SectionHeading title="Latest resources" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article, i) => (
              <Reveal key={article.title} delay={i * 0.06} className="surface-card group flex flex-col p-7">
                <span className="eyebrow w-fit">{article.category}</span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-navy-900">
                  {article.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">
                  {article.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-ink-100 pt-4">
                  <span className="flex items-center gap-1.5 text-xs text-ink-500">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readTime}
                  </span>
                  <ArrowRight className="h-4 w-4 text-teal-500 transition-transform group-hover:translate-x-1" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
