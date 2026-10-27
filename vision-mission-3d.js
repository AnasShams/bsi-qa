/* vision-mission-3d.js
   Builds the 3D scenes inside every [data-bsi3d="vision" | "mission"] element.
   No dependencies. Animation is CSS; JS only adds pointer tilt, sizing,
   and pauses the scene when it is off screen. */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function el(cls, parent) {
    var n = document.createElement('div');
    n.className = cls;
    n.setAttribute('aria-hidden', 'true');
    if (parent) parent.appendChild(n);
    return n;
  }

  function buildVision(world) {
    el('v-floor', world);
    var r1 = el('v-ring r1', world);
    var r2 = el('v-ring r2', r1);
    el('v-ring r3', r2);
    el('v-core', world);
  }

  function buildMission(world) {
    var stack = el('m-stack', world);
    for (var i = 0; i < 4; i++) {
      var slab = el('m-slab s' + i, stack);
      slab.style.setProperty('--i', i);
      el('m-face m-top', slab);
      el('m-face m-bot', slab);
      [0, 90, 180, 270].forEach(function (a) {
        el('m-face m-side', slab).style.setProperty('--a', a + 'deg');
      });
    }
  }

  function init(root) {
    var kind = root.getAttribute('data-bsi3d');
    // In the full-width layout the copy sits on top of the scene, so the
    // pointer is tracked on the whole hero, not just the scene element
    var host = root.closest('.b3d-hero') || root;
    var scene = el('b3d-scene', root);
    var intro = el('b3d-intro', scene);
    var world = el('b3d-world', intro);
    (kind === 'mission' ? buildMission : buildVision)(world);

    // Resting angle: mission is seen from above, vision nearly head-on
    var base = kind === 'mission' ? { x: -24, y: -28 } : { x: -12, y: 0 };
    var cx = base.x, cy = base.y, tx = base.x, ty = base.y, raf = 0;

    function apply() {
      world.style.transform =
        'rotateX(' + cx + 'deg) rotateY(' + cy + 'deg) ' +
        'scale3d(var(--s,1),var(--s,1),var(--s,1))';
    }

    function tick() {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      apply();
      var moving = Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05;
      raf = moving ? requestAnimationFrame(tick) : 0;
    }

    function kick() {
      if (!raf) raf = requestAnimationFrame(tick);
    }

    if (!reduce) {
      host.addEventListener('pointermove', function (e) {
        var r = host.getBoundingClientRect();
        var nx = (e.clientX - r.left) / r.width * 2 - 1;
        var ny = (e.clientY - r.top) / r.height * 2 - 1;
        if (nx < -1 || nx > 1 || ny < -1 || ny > 1) {
          tx = base.x;
          ty = base.y;
          kick();
          return;
        }
        ty = base.y + nx * 22;
        tx = base.x - ny * 12;
        kick();
      });
      host.addEventListener('pointerleave', function () {
        tx = base.x;
        ty = base.y;
        kick();
      });
    }

    // Scale the scene to the box so it fills the column at any width
    if ('ResizeObserver' in window) {
      new ResizeObserver(function (entries) {
        var box = entries[0].contentRect;
        var s = Math.min(box.width / 520, box.height / 416);
        s = Math.min(1.35, Math.max(0.55, s));
        root.style.setProperty('--s', s.toFixed(3));
      }).observe(scene);
    }

    // Run animations only while visible
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        var on = entries[0].isIntersecting;
        root.classList.toggle('is-live', on);
        if (on) root.classList.add('has-entered');
      }, { threshold: 0.15 }).observe(root);
    } else {
      root.classList.add('is-live', 'has-entered');
    }

    apply();
  }

  function boot() {
    var nodes = document.querySelectorAll('[data-bsi3d]');
    for (var i = 0; i < nodes.length; i++) init(nodes[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();