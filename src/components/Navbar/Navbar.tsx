import { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import './Navbar.css'

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Tjänst',
    href: '#tjanst',
    children: [
      { label: 'Detta erbjuds', href: '#fokus' },
      { label: 'Bli kund', href: '#pris' },
      { label: 'Guide: byta fonder', href: '#video' },
      { label: 'Senaste fondbytet', href: '#struktur' },
      { label: 'Nyhetsarkiv', href: '#community' },
    ],
  },
  {
    label: 'Resultat',
    href: '#resultat',
    children: [
      { label: 'PPM-konto', href: '#kalkylator' },
      { label: 'Statistik', href: '#kalkylator' },
    ],
  },
  { label: 'Om Mats Svensson', href: '#om' },
  {
    label: 'Kontakt/support',
    href: '#kontakt',
    children: [
      { label: 'Kundtjänst', href: '#footer' },
      { label: 'Vanliga frågor', href: '#footer' },
      { label: 'Uppdatera kunduppgifter', href: '#footer' },
    ],
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#top" className="navbar__brand" aria-label="Till startsidan">
          <Logo variant="dark" />
        </a>

        <nav className="navbar__nav" aria-label="Huvudmeny">
          <ul className="navbar__list">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className={`navbar__item ${item.children ? 'navbar__item--has-menu' : ''}`}
              >
                <a href={item.href} className="navbar__link">
                  {item.label}
                  {item.children && (
                    <svg className="navbar__chevron" viewBox="0 0 12 8" aria-hidden="true">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </a>
                {item.children && (
                  <div className="navbar__dropdown" role="menu">
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a href={child.href} className="navbar__dropdown-link" role="menuitem">
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <button
            className={`navbar__burger ${mobileOpen ? 'is-open' : ''}`}
            aria-label={mobileOpen ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>

    {/* Backdrop + mobil meny ligger UTANFÖR <header> för att slippa
        backdrop-filter:ns containing block – annars bryts fixed-positioneringen */}
    <button
      className={`navbar__backdrop ${mobileOpen ? 'is-open' : ''}`}
      aria-label="Stäng meny"
      tabIndex={-1}
      onClick={() => setMobileOpen(false)}
    />

    <div className={`navbar__mobile ${mobileOpen ? 'is-open' : ''}`}>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="navbar__mobile-item">
              {item.children ? (
                <>
                  <button
                    className="navbar__mobile-toggle"
                    aria-expanded={openGroup === item.label}
                    onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                  >
                    {item.label}
                    <svg viewBox="0 0 12 8" aria-hidden="true" className={openGroup === item.label ? 'rot' : ''}>
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className={`navbar__mobile-sub ${openGroup === item.label ? 'is-open' : ''}`}>
                    <div className="navbar__mobile-sub-inner">
                      {item.children.map((child) => (
                        <a key={child.label} href={child.href} onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  className="navbar__mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
