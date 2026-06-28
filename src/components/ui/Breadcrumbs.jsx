import Link from "next/link";

/**
 * Breadcrumbs component — navegación jerárquica
 * @param {Array} items  - Array of { label, href? }. El último sin href es la página actual.
 * @param {"dark"|"light"} variant - "dark" para heroes oscuros (default), "light" para secciones claras
 */
export default function Breadcrumbs({ items = [], variant = "dark" }) {
  const cls = `breadcrumb-nav${variant === "light" ? " breadcrumb-nav--light" : ""}`;

  return (
    <nav className={cls} aria-label="Ruta de navegación">
      <Link href="/" className="bc-link">Inicio</Link>
      {items.map((item, i) => (
        <span key={i} style={{ display: "contents" }}>
          <span className="bc-sep" aria-hidden="true">›</span>
          {item.href ? (
            <Link href={item.href} className="bc-link">{item.label}</Link>
          ) : (
            <span className="bc-current" aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
