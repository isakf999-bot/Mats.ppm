import { useState } from 'react'
import Button from '../ui/Button'
import './ContactForm.css'

interface ContactFormProps {
  title?: string
  text?: string
}

export default function ContactForm({
  title = 'Undrar du något?',
  text = 'Kontakta oss eller fyll i formuläret så kontaktar vi dig.',
}: ContactFormProps) {
  const [sent, setSent] = useState(false)

  return (
    <div className="contact-form">
      <div className="contact-form__aside">
        <span className="contact-form__badge">Kontakt</span>
        <h2 className="contact-form__title">{title}</h2>
        <p className="contact-form__text">{text}</p>

        <ul className="contact-form__facts">
          <li>
            <span className="contact-form__fact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
                <path d="M3.5 7L12 13L20.5 7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <a href="mailto:info@mats-svensson.se">info@mats-svensson.se</a>
          </li>
          <li>
            <span className="contact-form__fact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              </svg>
            </span>
            <a href="tel:0736196986">073-619 69 86</a>
          </li>
        </ul>
      </div>

      <form
        className="contact-form__form"
        onSubmit={(e) => {
          e.preventDefault()
          setSent(true)
        }}
      >
        <div className="contact-form__field">
          <label htmlFor="cf-namn">Namn</label>
          <input id="cf-namn" className="contact-input" type="text" name="namn" placeholder="Ditt namn" required />
        </div>
        <div className="contact-form__field">
          <label htmlFor="cf-epost">E-post</label>
          <input id="cf-epost" className="contact-input" type="email" name="epost" placeholder="din@epost.se" required />
        </div>
        <div className="contact-form__field">
          <label htmlFor="cf-tel">Telefon</label>
          <input id="cf-tel" className="contact-input" type="tel" name="telefon" placeholder="Ditt telefonnummer" />
        </div>
        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="cf-meddelande">Meddelande</label>
          <textarea id="cf-meddelande" className="contact-input contact-textarea" name="meddelande" rows={4} placeholder="Skriv ditt meddelande här…" />
        </div>
        <div className="contact-form__actions">
          <Button variant="primary" arrow>
            Skicka meddelande
          </Button>
          {sent && (
            <span className="contact-form__hint" role="status">
              Formuläret är inte kopplat till en server än – inget skickades.
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
