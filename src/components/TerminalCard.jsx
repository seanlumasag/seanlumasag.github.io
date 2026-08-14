import Reveal from './Reveal'

const contactItems = [
  {
    label: 'seanlumasag15@gmail.com',
    href: 'mailto:seanlumasag15@gmail.com',
  },
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/seanlumasag/',
    external: true,
  },
  {
    label: 'github',
    href: 'https://github.com/seanlumasag',
    external: true,
  },
]

const languageItems = ['Java', 'C#', 'TypeScript', 'Python'].map((label) => ({
  label,
}))

const TerminalArray = ({ items, className = '' }) => (
  <p className={`terminal-array ${className}`.trim()}>
    <span className="terminal-array-bracket">[</span>
    <span className="terminal-array-items">
      {items.map((item, index) => (
        <span className="terminal-array-item" key={item.label}>
          <span className="terminal-quote">&quot;</span>
          {item.href ? (
            <a
              className="terminal-link"
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
            >
              {item.label}
            </a>
          ) : (
            item.label
          )}
          <span className="terminal-quote">&quot;</span>
          {index < items.length - 1 && (
            <span className="terminal-array-separator">, </span>
          )}
        </span>
      ))}
    </span>
    <span className="terminal-array-bracket">]</span>
  </p>
)

const TerminalCard = () => {
  return (
    <Reveal as="section" className="section terminal-section">
      <div className="terminal-card">
        <div className="terminal-bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="terminal-body">
          <p>&gt; sean.contact</p>
          <TerminalArray items={contactItems} />
          <p>&nbsp;</p>
          <p>&gt; sean.resume</p>
          <p>
            <span className="terminal-quote">&quot;</span>
            <a
              className="terminal-link"
              href="/resume/"
              target="_blank"
              rel="noreferrer"
            >
              resume.pdf
            </a>
            <span className="terminal-quote">&quot;</span>
          </p>
          <p>&nbsp;</p>
          <p>&gt; sean.graduation</p>
          <p>
            <span className="terminal-quote">&quot;</span>
            expected december 2027
            <span className="terminal-quote">&quot;</span>
          </p>
          <p>&nbsp;</p>
          <p>&gt; sean.languages</p>
          <TerminalArray items={languageItems} />
        </div>
      </div>
    </Reveal>
  )
}

export default TerminalCard
