import { useEffect, useState } from 'react'
import './App.css'
import { Experience, Hero, Projects, Skills, TerminalCard } from './components'

function App() {
  const [theme, setTheme] = useState(() => {
    const stored = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    return stored ?? (prefersDark ? 'dark' : 'light')
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    window.localStorage.setItem('theme', next)
    setTheme(next)
  }

  return (
    <div className="app" id="top">
      <header className="top-nav">
        <nav className="top-nav-inner" aria-label="Primary">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
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
          <label className="theme-toggle" aria-label="Toggle color theme">
            <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <span className="theme-slider" aria-hidden="true" />
          </label>
          <p>© 2026 Sean Lumasag. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
