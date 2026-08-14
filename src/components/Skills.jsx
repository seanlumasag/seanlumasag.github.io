import Reveal from './Reveal'

const skillGroups = [
  {
    title: 'languages',
    skills: [
      {
        name: 'Java',
        meta: 'backend',
        icon: 'https://api.iconify.design/devicon/java.svg',
      },
      {
        name: 'C#',
        meta: 'desktop',
        icon: 'https://api.iconify.design/devicon/csharp.svg',
      },
      {
        name: 'TypeScript',
        meta: 'full-stack',
        icon: 'https://api.iconify.design/devicon/typescript.svg',
      },
      {
        name: 'JavaScript',
        meta: 'frontend',
        icon: 'https://api.iconify.design/devicon/javascript.svg',
      },
      {
        name: 'Python',
        meta: 'automation',
        icon: 'https://api.iconify.design/devicon/python.svg',
      },
      {
        name: 'C++',
        meta: 'systems',
        icon: 'https://api.iconify.design/devicon/cplusplus.svg',
      },
      {
        name: 'SQL',
        meta: 'data',
        icon: 'https://api.iconify.design/vscode-icons/file-type-sql.svg',
      },
    ],
  },
  {
    title: 'frameworks',
    skills: [
      {
        name: 'Spring Boot',
        meta: 'rest apis',
        icon: 'https://api.iconify.design/devicon-plain/spring.svg',
      },
      {
        name: '.NET',
        meta: 'enterprise',
        icon: 'https://api.iconify.design/devicon/dotnetcore.svg',
      },
      {
        name: 'WPF',
        meta: 'desktop ui',
        icon: 'https://api.iconify.design/devicon/dotnetcore.svg',
      },
      {
        name: 'NestJS',
        meta: 'apis + jobs',
        icon: 'https://api.iconify.design/devicon/nestjs.svg',
      },
      {
        name: 'React',
        meta: 'frontend ui',
        icon: 'https://api.iconify.design/devicon/react.svg',
      },
      {
        name: 'JPA',
        meta: 'persistence',
        icon: 'https://api.iconify.design/ls/jpa.svg',
      },
      {
        name: 'Prisma',
        meta: 'typescript orm',
        icon: 'https://api.iconify.design/devicon/prisma.svg',
      },
    ],
  },
  {
    title: 'tools',
    skills: [
      {
        name: 'PostgreSQL',
        meta: 'database',
        icon: 'https://api.iconify.design/devicon/postgresql.svg',
      },
      {
        name: 'Supabase',
        meta: 'storage',
        icon: 'https://api.iconify.design/devicon/supabase.svg',
      },
      {
        name: 'Redis',
        meta: 'caching',
        icon: 'https://api.iconify.design/devicon/redis.svg',
      },
      {
        name: 'BullMQ',
        meta: 'job queues',
        icon: 'https://api.iconify.design/devicon/redis.svg',
      },
      {
        name: 'Flyway',
        meta: 'migrations',
        icon: 'https://api.iconify.design/devicon/flyway.svg',
      },
      {
        name: 'Docker',
        meta: 'containers',
        icon: 'https://api.iconify.design/devicon/docker.svg',
      },
      {
        name: 'Git',
        meta: 'versioning',
        icon: 'https://api.iconify.design/devicon/git.svg',
      },
      {
        name: 'WebSockets',
        meta: 'real-time',
        icon: 'https://api.iconify.design/mdi/connection.svg',
      },
      {
        name: 'STOMP',
        meta: 'messaging',
        icon: 'https://api.iconify.design/mdi/message-flash.svg',
      },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="section skills portfolio-section">
      <div className="skills-inner">
        <Reveal className="projects-header">
          <h2>browse my technical skills.</h2>
        </Reveal>
        <div className="skills-rows">
          {skillGroups.map((group, index) => (
            <Reveal
              as="article"
              className="skills-row"
              delay={index * 70}
              key={group.title}
            >
              <h3 className="skills-subtitle">{group.title}</h3>
              <div className="skills-items">
                {group.skills.map((skill) => (
                  <div className="skills-item" key={skill.name}>
                    <span className="skills-icon" aria-hidden="true">
                      <img
                        src={skill.icon}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <div>
                      <p className="skills-name">{skill.name}</p>
                      <p className="skills-meta">{skill.meta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
