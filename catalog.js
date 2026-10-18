(() => {
  const catalogs = {
    services: [
      {
        slug: "civil-infrastructure",
        title: "Civil & Infrastructure",
        description: "Comprehensive civil engineering and infrastructure solutions covering construction, structural works, transportation networks, and supporting infrastructure for industrial and commercial projects.",
        subcategories: [
          "Site Preparation & Earthworks",
          "Concrete & Structural Works",
          "Roads, Paving & Hardscape",
          "Drainage & Wet Utilities",
          "Buildings & Finishing Works",
          "Fencing & Perimeter Security"
        ],
      },
      {
        slug: "mep-electromechanical",
        title: "MEP & Electromechanical",
        description: "Integrated mechanical, electrical, and plumbing solutions for building systems, industrial facilities, installation, commissioning, and ongoing maintenance.",
        subcategories: [
          "HVAC Systems",
          "Plumbing & Drainage",
          "Fire Protection & Life Safety",
          "Mechanical & Process Piping",
          "Building Power & Lighting",
          "PEB & Steel Buildings",
          "Testing, Commissioning & Handover"
        ],
      },
      {
        slug: "electrical-instrumentation-power",
        title: "Electrical, Instrumentation & Power",
        description: "Electrical engineering, instrumentation, control systems, and power distribution services supporting safe, reliable, and efficient industrial operations.",
        subcategories: [
          "LV/MV Power Distribution",
          "Cabling & Terminations",
          "Substations & Grid Works",
          "Instrumentation & Control",
          "Control Systems — SCADA / DCS / PLC"
        ],
      },
      {
        slug: "oil-gas",
        title: "Oil & Gas",
        description: "Specialized oil and gas services supporting upstream, midstream, and downstream operations, including field support, equipment services, and operational requirements.",
        subcategories: [
          "Wellsite & Surface Facilities",
          "Pipelines",
          "Tanks & Storage",
          "Skids, Spools & Modular Fabrication",
          "Corrosion Protection",
          "Gas & Fuel Systems"
        ],
      },
      {
        slug: "plant-industrial-services",
        title: "Plant & Industrial Services",
        description: "Industrial plant support, maintenance, equipment servicing, and technical solutions designed to improve reliability, operational efficiency, and asset performance.",
        subcategories: [
          "Maintenance & O&M",
          "Shutdowns & Turnarounds",
          "Rotating & Static Equipment",
          "Fabrication, Welding & Machining",
          "Surface Treatment, Insulation & Access",
          "Asset Integrity & Inspection"
        ],
      },
      {
        slug: "energy-renewables",
        title: "Energy & Renewables",
        description: "Engineering and technical services for conventional energy and renewable power projects, supporting efficient energy production and sustainable infrastructure.",
        subcategories: [
          "Solar PV",
          "Storage, Hybrid & Backup Power",
          "Wind & Clean Energy",
          "Energy Efficiency"
        ],
      },
      {
        slug: "marine-coastal-works",
        title: "Marine & Coastal Works",
        description: "Marine engineering and coastal infrastructure services supporting port facilities, shoreline development, and marine construction requirements.",
        subcategories: [
          "Coastal Protection",
          "Jetties, Quays & Marine Structures",
          "Dredging, Reclamation & Outfalls",
          "Marine Maintenance"
        ],
      },
      {
        slug: "environmental-services",
        title: "Environmental Services",
        description: "Environmental management and technical services supporting responsible operations, environmental compliance, and sustainable industrial development.",
        subcategories: [
          "Waste Management",
          "Remediation & Groundwater",
          "Spill Response & Industrial Cleaning"
        ],
      },
      {
        slug: "ict-telecom-infrastructure",
        title: "ICT & Telecom Infrastructure",
        description: "Information and communications technology infrastructure, telecommunications systems, network connectivity, and supporting digital infrastructure solutions.",
        subcategories: [
          "OSP & FTTH",
          "Structured Cabling",
          "Network Infrastructure & Security",
          "Wireless & Backhaul",
          "Data Centre & Server Rooms",
          "ELV, Security & Communications",
          "IT Support Services"
        ],
      },
      {
        slug: "software-ai-digital",
        title: "Software, AI & Digital",
        description: "Software development, artificial intelligence, digital transformation, and intelligent technology solutions designed to improve business and industrial processes.",
        subcategories: [
          "Software & Digital Design",
          "AI & Data",
          "IoT, Automation & Smart Systems",
          "Cybersecurity & Compliance",
          "Cloud & Managed IT"
        ],
      },
      {
        slug: "logistics-heavy-transport",
        title: "Logistics & Heavy Transport",
        description: "Specialized logistics, heavy transportation, equipment movement, and supply coordination for demanding industrial and infrastructure operations.",
        subcategories: [
          "Heavy Haulage & Rig Moves",
          "Cranes & Lifting",
          "Equipment & Vehicle Rental",
          "Logistics, Freight & Warehousing",
          "Operators & Drivers Supply"
        ],
      },
      {
        slug: "facility-management",
        title: "Facility Management",
        description: "Integrated facility management services covering building operations, maintenance coordination, and the support of safe, efficient working environments.",
        subcategories: [
          "Hard FM",
          "Soft FM",
          "FM Management & Systems",
          "Manpower & Support Staff"
        ],
      },
      {
        slug: "camp-catering",
        title: "Camp & Catering",
        description: "Camp operations and catering support services designed to meet the accommodation, food service, and daily operational needs of industrial workforces.",
        subcategories: [
          "Catering",
          "Camp Management",
          "Camp Infrastructure"
        ],
      },
      {
        slug: "fit-out-interiors-landscape",
        title: "Fit-out, Interiors & Landscape",
        description: "Interior fit-out, space improvement, finishing, and landscaping services for functional, well-maintained commercial and industrial environments.",
        subcategories: [
          "Interior Fit-out",
          "Landscape & External Works"
        ],
      },
      {
        slug: "engineering-testing-project-services",
        title: "Engineering, Testing & Project Services",
        description: "Engineering consultancy, technical testing, inspection, project coordination, and related services supporting quality, compliance, and project delivery.",
        subcategories: [
          "Engineering & Design Support",
          "Survey & Geotechnical",
          "Materials Testing & QA/QC",
          "Project & Commercial Services"
        ],
      },
    ],
    products: [
      {
        slug: "oilfield-drilling-equipment",
        title: "Oilfield & Drilling Equipment",
        description: "Equipment and components supporting drilling operations, well servicing, and upstream oilfield activities across demanding onshore and offshore environments.",
        subcategories: [
          "Drilling & Workover Rigs",
          "Well Control & Pressure Control",
          "Wellhead & Completion Equipment",
          "Rig Components & Handling Tools",
          "Drill String, Tubulars & Accessories",
          "Pumping, Frac & Stimulation",
          "Oilfield Consumables & Tools"
        ],
      },
      {
        slug: "pipes-valves-fittings-flanges",
        title: "Pipes, Valves, Fittings & Flanges",
        description: "Industrial piping products, valves, fittings, and flanges used in fluid handling, pipeline networks, and process installations.",
        subcategories: [
          "Pipes & Tubes",
          "Valves",
          "Fittings, Flanges & Bolting",
          "Corrosion-Protection Materials"
        ],
      },
      {
        slug: "electrical-equipment-cables",
        title: "Electrical Equipment & Cables",
        description: "Electrical equipment, cables, and associated components for power distribution, industrial installations, and electrical infrastructure.",
        subcategories: [
          "Cables & Wires",
          "Switchgear & Distribution",
          "Transformers & Power Quality",
          "Lighting",
          "Wiring Accessories & Containment"
        ],
      },
      {
        slug: "instrumentation-automation",
        title: "Instrumentation & Automation",
        description: "Instrumentation devices, control equipment, and automation components supporting process monitoring, measurement, and industrial control systems.",
        subcategories: [
          "Field Instruments",
          "Control & Safety Systems",
          "Industrial Fire & Gas Detection",
          "Tubing, Fittings & Test Equipment"
        ],
      },
      {
        slug: "mechanical-rotating-equipment",
        title: "Mechanical & Rotating Equipment",
        description: "Mechanical equipment and rotating machinery supporting industrial processes, equipment performance, and operational reliability.",
        subcategories: [
          "Pumps",
          "Compressors & Air Systems",
          "Motors & Power Transmission",
          "Process & Static Equipment",
          "Lifting & Material Handling Equipment"
        ],
      },
      {
        slug: "hvac-refrigeration",
        title: "HVAC & Refrigeration",
        description: "Heating, ventilation, air-conditioning, and refrigeration equipment for temperature control, ventilation, and industrial and commercial facilities.",
        subcategories: [
          "Air-Conditioning Equipment",
          "Air Distribution & Ventilation",
          "Refrigeration, Controls & Insulation"
        ],
      },
      {
        slug: "fire-protection-life-safety",
        title: "Fire Protection & Life Safety",
        description: "Fire detection, fire suppression, and life-safety equipment designed to support personnel protection and facility safety requirements.",
        subcategories: [
          "Fire Suppression",
          "Detection, Alarm & Life Safety"
        ],
      },
      {
        slug: "it-networking-elv-hardware",
        title: "IT, Networking & ELV Hardware",
        description: "IT hardware, networking equipment, and extra-low-voltage systems supporting connectivity, communications, security, and integrated building infrastructure.",
        subcategories: [
          "Networking & Security Appliances",
          "Passive & Fibre",
          "Compute, Storage & End-User",
          "Security & ELV Devices"
        ],
      },
      {
        slug: "construction-building-materials",
        title: "Construction & Building Materials",
        description: "Construction materials and building supplies for structural works, building development, finishing, and infrastructure projects.",
        subcategories: [
          "Aggregates & Bulk Materials",
          "Cement, Concrete & Precast",
          "Steel & Metals",
          "Road & Paving Materials",
          "Finishing & Building Products",
          "Drainage & Utility Products"
        ],
      },
      {
        slug: "tools-mro-consumables",
        title: "Tools, MRO & Consumables",
        description: "Industrial tools, maintenance, repair and operations supplies, and consumables used to support routine maintenance and equipment servicing.",
        subcategories: [
          "Tools & Workshop Equipment",
          "Welding & Fabrication Consumables",
          "Fasteners & Fixings",
          "Lubricants, Filters & Fluids",
          "Rigging & Lifting Gear",
          "Industrial Spares & Hoses"
        ],
      },
      {
        slug: "ppe-safety-environmental-supplies",
        title: "PPE, Safety & Environmental Supplies",
        description: "Personal protective equipment, workplace safety products, and environmental supplies supporting safer industrial operations.",
        subcategories: [
          "Personal Protective Equipment",
          "Safety Equipment",
          "Environmental & Spill Supplies"
        ],
      },
      {
        slug: "heavy-equipment-vehicles",
        title: "Heavy Equipment & Vehicles",
        description: "Heavy machinery, industrial vehicles, and associated equipment supporting construction, material handling, transportation, and industrial operations.",
        subcategories: [
          "Construction & Earthmoving Equipment",
          "Trucks & Vehicles",
          "Equipment Parts & Supplies"
        ],
      },
      {
        slug: "power-generation-solar-storage",
        title: "Power Generation, Solar & Storage",
        description: "Power generation equipment, solar energy systems, and energy storage solutions supporting conventional and renewable power applications.",
        subcategories: [
          "Generation & Backup Power",
          "Solar & Storage"
        ],
      },
      {
        slug: "furniture-camp-kitchen-supplies",
        title: "Furniture, Camp & Kitchen Supplies",
        description: "Furniture, camp equipment, and kitchen supplies for accommodation facilities, workforce camps, and industrial support environments.",
        subcategories: [
          "Furniture & FF&E",
          "Modular Buildings",
          "Kitchen, Laundry & Appliances"
        ],
      },
      {
        slug: "cleaning-fm-consumables",
        title: "Cleaning & FM Consumables",
        description: "Cleaning materials, facility maintenance consumables, and everyday operational supplies for commercial and industrial facilities.",
        subcategories: [
          "Cleaning & Hygiene"
        ],
      },
      {
        slug: "industrial-chemicals-gases",
        title: "Industrial Chemicals & Gases",
        description: "Industrial chemicals, gases, and associated supplies supporting industrial processes and specialized operational requirements.",
        subcategories: [
          "Chemicals & Gases"
        ],
      },
      {
        slug: "marine-port-supplies",
        title: "Marine & Port Supplies",
        description: "Marine equipment, port supplies, and operational materials supporting vessel operations, port facilities, and marine-related activities.",
        subcategories: [
          "Marine & Port Supplies"
        ],
      },
    ],
  };

  const countLabel = (item) => `${item.subcategories.length} ${item.subcategories.length === 1 ? "subcategory" : "subcategories"}`;
  const grid = document.querySelector("[data-catalog]");
  const detailSections = document.querySelector("[data-detail-sections]");

  if (grid) {
    const catalogType = grid.dataset.catalog;
    const catalog = catalogs[catalogType];
    if (!catalog) return;
    const viewLabel = catalogType === "services" ? "View service details" : "View product details";

    catalog.forEach((item, index) => {
      const card = document.createElement("a");
      card.className = "catalog-card";
      card.href = `/${catalogType}/${item.slug}`;
      card.setAttribute("aria-label", item.title);

      const indexLabel = document.createElement("span");
      indexLabel.className = "catalog-index mono";
      indexLabel.textContent = String(index + 1).padStart(2, "0");

      const heading = document.createElement("h2");
      heading.textContent = item.title;
      const description = document.createElement("p");
      description.textContent = item.description;
      const count = document.createElement("p");
      count.className = "catalog-count";
      count.textContent = countLabel(item);
      const action = document.createElement("span");
      action.className = "catalog-action";
      action.textContent = viewLabel;
      card.append(indexLabel, heading, description, count, action);
      grid.append(card);
    });
  }

  if (detailSections) {
    const params = new URLSearchParams(location.search);
    const pathMatch = location.pathname.match(/^\/(services|products)\/([^/]+)\/?$/);
    const catalogType = pathMatch ? pathMatch[1] : params.get("type");
    const itemSlug = pathMatch ? decodeURIComponent(pathMatch[2]) : params.get("item");
    const catalog = catalogs[catalogType];
    const item = catalog?.find((entry) => entry.slug === itemSlug);
    const isService = catalogType === "services";
    const kicker = document.querySelector("[data-detail-kicker]");
    const heading = document.querySelector("[data-detail-title]");
    const summary = document.querySelector("[data-detail-summary]");
    const backLink = document.querySelector("[data-detail-back]");
    const sections = detailSections;
    const heroBg = document.querySelector(".catalog-detail-hero .bg");
    if (heroBg) {
      heroBg.dataset.photo = isService ? "/assets/services-hero.png" : "/assets/products-hero.png";
      heroBg.dataset.photoMobile = isService ? "/assets/services-hero-mobile.jpg" : "/assets/products-hero-mobile.jpg";
    }
    if (!item) {
      kicker.textContent = "What We Do";
      heading.textContent = "Catalog item not found";
      summary.textContent = "Return to Services or Products to choose an item.";
      sections.hidden = true;
      return;
    }

    const catalogLabel = isService ? "Services" : "Products";
    backLink.href = `/${catalogType}`;
    backLink.textContent = isService ? "Back to Services" : "Back to Products";
    kicker.textContent = catalogLabel;
    heading.textContent = item.title;
    summary.textContent = item.description;
    summary.parentNode.querySelector("[data-detail-count]")?.remove();
    const detailCount = document.createElement("p");
    detailCount.dataset.detailCount = "";
    detailCount.className = "catalog-detail-count";
    detailCount.textContent = `${countLabel(item)} under ${item.title}.`;
    summary.after(detailCount);
    document.title = `${item.title} | ${catalogLabel} | Black Saber Industries`;

    const placeholderText = [
      "Placeholder description. Detailed content to be added.",
      "Placeholder point one. Content to be added.",
      "Placeholder point two. Content to be added.",
      "Placeholder point three. Content to be added.",
    ];
    sections.replaceChildren(...item.subcategories.map((title, index) => {
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
      number.textContent = `${String(index + 1).padStart(2, "0")} / ${catalogLabel}`;
      const subheading = document.createElement("h3");
      subheading.className = "rv";
      subheading.textContent = title;
      const description = document.createElement("p");
      description.className = "lead rv";
      description.textContent = placeholderText[0];
      const bulletList = document.createElement("ul");
      bulletList.className = "catalog-detail-points bl";
      placeholderText.slice(1).forEach((text) => {
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
      image.style.objectPosition = `${25 + (index % 3) * 25}% center`;
      copy.append(number, subheading, description, bulletList);
      layout.append(copy, image);
      wrap.append(layout);
      section.append(wrap);
      return section;
    }));
  }
})();
