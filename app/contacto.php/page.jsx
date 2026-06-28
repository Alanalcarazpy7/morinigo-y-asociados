import ContactPage from "@/components/ContactPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contacto",
  description: "Contacte con Morínigo & Asociados para consultas contables, tributarias, administrativas, económicas o legales.",
  path: "/contacto.php"
});

export default function Page() {
  return <ContactPage />;
}
