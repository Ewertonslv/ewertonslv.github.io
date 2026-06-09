import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>

      <div
        className="orb"
        style={{ width: 560, height: 560, top: -200, right: -120, background: 'var(--color-accent2)' }}
      />
      <div
        className="orb"
        style={{ width: 400, height: 400, bottom: '8%', left: -140, background: 'var(--color-accent)', animationDelay: '4s' }}
      />

      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
