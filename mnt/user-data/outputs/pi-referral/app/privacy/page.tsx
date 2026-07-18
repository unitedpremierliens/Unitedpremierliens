import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "United Premier Liens's privacy policy detailing how we collect, use, and protect your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="section bg-white">
      <div className="container-premium mx-auto max-w-3xl">
        <Reveal>
          <h1 className="font-display text-4xl font-bold text-navy-900">Privacy Policy</h1>
          <p className="mt-3 text-sm text-ink-500">Last updated: July 2026</p>
        </Reveal>

        <Reveal delay={0.05} className="prose prose-slate mt-10 max-w-none">
          <div className="space-y-8 text-ink-700">
            <div>
              <h2 className="font-display text-xl font-semibold text-navy-900">Information We Collect</h2>
              <p className="mt-3 leading-relaxed">
                When you submit a form on this site — as a patient, attorney, or
                medical provider — we collect the information you provide,
                such as your name, contact details, and relevant case or
                practice information, in order to facilitate a medical referral.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-navy-900">How We Use Information</h2>
              <p className="mt-3 leading-relaxed">
                Information submitted through this site is used solely to
                coordinate referrals between patients, attorneys, and our
                network of medical providers. We do not sell personal
                information to third parties.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-navy-900">Information Sharing</h2>
              <p className="mt-3 leading-relaxed">
                We may share relevant referral details with the medical
                provider selected for your case, and with the referring
                attorney or law firm where applicable, strictly for the
                purpose of coordinating treatment.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-navy-900">Data Security</h2>
              <p className="mt-3 leading-relaxed">
                We maintain administrative and technical safeguards designed to
                protect the confidentiality of information submitted through
                this site.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-navy-900">Your Choices</h2>
              <p className="mt-3 leading-relaxed">
                You may contact us at any time to request access to,
                correction of, or deletion of your information, subject to any
                recordkeeping obligations related to an active referral.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-navy-900">Contact Us</h2>
              <p className="mt-3 leading-relaxed">
                Questions about this policy can be directed to
                referrals@unitedpremierliens.com.
              </p>
            </div>
            <p className="text-sm text-ink-500">
              This page is a general privacy policy template and should be
              reviewed by legal counsel before publication to ensure
              compliance with HIPAA and applicable state and federal law.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
