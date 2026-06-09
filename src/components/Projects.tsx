import type { MouseEvent } from 'react'
import { PROJECTS, type Project } from '../data/content'
import SectionHeader from './SectionHeader'
import { ArrowIcon } from './icons'

function handleGlow(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function ProjectCard({ project }: { project: Project }) {
  const featured = !!project.featured
  const primary = project.links[0]

  return (
    <article
      onMouseMove={featured ? handleGlow : undefined}
      className={`reveal group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-[rgba(15,15,30,0.6)] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] ${
        featured ? 'glow-card sm:col-span-2 sm:flex-row sm:items-center sm:gap-8 sm:p-8' : ''
      }`}
    >
      {featured && project.image && (
        <div className="order-first overflow-hidden rounded-xl border border-border sm:order-last sm:w-1/2 sm:shrink-0">
          <img
            src={project.image}
            alt={`${project.name} — live product screenshot`}
            loading="lazy"
            className="w-full"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-1">
      <div className="flex items-start justify-between gap-3">
        <h3 className={`font-display font-bold tracking-tight ${featured ? 'text-2xl' : 'text-lg'}`}>
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            {project.name}
          </a>
        </h3>
        {project.highlight && (
          <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-accent">
            {project.highlight}
          </span>
        )}
      </div>

      <p
        className={`flex-1 leading-relaxed text-muted ${featured ? 'max-w-2xl text-base' : 'text-sm'}`}
      >
        {project.blurb}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-[0.7rem] text-faint"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-5 border-t border-border pt-4">
        {project.year && (
          <span className="font-mono text-[0.7rem] text-faint">{project.year}</span>
        )}
        {project.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 font-mono text-xs transition-colors ${
              l.kind === 'demo' || l.kind === 'npm' ? 'text-accent hover:text-ink' : 'text-muted hover:text-ink'
            }`}
          >
            {l.label}
            <ArrowIcon className="h-3 w-3 -rotate-45" />
          </a>
        ))}
      </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="work" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="02" title="Featured work" />
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
