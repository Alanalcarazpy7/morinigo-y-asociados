import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { legalCategories, getCategoryBySlug } from "@/data/legalResources";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export async function generateMetadata({ params }) {
  const slug = await params.slug;
  const category = getCategoryBySlug(slug);
  const title = category ? category.title : "Archivo legal";
  return {
    title: `${title} | Informaciones útiles | Morínigo & Asociados`,
    description: category
      ? category.description
      : "Archivo legal histórico de Morínigo & Asociados. Para consultas actualizadas contacte con la firma.",
    alternates: {
      canonical: `https://www.morinigoyasociados.com.py/rubros/${slug.join("/")}`,
    },
  };
}

export default async function RubroPage({ params }) {
  const slug = await params.slug;
  const category = getCategoryBySlug(slug);

  const waUrl = getWhatsAppUrl(
    category
      ? `Hola, quiero consultar sobre ${category.title} en Morínigo & Asociados.`
      : "Hola, quiero consultar sobre legislación paraguaya con Morínigo & Asociados."
  );

  // Página genérica para rutas no mapeadas (no 404, no "Recurso no encontrado")
  if (!category) {
    return (
      <>
        <section className="page-hero" aria-label="Archivo legal">
          <Container>
            <Breadcrumbs
              items={[
                { label: "Informaciones útiles", href: "/informaciones.php" },
                { label: "Archivo legal" },
              ]}
            />
            <p className="eyebrow">Archivo legal histórico</p>
            <h1>Recurso en proceso de actualización</h1>
            <p>
              Esta sección forma parte del archivo legal histórico de Morínigo
              &amp; Asociados. El contenido está siendo migrado gradualmente.
              Para información actualizada, contacte con la firma.
            </p>
          </Container>
        </section>

        <section className="section" aria-label="Acciones disponibles">
          <Container>
            <div className="archive-notice">
              <strong>¿Busca información sobre esta normativa?</strong>
              Nuestro equipo puede orientarle sobre legislación vigente,
              disposiciones actualizadas y su aplicación práctica para empresas
              y contribuyentes en Paraguay.
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="button button--primary">
                Consultar por WhatsApp
              </a>
              <Link href="/informaciones.php" className="button button--secondary">
                Volver a informaciones útiles
              </Link>
              <Link href="/contacto.php" className="button button--secondary">
                Formulario de contacto
              </Link>
            </div>
          </Container>
        </section>
      </>
    );
  }

  // Página con contenido para categoría encontrada
  return (
    <>
      <section className="page-hero" aria-label={category.title}>
        <Container>
          <Breadcrumbs
            items={[
              { label: "Informaciones útiles", href: "/informaciones.php" },
              { label: category.title },
            ]}
          />
          <p className="eyebrow">{category.typeLabel}</p>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </Container>
      </section>

      <section className="rubro-page" aria-label="Contenido de la categoría">
        <Container>
          <div className="rubro-page__grid">
            {/* Sidebar */}
            <aside className="rubro-sidebar">
              <div className="archive-notice">
                <strong>Archivo legal histórico</strong>
                Esta sección forma parte del repositorio de legislación
                paraguaya de Morínigo &amp; Asociados. Para consultas sobre
                normativa vigente y aplicación práctica, contacte con la firma.
              </div>

              <div style={{ marginBottom: "24px" }}>
                <h2 style={{ fontSize: "1rem", color: "var(--color-navy)", margin: "0 0 10px" }}>
                  Consultas sobre este tema
                </h2>
                <p style={{ color: "var(--color-muted)", fontSize: "0.86rem", marginBottom: "14px", lineHeight: "1.5" }}>
                  Para asesoramiento sobre {category.title.toLowerCase()},
                  puede contactarnos directamente.
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-area__cta"
                  style={{ display: "inline-flex", marginBottom: "10px", fontSize: "0.88rem" }}
                >
                  Consultar por WhatsApp
                </a>
                <br />
                <Link
                  href="/contacto.php"
                  style={{ color: "var(--color-primary)", fontSize: "0.84rem", fontWeight: 600 }}
                >
                  Formulario de contacto →
                </Link>
              </div>

              {/* Otras categorías */}
              <div>
                <p style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-muted)", marginBottom: "10px" }}>
                  Otras categorías
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {legalCategories
                    .filter((c) => c.id !== category.id && c.folder && !c.external)
                    .slice(0, 7)
                    .map((c) => (
                      <Link
                        key={c.id}
                        href={`/rubros/${c.folder}`}
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--color-primary)",
                          padding: "5px 0",
                          borderBottom: "1px solid var(--color-line)",
                          display: "block"
                        }}
                      >
                        {c.title}
                      </Link>
                    ))}
                  <Link
                    href="/informaciones.php"
                    style={{ fontSize: "0.82rem", color: "var(--color-primary)", fontWeight: 700, paddingTop: "8px" }}
                  >
                    Ver todas →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Contenido principal */}
            <main>
              {category.items && category.items.length > 0 ? (
                <>
                  <h2 style={{ marginBottom: "20px", color: "var(--color-navy)", fontSize: "1.25rem" }}>
                    Normativa de {category.title}
                  </h2>
                  <ul className="legal-list" aria-label={`Lista de normas de ${category.title}`}>
                    {category.items.map((item, i) => (
                      <li key={i} className="legal-list__item">
                        <div>
                          <span className="legal-ref">{item.ref}</span>
                          <span className="legal-date">{item.date}</span>
                        </div>
                        <p className="legal-desc">{item.description}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="archive-notice" style={{ marginTop: "28px" }}>
                    <strong>Nota</strong>
                    Este listado forma parte del archivo histórico de la firma.
                    Para verificar el texto vigente de cada norma, consulte la
                    Gaceta Oficial de la República del Paraguay o contacte con
                    el equipo de Morínigo &amp; Asociados.
                  </div>
                </>
              ) : (
                <div>
                  <div className="archive-notice">
                    <strong>Contenido en actualización</strong>
                    El listado detallado de normativa de esta categoría está
                    siendo migrado a la nueva plataforma. Para acceder al
                    archivo histórico completo o consultar sobre legislación
                    específica, contáctenos directamente.
                  </div>
                  <div style={{ marginTop: "20px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="button button--primary">
                      Consultar por WhatsApp
                    </a>
                    <Link href="/informaciones.php" className="button button--secondary">
                      Volver a informaciones útiles
                    </Link>
                  </div>
                </div>
              )}
            </main>
          </div>
        </Container>
      </section>
    </>
  );
}
