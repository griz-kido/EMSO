# EMSO Web — Guía de desarrollo en VS Code

## 📁 Estructura del proyecto

```
EMSO_WEB/
│
├── index.html          ← Estructura HTML de la página
├── css/
│   └── styles.css      ← Todos los estilos (colores, tipografía, layout)
├── js/
│   ├── config.js       ← ⭐ ARCHIVO PRINCIPAL DE EDICIÓN (textos, colores, datos)
│   └── main.js         ← Lógica del sitio (no necesitas tocarlo normalmente)
├── images/             ← Coloca aquí todos tus logos e imágenes
│   ├── EMSO-Logo.png   ← Logo principal (navbar y footer)
│   └── EMSO-Logos.ico  ← Favicon (ícono de pestaña)
└── README.md           ← Esta guía
```

---

## 🚀 Configuración inicial en VS Code

1. **Abre la carpeta** en VS Code: `Archivo → Abrir carpeta → selecciona EMSO_WEB`
2. **Instala la extensión** "Live Server" (de Ritwick Dey) desde el panel de extensiones
3. Haz clic derecho en `index.html` → **"Open with Live Server"**
4. El sitio se abrirá en tu navegador y se recargará automáticamente con cada cambio

---

## ✏️ Cómo editar contenido

### 🎨 Cambiar colores
Abre `js/config.js` y modifica la sección `colores:`:
```js
colores: {
  navy:  "#030A8C",   // Azul marino principal → cámbialo por tu color
  blue:  "#034AA6",   // Azul medio
  sky:   "#035AA6",   // Azul acento / botones
  ...
}
```
Los cambios se aplican automáticamente a toda la página.

### 🖼️ Cambiar logo o imágenes
1. Copia tu imagen a la carpeta `images/`
2. En `js/config.js`, actualiza la ruta:
```js
brand: {
  logo:    "images/MI-NUEVO-LOGO.png",
  favicon: "images/MI-FAVICON.ico",
}
```
**Formatos recomendados:** PNG con fondo transparente para el logo, ICO o PNG para favicon.

### 📝 Cambiar textos
Todo el contenido está en `js/config.js`:
- `hero{}` → Textos del encabezado principal
- `contacto{}` → Teléfono, correo, dirección, horarios
- `mision{}` y `vision{}` → Misión y visión de la empresa
- `cta{}` → Banda de llamada a la acción
- `footer{}` → Textos del pie de página

### ➕ Agregar/quitar servicios
En `js/config.js`, agrega o elimina objetos de los arreglos:
```js
serviciosResidenciales: [
  // Agrega aquí un nuevo servicio:
  {
    icono:       "fa-solid fa-tools",        // Busca íconos en fontawesome.com/icons
    titulo:      "Nombre del servicio",
    descripcion: "Descripción breve del servicio."
  },
  // ... más servicios
]
```

### 🔗 Cambiar redes sociales
```js
redes: {
  facebook:  "https://facebook.com/tu-pagina",
  instagram: "https://instagram.com/tu-perfil",
  linkedin:  "https://linkedin.com/company/tu-empresa",
  whatsapp:  "#",  // Deja "#" si no aplica
}
```

### 📱 Cambiar número de WhatsApp
```js
contacto: {
  telefono:  "81 4706 0140",            // Se muestra en la página
  whatsapp:  "528147060140",            // Formato internacional sin + ni espacios
  ...
}
```

---

## 🎨 Cambios avanzados de estilo

Si necesitas modificar layout, tipografía o animaciones, edita `css/styles.css`.
El archivo está organizado por secciones con comentarios:
- `/* ── NAVBAR ──` → Barra de navegación
- `/* ── HERO ──` → Sección principal
- `/* ── CARDS DE SERVICIOS ──` → Tarjetas de servicios
- `/* ── FOOTER ──` → Pie de página
- etc.

---

## 🌐 Publicar el sitio

Para subir el sitio a internet necesitas:
1. Un **hosting web** (ej: Hostinger, SiteGround, o cPanel de tu proveedor)
2. Un **dominio** (ej: emsocs.com)
3. Sube todos los archivos y carpetas via FTP o el administrador de archivos de tu hosting
4. Asegúrate de subir también la carpeta `images/` con tu logo

### Hostings gratuitos para pruebas:
- **Netlify** (netlify.com) → Arrastra la carpeta y listo
- **GitHub Pages** → Sube el código a un repositorio público

---

## 🖼️ Íconos disponibles

Los íconos vienen de [Font Awesome](https://fontawesome.com/icons).
Para buscar un ícono, visita el sitio y copia la clase, por ejemplo:
- `fa-solid fa-bolt` → rayo
- `fa-solid fa-house` → casa
- `fa-solid fa-car` → auto

---

## 📞 Soporte

Si necesitas ayuda con el sitio, contacta a tu desarrollador web o consulta la documentación en línea.
