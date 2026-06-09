import { SOCIALS, HERO } from '../data/content'
import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon } from './icons'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="reveal flex flex-col items-center rounded-3xl border border-border bg-surface px-6 py-16 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{HERO.availability}</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let's build something where it matters.
          </h2>
          <p className="mt-5 max-w-md text-base text-muted">
            Based in Brazil (UTC−3), comfortable working across time zones. Open to remote roles, worldwide.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${SOCIALS.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-display text-sm font-bold text-bg transition-transform hover:-translate-y-0.5"
            >
              <MailIcon className="h-4 w-4" />
              Gmail
            </a>
            <a
              href={SOCIALS.cv}
              download
              className="inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-5 py-3 font-display text-sm font-semibold text-accent transition-colors hover:bg-accent/20"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 font-display text-sm font-semibold transition-colors hover:border-accent2 hover:text-accent2"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 font-display text-sm font-semibold transition-colors hover:border-accent2 hover:text-accent2"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 sm:flex-row">
          <p className="font-mono text-xs text-faint">© 2026 Ewerton Silva</p>
          <p className="font-mono text-xs text-faint">Built with React, Vite &amp; Tailwind</p>
        </footer>
      </div>
    </section>
  )
}
