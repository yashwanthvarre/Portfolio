import { ContactPill } from '../ui/ContactPill'

export const HeroSection = ({ heroProfile }) => {
  return (
    <section className="hero chapter reveal is-visible" id="hero">
      <div className="hero-center">
        <div className="location-pill">{heroProfile.location}</div>
        <h1 className="name-title">
          <span>{heroProfile.firstName}</span>
          <span>{heroProfile.lastName}</span>
        </h1>
        <p className="hero-tagline">{heroProfile.headline}</p>

        <div className="chip-list chip-list--center">
          {heroProfile.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="hero-actions hero-actions--center">
          <ContactPill label="Get In Touch" value="yashwanthh235@gmail.com" />
          <ContactPill label="Phone" value="201-360-1325" />
          <ContactPill label="LinkedIn" value="linkedin.com/in/yashwanth-varre-b76254130" />
        </div>

        <div className="hero-note-strip">
          {heroProfile.notes.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
