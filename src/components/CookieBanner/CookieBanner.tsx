import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import {
  applyConsent,
  getStoredConsent,
  initConsentDefaults,
  OPEN_COOKIE_BANNER_EVENT,
  type ConsentValue,
} from '../../lib/consent'
import './CookieBanner.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    initConsentDefaults()
    const stored = getStoredConsent()
    if (stored === 'granted') {
      applyConsent('granted')
    } else if (stored === 'denied') {
      applyConsent('denied')
    } else {
      setVisible(true)
    }

    const open = () => setVisible(true)
    window.addEventListener(OPEN_COOKIE_BANNER_EVENT, open)
    return () => window.removeEventListener(OPEN_COOKIE_BANNER_EVENT, open)
  }, [])

  const choose = (value: ConsentValue) => {
    applyConsent(value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <aside
      className="cookie-banner"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-text"
    >
      <div className="cookie-banner__inner">
        <div className="cookie-banner__copy">
          <h2 id="cookie-banner-title" className="cookie-banner__title">
            Cookies
          </h2>
          <p id="cookie-banner-text" className="cookie-banner__text">
            Vi använder cookies och liknande teknik via Google Tag Manager för
            statistik (Google Analytics) och marknadsföring (t.ex. Meta). Du kan
            godkänna eller neka. Nödvändiga cookies för sajten påverkas inte.{' '}
            <Link to="/integritetspolicy">Läs mer i integritetspolicyn</Link>.
          </p>
        </div>
        <div className="cookie-banner__actions">
          <Button
            type="button"
            variant="ghost"
            className="cookie-banner__deny"
            onClick={() => choose('denied')}
          >
            Neka
          </Button>
          <Button type="button" variant="primary" onClick={() => choose('granted')}>
            Godkänn
          </Button>
        </div>
      </div>
    </aside>
  )
}
