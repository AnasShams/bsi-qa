(() => {
  const profiles = {
    badr: {
      name: "Dr. Badr Al-Hajri",
      role: "Chairman",
      photo: "/assets/chairman-badr.jpg",
      photoPosition: "center center",
      paragraphs: [
        "Dr. Badr Al-Hajri is Chairman of Black Saber Industries, where he leads a transformative vision that bridges Qatari enterprise with global innovation, creating unprecedented value across strategic sectors worldwide.",
        "A distinguished leader with deep roots in Qatar's business and technology landscape, Dr. Al-Hajri has built a powerful platform that seamlessly integrates consulting, real estate development, and strategic investments - driving both national and international growth. His leadership has been instrumental in advancing Qatar's economic diversification strategy, delivering landmark projects that elevate the nation's global standing while generating substantial returns for stakeholders. Through Black Saber Industries, Dr. Al-Hajri has architected a sophisticated investment framework spanning technology, energy, healthcare, aerospace, and advanced manufacturing across multiple continents. His strategic acumen in identifying high-potential ventures and transforming them into industry leaders has created billions in enterprise value. By forging partnerships with the world's most prestigious national oil companies, Fortune 500 corporations, and emerging technology innovators, he has built an unparalleled network that opens doors across boardrooms in Doha, Riyadh, Houston, and Silicon Valley.",
        "In recognition of his expertise and regional influence in the field of technology, the League of Arab States appointed Dr. Al-Hajri as Vice President of the Arab Federation for Artificial Intelligence and Programming - a testament to his standing as a leading voice in AI and digital transformation across the Arab world.",
        "Dr. Al-Hajri's investment philosophy centers on intelligent capital deployment - backing visionary entrepreneurs and breakthrough technologies while maintaining rigorous operational discipline. By anticipating market shifts, he consistently delivers exceptional outcomes, establishing Black Saber Industries as a benchmark for innovation and value creation at scale.",
        "Driven by a mandate of profit with purpose, Dr. Al-Hajri builds enterprises that balance commercial objectives with societal impact. His ventures actively accelerate job creation, technology transfer, and human capital development while strengthening vital economic ties between the GCC and global markets.",
        "With elite relationships spanning government ministries, sovereign wealth funds, and international business leaders, Dr. Al-Hajri commands deep respect across global markets. His strategic vision and integrity position Black Saber Industries as a premier platform for investors seeking exposure to high-growth, transformative industries.",
      ],
    },
    salman: {
      name: "Salman HR. Ahamed",
      role: "Vice Chairman",
      photo: "/assets/vice-chairman-salman.jpg",
      photoPosition: "center center",
      paragraphs: [
        "Salman HR. Ahamed is the Vice Chairman and Principal of Black Saber Industries, driving the group's grand strategic initiatives, joint ventures, and market expansion across the MENA region and Asian markets. Over a distinguished 26-year career, Ahamed has built an unparalleled reputation as a visionary industrialist and global energy executive, with deep operational expertise spanning heavy industrial energy, advanced technology, aerospace, artificial intelligence, and cutting-edge medical technologies.",
        "A pioneering force in oilfield services, Ahamed fundamentally revolutionized onshore drilling rig logistics across the GCC region. He conceptualized and executed highly specialized frameworks for complex onshore drilling rig moves - drastically compressing operational cycle times, optimizing heavy transportation fleets, and establishing high-safety, zero-downtime execution practices that ultimately became the benchmark standard for major regional operators. As a transformative leader, he reshaped Saudi Arabia's broader industrial logistics landscape, introducing digitally enabled supply chains and high-integrity infrastructure assets that elevated the entire Kingdom's energy-business ecosystem.",
        "Beyond core logistics, Ahamed has been a critical architect in advancing next-generation industrial maintenance and asset integrity protocols. His leadership spearheaded the deployment of advanced predictive maintenance technologies, international-standard overhaul workshops, and specialized mechanical fabrications that maximize process-plant reliability and safeguard multi-billion-dollar energy installations.",
        "Driven by a passion for disruptive technology, Ahamed also co-founded premier AI-integrated health and wellness ventures, including Eternal Clinics Switzerland and Eternal Labs, pioneering a new era in hyper-personalized, holistic healthcare delivery. To date, companies under his strategic command and operational oversight have achieved a combined order book value exceeding $8 billion, a testament to his commercial execution capabilities and institutional trust.",
        "Ahamed's immense influence is underpinned by an exceptional, high-profile network of relationships at the highest echelons of leadership. He is deeply connected with the Government of India at the central ministry level, as well as with royal, governmental, and state energy entities across the GCC. This rare combination of profound operational excellence, macro-level diplomatic bridges, and an uncompromising commitment to innovation positions him as the foundational driving force behind Black Saber Industries' regional dominance and global growth strategy.",
      ],
    },
    mustafa: {
      name: "Mustafa Al Salman",
      role: "Executive Director - Strategy",
      photo: "/assets/executive-director-mustafa.jpg",
      photoPosition: "center 28%",
      paragraphs: [
        "Mustafa Ebrahim Al Salman is Director at Black Saber Industries (BSI), bringing over four decades of distinguished expertise in architectural design, infrastructure development, and large-scale EPC project execution across the Middle East.",
        "With a career spanning public and private sectors, Al Salman has established himself as a leading authority in airport expansion, civil aviation facilities, government complexes, and industrial infrastructure throughout the GCC region. His architectural vision and execution capabilities have shaped critical infrastructure developments, earning him recognition as one of the region's foremost experts in complex project delivery.",
        "Since 2006, he has successfully delivered diverse public and private sector developments from concept through completion. His tenure as Head of Projects & Design at Bahrain's Civil Aviation Affairs saw him direct architectural proposals for new terminal facilities, control multimillion-dinar budgets, and lead multidisciplinary teams in collaboration with leading international consultants on the landmark Bahrain International Airport expansion.",
        "Beyond architectural practice, Al Salman serves as a certified arbitrator with the Court of the Kingdom of Bahrain since 2011, where his unique combination of technical expertise and legal impartiality has made him a trusted authority in dispute resolution and specialized arbitration for complex infrastructure matters. This dual competency provides valuable strategic insight for navigating complex project environments.",
        "Al Salman holds a Master's degree in Industrial Building Design from York University (UK) and a BSc in Architectural Engineering from Azhar University (Egypt), complemented by specialized executive education from MIT (USA) focusing on airport systems and aviation management. His extensive network across government ministries, international consultancies, and private sector stakeholders throughout the MENA region continues to drive Black Saber Industries' strategic infrastructure initiatives.",
      ],
    },
  };

  const profile = profiles[new URLSearchParams(location.search).get("leader")];
  const name = document.querySelector("#leader-profile-name");
  if (!name) return;

  const role = document.querySelector("#leader-profile-role");
  const bio = document.querySelector("#leader-profile-bio");
  const portrait = document.querySelector("#leader-profile-photo");
  if (!profile) {
    name.textContent = "Leader profile not found";
    role.textContent = "Leadership";
    bio.textContent = "Choose a leader from the board to view their profile.";
    return;
  }

  document.title = `${profile.name} | Leadership | Black Saber Industries`;
  name.textContent = profile.name;
  role.textContent = profile.role;
  portrait.dataset.photo = profile.photo;
  portrait.setAttribute("aria-label", `${profile.name} portrait`);
  const portraitImage = portrait.querySelector(".photo-placeholder");
  if (portraitImage) {
    portraitImage.src = profile.photo;
    portraitImage.style.objectPosition = profile.photoPosition;
  }
  bio.replaceChildren(
    ...profile.paragraphs.map((text) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      return paragraph;
    }),
  );
})();
