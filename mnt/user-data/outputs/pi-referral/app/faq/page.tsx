import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { FAQSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions from patients, attorneys, and providers about United Premier Liens's personal injury referral network.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  {
    question: "Does it cost anything for patients to use United Premier Liens?",
    answer:
      "No. There is never a cost or obligation for patients to use our referral service. We're compensated by our provider network, not by patients.",
  },
  {
    question: "How quickly can I get an appointment?",
    answer:
      "Most patients are matched and scheduled within 24 to 48 hours of their initial request, depending on specialty and location.",
  },
  {
    question: "Do I need an attorney to use this service?",
    answer:
      "No. Patients can request a referral directly, whether or not they are working with an attorney.",
  },
  {
    question: "How are providers vetted before joining the network?",
    answer:
      "Every provider undergoes a credentialing review, including license verification and practice history, before being added to our network.",
  },
  {
    question: "Can attorneys track the status of a client referral?",
    answer:
      "Yes. Referring attorneys are kept informed of scheduling status and can reach their dedicated coordinator directly with questions.",
  },
  {
    question: "What specialties are included in the network?",
    answer:
      "Our network includes chiropractors, orthopedic specialists, pain management clinics, physical therapists, neurologists, spine specialists, diagnostic imaging centers, surgeons, and primary care physicians.",
  },
  {
    question: "How do medical providers apply to join?",
    answer:
      "Providers can submit an application through our For Providers page. Our credentialing team typically responds within two business days.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Yes. We handle patient and case information with strict confidentiality throughout the referral and treatment process.",
  },
];

export default function FAQPage() {
  return (
    <>
      <FAQSchema items={FAQS} />
      <section className="bg-navy-950 py-24 text-center">
        <div className="container-premium">
          <Reveal className="eyebrow border-teal-400/20 bg-teal-400/10 text-teal-300">FAQ</Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold text-white md:text-5xl">
              Frequently asked questions
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-premium mx-auto max-w-3xl">
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.04} className="surface-card p-6">
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  {faq.question}
                </h3>
                <p className="mt-2.5 text-ink-500">{faq.answer}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
