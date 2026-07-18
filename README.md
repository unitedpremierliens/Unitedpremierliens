# United Premier Liens — Personal Injury Referral Network

A premium, enterprise-grade Next.js website for a personal injury doctor
referral service, built for attorneys, patients, and medical providers.

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (scroll reveals, hero animations, animated counters)
- Lucide Icons

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project Structure

```
app/
  layout.tsx            Root layout, global metadata, header/footer
  page.tsx               Home
  about/                 About
  how-it-works/          How It Works
  for-attorneys/         For Attorneys (+ referral form)
  for-patients/          For Patients (+ request form)
  for-providers/         For Providers (+ application form)
  provider-network/      Specialty network overview
  coverage-areas/        Regional coverage
  success-stories/       Testimonials
  faq/                   FAQ (+ FAQPage schema)
  blog/                  Resources/insights listing
  contact/               Contact (+ contact form)
  privacy/                Privacy policy
  terms/                  Terms of service
  sitemap.ts             Dynamic sitemap.xml
  robots.ts              robots.txt
components/
  Header.tsx, Footer.tsx, Reveal.tsx, SectionHeading.tsx,
  StatCounter.tsx, TestimonialCard.tsx, SpecialtyCard.tsx,
  CTASection.tsx, StructuredData.tsx (JSON-LD schemas)
  forms/                 AttorneyReferralForm, PatientRequestForm,
                          ProviderApplicationForm, ContactForm
```

## Before You Deploy

1. **Logo & brand colors** — No logo was available when this project was
   generated, so the palette in `tailwind.config.ts` (`navy` / `teal`) is a
   placeholder. Drop your logo into `public/`, update the `<Header />` and
   `<Footer />` components to use it via `next/image`, and adjust the
   `navy`/`teal` color tokens in `tailwind.config.ts` to match.
2. **Form submissions** — All four forms (`components/forms/*`) currently
   simulate submission client-side. Wire each `handleSubmit` to a real API
   route or CRM endpoint (e.g. `/api/referrals/attorney`,
   `/api/referrals/patient`, `/api/providers/apply`, `/api/contact`).
3. **Domain** — Replace `https://www.unitedpremierliens.com` in `app/layout.tsx`,
   `app/sitemap.ts`, `app/robots.ts`, and `components/StructuredData.tsx`
   with your real domain.
4. **OG image** — Add a real `public/og-image.jpg` (1200×630) referenced in
   `app/layout.tsx`.
5. **Legal review** — `app/privacy/page.tsx` and `app/terms/page.tsx` are
   professionally-toned starting templates, not legal advice. Have counsel
   review both for HIPAA and state-specific compliance before publishing.
6. **Company name/branding** — "United Premier Liens" is a placeholder brand name;
   rename throughout `components/Header.tsx`, `components/Footer.tsx`, and
   metadata as needed.

## Deploy

This project deploys cleanly to Vercel:

```bash
npm run build
```

Push to GitHub and import the repo in Vercel, or run `vercel` from the CLI.
