import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteContent } from '../data/siteContent'
import ThemeToggle from './ThemeToggle'
import CircleText from './CircleText'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="header">
      <div className="container header-inner">
        <Link
          to="/"
          className="header-brand"
          aria-label="Valerie Osuamkpe — home"
        >
          <CircleText word="Valerie Osuamkpe" size="sm" />
        </Link>

        <nav className="header-nav" aria-label="Primary">
          {siteContent.nav.map((item) => (
            <a key={item.label} className="header-nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-tools">
          <ThemeToggle className="header-theme header-theme-desktop" />
          <button
            ref={menuButtonRef}
            className="header-menu-btn"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="header-menu-icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="header-mobile">
          <nav aria-label="Mobile">
            {siteContent.nav.map((item) => (
              <a
                key={item.label}
                className="header-mobile-link"
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle className="header-theme-mobile" />
        </div>
      )}
    </header>
  )
}