const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), payment=(), usb=()"
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://*.vercel-insights.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
      "frame-src 'self' https://www.google.com https://maps.google.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join("; ")
  }
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders
      }
    ];
  },

  async redirects() {
    return [
      // Redirige /index.php → / (301 permanente, ya existía)
      {
        source: "/index.php",
        destination: "/",
        permanent: true
      },
      // Redirige /nuevos/biocombustible.php → /informaciones.php
      {
        source: "/nuevos/biocombustible.php",
        destination: "/informaciones.php",
        permanent: true
      },
      // Redirige las rutas de rubros con extensión HTML al catch-all moderno
      // /rubros/X/indice_general.html → /rubros/X
      {
        source: "/rubros/:segment/indice_general.html",
        destination: "/rubros/:segment",
        permanent: true
      },
      {
        source: "/rubros/:segment/indice_general.htm",
        destination: "/rubros/:segment",
        permanent: true
      },
      // /rubros/disposiciones_actividades_economicas/X.html → /rubros/X
      {
        source: "/rubros/disposiciones_actividades_economicas/:page.html",
        destination: "/rubros/:page",
        permanent: true
      },
      {
        source: "/rubros/disposiciones_actividades_economicas/:page.htm",
        destination: "/rubros/:page",
        permanent: true
      },
      // /rubros/disposiciones_actividades_economicas/impositivas/indice.html → /rubros/impositivas
      {
        source: "/rubros/disposiciones_actividades_economicas/impositivas/indice.html",
        destination: "/rubros/impositivas",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
