const skillGroups = [
  {
    title: 'languages',
    skills: [
      {
        name: 'Java',
        meta: 'Backend',
        icon: 'https://api.iconify.design/devicon/java.svg',
      },
      {
        name: 'C#',
        meta: 'Desktop',
        icon: 'https://api.iconify.design/devicon/csharp.svg',
      },
      {
        name: 'TypeScript',
        meta: 'Full-stack',
        icon: 'https://api.iconify.design/devicon/typescript.svg',
      },
      {
        name: 'JavaScript',
        meta: 'Frontend',
        icon: 'https://api.iconify.design/devicon/javascript.svg',
      },
      {
        name: 'Python',
        meta: 'Automation',
        icon: 'https://api.iconify.design/devicon/python.svg',
      },
      {
        name: 'C++',
        meta: 'Systems',
        icon: 'https://api.iconify.design/devicon/cplusplus.svg',
      },
      {
        name: 'SQL',
        meta: 'Data',
        icon: 'https://api.iconify.design/vscode-icons/file-type-sql.svg',
      },
    ],
  },
  {
    title: 'frameworks',
    skills: [
      {
        name: 'Spring Boot',
        meta: 'REST APIs',
        icon: 'https://api.iconify.design/devicon-plain/spring.svg',
      },
      {
        name: '.NET',
        meta: 'Enterprise',
        icon: 'https://api.iconify.design/devicon/dotnetcore.svg',
      },
      {
        name: 'WPF',
        meta: 'Desktop UI',
        icon: 'https://api.iconify.design/devicon/dotnetcore.svg',
      },
      {
        name: 'NestJS',
        meta: 'APIs + jobs',
        icon: 'https://api.iconify.design/devicon/nestjs.svg',
      },
      {
        name: 'React',
        meta: 'Frontend UI',
        icon: 'https://api.iconify.design/devicon/react.svg',
      },
      {
        name: 'JPA',
        meta: 'Persistence',
        icon: 'https://api.iconify.design/ls/jpa.svg',
      },
      {
        name: 'Prisma',
        meta: 'TypeScript ORM',
        icon: 'https://api.iconify.design/devicon/prisma.svg',
      },
    ],
  },
  {
    title: 'tools',
    skills: [
      {
        name: 'PostgreSQL',
        meta: 'Database',
        icon: 'https://api.iconify.design/devicon/postgresql.svg',
      },
      {
        name: 'Supabase',
        meta: 'Storage',
        icon: 'https://api.iconify.design/devicon/supabase.svg',
      },
      {
        name: 'Redis',
        meta: 'Caching',
        icon: 'https://api.iconify.design/devicon/redis.svg',
      },
      {
        name: 'BullMQ',
        meta: 'Job queues',
        icon: 'https://api.iconify.design/devicon/redis.svg',
      },
      {
        name: 'Flyway',
        meta: 'Migrations',
        icon: 'https://api.iconify.design/devicon/flyway.svg',
      },
      {
        name: 'Docker',
        meta: 'Containers',
        icon: 'https://api.iconify.design/devicon/docker.svg',
      },
      {
        name: 'Git',
        meta: 'Versioning',
        icon: 'https://api.iconify.design/devicon/git.svg',
      },
      {
        name: 'WebSockets',
        meta: 'Real-time',
        icon: 'https://api.iconify.design/mdi/connection.svg',
      },
      {
        name: 'STOMP',
        meta: 'Messaging',
        icon: 'https://api.iconify.design/mdi/message-flash.svg',
      },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="section skills portfolio-section">
      <div className="skills-inner">
        <div className="projects-header">
          <h2>browse my technical skills.</h2>
        </div>
        <div className="skills-rows">
          {skillGroups.map((group) => (
            <article className="skills-row" key={group.title}>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
