import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { serviceCategories } from "@/data/services";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function ServiceDetailPage({ service }) {
  const waUrl = getWhatsAppUrl(
    `Hola, quiero consultar sobre ${service.title} en Morínigo & Asociados.`
  );

  // Servicios relacionados (misma "familia", excluye el actual)
  const related = serviceCategories
    .filter((s) => s.slug !== service.slug && s.featured)
    .slice(0, 3);

  return (
    <>
      {/* ──── HERO ──── */}
      <section className="page-hero" aria-label={service.title}>
        <Container>
          <Breadcrumbs
            items={[
              { label: "Servicios", href: "/servicios.php" },
              { label: service.title },
            ]}
          />
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p style={{ maxWidth: "680px" }}>{service.description}</p>
        </Container>
      </section>

      {/* ──── CONTENIDO PRINCIPAL ──── */}
      <section className="section" aria-label="Detalle del servicio">
        <Container>
          <div className="service-detail-grid">

            {/* ── Sidebar de consulta ── */}
            <aside className="service-detail-sidebar">
              {/* Card de consulta */}
              <div
                style={{
                  background: "var(--color-navy)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 28px rgba(23,59,95,0.14)",
                  position: "sticky",
                  top: "110px",
                }}
              >
                <div style={{ padding: "20px 22px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.68rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "rgba(215,191,130,0.8)",
                      fontWeight: 700,
                    }}
                  >
                    Consulta este servicio
                  </p>
                  <h2
                    style={{
                      margin: "6px 0 0",
                      color: "white",
                      fontSize: "1rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {service.title}
                  </h2>
                </div>

                <div style={{ padding: "20px 22px" }}>
                  <p
                    style={{
                      fontSize: "0.84rem",
                      color: "rgba(255,255,255,0.64)",
                      lineHeight: 1.55,
                      margin: "0 0 18px",
                    }}
                  >
                    {service.summary}
                  </p>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      width: "100%",
                      padding: "11px 16px",
                      borderRadius: "8px",
                      background: "#1f9d55",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      textAlign: "center",
                      marginBottom: "10px",
                    }}
                    aria-label={`Consultar por WhatsApp sobre ${service.title}`}
                  >
                    Consultar por WhatsApp
                  </a>

                  <Link
                    href="/contacto.php"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      padding: "11px 16px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.18)",
                      color: "rgba(255,255,255,0.78)",
                      fontWeight: 600,
                      fontSize: "0.86rem",
                      textAlign: "center",
                    }}
                  >
                    Formulario de contacto
                  </Link>
                </div>

                {/* Info firma */}
                <div
                  style={{
                    padding: "16px 22px",
                    background: "rgba(0,0,0,0.15)",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.76rem",
                      color: "rgba(255,255,255,0.38)",
                      lineHeight: 1.5,
                    }}
                  >
                    Morínigo &amp; Asociados — Auditores y Consultores de
                    Empresas. Asunción, Paraguay.
                  </p>
                </div>
              </div>

              {/* Link volver */}
              <Link
                href="/servicios.php"
                style={{
                  display: "block",
                  marginTop: "16px",
                  fontSize: "0.84rem",
                  color: "var(--color-primary)",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                ← Ver todos los servicios
              </Link>
            </aside>

            {/* ── Contenido principal ── */}
            <div>
              {/* Descripción */}
              <div className="rich-text" style={{ marginBottom: "36px" }}>
                <p className="eyebrow">Alcance del servicio</p>
                <h2 style={{ marginTop: 0 }}>¿Qué incluye?</h2>
                <p style={{ color: "var(--color-muted)", lineHeight: 1.65 }}>
                  {service.description}
                </p>
              </div>

              {/* Lista de ítems */}
              {service.items && service.items.length > 0 && (
                <div>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--color-primary)",
                      marginBottom: "16px",
                    }}
                  >
                    Servicios incluidos
                  </p>
                  <ul className="service-items">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Nota informativa */}
              <div
                style={{
                  marginTop: "32px",
                  padding: "18px 20px",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-line)",
                  borderLeft: "3px solid var(--color-primary)",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  color: "var(--color-muted)",
                  lineHeight: 1.55,
                }}
              >
                <strong style={{ display: "block", color: "var(--color-navy)", marginBottom: "5px" }}>
                  Cómo contratar este servicio
                </strong>
                Para iniciar, indique el tipo de empresa o persona (física o
                jurídica), el período requerido y cualquier antecedente de
                gestión anterior. El equipo podrá presupuestar y coordinar los
                próximos pasos.
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ──── SERVICIOS RELACIONADOS ──── */}
      {related.length > 0 && (
        <section
          className="section section--surface"
          aria-label="Otros servicios"
        >
          <Container>
            <p className="eyebrow">Servicios relacionados</p>
            <h2 style={{ marginBottom: "24px" }}>Otras áreas de asesoramiento</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  style={{
                    display: "block",
                    padding: "20px",
                    border: "1px solid var(--color-line)",
                    borderRadius: "10px",
                    background: "white",
                    transition: "border-color 0.18s, box-shadow 0.18s",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 6px",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--color-primary)",
                    }}
                  >
                    {s.eyebrow}
                  </p>
                  <h3
                    style={{
                      margin: "0 0 8px",
                      fontSize: "0.95rem",
                      color: "var(--color-navy)",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.82rem",
                      color: "var(--color-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {s.summary.substring(0, 90)}…
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
