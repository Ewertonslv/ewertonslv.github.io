import { STACK } from '../data/content'
import SectionHeader from './SectionHeader'

export default function Stack() {
  return (
    <section id="stack" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="03" title="Stack & skills" />
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {STACK.map((group, i) => (
            <div
              key={group.label}
              className="reveal"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
