import { FormEvent, useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import Spinner from '../ui/Spinner'
import {
  FORM_ERROR_FALLBACK,
  FormWebhookError,
  submitFormWebhook,
} from '../../lib/webhook'
import './NewsletterPopup.css'

const DELAY_MS = 3500
const STORAGE_KEY = 'mats-nl-popup-dismissed'

function wasDismissed(): boolean {
  try {
    localStorage.removeItem(STORAGE_KEY)
    return sessionStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

function markDismissed() {
  try {
    sessionStorage.setItem(STORAGE_KEY, '1')
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    /* ignore quota / private mode */
  }
}

export default function NewsletterPopup() {
  const formId = useId()
  const [visible, setVisible] = useState(false)
  const [sent, setSent] = useState(false)
  const [successMessage, setSuccessMessage] = useState(
    'Tack! Du är nu anmäld till nyhetsbrevet.',
  )
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (wasDismissed()) return

    const timer = window.setTimeout(() => setVisible(true), DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [])

  const dismiss = () => {
    markDismissed()
    setVisible(false)
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const message = await submitFormWebhook({
        formdata: 'newsletter',
        first_name: String(data.get('fornamn') ?? ''),
        last_name: String(data.get('efternamn') ?? ''),
        email: String(data.get('epost') ?? ''),
        phone: '',
        message: '',
      })
      markDismissed()
      setSuccessMessage(message)
      setSent(true)
    } catch (err) {
      setError(
        err instanceof FormWebhookError ? err.message : FORM_ERROR_FALLBACK,
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (!visible) return null

  return (
    <aside
      className="nl-popup"
      role="dialog"
      aria-modal="false"
      aria-labelledby={`${formId}-title`}
    >
      <button
        type="button"
        className="nl-popup__close"
        onClick={dismiss}
        aria-label="Stäng nyhetsbrevsformulär"
      >
        <span className="nl-popup__close-label">Stäng</span>
        <svg className="nl-popup__close-x" viewBox="0 0 12 12" aria-hidden="true">
          <path
            d="M2 2l8 8M10 2L2 10"
            stroke="currentColor"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="nl-popup__inner">
        <header className="nl-popup__header">
          <h2 id={`${formId}-title`} className="nl-popup__title">
            Haka på mitt Nyhetsbrev.
          </h2>
          <p className="nl-popup__subtitle">
            Det är helt gratis – med månatliga marknadsanalyser
          </p>
        </header>

        {sent ? (
          <p className="nl-popup__success" role="status">
            {successMessage}
          </p>
        ) : (
          <form className="nl-popup__form" onSubmit={onSubmit} noValidate={false}>
            <div className="nl-popup__row">
              <div className="nl-popup__field">
                <label htmlFor={`${formId}-fn`}>Förnamn</label>
                <input
                  id={`${formId}-fn`}
                  className="nl-popup__input"
                  name="fornamn"
                  type="text"
                  placeholder="Förnamn"
                  autoComplete="given-name"
                  required
                  disabled={submitting}
                />
              </div>
              <div className="nl-popup__field">
                <label htmlFor={`${formId}-en`}>Efternamn</label>
                <input
                  id={`${formId}-en`}
                  className="nl-popup__input"
                  name="efternamn"
                  type="text"
                  placeholder="Efternamn"
                  autoComplete="family-name"
                  required
                  disabled={submitting}
                />
              </div>
            </div>

            <div className="nl-popup__field">
              <label htmlFor={`${formId}-ep`}>E-post</label>
              <input
                id={`${formId}-ep`}
                className="nl-popup__input"
                name="epost"
                type="email"
                placeholder="E-post"
                autoComplete="email"
                required
                disabled={submitting}
              />
            </div>

            <div className="nl-popup__footer">
              <label className="nl-popup__consent">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  defaultChecked
                  disabled={submitting}
                />
                <span>
                  Jag godkänner{' '}
                  <Link to="/integritetspolicy" target="_blank" rel="noopener noreferrer">
                    integritetspolicyn
                  </Link>
                </span>
              </label>

              <Button
                type="submit"
                variant="primary"
                arrow={!submitting}
                className="nl-popup__submit"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Spinner /> Väntar…
                  </>
                ) : (
                  'Skicka'
                )}
              </Button>
            </div>

            {error && (
              <p className="nl-popup__error" role="alert">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </aside>
  )
}
