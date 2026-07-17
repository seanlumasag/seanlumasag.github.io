const Experience = () => {
  return (
    <section id="experience" className="section projects experience">
      <div className="projects-inner">
        <div className="projects-header">
          <h2>View my experience.</h2>
        </div>
        <div className="project-stack">
          <article className="project-card">
            <div className="project-content">
              <h3>Software Engineer Intern</h3>
              <p className="experience-org">
                <a
                  href="https://hellerindustries.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Heller Industries
                </a>
              </p>
              <p>
                Built industrial software features for oven configuration
                ingestion, thermal-profile analysis, and statistical process
                control in a C#/.NET WPF codebase.
              </p>
              <ul className="project-tech">
                <li>C#</li>
                <li>.NET Framework</li>
                <li>WPF</li>
                <li>JSON</li>
                <li>CSV</li>
              </ul>
            </div>
          </article>
          <article className="project-card">
            <div className="project-content">
              <h3>Software Engineer Intern</h3>
              <p className="experience-org">
                <a
                  href="https://devonmcguinness.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Data Storytelling
                </a>
              </p>
              <p>
                Extended transaction, winner, and buyer-verification workflows
                for a React/TypeScript nonprofit raffle platform using
                Supabase and an existing PayPal checkout integration.
              </p>
              <ul className="project-tech">
                <li>TypeScript</li>
                <li>React</li>
                <li>Supabase</li>
                <li>PayPal</li>
              </ul>
            </div>
          </article>
          <article className="project-card">
            <div className="project-content">
              <h3>Machine Learning Research Assistant</h3>
              <p className="experience-org">
                <a
                  href="https://winlab.rutgers.edu"
                  target="_blank"
                  rel="noreferrer"
                >
                  WINLAB
                </a>
              </p>
              <p>
                Assisted with machine-learning experiments exploring adaptive
                request routing between local and edge models based on accuracy
                and compute tradeoffs.
              </p>
              <ul className="project-tech">
                <li>Python</li>
                <li>PyTorch</li>
                <li>CIFAR-10</li>
                <li>AlexNet</li>
                <li>Machine Learning</li>
              </ul>
            </div>
          </article>
          <article className="project-card">
            <div className="project-content">
              <h3>Software Engineer Fellow</h3>
              <p className="experience-org">
                <a
                  href="https://www.linkedin.com/company/blueprint-rutgers/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blueprint
                </a>
              </p>
              <p>
                Completed a project-based Rutgers software-engineering
                accelerator focused on practical software development,
                technical collaboration, and internship preparation.
              </p>
              <ul className="project-tech">
                <li>Software Engineering</li>
                <li>Team Collaboration</li>
                <li>Project Development</li>
              </ul>
            </div>
          </article>
          <article className="project-card">
            <div className="project-content">
              <h3>Web Development Intern</h3>
              <p className="experience-org">
                <a
                  href="https://tagonline.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  TAG Online
                </a>
              </p>
              <p>
                Developed and improved client website pages, migrated legacy
                sites to WordPress, and worked with senior developers on
                frontend implementation and performance.
              </p>
              <ul className="project-tech">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>WordPress</li>
              </ul>
            </div>
          </article>
          <article className="project-card">
            <div className="project-content">
              <h3>Coding Instructor</h3>
              <p className="experience-org">
                <a
                  href="https://www.linkedin.com/company/hadoop-express/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hadoop Express
                </a>
              </p>
              <p>
                Taught Python, block-based coding, robotics, and STEM concepts
                through structured lessons and more than 50 hands-on exercises
                for student groups.
              </p>
              <ul className="project-tech">
                <li>Python</li>
                <li>Block Coding</li>
                <li>LEGO WeDo</li>
                <li>LEGO EV3</li>
                <li>Raspberry Pi</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
