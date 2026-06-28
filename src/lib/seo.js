import { company } from "@/data/company";

export function buildMetadata({ title, description, path = "/", image = "/og-morinigo.png" }) {
  const url = `${company.domain}${path}`;
  const fullTitle = title.includes(company.name) ? title : `${title} | ${company.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(company.domain),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.name,
      locale: "es_PY",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image]
    }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    legalName: company.legalName,
    url: company.domain,
    email: company.email,
    telephone: company.phones.join(" / "),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Agustín Pio Barrios c/ Augusto Roa Bastos. Edificio Boulevard, Dpto. F",
      addressLocality: "Asunción",
      addressRegion: "Central",
      addressCountry: "PY"
    },
    sameAs: [company.social.facebook, company.social.instagram].filter(Boolean)
  };
}
