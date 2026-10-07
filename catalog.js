(() => {
  const catalogs = {
    services: [
      {
        title: "Engineering & EPC",
        summary: "Integrated engineering, procurement, construction, and commissioning support for complex industrial projects.",
        details: [
          "Front-end engineering, design coordination, and constructability reviews.",
          "Procurement planning, vendor coordination, and technical expediting.",
          "Civil, mechanical, electrical, and instrumentation installation support.",
          "Construction management, commissioning, and project handover.",
        ],
      },
      {
        title: "Industrial Maintenance",
        summary: "Workshop and field services focused on reliability, asset integrity, and reduced downtime.",
        details: [
          "Maintenance and overhaul of static and rotating equipment.",
          "Plant shutdown, turnaround, and preventative maintenance support.",
          "Component refurbishment, fabrication, and technical troubleshooting.",
          "Inspection, testing, and lifecycle maintenance planning.",
        ],
      },
      {
        title: "Manufacturing & Fabrication",
        summary: "Precision manufacturing and fabrication for critical industrial equipment and project requirements.",
        details: [
          "CNC machining, welding, fabrication, and precision assembly.",
          "Custom skids, structures, tanks, and equipment packages.",
          "Prototype development and production scale-up.",
          "Quality documentation, inspection, and material traceability.",
        ],
      },
      {
        title: "Automation & Digital Solutions",
        summary: "Applied digital systems that connect operational assets with monitoring, analytics, and control.",
        details: [
          "PLC, SCADA, and industrial control system integration.",
          "Industrial IoT, remote monitoring, and operational dashboards.",
          "Digital twins, asset data mapping, and systems integration.",
          "AI-enabled predictive maintenance and enterprise software deployment.",
        ],
      },
      {
        title: "Energy & Renewables",
        summary: "Engineering and delivery support for conventional energy and renewable power projects.",
        details: [
          "Solar, hybrid, and wind project engineering and EPC support.",
          "Power and utility system integration.",
          "Energy infrastructure construction and commissioning.",
          "Operational efficiency and emissions-reduction initiatives.",
        ],
      },
      {
        title: "Logistics & Industrial Support",
        summary: "Specialized transport, supply coordination, and field support for demanding industrial operations.",
        details: [
          "Heavy-haulage planning and onshore rig-move logistics.",
          "Trailer and transport fleet coordination.",
          "Regional product distribution and inventory planning.",
          "Remote-site technical support and mobilization services.",
        ],
      },
    ],
    products: [
      {
        title: "Oil & Gas Equipment",
        summary: "Equipment and components supporting upstream, midstream, and downstream operations.",
        details: [
          "Drilling and production equipment for onshore operations.",
          "Pressure-control equipment and high-pressure components.",
          "Critical spares and industrial consumables.",
          "Sourcing and supply support aligned with project specifications.",
        ],
      },
      {
        title: "Fabricated Systems & Skids",
        summary: "Custom-built process packages and fabricated assemblies for industrial applications.",
        details: [
          "Modular process skids and packaged equipment systems.",
          "Fabricated tanks, structural assemblies, and pipe supports.",
          "Custom systems built to project and international specifications.",
          "Inspection, testing, and documentation for delivery.",
        ],
      },
      {
        title: "Trailers & Heavy Transport",
        summary: "Heavy-duty transport equipment designed for industrial and infrastructure logistics.",
        details: [
          "Flatbed and lowbed trailers with configurable axle options.",
          "Industrial tankers and fluid-transport systems.",
          "Multi-axle trailers and SPMT-related transport solutions.",
          "Fabrication, assembly, and structural testing.",
        ],
      },
      {
        title: "Precision Components",
        summary: "Machined and refurbished components for equipment reliability and asset lifecycle support.",
        details: [
          "CNC-machined components and precision assemblies.",
          "Static and rotating equipment parts.",
          "Component refurbishment to applicable OEM requirements.",
          "Material identification and quality records.",
        ],
      },
      {
        title: "Automation & Digital Products",
        summary: "Software and connected systems that help operators monitor and improve industrial performance.",
        details: [
          "Industrial monitoring and asset-management systems.",
          "Predictive maintenance analytics and digital-twin solutions.",
          "Operational dashboards and data integration tools.",
          "Enterprise software and systems configured for client operations.",
        ],
      },
      {
        title: "Renewable Energy Systems",
        summary: "Equipment and integrated system support for solar, hybrid, and wind energy projects.",
        details: [
          "Solar power system components and balance-of-system packages.",
          "Hybrid power and energy-storage integration support.",
          "Wind project equipment coordination.",
          "Project-specific engineering and supply packages.",
        ],
      },
    ],
  };

  const grid = document.querySelector("[data-catalog]");
  const detailSections = document.querySelector("[data-detail-sections]");
  const slugify = (value) => value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  if (grid) {
    const catalogType = grid.dataset.catalog;
    const catalog = catalogs[catalogType];
    if (!catalog) return;
    const viewLabel = catalogType === "services" ? "View service details" : "View product details";

    catalog.forEach((item, index) => {
      const card = document.createElement("a");
      card.className = "catalog-card";
      card.href = `catalog-detail.html?type=${catalogType}&item=${slugify(item.title)}`;
      card.setAttribute("aria-label", item.title);

      const indexLabel = document.createElement("span");
      indexLabel.className = "catalog-index mono";
      indexLabel.textContent = String(index + 1).padStart(2, "0");

      const heading = document.createElement("h2");
      heading.textContent = item.title;
      const description = document.createElement("p");
      description.textContent = item.summary;
      const action = document.createElement("span");
      action.className = "catalog-action";
      action.textContent = viewLabel;
      card.append(indexLabel, heading, description, action);
      grid.append(card);
    });
  }

  if (detailSections) {
    const params = new URLSearchParams(location.search);
    const catalogType = params.get("type");
    const itemSlug = params.get("item");
    const catalog = catalogs[catalogType];
    const item = catalog?.find((entry) => slugify(entry.title) === itemSlug);
    const isService = catalogType === "services";
    const kicker = document.querySelector("[data-detail-kicker]");
    const heading = document.querySelector("[data-detail-title]");
    const summary = document.querySelector("[data-detail-summary]");
    const backLink = document.querySelector("[data-detail-back]");
    const sections = detailSections;
    const subcategoryTitles = isService
      ? ["Planning & Design", "Execution & Integration", "Quality & Lifecycle Support"]
      : ["Configuration & Specification", "Manufacturing & Supply", "Quality & Delivery"];

    if (!item) {
      kicker.textContent = "What We Do";
      heading.textContent = "Catalog item not found";
      summary.textContent = "Return to Services or Products to choose an item.";
      sections.hidden = true;
      return;
    }

    const catalogLabel = isService ? "Services" : "Products";
    backLink.href = `${catalogType}.html`;
    backLink.textContent = isService ? "Back to Services" : "Back to Products";
    kicker.textContent = catalogLabel;
    heading.textContent = item.title;
    summary.textContent = item.summary;
    document.title = `${item.title} | ${catalogLabel} | Black Saber Industries`;

    sections.replaceChildren(...subcategoryTitles.map((title, index) => {
      const section = document.createElement("section");
      section.className = `pg tech-section catalog-detail-section${index % 2 ? " catalog-detail-section--reverse" : ""}`;
      const wrap = document.createElement("div");
      wrap.className = "wrap container";
      const layout = document.createElement("div");
      layout.className = "catalog-detail-layout";
      const copy = document.createElement("div");
      copy.className = "catalog-detail-copy";
      const number = document.createElement("div");
      number.className = "mono rv";
      const sectionIndex = document.createElement("span");
      sectionIndex.textContent = String(index + 1).padStart(2, "0");
      const separator = document.createElement("span");
      separator.textContent = " / ";
      const sectionType = document.createElement("span");
      sectionType.textContent = catalogLabel;
      number.append(sectionIndex, separator, sectionType);
      const subheading = document.createElement("h3");
      subheading.className = "rv";
      subheading.textContent = title;
      const description = document.createElement("p");
      description.className = "lead rv";
      description.textContent = item.details[index];
      const bulletList = document.createElement("ul");
      bulletList.className = "catalog-detail-points bl";
      item.details.slice(0, 3).forEach((text) => {
        const point = document.createElement("li");
        point.className = "rv";
        point.textContent = text;
        bulletList.append(point);
      });
      const image = document.createElement("img");
      image.className = "catalog-detail-image";
      image.src = "/assets/horse-background.jpg";
      image.alt = "";
      image.loading = index === 0 ? "eager" : "lazy";
      image.style.objectPosition = `${25 + index * 25}% center`;
      copy.append(number, subheading, description, bulletList);
      layout.append(copy, image);
      wrap.append(layout);
      section.append(wrap);
      return section;
    }));
  }
})();
