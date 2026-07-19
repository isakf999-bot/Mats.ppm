import Logo from '../Logo/Logo'
import './Footer.css'

type IconName = 'facebook' | 'youtube' | 'instagram'

const SOCIALS: { label: string; href: string; icon: IconName }[] = [
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
]

function SocialIcon({ name }: { name: IconName }) {
  switch (name) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
          <path d="M15.4 8.2h-1.9c-.4 0-.8.5-.8 1v1.7h2.7l-.4 2.8h-2.3V21h-2.9v-6.3H7.5v-2.8h2.3V9.4c0-1.9 1.3-3.4 3.1-3.4h2.5v2.2Z" />
        </svg>
      )
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
          <path d="M22.1 8.1a2.6 2.6 0 0 0-1.8-1.8C18.7 5.9 12 5.9 12 5.9s-6.7 0-8.3.4A2.6 2.6 0 0 0 1.9 8.1 27 27 0 0 0 1.5 12c0 1.3.1 2.6.4 3.9a2.6 2.6 0 0 0 1.8 1.8c1.6.4 8.3.4 8.3.4s6.7 0 8.3-.4a2.6 2.6 0 0 0 1.8-1.8c.3-1.3.4-2.6.4-3.9 0-1.3-.1-2.6-.4-3.9ZM10.1 15V9l5.2 3-5.2 3Z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
          <path d="M12 2.7c3 0 3.4 0 4.6.1 1.1.1 1.7.2 2.1.4.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.4.3 1 .4 2.1.1 1.2.1 1.6.1 4.6s0 3.4-.1 4.6c-.1 1.1-.2 1.7-.4 2.1-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1 .3-2.1.4-1.2.1-1.6.1-4.6.1s-3.4 0-4.6-.1c-1.1-.1-1.7-.2-2.1-.4a3.5 3.5 0 0 1-1.3-.9 3.5 3.5 0 0 1-.9-1.3c-.2-.4-.3-1-.4-2.1C2.7 15.4 2.7 15 2.7 12s0-3.4.1-4.6c.1-1.1.2-1.7.4-2.1.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1-.3 2.1-.4C8.6 2.7 9 2.7 12 2.7Zm0 4.6a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
        </svg>
      )
  }
}

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <Logo variant="light" />
          <p className="footer__about">
            Mats Svensson är socionom med intresse för fondsparande. Sedan 2010
            har tusentals kunder tagit del av hans Fondbytesinformation och du är
            nu välkommen att bli en av dem.
          </p>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Kontakt</h3>
          <address className="footer__contact">
            Mats Svensson 2000 AB<br />
            Henry Dunkers plats 4<br />
            252 67 Helsingborg<br />
            Org.nr: 556831-3976
          </address>
          <a className="footer__mail" href="mailto:info@mats-svensson.se">
            info@mats-svensson.se
          </a>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Följ oss</h3>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="footer__social"
                aria-label={s.label}
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <div className="footer__legal">
            <a href="#">Integritetspolicy</a>
            <span aria-hidden="true">|</span>
            <a href="#">Allmänna villkor</a>
          </div>
          <p className="footer__copy">
            © Mats Svensson 2026 | Producerad av{' '}
            <a
              className="footer__credit"
              href="https://isakweb.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              IsakWeb
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
