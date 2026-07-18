import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationSchema } from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const SITE_URL = "https://www.unitedpremierliens.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "United Premier Liens | Personal Injury Doctor Referral Network",
    template: "%s | United Premier Liens",
  },
  description:
    "United Premier Liens connects personal injury patients, attorneys, and law firms with vetted chiropractors, orthopedic specialists, pain management clinics, and diagnostic imaging centers nationwide — same-day placement, treatment on a medical lien basis with no upfront cost to patients.",
  keywords: [
    "personal injury doctor referral",
    "accident doctor near me",
    "attorney medical referral network",
    "chiropractor personal injury",
    "orthopedic specialist referral",
    "pain management referral network",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "United Premier Liens",
    title: "United Premier Liens | Personal Injury Doctor Referral Network",
    description:
      "Fast, trusted medical referrals for personal injury patients, attorneys, and providers.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "United Premier Liens | Personal Injury Doctor Referral Network",
    description:
      "Fast, trusted medical referrals for personal injury patients, attorneys, and providers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <OrganizationSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
