import InfoPage from "@/components/InfoPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Informaciones útiles",
  description: "Información útil para empresas, contribuyentes y clientes que necesitan asesoramiento contable, tributario o legal.",
  path: "/informaciones.php"
});

export default function Page() {
  return <InfoPage />;
}
