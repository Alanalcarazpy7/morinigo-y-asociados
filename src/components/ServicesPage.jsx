"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { serviceCategories } from "@/data/services";
import { getWhatsAppUrl } from "@/lib/whatsapp";

// Áreas principales para el selector de tabs
const tabGroups = [
  {
    key: "contables",
    label: "Contables",
    eyebrow: "Contabilidad empresarial",
    slugs: ["servicios-contables"]
  },
  {
    key: "impuestos",
    label: "Impuestos",
    eyebrow: "Diagnóstico y planificación fiscal",
    slugs: ["impuestos"]
  },
  {
    key: "consultoria",
    label: "Consultoría",
    eyebrow: "Procesos y mejora organizacional",
    slugs: ["consultoria"]
  },
  {
    key: "legales",
    label: "Legales",
    eyebrow: "Soporte jurídico corporativo",
    slugs: [
      "derecho-civil-comercial-societario",
      "propiedad-intelectual-marcas-patentes",
      "laboral-seguridad-social",
      "derecho-corporativo",
      "migraciones",
      "derecho-familia",
      "riesgos-cumplimiento",
      "judiciales-administrativos"
    ]
  }
];

function buildTabData() {
  return tabGroups.map((group) => {
    const services = serviceCategories.filter((s) => group.slugs.includes(s.slug));
    // Consolidar items si hay múltiples servicios en el grupo
    const allItems = services.flatMap((s) => s.items);
    const primary = services[0];
    return {
      key: group.key,
      label: group.label,
      eyebrow: group.eyebrow,
      title: group.slugs.length === 1 ? primary?.title : `Área ${group.label}`,
      description:
        group.slugs.length === 1
          ? primary?.description
          : services.map((s) => s.summary).join(" "),
      items: allItems,
      subServices: group.slugs.length > 1 ? services : null
    };
  });
}

const tabs = buildTabData();

function ServicesTabsDesktop() {
  const [active, setActive] = useState(0);

  return (
    <div className="services-tabs-layout" role="tablist" aria-label="Áreas de servicio">
      {/* Nav lateral */}
      <nav className="services-tabs-nav">
        {tabs.map((tab, i) => (
          <button
            key={tab.key}
            role="tab"
            id={`tab-${tab.key}`}
            aria-selected={active === i}
            aria-controls={`panel-${tab.key}`}
            className={`services-tab-btn${active === i ? " active" : ""}`}
            onClick={() => setActive(i)}
            type="button"
          >
            <span className="services-tab-btn__eyebrow">{tab.eyebrow}</span>
            <span className="services-tab-btn__title">{tab.label}</span>
          </button>
        ))}
      </nav>

      {/* Paneles */}
      <div>
        {tabs.map((tab, i) => {
          const waUrl = getWhatsAppUrl(
            `Hola, quiero consultar sobre el área de ${tab.label} en Morínigo & Asociados.`
          );
          return (
            <div
              key={tab.key}
              role="tabpanel"
              id={`panel-${tab.key}`}
              aria-labelledby={`tab-${tab.key}`}
              className={`services-tab-panel${active === i ? " active" : ""}`}
            >
              <p className="services-tab-panel__eyebrow">{tab.eyebrow}</p>
              <h2>{tab.title}</h2>
              <p className="services-tab-panel__desc">{tab.description}</p>

              {tab.subServices ? (
                // Grupo con múltiples servicios: mostrar por sub-área
                tab.subServices.map((service) => (
                  <div key={service.slug} style={{ marginBottom: "24px" }}>
                    <p style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--color-primary)",
                      margin: "0 0 10px"
                    }}>
                      {service.eyebrow}
                    </p>
                    <p style={{ fontSize: "0.88rem", color: "var(--color-muted)", marginBottom: "10px" }}>
                      {service.summary}
                    </p>
                    <ul className="services-tab-items" style={{ gridTemplateColumns: "1fr" }}>
                      {service.items.slice(0, 5).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <ul className="services-tab-items">
                  {tab.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service-area__cta"
                aria-label={`Consultar sobre el área de ${tab.label}`}
              >
                Consultar sobre esta área
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ServicesAccordionMobile() {
  const [open, setOpen] = useState(null);

  return (
    <div className="services-accordion">
      {tabs.map((tab, i) => {
        const waUrl = getWhatsAppUrl(
          `Hola, quiero consultar sobre el área de ${tab.label} en Morínigo & Asociados.`
        );
        const isOpen = open === i;
        return (
          <div
            key={tab.key}
            className={`accordion-item${isOpen ? " open" : ""}`}
          >
            <button
              className="accordion-btn"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              type="button"
            >
              <div className="accordion-btn__info">
                <span className="accordion-btn__eyebrow">{tab.eyebrow}</span>
                <span className="accordion-btn__title">{tab.label}</span>
              </div>
              <span className="accordion-chevron" aria-hidden="true">▾</span>
            </button>
            <div className="accordion-content">
              <p className="accordion-content__desc">{tab.description}</p>
              <ul>
                {tab.items.slice(0, 8).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service-area__cta"
                style={{ display: "inline-flex", fontSize: "0.86rem" }}
              >
                Consultar sobre esta área
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ServicesPage() {
  const waGeneral = getWhatsAppUrl(
    "Hola, quiero consultar por los servicios de Morínigo & Asociados."
  );

  return (
    <>
      {/* ——— HERO ——— */}
      <section className="page-hero" aria-label="Servicios">
        <Container>
          <Breadcrumbs items={[{ label: "Servicios" }]} />
          <p className="eyebrow">Nuestros servicios</p>
          <h1>Servicios contables, tributarios, consultivos y legales</h1>
          <p>
            Una estructura profesional para empresas que requieren asesoramiento
            técnico, gestión documental, cumplimiento normativo y acompañamiento
            estratégico en Paraguay.
          </p>
        </Container>
      </section>

      {/* ——— TABS + ACORDEÓN ——— */}
      <section className="section" aria-label="Áreas de servicio">
        <Container>
          <p className="eyebrow">Seleccione un área</p>
          <h2 style={{ marginBottom: "28px" }}>
            Áreas de asesoramiento profesional
          </h2>
          <ServicesTabsDesktop />
          <ServicesAccordionMobile />
        </Container>
      </section>

      {/* ——— CTA FINAL ——— */}
      <Container>
        <section
          className="cta-panel"
          aria-label="Consulta de servicios"
          style={{ margin: "0 0 84px" }}
        >
          <div>
            <p className="eyebrow">¿No encontró lo que buscaba?</p>
            <h2>Consulte directamente con la firma</h2>
            <p>
              Si no identificó exactamente el servicio que necesita, contáctenos
              para evaluar su caso y derivarlo al área correspondiente.
            </p>
          </div>
          <div className="cta-panel__actions">
            <a
              href={waGeneral}
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
