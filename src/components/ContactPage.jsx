"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { company } from "@/data/company";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const waUrl = getWhatsAppUrl(
  "Hola, quiero solicitar asesoramiento de Morínigo & Asociados."
);

const tel0 = company.phones[0].replace(/\s+/g, "");
const tel1 = company.phones[1]?.replace(/\s+/g, "");

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    // Honeypot check
    if (data.get("website_url")) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      const json = await res.json();
      if (json.ok) {
        setSubmitted(true);
      } else {
        setError(json.error || "No se pudo enviar la consulta. Intente por WhatsApp.");
      }
    } catch {
      setError("Error de conexión. Por favor intente nuevamente o use WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* ——— HERO COMPACTO ——— */}
      <section className="contact-hero" aria-label="Contacto">
        <Container>
          <Breadcrumbs items={[{ label: "Contacto" }]} />
          <h1>Contacto</h1>
          <p>
            Estamos disponibles para orientar su consulta contable,
            tributaria, jurídica o empresarial.
          </p>
        </Container>
      </section>

      {/* ——— LAYOUT DOS COLUMNAS ——— */}
      <section aria-label="Información y formulario de contacto">
        <Container>
          <div className="contact-layout">
            {/* ——— COLUMNA IZQUIERDA ——— */}
            <div>
              {/* Card de información */}
              <div className="contact-info-card">
                <div className="contact-info-card__header">
                  <h2>Datos de contacto</h2>
                </div>
                <div className="contact-info-card__body">
                  <div className="contact-info-item">
                    <div className="contact-info-item__icon" aria-hidden="true">📍</div>
                    <div>
                      <p className="contact-info-item__label">Dirección</p>
                      <p className="contact-info-item__value">
                        Agustín Pio Barrios c/ Augusto Roa Bastos.<br />
                        Edificio Boulevard, Dpto. F.<br />
                        Barrio Manorá — Asunción, Paraguay.
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-item__icon" aria-hidden="true">📞</div>
                    <div>
                      <p className="contact-info-item__label">Teléfonos</p>
                      <p className="contact-info-item__value">
                        <a href={`tel:${tel0}`}>{company.phones[0]}</a><br />
                        {tel1 && <a href={`tel:${tel1}`}>{company.phones[1]}</a>}
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-item__icon" aria-hidden="true">✉️</div>
                    <div>
                      <p className="contact-info-item__label">Email</p>
                      <p className="contact-info-item__value">
                        <a href={`mailto:${company.email}`}>{company.email}</a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-item__icon" aria-hidden="true">🌐</div>
                    <div>
                      <p className="contact-info-item__label">WebMail</p>
                      <p className="contact-info-item__value">
                        <a href={company.webmail} target="_blank" rel="noopener noreferrer">
                          webmail.morinigoyasociados.com.py
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-item__icon" aria-hidden="true">🕐</div>
                    <div>
                      <p className="contact-info-item__label">Horario</p>
                      <p className="contact-info-item__value">{company.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Redes sociales */}
                <div className="social-buttons">
                  <a
                    href={company.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn social-btn--fb"
                    aria-label="Seguir en Facebook"
                  >
                    <span className="social-btn__icon" aria-hidden="true">f</span>
                    Facebook — Morínigo &amp; Asociados
                  </a>
                  <a
                    href={company.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn social-btn--ig"
                    aria-label="Seguir en Instagram"
                  >
                    <span className="social-btn__icon" aria-hidden="true">◉</span>
                    Instagram — @morinigoasociados
                  </a>
                </div>
              </div>

              {/* Card de atención */}
              <div className="contact-attention-card">
                <strong>Atención profesional</strong>
                Para una mejor orientación, indique el tipo de consulta, empresa
                o trámite requerido. El equipo podrá responderle según el
                alcance del servicio solicitado.
              </div>
            </div>

            {/* ——— COLUMNA DERECHA — FORMULARIO ——— */}
            <div className="contact-form-card">
              <h2>Formulario de consulta</h2>
              <p className="form-note">
                Complete el formulario y recibirá una respuesta en horario
                comercial. Para respuesta inmediata, utilice WhatsApp.
              </p>

              {submitted ? (
                <div className="form-success" role="status" aria-live="polite">
                  <span className="form-success__icon" aria-hidden="true">✓</span>
                  <div>
                    <strong style={{ display: "block", marginBottom: "4px" }}>
                      Consulta recibida
                    </strong>
                    Su consulta fue registrada. Para envío inmediato con
                    respuesta directa, utilice WhatsApp. Un profesional de la
                    firma se pondrá en contacto a la brevedad.
                    <br /><br />
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--primary"
                      style={{ fontSize: "0.88rem", minHeight: "38px" }}
                    >
                      Continuar por WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  className="contact-form-v2"
                  onSubmit={handleSubmit}
                  aria-label="Formulario de contacto"
                  noValidate
                >
                  <div className="form-row">
                    <label htmlFor="ct-name">
                      Nombre y apellido *
                      <input
                        id="ct-name"
                        name="name"
                        type="text"
                        required
                        minLength={2}
                        autoComplete="name"
                        placeholder="Ej. Juan García"
                        aria-required="true"
                      />
                    </label>
                    <label htmlFor="ct-company">
                      Empresa o institución
                      <input
                        id="ct-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Nombre de la empresa"
                      />
                    </label>
                  </div>

                  <div className="form-row">
                    <label htmlFor="ct-phone">
                      Teléfono / WhatsApp
                      <input
                        id="ct-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="0994 000 000"
                      />
                    </label>
                    <label htmlFor="ct-email">
                      Email *
                      <input
                        id="ct-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="correo@empresa.com"
                        aria-required="true"
                      />
                    </label>
                  </div>

                  <label htmlFor="ct-service">
                    Tipo de consulta *
                    <select
                      id="ct-service"
                      name="service"
                      defaultValue=""
                      required
                      aria-required="true"
                    >
                      <option value="" disabled>Seleccione un área</option>
                      <option value="contable">Contable</option>
                      <option value="tributaria">Tributaria</option>
                      <option value="auditoria">Auditoría</option>
                      <option value="consultoria">Consultoría</option>
                      <option value="legal">Legal</option>
                      <option value="administrativa">Administrativa</option>
                      <option value="otra">Otra consulta</option>
                    </select>
                  </label>

                  <label htmlFor="ct-message">
                    Mensaje *
                    <textarea
                      id="ct-message"
                      name="message"
                      rows={5}
                      required
                      minLength={10}
                      aria-required="true"
                      placeholder="Describa su consulta, tipo de gestión requerida o la situación de su empresa."
                    />
                  </label>

                  {/* Honeypot antispam */}
                  <input
                    className="honeypot"
                    name="website_url"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                   {error && (
                    <p
                      role="alert"
                      style={{
                        margin: "0 0 12px",
                        padding: "10px 14px",
                        background: "#fff5f5",
                        border: "1px solid #fca5a5",
                        borderRadius: "6px",
                        fontSize: "0.84rem",
                        color: "#b91c1c",
                      }}
                    >
                      {error}
                    </p>
                  )}
                   <div className="form-actions">
                    <button
                      className="button button--primary"
                      type="submit"
                      disabled={loading}
                      aria-busy={loading}
                    >
                      {loading ? "Enviando…" : "Enviar consulta"}
                    </button>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--secondary"
                      aria-label="Consultar por WhatsApp"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ——— MAPA ——— */}
      <section className="map-section" aria-label="Ubicación de la firma">
        <Container>
          <div className="map-card">
            <div className="map-card__header">
              <div>
                <h2>Ubicación</h2>
                <p>Edificio Boulevard, Barrio Manorá, Asunción.</p>
              </div>
              <a
                href="https://www.google.com/maps?cid=6093724882472902267&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=es-419&gl=PY&source=embed"
                target="_blank"
                rel="noopener noreferrer"
                className="map-external-btn"
                aria-label="Abrir ubicación en Google Maps"
              >
                ↗ Abrir en Google Maps
              </a>
            </div>
            <div className="map-card__body">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7215.2449928551205!2d-57.5770266!3d-25.283281499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7d4e0c90b4d%3A0x5491427ea2c19e7b!2sEdificio%20Boulevard!5e0!3m2!1ses-419!2spy!4v1782599178292!5m2!1ses-419!2spy"
                title="Ubicación de Morínigo & Asociados — Edificio Boulevard, Barrio Manorá, Asunción"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
