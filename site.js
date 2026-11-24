/* =====================================================================
   VECTRIA – shared layout: header + menu, footer, FR/EN language, ad slots
   Every page includes data.js then site.js, and sets <body data-page="...">.
   ===================================================================== */
(function () {
  var V = window.VECTRIA;
  var NAV = [
    { id: 'home', href: './', fr: 'Accueil', en: 'Home' },
    { id: 'games', href: 'jeux.html', fr: 'Fiches jeux', en: 'Game info' },
    { id: 'news', href: 'actualite.html', fr: 'Actualité', en: 'News' },
    { id: 'studio', href: 'entreprise.html', fr: 'Entreprise', en: 'Company' },
    { id: 'social', href: 'reseaux.html', fr: 'Réseaux', en: 'Social' },
  ];
  var page = document.body.getAttribute('data-page');

  /* ---------- language ---------- */
  var lang = 'fr';
  try { lang = localStorage.getItem('vectria_lang'); } catch (e) {}
  if (lang !== 'fr' && lang !== 'en') lang = (navigator.language || 'fr').toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en';
  function L(o) { return o ? (o[lang] || o.fr) : ''; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* ---------- header ---------- */
  var header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML =
    '<div class="wrap topbar">' +
      '<a class="brand" href="./"><img src="logo-v.png" alt="" width="40" height="40"><span>VECTRIA</span></a>' +
      '<div class="lang" role="group" aria-label="Langue / Language">' +
        '<button id="b-fr" type="button">FR</button><button id="b-en" type="button">EN</button>' +
      '</div>' +
      '<nav class="nav" aria-label="Menu">' +
        NAV.map(function (n) {
          return '<a href="' + n.href + '"' + (n.id === page ? ' aria-current="page"' : '') + ' data-fr="' + n.fr + '" data-en="' + n.en + '">' + n.fr + '</a>';
        }).join('') +
      '</nav>' +
    '</div>';
  document.body.insertBefore(header, document.body.firstChild);

  /* ---------- footer ---------- */
  var footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML =
    '<div class="wrap foot">' +
      '<span>© 2026 Vectria</span>' +
      '<a href="privacy.html" data-fr="Politique de confidentialité" data-en="Privacy policy">Politique de confidentialité</a>' +
      '<a href="reseaux.html" data-fr="Réseaux sociaux" data-en="Social networks">Réseaux sociaux</a>' +
      '<span><span data-fr="Contact :" data-en="Contact:">Contact :</span> <code>' + esc(V.contact) + '</code></span>' +
    '</div>';
  document.body.appendChild(footer);

  /* ---------- apply language ---------- */
  var listeners = [];
  function apply(l) {
    lang = l;
    try { localStorage.setItem('vectria_lang', l); } catch (e) {}
    document.documentElement.lang = l;
    document.querySelectorAll('[data-fr]').forEach(function (el) { el.textContent = el.getAttribute('data-' + l) || el.getAttribute('data-fr'); });
    document.querySelectorAll('[data-l]').forEach(function (el) { el.hidden = el.getAttribute('data-l') !== l; });
    document.getElementById('b-fr').setAttribute('aria-pressed', l === 'fr');
    document.getElementById('b-en').setAttribute('aria-pressed', l === 'en');
    var t = document.body.getAttribute('data-title-' + l); if (t) document.title = t;
    listeners.forEach(function (fn) { fn(l); });
  }
  document.getElementById('b-fr').addEventListener('click', function () { apply('fr'); });
  document.getElementById('b-en').addEventListener('click', function () { apply('en'); });

  /* ---------- helpers shared with the pages ---------- */
  var MONTHS = { fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
                 en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] };
  window.Site = {
    get lang() { return lang; },
    L: L, esc: esc,
    onLang: function (fn) { listeners.push(fn); fn(lang); },
    date: function (iso) {
      var p = iso.split('-').map(Number);
      return lang === 'fr' ? p[2] + ' ' + MONTHS.fr[p[1] - 1] + ' ' + p[0] : MONTHS.en[p[1] - 1] + ' ' + p[2] + ', ' + p[0];
    },
    game: function (id) { return V.games.filter(function (g) { return g.id === id; })[0]; },
    statusLabel: function (g) {
      return g.status === 'live' ? L({ fr: 'Disponible', en: 'Available' }) : L({ fr: 'En test · bientôt', en: 'In testing · soon' });
    },
    playUrl: function (g) { return 'https://play.google.com/store/apps/details?id=' + encodeURIComponent(g.pkg); },
    newsType: function (t) {
      return L({ release: { fr: 'Sortie', en: 'Release' }, update: { fr: 'Mise à jour', en: 'Update' }, dev: { fr: 'En création', en: 'In development' }, studio: { fr: 'Studio', en: 'Studio' } }[t] || { fr: 'Info', en: 'News' });
    },
  };
  document.addEventListener('DOMContentLoaded', function () { apply(lang); });
  if (document.readyState !== 'loading') apply(lang);
})();
