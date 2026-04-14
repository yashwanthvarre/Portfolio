export const MetricsSection = ({ impactMetrics }) => {
  return (
    <section className="chapter reveal">
      <div className="metrics-panel content-card">
        <h2>Key Impact Metrics</h2>
        <div className="metrics-grid">
          {impactMetrics.map((metric, index) => (
            <article
              className="metric-card stagger"
              key={metric.label}
              style={{ '--delay': `${index * 90}ms` }}
            >
              <div className="metric-icon" aria-hidden="true">
                ★
              </div>
              <strong>{metric.value}</strong>
              <p>{metric.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
