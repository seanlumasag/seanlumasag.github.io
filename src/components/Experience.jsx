import ProgressiveCardStack from './ProgressiveCardStack'
import Reveal from './Reveal'

const experienceItems = [
  {
    role: 'software engineer intern',
    organization: 'Heller Industries',
    url: 'https://hellerindustries.com',
  },
  {
    role: 'software engineer intern',
    organization: 'Data Storytelling',
    url: 'https://devonmcguinness.com/',
  },
  {
    role: 'machine learning research assistant',
    organization: 'WINLAB',
    url: 'https://winlab.rutgers.edu',
  },
  {
    role: 'software engineer fellow',
    organization: 'Blueprint',
    url: 'https://www.linkedin.com/company/blueprint-rutgers/',
  },
  {
    role: 'web development intern',
    organization: 'TAG Online',
    url: 'https://tagonline.com',
  },
  {
    role: 'coding instructor',
    organization: 'Hadoop Express',
    url: 'https://www.linkedin.com/company/hadoop-express/',
  },
]

const Experience = () => {
  return (
    <section id="experience" className="section projects experience portfolio-section">
      <div className="projects-inner">
        <Reveal className="projects-header">
          <h2>view my experience.</h2>
        </Reveal>
        <ProgressiveCardStack itemLabel="experience">
          {experienceItems.map((item, index) => (
            <Reveal
              as="article"
              className="project-card experience-card"
              delay={index * 70}
              key={`${item.organization}-${item.role}`}
            >
              <div className="experience-card-content">
                <h3>{item.role}</h3>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.organization}
                </a>
              </div>
            </Reveal>
          ))}
        </ProgressiveCardStack>
      </div>
    </section>
  )
}

export default Experience
