import { notFound } from "next/navigation";

export default function LegacyFallbackPage() {
  // No respondemos 200 a URLs antiguas desconocidas para evitar soft-404.
  // Revisar logs de Vercel / Search Console y agregar rutas faltantes en app/ o next.config.mjs.
  notFound();
}
