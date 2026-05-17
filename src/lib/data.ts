export const personal = {
  name: 'Rupesh Kumar V S',
  email: 'vsrupeshoffl@gmail.com',
  phone: '+91 8667641978',
  location: 'Chennai, India',
  linkedin: 'https://linkedin.com/in/rupeshkumarvs',
  github: 'https://github.com/vsrupeshkumar',
  university: 'Chennai Institute of Technology',
  degree: 'B.E. Computer Science Engineering',
  year: '3rd Year',
  resumeUrl: '/resume.pdf',
};

export const typingPhrases = [
  'Engineering ZKredit - ZK credit protocol',
  'Building RL benchmarks for LLM agents',
  'LeetCode Knight - Top 3.51% worldwide',
  'Open Source - MIT Licensed',
  'Chennai to Taiwan to Germany to France',
];

export const projects = [
  {
    id: 'zkredit',
    name: 'ZKREDIT',
    tagline: 'Autonomous agents negotiate credit. Financials stay private forever.',
    description: 'Decentralized lending protocol with ZK proofs and Hydra execution.',
    tech: ['TypeScript', 'Solidity', 'Hydra', 'ZK Proofs', 'WebSockets'],
    category: 'web3',
    chip: 'Web3 - ZK Proofs',
    chipColor: 'violet',
    github: 'https://github.com/vsrupeshkumar/ZKredit',
    span: 'full',
  },
  {
    id: 'adaptive-crisis',
    name: 'ADAPTIVE CRISIS OPENENV',
    tagline: 'RL benchmark for stress-testing LLM agents in disaster scenarios.',
    description: 'Non-stationary POMDP evaluating LLM crisis-triage under FEMA constraints.',
    tech: ['Python', 'LLaMA-3', 'POMDP', 'RL', 'JavaScript'],
    category: 'ai',
    chip: 'AI / ML - Research',
    chipColor: 'teal',
    github: 'https://github.com/vsrupeshkumar/Adaptive-crisis-openenv',
    span: 'half',
  },
  {
    id: 'stock-regime',
    name: 'STOCK REGIME DETECTOR',
    tagline: 'Detects market regimes before they become obvious.',
    description: 'Quantitative engine using HMM and RL for adaptive portfolio construction.',
    tech: ['Python', 'HMM', 'RL', 'Explainable AI'],
    category: 'ai',
    chip: 'AI / ML - Quant',
    chipColor: 'teal',
    github: 'https://github.com/vsrupeshkumar/Stock-Regime-Detector',
    span: 'half',
  },
  {
    id: 'hephaestus',
    name: 'HEPHAESTUS',
    tagline: 'Production-grade SaaS auth and governance platform.',
    description: 'Complete auth platform with OAuth, RBAC, and containerized Postgres.',
    tech: ['FastAPI', 'Next.js', 'PostgreSQL', 'OAuth', 'JWT', 'Docker'],
    category: 'fullstack',
    chip: 'Full Stack - SaaS',
    chipColor: 'orange',
    github: 'https://github.com/vsrupeshkumar/Hephaestus',
    span: 'half',
  },
  {
    id: 'tda-logistics',
    name: 'TDA-LOGISTICS',
    tagline: 'Supply-chain anomalies detected using topological data analysis.',
    description: 'Dynamic simplicial complexes for structural disruption detection.',
    tech: ['Python', 'TDA', 'Persistent Homology', 'Graph Analysis'],
    category: 'research',
    chip: 'Research - ML',
    chipColor: 'violet',
    github: 'https://github.com/vsrupeshkumar/TDA-Logistics',
    span: 'half',
  },
  {
    id: 'metarag',
    name: 'METARAG KERNEL ENGINE',
    tagline: 'Zotero library as a reasoning engine with source citation.',
    description: 'Hybrid retrieval combining dense vectors with metadata filters.',
    tech: ['Python', 'RAG', 'Vector DBs', 'LLM', 'Dense Retrieval'],
    category: 'ai',
    chip: 'AI / ML - RAG',
    chipColor: 'teal',
    github: 'https://github.com/vsrupeshkumar/MetaRag-Kernel-Engine',
    span: 'full',
  },
];

export const skills = [
  {
    number: '01',
    domain: 'Languages',
    items: 'Python, TypeScript, JavaScript, Java, C++, Go, Solidity, PHP, HTML5, CSS3, Lua',
  },
  {
    number: '02',
    domain: 'AI / ML / Data',
    items: 'LangChain, RAG, Vector Databases, LLM Agents, Reinforcement Learning, POMDPs, TDA, Probabilistic Modeling, Pandas, NumPy',
  },
  {
    number: '03',
    domain: 'Frontend & Full Stack',
    items: 'React, Next.js, Node.js, Tailwind CSS, REST APIs, WebSockets, Redux, Flutter BLoC',
  },
  {
    number: '04',
    domain: 'Backend & Systems',
    items: 'FastAPI, Laravel, OAuth, JWT, Cookie Sessions, System Design, Authentication',
  },
  {
    number: '05',
    domain: 'Databases',
    items: 'PostgreSQL, MySQL, MongoDB, Firebase, Vector Stores',
  },
  {
    number: '06',
    domain: 'Web3 / Blockchain',
    items: 'Ethereum, Solidity, Smart Contracts, Zero-Knowledge Proofs, Hydra',
  },
  {
    number: '07',
    domain: 'Cloud & DevOps',
    items: 'AWS, Azure, Google Cloud, Docker, Kubernetes, Linux CLI, Git',
  },
  {
    number: '08',
    domain: 'Hardware & IoT',
    items: 'Arduino, Raspberry Pi, Jetson Nano',
  },
  {
    number: '09',
    domain: 'Competitive Programming',
    items: 'LeetCode Knight, Codeforces Specialist, CodeChef 4-Star',
  },
];

export const experience = [
  {
    number: '01',
    title: 'SUMMER INTERN',
    company: 'Indian Bank',
    period: 'May 2026 - June 2026',
    location: 'Chennai',
    description: 'Core banking workflows and regulatory compliance in FinTech.',
    tags: ['FinTech', 'Banking', 'Infrastructure'],
  },
  {
    number: '02',
    title: 'FULL STACK SDE INTERN',
    company: 'L2M Consulting',
    period: 'January 2026 - March 2026',
    location: 'On-site',
    description: 'Backend features, auth flows, schema design, and query optimizations.',
    tags: ['Backend', 'PostgreSQL', 'MySQL', 'Auth', 'Agile'],
  },
  {
    number: '03',
    title: 'DATA ANALYST INTERN',
    company: 'STRAIVE',
    period: 'October 2025 - November 2025',
    location: 'On-site',
    description: 'Data validation, analysis, and Excel automation workflows.',
    tags: ['Data', 'Analytics', 'Automation', 'Reporting'],
  },
];

export const nav = {
  links: [
    { href: '#home', label: 'Home', plus: true },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ],
  social: {
    github: 'https://github.com/vsrupeshkumar',
    linkedin: 'https://linkedin.com/in/rupeshkumarvs',
    email: 'vsrupeshoffl@gmail.com',
  },
};
