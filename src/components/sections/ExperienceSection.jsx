export const ExperienceSection = ({ experience }) => {
  return (
    <section className="chapter experience reveal" id="experience">
      <div className="section-heading">
        <h2>Professional Journey</h2>
        <p>
          From Software Developer to Senior Engineer, here&apos;s my path of
          continuous growth and product impact.
        </p>
      </div>

      <div className="journey-list">
        {experience.map((job, index) => (
          <article
            className="journey-card content-card stagger"
            key={`${job.company}-${job.period}`}
            style={{ '--delay': `${index * 120}ms` }}
          >
            <div className="journey-rail" aria-hidden="true" />
            <div className="journey-head">
              <div className="timeline-meta">
                <h3>{job.role}</h3>
                <span>{job.company}</span>
                <strong>{job.period}</strong>
              </div>
              <div className="journey-pill">Role</div>
            </div>
            <div className="timeline-body">
              <div className="journey-tags">
                {job.points.slice(0, 3).map((point) => (
                  <span key={point}>{point.split(',')[0]}</span>
                ))}
              </div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
