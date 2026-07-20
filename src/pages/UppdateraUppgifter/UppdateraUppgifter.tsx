import PageHero from '../../components/PageHero/PageHero'
import Button from '../../components/ui/Button'
import '../shared/pageShared.css'

export default function UppdateraUppgifter() {
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

          <form className="page-form" onSubmit={(e) => e.preventDefault()}>
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
            />
            <Button variant="primary" arrow>
              Skicka
            </Button>
          </form>

          <div className="page-placeholder">
            <span className="page-placeholder__icon" aria-hidden="true">
              !
            </span>
            <p>
              <strong>Formuläret är inte kopplat än.</strong> Det behöver kopplas
              till backend/e-posttjänst för att skicka uppdateringslänken.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
