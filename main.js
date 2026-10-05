/* Black Sands Industries - shared behaviour: nav + footer injection, mobile menu, cursor, scroll animations, counters, forms */
(function () {
  const $ = (s) => document.querySelector(s),
    $$ = (s) => [...document.querySelectorAll(s)];
  const navigationEntry = performance.getEntriesByType("navigation")[0];
  const navigationType = navigationEntry?.type || "navigate";
  const loaderSkipKey = "bsi-skip-next-preloader";
  history.scrollRestoration = navigationType === "reload" ? "manual" : "auto";
  let skipPreloader = navigationType === "back_forward";
  try {
    skipPreloader ||= sessionStorage.getItem(loaderSkipKey) === "1";
    sessionStorage.removeItem(loaderSkipKey);
  } catch {}

  const scrollToTop = () => {
    const previousBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = previousBehavior;
    });
  };

  if (navigationType !== "back_forward") {
    scrollToTop();
    addEventListener("pageshow", scrollToTop, { once: true });
  }

  document.addEventListener(
    "click",
    (event) => {
      const link =
        event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (
        !link ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        link.hasAttribute("download") ||
        (link.target && link.target !== "_self")
      ) {
        return;
      }

      try {
        const destination = new URL(link.href, location.href);
        const sameDocument =
          destination.pathname === location.pathname &&
          destination.search === location.search &&
          destination.hash;
        if (destination.origin === location.origin && !sameDocument) {
          sessionStorage.setItem(loaderSkipKey, "1");
        }
      } catch {}
    },
    true,
  );

  if (skipPreloader) {
    document.body.classList.add("site-ready");
  } else {
    document.body.classList.add("site-loading");
    const loader = document.createElement("div");
    const frame = document.createElement("iframe");
    let finished = false;
    let fallbackTimer;

    loader.id = "site-loader";
    loader.setAttribute("role", "status");
    loader.setAttribute("aria-label", "Loading Black Saber Industries");
    frame.src = "pre-loader-animation.html?embed=1";
    frame.title = "Black Saber Industries logo animation";
    frame.setAttribute("aria-hidden", "true");
    loader.append(frame);

    const finishPreloader = () => {
      if (finished) return;
      finished = true;
      clearTimeout(fallbackTimer);
      loader.classList.add("is-exiting");
      window.setTimeout(() => {
        loader.remove();
        document.body.classList.remove("site-loading");
        document.body.classList.add("site-ready");
        scrollToTop();
      }, 450);
    };

    addEventListener("message", (event) => {
      if (
        event.source === frame.contentWindow &&
        event.data === "bsi-preloader-complete"
      ) {
        finishPreloader();
      }
    });

    fallbackTimer = window.setTimeout(finishPreloader, 7000);
    document.body.prepend(loader);
  }

  const path =
    location.pathname.replace(/\/index\.html$/, "").replace(/\/$/, "") || "/";
  const L = (h, t, c) =>
    `<a href="${h}"${path === h ? ' class="act"' : ""}${c ? ` class="${c}"` : ""}>${t}</a>`;
  const who = [
    ["/about-us.html", "About Us"],
    ["/leadership.html", "Leadership"],
    ["/our-commitment.html", "Our Commitment"],
    ["/our-partners.html", "Our Partners"],
  ];
  const what = [
    ["/capabilities.html", "Capabilities by Domain"],
    ["/services.html", "Services"],
    ["/products.html", "Products"],
  ];
  const isActiveGroup = (items) => items.some(([href]) => path === href);
  const whoIsActive = isActiveGroup(who);
  const whatIsActive = isActiveGroup(what);
  const dd = (a) =>
    `<div class="dd">${a.map((x) => L(x[0], x[1])).join("")}</div>`;
  const navHTML = `<nav><div class="wrap">
<a class="logo" href="/" aria-label="Black Saber Industries home"><img src="/assets/bsi-logo.png" alt="Black Saber Industries"></a>
<div class="pill">
 <div>${L("/", "Home")}</div>
 <div><a class="${whoIsActive ? "act" : ""}" href="#" onclick="return false">Who We Are</a>${dd(who)}</div>
 <div><a class="${whatIsActive ? "act" : ""}" href="#" onclick="return false">What We Do</a>${dd(what)}</div>
 <div>${L("/technologies.html", "Technologies")}</div><div>${L("/our-facility.html", "Our Facility")}</div><div>${L("/our-people.html", "Our People")}</div><div>${L("/careers.html", "Careers")}</div>
</div>
<div class="nr"><a class="btn d" href="/connect.html">Connect</a><button class="burger" id="bg" aria-label="Menu" aria-expanded="false"><i></i><i></i><i></i></button></div>
<div id="mm">${L("/", "Home")}<div class="g${whoIsActive ? " act" : ""}">Who We Are</div>${who.map((x) => `<a class="s${path === x[0] ? " act" : ""}" href="${x[0]}">${x[1]}</a>`).join("")}<div class="g${whatIsActive ? " act" : ""}">What We Do</div>${what.map((x) => `<a class="s${path === x[0] ? " act" : ""}" href="${x[0]}">${x[1]}</a>`).join("")}${L("/technologies.html", "Technologies")}${L("/our-facility.html", "Our Facility")}${L("/our-people.html", "Our People")}${L("/careers.html", "Careers")}</div>
</div></nav>
`;
  const footHTML = `<footer><div class="wrap">
<div class="footer-top"><div class="footer-links"><div class="cols">
<div><h3>Helpful Links</h3>Black Sands Industries<br>Advanced Industrial Solutions</div>
<div><h3>Who We Are</h3>${who.map((x) => `<a href="${x[0]}">${x[1]}</a>`).join("")}</div>
<div><h3>What We Do</h3>${what.map((x) => `<a href="${x[0]}">${x[1]}</a>`).join("")}</div>
<div><h3>More</h3><a href="/technologies.html">Technologies</a><a href="/our-facility.html">Our Facility</a><a href="/our-people.html">Our People</a><a href="/careers.html">Careers</a><a href="/connect.html">Contact Us</a></div></div></div>
<section class="footer-cta" id="cta"><div class="mono">Connect</div><h2 data-split-view>Building a Sustainable Future Through Engineering Excellence</h2><p>BSI leads the transformation of industries by integrating renewable energy, automation, and innovation into every engineered solution.</p><div class="actions"><a class="btn p" href="/connect.html">CONTACT US</a></div></section></div>
<div class="footer-bottom"><span>© 2026 Black Sands Industries All Rights Reserved</span><span><a href="/cookies.html">Cookies</a> · <a href="/terms.html">Terms of Use</a> · <a href="/privacy.html">Privacy</a></span></div></div></footer>`;
  $("#site-nav").innerHTML = navHTML;
  $("#site-footer").innerHTML = footHTML;

  document.querySelectorAll(".wrap").forEach((container) => {
    container.classList.add("container");
  });
  document.querySelectorAll(".split, .contact").forEach((row) => {
    row.classList.add("row", "g-4");
    Array.from(row.children).forEach((column) => {
      column.classList.add("col-12", "col-lg-6");
    });
  });
  const appRow = $(".app .wrap");
  if (appRow) {
    appRow.classList.add("row", "g-5");
    appRow.querySelector(".l").classList.add("col-12", "col-lg-5");
    appRow.querySelector(".steps").classList.add("col-12", "col-lg-7");
  }

  const typewriterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const title = entry.target;
        const text = title.textContent.trim();
        const reserve = document.createElement("span");
        const output = document.createElement("span");
        const typedText = document.createTextNode("");
        const cursor = document.createElement("span");
        reserve.className = "typewriter-reserve";
        reserve.setAttribute("aria-hidden", "true");
        reserve.textContent = text;
        output.className = "typewriter-output";
        output.setAttribute("aria-hidden", "true");
        cursor.className = "typewriter-cursor";
        cursor.setAttribute("aria-hidden", "true");
        output.append(typedText, cursor);
        title.setAttribute("aria-label", text);
        title.replaceChildren(reserve, output);
        observer.unobserve(title);

        if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
          typedText.data = text;
          return;
        }

        let character = 0;
        const typeNextCharacter = () => {
          character += 1;
          typedText.data = text.slice(0, character);
          if (character < text.length) {
            window.setTimeout(typeNextCharacter, 35);
          }
        };
        typeNextCharacter();
      });
    },
    { threshold: 0.35 },
  );
  $$(".typewriter-title").forEach((title) =>
    typewriterObserver.observe(title),
  );

  /* mobile menu */
  const bg = $("#bg"),
    mm = $("#mm");
  const tg = (o) => {
    mm.classList.toggle("open", o);
    bg.classList.toggle("open", o);
    bg.setAttribute("aria-expanded", o);
  };
  bg.onclick = () => tg(!mm.classList.contains("open"));
  mm.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => tg(false)),
  );
  addEventListener("resize", () => innerWidth > 1100 && tg(false));

  /* word-by-word reveal */
  window.splitWords = function (el, step, start) {
    el.innerHTML = el.textContent
      .trim()
      .split(/\s+/)
      .map(
        (w, i) =>
          `<span class="w" style="animation-delay:${start + i * step}s">${w}</span>`,
      )
      .join(" ");
  };
  $$("[data-split]").forEach((h) => splitWords(h, 0.1, 0.15));
  new IntersectionObserver(
    (es, o) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          splitWords(e.target, 0.07, 0);
          o.unobserve(e.target);
        }
      }),
    { threshold: 0.5 },
  ).observe($("[data-split-view]"));

  /* scroll reveal: cards replay, everything else plays once */
  window.observeReveal = function (root) {
    (root || document).querySelectorAll(".rv").forEach((el) => io.observe(el));
  };
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        const card = e.target.matches(".card,.tm");
        if (e.isIntersecting) {
          e.target.classList.add("in");
          if (!card) io.unobserve(e.target);
        } else if (card) e.target.classList.remove("in");
      }),
    { threshold: 0.15 },
  );
  observeReveal();

  /* counters: <b data-n="40" data-s="+" data-p="" data-f="0"> */
  const co = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        co.unobserve(e.target);
        const b = e.target,
          n = +b.dataset.n,
          f = +b.dataset.f || 0,
          t0 = performance.now();
        (function tick(t) {
          const k = Math.min((t - t0) / 1600, 1),
            v = n * (1 - Math.pow(1 - k, 3));
          b.textContent =
            (b.dataset.p || "") + v.toFixed(f) + (b.dataset.s || "");
          k < 1 && requestAnimationFrame(tick);
        })(t0);
      }),
    { threshold: 0.6 },
  );
  $$("[data-n]").forEach((b) => co.observe(b));

  /* cursor */
  const cur = $("#cur");
  addEventListener("pointermove", (e) => {
    cur.style.left = e.clientX + "px";
    cur.style.top = e.clientY + "px";
  });
  document.addEventListener("pointerover", (e) => {
    cur.classList.toggle("big", !!e.target.closest("a,button,.card,.tm"));
  });

  /* hero parallax */
  const hbg = $(".hero .bg");
  if (hbg)
    addEventListener(
      "scroll",
      () => {
        hbg.style.transform = `translateY(${scrollY * 0.25}px) scale(${1 + scrollY * 0.0002})`;
      },
      { passive: true },
    );

  /* contact form: opens the visitor's email app addressed to info@bsi-qa.com (no backend needed) */
  $$("form[data-mailto]").forEach((f) =>
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = new FormData(f),
        body = [...d.entries()].map(([k, v]) => `${k}: ${v}`).join("\n");
      location.href = `mailto:${f.dataset.mailto}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(body)}`;
    }),
  );
})();
