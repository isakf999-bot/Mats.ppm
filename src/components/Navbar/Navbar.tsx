import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Navbar.css'

interface NavChild {
  label: string
  /** Intern route (t.ex. "/erbjudandet") eller sektionslänk (t.ex. "/#pris") */
  to: string
}

interface NavItem {
  label: string
  to: string
  children?: NavChild[]
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Tjänst',
    to: '/erbjudandet',
    children: [
      { label: 'Vad Mats Svensson erbjuder', to: '/erbjudandet' },
      { label: 'Bli kund', to: '/bli-kund' },
      { label: 'Så här byter du fonder', to: '/sa-har-byter-du-fond' },
      { label: 'Senaste fondbytet', to: '/senaste-fondbytet' },
      { label: 'Nyhetsarkiv', to: '/nyhetsarkiv' },
    ],
  },
  {
    label: 'Resultat',
    to: '/mats-ppm-konto',
    children: [
      { label: 'Mats PPM-konto', to: '/mats-ppm-konto' },
      { label: 'Statistik', to: '/statistik' },
    ],
  },
  { label: 'Om Mats Svensson', to: '/om-mats-svensson' },
  {
    label: 'Kontakt/support',
    to: '/kundtjanst',
    children: [
      { label: 'Kundtjänst', to: '/kundtjanst' },
      { label: 'Frågor & svar', to: '/fragor-svar' },
      { label: 'Uppdatera kunduppgifter', to: '/uppdatera-kunduppgifter' },
    ],
  },
]

/** Riktiga sidor renderas som router-Link, sektionslänkar som vanlig ankarlänk. */
const isRoute = (to: string) => !to.includes('#')

function NavItemLink({
  to,
  className,
  children,
  onClick,
}: {
  to: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
}) {
  if (isRoute(to)) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${className ?? ''}${isActive ? ' is-current' : ''}`
        }
        onClick={onClick}
      >
        {children}
      </NavLink>
    )
  }
  return (
    <a href={to} className={className} onClick={onClick}>
      {children}
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const location = useLocation()

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

  // Stäng mobilmenyn vid sidbyte
  useEffect(() => {
    setMobileOpen(false)
    setOpenGroup(null)
  }, [location.pathname])

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          <Link to="/" className="navbar__brand" aria-label="Till startsidan">
            <Logo variant="dark" />
          </Link>

          <nav className="navbar__nav" aria-label="Huvudmeny">
            <ul className="navbar__list">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className={`navbar__item ${item.children ? 'navbar__item--has-menu' : ''}`}
                >
                  <NavItemLink to={item.to} className="navbar__link">
                    {item.label}
                    {item.children && (
                      <svg className="navbar__chevron" viewBox="0 0 12 8" aria-hidden="true">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </NavItemLink>

                  {item.children && (
                    <div className="navbar__dropdown" role="menu">
                      <ul>
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <NavItemLink to={child.to} className="navbar__dropdown-link">
                              {child.label}
                            </NavItemLink>
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
                        <NavItemLink
                          key={child.label}
                          to={child.to}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </NavItemLink>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <NavItemLink
                  to={item.to}
                  className="navbar__mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavItemLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
