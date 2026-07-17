const fullName = 'Sean Lumasag'

const Hero = () => {
  return (
    <section id="hero" className="section hero">
      <h1 className="hero-name">{fullName}</h1>
      <div className="lead-block">
        <p>I am a software engineer who builds backend systems.</p>
        <p>
          Check out my <a href="#projects">projects</a> below.
        </p>
      </div>
    </section>
  )
}

export default Hero
