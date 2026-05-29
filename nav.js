/* =============================================================
   Historia de Argentina — índice lateral con scroll-spy
   Genera automáticamente un menú lateral a partir de los <h2>
   de la página y resalta la sección activa al hacer scroll.
   No requiere configuración: se enlaza con <script src="nav.js">.
   ============================================================= */
(function () {
  function init() {
    var main = document.querySelector('main.contenido') || document.querySelector('main');
    if (!main) return;

    var heads = Array.prototype.slice.call(main.querySelectorAll('h2'));
    if (heads.length < 2) return; // no vale la pena un índice de una sola sección

    // Construye el contenedor del índice
    var nav = document.createElement('nav');
    nav.className = 'toc-sidebar';
    var title = document.createElement('div');
    title.className = 'toc-title';
    title.textContent = 'Secciones';
    nav.appendChild(title);
    var ul = document.createElement('ul');

    var sections = [];
    heads.forEach(function (h, i) {
      var sec = h.closest('section') || h;
      if (!sec.id) sec.id = 'sec-' + (i + 1);
      sections.push(sec);

      var num = ('0' + (i + 1)).slice(-2);
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + sec.id;
      a.setAttribute('data-target', sec.id);
      a.innerHTML = '<span class="toc-num">' + num + '</span>' + h.textContent.trim();
      li.appendChild(a);
      ul.appendChild(li);
    });
    nav.appendChild(ul);
    document.body.appendChild(nav);

    var links = {};
    Array.prototype.forEach.call(nav.querySelectorAll('a'), function (a) {
      links[a.getAttribute('data-target')] = a;
    });

    // Scroll suave al hacer clic
    nav.addEventListener('click', function (e) {
      var a = e.target.closest('a');
      if (!a) return;
      e.preventDefault();
      var el = document.getElementById(a.getAttribute('data-target'));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', '#' + a.getAttribute('data-target'));
      }
    });

    // Scroll-spy: marca la última sección cuyo borde superior pasó el umbral
    var ticking = false;
    function update() {
      var umbral = window.scrollY + 140;
      var actual = sections[0].id;
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= umbral) actual = sections[i].id;
      }
      Object.keys(links).forEach(function (k) {
        links[k].classList.toggle('active', k === actual);
      });
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
