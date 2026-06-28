/**
 * Recursos legales históricos de Morínigo & Asociados.
 * Cada categoría tiene: id, folder (para matching de URL), title, description, href, type, items[].
 * Los items son leyes/normas con ref, date y description.
 */

export const legalCategories = [
  {
    id: "constitucion-codigos-convenios",
    folder: "constitucion_codigos_convenios",
    title: "Constitución Nacional, Convenios Internacionales y Códigos",
    description:
      "Normas fundamentales del Estado paraguayo: Constitución Nacional, tratados y convenios internacionales ratificados, y los principales códigos de la legislación paraguaya.",
    href: "/rubros/constitucion_codigos_convenios/indice_general.html",
    type: "fundamental",
    typeLabel: "Legislación fundamental",
    items: []
  },
  {
    id: "sector-educacion",
    folder: "disposiciones_sector_educacion",
    title: "Disposiciones del Sector Educación",
    description:
      "Leyes y reglamentos que regulan la educación en Paraguay: enseñanza pública y privada, universidades, formación docente y niveles educativos.",
    href: "/rubros/disposiciones_sector_educacion/indice_general.html",
    type: "leyes",
    typeLabel: "Leyes sectoriales",
    items: []
  },
  {
    id: "disposiciones-electorales",
    folder: "disposiciones_electorales",
    title: "Disposiciones Electorales",
    description:
      "Marco legal del sistema electoral paraguayo: Justicia Electoral, Código Electoral, Registro Cívico Permanente y modificaciones legislativas.",
    href: "/rubros/disposiciones_electorales/indice_general.html",
    type: "leyes",
    typeLabel: "Leyes electorales",
    items: [
      {
        ref: "Ley Nº 635/95",
        date: "22/08/1995",
        description: "Que reglamenta la justicia electoral"
      },
      {
        ref: "Ley Nº 679/95",
        date: "15/09/1995",
        description:
          "Que suspende el ejercicio de los derechos y el cumplimiento de los deberes y obligaciones"
      },
      {
        ref: "Ley Nº 744/95",
        date: "30/10/1995",
        description: "Que modifica los Artículos 17 y 21 de la Ley 635/95"
      },
      {
        ref: "Ley Nº 772/95",
        date: "27/11/1995",
        description:
          "Que dispone la renovación total del Registro Cívico Permanente"
      },
      {
        ref: "Ley Nº 834/96",
        date: "17/04/1996",
        description: "Que establece el Código Electoral Paraguayo"
      },
      {
        ref: "Ley Nº 859/96",
        date: "14/05/1996",
        description:
          "Que habilita la inscripción en el Registro Cívico Permanente de los electores con cédula de identidad vencida"
      },
      {
        ref: "Ley Nº 1.926/02",
        date: "18/06/2002",
        description:
          "Protocolo para la represión de actos ilícitos contra la seguridad de la aviación civil internacional"
      },
      {
        ref: "Ley Nº 2.783/05",
        date: "25/10/2005",
        description: "Modifica el artículo 130 de la Ley Nº 834/96"
      },
      {
        ref: "Ley Nº 2.858/06",
        date: "03/01/2006",
        description: "Modifica artículos de la Ley Nº 834/96"
      }
    ]
  },
  {
    id: "instituciones-publicas",
    folder: "crean_regulan_inst_publicas",
    title: "Leyes que Crean y Regulan Instituciones Públicas",
    description:
      "Legislación que establece y regula las instituciones del Estado paraguayo: ministerios, secretarías, entes autónomos y organismos públicos.",
    href: "/rubros/crean_regulan_inst_publicas/indice_general.html",
    type: "leyes",
    typeLabel: "Derecho público",
    items: []
  },
  {
    id: "regimen-migratorio",
    folder: "regimen_legal_migratorio",
    title: "Régimen Legal Migratorio",
    description:
      "Normativa sobre inmigración, residencia, ciudadanía, visas y condición jurídica de los extranjeros en Paraguay.",
    href: "/rubros/regimen_legal_migratorio/indice_general.html",
    type: "leyes",
    typeLabel: "Derecho migratorio",
    items: []
  },
  {
    id: "hechos-punibles-internacionales",
    folder: "hechos_punibles_internacionales",
    title: "Hechos Punibles Internacionales",
    description:
      "Convenios y tratados internacionales sobre delitos transfronterizos, crimen organizado, terrorismo y cooperación judicial.",
    href: "/rubros/hechos_punibles_internacionales/indice_general.htm",
    type: "leyes",
    typeLabel: "Derecho penal internacional",
    items: []
  },
  {
    id: "impositivas",
    folder: "impositivas",
    title: "Disposiciones Impositivas",
    description:
      "Leyes y reglamentaciones tributarias de Paraguay: IVA, Impuesto a la Renta Empresarial (IRE), retenciones, IDU, INR y normativa de la DNIT.",
    href: "/rubros/disposiciones_actividades_economicas/impositivas/indice.html",
    type: "tributario",
    typeLabel: "Tributario",
    items: []
  },
  {
    id: "impuesto-renta-personal",
    folder: null,
    title: "Impuesto a la Renta Personal (IRP)",
    description:
      "Normativa sobre el Impuesto a la Renta Personal en Paraguay: alcance, contribuyentes, deducciones, declaración jurada y gestión ante la DNIT.",
    href: "/impuesto-a-la-renta-personal.php",
    type: "tributario",
    typeLabel: "Tributario",
    items: []
  },
  {
    id: "cooperativas",
    folder: "cooperativas",
    title: "Cooperativas",
    description:
      "Marco legal del sector cooperativista en Paraguay: constitución, funcionamiento, fiscalización y régimen tributario de las cooperativas.",
    href: "/rubros/disposiciones_actividades_economicas/cooperativas.html",
    type: "leyes",
    typeLabel: "Derecho cooperativo",
    items: []
  },
  {
    id: "comercio-industria-servicios",
    folder: "comercio_industria_servicios",
    title: "Comercio, Industria y Servicios",
    description:
      "Legislación comercial e industrial: habilitaciones, registros de empresas, actividades económicas reguladas, importación, exportación y ferias.",
    href: "/rubros/disposiciones_actividades_economicas/comercio_industria_servicios.htm",
    type: "leyes",
    typeLabel: "Derecho comercial",
    items: []
  },
  {
    id: "bancos-financieras-seguros",
    folder: "bancos_financieras_seguros",
    title: "Bancos, Financieras y Seguros",
    description:
      "Regulación del sistema financiero paraguayo: Banco Central del Paraguay, entidades bancarias, cooperativas financieras y empresas aseguradoras.",
    href: "/rubros/disposiciones_actividades_economicas/bancos_financieras_seguros.html",
    type: "leyes",
    typeLabel: "Derecho financiero",
    items: []
  },
  {
    id: "etiquetado-productos",
    folder: "etiquetado_productos",
    title: "Etiquetado de Productos",
    description:
      "Normativa sobre etiquetado, rotulado y presentación de productos de consumo, alimentos, medicamentos y bienes importados en Paraguay.",
    href: "/rubros/disposiciones_actividades_economicas/etiquetado_productos.html",
    type: "leyes",
    typeLabel: "Regulación de productos",
    items: []
  },
  {
    id: "incentivos-inversion",
    folder: "incentivos_a_la_inversion",
    title: "Incentivos a la Inversión y Comercio Exterior",
    description:
      "Leyes de promoción de inversiones, zonas francas, maquila, regímenes aduaneros especiales y tratados de libre comercio de Paraguay.",
    href: "/rubros/disposiciones_actividades_economicas/incentivos_a_la_inversion.html",
    type: "leyes",
    typeLabel: "Derecho económico",
    items: []
  },
  {
    id: "mercado-valores",
    folder: "mercado_valores",
    title: "Mercado de Valores",
    description:
      "Regulación del mercado de capitales paraguayo: bolsa de valores, comisión nacional de valores, fondos de inversión y fideicomisos.",
    href: "/rubros/disposiciones_actividades_economicas/mercado_valores.html",
    type: "leyes",
    typeLabel: "Derecho financiero",
    items: []
  },
  {
    id: "defensa-consumidor",
    folder: "defensa_consumidor",
    title: "Defensa del Consumidor",
    description:
      "Derechos del consumidor en Paraguay: Ley de Defensa del Consumidor, prácticas comerciales, publicidad, garantías y organismos de control.",
    href: "/rubros/disposiciones_actividades_economicas/defensa_consumidor.html",
    type: "leyes",
    typeLabel: "Protección al consumidor",
    items: []
  },
  {
    id: "telecomunicaciones",
    folder: "telecomunicaciones",
    title: "Telecomunicaciones",
    description:
      "Marco regulatorio del sector de telecomunicaciones: CONATEL, espectro radioeléctrico, servicios de comunicaciones e internet en Paraguay.",
    href: "/rubros/disposiciones_actividades_economicas/telecomunicaciones.html",
    type: "leyes",
    typeLabel: "Telecomunicaciones",
    items: []
  },
  {
    id: "marcas-patentes-derechos-autor",
    folder: "marcas_patentes_derechos_autor",
    title: "Marcas, Patentes y Derechos de Autor",
    description:
      "Propiedad intelectual en Paraguay: registro de marcas, patentes de invención, derechos de autor, diseños industriales y DINAPI.",
    href: "/rubros/disposiciones_actividades_economicas/marcas_patentes_derechos_autor.html",
    type: "leyes",
    typeLabel: "Propiedad intelectual",
    items: []
  },
  {
    id: "laboral-seguridad-social",
    folder: "regimen_laboral_seguridad_social",
    title: "Régimen Laboral y Seguridad Social",
    description:
      "Código Laboral paraguayo, contratos de trabajo, IPS, sindicatos, seguridad e higiene laboral y convenios OIT ratificados.",
    href: "/rubros/disposiciones_actividades_economicas/regimen_laboral_seguridad_social.html",
    type: "leyes",
    typeLabel: "Derecho laboral",
    items: []
  },
  {
    id: "regimen-ambiental",
    folder: "regimen_legal_ambiental",
    title: "Régimen Legal Ambiental",
    description:
      "Legislación ambiental de Paraguay: evaluación de impacto ambiental, recursos naturales, áreas protegidas, residuos y SEAM/MADES.",
    href: "/rubros/disposiciones_actividades_economicas/regimen_legal_ambiental.html",
    type: "leyes",
    typeLabel: "Derecho ambiental",
    items: []
  },
  {
    id: "mediacion-arbitraje",
    folder: "mediacion_arbitraje",
    title: "Arbitraje y Mediación",
    description:
      "Marco legal de resolución alternativa de conflictos en Paraguay: arbitraje nacional e internacional, mediación y conciliación.",
    href: "/rubros/disposiciones_actividades_economicas/mediacion_arbitraje.html",
    type: "leyes",
    typeLabel: "Resolución de conflictos",
    items: []
  },
  {
    id: "agrarias-forestales",
    folder: "agrarias_forestales",
    title: "Leyes Agrarias y Forestales",
    description:
      "Regulación del sector agropecuario y forestal: tierras, colonización, INDERT, INFONA, agroquímicos, semillas y producción rural.",
    href: "/rubros/disposiciones_actividades_economicas/agrarias_forestales.html",
    type: "leyes",
    typeLabel: "Derecho agrario",
    items: []
  },
  {
    id: "hidrocarburos",
    folder: "hidrocarburos",
    title: "Hidrocarburos",
    description:
      "Legislación sobre exploración, explotación y comercialización de hidrocarburos en Paraguay, incluyendo normativa de PETROPAR.",
    href: "/rubros/disposiciones_actividades_economicas/hidrocarburos.html",
    type: "leyes",
    typeLabel: "Energía y recursos",
    items: []
  },
  {
    id: "biocombustibles",
    folder: "biocombustible",
    title: "Biocombustibles",
    description:
      "Marco normativo del sector de biocombustibles en Paraguay: etanol, biodiesel, mezclas obligatorias y régimen de incentivos.",
    href: "/nuevos/biocombustible.php",
    type: "leyes",
    typeLabel: "Energía y recursos",
    items: []
  },
  {
    id: "diccionarios",
    folder: null,
    title: "Diccionarios Jurídicos, Económicos y Técnicos",
    description:
      "Glosarios y diccionarios de referencia: jurídico, económico, contable, aduanero, tributario y ecoambiental para profesionales y estudiantes.",
    href: "/diccionarios.php",
    type: "diccionario",
    typeLabel: "Referencia técnica",
    items: []
  },
  {
    id: "cultura-biblioteca-unesco",
    folder: null,
    title: "Cultura / Biblioteca UNESCO",
    description:
      "Recursos culturales y publicaciones de referencia internacional disponibles a través de la Biblioteca Digital de la UNESCO.",
    href: "https://unesdoc.unesco.org/",
    type: "cultura",
    typeLabel: "Cultura y referencia",
    external: true,
    items: []
  }
];

export function getCategoryById(id) {
  return legalCategories.find((cat) => cat.id === id);
}

export function getCategoryByFolder(folder) {
  return legalCategories.find(
    (cat) => cat.folder && cat.folder === folder
  );
}

export function getCategoryBySlug(slugArray) {
  if (!slugArray || slugArray.length === 0) return null;
  // Try to match by any segment of the slug against folder names
  for (const segment of slugArray) {
    const normalized = segment.replace(/\.(html|htm|php)$/, "");
    const found = legalCategories.find(
      (cat) => cat.folder && cat.folder === normalized
    );
    if (found) return found;
  }
  return null;
}

export const legalTypes = {
  fundamental: { label: "Legislación fundamental", color: "#173b5f" },
  leyes: { label: "Leyes y normas", color: "#2d6fa6" },
  tributario: { label: "Tributario", color: "#2f80c2" },
  diccionario: { label: "Diccionarios", color: "#5f6b7a" },
  cultura: { label: "Cultura y referencia", color: "#68b9df" }
};
