export const identity = {
  name: "Rupesh Kumar V S",
  handle: "vsrupeshkumar",
  email: "vsrupeshoffl@gmail.com",
  phone: "+91 8667641978",
  location: "Chennai, India",
  linkedin: "https://linkedin.com/in/rupeshkumarvs",
  github: "https://github.com/vsrupeshkumar",
  school: "Chennai Institute of Technology",
  degree: "B.E. Computer Science Engineering · 2024–2028",
};

export const typingPhrases = [
  "Engineering ZKredit — ZK credit protocol",
  "Building RL benchmarks for LLM agents",
  "LeetCode Knight · Top 3.51% worldwide",
  "Open Source · MIT Licensed",
  "Chennai → Taiwan → Germany → France",
];

export const heroCopy = {
  line1: "BUILDING AT THE",
  line2: "EDGE OF WHAT'S",
  line3: "POSSIBLE.",
  body: "I build systems at the intersection of AI research, decentralized protocols, and full-stack engineering — the kind of systems that don't exist yet. 3rd year CSE at Chennai Institute of Technology.",
};

export type ProjectBg = "zk" | "pomdp" | "regime" | "stack" | "topology" | "vectors" | "neural";

export type Project = {
  id: string;
  name: string;
  tagline: string;
  category: string;
  chip: { label: string; variant: "teal" | "violet" | "orange" };
  tech: string[];
  href: string;
  span: "full" | "half";
  bg: ProjectBg;
};

export const projects: Project[] = [
  {
    id: "zkredit",
    name: "ZKredit",
    tagline: "Autonomous agents negotiate credit. Your financials stay private forever.",
    category: "web3",
    chip: { label: "Web3 · ZK Proofs", variant: "violet" },
    tech: ["TypeScript", "Solidity", "Hydra", "ZK Proofs", "WebSockets"],
    href: "https://github.com/vsrupeshkumar/ZKredit",
    span: "full",
    bg: "zk",
  },
  {
    id: "crisis",
    name: "Adaptive Crisis OpenEnv",
    tagline: "RL benchmark built to stress-test LLM agents in real disaster scenarios.",
    category: "ai",
    chip: { label: "AI / ML · Research", variant: "teal" },
    tech: ["Python", "LLaMA-3", "POMDP", "RL", "JavaScript"],
    href: "https://github.com/vsrupeshkumar/Adaptive-crisis-openenv",
    span: "half",
    bg: "pomdp",
  },
  {
    id: "regime",
    name: "Stock Regime Detector",
    tagline: "Detects if the market is trending, mean-reverting, or in crisis — before it's obvious.",
    category: "ai",
    chip: { label: "AI / ML · Quant", variant: "teal" },
    tech: ["Python", "HMM", "RL", "Explainable AI"],
    href: "https://github.com/vsrupeshkumar/Stock-Regime-Detector",
    span: "half",
    bg: "regime",
  },
  {
    id: "hephaestus",
    name: "Hephaestus",
    tagline: "Production-grade SaaS auth and governance. The boring parts, done right.",
    category: "fullstack",
    chip: { label: "Full Stack · SaaS", variant: "orange" },
    tech: ["FastAPI", "Next.js", "PostgreSQL", "OAuth", "JWT", "Docker"],
    href: "https://github.com/vsrupeshkumar/Hephaestus",
    span: "half",
    bg: "stack",
  },
  {
    id: "tda",
    name: "TDA-Logistics",
    tagline: "Supply-chain anomalies detected using topology. Before they cascade.",
    category: "research",
    chip: { label: "Research · ML", variant: "violet" },
    tech: ["Python", "TDA", "Persistent Homology", "Graph Analysis"],
    href: "https://github.com/vsrupeshkumar/TDA-Logistics",
    span: "half",
    bg: "topology",
  },
  {
    id: "metarag",
    name: "MetaRag Kernel Engine",
    tagline: "Turns your Zotero research library into a reasoning engine that cites its sources.",
    category: "ai",
    chip: { label: "AI / ML · RAG", variant: "teal" },
    tech: ["Python", "RAG", "Vector DBs", "LLM", "Dense Retrieval"],
    href: "https://github.com/vsrupeshkumar/MetaRag-Kernel-Engine",
    span: "full",
    bg: "vectors",
  },
];

export const filters = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI / ML" },
  { id: "web3", label: "Web3" },
  { id: "fullstack", label: "Full Stack" },
  { id: "research", label: "Research" },
  { id: "opensource", label: "Open Source" },
];

export type WhatIBuild = { n: string; title: string; desc: string; tags: string[]; bg: ProjectBg };

export const whatIBuild: WhatIBuild[] = [
  {
    n: "01",
    title: "Websites, Apps & Digital Products",
    desc: "Full-stack web applications and interfaces — from authentication systems and SaaS platforms to API-driven backends and real-time WebSocket services.",
    tags: ["Full Stack App", "SaaS Platform", "REST API", "Real-Time", "Auth System"],
    bg: "stack",
  },
  {
    n: "02",
    title: "AI / ML Systems",
    desc: "Reinforcement learning environments, RAG pipelines, LLM agents, vector retrieval engines, Hidden Markov Models, and quantitative regime-detection systems.",
    tags: ["LLM Agent", "RAG Pipeline", "RL Environment", "Vector DB", "Quant ML"],
    bg: "neural",
  },
  {
    n: "03",
    title: "Web3 & Decentralized Protocols",
    desc: "Zero-knowledge proof systems, smart contracts, decentralized lending protocols with multi-agent negotiation, and Hydra-powered execution layers.",
    tags: ["ZK Proofs", "Smart Contract", "Ethereum", "Hydra", "Multi-Agent"],
    bg: "zk",
  },
  {
    n: "04",
    title: "Research & Advanced Systems",
    desc: "Topological data analysis for logistics anomaly detection, POMDPs for crisis-triage evaluation, probabilistic modeling, and explainable AI dashboards.",
    tags: ["TDA", "POMDP", "Persistent Homology", "Probabilistic", "XAI"],
    bg: "topology",
  },
];

export const skills = [
  { n: "01", domain: "Languages", items: "Python · TypeScript / JavaScript · Java · C++ · Go · Solidity · PHP · HTML5 · CSS3 · Lua" },
  { n: "02", domain: "AI / ML / Data", items: "LangChain · RAG · Vector Databases · LLM Agents · Reinforcement Learning · POMDPs · TDA · Probabilistic Modeling · Pandas · NumPy · Matplotlib · Prompt Engineering" },
  { n: "03", domain: "Frontend & Full Stack", items: "React · Next.js · Node.js · Tailwind CSS · REST APIs · WebSockets · State Management (Redux, Flutter BLoC, Provider)" },
  { n: "04", domain: "Backend & Systems", items: "FastAPI · Laravel · OAuth · JWT · Cookie Sessions · System Design · Authentication Architecture" },
  { n: "05", domain: "Databases", items: "PostgreSQL · MySQL · MongoDB · Firebase · Vector Stores" },
  { n: "06", domain: "Web3 / Blockchain", items: "Ethereum · Solidity · Smart Contracts · Zero-Knowledge Proofs · Hydra" },
  { n: "07", domain: "Cloud & DevOps", items: "AWS · Azure · Google Cloud · Docker · Kubernetes · Linux CLI · Git · GitHub · GitLab" },
  { n: "08", domain: "Hardware & IoT", items: "Arduino · Raspberry Pi · Jetson Nano" },
  { n: "09", domain: "Competitive Programming", items: "LeetCode Knight (peak 1938, top 3.51%) · Codeforces Specialist (1500+) · CodeChef 4-Star (1674) · 1100+ problems solved" },
  { n: "10", domain: "Tools & Automation", items: "Postman · Figma · Prettier · openclaw · n8n" },
  { n: "11", domain: "Spoken Languages", items: "English (Professional) · German (A1, in progress) · Japanese (N5, in progress)" },
];

export const experience = [
  {
    n: "01",
    title: "Summer Intern",
    company: "Indian Bank",
    date: "May 2026 – June 2026 · On-site, Chennai",
    desc: "Gained practical exposure to core banking workflows, transaction processing systems, and regulatory compliance frameworks in a large public-sector FinTech environment.",
    tags: ["FinTech", "Banking Systems", "Digital Infrastructure"],
  },
  {
    n: "02",
    title: "Full Stack SDE Intern — Backend Engineering",
    company: "L2M (a subsidiary of Boston Harbor Consulting)",
    date: "January 2026 – March 2026 · On-site",
    desc: "Built and shipped backend features for government and enterprise applications used by international clients. Implemented authentication flows, PostgreSQL/MySQL schema design, query optimizations. Participated in Agile sprints and code reviews, improving API response times through targeted refactoring.",
    tags: ["Backend", "PostgreSQL", "MySQL", "Auth Flows", "Agile"],
  },
  {
    n: "03",
    title: "Intern — Data Analyst",
    company: "STRAIVE",
    date: "October 2025 – November 2025 · On-site",
    desc: "Cleaned, validated, and analyzed enterprise datasets to improve data accuracy and downstream reporting reliability. Authored reusable Excel automation workflows reducing manual processing time on recurring deliverables.",
    tags: ["Data", "Analytics", "Excel Automation", "Reporting"],
  },
];

export const programs = [
  {
    flag: "🇹🇼",
    loc: "Taiwan · Taipei",
    date: "July 2026",
    inst: "MCUT · NVIDIA",
    desc: "International academic and research sessions exploring AI systems, engineering research, and industry opportunities across Taiwan's deep tech ecosystem — including sessions with NVIDIA.",
    tags: ["AI Systems", "Research", "NVIDIA"],
  },
  {
    flag: "🇫🇷",
    loc: "France · Créteil",
    date: "June 22–26, 2026",
    inst: "UPEC · Space Academy",
    desc: "Selected Participant, “Build Your Own Satellite in 5 Days” International Summer School. Participated in an intensive hands-on program focused on satellite systems, space technology, and aerospace innovation.",
    tags: ["Satellite Systems", "Space Tech", "Aerospace"],
  },
  {
    flag: "🇩🇪",
    loc: "Germany · Munich",
    date: "March 2025",
    inst: "BMW · Airbus · VW · Porsche · TU Munich",
    desc: "Engaged with leading automotive and aerospace firms. Observed manufacturing AI, automation, and vehicle design systems. Visited Technical University of Munich to study advanced engineering research environments.",
    tags: ["Manufacturing AI", "Automotive", "TU Munich", "Aerospace"],
  },
  {
    flag: "🇫🇷",
    loc: "France · Paris / Lille",
    date: "March 2025",
    inst: "UPEC · University of Lille",
    desc: "Attended specialized academic and research sessions at leading French research universities, exploring data science and AI research opportunities in Europe.",
    tags: ["Data Science", "AI Research", "European Academia"],
  },
];

export const logoRowA = ["MCUT", "NVIDIA", "BMW", "Airbus", "Volkswagen Autostadt", "Porsche", "TU Munich"];
export const logoRowB = ["Messe München", "UPEC", "University of Lille", "Chennai Institute of Technology", "Indian Bank", "L2M", "STRAIVE"];

export const certifications = [
  { issuer: "EO College / ESA", name: "ML for Earth Observation · 2025" },
  { issuer: "Cisco Networking Academy", name: "CCNA · Modern AI · Data Science · Cybersecurity · JS Essentials" },
  { issuer: "MongoDB University", name: "MongoDB Basics for Students" },
  { issuer: "Toastmasters International", name: "Active Member · Public Speaking & Debates" },
  { issuer: "Youth Talk 2025", name: "Regional Semi-Finalist" },
];

export const faq = [
  {
    q: "What kinds of projects are you available for?",
    a: "I'm available for AI/ML engineering internships, full-stack SDE roles, research collaborations, and open-source partnerships. I'm particularly interested in projects at the intersection of LLM systems, decentralized protocols, or quantitative systems — but I bring strong fundamentals across the full stack.",
  },
  {
    q: "What's your current availability?",
    a: "I'm a 3rd-year CSE student (graduating 2028), currently available for internships, part-time collaborations, and research partnerships. My schedule is flexible — I work across time zones and have prior on-site experience at multiple companies.",
  },
  {
    q: "Can you work on a project from scratch?",
    a: "Yes. I've built everything from ZK credit protocols and RL research environments to full-stack SaaS auth platforms and RAG knowledge engines — all from zero. I'm comfortable owning architecture, backend, frontend, and deployment.",
  },
  {
    q: "What's your experience with AI/ML?",
    a: "I work with LangChain, RAG pipelines, vector databases, LLM agents, reinforcement learning environments, Hidden Markov Models, probabilistic modeling, and topological data analysis. I've built benchmark environments released for the open-source research community.",
  },
  {
    q: "Are you comfortable with Web3 and blockchain?",
    a: "Yes. ZKredit — my flagship Web3 project — is a decentralized lending protocol with zero-knowledge proofs, multi-agent negotiation, and Hydra-powered fee-less settlement. I'm fluent in Solidity, Ethereum, and ZK proof systems.",
  },
  {
    q: "How fast can you move on a project?",
    a: "Fast. I've delivered backend systems, shipped internship work in Agile sprints, and iterated on research projects concurrently. I'm comfortable with tight deadlines and clear deliverables.",
  },
  {
    q: "Do you contribute to open source?",
    a: "Actively. All six of my flagship projects are open source under MIT license. I believe in building in public and contributing to the research and developer community.",
  },
  {
    q: "How do you approach learning new technologies?",
    a: "I build with them immediately. I don't spend time on tutorials alone — I throw myself into a hard project and learn by shipping. That's how I picked up Solidity, TDA, Go, and RL from scratch across different projects.",
  },
];
