import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="not-found" aria-label="Página no encontrada">
      <Container>
        <p className="not-found__code" aria-hidden="true">404</p>
        <p className="eyebrow">Página no encontrada</p>
        <h1>Esta ruta no está disponible o fue actualizada</h1>
        <p>
          Si llegó desde un enlace antiguo o desde Google, es posible que la
          página haya sido migrada. Las rutas principales del sitio están
          activas y disponibles.
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/" className="button button--primary">
            Volver al inicio
          </Link>
          <Link href="/servicios.php" className="button button--secondary">
            Ver servicios
          </Link>
          <Link href="/informaciones.php" className="button button--secondary">
            Informaciones útiles
          </Link>
          <Link href="/contacto.php" className="button button--secondary">
            Contacto
          </Link>
        </div>

        <div style={{ marginTop: "40px", paddingTop: "32px", borderTop: "1px solid var(--color-line)" }}>
          <p style={{ fontSize: "0.88rem", color: "var(--color-muted)", marginBottom: "12px" }}>
            Rutas principales disponibles:
          </p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {[
              { label: "Inicio", href: "/" },
              { label: "La Firma", href: "/la-empresa.php" },
              { label: "Servicios", href: "/servicios.php" },
              { label: "Informaciones útiles", href: "/informaciones.php" },
              { label: "Páginas amigas", href: "/enlaces.php" },
              { label: "Contacto", href: "/contacto.php" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    padding: "5px 12px",
                    border: "1px solid var(--color-line)",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    color: "var(--color-primary)",
                    fontWeight: 600,
                    background: "white",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
