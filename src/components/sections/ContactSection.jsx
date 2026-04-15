export const ContactSection = ({ contactDetails }) => {
  return (
    <section className="chapter reveal">
      <div className="section-heading">
        <h2>Let's Connect</h2>
        <p>
          Ready to discuss opportunities, collaborate on projects, or just have
          a tech conversation? I&apos;m always open to connecting with teams and
          fellow builders.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-grid__list">
          {contactDetails.map((item, index) => (
            <article
              className="contact-card content-card stagger"
              key={item.title}
              style={{ '--delay': `${index * 80}ms` }}
            >
              <div className="contact-card__icon" aria-hidden="true">
                {item.title === 'Email' ? '✉' : item.title === 'Phone' ? '⌁' : 'in'}
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.value}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="contact-cta content-card stagger" style={{ '--delay': '160ms' }}>
          <h3>Ready to Work Together?</h3>
          <p>
            Whether you&apos;re looking for a senior engineer to lead complex
            projects, scale your systems, or bring clarity to ambitious product
            work, I&apos;d love to hear about your needs.
          </p>
          <div className="contact-cta__buttons">
            <a
              className="reveal-button reveal-button--primary"
              href="mailto:yashwanthh235@gmail.com"
            >
              <span className="reveal-button__label">Start a Conversation</span>
              <span className="reveal-button__value">yashwanthh235@gmail.com</span>
            </a>
            <a className="reveal-button reveal-button--secondary" href="tel:2013601325">
              <span className="reveal-button__label">Schedule a Call</span>
              <span className="reveal-button__value">201-360-1325</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
