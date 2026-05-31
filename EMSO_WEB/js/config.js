/**
 * ============================================================
 *  EMSO — ARCHIVO DE CONFIGURACIÓN DE CONTENIDO
 *  Edita este archivo para cambiar textos, colores, imágenes
 *  y logos sin tocar el HTML ni el CSS principal.
 * ============================================================
 */

const EMSO_CONFIG = {

  // ─── MARCA ───────────────────────────────────────────────
  brand: {
    nombre:    "EMSO",
    subtitulo: "Consultoría y Soluciones",
    tagline:   "Soluciones integrales con profesionalismo, confianza y resultados para hogares, negocios y organizaciones.",
    // Rutas de imágenes (coloca tus archivos en la carpeta /images/)
    logo:      "images/EMSO-Logo.png",   // Logo principal (navbar y footer)
    favicon:   "images/EMSO-Logos.ico",  // Ícono de pestaña del navegador
  },

  // ─── COLORES ─────────────────────────────────────────────
  // Modifica los valores HEX para cambiar la paleta de colores
  colores: {
    navy:  "#030A8C",   // Azul marino principal
    blue:  "#034AA6",   // Azul medio
    sky:   "#035AA6",   // Azul cielo / acento
    gray:  "#A6A6A6",   // Gris texto secundario
    dark:  "#0D0D0D",   // Negro textos
    white: "#FFFFFF",   // Blanco
    light: "#F4F6FB",   // Fondo claro secciones
    accentHero: "#a0c4ff",  // Color acento en hero (títulos / íconos)
    whatsapp:   "#25D366",  // Color botón WhatsApp
  },

  // ─── CONTACTO ────────────────────────────────────────────
  contacto: {
    telefono:   "81 4706 0140",
    whatsapp:   "528147060140",   // Número internacional sin +
    correo:     "contacto@emsocs.com",
    ciudad:     "Monterrey, Nuevo León, México",
    horario:    "Lunes a Viernes: 8:00 AM – 6:00 PM<br>Sábado: 9:00 AM – 2:00 PM",
  },

  // ─── REDES SOCIALES ──────────────────────────────────────
  // Deja en "#" si aún no tienes la red activa
  redes: {
    facebook:  "#",
    instagram: "#",
    linkedin:  "#",
    whatsapp:  "#",
  },

  // ─── SECCIÓN HERO ────────────────────────────────────────
  hero: {
    badge:       "Empresa Mexicana de Confianza",
    titulo:      "Soluciones Integrales con <span>Profesionalismo,</span> Confianza y Resultados",
    descripcion: "EMSO es tu aliado estratégico en mantenimiento, instalación, rehabilitación y consultoría para hogares, negocios y organizaciones. Un solo proveedor, múltiples soluciones.",
    boton1_texto: "Conoce nuestros servicios",
    boton1_href:  "#residencial",
    boton2_texto: "Contáctanos",
    boton2_href:  "#contacto",
    stats: [
      { numero: "+12", etiqueta: "Servicios Residenciales" },
      { numero: "+10", etiqueta: "Servicios Comerciales"   },
      { numero: "ISO", etiqueta: "9001:2015"               },
    ],
  },

  // ─── SERVICIOS RESIDENCIALES ─────────────────────────────
  // icono: clase de Font Awesome (ej. "fa-solid fa-bolt")
  serviciosResidenciales: [
    { icono: "fa-solid fa-plug",          titulo: "Electrodomésticos",         descripcion: "Instalación y mantenimiento de electrodomésticos del hogar con garantía de servicio." },
    { icono: "fa-solid fa-hammer",        titulo: "Obras Civiles",             descripcion: "Ampliaciones, pintura, pisos para patios y cocheras, y adecuaciones diversas." },
    { icono: "fa-solid fa-couch",         titulo: "Remodelación de Espacios",  descripcion: "Rehabilitación y mejora de habitaciones e interiores residenciales." },
    { icono: "fa-solid fa-snowflake",     titulo: "Aire Acondicionado",        descripcion: "Instalación, mantenimiento y reparación de sistemas de climatización." },
    { icono: "fa-solid fa-bolt",          titulo: "Instalaciones Eléctricas",  descripcion: "Revisiones preventivas, correcciones y adecuaciones de cableado residencial." },
    { icono: "fa-solid fa-faucet",        titulo: "Plomería",                  descripcion: "Servicios integrales de plomería para el hogar, instalación y reparación." },
    { icono: "fa-solid fa-video",         titulo: "Videovigilancia",           descripcion: "Instalación y configuración de CCTV con monitoreo remoto desde cualquier dispositivo." },
    { icono: "fa-solid fa-gamepad",       titulo: "Consolas y Controles",      descripcion: "Reparación y mantenimiento de consolas de videojuegos y controles." },
    { icono: "fa-solid fa-mobile-screen", titulo: "Celulares y Computadoras",  descripcion: "Diagnóstico, mantenimiento y reparación de smartphones, laptops y PCs." },
    { icono: "fa-solid fa-droplet",       titulo: "Tinacos y Cisternas",       descripcion: "Instalación, mantenimiento y rehabilitación de sistemas de almacenamiento de agua." },
    { icono: "fa-solid fa-solar-panel",   titulo: "Energía Solar",             descripcion: "Diseño, instalación y mantenimiento de sistemas fotovoltaicos y paneles solares." },
    { icono: "fa-solid fa-car",           titulo: "Mantenimiento Vehicular",   descripcion: "Afinación menor y mantenimiento preventivo para vehículos de gasolina." },
  ],

  // ─── SERVICIOS COMERCIALES ───────────────────────────────
  serviciosComerciales: [
    { icono: "fa-solid fa-wind",      titulo: "Climatización Comercial",  descripcion: "Aire acondicionado y sistemas de climatización para negocios y oficinas." },
    { icono: "fa-solid fa-industry",  titulo: "Eléctrico Industrial",     descripcion: "Instalaciones eléctricas industriales y adecuaciones de infraestructura." },
    { icono: "fa-solid fa-wrench",    titulo: "Plomería Comercial",       descripcion: "Servicios generales de plomería para establecimientos comerciales." },
    { icono: "fa-solid fa-camera",    titulo: "Videovigilancia Comercial",descripcion: "CCTV y monitoreo para negocios, oficinas y establecimientos." },
    { icono: "fa-solid fa-laptop",    titulo: "Equipos de Cómputo",       descripcion: "Mantenimiento y reparación de equipos, laptops y dispositivos móviles." },
    { icono: "fa-solid fa-water",     titulo: "Tinacos y Cisternas",      descripcion: "Instalación y mantenimiento de sistemas hídricos comerciales." },
    { icono: "fa-solid fa-sun",       titulo: "Energía Solar",            descripcion: "Instalación y mantenimiento de sistemas de energía solar para empresas." },
    { icono: "fa-solid fa-border-all",titulo: "Plafones y Pisos Falsos",  descripcion: "Instalación, mantenimiento y rehabilitación de plafones y pisos técnicos." },
    { icono: "fa-solid fa-chart-line",titulo: "Optimización de Procesos", descripcion: "Diagnóstico, análisis y optimización de procesos organizacionales." },
    { icono: "fa-solid fa-certificate",titulo:"ISO 9001:2015",            descripcion: "Asesoría, implementación y seguimiento de Sistemas de Gestión de Calidad." },
  ],

  // ─── CONSULTORÍA ─────────────────────────────────────────
  consultoria: {
    titulo:      "Consultoría Empresarial",
    descripcion: "Servicios de consultoría enfocados en el fortalecimiento organizacional, la mejora de procesos y la certificación de calidad de tu empresa.",
    lista: [
      "Revisión y documentación de procesos organizacionales",
      "Identificación de oportunidades de mejora operativa",
      "Desarrollo e implementación de procedimientos y controles",
      "Documentación para Sistemas de Gestión de Calidad",
      "Capacitación y acompañamiento para ISO 9001:2015",
      "Preparación para auditorías internas y externas",
      "Seguimiento de indicadores y mejora continua",
    ],
    bloque: {
      titulo:      "Tu empresa, nuestro compromiso",
      descripcion: "En EMSO entendemos que la confianza de nuestros clientes se construye mediante resultados. Cada servicio de consultoría está diseñado para generar beneficios tangibles y relaciones comerciales de largo plazo.",
      badge:       "Especialistas en ISO 9001:2015",
    },
  },

  // ─── VALORES ─────────────────────────────────────────────
  valores: [
    { num:"01", icono:"fa-solid fa-handshake",    titulo:"Integridad",          descripcion:"Actuamos con honestidad, transparencia y ética profesional en cada proyecto." },
    { num:"02", icono:"fa-solid fa-medal",        titulo:"Compromiso",          descripcion:"Cumplimos con los acuerdos y buscamos superar las expectativas de nuestros clientes." },
    { num:"03", icono:"fa-solid fa-star",         titulo:"Calidad",             descripcion:"Implementamos las mejores prácticas para garantizar resultados eficientes y duraderos." },
    { num:"04", icono:"fa-solid fa-shield",       titulo:"Responsabilidad",     descripcion:"Ejecutamos cada servicio con profesionalismo y atención al detalle." },
    { num:"05", icono:"fa-solid fa-lightbulb",    titulo:"Innovación",          descripcion:"Promovemos soluciones modernas que generan beneficios sostenibles." },
    { num:"06", icono:"fa-solid fa-users",        titulo:"Orientación al Cliente",descripcion:"Escuchamos y atendemos cada necesidad de manera personalizada." },
    { num:"07", icono:"fa-solid fa-arrow-trend-up",titulo:"Mejora Continua",    descripcion:"Impulsamos el desarrollo constante de nuestros procesos y capacidades técnicas." },
  ],

  // ─── MISIÓN Y VISIÓN ─────────────────────────────────────
  mision: {
    titulo:      "Crear alianzas duraderas",
    descripcion: "Crear alianzas duraderas con nuestros clientes mediante la prestación de soluciones integrales que generen valor, confianza y tranquilidad, distinguiéndonos por nuestro profesionalismo, calidad de servicio y compromiso permanente con la satisfacción de quienes depositan su confianza en nosotros.",
  },
  vision: {
    titulo:      "Referente regional",
    descripcion: "Para el año 2030, ser una empresa reconocida a nivel regional por la excelencia, seriedad y confiabilidad de nuestros servicios, consolidándonos como un referente en soluciones técnicas, operativas y de consultoría para los sectores residencial y comercial.",
    anio:        "2030",
  },

  // ─── CTA BANDA ───────────────────────────────────────────
  cta: {
    titulo:     "¿Listo para encontrar la solución que necesitas?",
    descripcion:"Cuéntanos tu proyecto y nuestro equipo te brindará una atención personalizada.",
    boton:      "Contáctanos hoy →",
    href:       "#contacto",
  },

  // ─── FOOTER ──────────────────────────────────────────────
  footer: {
    copyright: "© 2025 EMSO, Consultoría y Soluciones. Todos los derechos reservados.",
    creditos:  "Hecho con profesionalismo en Monterrey, NL",
  },

};
