export const ContactPill = ({ label, value }) => {
  return (
    <button className="contact-pill" type="button">
      <span className="contact-pill__label">{label}</span>
      <span className="contact-pill__value">{value}</span>
    </button>
  )
}
