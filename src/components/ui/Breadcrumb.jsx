import Link from "next/link";

/**
 * Breadcrumb component
 * @param {Array} items - Array of { label, href? }
 * El último item es la página actual (sin href).
 */
export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="breadcrumb" aria-label="Ruta de navegación">
      <Link href="/">Inicio</Link>
      {items.map((item, i) => (
        <span key={i} style={{ display: "contents" }}>
          <span className="breadcrumb__sep" aria-hidden="true">/</span>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
