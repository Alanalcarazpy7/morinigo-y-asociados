import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Impuesto a la Renta Personal (IRP) en Paraguay",
  description:
    "Información sobre el Impuesto a la Renta Personal (IRP) en Paraguay: contribuyentes, base imponible, deducciones, alícuotas y gestiones ante la DNIT.",
  path: "/impuesto-a-la-renta-personal.php",
});

const waUrl = getWhatsAppUrl(
  "Hola, quiero consultar sobre el Impuesto a la Renta Personal (IRP) con Morínigo & Asociados."
);

export default function IRPPage() {
  return (
    <>
      <section className="page-hero" aria-label="Impuesto a la Renta Personal">
        <Container>
          <Breadcrumb
            items={[
              { label: "Informaciones útiles", href: "/informaciones.php" },
              { label: "Impuesto a la Renta Personal" },
            ]}
          />
          <p className="eyebrow">Tributario</p>
          <h1>Impuesto a la Renta Personal (IRP) en Paraguay</h1>
          <p>
            El IRP grava los ingresos de personas físicas domiciliadas en
            Paraguay. Conozca quiénes están alcanzados, cuál es la base
            imponible, las deducciones admitidas y cómo gestionar sus
            obligaciones ante la DNIT.
          </p>
        </Container>
      </section>

      <section className="section" aria-label="Información sobre el IRP">
        <Container className="content-grid">
          <aside className="side-card">
            <p className="eyebrow">Referencia normativa</p>
            <h2 style={{ fontSize: "1.1rem" }}>IRP — Ley N° 2421/04</h2>
            <p>
              El Impuesto a la Renta Personal fue establecido por la Ley
              N° 2421/04 de Reordenamiento Administrativo y de Adecuación
              Fiscal y sus modificaciones.
            </p>
            <p style={{ marginBottom: "20px" }}>
              Para consultas personalizadas sobre su situación como
              contribuyente del IRP, contáctenos.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="service-area__cta"
              style={{ display: "inline-flex" }}
            >
              Consultar por WhatsApp
            </a>
          </aside>

          <div className="rich-text">
            <h2>¿Qué es el IRP?</h2>
            <p>
              El Impuesto a la Renta Personal (IRP) es un tributo que grava las
              rentas de fuente paraguaya obtenidas por personas físicas
              domiciliadas o residentes en el territorio nacional. Es
              administrado por la Dirección Nacional de Ingresos Tributarios
              (DNIT).
            </p>

            <h2>¿Quiénes son contribuyentes del IRP?</h2>
            <p>
              Quedan comprendidas las personas físicas cuyos ingresos brutos
              anuales superen el mínimo no imponible establecido por la DNIT.
              Incluye trabajadores en relación de dependencia, profesionales
              independientes, propietarios de inmuebles que perciban alquileres
              y otros perceptores de rentas de fuente paraguaya.
            </p>

            <h2>Base imponible y alícuota</h2>
            <p>
              La base imponible es la renta neta, que resulta de deducir de los
              ingresos brutos los gastos admitidos por ley. La alícuota general
              del IRP es del <strong>10%</strong> sobre la renta neta imponible.
            </p>

            <h2>Deducciones admitidas</h2>
            <ul className="check-list">
              <li>Gastos personales del contribuyente y familiares a cargo.</li>
              <li>Aportes al IPS y otros sistemas de seguridad social.</li>
              <li>Donaciones a instituciones reconocidas.</li>
              <li>Pérdidas de ejercicios anteriores (en ciertos casos).</li>
              <li>Gastos necesarios para la obtención de los ingresos.</li>
            </ul>

            <div
              className="archive-notice"
              style={{ marginTop: "24px" }}
            >
              <strong>Información de referencia</strong>
              Esta página es informativa. Para asesoramiento personalizado
              sobre su situación como contribuyente del IRP, liquidación,
              declaración jurada o gestiones ante la DNIT, consulte con
              nuestro equipo técnico.
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary"
              >
                Consultar por WhatsApp
              </a>
              <Link href="/contacto.php" className="button button--secondary">
                Formulario de contacto
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
