export type LinkKind = 'demo' | 'code' | 'npm'

export interface ProjectLink {
  label: string
  href: string
  kind: LinkKind
}

export interface Project {
  name: string
  blurb: string
  tags: string[]
  links: ProjectLink[]
  highlight?: string
  featured?: boolean
  year?: string
  image?: string
}

export const HERO = {
  name: 'Ewerton Silva',
  title: 'AI Engineer — LLM Systems, Agents & MCP',
  tagline:
    'I build production systems where mistakes are expensive — fiscal-compliance software, multi-agent LLM systems and MCP servers running real workloads.',
  availability: 'Open to remote work · Brazil (UTC−3)',
}

export const ABOUT = [
  'AI Engineer with 4+ years shipping production software, now focused on AI automations, agents and internal tools. I bring the discipline of regulated fiscal software — where a bug is a fine — to LLM systems: multi-agent orchestration and MCP on the Claude API, serverless on AWS, and full-stack delivery in TypeScript/Node and Python. I ship, not prototype — a merged fix in BerriAI/litellm and a published open-source MCP server.',
  "That production mindset comes from the ERP at Viggo Sistemas — a GPTW-certified retail-tech company (founded 2009) whose POS and fiscal platform runs 5,000+ retailers across 16 Brazilian states. I own its production PostgreSQL database (700+ tables), work daily in Brazil's high-stakes fiscal domain (NF-e, NFC-e, MDF-e, SPED, the CBS/IBS tax reform), and build the team's internal AI tooling as it shifts from Delphi to AI-assisted development.",
]

export const PROJECTS: Project[] = [
  {
    name: 'recepia',
    blurb:
      'Multi-tenant AI SaaS that books and confirms appointments over a clinic’s WhatsApp with LLM intent classification (deterministic fallback), a prompt-injection guardrail (OWASP LLM01), PII masking and cost/latency observability.',
    tags: ['FastAPI', 'PostgreSQL', 'Groq LLM', 'WhatsApp', 'LGPD'],
    highlight: 'Deployed & live',
    featured: true,
    year: '2026',
    image: '/recepia-agenda.png',
    links: [
      { label: 'Live demo', href: 'https://recepia.app.br', kind: 'demo' },
      { label: 'Code', href: 'https://github.com/Ewertonslv/recepia', kind: 'code' },
    ],
  },
  {
    name: 'evolution-whatsapp-mcp',
    blurb:
      'An open-source MCP server that gives Claude (and any MCP client) hands on WhatsApp via the Evolution API — send/read messages, media, and manage connections.',
    tags: ['TypeScript', 'MCP SDK', 'Node.js'],
    highlight: 'Published on npm',
    year: '2026',
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/evolution-whatsapp-mcp', kind: 'npm' },
      { label: 'Code', href: 'https://github.com/Ewertonslv/evolution-whatsapp-mcp', kind: 'code' },
    ],
  },
  {
    name: 'Monarch-IA',
    blurb:
      'A multi-agent orchestration platform on the Claude API: a 12-agent pipeline that turns a plain-language request into working code — gated by human approval, with per-agent circuit breakers and retry/backoff. I used it to build 7 small apps, all included in the repo.',
    tags: ['Python', 'FastAPI', 'Claude API', 'Docker'],
    highlight: '7 apps built with it',
    year: '2026',
    links: [{ label: 'Code', href: 'https://github.com/Ewertonslv/Monarch-IA', kind: 'code' }],
  },
  {
    name: 'scout',
    blurb:
      'A serverless multi-agent research pipeline on AWS: Step Functions fans out to Bedrock-powered Lambda agents (planner → workers → critic → synthesizer) that research a question in parallel and return a cited brief. Also exposed as an MCP server; runs on the free tier and deploys with one command.',
    tags: ['AWS Lambda', 'Step Functions', 'Bedrock', 'DynamoDB', 'SAM'],
    year: '2026',
    links: [{ label: 'Code', href: 'https://github.com/Ewertonslv/scout', kind: 'code' }],
  },
  {
    name: 'liveaula',
    blurb:
      'A full-stack EdTech monorepo — a Fastify API, a Next.js web app and a React Native (Expo) mobile app sharing one end-to-end typed contract. One source of truth, three clients.',
    tags: ['Next.js', 'Fastify', 'Expo', 'Prisma', 'TypeScript'],
    year: '2026',
    links: [{ label: 'Code', href: 'https://github.com/Ewertonslv/liveaula', kind: 'code' }],
  },
]

export interface StackGroup {
  label: string
  items: string[]
}

export const STACK: StackGroup[] = [
  { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Dart'] },
  { label: 'AI / LLM', items: ['Claude API', 'LLMs', 'RAG', 'MCP', 'Multi-Agent Systems', 'Prompt Engineering'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'React Native'] },
  { label: 'Backend', items: ['FastAPI', 'Node.js', 'Fastify', 'REST', 'WebSockets'] },
  { label: 'Data', items: ['PostgreSQL', 'Prisma', 'SQLAlchemy', 'Redis'] },
  { label: 'Cloud & DevOps', items: ['AWS (Lambda, Step Functions, DynamoDB, Bedrock, SAM)', 'Docker', 'GitHub Actions', 'Git'] },
]

export interface ExperienceItem {
  role: string
  company: string
  period: string
  note?: string
  bullets: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'Viggo Sistemas',
    period: '2022 — Present',
    note: 'GPTW-certified retail-tech ERP (founded 2009) — POS, fiscal and payments for 5,000+ retailers across 16 Brazilian states.',
    bullets: [
      'Built from scratch a delivery-control module with a kanban board to track orders through fulfillment.',
      'Led a large part of a 10-month migration that unified POS and Order sales logic and retired entire legacy modules.',
      'Designed and built a usage-analytics system from scratch — a client-side tracker, a custom authenticated Horse/Delphi API, and an aggregated-counter model in PostgreSQL (upsert, offline-safe local queue) — so screen keep/remove calls are driven by real usage data, not guesses.',
      "Work daily in Brazil's high-stakes fiscal domain — NF-e, NFC-e, MDF-e, SPED and the CBS/IBS tax reform — where a bug is a fine.",
      'Build internal AI tooling on the Claude API — multi-agent squads and developer-workflow automation — as the team shifts from Delphi to AI-assisted development.',
      'Own the production PostgreSQL database — 700+ tables (products, participants, fiscal, orders), triggers and stored procedures.',
    ],
  },
]

export const SOCIALS = {
  github: 'https://github.com/Ewertonslv',
  linkedin: 'https://www.linkedin.com/in/ewertonsllva/',
  email: 'ewertoncom297@gmail.com',
  cv: '/Ewerton-Silva-CV.pdf',
}

export const STATS = [
  { num: '4+', label: 'Years shipping production software' },
  { num: '5,000+', label: 'Retailers run on the ERP I build' },
  { num: 'npm', label: 'Open-source package published' },
  { num: 'Live', label: 'AI SaaS running in production' },
]
