import { useEffect, useState } from 'react'
import './App.css'
import { Experience, Hero, Projects, Skills, TerminalCard } from './components'

const DOT_GRID_SIZE = 24
const PARALLAX_RATE = 0.055

function App() {
  const [theme, setTheme] = useState(() => {
    const stored = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    return stored ?? (prefersDark ? 'dark' : 'light')
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const background = document.querySelector('.ambient-background')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const compactViewport = window.matchMedia('(max-width: 700px)')
    let animationFrame = null

    const updateBackground = () => {
      animationFrame = null

      if (!background || reduceMotion.matches || compactViewport.matches) {
        background?.style.setProperty('--parallax-offset', '0px')
        return
      }

      const offset = (window.scrollY * PARALLAX_RATE) % DOT_GRID_SIZE
      background.style.setProperty('--parallax-offset', `${offset}px`)
    }

    const requestUpdate = () => {
      if (animationFrame !== null) return
      animationFrame = window.requestAnimationFrame(updateBackground)
    }

    updateBackground()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    reduceMotion.addEventListener('change', requestUpdate)
    compactViewport.addEventListener('change', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      reduceMotion.removeEventListener('change', requestUpdate)
      compactViewport.removeEventListener('change', requestUpdate)

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    window.localStorage.setItem('theme', next)
    setTheme(next)
  }

  return (
    <div className="app" id="top">
      <div className="ambient-background" aria-hidden="true" />
      <header className="top-nav">
        <nav className="top-nav-inner" aria-label="Primary">
          <div className="top-nav-links">
            <a href="#projects">projects</a>
            <a href="#experience">experience</a>
            <a href="#skills">skills</a>
          </div>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.7 15.1A8.4 8.4 0 0 1 8.9 3.3 8.5 8.5 0 1 0 20.7 15.1Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            )}
          </button>
        </nav>
      </header>
      <div className="page">
        <Hero />
        <TerminalCard />
        <Projects />
        <Experience />
        <Skills />
      </div>
      <footer className="footer">
        <div className="footer-inner">
          <p>© 2026 sean lumasag. all rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
