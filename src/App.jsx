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
          <div className="top-nav-links">
            <a href="#projects">projects</a>
            <a href="#experience">experience</a>
            <a href="#skills">skills</a>
          </div>
          <label className="theme-toggle" aria-label="Toggle color theme">
            <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <span className="theme-slider" aria-hidden="true" />
          </label>
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
