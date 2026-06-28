import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Diccionarios jurídicos, económicos y técnicos",
  description:
    "Glosarios y diccionarios de referencia: jurídico, económico, contable, aduanero, tributario y ecoambiental para profesionales y estudiantes en Paraguay.",
  path: "/diccionarios.php",
});

const diccionarios = [
  {
    title: "Diccionario Jurídico",
    description:
      "Términos legales, definiciones procesales, figuras del derecho civil, penal y comercial aplicados en el sistema jurídico paraguayo.",
    type: "Derecho",
  },
  {
    title: "Diccionario Económico",
    description:
      "Conceptos de macroeconomía, microeconomía, indicadores, política monetaria y terminología del sistema financiero.",
    type: "Economía",
  },
  {
    title: "Diccionario Contable",
    description:
      "Términos de contabilidad financiera, PCGA, NIIF, estados financieros, auditoría y registros contables.",
    type: "Contabilidad",
  },
  {
    title: "Diccionario Aduanero",
    description:
      "Terminología aduanera, regímenes de importación y exportación, clasificación arancelaria, Incoterms y nomenclatura.",
    type: "Comercio exterior",
  },
  {
    title: "Diccionario Tributario",
    description:
      "Conceptos impositivos paraguayos: IVA, IRE, IRP, IDU, INR, retenciones, DNIT y administración tributaria.",
    type: "Tributario",
  },
  {
    title: "Diccionario Ecoambiental",
    description:
      "Terminología sobre medio ambiente, recursos naturales, legislación ambiental y desarrollo sostenible.",
    type: "Medio ambiente",
  },
];

const waUrl = getWhatsAppUrl(
  "Hola, quiero consultar sobre terminología legal o contable con Morínigo & Asociados."
);

export default function DiccionariosPage() {
  return (
    <>
      <section className="page-hero" aria-label="Diccionarios">
        <Container>
          <Breadcrumb
            items={[
              { label: "Informaciones útiles", href: "/informaciones.php" },
              { label: "Diccionarios" },
            ]}
          />
          <p className="eyebrow">Referencia técnica</p>
          <h1>Diccionarios jurídicos, económicos y técnicos</h1>
          <p>
            Glosarios y diccionarios de referencia para profesionales,
            empresas y estudiantes: terminología jurídica, económica,
            contable, aduanera, tributaria y ecoambiental.
          </p>
        </Container>
      </section>

      <section className="section" aria-label="Lista de diccionarios">
        <Container>
          <div className="library-grid">
            {diccionarios.map((dic) => (
              <article key={dic.title} className="library-card">
                <span className="library-card__type">{dic.type}</span>
                <h2 style={{ fontSize: "0.95rem" }}>{dic.title}</h2>
                <p>{dic.description}</p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="library-card__link"
                  aria-label={`Consultar sobre ${dic.title}`}
                >
                  Consultar con la firma →
                </a>
              </article>
            ))}
          </div>

          <div
            className="archive-notice"
            style={{ maxWidth: "660px", marginTop: "8px" }}
          >
            <strong>Nota sobre este archivo</strong>
            Los diccionarios forman parte del repositorio histórico de
            Morínigo &amp; Asociados. Para consultas sobre terminología
            específica aplicada a su caso, contáctenos directamente.
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "24px" }}>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--primary"
            >
              Consultar por WhatsApp
            </a>
            <Link href="/informaciones.php" className="button button--secondary">
              Ver biblioteca legal
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
