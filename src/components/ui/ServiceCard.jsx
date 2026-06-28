import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card__top">
        <p className="service-card__eyebrow">{service.eyebrow}</p>
        <span aria-hidden="true">→</span>
      </div>

      <h3>{service.title}</h3>
      <p>{service.summary}</p>

      <Link
        href={`/servicios/${service.slug}`}
        aria-label={`Ver más sobre ${service.title}`}
      >
        Ver alcance del servicio
      </Link>
    </article>
  );
}
