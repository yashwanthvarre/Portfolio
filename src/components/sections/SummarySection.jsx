export const SummarySection = ({ highlights }) => {
  return (
    <section className="chapter summary-band reveal" id="summary">
      <div className="section-intro summary-intro">
        <p className="kicker">Snapshot</p>
        <h2>Frontend depth, product ownership, and execution at scale.</h2>
        <p>
          Strong in turning ambiguous requirements into fast, reliable, and
          customer-facing software across modern enterprise stacks.
        </p>
      </div>

      <div className="stat-grid">
        {highlights.map((item, index) => (
          <article
            className="stat-card content-card stagger"
            key={item.label}
            style={{ '--delay': `${index * 90}ms` }}
          >
            <span className="stat-value">{item.value}</span>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
