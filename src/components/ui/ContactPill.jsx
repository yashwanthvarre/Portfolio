const resolveHref = (label, value) => {
  if (label === 'Get In Touch') {
    return `mailto:${value}`
  }

  if (label === 'Phone') {
    return `tel:${value.replace(/[^\d+]/g, '')}`
  }

  if (label === 'LinkedIn') {
    return `https://${value}`
  }

  return '#'
}

export const ContactPill = ({ label, value }) => {
  return (
    <a
      className="contact-pill"
      href={resolveHref(label, value)}
      target={label === 'LinkedIn' ? '_blank' : undefined}
      rel={label === 'LinkedIn' ? 'noreferrer' : undefined}
    >
      <span className="contact-pill__label">{label}</span>
      <span className="contact-pill__value">{value}</span>
    </a>
  )
}
