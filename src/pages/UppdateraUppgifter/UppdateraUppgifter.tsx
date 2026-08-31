import { FormEvent, useState } from 'react'
import PageHero from '../../components/PageHero/PageHero'
import Button from '../../components/ui/Button'
import {
  FORM_ERROR_FALLBACK,
  FormWebhookError,
  submitFormWebhook,
} from '../../lib/webhook'
import '../shared/pageShared.css'

export default function UppdateraUppgifter() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const data = new FormData(e.currentTarget)

    try {
      await submitFormWebhook({
        formdata: 'update',
        email: String(data.get('email') ?? ''),
        first_name: '',
        last_name: '',
        phone: '',
        message: '',
      })
      setSent(true)
    } catch (err) {
      setError(
        err instanceof FormWebhookError ? err.message : FORM_ERROR_FALLBACK,
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <PageHero eyebrow="Kontakt/support" title="Uppdatera dina kunduppgifter" />

      <section className="section">
        <div className="container page-prose page-prose--center">
          <h2>Uppdatera dina kunduppgifter</h2>
          <p>
            Ibland händer det att man byter adress eller mobilnummer. Som kund
            kan du själv enkelt uppdatera detta. Ange din mailadress nedan, så
            skickar vi ett mail med en speciell länk där du kan uppdatera dina
            uppgifter.
          </p>

          {sent ? (
            <p className="page-form__success" role="status">
              Tack! Om din e-post finns som kund skickar vi en länk där du kan
              uppdatera dina uppgifter.
            </p>
          ) : (
            <form className="page-form" onSubmit={onSubmit}>
              <label className="sr-only" htmlFor="epost-uppdatera">
                E-postadress
              </label>
              <input
                id="epost-uppdatera"
                className="page-input"
                type="email"
                name="email"
                placeholder="Din e-postadress"
                required
                disabled={submitting}
              />
              <Button type="submit" variant="primary" arrow disabled={submitting}>
                {submitting ? 'Skickar…' : 'Skicka'}
              </Button>
              {error && (
                <p className="page-form__error" role="alert">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </section>
    </>
  )
}
