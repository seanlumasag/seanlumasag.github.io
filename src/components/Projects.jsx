import ProgressiveCardStack from './ProgressiveCardStack'

const Projects = () => {
  return (
    <section id="projects" className="section projects portfolio-section">
      <div className="projects-inner">
        <div className="projects-header">
          <h2>explore my projects.</h2>
        </div>
        <ProgressiveCardStack itemLabel="project">
          <article className="project-card">
            <div className="project-content">
              <h3>url shortener</h3>
              <p>
                Built a full-stack synchronous URL-shortening MVP with a
                React/Vite frontend and a Java 17/Spring Boot backend using
                PostgreSQL, JPA/Flyway, Redis, Spring Security, and Spring
                Actuator.
              </p>
              <ul className="project-tech">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>React</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>Flyway</li>
              </ul>
              <div className="project-actions">
                <a
                  className="btn primary"
                  href="https://url-shortener-seanlumasag.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  live site
                </a>
                <a
                  className="btn ghost"
                  href="https://github.com/seanlumasag/url-shortener"
                  target="_blank"
                  rel="noreferrer"
                >
                  view source
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>image processor</h3>
              <p>
                Built a full-stack asynchronous batch image-processing MVP
                with a React/Vite frontend and a TypeScript/NestJS backend
                using PostgreSQL, Redis/BullMQ, Supabase Storage, and Sharp.
              </p>
              <ul className="project-tech">
                <li>TypeScript</li>
                <li>NestJS</li>
                <li>React</li>
                <li>PostgreSQL</li>
                <li>BullMQ</li>
                <li>Redis</li>
              </ul>
              <div className="project-actions">
                <a
                  className="btn primary"
                  href="https://image-processor-seanlumasag.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  live site
                </a>
                <a
                  className="btn ghost"
                  href="https://github.com/seanlumasag/image-processor"
                  target="_blank"
                  rel="noreferrer"
                >
                  view source
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>live chat</h3>
              <p>
                Built a full-stack stateful messaging application with a
                React/Vite frontend and a Java/Spring Boot backend using
                PostgreSQL-oriented JPA persistence and SockJS/STOMP live
                delivery.
              </p>
              <ul className="project-tech">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>React</li>
                <li>PostgreSQL</li>
                <li>WebSockets</li>
                <li>STOMP</li>
              </ul>
              <div className="project-actions">
                <a
                  className="btn primary"
                  href="https://livechat-seanlumasag.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  live site
                </a>
                <a
                  className="btn ghost"
                  href="https://github.com/seanlumasag/live-messaging-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  view source
                </a>
              </div>
            </div>
          </article>
        </ProgressiveCardStack>
      </div>
    </section>
  )
}

export default Projects
