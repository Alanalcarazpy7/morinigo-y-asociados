# Prompt para Antigravity

Quiero que trabajes este proyecto como una reestructuración profesional de una web empresarial antigua, no como una landing genérica.

## Contexto del proyecto

Empresa: Morínigo & Asociados
Rubro: Auditores y Consultores de Empresas en Paraguay
Dominio: https://www.morinigoyasociados.com.py
Tecnología requerida: Next.js con App Router, React, CSS modular/global sin frameworks pesados inicialmente.
Hosting objetivo: Vercel.
DNS actual: Cloudflare.
Objetivo: renovar completamente la web, conservar autoridad SEO y mantener rutas históricas `.php`.

## Reglas críticas

1. No romper rutas antiguas indexadas.
2. Mantener como mínimo estas rutas públicas:
   - `/`
   - `/index.php` redirigida 301 a `/`
   - `/la-empresa.php`
   - `/informaciones.php`
   - `/enlaces.php`
   - `/contacto.php`
   - `/servicios.php`
3. La extensión `.php` es solo parte de la URL pública; internamente debe funcionar con archivos `page.jsx` de Next.js.
4. No tocar correos, WebMail, registros MX, mail, webmail, SPF, DKIM ni DMARC.
5. Diseño serio, institucional, sobrio y premium. Nada genérico, nada de diseño tipo plantilla barata.
6. Usar identidad visual basada en azul corporativo, azul oscuro, blanco, gris claro y un detalle dorado sobrio.
7. La estructura debe ser mantenible y escalable: datos de empresa en `src/data/company.js`, servicios en `src/data/services.js`, componentes reutilizables y páginas claras.
8. El contenido debe organizarse por áreas: contables, impuestos, consultoría, legales, derecho civil/comercial/societario, propiedad intelectual, laboral, corporativo, migraciones, familia, riesgos y cumplimiento, judiciales/administrativos.
9. Aplicar SEO técnico: metadata por página, sitemap, robots, canonical, Open Graph, JSON-LD de organización.
10. Aplicar seguridad base: headers HTTP, CSP razonable, validación básica de formularios y honeypot antispam.
11. Crear un formulario funcional a nivel frontend/backend, pero dejar preparado para conectar luego con Resend, SendGrid, Gmail API o CRM. No inventar envío real si no hay credenciales.
12. Todo debe ser responsive, accesible y rápido.

## Estilo visual

- Header sticky profesional.
- Topbar con teléfono y redes.
- Logo a la izquierda.
- Menú claro: Inicio, La Firma, Servicios, Informaciones útiles, Páginas amigas, Contacto.
- Hero serio con copy empresarial.
- Cards sobrias, sin excesos de gradientes.
- CTA fuerte hacia WhatsApp.
- Footer con dirección, teléfonos, correo y WebMail.
- No usar emojis en la web.
- Evitar imágenes genéricas excesivas; usar diseño tipográfico y bloques corporativos.

## Entregables esperados

- Proyecto Next.js listo para `npm install` y `npm run dev`.
- Rutas `.php` funcionando.
- Página de detalle dinámica para servicios: `/servicios/[slug]`.
- `sitemap.js` y `robots.js`.
- `next.config.mjs` con seguridad y redirect 301 de `/index.php` a `/`.
- README con pasos de migración a Vercel y Cloudflare.

## Importante

No elimines las rutas antiguas. Si aparecen nuevas rutas indexadas en Search Console, se deben agregar de forma incremental o redireccionar con 301 a su equivalente real.
