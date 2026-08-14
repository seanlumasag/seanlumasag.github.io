import ProgressiveCardStack from './ProgressiveCardStack'
import Reveal from './Reveal'

const projects = [
  {
    title: 'url shortener',
    image: '/project-url-shortener.png',
    imageAlt: 'URL Shortener landing page with link input and platform features',
    liveUrl: 'https://url-shortener-seanlumasag.vercel.app',
    sourceUrl: 'https://github.com/seanlumasag/url-shortener',
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Flyway'],
  },
  {
    title: 'image processor',
    image: '/project-image-processor.png',
    imageAlt: 'Image Processor upload screen with output-size controls',
    liveUrl: 'https://image-processor-seanlumasag.vercel.app',
    sourceUrl: 'https://github.com/seanlumasag/image-processor',
    technologies: ['TypeScript', 'NestJS', 'React', 'PostgreSQL', 'BullMQ', 'Redis'],
  },
  {
    title: 'live chat',
    image: '/project-live-chat.png',
    imageAlt: 'Live Chat public conversation interface in dark mode',
    liveUrl: 'https://livechat-seanlumasag.vercel.app',
    sourceUrl: 'https://github.com/seanlumasag/live-messaging-app',
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'WebSockets', 'STOMP'],
  },
]

const ProjectCard = ({ project, delay }) => (
  <Reveal as="article" className="project-card project-card--visual" delay={delay}>
    <div className="project-content">
      <h3>{project.title}</h3>
      <a
        className="project-media"
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title} live site`}
      >
        <img
          className="project-media-image"
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          width="1280"
          height="720"
        />
      </a>
      <ul className="project-tech" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <div className="project-actions">
        <a className="btn primary" href={project.liveUrl} target="_blank" rel="noreferrer">
          live site
        </a>
        <a className="btn ghost" href={project.sourceUrl} target="_blank" rel="noreferrer">
          view source
        </a>
      </div>
    </div>
  </Reveal>
)

const Projects = () => {
  return (
    <section id="projects" className="section projects portfolio-section">
      <div className="projects-inner">
        <Reveal className="projects-header">
          <h2>explore my projects.</h2>
        </Reveal>
        <ProgressiveCardStack itemLabel="project">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} delay={index * 70} />
          ))}
        </ProgressiveCardStack>
      </div>
    </section>
  )
}

export default Projects
