const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="projects-inner">
        <div className="projects-header">
          <h2>Explore my projects.</h2>
        </div>
        <div className="project-stack">
          <article className="project-card">
            <div className="project-content">
              <h3>URL Shortener</h3>
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
                  Live Demo
                </a>
                <a
                  className="btn ghost"
                  href="https://github.com/seanlumasag/url-shortener"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>Image Processor</h3>
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
                  Live Demo
                </a>
                <a
                  className="btn ghost"
                  href="https://github.com/seanlumasag/image-processor"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>Live Chat</h3>
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
                  Live Demo
                </a>
                <a
                  className="btn ghost"
                  href="https://github.com/seanlumasag/live-messaging-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects
