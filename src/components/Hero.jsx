import Reveal from './Reveal'

const fullName = 'sean lumasag'

const Hero = () => {
  return (
    <section id="hero" className="section hero">
      <Reveal as="h1" className="hero-name">
        {fullName}
      </Reveal>
      <Reveal className="lead-block" delay={80}>
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
      </Reveal>
    </section>
  )
}

export default Hero
