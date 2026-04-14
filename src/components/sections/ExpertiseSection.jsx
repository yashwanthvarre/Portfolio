export const ExpertiseSection = ({ aiTools, skillGroups }) => {
  return (
    <>
      <section className="chapter reveal">
        <div className="section-heading">
          <h2>Technical Expertise</h2>
          <p>
            A comprehensive toolkit for building scalable, modern applications
            from frontend systems to cloud infrastructure.
          </p>
        </div>

        <div className="expertise-grid">
          {skillGroups.map((group, index) => (
            <article
              className="expertise-card content-card stagger"
              key={group.title}
              style={{ '--delay': `${index * 80}ms` }}
            >
              <div className="expertise-card__icon" aria-hidden="true">
                {index === 0 ? '▣' : index === 1 ? '◎' : index === 2 ? '☁' : '◌'}
              </div>
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="chip-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="chapter reveal">
        <div className="ai-panel content-card">
          <div className="ai-panel__header">
            <div className="ai-panel__badge" aria-hidden="true">
              ⚡
            </div>
            <div>
              <h3>AI-Enhanced Development</h3>
              <p>
                Integrating cutting-edge AI tools to accelerate development and
                improve code quality.
              </p>
            </div>
          </div>

          <div className="ai-tool-grid">
            {aiTools.map((tool, index) => (
              <article
                className="ai-tool-card stagger"
                key={tool}
                style={{ '--delay': `${index * 80}ms` }}
              >
                <div className="ai-tool-card__icon" aria-hidden="true">
                  ◉
                </div>
                <span>{tool}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
