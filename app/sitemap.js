import { company } from "@/data/company";
import { serviceCategories } from "@/data/services";
import { legalCategories } from "@/data/legalResources";

export default function sitemap() {
  const now = new Date();
  const base = company.domain;

  // Rutas principales
  const mainRoutes = [
    { url: `${base}/`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/la-empresa.php`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/servicios.php`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/informaciones.php`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/enlaces.php`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${base}/contacto.php`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/diccionarios.php`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${base}/impuesto-a-la-renta-personal.php`, priority: 0.8, changeFrequency: "monthly" },
  ];

  // Servicios con slug
  const serviceRoutes = serviceCategories.map((s) => ({
    url: `${base}/servicios/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  // Rubros históricos con folder
  const rubroRoutes = legalCategories
    .filter((c) => c.folder && !c.external)
    .map((c) => ({
      url: `${base}/rubros/${c.folder}`,
      priority: 0.6,
      changeFrequency: "yearly",
    }));

  return [...mainRoutes, ...serviceRoutes, ...rubroRoutes].map((route) => ({
    ...route,
    lastModified: now,
  }));
}
