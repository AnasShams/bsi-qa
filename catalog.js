(() => {
  const catalogs = {
    "services": [
      {
        "slug": "civil-infrastructure",
        "heroImage": "/assets/civil-service-hero.png",
        "title": "Civil & Infrastructure",
        "description": "From the first cut on a greenfield site to the finished building, we deliver the civil works that every project stands on: earthworks, concrete, roads, utilities and perimeter security, all built to client specification and applicable codes.",
        "subcategories": [
          {
            "name": "Site Preparation & Earthworks",
            "image": "/assets/civil-site-preparation-service.png",
            "points": [
              "Site clearance, grubbing and debris removal, demolition of structures, slabs and foundations, bulk excavation in soil and rock, rock breaking and hydraulic hammering.",
              "Trench excavation for utilities and pipelines, cut and fill, grading and levelling, engineered fill, backfill and compaction, soft-ground treatment.",
              "Shoring and excavation support, spoil disposal to approved dumps, temporary access roads, laydown and hardstanding, wadi and flood-protection earthworks."
            ]
          },
          {
            "name": "Concrete & Structural Works",
            "image": "/assets/civil-concrete-service.png",
            "points": [
              "Blinding and plain cement concrete (PCC), RC foundations — isolated, strip and raft, equipment foundations and plinths, columns, beams.",
              "Walls and suspended slabs, slab-on-grade and industrial floors, formwork and falsework, rebar cutting, bending and fixing.",
              "Precast element installation, RC retaining and boundary walls, grouting and non-shrink bedding, concrete repair and rehabilitation, piling — bored and driven (specialist)."
            ]
          },
          {
            "name": "Roads, Paving & Hardscape",
            "image": "/assets/civil-roads-service.png",
            "points": [
              "Subgrade preparation, sub-base and base course, asphalt base and wearing courses, prime coat and tack coat, asphalt milling, patching and overlay.",
              "Rigid (concrete) pavement, kerbs, channels and road edging, road marking and road studs, traffic signs, guardrails and barriers.",
              "Interlocking paving — plazas, parking and walkways, car parks and hardstanding areas, speed humps and traffic-calming works, access, rig and haul road construction and maintenance."
            ]
          },
          {
            "name": "Drainage & Wet Utilities",
            "image": "/assets/civil-drainage-service.png",
            "points": [
              "Storm-water drainage networks, box and pipe culverts, sewer networks and manholes, potable water networks and connections.",
              "Lined channels and open drains, septic tanks, soakaways and holding tanks, RC water tanks and reservoirs.",
              "Pump-station civil works, oily-water and process drainage (plant), TSE and irrigation mains."
            ]
          },
          {
            "name": "Buildings & Finishing Works",
            "image": "/assets/civil-buildings-service.png",
            "points": [
              "Blockwork and masonry, plastering and rendering, floor and wall tiling, painting — internal and external, gypsum ceilings and partitions.",
              "Doors, windows and ironmongery installation, roof waterproofing and insulation, below-grade waterproofing.",
              "Protective coatings for concrete, epoxy and industrial flooring, joint sealants and expansion joints, small buildings and shelters."
            ]
          },
          {
            "name": "Fencing & Perimeter Security",
            "image": "/assets/civil-fencing-service.png",
            "points": [
              "Chain-link and welded-mesh fencing, security fencing with barbed/razor wire, anti-climb and high-security mesh fencing.",
              "Precast and block boundary walls, gates — manual and motorised, turnstiles and pedestrian gates.",
              "Vehicle barriers and bollards, crash-rated barriers (specialist)."
            ]
          }
        ]
      },
      {
        "slug": "mep-electromechanical",
        "heroImage": "/assets/mep-service-hero.png",
        "title": "MEP & Electromechanical",
        "description": "We design, install and commission the mechanical, electrical and plumbing systems that make buildings and facilities work, from HVAC and fire protection to process piping and steel buildings, through to tested handover.",
        "subcategories": [
          {
            "name": "HVAC Systems",
            "image": "/assets/mep-hvac-service.png",
            "points": [
              "Split, ducted and package units, VRF/VRV systems, chilled-water systems, AHUs, FCUs and fresh-air units.",
              "Ductwork — GI and pre-insulated, ventilation, exhaust and kitchen extract, smoke management and stair pressurisation, HVAC controls and BMS interfacing.",
              "Testing, adjusting and balancing (TAB), HVAC retrofit and replacement, cold rooms and refrigeration, precision cooling for server rooms."
            ]
          },
          {
            "name": "Plumbing & Drainage",
            "image": "/assets/mep-plumbing-service.png",
            "points": [
              "Water supply and distribution piping, sanitary fixtures and fittings, soil, waste and vent systems.",
              "Roof and storm-water drainage (building), hot-water systems, booster and transfer pump sets, water tanks — GRP and steel panel.",
              "Grease traps and oil interceptors, camp and site-facility plumbing, water filtration, softening and RO units."
            ]
          },
          {
            "name": "Fire Protection & Life Safety",
            "image": "/assets/mep-fire-service.png",
            "points": [
              "Fire sprinkler systems, wet and dry riser systems, fire pumps and pump rooms, fire hydrant and ring-main networks, hose reels and fire cabinets.",
              "Clean-agent suppression, CO₂ and kitchen-hood suppression, foam systems, deluge and water-spray systems.",
              "Fire alarm and detection systems, fire extinguishers — supply, install and refill, Civil Defence approvals and certification."
            ]
          },
          {
            "name": "Mechanical & Process Piping",
            "image": "/assets/mep-mechanical-service.png",
            "points": [
              "Process piping — carbon and stainless steel, GRP/GRE piping installation, HDPE piping — butt-fusion and electrofusion, utility piping — air, nitrogen.",
              "Water, steam, pipe supports and hangers, pipe racks and sleepers.",
              "Tie-ins and plant modifications, valve installation and line-up, hydrotest, flushing and reinstatement."
            ]
          },
          {
            "name": "Building Power & Lighting",
            "image": "/assets/mep-building-power-service.png",
            "points": [
              "Internal and emergency lighting, external, street and high-mast lighting, small power and final circuits.",
              "Distribution boards and sub-main cabling, cable trays, ladders, trunking and conduits.",
              "Earthing and lightning protection, standby generators and ATS, UPS and central battery systems, lighting control systems."
            ]
          },
          {
            "name": "PEB & Steel Buildings",
            "image": "/assets/mep-peb-service.png",
            "points": [
              "Pre-engineered building supply and erection, sandwich-panel cladding and roofing.",
              "Mezzanines, platforms and canopies.",
              "Car-park shades and shade structures."
            ]
          },
          {
            "name": "Testing, Commissioning & Handover",
            "image": "/assets/mep-testing-service.png",
            "points": [
              "Pre-commissioning checks and punch lists, integrated systems testing (IST).",
              "Authority inspections and handover, as-built drawings and O&M manuals.",
              "Operator training and handover, defects-liability support."
            ]
          }
        ]
      },
      {
        "slug": "electrical-instrumentation-power",
        "heroImage": "/assets/electrical-service-hero.png",
        "title": "Electrical, Instrumentation & Power",
        "description": "Our E&I teams take power from the grid to the panel and signals from the field to the control room, covering LV/MV distribution, cabling, substations, instrumentation and SCADA, DCS and PLC systems.",
        "subcategories": [
          {
            "name": "LV/MV Power Distribution",
            "image": "/assets/electrical-lvmv-service.png",
            "points": [
              "LV switchgear, MCC and panel installation, MV switchgear and RMUs (up to 33 kV).",
              "Package substations, distribution transformers — install and test, power factor correction and harmonic filtering.",
              "Plant and process electrical installation, electrical maintenance and breaker servicing, temporary construction power."
            ]
          },
          {
            "name": "Cabling & Terminations",
            "image": "/assets/electrical-cabling-service.png",
            "points": [
              "LV power and control cable installation, MV cable laying, jointing and termination.",
              "HV cable works up to 132 kV (with specialist partners), underground trenching and duct banks, cable glanding and terminations in hazardous areas.",
              "Cable testing — IR, VLF and hi-pot."
            ]
          },
          {
            "name": "Substations & Grid Works",
            "image": "/assets/electrical-substations-service.png",
            "points": [
              "Substation electrical installation, 13.8–132 kV (with partners), protection relay testing and settings.",
              "Earthing grids and grounding studies, grid connection and utility interface works.",
              "Substation automation and RTUs, overhead distribution lines."
            ]
          },
          {
            "name": "Instrumentation & Control",
            "image": "/assets/electrical-instrumentation-service.png",
            "points": [
              "Field instrument installation, instrument tubing and hook-ups, calibration and loop checks.",
              "Control and ESD valve installation, fire and gas detection systems, junction boxes and marshalling cabinets.",
              "Instrument and multicore cabling, analyser systems and shelters."
            ]
          },
          {
            "name": "Control Systems — SCADA / DCS / PLC",
            "image": "/assets/electrical-control-service.png",
            "points": [
              "PLC panel build and programming, SCADA configuration and HMI development.",
              "DCS installation support and I/O checkout, telemetry and RTU installation.",
              "Control-system migration and upgrades, OT networks and integration."
            ]
          }
        ]
      },
      {
        "slug": "oil-gas",
        "heroImage": "/assets/oil-service-hero.png",  
        "title": "Oil & Gas",
        "description": "We support upstream and midstream operators with wellsite facilities, pipelines, storage tanks, modular skids, corrosion protection and gas systems, built to operator standards and ready for hydrocarbon service.",
        "subcategories": [
          {
            "name": "Wellsite & Surface Facilities",
            "image": "/assets/oil-wellsite-service.png",
            "points": [
              "Well pad and wellsite civil works, wellhead surface-facility civil works, cellar construction and conductor pits, lined pits — evaporation.",
              "Burn and flare, flowline installation and wellhead hook-up, wellsite access roads.",
              "Wellsite fencing, gates and signage, wellsite restoration after rig release."
            ]
          },
          {
            "name": "Pipelines",
            "image": "/assets/oil-pipelines-service.png",
            "points": [
              "Onshore pipeline construction, right-of-way preparation and reinstatement, pipeline welding with NDT coordination, field joint coating.",
              "Hydrotest, dewatering and drying, road and wadi crossings.",
              "Pipeline markers and signage, pipeline repair and sleeving (with specialists), pigging support."
            ]
          },
          {
            "name": "Tanks & Storage",
            "image": "/assets/oil-tanks-service.png",
            "points": [
              "Above-ground storage tank erection, tank repair and modification, tank cleaning and sludge removal.",
              "Tank coating and internal lining, bund walls and secondary containment.",
              "Shop-fabricated tank and vessel installation, loading and unloading bay works."
            ]
          },
          {
            "name": "Skids, Spools & Modular Fabrication",
            "image": "/assets/oil-skids-service.png",
            "points": [
              "Process skid fabrication and assembly, metering and chemical-injection skids.",
              "Pipe spool fabrication, modular assembly and pre-commissioning.",
              "Structural steel for process units."
            ]
          },
          {
            "name": "Corrosion Protection",
            "image": "/assets/oil-corrosion-service.png",
            "points": [
              "Cathodic protection — ICCP and sacrificial, CP surveys — CIPS and DCVG.",
              "External coatings to Aramco SAES-H, internal linings.",
              "Corrosion monitoring — coupons and probes."
            ]
          },
          {
            "name": "Gas & Fuel Systems",
            "image": "/assets/oil-gas-service.png",
            "points": [
              "Diesel storage and dispensing systems, LPG systems for TCFs.",
              "Industrial gas distribution piping.",
              "Leak detection."
            ]
          }
        ]
      },
      {
        "slug": "plant-industrial-services",
        "heroImage": "/assets/plant-service-hero.png",
        "title": "Plant & Industrial Services",
        "description": "We keep industrial plants running safely and efficiently through planned maintenance, shutdowns and turnarounds, equipment overhaul, fabrication, surface protection and asset integrity programmes.",
        "subcategories": [
          {
            "name": "Maintenance & O&M",
            "image": "/assets/plant-maintenance-service.png",
            "points": [
              "Preventive maintenance (PPM) programmes, corrective and breakdown maintenance, operations and maintenance (O&M) contracts.",
              "Utility plant O&M, resident maintenance crews.",
              "Maintenance planning and CMMS support, lubrication management and oil analysis."
            ]
          },
          {
            "name": "Shutdowns & Turnarounds",
            "image": "/assets/plant-shutdowns-service.png",
            "points": [
              "Shutdown planning and scheduling support, turnaround manpower and supervision, heat-exchanger bundle pulling and cleaning.",
              "Bolt torquing and tensioning, blinding, de-blinding and flange management.",
              "Hydrojetting and industrial cleaning, column and vessel internals support."
            ]
          },
          {
            "name": "Rotating & Static Equipment",
            "image": "/assets/plant-rotating-service.png",
            "points": [
              "Pump overhaul and repair, valve servicing, repair and testing.",
              "Safety and relief valve testing, laser alignment and vibration analysis, compressor maintenance support.",
              "Motor and gearbox maintenance, heat-exchanger re-tubing and repair."
            ]
          },
          {
            "name": "Fabrication, Welding & Machining",
            "image": "/assets/plant-fabrication-service.png",
            "points": [
              "Structural steel fabrication and erection, platforms, stairs, handrails and ladders, coded welding — SMAW.",
              "GTAW, GMAW, FCAW, welder qualification and WPS/PQR support.",
              "On-site machining, workshop fabrication and machining, chutes, hoppers and bins."
            ]
          },
          {
            "name": "Surface Treatment, Insulation & Access",
            "image": "/assets/plant-surface-service.png",
            "points": [
              "Abrasive blasting, industrial painting and coating, hot and cold insulation with cladding.",
              "Refractory installation and repair, scaffolding erection and dismantling, scaffold inspection and tagging.",
              "Fireproofing — cementitious and intumescent, rope access, temporary shelters and habitats."
            ]
          },
          {
            "name": "Asset Integrity & Inspection",
            "image": "/assets/plant-asset-service.png",
            "points": [
              "NDT coordination — RT, UT, MT.",
              "PT, thickness surveys and corrosion mapping, tank and vessel inspection support.",
              "Advanced NDT coordination — PAUT and TOFD, risk-based inspection (RBI) support, integrity records and inspection databases."
            ]
          }
        ]
      },
      {
        "slug": "energy-renewables",
        "heroImage": "/assets/energy-service-hero.png",
        "title": "Energy & Renewables",
        "description": "We help clients cut energy costs and emissions with solar PV, battery storage, hybrid and backup power, clean-energy systems and energy-efficiency upgrades for sites of every size.",
        "subcategories": [
          {
            "name": "Solar PV",
            "image": "/assets/energy-solar-service.png",
            "points": [
              "Rooftop solar PV — commercial and industrial, ground-mounted solar PV, solar carports.",
              "Off-grid and hybrid solar for remote sites, solar water pumping, solar street and area lighting.",
              "PV testing and commissioning, PV O&M, cleaning and monitoring."
            ]
          },
          {
            "name": "Storage, Hybrid & Backup Power",
            "image": "/assets/energy-storage-service.png",
            "points": [
              "Battery energy storage (BESS) integration, diesel–solar hybrid systems.",
              "Generator supply, installation and maintenance.",
              "Microgrid and energy-management controls."
            ]
          },
          {
            "name": "Wind & Clean Energy",
            "image": "/assets/energy-wind-service.png",
            "points": [
              "Small and medium wind-turbine installation.",
              "Wind–solar hybrid systems.",
              "Renewable balance-of-plant works."
            ]
          },
          {
            "name": "Energy Efficiency",
            "image": "/assets/energy-efficiency-service.png",
            "points": [
              "Energy audits and metering studies, sub-metering and energy monitoring.",
              "LED lighting retrofit, HVAC optimisation.",
              "Power-quality and load surveys."
            ]
          }
        ]
      },
      {
        "slug": "marine-coastal-works",
        "heroImage": "/assets/marine-service-hero.png",
        "title": "Marine & Coastal Works",
        "description": "We build and maintain the structures that meet the sea: coastal protection, jetties and quays, dredging and reclamation support, outfalls and ongoing marine maintenance.",
        "subcategories": [
          {
            "name": "Coastal Protection",
            "image": "/assets/marine-coastal-service.png",
            "points": [
              "Rock revetments and armour placement, breakwaters and groynes.",
              "Sea walls and shoreline stabilisation.",
              "Geotextile and filter layers."
            ]
          },
          {
            "name": "Jetties, Quays & Marine Structures",
            "image": "/assets/marine-jetties-service.png",
            "points": [
              "Jetty and pier construction, quay walls and berths.",
              "Fender and bollard installation, marine piling (specialist).",
              "Boat ramps and small-craft landings."
            ]
          },
          {
            "name": "Dredging, Reclamation & Outfalls",
            "image": "/assets/marine-dredging-service.png",
            "points": [
              "Dredging support services, land reclamation and fill placement.",
              "Outfall structures and diffusers.",
              "Seawater intake structures."
            ]
          },
          {
            "name": "Marine Maintenance",
            "image": "/assets/marine-marine-service.png",
            "points": [
              "Marine civil maintenance and repairs, splash-zone concrete repair.",
              "Marine coatings.",
              "Cathodic protection for marine structures."
            ]
          }
        ]
      },
      {
        "slug": "environmental-services",
        "heroImage": "/assets/environmental-service-hero.png",
        "title": "Environmental Services",
        "description": "We manage waste, remediate contaminated land and groundwater, and respond to spills, helping clients meet their environmental obligations and keep sites clean and compliant.",
        "subcategories": [
          {
            "name": "Waste Management",
            "image": "/assets/environmental-waste-service.png",
            "points": [
              "Hazardous waste collection and transport (licensed), industrial non-hazardous waste handling.",
              "Construction and demolition waste removal, oily sludge and drilling-waste handling.",
              "Waste segregation and recycling programmes, scrap metal recovery."
            ]
          },
          {
            "name": "Remediation & Groundwater",
            "image": "/assets/environmental-remediation-service.png",
            "points": [
              "Contaminated soil remediation, dewatering — wellpoints and deep wells.",
              "Groundwater control and monitoring.",
              "Site restoration and reinstatement."
            ]
          },
          {
            "name": "Spill Response & Industrial Cleaning",
            "image": "/assets/environmental-spill-service.png",
            "points": [
              "Oil and chemical spill response, vacuum-truck services.",
              "Tank and pit cleaning.",
              "Drain and sewer-line jetting."
            ]
          }
        ]
      },
      {
        "slug": "ict-telecom-infrastructure",
        "heroImage": "/assets/ict-service-hero.png",
        "title": "ICT & Telecom Infrastructure",
        "description": "We build the networks businesses run on, from outside-plant fibre and FTTH to structured cabling, secure networks, wireless backhaul, data centres, ELV systems and day-to-day IT support.",
        "subcategories": [
          {
            "name": "OSP & FTTH",
            "image": "/assets/ict-osp-service.png",
            "points": [
              "FTTH / FTTx network rollout, OSP civil works, duct and sub-duct installation.",
              "Cable blowing, fibre cable pulling and aerial installation, FDT/FAT installation and drop connections.",
              "Fusion splicing and OTDR testing, fibre maintenance and break restoration."
            ]
          },
          {
            "name": "Structured Cabling",
            "image": "/assets/ict-structured-service.png",
            "points": [
              "Cat6/Cat6A copper cabling, fibre backbone — OM3/OM4/OS2.",
              "Racks, patch panels and cable management.",
              "Cable certification and labelling, telecom rooms and MDF/IDF build-out."
            ]
          },
          {
            "name": "Network Infrastructure & Security",
            "image": "/assets/ict-network-service.png",
            "points": [
              "LAN switching and routing, firewall and perimeter security deployment.",
              "Hotspot and bandwidth management (MikroTik-class), network audits and troubleshooting.",
              "Managed network services and NOC support, SD-WAN and multi-site connectivity."
            ]
          },
          {
            "name": "Wireless & Backhaul",
            "image": "/assets/ict-wireless-service.png",
            "points": [
              "Enterprise WiFi — surveys and deployment, camp and labour-accommodation WiFi (managed service).",
              "Point-to-point and point-to-multipoint links, outdoor WiFi and mesh networks.",
              "Two-way radio systems, private LTE/5G (with operators or partners)."
            ]
          },
          {
            "name": "Data Centre & Server Rooms",
            "image": "/assets/ict-data-service.png",
            "points": [
              "Server-room design and build, data-centre relocation and migration, rack and stack.",
              "Power and cabling, precision cooling and UPS integration, servers.",
              "Storage and virtualisation setup, DCIM and environmental monitoring."
            ]
          },
          {
            "name": "ELV, Security & Communications",
            "image": "/assets/ict-elv-service.png",
            "points": [
              "IP CCTV and video surveillance, video management and analytics, access control and time attendance.",
              "Intrusion detection and alarms, public address and voice evacuation, intercom and video door phones.",
              "IP telephony and PABX, IPTV / MATV systems."
            ]
          },
          {
            "name": "IT Support Services",
            "image": "/assets/ict-it-service.png",
            "points": [
              "IT helpdesk and on-site support, IT and ELV annual maintenance contracts.",
              "End-user device setup and imaging.",
              "IT asset procurement and deployment."
            ]
          }
        ]
      },
      {
        "slug": "software-ai-digital",
        "heroImage": "/assets/software-service-hero.png",
        "title": "Software, AI & Digital",
        "description": "We turn operations into digital advantage with custom software, AI and data solutions, IoT and smart systems, cybersecurity and managed cloud services built for industrial and commercial clients.",
        "subcategories": [
          {
            "name": "Software & Digital Design",
            "image": "/assets/software-software-service.png",
            "points": [
              "Custom web applications, mobile apps — iOS and Android, system integration and APIs.",
              "Website design and development, corporate profiles and digital design, ERP/CRM implementation and customisation.",
              "Document and workflow automation, software maintenance and support."
            ]
          },
          {
            "name": "AI & Data",
            "image": "/assets/software-ai-service.png",
            "points": [
              "AI solution development, predictive-maintenance analytics, machine vision and video analytics.",
              "AI assistants and workflow automation, dashboards and BI reporting.",
              "Data engineering and warehousing, AI products via group technology partner."
            ]
          },
          {
            "name": "IoT, Automation & Smart Systems",
            "image": "/assets/software-iot-service.png",
            "points": [
              "IoT sensor networks and telemetry, BMS and smart-building integration.",
              "SCADA/BMS systems integration, digital twin and asset modelling.",
              "Command and control centres, smart camp solutions."
            ]
          },
          {
            "name": "Cybersecurity & Compliance",
            "image": "/assets/software-cybersecurity-service.png",
            "points": [
              "Cybersecurity assessments and gap analysis, third-party cybersecurity compliance support.",
              "Endpoint and email security management, OT/ICS cybersecurity.",
              "Backup and disaster recovery, security awareness training."
            ]
          },
          {
            "name": "Cloud & Managed IT",
            "image": "/assets/software-cloud-service.png",
            "points": [
              "Microsoft 365 / Google Workspace deployment.",
              "Cloud migration and hosting.",
              "Managed IT services."
            ]
          }
        ]
      },
      {
        "slug": "logistics-heavy-transport",
        "heroImage": "/assets/logistics-service-hero.png",
        "title": "Logistics & Heavy Transport",
        "description": "We move what others can't: heavy haulage and rig moves, cranes and lifting, equipment and vehicle rental, freight and warehousing, and qualified operators and drivers.",
        "subcategories": [
          {
            "name": "Heavy Haulage & Rig Moves",
            "image": "/assets/logistics-heavy-service.png",
            "points": [
              "Onshore rig moves — drilling and workover, rig-up / rig-down support.",
              "Heavy haulage — low-bed and modular trailers, oversized and project cargo.",
              "Transport permits and escorts, route surveys."
            ]
          },
          {
            "name": "Cranes & Lifting",
            "image": "/assets/logistics-cranes-service.png",
            "points": [
              "RT, mobile and crawler crane rental with Aramco/TÜV-certified operators.",
              "Lift planning and critical-lift studies, rigging and signalling services.",
              "Forklift, telehandler and boom-lift hire."
            ]
          },
          {
            "name": "Equipment & Vehicle Rental",
            "image": "/assets/logistics-equipment-service.png",
            "points": [
              "Flatbed and multi-axle low-bed trailer rental, SPMT rental, earthmoving equipment rental, generators.",
              "Compressors and lighting towers, water and sewage tankers, dump trucks and tippers.",
              "Buses and staff transportation, pickups and light vehicles, porta-cabin and container rental."
            ]
          },
          {
            "name": "Logistics, Freight & Warehousing",
            "image": "/assets/logistics-logistics-service.png",
            "points": [
              "Freight forwarding — sea, air and land, customs clearance (licensed broker).",
              "Warehousing and inventory management, cold storage and cold-chain transport, laydown yards and materials management.",
              "Site mobilisation and demobilisation, last-mile and site deliveries, fleet operations and GPS tracking."
            ]
          },
          {
            "name": "Operators & Drivers Supply",
            "image": "/assets/logistics-operators-service.png",
            "points": [
              "Heavy-duty (HD) drivers.",
              "Aramco/TÜV-certified crane and equipment operators.",
              "Aramco Rigger 1 and Rigger 2."
            ]
          }
        ]
      },
      {
        "slug": "facility-management",
        "heroImage": "/assets/facility-service-hero.png",
        "title": "Facility Management",
        "description": "We keep facilities safe, clean and fully operational with hard and soft FM services, FM management systems and trained support staff under clear SLAs.",
        "subcategories": [
          {
            "name": "Hard FM",
            "image": "/assets/facility-hard-service.png",
            "points": [
              "MEP planned preventive maintenance, HVAC maintenance and AMC, electrical and plumbing maintenance.",
              "Fire and life-safety systems maintenance, building fabric maintenance, generator and UPS maintenance.",
              "Water-tank cleaning and disinfection, lift maintenance coordination."
            ]
          },
          {
            "name": "Soft FM",
            "image": "/assets/facility-soft-service.png",
            "points": [
              "Cleaning and housekeeping, deep cleaning and sanitisation, pest control (licensed), waste collection and disposal.",
              "Laundry services, reception, mailroom and front desk.",
              "Pantry and tea-boy services, landscaping and grounds maintenance, security guarding (licensed partners)."
            ]
          },
          {
            "name": "FM Management & Systems",
            "image": "/assets/facility-fm-service.png",
            "points": [
              "Helpdesk and CAFM implementation, asset registers and tagging.",
              "Condition surveys and lifecycle planning, utility and energy management.",
              "SLA/KPI performance reporting, refurbishment and minor works."
            ]
          },
          {
            "name": "Manpower & Support Staff",
            "image": "/assets/facility-manpower-service.png",
            "points": [
              "Skilled manpower supply, unskilled labour supply, engineers and supervisors on secondment.",
              "Administrative and office support staff, drivers and messengers, short-term and shutdown manpower.",
              "HSE officers and safety supervision, Saudi-national staffing support."
            ]
          }
        ]
      },
      {
        "slug": "camp-catering",
        "heroImage": "/assets/camp-service-hero.png",
        "title": "Camp & Catering",
        "description": "We provide complete remote-site living: catering, camp management and camp infrastructure that keep workforces fed, housed and comfortable.",
        "subcategories": [
          {
            "name": "Catering",
            "image": "/assets/camp-catering-service.png",
            "points": [
              "Industrial and camp catering, remote-site and rig catering.",
              "Packed meals and site lunch delivery, central kitchen operations.",
              "Menu planning and special diets, food-safety management."
            ]
          },
          {
            "name": "Camp Management",
            "image": "/assets/camp-management-service.png",
            "points": [
              "Camp operations and management, camp housekeeping and laundry.",
              "Camp maintenance — MEP and civil, recreation and welfare facilities.",
              "Camp security and access control."
            ]
          },
          {
            "name": "Camp Infrastructure",
            "image": "/assets/camp-infrastructure-service.png",
            "points": [
              "Labour camp setup — modular and porta-cabins, camp utilities — water.",
              "Sewage and power, kitchen and dining-hall fit-out.",
              "Temporary site offices and welfare facilities."
            ]
          }
        ]
      },
      {
        "slug": "fit-out-interiors-landscape",
        "heroImage": "/assets/fit-out-service-hero.png",
        "title": "Fit-out, Interiors & Landscape",
        "description": "We deliver turnkey interior fit-outs and external works, from offices and restaurants to landscaped grounds, hardscape and irrigation.",
        "subcategories": [
          {
            "name": "Interior Fit-out",
            "image": "/assets/fit-interior-service.png",
            "points": [
              "Turnkey commercial fit-out, restaurant and commercial-kitchen fit-out, joinery and custom millwork, ceilings.",
              "Partitions and wall cladding, flooring systems, glazing and glass partitions.",
              "Signage and branding installation, FF&E procurement and installation, office refurbishment and space planning."
            ]
          },
          {
            "name": "Landscape & External Works",
            "image": "/assets/fit-landscape-service.png",
            "points": [
              "Hardscape — paving, stone and planters, softscape — trees, shrubs and turf.",
              "Irrigation networks — drip, bubbler and TSE, street furniture and external fixtures, landscape lighting.",
              "Mock-ups and sample panels, landscape maintenance, green roofs and raised planters, shade sails and pergolas."
            ]
          }
        ]
      },
      {
        "slug": "engineering-testing-project-services",
        "heroImage": "/assets/engineering-service-hero.png",
        "title": "Engineering, Testing & Project Services",
        "description": "We support projects from concept to close-out with engineering and design, survey and geotechnical investigation, materials testing and QA/QC, and project and commercial services.",
        "subcategories": [
          {
            "name": "Engineering & Design Support",
            "image": "/assets/engineering-engineering-service.png",
            "points": [
              "Shop drawings and coordination, detailed design (with design partners).",
              "BOQ preparation and quantity surveying, value engineering.",
              "BIM modelling and clash detection, as-built surveys and documentation."
            ]
          },
          {
            "name": "Survey & Geotechnical",
            "image": "/assets/engineering-survey-service.png",
            "points": [
              "Topographic and setting-out surveys.",
              "Geotechnical investigation (accredited labs).",
              "Utility detection — GPR and locators."
            ]
          },
          {
            "name": "Materials Testing & QA/QC",
            "image": "/assets/engineering-materials-service.png",
            "points": [
              "Construction materials testing, concrete cube and core testing.",
              "Field density and compaction testing, QA/QC management and ITPs.",
              "Third-party inspection coordination."
            ]
          },
          {
            "name": "Project & Commercial Services",
            "image": "/assets/engineering-project-service.png",
            "points": [
              "Project management and PMC support, planning and scheduling — Primavera P6.",
              "Procurement and expediting services, prequalification and vendor registration support.",
              "HSE plans and documentation."
            ]
          }
        ]
      }
    ],
    "products": [
      {
        "slug": "oilfield-drilling-equipment",
        "heroImage": "/assets/oilfield-product-hero.png",
        "title": "Oilfield & Drilling Equipment",
        "description": "We supply drilling and workover rigs, well control and wellhead equipment, rig components, tubulars, pumping units and oilfield consumables, sourced from qualified OEMs.",
        "subcategories": [
          {
            "name": "Drilling & Workover Rigs",
            "image": "/assets/oilfield-drilling-product.png",
            "points": [
              "Land drilling rigs — 1, 000 to 3, 000 HP.",
              "Heavy-duty water-well drilling rigs, workover and well-servicing rigs, rig upgrade and modernisation packages.",
              "Rig power and control systems, rig power-management and fuel-saving systems, offshore drilling and platform equipment (on request)."
            ]
          },
          {
            "name": "Well Control & Pressure Control",
            "image": "/assets/oilfield-well-product.png",
            "points": [
              "Ram BOPs, annular BOPs, BOP control units and accumulators.",
              "Choke and kill manifolds, drilling spools.",
              "Adapters and diverters, well-intervention pressure control."
            ]
          },
          {
            "name": "Wellhead & Completion Equipment",
            "image": "/assets/oilfield-wellhead-product.png",
            "points": [
              "Casing heads, spools and hangers, tubing heads and hangers.",
              "Christmas trees — surface, API 6A gate valves and chokes.",
              "Frac trees and frac heads, wellhead spares and repair kits."
            ]
          },
          {
            "name": "Rig Components & Handling Tools",
            "image": "/assets/oilfield-rig-product.png",
            "points": [
              "Top drive and drawworks components, rotary tables, swivels and kelly parts, crown and travelling blocks, hooks.",
              "Elevators, slips, tongs and safety clamps, mud pumps and fluid-end modules, mud-pump expendables.",
              "Solids-control equipment and shaker screens, drilling instrumentation and rig sensors, catwalks and pipe-handling equipment, rig spares and consumables."
            ]
          },
          {
            "name": "Drill String, Tubulars & Accessories",
            "image": "/assets/oilfield-drill-product.png",
            "points": [
              "Drill pipe, HWDP and drill collars, subs, crossovers and stabilisers.",
              "Drill bits — PDC and tricone, casing and tubing (OCTG), casing accessories — float equipment and centralisers.",
              "Pup joints, couplings and crossovers, line pipe — seamless and welded."
            ]
          },
          {
            "name": "Pumping, Frac & Stimulation",
            "image": "/assets/oilfield-pumping-product.png",
            "points": [
              "Frac pumping units — trailer and skid, cementing and acidising units, plunger pumps — power and fluid ends.",
              "Flow iron — integral fittings, plug valves, swivels.",
              "Frac manifolds and missile trailers, coiled-tubing and well-intervention equipment (on request)."
            ]
          },
          {
            "name": "Oilfield Consumables & Tools",
            "image": "/assets/oilfield-oilfield-product.png",
            "points": [
              "Drilling-fluid materials — barite, bentonite, polymers.",
              "Thread compounds and rig lubricants, wellsite consumables — hoses, fittings.",
              "Gaskets, oilfield hand tools, rig lifting gear and elevator links."
            ]
          }
        ]
      },
      {
        "slug": "pipes-valves-fittings-flanges",
        "heroImage": "/assets/pipes-product-hero.png",
        "title": "Pipes, Valves, Fittings & Flanges",
        "description": "We stock and source pipes, valves, fittings, flanges, bolting and corrosion-protection materials across the grades, ratings and standards our clients specify.",
        "subcategories": [
          {
            "name": "Pipes & Tubes",
            "image": "/assets/pipes-pipes-product.png",
            "points": [
              "Carbon-steel pipes — seamless and ERW, stainless-steel pipes and tubes, alloy and duplex pipes (on request).",
              "GRP/GRE pipes and fittings, HDPE pipes and fittings, uPVC/CPVC pipes and fittings.",
              "PPR pipes and fittings, ductile-iron pipes (water), copper pipes — plumbing and ACR."
            ]
          },
          {
            "name": "Valves",
            "image": "/assets/pipes-valves-product.png",
            "points": [
              "Gate, globe and check valves, ball valves — floating and trunnion, butterfly valves.",
              "Plug valves, control valves and actuators, safety and pressure-relief valves, water and fire-service valves.",
              "Valve actuators and gearboxes, valve spares, seals and trim kits."
            ]
          },
          {
            "name": "Fittings, Flanges & Bolting",
            "image": "/assets/pipes-fittings-product.png",
            "points": [
              "Butt-weld fittings, forged fittings — socket-weld and threaded, flanges — WN, SO, blind and RTJ.",
              "Olets and branch fittings, gaskets — spiral-wound, RTJ and sheet, stud bolts and nuts — B7/2H, coated.",
              "Flange insulation kits, pipe supports, clamps and U-bolts, grooved couplings and fittings."
            ]
          },
          {
            "name": "Corrosion-Protection Materials",
            "image": "/assets/pipes-corrosion-product.png",
            "points": [
              "CP anodes — magnesium, zinc and MMO.",
              "CP rectifiers and junction boxes, test stations and CP monitoring equipment.",
              "Pipe coating and wrapping materials."
            ]
          }
        ]
      },
      {
        "slug": "electrical-equipment-cables",
        "heroImage": "/assets/electrical-product-hero.png",
        "title": "Electrical Equipment & Cables",
        "description": "We supply cables, switchgear, transformers, lighting and wiring accessories for industrial, commercial and infrastructure projects.",
        "subcategories": [
          {
            "name": "Cables & Wires",
            "image": "/assets/electrical-cables-product.png",
            "points": [
              "LV power cables — XLPE/PVC, Cu/Al, MV power cables — up to 33 kV, HV cables and accessories (on request).",
              "Control and instrumentation cables, fire-resistant and LSZH cables, building wires and flexible cords, armoured cables (SWA/AWA).",
              "Solar DC cables, cable joints, terminations and lugs."
            ]
          },
          {
            "name": "Switchgear & Distribution",
            "image": "/assets/electrical-switchgear-product.png",
            "points": [
              "LV switchboards, MCCs and distribution boards, MV switchgear and RMUs, circuit breakers — ACB.",
              "MCCB, MCB, contactors, relays and motor starters.",
              "Package substations, busbar trunking systems, protection relays and power meters, capacitor banks and PFC panels."
            ]
          },
          {
            "name": "Transformers & Power Quality",
            "image": "/assets/electrical-transformers-product.png",
            "points": [
              "Distribution transformers — oil and dry-type, power transformers (on request).",
              "Isolation and control transformers, voltage stabilisers and AVRs.",
              "Surge protection devices, harmonic filters — active and passive."
            ]
          },
          {
            "name": "Lighting",
            "image": "/assets/electrical-lighting-product.png",
            "points": [
              "LED indoor luminaires, LED street, flood and high-mast lighting.",
              "Emergency and exit lighting, hazardous-area (Ex) luminaires.",
              "Lighting poles and high masts, lighting controls and sensors."
            ]
          },
          {
            "name": "Wiring Accessories & Containment",
            "image": "/assets/electrical-wiring-product.png",
            "points": [
              "Cable trays, ladders and trunking — HDG and SS, conduits and fittings — PVC, GI and flexible, switches.",
              "Sockets and wiring devices, earthing and lightning-protection materials, cable glands — industrial and Ex, junction boxes and enclosures (incl. Ex).",
              "Cable ties, markers and labelling, electrical tapes, heat-shrink and consumables."
            ]
          }
        ]
      },
      {
        "slug": "instrumentation-automation",
        "heroImage": "/assets/instrumentation-product-hero.png",
        "title": "Instrumentation & Automation",
        "description": "We supply field instruments, control and safety systems, fire and gas detection, and instrument tubing and test equipment from established manufacturers.",
        "subcategories": [
          {
            "name": "Field Instruments",
            "image": "/assets/instrumentation-field-product.png",
            "points": [
              "Pressure and DP transmitters, temperature sensors and transmitters, flow meters — mag, Coriolis, ultrasonic.",
              "Vortex, level instruments — radar, ultrasonic, gauges.",
              "Pressure gauges and thermometers, process analysers — gas and water quality, pressure, level and flow switches."
            ]
          },
          {
            "name": "Control & Safety Systems",
            "image": "/assets/instrumentation-control-product.png",
            "points": [
              "PLCs, I/O and HMIs, DCS and SIS components (on request).",
              "SCADA software and RTUs, industrial networking — managed switches and gateways.",
              "Control panels and marshalling cabinets, VFDs and soft starters."
            ]
          },
          {
            "name": "Industrial Fire & Gas Detection",
            "image": "/assets/instrumentation-industrial-product.png",
            "points": [
              "Fixed gas detectors — catalytic, IR and toxic.",
              "Flame detectors — UV/IR.",
              "F&G panels and controllers."
            ]
          },
          {
            "name": "Tubing, Fittings & Test Equipment",
            "image": "/assets/instrumentation-tubing-product.png",
            "points": [
              "Instrument tubing and compression fittings, instrument valves and manifolds.",
              "Calibration equipment.",
              "Portable test instruments."
            ]
          }
        ]
      },
      {
        "slug": "mechanical-rotating-equipment",
        "heroImage": "/assets/mechanical-product-hero.png",
        "title": "Mechanical & Rotating Equipment",
        "description": "We supply pumps, compressors, motors and drives, process and static equipment, and lifting and material-handling equipment.",
        "subcategories": [
          {
            "name": "Pumps",
            "image": "/assets/mechanical-pumps-product.png",
            "points": [
              "Centrifugal pumps — end-suction and split-case, API 610 process pumps (on request), submersible and dewatering pumps.",
              "Booster sets and pressure systems, metering and dosing pumps, progressive-cavity and diaphragm pumps.",
              "Pump spares — impellers, seals, bearings."
            ]
          },
          {
            "name": "Compressors & Air Systems",
            "image": "/assets/mechanical-compressors-product.png",
            "points": [
              "Air compressors — screw and piston, air dryers.",
              "Filters and receivers, blowers and industrial fans.",
              "Compressor spares and service kits."
            ]
          },
          {
            "name": "Motors & Power Transmission",
            "image": "/assets/mechanical-motors-product.png",
            "points": [
              "Electric motors — IE3/IE4, Ex-proof motors, gearboxes and geared motors.",
              "Bearings, mechanical seals.",
              "Couplings, belts and chains."
            ]
          },
          {
            "name": "Process & Static Equipment",
            "image": "/assets/mechanical-process-product.png",
            "points": [
              "Heat exchangers and coolers, pressure vessels and air receivers.",
              "Storage tanks — GRP, steel and PE.",
              "Strainers and process filters, packaged skids (on request)."
            ]
          },
          {
            "name": "Lifting & Material Handling Equipment",
            "image": "/assets/mechanical-lifting-product.png",
            "points": [
              "Electric chain and wire-rope hoists, overhead and gantry cranes (on request).",
              "Manual hoists, trolleys and jacks.",
              "Pallet trucks and stackers."
            ]
          }
        ]
      },
      {
        "slug": "hvac-refrigeration",
        "heroImage": "/assets/hvac-product-hero.png",
        "title": "HVAC & Refrigeration",
        "description": "We supply air-conditioning equipment, air distribution and ventilation products, and refrigeration, controls and insulation.",
        "subcategories": [
          {
            "name": "Air-Conditioning Equipment",
            "image": "/assets/hvac-aircondition-product.png",
            "points": [
              "Chillers — air and water-cooled, package and rooftop units.",
              "Split and ducted-split units, VRF/VRV systems.",
              "AHUs and FCUs, precision cooling — CRAC and in-row."
            ]
          },
          {
            "name": "Air Distribution & Ventilation",
            "image": "/assets/hvac-airdistribution-product.png",
            "points": [
              "Ventilation and exhaust fans, ductwork and pre-insulated duct panels, dampers — volume.",
              "Fire and smoke, grilles.",
              "Diffusers and louvres, kitchen hoods and extract equipment."
            ]
          },
          {
            "name": "Refrigeration, Controls & Insulation",
            "image": "/assets/hvac-refrigeration-product.png",
            "points": [
              "Refrigerants — R-410A, R-32, R-134a.",
              "Compressors and refrigeration spares, cold-room panels and condensing units.",
              "HVAC controls and thermostats, thermal insulation — elastomeric and glass wool."
            ]
          }
        ]
      },
      {
        "slug": "fire-protection-life-safety",
        "heroImage": "/assets/fire-product-hero.png",
        "title": "Fire Protection & Life Safety",
        "description": "We supply fire suppression, detection, alarm and life-safety equipment for buildings and industrial sites.",
        "subcategories": [
          {
            "name": "Fire Suppression",
            "image": "/assets/fire-fire-product.png",
            "points": [
              "Fire pumps and controllers, sprinklers, alarm valves and accessories.",
              "Hydrants, landing valves and hose reels, clean-agent and CO₂ suppression systems.",
              "Kitchen-hood suppression systems, foam concentrates and foam equipment."
            ]
          },
          {
            "name": "Detection, Alarm & Life Safety",
            "image": "/assets/fire-detection-product.png",
            "points": [
              "Fire alarm panels, detectors and devices, fire extinguishers — portable and wheeled.",
              "Fire doors and rated hardware, emergency and photoluminescent signage.",
              "Fire blankets, cabinets and accessories."
            ]
          }
        ]
      },
      {
        "slug": "it-networking-elv-hardware",
        "heroImage": "/assets/it-product-hero.png",
        "title": "IT, Networking & ELV Hardware",
        "description": "We supply networking and security appliances, passive and fibre products, compute and storage, end-user devices and security and ELV hardware.",
        "subcategories": [
          {
            "name": "Networking & Security Appliances",
            "image": "/assets/it-networking-product.png",
            "points": [
              "Switches — access, core and industrial, routers and SD-WAN appliances.",
              "Firewalls and UTM, WiFi access points and controllers, outdoor P2P / PtMP radios.",
              "Hotspot gateways and bandwidth-management devices, SFP modules and transceivers."
            ]
          },
          {
            "name": "Passive & Fibre",
            "image": "/assets/it-passive-product.png",
            "points": [
              "Copper cabling and patch panels — Cat6/6A, fibre-optic cables — indoor/outdoor, OS2/OM4, ODFs, patch cords and pigtails.",
              "FTTH passives — FDT/FAT, splitters, drop cables, splice closures and fibre accessories.",
              "Racks, cabinets and PDUs, ducts, sub-ducts and micro-ducts."
            ]
          },
          {
            "name": "Compute, Storage & End-User",
            "image": "/assets/it-compute-product.png",
            "points": [
              "Servers and storage, laptops, desktops and workstations.",
              "Printers and MFPs, tablets and rugged devices.",
              "UPS for IT — 1 to 20 kVA, software licences and subscriptions."
            ]
          },
          {
            "name": "Security & ELV Devices",
            "image": "/assets/it-security-product.png",
            "points": [
              "IP CCTV cameras and NVRs, video management software, access-control readers, controllers and locks.",
              "Turnstiles and barriers, intrusion alarm panels and sensors, PA and voice-evacuation systems, intercom and video door phones.",
              "IP phones and PBX/UC systems, two-way radios, IPTV / MATV equipment."
            ]
          }
        ]
      },
      {
        "slug": "construction-building-materials",
        "heroImage": "/assets/construction-product-hero.png",
        "title": "Construction & Building Materials",
        "description": "We supply aggregates, cement and concrete, steel, road materials, finishing products and drainage and utility products for projects of every scale.",
        "subcategories": [
          {
            "name": "Aggregates & Bulk Materials",
            "image": "/assets/construction-aggregates-product.png",
            "points": [
              "Crushed aggregates — ¾\", ⅜\" and base course.",
              "Washed sand and dune sand, pebbles and gravel.",
              "Select fill and sub-base material, rock armour and quarry run."
            ]
          },
          {
            "name": "Cement, Concrete & Precast",
            "image": "/assets/construction-cement-product.png",
            "points": [
              "Cement — OPC and SRC, ready-mix concrete (via batching plants), precast elements — kerbs, culverts.",
              "Manholes, barriers, concrete blocks — hollow.",
              "Solid and insulated, interlock pavers and tiles, admixtures and curing compounds."
            ]
          },
          {
            "name": "Steel & Metals",
            "image": "/assets/construction-steel-product.png",
            "points": [
              "Rebar — deformed bars, structural sections and plates, welded mesh and binding wire.",
              "Galvanised and stainless sheets, scaffolding materials — tubes.",
              "Couplers and system, formwork systems and accessories."
            ]
          },
          {
            "name": "Road & Paving Materials",
            "image": "/assets/construction-road-product.png",
            "points": [
              "Bitumen — penetration and PG grades, hot-mix asphalt (from plants).",
              "Road-marking paint and thermoplastic, traffic signs.",
              "Barriers and safety devices, geotextiles and geogrids."
            ]
          },
          {
            "name": "Finishing & Building Products",
            "image": "/assets/construction-finishing-product.png",
            "points": [
              "Waterproofing membranes and coatings, paints and protective coatings, tiles, stone and ceramics.",
              "Gypsum boards and ceiling systems, doors, windows and ironmongery, sanitary ware and fittings.",
              "Thermal and acoustic insulation, sealants, adhesives and grouts."
            ]
          },
          {
            "name": "Drainage & Utility Products",
            "image": "/assets/construction-drainage-product.png",
            "points": [
              "Manhole covers and gratings, GRP and precast manholes / chambers.",
              "Drainage pipes — uPVC, HDPE and RCP.",
              "Water tanks — GRP panel and PE."
            ]
          }
        ]
      },
      {
        "slug": "tools-mro-consumables",
        "heroImage": "/assets/tools-product-hero.png",
        "title": "Tools, MRO & Consumables",
        "description": "We keep sites and workshops running with tools, welding consumables, fasteners, lubricants and filters, rigging gear and industrial spares.",
        "subcategories": [
          {
            "name": "Tools & Workshop Equipment",
            "image": "/assets/tools-tools-product.png",
            "points": [
              "Hand tools and tool kits, power tools — corded and cordless.",
              "Non-sparking tools, measuring and inspection tools.",
              "Torque and tensioning tools, workshop and factory equipment."
            ]
          },
          {
            "name": "Welding & Fabrication Consumables",
            "image": "/assets/tools-welding-product.png",
            "points": [
              "Welding machines and accessories, electrodes, wires and fluxes.",
              "Cutting and grinding discs, abrasives.",
              "Welding and cutting gases, blasting abrasives — garnet and grit."
            ]
          },
          {
            "name": "Fasteners & Fixings",
            "image": "/assets/tools-fasteners-product.png",
            "points": [
              "Bolts, nuts and washers — general hardware.",
              "Anchors — mechanical and chemical, threaded rods.",
              "Strut channels and supports."
            ]
          },
          {
            "name": "Lubricants, Filters & Fluids",
            "image": "/assets/tools-lubricants-product.png",
            "points": [
              "Engine and industrial lubricants, greases, hydraulic and gear oils.",
              "Filters — air, oil.",
              "Fuel and hydraulic, coolants and DEF (AdBlue)."
            ]
          },
          {
            "name": "Rigging & Lifting Gear",
            "image": "/assets/tools-rigging-product.png",
            "points": [
              "Wire ropes and wire-rope slings, webbing and round slings.",
              "Shackles, hooks and rigging hardware.",
              "Chain blocks and lever hoists, load cells and dynamometers."
            ]
          },
          {
            "name": "Industrial Spares & Hoses",
            "image": "/assets/tools-industrial-product.png",
            "points": [
              "Hydraulic hoses and fittings, industrial hoses — water, air and chemical.",
              "Pneumatic components, batteries — vehicle and industrial.",
              "MRO stock — bearings, belts and seals."
            ]
          }
        ]
      },
      {
        "slug": "ppe-safety-environmental-supplies",
        "heroImage": "/assets/ppe-product-hero.png",
        "title": "PPE, Safety & Environmental Supplies",
        "description": "We supply personal protective equipment, site safety equipment and environmental and spill-control supplies.",
        "subcategories": [
          {
            "name": "Personal Protective Equipment",
            "image": "/assets/ppe-personal-product.png",
            "points": [
              "Safety helmets and bump caps, safety eyewear and face shields, hearing protection, coveralls — cotton and FR.",
              "Hi-vis vests and workwear, safety footwear, gloves — general, cut.",
              "Chemical and impact, respiratory protection — masks and APRs, chemical suits and disposable coveralls."
            ]
          },
          {
            "name": "Safety Equipment",
            "image": "/assets/ppe-safety-product.png",
            "points": [
              "Fall protection — harnesses, lanyards and SRLs, SCBA and escape sets, personal gas and H₂S monitors.",
              "Confined-space equipment, safety signage, barricades and cones, lockout / tagout kits.",
              "First-aid kits, emergency showers and eyewash, traffic-management equipment, rescue equipment and stretchers."
            ]
          },
          {
            "name": "Environmental & Spill Supplies",
            "image": "/assets/ppe-environmental-product.png",
            "points": [
              "Spill kits and absorbents, secondary containment — drip trays, bunds, pallets.",
              "Oil booms and skimmers, waste bags, drums and UN-rated containers.",
              "Portable environmental monitors — noise, dust, gas."
            ]
          }
        ]
      },
      {
        "slug": "heavy-equipment-vehicles",
        "heroImage": "/assets/heavy-product-hero.png",
        "title": "Heavy Equipment & Vehicles",
        "description": "We supply construction and earthmoving equipment, trucks and vehicles, and the parts and supplies that keep fleets working.",
        "subcategories": [
          {
            "name": "Construction & Earthmoving Equipment",
            "image": "/assets/heavy-construction-product.png",
            "points": [
              "Excavators, loaders and backhoes, bulldozers.",
              "Graders and rollers, mobile and crawler cranes, forklifts and telehandlers.",
              "Boom and scissor lifts, mobile generators, compressors and light towers."
            ]
          },
          {
            "name": "Trucks & Vehicles",
            "image": "/assets/heavy-trucks-product.png",
            "points": [
              "Tipper trucks, tractor heads and trailers, low-bed and extendable trailers.",
              "Water and sewage tankers, pickups.",
              "SUVs and light commercial vehicles, buses and staff transport."
            ]
          },
          {
            "name": "Equipment Parts & Supplies",
            "image": "/assets/heavy-equipment-product.png",
            "points": [
              "Equipment spare parts — genuine and aftermarket.",
              "Tyres — heavy equipment and trucks.",
              "Ground-engaging tools and undercarriage."
            ]
          }
        ]
      },
      {
        "slug": "power-generation-solar-storage",
        "heroImage": "/assets/power-product-hero.png",
        "title": "Power Generation, Solar & Storage",
        "description": "We supply generators and backup power, solar modules, inverters and energy storage.",
        "subcategories": [
          {
            "name": "Generation & Backup Power",
            "image": "/assets/power-generation-product.png",
            "points": [
              "Diesel generators — 10 to 3, 000 kVA, ATS.",
              "AMF and synchronising panels, UPS systems — online and modular.",
              "Batteries — VRLA and Li-ion, racks."
            ]
          },
          {
            "name": "Solar & Storage",
            "image": "/assets/power-solar-product.png",
            "points": [
              "Solar PV modules, solar inverters — string, hybrid and central, mounting structures and trackers.",
              "Battery energy storage systems (BESS), solar water pumps and controllers, solar street lights.",
              "DC combiners, isolators and MC4 connectors, energy meters and monitoring systems."
            ]
          }
        ]
      },
      {
        "slug": "furniture-camp-kitchen-supplies",
        "heroImage": "/assets/furniture-product-hero.png",
        "title": "Furniture, Camp & Kitchen Supplies",
        "description": "We supply furniture and FF&E, modular buildings, and kitchen, laundry and appliance equipment for offices, camps and accommodation.",
        "subcategories": [
          {
            "name": "Furniture & FF&E",
            "image": "/assets/furniture-furniture-product.png",
            "points": [
              "Office furniture and workstations, camp furniture — beds.",
              "Lockers and mattresses, bedding and linen.",
              "Dining and cafeteria furniture, recreation and gym equipment."
            ]
          },
          {
            "name": "Modular Buildings",
            "image": "/assets/furniture-modular-product.png",
            "points": [
              "Porta-cabins and modular buildings.",
              "Ablution and toilet units.",
              "Porta-cabins and modular buildings, ablution and toilet units."
            ]
          },
          {
            "name": "Kitchen, Laundry & Appliances",
            "image": "/assets/furniture-kitchen-product.png",
            "points": [
              "Commercial kitchen equipment, commercial refrigeration — reach-in and walk-in.",
              "Laundry equipment — washer-extractors and dryers, water coolers and dispensers.",
              "Appliances — TVs, microwaves and fridges."
            ]
          }
        ]
      },
      {
        "slug": "cleaning-fm-consumables",
        "heroImage": "/assets/cleaning-product-hero.png",
        "title": "Cleaning & FM Consumables",
        "description": "We supply cleaning, hygiene and janitorial consumables for facilities of every type.",
        "subcategories": [
          {
            "name": "Cleaning & Hygiene",
            "image": "/assets/cleaning-cleaning-product.png",
            "points": [
              "Janitorial chemicals and detergents, paper and hygiene products, washroom and hand-hygiene products, cleaning machines — scrubbers.",
              "Vacuums, pressure washers, mops, trolleys and cleaning tools.",
              "Waste bins, liners and wheelie bins, pest-control products (registered), kitchen and catering disposables."
            ]
          }
        ]
      },
      {
        "slug": "industrial-chemicals-gases",
        "heroImage": "/assets/industrial-product-hero.png",
        "title": "Industrial Chemicals & Gases",
        "description": "We supply industrial chemicals and gases for process, treatment and maintenance applications.",
        "subcategories": [
          {
            "name": "Chemicals & Gases",
            "image": "/assets/industrial-chemicals-product.png",
            "points": [
              "Water-treatment chemicals — RO antiscalants and biocides, boiler and cooling-tower chemicals, oilfield production chemicals, industrial cleaning and degreasing chemicals.",
              "Industrial gases — N₂, O₂, Ar.",
              "CO₂, chlorine and disinfection chemicals, laboratory chemicals and reagents."
            ]
          }
        ]
      },
      {
        "slug": "marine-port-supplies",
        "heroImage": "/assets/marine-product-hero.png",
        "title": "Marine & Port Supplies",
        "description": "We supply marine and port equipment and consumables for vessels, jetties and harbour operations.",
        "subcategories": [
          {
            "name": "Marine & Port Supplies",
            "image": "/assets/marine-marine-product.png",
            "points": [
              "Marine fenders — cylindrical, cone and pneumatic, bollards and mooring hardware.",
              "Navigation aids and buoys, marine coatings and anti-fouling, mooring ropes and lines.",
              "Life-saving appliances, marine concrete and armour materials."
            ]
          }
        ]
      }
    ]
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
      // A category can override the shared hero with heroImage (and optionally heroImageMobile).
      heroBg.dataset.photo = item?.heroImage || (isService ? "/assets/services-hero.png" : "/assets/products-hero.png");
      if (item?.heroImage) {
        if (item.heroImageMobile) heroBg.dataset.photoMobile = item.heroImageMobile;
        else delete heroBg.dataset.photoMobile;
      } else {
        heroBg.dataset.photoMobile = isService ? "/assets/services-hero-mobile.jpg" : "/assets/products-hero-mobile.jpg";
      }
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
    sections.replaceChildren(...item.subcategories.map((subcategory, index) => {
      // A subcategory is a plain string or { name, image } when it has its own photo.
      const title = typeof subcategory === "string" ? subcategory : subcategory.name;
      const photo = typeof subcategory === "string" ? null : subcategory.image;
      const points = typeof subcategory === "string" ? null : subcategory.points;
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
            const bulletList = document.createElement("ul");
      bulletList.className = "catalog-detail-points bl";
      (points || placeholderText.slice(1)).forEach((text) => {
        const point = document.createElement("li");
        point.className = "rv";
        point.textContent = text;
        bulletList.append(point);
      });
      const image = document.createElement("img");
      image.className = "catalog-detail-image";
      image.src = photo || "/assets/horse-background.jpg";
      image.alt = photo ? title : "";
      image.loading = index === 0 ? "eager" : "lazy";
      if (!photo) image.style.objectPosition = `${25 + (index % 3) * 25}% center`;
      copy.append(number, subheading, bulletList);
      layout.append(copy, image);
      wrap.append(layout);
      section.append(wrap);
      return section;
    }));
  }
})();
