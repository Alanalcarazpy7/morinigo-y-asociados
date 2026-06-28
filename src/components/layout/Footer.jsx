import Link from "next/link";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const waUrl = getWhatsAppUrl(
  "Hola, quiero solicitar asesoramiento de Morínigo & Asociados."
);

const serviceLinks = [
  { label: "Servicios contables", href: "/servicios/servicios-contables" },
  { label: "Asesoría tributaria", href: "/servicios/impuestos" },
  { label: "Consultoría empresarial", href: "/servicios/consultoria" },
  { label: "Auditoría", href: "/servicios/auditoria" },
  { label: "Derecho corporativo", href: "/servicios/derecho-corporativo" },
  { label: "Legal laboral", href: "/servicios/laboral-seguridad-social" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const tel0 = company.phones[0].replace(/\s+/g, "");
  const tel1 = company.phones[1]?.replace(/\s+/g, "");

  return (
    <footer className="site-footer" aria-label="Pie de página">
      {/* ── Franja superior ── */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          paddingBottom: "44px",
          marginBottom: "36px",
        }}
      >
        <div className="container footer-grid">
          {/* ─ Col 1: Marca + redes ─ */}
          <div>
            <img
              src="/brand/logo-morinigo-horizontal.png"
              alt="Morínigo & Asociados"
              width="210"
              height="48"
              style={{
                filter: "brightness(0) invert(1)",
                opacity: 0.88,
                display: "block",
                marginBottom: "16px",
              }}
            />
            <p className="footer-muted" style={{ marginTop: 0, fontSize: "0.86rem", lineHeight: 1.6 }}>
              {company.tagline}
            </p>
            <p className="footer-muted" style={{ fontSize: "0.84rem", lineHeight: 1.6, marginTop: "8px" }}>
              Auditores y Consultores de Empresas con sede en Asunción,
              Paraguay. Desde {company.foundedYear}.
            </p>

            {/* Redes sociales */}
            <div style={{ display: "flex", gap: "10px", marginTop: "20px", flexWrap: "wrap" }}>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Página de Facebook — Morínigo & Asociados"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "7px 12px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.72)",
                  transition: "border-color 0.15s, color 0.15s",
                }}
              >
                <span style={{ fontWeight: 900, fontSize: "0.78rem" }}>f</span>
                Facebook
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram — @morinigoasociados"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "7px 12px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.72)",
                  transition: "border-color 0.15s, color 0.15s",
                }}
              >
                <span style={{ fontSize: "0.78rem" }}>◉</span>
                Instagram
              </a>
            </div>
          </div>

          {/* ─ Col 2: Servicios ─ */}
          <div>
            <h2 style={{ color: "white", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 0, marginBottom: "16px" }}>
              Servicios
            </h2>
            <ul className="footer-links">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─ Col 3: Contacto ─ */}
          <div>
            <h2 style={{ color: "white", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 0, marginBottom: "16px" }}>
              Contacto
            </h2>
            <address style={{ fontStyle: "normal" }}>
              <p className="footer-muted" style={{ marginTop: 0, fontSize: "0.85rem", lineHeight: 1.55 }}>
                {company.address}
              </p>
              <p className="footer-muted" style={{ fontSize: "0.85rem", margin: "10px 0 0" }}>
                <a href={`tel:${tel0}`} style={{ color: "rgba(255,255,255,0.72)" }}>
                  {company.phones[0]}
                </a>
                {tel1 && (
                  <>
                    {" · "}
                    <a href={`tel:${tel1}`} style={{ color: "rgba(255,255,255,0.72)" }}>
                      {company.phones[1]}
                    </a>
                  </>
                )}
              </p>
              <p className="footer-muted" style={{ fontSize: "0.85rem", margin: "8px 0 0" }}>
                <a href={`mailto:${company.email}`} style={{ color: "rgba(255,255,255,0.72)" }}>
                  {company.email}
                </a>
              </p>
              <p className="footer-muted" style={{ fontSize: "0.83rem", margin: "8px 0 0" }}>
                {company.hours}
              </p>
            </address>

            {/* CTA WhatsApp en footer */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "18px",
                padding: "9px 16px",
                borderRadius: "6px",
                background: "#1f9d55",
                color: "white",
                fontSize: "0.82rem",
                fontWeight: 600,
                transition: "background 0.15s",
              }}
              aria-label="Consultar por WhatsApp"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Franja inferior ── */}
      <div className="container footer-bottom">
        <span style={{ fontSize: "0.82rem" }}>
          © {year} {company.name}. Todos los derechos reservados.
        </span>
        <nav aria-label="Links del footer" style={{ display: "flex", gap: "18px", flexWrap: "wrap", alignItems: "center" }}>
          {navigation.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={company.webmail}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}
          >
            WebMail
          </a>
        </nav>
        <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.38)" }}>
          Desarrollado por{" "}
          <a
            href="https://solvatech.com.py"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.55)", fontWeight: 600 }}
          >
            SolvaTech
          </a>
        </span>
      </div>
    </footer>
  );
}
