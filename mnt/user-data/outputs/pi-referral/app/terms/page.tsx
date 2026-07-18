import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of United Premier Liens's website and referral coordination services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="section bg-white">
      <div className="container-premium mx-auto max-w-3xl">
        <Reveal>
          <h1 className="font-display text-4xl font-bold text-navy-900">Terms of Service</h1>
          <p className="mt-3 text-sm text-ink-500">Last updated: July 2026</p>
        </Reveal>

        <Reveal delay={0.05} className="mt-10 space-y-8 text-ink-700">
          <div>
            <h2 className="font-display text-xl font-semibold text-navy-900">Nature of Our Service</h2>
            <p className="mt-3 leading-relaxed">
              United Premier Liens operates a referral coordination service connecting
              personal injury patients, attorneys, and law firms with
              independent, third-party medical providers. We do not employ
              providers, and we do not practice medicine, diagnose
              conditions, or provide medical advice.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy-900">No Guarantee of Outcome</h2>
            <p className="mt-3 leading-relaxed">
              While we make every effort to match patients with qualified
              providers promptly, United Premier Liens does not guarantee a specific
              appointment time, treatment outcome, or legal result.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy-900">Provider Independence</h2>
            <p className="mt-3 leading-relaxed">
              All medical providers in our network are independent
              practitioners responsible for their own diagnosis, treatment
              decisions, and compliance with applicable medical standards.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy-900">Use of This Website</h2>
            <p className="mt-3 leading-relaxed">
              By submitting a form on this site, you confirm that the
              information provided is accurate to the best of your knowledge
              and consent to being contacted by United Premier Liens regarding your
              request.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy-900">Limitation of Liability</h2>
            <p className="mt-3 leading-relaxed">
              United Premier Liens is not liable for the acts or omissions of
              independent medical providers, attorneys, or law firms
              participating in our network.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy-900">Changes to These Terms</h2>
            <p className="mt-3 leading-relaxed">
              We may update these terms from time to time. Continued use of
              this site constitutes acceptance of the updated terms.
            </p>
          </div>
          <p className="text-sm text-ink-500">
            This page is a general terms-of-service template and should be
            reviewed by legal counsel before publication.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
