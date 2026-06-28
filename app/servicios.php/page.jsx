import ServicesPage from "@/components/ServicesPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Servicios contables, tributarios, consultivos y legales",
  description: "Servicios contables, impuestos, consultoría empresarial, asesoramiento legal, laboral, corporativo, migratorio, judicial y administrativo.",
  path: "/servicios.php"
});

export default function Page() {
  return <ServicesPage />;
}
