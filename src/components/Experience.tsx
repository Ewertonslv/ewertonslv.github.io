import { EXPERIENCE } from '../data/content'
import SectionHeader from './SectionHeader'

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="04" title="Experience" />
        <div className="flex flex-col gap-8">
          {EXPERIENCE.map((job) => (
            <div
              key={job.company}
              className="reveal rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-bold">
                  {job.role} <span className="text-muted">· {job.company}</span>
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  {job.period}
                </span>
              </div>
              {job.note && <p className="mt-2 text-xs leading-relaxed text-faint">{job.note}</p>}
              <ul className="mt-5 flex flex-col gap-3">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
