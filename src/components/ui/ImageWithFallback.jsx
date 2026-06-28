"use client";

import { useState } from "react";

/**
 * Muestra una imagen con fallback elegante si no carga.
 *
 * @param {string}  src          - Ruta de la imagen (ej. "/brand/firma-equipo.jpg")
 * @param {string}  alt          - Texto alternativo accesible
 * @param {string}  fallbackText - Texto grande en el fallback (ej. "M&A")
 * @param {string}  fallbackSub  - Texto pequeño debajo (ej. "Desde 1988")
 * @param {string}  className    - Clase CSS del contenedor
 * @param {object}  style        - Estilos extra del contenedor
 */
export default function ImageWithFallback({
  src,
  alt,
  fallbackText = "M&A",
  fallbackSub = "",
  className = "firm-image-block",
  style = {},
}) {
  const [error, setError] = useState(false);

  return (
    <div
      className={className}
      style={style}
      aria-hidden={error ? "true" : undefined}
    >
      {!error ? (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />
      ) : (
        <div className="firm-image-fallback">
          <span>{fallbackText}</span>
          {fallbackSub && <p>{fallbackSub}</p>}
        </div>
      )}
    </div>
  );
}
