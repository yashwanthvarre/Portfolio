export const GitHubSection = ({ githubProfile, githubProjects }) => {
  return (
    <section className="chapter reveal" id="github">
      <div className="github-panel content-card">
        <div className="section-heading section-heading--left">
          <p className="kicker">GitHub</p>
          <h2>Projects from my public GitHub profile.</h2>
          <p>{githubProfile.blurb}</p>
        </div>

        <div className="github-top">
          <div className="github-badge">
            <strong>{githubProfile.repoCount}</strong>
            <span>Public repositories</span>
          </div>
          <a className="github-link" href={githubProfile.url} target="_blank" rel="noreferrer">
            github.com/{githubProfile.handle}
          </a>
        </div>

        <div className="github-grid">
          {githubProjects.map((project, index) => (
            <article
              className="github-card stagger"
              key={project.name}
              style={{ '--delay': `${index * 70}ms` }}
            >
              <div className="github-card__meta">
                <span>{project.language}</span>
                <span>{project.updated}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>

              {project.highlights ? (
                <div className="chip-list chip-list--dense">
                  {project.highlights.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              ) : null}

              {project.outcome ? <p className="github-card__outcome">{project.outcome}</p> : null}

              {project.image ? (
                <div className="github-card__preview">
                  <img src={project.image} alt={project.imageAlt || `${project.name} preview`} />
                </div>
              ) : null}

              <div className="github-card__actions">
                <a href={project.url} target="_blank" rel="noreferrer">
                  View repository
                </a>
                {project.demoUrl ? (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    Open live demo
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
