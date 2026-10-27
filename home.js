/* Black Sands Industries - homepage-only behaviour (data builders, sticky technology cards) */
(function () {
  const $ = (s) => document.querySelector(s),
    $$ = (s) => [...document.querySelectorAll(s)];

    const trustedCards = $$(".trusted-card");
  const mobileDetailTitle = $("#trusted-mobile-title");
  const mobileDetailDescription = $("#trusted-mobile-description");
  const trustedGrid = $(".trusted-grid");
  const mobileQuery = matchMedia("(max-width: 575.98px)");
  const hoverQuery = matchMedia("(hover: hover) and (pointer: fine)");
  // laptop/desktop with a real mouse = hover; phones and tablets = click/tap
  const clickMode = () => mobileQuery.matches || !hoverQuery.matches;

  trustedCards.forEach((item) => {
    const letter = item.querySelector(".trusted-letter");
    letter.dataset.en = letter.textContent.trim();
    letter.dataset.letter = letter.textContent.trim();
    letter.dataset.outlineClass = letter.classList.contains("trusted-letter-outline-maroon")
      ? "trusted-letter-outline-maroon"
      : "trusted-letter-outline-black";
  });

  const clearTrustedCards = () => {
    trustedCards.forEach((item) => {
      item.classList.remove("is-active");
      const itemLetter = item.querySelector(".trusted-letter");
      itemLetter.classList.remove(
        "trusted-letter-mobile-active",
        "trusted-letter-outline-black",
        "trusted-letter-outline-maroon",
      );
      itemLetter.classList.add(itemLetter.dataset.outlineClass);
    });
  };

  const selectTrustedCard = (card, scrollToCard = false) => {
    clearTrustedCards();
    card.classList.add("is-active");
    if (mobileQuery.matches) {
      const cardLetter = card.querySelector(".trusted-letter");
      cardLetter.classList.remove("trusted-letter-outline-black", "trusted-letter-outline-maroon");
      cardLetter.classList.add("trusted-letter-mobile-active");
      mobileDetailTitle.textContent = card.querySelector("h3").textContent;
      mobileDetailDescription.textContent = card.querySelector("p").textContent;
      if (scrollToCard) card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  trustedCards.forEach((card) => {
    card.addEventListener("click", () => {
      if (!clickMode()) return; // laptop uses hover only
      if (mobileQuery.matches) {
        selectTrustedCard(card, true); // phone: always one selected
      } else if (card.classList.contains("is-active")) {
        clearTrustedCards(); // tablet: tap again to close
      } else {
        selectTrustedCard(card);
      }
    });
  });

  clearTrustedCards();
  const syncTrustedMode = () => {
    if (mobileQuery.matches) selectTrustedCard(trustedCards[0]);
    else clearTrustedCards();
  };
  mobileQuery.addEventListener("change", syncTrustedMode);
  hoverQuery.addEventListener("change", syncTrustedMode);

  if (trustedGrid && trustedCards.length) {
    if (mobileQuery.matches) selectTrustedCard(trustedCards[0]);
    let mobileScrollFrame;
    trustedGrid.addEventListener("scroll", () => {
      cancelAnimationFrame(mobileScrollFrame);
      mobileScrollFrame = requestAnimationFrame(() => {
        if (!mobileQuery.matches) return;
        const gridRect = trustedGrid.getBoundingClientRect();
        const gridCenter = gridRect.left + gridRect.width / 2;
        let closestCard = trustedCards[0];
        let closestDistance = Infinity;
        trustedCards.forEach((card) => {
          const cardRect = card.getBoundingClientRect();
          const distance = Math.abs(cardRect.left + cardRect.width / 2 - gridCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestCard = card;
          }
        });
        selectTrustedCard(closestCard);
      });
    }, { passive: true });
  }
  document.addEventListener("click", (event) => {
    if (mobileQuery.matches) return; // phone keeps one letter selected
    if (event.target.closest(".trusted-card")) return;
    clearTrustedCards();
  });

  const applyTrustedLetters = () => {
    const arabic = document.documentElement.dir === "rtl" || document.documentElement.lang === "ar";
    trustedCards.forEach((card) => {
      const letter = card.querySelector(".trusted-letter");
      const next = arabic && letter.dataset.ar ? letter.dataset.ar : letter.dataset.en;
      letter.textContent = next;
      letter.dataset.letter = next; // phone view reads this for the filled letter
      card.setAttribute("aria-label", `${next} - ${card.querySelector("h3").textContent}`);
    });
  };
  applyTrustedLetters();

  addEventListener("bsi:languagechange", () => {
    applyTrustedLetters();
    if (!mobileQuery.matches) return;
    const active = trustedCards.find((c) => c.classList.contains("is-active")) || trustedCards[0];
    selectTrustedCard(active);
  });

  splitWords($("#h1"), 0.12, 0.15);
  const caps = [
    [
      "Our Engineering",
      "Integrated engineering solutions across O&G, EPC, Infrastructure, technology and industrial support operations - delivering complex projects on time and to specification.",
      "/assets/our-engineering.jpg",
    ],
    [
      "Our Precision",
      "Advanced manufacturing & maintenance workshop facilities delivering world class products and services with precision.",
      "/assets/our-precision.jpg",
    ],
    [
      "Our Approach",
      "From initial concept through commissioning and beyond complete lifecycle solutions backed by decades of excellence and commitment to safety and sustainability.",
      "/assets/our-approach.jpg",
    ],
    [
      "Our Difference",
      "Advanced engineering expertise enhanced by AI, digital transformation and strong commitment to technology advancements.",
      "/assets/our-difference.jpg",
    ],
    [
      "Our Global Reach",
      "Strategic presence across Qatar, Saudi Arabia, UAE, Oman, China and India, delivering world class solutions.",
      "/assets/our-reach.jpg",
    ],
  ];
  $("#caps").innerHTML = caps
    .map(
      (c, i) =>
        `<div class="card" style="--d:${i * 0.07}s"><div class="img" ${c[2] ? `data-photo="${c[2]}"` : ""} style="height:90px;background-position:${i * 22}% 50%"></div><h3>${c[0]}</h3><p>${c[1]}</p></div>`,
    )
    .join("");
  $("#logos").innerHTML = "WE ADVANCE THE INDUSTRIES THAT ADVANCE THE WORLD."
    .split(" ")
    .map((w) => `<span>${w}</span>`)
    .join("")
    .repeat(6);
  const pj = [
    ["Oil & Gas", "/assets/oil-gas.jpg"],
    ["EPC", "/assets/epc.jpg"],
    ["AI & Tech", "/assets/ai-tech.jpg"],
    ["Renewable Energy", "/assets/renewable-energy.jpg"],
    ["Power & Utilities", "/assets/power-utilities.jpg"],
    ["Mining & Metal", "/assets/mining-metal.jpg"],
    ["Facilities Management", "/assets/facilities-management.jpg"],
    ["Logistics & Industry Support", "/assets/logistic-industry-support.jpg"],
  ];
  const pcs = pj
    .map(
      (p, i) =>
        `<div class="pc"><div class="img" data-photo="${p[1]}" style="background-position:${i * 13}% 50%"></div><div class="t"><h3>${p[0]}</h3></div></div>`,
    )
    .join("");
  $("#pj").innerHTML = pcs + pcs;
  const st = [
    [
      "Oil & Gas Technology",
      "Specialized equipment and digital solutions for drilling, production, and well lifecycle management across onshore and offshore operations.",
      "/assets/oil-gas-technology.png",
    ],
    [
      "Manufacturing Technology",
      "Modern manufacturing capabilities combining precision machining, robotic automation, and rigorous quality systems for critical industrial equipment.",
      "/assets/manufacturing-technology.png",
    ],
    [
      "Digital Project Delivery",
      "Integrated digital platforms for engineering, procurement, construction management, and real-time project tracking across complex industrial projects.",
      "/assets/digital-project-delivery.jpg",
    ],
    [
      "AI & Machine learning",
      "Predictive maintenance systems, digital twins, and AI-powered analytics that optimize performance and prevent failures across industrial operations.",
      "/assets/ai-machine-learning.png",
    ],
  ];
  $("#steps").innerHTML = st
    .map(
      (s, i) =>
        `<div class="sc" data-photo="${s[2]}"><h3>${s[0]}</h3><p>${s[1]}</p><em>0${i + 1}</em></div>`,
    )
    .join("");
  $("#sl").innerHTML = st
    .map((s, i) => `<div><h3>0${i + 1} ${s[0]}</h3></div>`)
    .join("");
  $("#loc").innerHTML = `<iframe class="reach-map-frame rv" src="reach-map.html" title="Interactive map of BSI headquarters and locations across seven countries" scrolling="no"></iframe>`;
  observeReveal();
  const capSection = $("#cap");
  const capViewport = $(".cap-viewport");
  const capTrack = $("#caps");
  let capTravel = 0;

  function updateCapabilityRail() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      capSection.style.height = "auto";
      capTrack.style.transform = "none";
      return;
    }
    const offset = Math.min(
      capTravel,
      Math.max(0, -capSection.getBoundingClientRect().top),
    );
    const direction = document.documentElement.dir === "rtl" ? 1 : -1;
    capTrack.style.transform = `translate3d(${direction * offset}px, 0, 0)`;
  }

  function measureCapabilityRail() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    capSection.style.height = "auto";
    capTrack.style.transform = "none";
    return;
    }
    const items = [...capTrack.children];
    if (!items.length) return;
    let left = Infinity, right = -Infinity;
    items.forEach((el) => {
    left = Math.min(left, el.offsetLeft);
    right = Math.max(right, el.offsetLeft + el.offsetWidth);
    });
    capTravel = Math.max(0, Math.ceil(right - left - capViewport.clientWidth));
    capSection.style.height = `${capSection.querySelector(".cap-pin").offsetHeight + capTravel}px`;
    updateCapabilityRail();
    }
    addEventListener("scroll", updateCapabilityRail, { passive: true });
    let lastCapWidth = innerWidth;
    addEventListener("resize", () => {
    if (innerWidth === lastCapWidth) return;
    lastCapWidth = innerWidth;
    measureCapabilityRail();
    });
    measureCapabilityRail();

  const cards = $$(".sc"),
    items = $$("#sl div");
  function onScroll() {
    let active = 0;
    cards.forEach((c, i) => {
      const r = c.getBoundingClientRect(),
        next = cards[i + 1];
      if (next) {
        const nr = next.getBoundingClientRect(),
          p = Math.max(
            0,
            Math.min(1, 1 - (nr.top - r.top - 20) / (innerHeight * 0.5)),
          );
        c.style.transform = `scale(${1 - p * 0.06})`;
        c.style.filter = `brightness(${1 - p * 0.08})`;
      }
      if (r.top < innerHeight * 0.5) active = i;
    });
    items.forEach((it, i) => it.classList.toggle("on", i <= active));
  }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const refreshLocalizedLayout = () => {
    requestAnimationFrame(() => {
      measureCapabilityRail();
      onScroll();
    });
  };
  addEventListener("bsi:languagechange", refreshLocalizedLayout);
  document.fonts?.ready.then(refreshLocalizedLayout);
})();
