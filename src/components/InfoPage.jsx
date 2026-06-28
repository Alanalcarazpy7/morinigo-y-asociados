"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { legalCategories } from "@/data/legalResources";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const waUrl = getWhatsAppUrl(
  "Hola, quiero consultar sobre información legal en Morínigo & Asociados."
);

const filterTypes = [
  { key: "todos", label: "Todos" },
  { key: "fundamental", label: "Legislación fundamental" },
  { key: "leyes", label: "Leyes y normas" },
  { key: "tributario", label: "Tributario" },
  { key: "diccionario", label: "Diccionarios" },
  { key: "cultura", label: "Cultura" },
];

export default function InfoPage() {
  const [activeType, setActiveType] = useState("todos");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let cats = legalCategories;
    if (activeType !== "todos") {
      cats = cats.filter((c) => c.type === activeType);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      cats = cats.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.typeLabel.toLowerCase().includes(q)
      );
    }
    return cats;
  }, [activeType, search]);

  return (
    <>
      {/* ——— HERO INTERNO ——— */}
      <section className="page-hero" aria-label="Informaciones útiles">
        <Container>
          <Breadcrumbs items={[{ label: "Informaciones útiles" }]} />
          <p className="eyebrow">Recursos e información</p>
          <h1>Informaciones útiles</h1>
          <p>
            Compendio de recursos legales, tributarios, económicos y
            administrativos de consulta. Legislación paraguaya organizada
            por áreas temáticas.
          </p>
        </Container>
      </section>

      {/* ——— BUSCADOR Y FILTROS ——— */}
      <section className="library-header" aria-label="Búsqueda y filtros">
        <Container>
          <div style={{ maxWidth: "560px", marginBottom: "20px" }}>
            <label htmlFor="lib-search" style={{ display: "block", fontSize: "0.84rem", fontWeight: 600, color: "var(--color-navy)", marginBottom: "8px" }}>
              Buscar por tema, ley o categoría
            </label>
            <div style={{ position: "relative" }}>
              <input
                id="lib-search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Ej. electoral, tributario, IVA, marcas…"
                style={{
                  width: "100%",
                  border: "1px solid var(--color-line)",
                  borderRadius: "8px",
                  padding: "11px 40px 11px 14px",
                  font: "inherit",
                  fontSize: "0.92rem",
                  color: "var(--color-text)",
                  background: "white",
                  boxSizing: "border-box"
                }}
                aria-label="Buscar en la biblioteca legal"
              />
              <span
                style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", color: "var(--color-muted)", fontSize: "1rem" }}
                aria-hidden="true"
              >
                🔍
              </span>
            </div>
          </div>

          {/* Filtros */}
          <div className="library-filters" role="group" aria-label="Filtrar por tipo">
            {filterTypes.map((t) => (
              <button
                key={t.key}
                className={`library-filter${activeType === t.key ? " active" : ""}`}
                onClick={() => setActiveType(t.key)}
                aria-pressed={activeType === t.key}
                type="button"
              >
                {t.label}
              </button>
            ))}
          </div>

          {filtered.length > 0 && (
            <p style={{ color: "var(--color-muted)", fontSize: "0.82rem", marginTop: "12px" }}>
              {filtered.length} {filtered.length === 1 ? "recurso encontrado" : "recursos encontrados"}
            </p>
          )}
        </Container>
      </section>

      {/* ——— GRID DE CATEGORÍAS ——— */}
      <section aria-label="Categorías de recursos legales">
        <Container>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "var(--color-muted)" }}>
              <p style={{ fontSize: "1.1rem", marginBottom: "16px" }}>
                No se encontraron recursos con ese criterio.
              </p>
              <button
                type="button"
                onClick={() => { setSearch(""); setActiveType("todos"); }}
                className="button button--secondary"
                style={{ fontSize: "0.88rem" }}
              >
                Ver todos los recursos
              </button>
            </div>
          ) : (
            <div className="library-grid">
              {filtered.map((cat) => {
                const href = cat.external
                  ? cat.href
                  : cat.folder
                    ? `/rubros/${cat.folder}`
                    : cat.href;
                const catWaUrl = getWhatsAppUrl(
                  `Hola, quiero consultar sobre ${cat.title} en Morínigo & Asociados.`
                );
                return (
                  <article key={cat.id} className="library-card">
                    <span className="library-card__type">{cat.typeLabel}</span>
                    <h2 style={{ fontSize: "0.93rem" }}>{cat.title}</h2>
                    <p>{cat.description}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "4px" }}>
                      <a
                        href={href}
                        target={cat.external ? "_blank" : undefined}
                        rel={cat.external ? "noopener noreferrer" : undefined}
                        className="library-card__link"
                        aria-label={`Ver ${cat.title}`}
                      >
                        {cat.external ? "Acceder al recurso ↗" : "Ver recurso →"}
                      </a>
                      <a
                        href={catWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "0.78rem", color: "var(--color-muted)", fontWeight: 500 }}
                        aria-label={`Consultar sobre ${cat.title}`}
                      >
                        Consultar →
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </Container>
      </section>

      {/* ——— NOTA SOBRE EL ARCHIVO ——— */}
      <section className="section section--surface" aria-label="Nota sobre el archivo">
        <Container>
          <div style={{ maxWidth: "720px" }}>
            <p className="eyebrow">Sobre esta biblioteca</p>
            <h2>Archivo legal histórico en actualización</h2>
            <p style={{ color: "var(--color-muted)" }}>
              Esta sección forma parte del archivo legal histórico de Morínigo
              &amp; Asociados. El contenido está siendo migrado y modernizado
              gradualmente. Para consultas actualizadas sobre normativa específica,
              le recomendamos contactar directamente con la firma.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="button button--primary">
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
