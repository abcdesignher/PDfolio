import { siteContent } from '../data/siteContent'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  const { contact } = siteContent

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 id="contact-heading">{contact.heading}</h2>
          <p className="lede">{contact.intro}</p>

          <a className="contact-email" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>

          <ul className="contact-socials">
            {contact.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-form-wrap">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}