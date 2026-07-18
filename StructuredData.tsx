export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "United Premier Liens Referral Network",
    description:
      "United Premier Liens connects personal injury patients, attorneys, and law firms with qualified chiropractors, orthopedic specialists, pain management clinics, and diagnostic providers nationwide.",
    url: "https://www.unitedpremierliens.com",
    logo: "https://www.unitedpremierliens.com/logo.jpeg",
    telephone: "+1-800-555-0142",
    email: "referrals@unitedpremierliens.com",
    areaServed: "US",
    medicalSpecialty: [
      "Chiropractic",
      "Orthopedic",
      "PainManagement",
      "Neurologic",
      "PhysicalTherapy",
      "Radiography",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQSchema({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
