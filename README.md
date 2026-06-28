# Morínigo & Asociados — Sitio Web Institucional

Sitio web institucional para **Morínigo & Asociados**, firma de Auditores y Consultores de Empresas con sede en Asunción, Paraguay.

## Stack tecnológico

- **Framework:** Next.js 16 (App Router)
- **Hosting:** Vercel
- **Dominio:** [morinigoyasociados.com.py](https://www.morinigoyasociados.com.py)
- **DNS:** Cloudflare

## Ramas

| Rama | Propósito |
|------|-----------|
| `main` | Producción — solo recibe merges desde `develop` |
| `develop` | Desarrollo activo — commits directos aquí |

## Flujo de trabajo

```bash
# Trabajar siempre en develop
git checkout develop

# Commit de cambios (en español)
git add .
git commit -m "descripción del cambio en español"
git push origin develop

# Para pasar a producción (merge a main)
git checkout main
git merge develop
git push origin main
git checkout develop
```

## Comandos de desarrollo

```bash
npm install        # Instalar dependencias
npm run dev        # Servidor de desarrollo (localhost:3000)
npm run build      # Build de producción
npm run lint       # Linter
```

## Estructura principal

```
app/               # Rutas Next.js (App Router)
  *.php/           # Rutas legacy mantenidas para SEO
  rubros/          # Catch-all para archivo legal histórico
src/
  components/      # Componentes React
    layout/        # Header, Footer, WhatsApp
    ui/            # Container, Breadcrumbs, etc.
  data/            # Datos: company, services, legalResources, navigation
  lib/             # Utilidades: seo, whatsapp
public/
  brand/           # Logo, imágenes institucionales
```

## Desarrollado por

[SolvaTech](https://solvatech.com.py) — Soluciones tecnológicas a medida.
