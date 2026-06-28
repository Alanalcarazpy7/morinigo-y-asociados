import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { company } from "@/data/company";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const waUrl = getWhatsAppUrl(
  "Hola, quiero solicitar asesoramiento de Morínigo & Asociados."
);

const firmAreas = [
  {
    title: "Gestión contable y tributaria",
    desc: "Registros, balances, declaraciones juradas, IVA, IRE, IRP y liquidaciones según normativa de la DNIT."
  },
  {
    title: "Auditoría y cumplimiento",
    desc: "Auditoría interna, estados contables, revisiones programadas y certificación de créditos tributarios."
  },
  {
    title: "Consultoría empresarial",
    desc: "Procesos, contrataciones públicas, facturación electrónica, APP, capacitaciones y mejora organizacional."
  },
  {
    title: "Asesoramiento legal corporativo",
    desc: "Derecho civil, comercial, laboral, societario, migraciones, propiedad intelectual y cumplimiento normativo."
  }
];

export default function CompanyPage() {
  return (
    <>
      {/* ——— HERO ——— */}
      <section className="page-hero" aria-label="La Firma">
        <Container>
          <Breadcrumbs items={[{ label: "La Firma" }]} />
          <p className="eyebrow">La Firma</p>
          <h1>{company.name}</h1>
          <p>
            Auditores y Consultores de Empresas con sede en Asunción, Paraguay.
            Desde {company.foundedYear} brindamos servicios profesionales en
            contabilidad, tributación, auditoría, consultoría y asesoramiento
            legal corporativo.
          </p>
        </Container>
      </section>

      {/* ——— DESDE 1988 + IMAGEN ——— */}
      <section className="section" aria-labelledby="firma-historia-title">
        <Container className="content-grid">
          {/* Imagen real del equipo — fallback elegante si no carga */}
          <ImageWithFallback
            src="/brand/firma-equipo.jpg"
            alt="Equipo de Morínigo &amp; Asociados"
            fallbackText="M&A"
            fallbackSub={`Desde ${company.foundedYear}`}
            style={{
              boxShadow: "0 24px 60px rgba(0,0,0,0.28), 0 0 0 1px rgba(104,185,223,0.1)",
              borderRadius: "14px",
            }}
          />

          <div className="rich-text">
            <p className="eyebrow">Trayectoria</p>
            <h2 id="firma-historia-title">
              Desde {company.foundedYear}, asesoramiento empresarial en Paraguay
            </h2>
            <p>
              Morínigo &amp; Asociados es una asociación de profesionales
              independientes orientada a la prestación de servicios empresariales
              con foco en asesoramiento contable, tributario, administrativo,
              económico y legal.
            </p>
            <p>
              La actividad de la firma abarca una amplia gama relativa a la
              profesión contable, desde el inicio hasta el cierre de operaciones
              de empresas. Incluye consultoría tributaria, registración contable,
              auditorías, organización y método, y selección o capacitación de
              personal.
            </p>
            <p>
              La firma cuenta con experiencia en contabilidad agropecuaria,
              proyectos de inversión, estudios de mercado e impacto ambiental, y
              gestiones ante organismos como la DNIT, Aduanas, IPS, Ministerio de
              Trabajo, Ministerio de Industria y Comercio, SENACSA y otras
              instituciones del Estado paraguayo.
            </p>
            <p>
              Morínigo &amp; Asociados mantiene relaciones profesionales con
              estudios notariales, jurídicos y agencias de despachos aduaneros,
              con el objetivo de ofrecer una gestión ágil, eficiente y de alta
              calidad técnica para sus clientes.
            </p>
          </div>
        </Container>
      </section>

      {/* ——— ÁREAS DE ESPECIALIZACIÓN ——— */}
      <section className="section section--surface" aria-labelledby="areas-firm-title">
        <Container>
          <p className="eyebrow">Áreas de especialización</p>
          <h2 id="areas-firm-title">Cobertura profesional de la firma</h2>
          <p className="section-description">
            Cuatro áreas principales que integran el asesoramiento integral para
            empresas, contribuyentes e instituciones en Paraguay.
          </p>
          <div className="firm-areas-grid">
            {firmAreas.map((area) => (
              <div key={area.title} className="firm-area-card">
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ——— ENFOQUE DE TRABAJO ——— */}
      <section className="section" aria-labelledby="enfoque-title">
        <Container>
          <div className="content-grid">
            <div>
              <p className="eyebrow">Enfoque de trabajo</p>
              <h2 id="enfoque-title">¿Cómo trabaja la firma?</h2>
            </div>
            <div className="rich-text">
              <p>
                La firma trabaja de manera coordinada y personalizada para cada
                cliente, adaptando los servicios al tipo, tamaño y rubro de cada
                empresa o contribuyente. Se prioriza la comunicación directa y el
                acompañamiento continuo durante cada proceso.
              </p>
              <p>
                Los servicios pueden contratarse por módulo específico (ej.
                declaraciones juradas mensuales, auditoría anual, consulta
                tributaria puntual) o como paquete integral de gestión contable
                y administrativa permanente.
              </p>
              <p>
                Para coordinar una reunión inicial de diagnóstico sin costo,
                puede contactarse a través de WhatsApp o el formulario de
                contacto.
              </p>
              <Link href="/servicios.php" className="button button--ghost">
                Ver todos los servicios →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ——— CTA ——— */}
      <Container>
        <section
          className="cta-panel"
          aria-label="Solicitar asesoramiento"
          style={{ margin: "0 0 84px" }}
        >
          <div>
            <p className="eyebrow">Solicitar asesoramiento</p>
            <h2>Coordine una reunión con la firma</h2>
            <p>
              Puede consultarnos por WhatsApp, email o completando el formulario
              de contacto para coordinar una entrevista inicial sin costo.
            </p>
          </div>
          <div className="cta-panel__actions">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--primary"
            >
              Consultar por WhatsApp
            </a>
            <Link href="/contacto.php" className="button button--secondary">
              Ver contacto
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
}
