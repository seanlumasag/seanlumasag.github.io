const fullName = 'sean lumasag'

const Hero = () => {
  return (
    <section id="hero" className="section hero">
      <h1 className="hero-name">{fullName}</h1>
      <div className="lead-block">
        <p className="hero-credentials">
          <span>cs + ds @ rutgers university</span>
          <span className="hero-credentials-divider" aria-hidden="true">
            |
          </span>
          <span>swe intern @ heller industries</span>
        </p>
        <p>i am a software engineer who builds backend systems.</p>
        <p>
          check out my <a href="#projects">projects</a> below.
        </p>
      </div>
    </section>
  )
}

export default Hero
