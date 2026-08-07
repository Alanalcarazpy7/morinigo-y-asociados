import CompanyPage from "@/components/CompanyPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "La Firma",
  description: "Conozca la trayectoria de Morínigo & Asociados, estudio contable y jurídico en Paraguay desde 1988.",
  path: "/la-empresa.php"
});

export default function Page() {
  return <CompanyPage />;
}
