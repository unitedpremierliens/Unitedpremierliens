import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { href: "/how-it-works", label: "How It Works" },
      { href: "/provider-network", label: "Provider Network" },
      { href: "/coverage-areas", label: "Coverage Areas" },
      { href: "/success-stories", label: "Success Stories" },
    ],
  },
  {
    title: "Who We Serve",
    links: [
      { href: "/for-attorneys", label: "For Attorneys" },
      { href: "/for-patients", label: "For Patients" },
      { href: "/for-providers", label: "For Providers" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/blog", label: "Resources" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-premium py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl">
                <Image src="/logo.jpeg" alt="United Premier Liens logo" fill className="object-cover" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                United Premier <span className="text-teal-400">Liens</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              A nationwide referral network connecting personal injury patients,
              attorneys, and medical providers — with treatment available on a
              medical lien basis, so patients pay nothing upfront.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-teal-400" />
                <span>(800) 555-0142</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-teal-400" />
                <span>referrals@unitedpremierliens.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span>Serving providers nationwide</span>
              </div>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-teal-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} United Premier Liens Referral Network. All rights reserved.</p>
          <p>
            United Premier Liens is a medical referral coordination service and does not
            provide medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}
