"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";
import { company } from "@/data/company";
import { serviceCategories } from "@/data/services";
import { legalCategories } from "@/data/legalResources";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const featuredServices = serviceCategories.filter((s) => s.featured);
const infoPreview = legalCategories.filter((c) =>
  ["tributario", "leyes", "fundamental"].includes(c.type)
).slice(0, 6);

const practiceAreas = [
  {
    title: "Contabilidad y registros",
    desc: "Balances, declaraciones juradas, libros exigidos por ley y liquidaciones periódicas.",
  },
  {
    title: "Tributación",
    desc: "Planificación fiscal, revisiones, certificaciones y gestiones ante la DNIT.",
  },
  {
    title: "Auditoría",
    desc: "Auditoría interna y de estados contables para empresas y organismos.",
  },
  {
    title: "Consultoría empresarial",
    desc: "Procesos, contrataciones públicas, facturación electrónica y mejora organizacional.",
  },
  {
    title: "Legal corporativo",
    desc: "Derecho civil, comercial, laboral, migraciones, propiedad intelectual y cumplimiento normativo.",
  },
];

/* ────────────────────────────────────────────────────────────
   Sub-componente client-side: imagen hero con fallback automático
   ──────────────────────────────────────────────────────────── */
function HeroImage() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #0f2d4d 0%, #1d5080 60%, #2d6fa6 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontSize: "7rem",
            fontWeight: 900,
            color: "rgba(255,255,255,0.05)",
            letterSpacing: "-0.06em",
          }}
        >
          M&amp;A
        </span>
      </div>
    );
  }

  return (
    <img
      src="/brand/hero-office.jpg"
      alt="Oficinas de Morínigo & Asociados en Asunción"
      onError={() => setImgError(true)}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center 30%",
        display: "block",
      }}
    />
  );
}

/* ────────────────────────────────────────────────────────────
   Página principal
   ──────────────────────────────────────────────────────────── */
export default function HomePage() {
  const waUrl = getWhatsAppUrl(company.ctaMessage);

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
          ══════════════════════════════════════════ */}
      <section className="institutional-hero" aria-label="Inicio">
        <Container className="institutional-hero__grid">

          {/* ── Columna izquierda: texto ── */}
          <div className="institutional-hero__content">
            <p className="hero-kicker">Auditores y Consultores de Empresas</p>

            <h1 style={{ textShadow: "0 2px 32px rgba(0,0,0,0.18)" }}>
              Asesoramiento contable, tributario y jurídico para empresas en
              Paraguay
            </h1>

            <p className="hero-lead">
              Morínigo &amp; Asociados acompaña a empresas, contribuyentes e
              instituciones en gestión contable, cumplimiento tributario,
              auditoría, consultoría y asesoramiento legal corporativo.
            </p>

            {/* Badges estilo glassmorphism */}
            <div className="hero-proof">
              {["Contabilidad", "Tributación", "Auditoría", "Consultoría", "Legal"].map((b) => (
                <span
                  key={b}
                  style={{
                    background: "rgba(255,255,255,0.09)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.88)",
                    padding: "7px 14px",
                    borderRadius: "20px",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    backdropFilter: "blur(6px)",
                    letterSpacing: "0.02em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="hero__actions">
              <Link
                href="/servicios.php"
                className="button button--primary"
                aria-label="Ver todas las áreas de servicio"
              >
                Ver servicios
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Consultar por WhatsApp"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: "46px",
                  padding: "12px 20px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.28)",
                  background: "rgba(255,255,255,0.08)",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  backdropFilter: "blur(6px)",
                  transition: "background 0.18s, border-color 0.18s",
                }}
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          {/* ── Columna derecha: imagen con overlays y panel inferior ── */}
          <aside
            style={{
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",               /* La imagen nunca se sale */
              height: "clamp(340px, 48vw, 500px)",
              background: "linear-gradient(135deg, #0f2d4d, #1a4a7a)",
              /* Sombra dramática + ring azul muy sutil */
              boxShadow:
                "0 40px 90px rgba(0,0,0,0.5), 0 0 0 1px rgba(104,185,223,0.15), inset 0 1px 0 rgba(255,255,255,0.06)",
              alignSelf: "center",
            }}
            aria-label="Imagen institucional de la firma"
          >
            {/* Imagen real (client-side con fallback) */}
            <HeroImage />

            {/* Overlay superior muy suave — deja ver la imagen en el centro */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: [
                  "linear-gradient(180deg, rgba(7,24,44,0.42) 0%, transparent 30%)",
                  "linear-gradient(to top,  rgba(7,24,44,0.97) 0%, rgba(7,24,44,0.68) 30%, transparent 58%)",
                ].join(", "),
                zIndex: 1,
              }}
              aria-hidden="true"
            />

            {/* Badge "Desde 1988" — esquina superior derecha */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                zIndex: 3,
                background: "rgba(7,24,44,0.68)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(215,191,130,0.45)",
                borderRadius: "10px",
                padding: "9px 14px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "0.6rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "rgba(215,191,130,0.75)",
                }}
              >
                Trayectoria
              </p>
              <p
                style={{
                  margin: "3px 0 0",
                  fontSize: "1.1rem",
                  fontWeight: 900,
                  color: "#d7bf82",
                  letterSpacing: "-0.02em",
                }}
              >
                Desde {company.foundedYear}
              </p>
            </div>

            {/* Panel inferior con info institucional */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 2,
                padding: "18px 22px 22px",
                borderTop: "1px solid rgba(215,191,130,0.18)",
              }}
            >
              {/* Nombre */}
              <p
                style={{
                  margin: "0 0 11px",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "rgba(215,191,130,0.88)",
                }}
              >
                Morínigo &amp; Asociados
              </p>

              {/* Servicios en 2 columnas */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "5px 12px",
                }}
              >
                {[
                  "Contabilidad y registros",
                  "Consultoría tributaria",
                  "Auditoría interna",
                  "Asesoramiento legal",
                ].map((item) => (
                  <div
                    key={item}
                    style={{ display: "flex", alignItems: "center", gap: "7px" }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "#d7bf82",
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.82)",
                        lineHeight: 1.35,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Dirección */}
              <p
                style={{
                  margin: "12px 0 0",
                  paddingTop: "10px",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.38)",
                }}
              >
                {company.shortAddress}
              </p>
            </div>
          </aside>

        </Container>
      </section>

      {/* ══════════════════════════════════════════
          LA FIRMA
          ══════════════════════════════════════════ */}
      <section className="home-firm" aria-labelledby="firma-title">
        <Container>
          <div className="home-firm__grid">
            <div>
              <p className="eyebrow">La Firma</p>
              <h2 id="firma-title">
                Una firma orientada a gestión, cumplimiento y asesoramiento
                empresarial
              </h2>
              <dl className="firm-meta">
                <div className="firm-meta__item">
                  <dt>Fundación</dt>
                  <dd>Desde {company.foundedYear}</dd>
                </div>
                <div className="firm-meta__item">
                  <dt>Ubicación</dt>
                  <dd>Asunción, Paraguay</dd>
                </div>
                <div className="firm-meta__item">
                  <dt>Especialidades</dt>
                  <dd>Contabilidad · Tributación · Auditoría · Legal</dd>
                </div>
              </dl>
            </div>

            <div className="rich-text">
              <p>
                Morínigo &amp; Asociados es una asociación de profesionales
                independientes con trayectoria desde {company.foundedYear}, dedicada
                al desarrollo de servicios empresariales con foco en
                asesoramiento contable, tributario, administrativo, económico y
                legal.
              </p>
              <p>
                La firma cuenta con experiencia en contabilidad agropecuaria,
                proyectos de inversión, estudios de mercado, impacto ambiental
                y gestiones ante organismos como DNIT, Aduanas, IPS, Ministerio
                de Trabajo, SENACSA y otras instituciones del Estado paraguayo.
              </p>
              <p>
                Mantiene relaciones profesionales con estudios notariales,
                jurídicos y agencias de despachos aduaneros, ofreciendo una
                gestión ágil y eficiente para sus clientes.
              </p>
              <Link href="/la-empresa.php" className="button button--ghost">
                Conocer la firma →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          ÁREAS DE PRÁCTICA
          ══════════════════════════════════════════ */}
      <section className="practice-areas" aria-labelledby="areas-title">
        <Container>
          <p className="eyebrow">Áreas de práctica</p>
          <h2 id="areas-title">Cinco áreas de intervención profesional</h2>
          <p className="section-description">
            Cada área agrupa los servicios según su naturaleza técnica,
            permitiendo identificar rápidamente el soporte necesario.
          </p>
          <div className="practice-grid" role="list">
            {practiceAreas.map((area) => (
              <div key={area.title} className="practice-item" role="listitem">
                <span className="practice-item__icon" aria-hidden="true" />
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          SERVICIOS DESTACADOS
          ══════════════════════════════════════════ */}
      <section className="featured-services" aria-labelledby="servicios-title">
        <Container>
          <p className="eyebrow">Servicios profesionales</p>
          <h2 id="servicios-title">Áreas principales de asesoramiento</h2>
          <p className="section-description">
            Contabilidad, tributación y consultoría empresarial como pilares
            del servicio integral que ofrece la firma.
          </p>
          <div className="featured-services__grid">
            {featuredServices.map((service) => (
              <article key={service.slug} className="service-card">
                <div className="service-card__top">
                  <p className="service-card__eyebrow">{service.eyebrow}</p>
                </div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link
                  href={`/servicios/${service.slug}`}
                  aria-label={`Ver detalle de ${service.title}`}
                >
                  Ver alcance del servicio
                </Link>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "28px", textAlign: "center" }}>
            <Link href="/servicios.php" className="button button--primary">
              Ver todos los servicios
            </Link>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          INFO ÚTIL PREVIEW
          ══════════════════════════════════════════ */}
      <section className="home-info" aria-labelledby="info-title">
        <Container>
          <p className="eyebrow">Información y recursos</p>
          <h2 id="info-title">Biblioteca legal e informaciones útiles</h2>
          <p className="section-description">
            Acceso a legislación tributaria, comercial, laboral, ambiental y
            más recursos para empresas y contribuyentes en Paraguay.
          </p>
          <div className="home-info__grid">
            {infoPreview.map((cat) => (
              <div key={cat.id} className="info-preview-card">
                <span className="info-preview-card__type">{cat.typeLabel}</span>
                <h3>{cat.title}</h3>
                <p>{cat.description.substring(0, 100)}…</p>
                <Link
                  href={cat.external ? cat.href : "/informaciones.php"}
                  aria-label={`Ver ${cat.title}`}
                >
                  Ver recursos →
                </Link>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "24px", textAlign: "center" }}>
            <Link href="/informaciones.php" className="button button--primary">
              Ver toda la biblioteca legal
            </Link>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          CTA FINAL
          ══════════════════════════════════════════ */}
      <section
        className="cta-panel"
        aria-labelledby="cta-title"
        style={{ margin: "0 auto 64px", maxWidth: "var(--container)" }}
      >
        <div>
          <p className="eyebrow">Atención profesional</p>
          <h2 id="cta-title">
            Solicite orientación profesional para su empresa o gestión.
          </h2>
          <p>
            Indique el tipo de empresa, trámite o servicio requerido y el
            equipo podrá orientarle según el alcance de la gestión.
          </p>
        </div>
        <div className="cta-panel__actions">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button--primary"
            aria-label="Consultar por WhatsApp"
          >
            Consultar por WhatsApp
          </a>
          <Link href="/contacto.php" className="button button--secondary">
            Ver datos de contacto
          </Link>
        </div>
      </section>
    </>
  );
}
