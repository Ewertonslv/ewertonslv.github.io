import { HERO, SOCIALS, STATS } from '../data/content'
import { GitHubIcon, DownloadIcon } from './icons'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-28 pb-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-10 bg-accent" />
          {HERO.availability}
        </p>

        <h1 className="font-display text-[clamp(2.8rem,9vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight">
          {HERO.name.split(' ')[0]}
          <br />
          <span className="text-gradient">{HERO.name.split(' ').slice(1).join(' ')}</span>
        </h1>

        <p className="mt-6 text-lg text-muted">{HERO.title}</p>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{HERO.tagline}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-display text-sm font-bold text-bg transition-transform hover:-translate-y-0.5"
          >
            View work
          </a>
          <a
            href={SOCIALS.cv}
            download
            className="inline-flex items-center justify-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-6 py-3 font-display text-sm font-semibold text-accent transition-colors hover:bg-accent/20"
          >
            <DownloadIcon className="h-4 w-4" />
            Download CV
          </a>
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface px-6 py-3 font-display text-sm font-semibold transition-colors hover:border-accent2 hover:text-accent2"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>

        <dl className="mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-bg px-5 py-5">
              <dd className="font-display text-3xl font-extrabold text-accent">{s.num}</dd>
              <dt className="mt-1.5 text-xs leading-snug text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
