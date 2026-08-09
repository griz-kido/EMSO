/**
 * ============================================================
 *  EMSO — SCRIPT PRINCIPAL
 *  Lee EMSO_CONFIG (js/config.js) y construye la página.
 *  Aquí también se manejan: navbar scroll, hamburger, animaciones
 *  y el feedback del formulario.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. APLICAR COLORES DINÁMICAMENTE ───────────────────
  const root = document.documentElement;
  const c = EMSO_CONFIG.colores;
  root.style.setProperty('--navy',       c.navy);
  root.style.setProperty('--blue',       c.blue);
  root.style.setProperty('--navy-deep',  c.navyDeep);
  root.style.setProperty('--sky',        c.sky);
  root.style.setProperty('--silver',     c.silver);
  root.style.setProperty('--gray',       c.gray);
  root.style.setProperty('--dark',       c.dark);
  root.style.setProperty('--white',      c.white);
  root.style.setProperty('--light',      c.light);
  root.style.setProperty('--accent-hero',c.accentHero);
  root.style.setProperty('--whatsapp',   c.whatsapp);

  // ── 2. MARCA ─────────────────────────────────────────
  const b = EMSO_CONFIG.brand;
  document.title = `${b.nombre}, ${b.subtitulo}`;

  // Favicon
  const favicon = document.getElementById('favicon');
  if (favicon) favicon.href = b.favicon;

  // Logo navbar
  const navLogo = document.querySelector('.nav-logo img');
  if (navLogo) { navLogo.src = b.logo; navLogo.alt = `${b.nombre} Logo`; }

  // Logo footer
  const footerLogo = document.querySelector('.footer-brand img');
  if (footerLogo) { footerLogo.src = b.logo; footerLogo.alt = `${b.nombre} Logo`; }

  // Tagline footer
  const tagline = document.querySelector('.footer-tagline');
  if (tagline) tagline.textContent = b.tagline;

  // ── 3. HERO ───────────────────────────────────────────
  const h = EMSO_CONFIG.hero;
  setText('#hero-badge-text', h.badge);
  setHTML('#hero-brand-name-main', `${b.nombre} <span class="hero-brand-sub">${b.subtitulo}</span>`);
  setHTML('.hero-h1', h.titulo);
  setText('.hero-sub', h.descripcion);

  const btn1 = document.querySelector('.btn-primary');
  if (btn1) { btn1.textContent = h.boton1_texto; btn1.href = h.boton1_href; }
  const btn2 = document.querySelector('.btn-outline');
  if (btn2) { btn2.textContent = h.boton2_texto; btn2.href = h.boton2_href; }

  // Stats
  const statsContainer = document.querySelector('.hero-stats');
  if (statsContainer) {
    statsContainer.innerHTML = h.stats.map(s => `
      <div class="stat-item">
        <span class="stat-num">${s.numero}</span>
        <span class="stat-label">${s.etiqueta}</span>
      </div>`).join('');
  }

  // ── 4. SERVICIOS RESIDENCIALES ────────────────────────
  const gridRes = document.querySelector('#residencial .grid-3');
  if (gridRes) {
    gridRes.innerHTML = EMSO_CONFIG.serviciosResidenciales.map(s => `
      <div class="service-card">
        <div class="service-icon"><i class="${s.icono}"></i></div>
        <h3>${s.titulo}</h3>
        <p>${s.descripcion}</p>
      </div>`).join('');
  }

  // ── 6. CONSULTORÍA ────────────────────────────────────
  const co = EMSO_CONFIG.consultoria;
  setText('#consultoria .section-title', co.titulo);
  setText('#consultoria .section-sub',   co.descripcion);

  const consultList = document.querySelector('.consult-list');
  if (consultList) {
    consultList.innerHTML = co.lista.map(item => `
      <li><i class="fa-solid fa-circle-check"></i><span>${item}</span></li>`).join('');
  }

  const cb = co.bloque;
  setText('.consult-img-block h3', cb.titulo);
  setText('.consult-img-block > p', cb.descripcion);
  setText('.iso-badge span', cb.badge);

  // ── 7. VALORES ────────────────────────────────────────
  const valoresStrip = document.querySelector('.valores-strip');
  if (valoresStrip) {
    valoresStrip.innerHTML = EMSO_CONFIG.valores.map((v, i, arr) => `
      <div class="valor-item">
        <div class="valor-num">${v.num}</div>
        <div class="valor-icon-line"><i class="${v.icono}"></i></div>
        <div class="valor-text"><h3>${v.titulo}</h3><p>${v.descripcion}</p></div>
      </div>
      ${i < arr.length - 1 ? '<div class="valor-sep"></div>' : ''}`).join('');
  }

  // ── 8. MISIÓN Y VISIÓN ────────────────────────────────
  const mv = document.querySelectorAll('.mv-card');
  if (mv.length >= 2) {
    // Misión
    mv[0].querySelector('h2').textContent = EMSO_CONFIG.mision.titulo;
    mv[0].querySelector('p').textContent  = EMSO_CONFIG.mision.descripcion;
    // Visión
    mv[1].querySelector('h2').textContent = EMSO_CONFIG.vision.titulo;
    mv[1].querySelector('p').textContent  = EMSO_CONFIG.vision.descripcion;
    const visionTag = mv[1].querySelector('.mv-tag');
    if (visionTag) visionTag.textContent = `Nuestra Visión ${EMSO_CONFIG.vision.anio}`;
  }

  // ── 9. CTA BAND ───────────────────────────────────────
  const cta = EMSO_CONFIG.cta;
  setText('#cta-band h2', cta.titulo);
  setText('#cta-band p',  cta.descripcion);
  const btnCta = document.querySelector('.btn-cta');
  if (btnCta) { btnCta.textContent = cta.boton; btnCta.href = cta.href; }

  // ── 10. CONTACTO ──────────────────────────────────────
  const ct = EMSO_CONFIG.contacto;
  // Datos de contacto en la sección
  const contactItems = document.querySelectorAll('.contact-item');
  if (contactItems.length >= 4) {
    contactItems[0].querySelector('p').textContent = ct.ciudad;
    contactItems[1].querySelector('p').textContent = ct.telefono;
    contactItems[2].querySelector('p').textContent = ct.correo;
    contactItems[3].querySelector('p').innerHTML   = ct.horario;
  }
  // WhatsApp button
  const waBtns = document.querySelectorAll('.wa-btn, a[href^="https://wa.me/"]');
  waBtns.forEach(btn => { btn.href = `https://wa.me/${ct.whatsapp}`; });

  // Datos de contacto en footer
  const footerContactCol = document.querySelector('.footer-col:last-child p');
  if (footerContactCol) {
    footerContactCol.innerHTML = `${ct.ciudad.split(',')[0]}, Nuevo León<br>México<br><br>${ct.telefono}<br><br>${ct.correo}`;
  }

  // ── 11. REDES SOCIALES ────────────────────────────────
  const r = EMSO_CONFIG.redes;
  const socialBtns = document.querySelectorAll('.social-btn');
  const redesKeys = ['facebook','instagram','linkedin','whatsapp'];
  socialBtns.forEach((btn, i) => { if (redesKeys[i]) btn.href = r[redesKeys[i]]; });

  // ── 12. FOOTER BOTTOM ─────────────────────────────────
  const fbottom = document.querySelectorAll('.footer-bottom p');
  if (fbottom.length >= 2) {
    fbottom[0].textContent = EMSO_CONFIG.footer.copyright;
    fbottom[1].textContent = EMSO_CONFIG.footer.creditos;
  }

  // ── 13. NAVBAR SCROLL ────────────────────────────────
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ── 14. HAMBURGER ─────────────────────────────────────
  const ham   = document.getElementById('hamburger');
  const links = document.getElementById('navlinks');
  ham.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

  // ── 15. ANIMACIONES FADE-UP ───────────────────────────
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: .1 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

  // ── 16. FORMULARIO ────────────────────────────────────
  // Envía los datos a send-form.php, que reenvía el correo (ver ese archivo).
  const quoteForm = document.getElementById('quoteForm');
  const btnForm   = document.querySelector('.btn-form');
  const formMsg   = document.getElementById('formMsg');
  const btnHTML   = 'Enviar solicitud <i class="fa-solid fa-paper-plane" style="margin-left:8px"></i>';

  if (quoteForm && btnForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validación nativa del navegador (campos "required")
      if (!quoteForm.checkValidity()) {
        quoteForm.reportValidity();
        return;
      }

      btnForm.disabled = true;
      btnForm.textContent = 'Enviando...';
      if (formMsg) formMsg.style.display = 'none';

      fetch('send-form.php', {
        method: 'POST',
        body: new FormData(quoteForm),
      })
        .then(res => res.json().catch(() => ({ success: false, error: 'Respuesta inválida del servidor.' })))
        .then(data => {
          if (data.success) {
            btnForm.innerHTML = '¡Enviado! Te contactaremos pronto ✓';
            btnForm.style.background = '#1a7a3c';
            quoteForm.reset();
          } else {
            throw new Error(data.error || 'No se pudo enviar tu solicitud.');
          }
        })
        .catch(err => {
          if (formMsg) {
            formMsg.textContent = err.message || 'Ocurrió un error. Intenta de nuevo o escríbenos por WhatsApp.';
            formMsg.style.color = '#c0392b';
            formMsg.style.display = 'block';
          }
          btnForm.innerHTML = btnHTML;
        })
        .finally(() => {
          btnForm.disabled = false;
          setTimeout(() => {
            btnForm.innerHTML = btnHTML;
            btnForm.style.background = '';
          }, 5000);
        });
    });
  }

  // ── UTILIDADES ────────────────────────────────────────
  function setText(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  }
  function setHTML(selector, html) {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
  }
});
