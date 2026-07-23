const TerminalCard = () => {
  return (
    <section className="section terminal-section">
      <div className="terminal-card">
        <div className="terminal-bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="terminal-body">
          <p>&gt; sean.contact</p>
          <p className="terminal-accent">
            [
            <span className="terminal-quote">&quot;</span>
            <a className="terminal-link" href="mailto:seanlumasag15@gmail.com">
              seanlumasag15@gmail.com
            </a>
            <span className="terminal-quote">&quot;</span>
            ,{' '}
            <span className="terminal-quote">&quot;</span>
            <a
              className="terminal-link"
              href="https://www.linkedin.com/in/seanlumasag/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <span className="terminal-quote">&quot;</span>
            ,{' '}
            <span className="terminal-quote">&quot;</span>
            <a
              className="terminal-link"
              href="https://github.com/seanlumasag"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <span className="terminal-quote">&quot;</span>
            ]
          </p>
          <p>&nbsp;</p>
          <p>&gt; sean.resume</p>
          <p className="terminal-accent">
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
          <p>&gt; sean.education</p>
          <p className="terminal-accent">
            &quot;Rutgers University–New Brunswick&quot;
          </p>
          <p>&nbsp;</p>
          <p>&gt; sean.languages</p>
          <p className="terminal-warm">
            [&quot;Java&quot;, &quot;C#&quot;, &quot;TypeScript&quot;,
            &quot;Python&quot;]
          </p>
          <p>&nbsp;</p>
        </div>
      </div>
    </section>
  )
}

export default TerminalCard
