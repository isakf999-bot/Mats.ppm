import PageHero from '../../components/PageHero/PageHero'
import Button from '../../components/ui/Button'
import '../shared/pageShared.css'

export default function Nyhetsarkiv() {
  return (
    <>
      <PageHero eyebrow="Tjänst" title="Nyhetsarkiv" />

      <section className="section">
        <div className="container page-prose page-prose--center">
          <h2>Månadens analys av marknaden</h2>
          <p>
            Varje månad skickar jag ut mitt nyhetsbrev med månadens analys av
            marknaden.
          </p>
          <p>Jag har samlat alla dessa nyhetsbrev som du kan läsa här.</p>

          <div className="page-cta-row">
            <Button href="#" variant="primary" arrow>
              Läs nyhetsbreven
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
