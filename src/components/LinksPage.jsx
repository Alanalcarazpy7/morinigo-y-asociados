import Container from "@/components/ui/Container";
import CTA from "@/components/ui/CTA";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const links = [
  { title: "Dirección Nacional de Ingresos Tributarios", href: "https://www.dnit.gov.py/" },
  { title: "Instituto de Previsión Social", href: "https://portal.ips.gov.py/" },
  { title: "Dirección Nacional de Contrataciones Públicas", href: "https://www.contrataciones.gov.py/" },
  { title: "Ministerio de Industria y Comercio", href: "https://www.mic.gov.py/" },
  { title: "SENACSA", href: "https://www.senacsa.gov.py/" }
];

export default function LinksPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <Breadcrumbs items={[{ label: "Páginas amigas" }]} />
          <p className="eyebrow">Páginas amigas</p>
          <h1>Enlaces institucionales de interés</h1>
          <p>Accesos útiles para empresas, contribuyentes y usuarios que necesitan realizar consultas o gestiones oficiales.</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="link-list">
            {links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                <span>{link.title}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <Container>
        <CTA />
      </Container>
    </>
  );
}
