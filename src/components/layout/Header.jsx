"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const telHref = company.phones[0].replace(/\s+/g, "");

  // Cerrar menú al navegar o hacer resize a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href.replace(".php", ""));
  };

  return (
    <header className="site-header">
      {/* Topbar */}
      <div className="topbar">
        <div className="container topbar__inner">
          <span>{company.tagline} · Asunción, Paraguay</span>
          <div className="topbar__links">
            <a href={`tel:${telHref}`}>{company.phones[0]}</a>
            <a href={company.social.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={company.social.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container navbar">
        {/* Logo */}
        <Link className="brand" href="/" aria-label={`${company.name} — Inicio`} onClick={closeMenu}>
          <img
            src="/brand/logo-morinigo-horizontal.png"
            alt="Morínigo & Asociados — Auditores y Consultores de Empresas"
            className="brand-logo"
            width="265"
            height="60"
          />
        </Link>

        {/* Navegación desktop */}
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${isActive(item.href) ? " active" : ""}`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          className="nav-cta"
          href={getWhatsAppUrl(company.ctaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Solicitar asesoramiento profesional por WhatsApp"
        >
          Solicitar asesoramiento
        </a>

        {/* Botón hamburguesa */}
        <button
          className={`menu-toggle${isOpen ? " is-active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú de navegación"}
          type="button"
        >
          <span className="menu-toggle__bar"></span>
          <span className="menu-toggle__bar"></span>
          <span className="menu-toggle__bar"></span>
        </button>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`mobile-menu${isOpen ? " is-open" : ""}`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-label="Menú de navegación"
      >
        <nav aria-label="Menú principal">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-menu__link${isActive(item.href) ? " active" : ""}`}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <a
            className="mobile-menu__cta"
            href={getWhatsAppUrl(company.ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            aria-label="Solicitar asesoramiento por WhatsApp"
          >
            Solicitar asesoramiento
          </a>
        </nav>
      </div>
    </header>
  );
}
