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
  title: 'AI & Full Stack Engineer · 4+ years shipping production systems',
  tagline:
    'I build production systems where mistakes are expensive — financial software, tax-compliance engines, and AI agents running real workloads.',
  availability: 'Open to remote work · Brazil (UTC−3)',
}

export const ABOUT = [
  "I bring the discipline of regulated financial software to AI. For 4+ years I've engineered the ERP at Viggo Sistemas — a GPTW-certified retail-tech company (founded 2009) whose POS and fiscal platform runs 5,000+ retailers across 16 Brazilian states. I ship the high-stakes parts: e-invoicing (NF-e, NFC-e), Brazil's CBS/IBS tax reform, SPED and financial reporting — software where a bug costs a store real money, not just a failed test.",
  'I bring that same production mindset to AI. I build and ship multi-agent systems on the Claude API — orchestration, RAG and MCP servers — with guardrails, observability and human-in-the-loop. My latest SaaS runs in production on a custom domain with a real database behind it, not a notebook demo.',
]

export const PROJECTS: Project[] = [
  {
    name: 'recepia',
    blurb:
      'Multi-tenant SaaS that turns a clinic’s WhatsApp into an AI receptionist — it confirms, reschedules and books appointments automatically, classifying each patient reply with an LLM (with a deterministic fallback).',
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
  { label: 'DevOps', items: ['Docker', 'GitHub Actions', 'Nginx', 'Git'] },
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
    period: '2021 — Present',
    note: 'GPTW-certified retail-tech ERP (founded 2009) — POS, fiscal and payments for 5,000+ retailers across 16 Brazilian states.',
    bullets: [
      'Ship critical ERP features used by 5,000+ retailers across 16 Brazilian states: e-invoicing (NF-e, NFC-e, MDF-e), POS and financial reporting.',
      "Implemented Brazil's tax reform (CBS/IBS) and SPED modules — high-stakes fiscal logic where bugs cost money.",
      'Build internal AI tooling with the Claude API: multi-agent squads, automation and developer workflows.',
      'Advanced PostgreSQL (triggers, procedures, 50+ tables) across a production system with 400+ commits.',
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
