import LinksPage from "@/components/LinksPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Páginas amigas",
  description: "Enlaces institucionales útiles para empresas, contribuyentes y gestiones oficiales en Paraguay.",
  path: "/enlaces.php"
});

export default function Page() {
  return <LinksPage />;
}
