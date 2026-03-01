export const siteContent = {
  global: {
    email: "hello@hephex.com",
    calendlyUrl: "https://calendly.com/hephex/discovery",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Team", href: "/team" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ],
  home: {
    hero: {
      headline: "Software that adapts to you.",
      problemStat: "$600B spent on enterprise software annually. Most of it doesn't fit.",
    },
    proofPoints: [
      { id: "1", text: "55,000 companies analyzed." },
      { id: "2", text: "89% automation." },
      { id: "3", text: "3× pipeline velocity." },
    ]
  },
  howWeWork: {
    phases: [
      { id: "discover", title: "Discover", description: "Deep dive into your operations to find the highest-leverage opportunities." },
      { id: "design", title: "Design", description: "Architecting a bespoke solution tailored to your exact workflows." },
      { id: "build", title: "Build", description: "Rapid prototyping and iterative development with continuous feedback." },
      { id: "evolve", title: "Evolve", description: "Scaling and refining the system as your business grows." }
    ],
    requiredLine: "Every engagement starts with a prototype and ROI model — not a PowerPoint.",
    tableData: [
      { feature: "Approach", traditional: "PowerPoint decks & generic SaaS", hephex: "Working prototypes & bespoke tools" },
      { feature: "Speed", traditional: "Months of discovery", hephex: "Days to first prototype" },
      { feature: "Fit", traditional: "You adapt to the software", hephex: "Software adapts to you" },
      { feature: "Team", traditional: "Junior offshore resources", hephex: "Senior European engineers" }
    ]
  },
  team: {
    requiredLine: "European engineering team. Vienna & Cyprus. Senior engineers only.",
    members: [
      { id: "scott", name: "Scott", role: "Managing Partner", description: "Business strategy and engagement delivery.", image: "/team-scott.jpg" },
      { id: "sev", name: "Sev", role: "Partner, Technology", description: "Full-stack architecture, AI/ML, cloud infrastructure.", image: "/team-sev.jpg" },
      { id: "vince", name: "Vince", role: "Partner", description: "[Role TBD - Awaiting input]", image: "/team-vince.jpg" },
      { id: "mark", name: "Mark", role: "Partner, Delivery", description: "Program management, client-facing from day one.", image: "/team-mark.jpg" }
    ]
  },
  work: {
    caseStudies: [
      { id: "1", industry: "Logistics", scale: "$120M revenue", results: ["Reduced manual routing by 80%", "Increased delivery capacity by 15%", "ROI achieved in 4 months"], note: "Details TBD — awaiting input" },
      { id: "2", industry: "Fintech", scale: "3,000 employees", results: ["Automated compliance checks", "Reduced processing time by 60%", "Zero security incidents"], note: "Details TBD — awaiting input" },
      { id: "3", industry: "Manufacturing", scale: "$500M revenue", results: ["Predictive maintenance model", "Decreased downtime by 25%", "Saved $2.4M annually"], note: "Details TBD — awaiting input" }
    ]
  }
};
