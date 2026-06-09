import { ABOUT } from '../data/content'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="01" title="About" />
        <div className="grid gap-6 md:grid-cols-2">
          {ABOUT.map((p, i) => (
            <p
              key={i}
              className="reveal text-base leading-relaxed text-muted"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
