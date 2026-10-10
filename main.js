/* Black Saber Industries - shared behaviour: nav + footer injection, mobile menu, cursor, scroll animations, counters, forms */
(function () {
  const $ = (s) => document.querySelector(s),
    $$ = (s) => [...document.querySelectorAll(s)];
  const placeholderPhotoPath = "/assets/horse-background.jpg";
  const photoSurfaceSelector = ".bg:not(video), .img, .partner-image, .leader-profile-photo, .app, .sc, .ind a";
  const addPhotoPlaceholders = (root = document) => {
    const surfaces = [];
    if (root instanceof Element && root.matches(photoSurfaceSelector)) surfaces.push(root);
    if (root.querySelectorAll) surfaces.push(...root.querySelectorAll(photoSurfaceSelector));
    surfaces.forEach((surface) => {
      if ([...surface.children].some((child) => child.classList.contains("photo-placeholder"))) return;
      const image = document.createElement("img");
      image.className = "photo-placeholder";
      image.src = surface.dataset.photo || placeholderPhotoPath;
      image.alt = "";
      image.setAttribute("aria-hidden", "true");
      image.draggable = false;
      image.loading = surface.matches(".bg") ? "eager" : "lazy";
      if (!surface.matches(".leader-profile-photo")) {
        image.style.objectPosition = surface.dataset.photoPosition ||
          (surface.dataset.photo ? "center center" : surface.style.backgroundPosition || "center center");
      }
      surface.prepend(image);
    });
  };
  addPhotoPlaceholders();
  const photoSurfaceObserver = new MutationObserver((records) => {
    records.forEach((record) => record.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) addPhotoPlaceholders(node);
    }));
  });
  photoSurfaceObserver.observe(document.body, { childList: true, subtree: true });
  if (!document.querySelector('link[rel~="icon"]')) {
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/png";
    favicon.href = "/assets/bsi-logo.png";
    document.head.append(favicon);
  }
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
    let animationFinished = false;
    let minimumElapsed = false;

    const MIN_LOADER_MS = 5000;

    loader.id = "site-loader";
    loader.setAttribute("role", "status");
    loader.setAttribute("aria-label", "Loading Black Saber Industries");
    frame.title = "Black Saber Industries logo animation";
    frame.setAttribute("aria-hidden", "true");
    loader.append(frame);

    const handleAnimationMessage = (event) => {
      if (
        event.source !== frame.contentWindow ||
        event.origin !== location.origin ||
        event.data !== "bsi-preloader-complete"
      ) {
        return;
      }
      animationFinished = true;
      finishPreloader();
    };

    const finishPreloader = () => {
      if (finished || !animationFinished || !minimumElapsed) return;
      finished = true;
      window.removeEventListener("message", handleAnimationMessage);
      loader.classList.add("is-exiting");
      window.setTimeout(() => {
        loader.remove();
        document.body.classList.remove("site-loading");
        document.body.classList.add("site-ready");
        scrollToTop();
      }, 450);
    };

    window.addEventListener("message", handleAnimationMessage);
    window.setTimeout(() => {
      minimumElapsed = true;
      finishPreloader();
    }, MIN_LOADER_MS);

    document.body.prepend(loader);
    frame.src = "pre-loader-animation.html?embed=1";
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
<div class="nr"><button class="language-toggle" id="language-toggle" type="button" aria-label="Switch to Arabic">العربية</button><a class="btn d" href="/connect.html">Connect</a><button class="burger" id="bg" aria-label="Menu" aria-expanded="false"><i></i><i></i><i></i></button></div>
<div id="mm">${L("/", "Home")}<div class="g${whoIsActive ? " act" : ""}">Who We Are</div>${who.map((x) => `<a class="s${path === x[0] ? " act" : ""}" href="${x[0]}">${x[1]}</a>`).join("")}<div class="g${whatIsActive ? " act" : ""}">What We Do</div>${what.map((x) => `<a class="s${path === x[0] ? " act" : ""}" href="${x[0]}">${x[1]}</a>`).join("")}${L("/technologies.html", "Technologies")}${L("/our-facility.html", "Our Facility")}${L("/our-people.html", "Our People")}${L("/careers.html", "Careers")}</div>
</div></nav>
`;
  const footHTML = `<footer><div class="wrap">
<div class="footer-top"><div class="footer-links"><div class="cols">
<div><h3>Helpful Links</h3>Black Saber Industries<br>Advanced Industrial Solutions</div>
<div><h3>Who We Are</h3>${who.map((x) => `<a href="${x[0]}">${x[1]}</a>`).join("")}</div>
<div><h3>What We Do</h3>${what.map((x) => `<a href="${x[0]}">${x[1]}</a>`).join("")}</div>
<div><h3>More</h3><a href="/technologies.html">Technologies</a><a href="/our-facility.html">Our Facility</a><a href="/our-people.html">Our People</a><a href="/careers.html">Careers</a><a href="/connect.html">Contact Us</a></div></div></div>
<section class="footer-cta" id="cta"><div class="mono">Connect</div><h2 data-split-view>Building a Sustainable Future Through Engineering Excellence</h2><p>BSI leads the transformation of industries by integrating renewable energy, automation, and innovation into every engineered solution.</p><div class="actions"><a class="btn p" href="/connect.html">CONTACT US</a></div></section></div>
<div class="footer-bottom"><span>© 2026 Black Saber Industries All Rights Reserved</span><span><a href="/cookies.html">Cookies</a> · <a href="/terms.html">Terms of Use</a> · <a href="/privacy.html">Privacy</a></span></div></div></footer>`;
  $("#site-nav").innerHTML = navHTML;
  $("#site-footer").innerHTML = footHTML;

  const languageToggle = $("#language-toggle");
  const translationsScript = document.createElement("script");
  translationsScript.src = "/translations.js";
  translationsScript.onload = () => {
    const translations = window.BSI_AR_TRANSLATIONS || {};
    const originalText = new WeakMap();
    const originalAttributes = new WeakMap();
    const languageKey = "bsi-language";
    const normalizeText = (text) => text.replace(/\s+/g, " ").trim();
    const formatNumerals = (text, language) => language === "ar"
      ? text.replace(/[0-9]/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)])
      : text;

    const translateTextNode = (node, language) => {
      const element = node.parentElement;
        if (!element || element.closest("script, style, textarea, input, select, option, iframe, .language-toggle, .typewriter-title")) return;
      if (!originalText.has(node)) originalText.set(node, node.data);
      const original = originalText.get(node);
      const leading = original.match(/^\s*/)?.[0] || "";
      const trailing = original.length === leading.length ? "" : original.match(/\s*$/)?.[0] || "";
      const key = normalizeText(original);
      const translated = language === "ar" && translations[key]
        ? translations[key]
        : normalizeText(original);
      const nextText = `${leading}${formatNumerals(translated, language)}${trailing}`;
      if (node.data !== nextText) node.data = nextText;
    };

    const translateAttributes = (root, language) => {
      const elements = [];
      if (root.nodeType === Node.ELEMENT_NODE) elements.push(root);
      if (root.querySelectorAll) elements.push(...root.querySelectorAll("[aria-label], [title], [placeholder]"));
      elements.forEach((element) => {
        if (element.matches(".language-toggle")) return;
        const originals = originalAttributes.get(element) || {};
        ["aria-label", "title", "placeholder"].forEach((attribute) => {
          if (!element.hasAttribute(attribute)) return;
          if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
          const original = originals[attribute];
          const key = normalizeText(original);
          const value = language === "ar" ? translations[key] || original : original;
          element.setAttribute(attribute, formatNumerals(value, language));
        });
        originalAttributes.set(element, originals);
      });
    };

    const syncEmbeddedLanguage = (frame) => {
      if (frame.dataset.languageBridge !== "ready") {
        frame.addEventListener("load", () => syncEmbeddedLanguage(frame));
        frame.dataset.languageBridge = "ready";
        if (mapFrameResizeObserver) mapFrameResizeObserver.observe(frame);
      }
      frame.contentWindow?.postMessage(
        { type: "bsi-language", language: document.documentElement.lang },
        location.origin,
      );
    };

    const mapFrameResizeObserver = "ResizeObserver" in window
      ? new ResizeObserver((entries) => {
          entries.forEach(({ target }) => {
            target.contentWindow?.postMessage(
              { type: "bsi-map-size-request" },
              location.origin,
            );
          });
        })
      : null;

    window.addEventListener("message", (event) => {
      if (
        event.origin !== location.origin ||
        event.data?.type !== "bsi-map-size" ||
        !Number.isFinite(event.data.height)
      ) return;
      const frame = [...document.querySelectorAll("iframe.reach-map-frame")].find(
        (candidate) => candidate.contentWindow === event.source,
      );
      if (!frame) return;
      frame.style.height = `${Math.max(360, Math.min(2400, Math.ceil(event.data.height)))}px`;
    });

    const requestEmbeddedMapSizes = () => {
      document.querySelectorAll("iframe.reach-map-frame").forEach((frame) => {
        frame.contentWindow?.postMessage({ type: "bsi-map-size-request" }, location.origin);
      });
    };
    window.addEventListener("resize", requestEmbeddedMapSizes, { passive: true });
    window.visualViewport?.addEventListener("resize", requestEmbeddedMapSizes, { passive: true });

    const applyLanguage = (language) => {
      const previousScrollY = window.scrollY;
      const languageChanged = document.documentElement.lang !== language;
      document.documentElement.lang = language;
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.querySelectorAll(".typewriter-title").forEach((title) => {
        if (!title.dataset.i18nOriginal) title.dataset.i18nOriginal = normalizeText(title.textContent);
      });
      document.querySelectorAll("[data-split], [data-split-view], #h1").forEach((element) => {
        if (window.splitWords) window.splitWords(element, 0.1, 0.15);
      });
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) translateTextNode(node, language);
      translateAttributes(document.body, language);
      document.querySelectorAll("iframe.reach-map-frame").forEach(syncEmbeddedLanguage);
      const titleNode = document.querySelector("title")?.firstChild;
      if (titleNode) translateTextNode(titleNode, language);
      languageToggle.textContent = language === "ar" ? "EN" : "AR";
      languageToggle.setAttribute("aria-label", language === "ar" ? "Switch to English" : "Switch to Arabic");
      languageToggle.setAttribute("aria-pressed", String(language === "ar"));
      try {
        localStorage.setItem(languageKey, language);
      } catch {}
      window.dispatchEvent(new CustomEvent("bsi:languagechange", { detail: { language, languageChanged } }));
      requestAnimationFrame(() => requestAnimationFrame(() => {
        const previousBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo(0, previousScrollY);
        document.documentElement.style.scrollBehavior = previousBehavior;
      }));
    };

    const observer = new MutationObserver((records) => {
      const language = document.documentElement.lang;
      records.forEach((record) => {
        if (record.type === "characterData") {
          translateTextNode(record.target, language);
          return;
        }
        record.addedNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) translateTextNode(node, language);
        else if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.matches("iframe.reach-map-frame")) syncEmbeddedLanguage(node);
          node.querySelectorAll("iframe.reach-map-frame").forEach(syncEmbeddedLanguage);
          const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
          let textNode;
          while ((textNode = walker.nextNode())) translateTextNode(textNode, language);
          translateAttributes(node, language);
        }
        });
      });
    });
    const observeTranslations = { childList: true, subtree: true, characterData: true };
    observer.observe(document.body, observeTranslations);
    observer.observe(document.head, observeTranslations);
    languageToggle.addEventListener("click", () => {
      applyLanguage(document.documentElement.lang === "ar" ? "en" : "ar");
    });
    let initialLanguage = "en";
    try {
      initialLanguage = localStorage.getItem(languageKey) === "ar" ? "ar" : "en";
    } catch {}
    applyLanguage(initialLanguage);
  };
  document.head.append(translationsScript);

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

  const typewriterTimers = new WeakMap();
  const startedTypewriterTitles = new WeakSet();
  const renderTypewriterTitle = (title, animate = true) => {
    const previousTimer = typewriterTimers.get(title);
    if (previousTimer) clearTimeout(previousTimer);
    const original = title.dataset.i18nOriginal || title.textContent.trim();
    title.dataset.i18nOriginal = original;
    const translated = document.documentElement.lang === "ar"
      ? window.BSI_AR_TRANSLATIONS?.[original] || original
      : original;
    const text = document.documentElement.lang === "ar"
      ? translated.replace(/[0-9]/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)])
      : translated;
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
    startedTypewriterTitles.add(title);

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      typedText.data = text;
      return;
    }
    if (!animate) {
      typedText.data = text;
      return;
    }

    let character = 0;
    const typeNextCharacter = () => {
      character += 1;
      typedText.data = text.slice(0, character);
      if (character < text.length) {
        typewriterTimers.set(title, window.setTimeout(typeNextCharacter, 35));
      }
    };
    typeNextCharacter();
  };
  window.addEventListener("bsi:languagechange", (event) => {
    if (!event.detail?.languageChanged) return;
    document.querySelectorAll(".typewriter-title").forEach((title) => {
      renderTypewriterTitle(title, false);
      typewriterObserver.unobserve(title);
    });
  });

  const typewriterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const title = entry.target;
        if (!title.dataset.i18nOriginal) title.dataset.i18nOriginal = title.textContent.trim();
        renderTypewriterTitle(title);
        observer.unobserve(title);
      });
      const observeTranslations = { childList: true, subtree: true };
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
    const original = el.dataset.i18nOriginal || el.textContent.trim();
    el.dataset.i18nOriginal = original;
    const text = document.documentElement.lang === "ar"
      ? window.BSI_AR_TRANSLATIONS?.[original] || original
      : original;
    const localizedText = document.documentElement.lang === "ar"
      ? text.replace(/[0-9]/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)])
      : text;
    el.innerHTML = localizedText
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

  const revealIfVisible = (el) => {
    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight * 1.15 && rect.bottom > -80;
    if (alreadyVisible) el.classList.add("in");
  };

  /* scroll reveal: restore the original fade-ins while loading the globe eagerly */
  window.observeReveal = function (root) {
    (root || document).querySelectorAll(".rv").forEach((el) => {
      if (el.matches(".reach-map-frame")) {
        const src = el.dataset.src || el.getAttribute("src") || "reach-map.html";
        el.dataset.src = src;
        if (!el.getAttribute("src")) el.src = src;
        const isInView = el.getBoundingClientRect().top < window.innerHeight + 220;
        if (isInView) el.classList.add("in");
      } else {
        revealIfVisible(el);
      }
      if (!el.classList.contains("in")) io.observe(el);
    });
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
  document.querySelectorAll(".reach-map-frame").forEach((frame) => {
    const src = frame.getAttribute("src") || "reach-map.html";
    frame.dataset.src = src;
    frame.src = src;
    frame.addEventListener(
      "load",
      () => {
        const rect = frame.getBoundingClientRect();
        if (rect.top < window.innerHeight + 200) frame.classList.add("in");
      },
      { once: true },
    );
  });
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
          const countText =
            (b.dataset.p || "") + v.toFixed(f) + (b.dataset.s || "");
          b.textContent = document.documentElement.lang === "ar"
            ? countText.replace(/[0-9]/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)])
            : countText;
          k < 1 && requestAnimationFrame(tick);
        })(t0);
      }),
    { threshold: 0.6 },
  );
  $$("[data-n]").forEach((b) => co.observe(b));

  /* cursor */
  const cur = $("#cur");
  const nativeCursorTargets =
    'a[href],button:not(:disabled),[role="button"],input:not(:disabled),select:not(:disabled),textarea:not(:disabled),summary,iframe.reach-map-frame';
  addEventListener("pointermove", (e) => {
    cur.style.left = e.clientX + "px";
    cur.style.top = e.clientY + "px";
  });
  document.addEventListener("pointerover", (e) => {
    const target = e.target instanceof Element ? e.target : null;
    const useNativeCursor = !!target?.closest(nativeCursorTargets);
    document.body.classList.toggle("native-cursor", useNativeCursor);
    cur.classList.toggle("big", useNativeCursor);
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
      location.href = `mailto:${f.dataset.mailto}?subject=${encodeURIComponent("Enquiry")}&body=${encodeURIComponent(body)}`;
    }),
  );
})();
