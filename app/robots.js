import { company } from "@/data/company";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"]
      }
    ],
    sitemap: `${company.domain}/sitemap.xml`,
    host: company.domain
  };
}
