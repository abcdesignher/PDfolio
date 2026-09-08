import { Link } from 'react-router-dom'
import { siteContent } from '../data/siteContent'

export default function Footer() {
  const year = new Date().getFullYear()
  const { brand, nav, contact, footer } = siteContent
  const copyright = footer.copyright.replace('{year}', String(year))

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="footer-brand">
            {brand.name}
          </Link>
          <p className="footer-tagline">{footer.tagline}</p>
        </div>

        <nav aria-label="Footer navigation">
          <h3>Explore</h3>
          <ul>
            {nav.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3>Connect</h3>
          <ul>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            {contact.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>{copyright}</span>
        <span>{brand.role}</span>
      </div>
    </footer>
  )
}