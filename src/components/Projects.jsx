import Reveal from './Reveal'

const projects = [
  {
    title: 'url shortener',
    description: 'create short links that redirect to your original URLs',
    liveUrl: 'https://url-shortener-seanlumasag.vercel.app',
    sourceUrl: 'https://github.com/seanlumasag/url-shortener',
  },
  {
    title: 'image processor',
    description: 'upload images for batch resizing and conversion to WebP',
    liveUrl: 'https://image-processor-seanlumasag.vercel.app',
    sourceUrl: 'https://github.com/seanlumasag/image-processor',
  },
  {
    title: 'live chat',
    description: 'send and receive messages in real time',
    liveUrl: 'https://livechat-seanlumasag.vercel.app',
    sourceUrl: 'https://github.com/seanlumasag/live-messaging-app',
  },
]

const ProjectEntry = ({ project, delay }) => (
  <Reveal as="article" className="project-entry" delay={delay}>
    <div className="project-content">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-actions">
        <a className="project-link project-link--primary" href={project.liveUrl} target="_blank" rel="noreferrer">
          live site
        </a>
        <a className="project-link" href={project.sourceUrl} target="_blank" rel="noreferrer">
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
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectEntry key={project.title} project={project} delay={index * 70} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
