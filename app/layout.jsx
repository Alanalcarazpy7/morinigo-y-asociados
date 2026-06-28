import { Analytics } from "@vercel/analytics/react";
import { Inter, Libre_Baskerville } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = buildMetadata({
  title: "Morínigo & Asociados | Auditores y Consultores de Empresas",
  description:
    "Servicios contables, tributarios, administrativos, económicos, legales, auditoría y consultoría empresarial en Paraguay.",
  path: "/",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es-PY">
      <body className={`${inter.variable} ${libre.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
