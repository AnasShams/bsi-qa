/* Black Sands Industries - homepage-only behaviour (data builders, sticky technology cards) */
(function () {
  const $ = (s) => document.querySelector(s),
    $$ = (s) => [...document.querySelectorAll(s)];
  splitWords($("#h1"), 0.12, 0.15);
  const caps = [
    [
      "Our Engineering",
      "Integrated engineering solutions across O&G, EPC, Infrastructure, technology and industrial support operations - delivering complex projects on time and to specification.",
    ],
    [
      "Our Engineering",
      "Advanced manufacturing & maintenance workshop facilities delivering world class products and services with precision.",
    ],
    [
      "Our Approach",
      "From initial concept through commissioning and beyond complete lifecycle solutions backed by decades of excellence and commitment to safety and sustainability.",
    ],
    [
      "Our Difference",
      "Advanced engineering expertise enhanced by AI, digital transformation and strong commitment to technology advancements.",
    ],
    [
      "Our Global Reach",
      "Strategic presence across Qatar, Saudi Arabia, UAE, Oman, China and India, delivering world class solutions.",
    ],
  ];
  $("#caps").innerHTML = caps
    .map(
      (c, i) =>
        `<a href="/capabilities.html" class="card" style="--d:${i * 0.07}s"><div class="img" style="height:90px;background-position:${i * 22}% 50%"></div><h3>${c[0]}</h3><p>${c[1]}</p></a>`,
    )
    .join("");
  $("#logos").innerHTML = "WE ADVANCE THE INDUSTRIES THAT ADVANCE THE WORLD."
    .split(" ")
    .map((w) => `<span>${w}</span>`)
    .join("")
    .repeat(6);
  const pj = [
    "Oil & Gas",
    "EPC & Infra",
    "AI & Tech",
    "Renewable Energy",
    "Power & Utilities",
    "Mining & Metal",
    "Facilities Management",
    "Logistics & Industry Support",
  ];
  const pcs = pj
    .map(
      (p, i) =>
        `<a href="/capabilities.html" class="pc"><div class="img" style="background-position:${i * 13}% 50%"></div><div class="t"><h3>${p}</h3></div></a>`,
    )
    .join("");
  $("#pj").innerHTML = pcs + pcs;
  const st = [
    [
      "Oil & Gas Technology",
      "Specialized equipment and digital solutions for drilling, production, and well lifecycle management across onshore and offshore operations.",
    ],
    [
      "Manufacturing Technology",
      "Modern manufacturing capabilities combining precision machining, robotic automation, and rigorous quality systems for critical industrial equipment.",
    ],
    [
      "Digital Project Delivery",
      "Integrated digital platforms for engineering, procurement, construction management, and real-time project tracking across complex industrial projects.",
    ],
    [
      "AI & Machine learning",
      "Predictive maintenance systems, digital twins, and AI-powered analytics that optimize performance and prevent failures across industrial operations.",
    ],
  ];
  $("#steps").innerHTML = st
    .map(
      (s, i) =>
        `<div class="sc"><h3>${s[0]}</h3><p>${s[1]}</p><em>0${i + 1}</em></div>`,
    )
    .join("");
  $("#sl").innerHTML = st
    .map((s, i) => `<div><h3>0${i + 1} ${s[0]}</h3></div>`)
    .join("");
  $("#loc").innerHTML = `
    <div class="reach-map rv">
      <img
        src="assets/bsi-map.png"
        alt="Map highlighting Qatar, Saudi Arabia, the UAE, Oman, India, and China"
      />
    </div>
    <ul class="reach-countries">
      ${["QATAR", "KSA", "UAE", "CHINA", "OMAN", "INDIA"]
        .map(
          (country, index) =>
            `<li class="reach-country rv" style="--d:${index * 0.1}s">${country}</li>`,
        )
        .join("")}
    </ul>`;
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
    capTrack.style.transform = `translate3d(${-offset}px, 0, 0)`;
  }

  function measureCapabilityRail() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      capSection.style.height = "auto";
      capTrack.style.transform = "none";
      return;
    }
    capTravel = Math.max(0, capTrack.scrollWidth - capViewport.clientWidth);
    capSection.style.height = `${capSection.querySelector(".cap-pin").offsetHeight + capTravel}px`;
    updateCapabilityRail();
  }

  addEventListener("scroll", updateCapabilityRail, { passive: true });
  addEventListener("resize", measureCapabilityRail);
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
})();
