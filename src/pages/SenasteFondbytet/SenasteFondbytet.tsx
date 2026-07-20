import PageHero from '../../components/PageHero/PageHero'
import Button from '../../components/ui/Button'
import '../shared/pageShared.css'

export default function SenasteFondbytet() {
  return (
    <>
      <PageHero eyebrow="Tjänst" title="Senaste fondbytet" />

      <section className="section">
        <div className="container page-prose page-prose--center">
          <h2>Hämta mitt senaste fondbyte</h2>
          <p>
            Som kund kan du alltid hämta mitt senaste fondbyte här. Ange din
            e-post adress nedan, så skickar jag mail till dig om mitt senaste
            fondval.
          </p>

          <div className="signup signup--spaced">
            <div className="signup__aside">
              <span className="signup__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M3.5 7L12 13L20.5 7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="signup__title">Senaste fondvalet direkt i inkorgen</h3>
              <p>Endast för dig som är kund.</p>
            </div>

            <form className="signup__body" onSubmit={(e) => e.preventDefault()}>
              <span className="signup__label">Din e-postadress</span>
              <div className="signup__row">
                <label className="sr-only" htmlFor="epost-fondbyte">E-postadress</label>
                <input
                  id="epost-fondbyte"
                  className="page-input"
                  type="email"
                  name="email"
                  placeholder="din@epost.se"
                  required
                />
                <Button variant="primary" arrow>
                  Skicka
                </Button>
              </div>
              <p className="page-form__note">
                I samband med att du fyller i dina uppgifter bekräftar du att du
                tagit del av min Integritetspolicy med information om hur Mats
                Svensson 2000 AB behandlar dina personuppgifter.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
