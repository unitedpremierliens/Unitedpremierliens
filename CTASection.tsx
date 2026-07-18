import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import Reveal from "./Reveal";

export default function CTASection({
  title = "Ready to get the right care to the right patient—fast?",
  description = "Our referral coordinators are standing by to match your case with a qualified provider today.",
  primaryHref = "/for-patients",
  primaryLabel = "Find a Doctor",
  secondaryHref = "/contact",
  secondaryLabel = "Talk to a Coordinator",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section">
      <div className="container-premium">
        <Reveal className="relative overflow-hidden rounded-4xl bg-navy-900 px-8 py-16 text-center md:px-16 md:py-20">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">{description}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={primaryHref} className="btn-teal">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={secondaryHref} className="btn-secondary !border-white/15 !bg-transparent !text-white hover:!bg-white/10">
                <PhoneCall className="h-4 w-4" />
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
