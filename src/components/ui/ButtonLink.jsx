import Link from "next/link";

export default function ButtonLink({ href, children, variant = "primary", external = false }) {
  const className = `button button--${variant}`;

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
