export const SkillsSection = ({ skillGroups }) => {
  return (
    <section className="chapter skills reveal" id="skills">
      <div className="section-intro">
        <p className="kicker">Skills</p>
        <h2>Systems, tools, and platforms used to ship with confidence.</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article
            className="skill-card content-card stagger"
            key={group.title}
            style={{ '--delay': `${index * 90}ms` }}
          >
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
