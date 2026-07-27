import PageHero from '../../components/PageHero/PageHero'
import CalculatorSection from '../../components/CalculatorSection/CalculatorSection'
import ContactForm from '../../components/ContactForm/ContactForm'
import statistikBild from '../../assets/statistik-2025.jpg'
import ValueChart from './ValueChart'
import { useReveal } from '../../hooks/useReveal'
import '../shared/pageShared.css'
import './Statistik.css'

export default function Statistik() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <>
      <PageHero
        eyebrow="Resultat"
        title="Statistik"
        text="Total avkastning i procent."
        align="left"
      />

      <section className="section">
        <div ref={ref} className="container reveal">
          <h2 className="section-heading stat__heading">
            Årlig värdeförändring sedan 2003
          </h2>

          <div className="stat__figures">
            <figure className="stat__figure media-frame">
              <img
                className="stat__img"
                src={statistikBild}
                alt="Diagram över årlig värdeförändring sedan 2003"
                loading="lazy"
              />
              <figcaption className="media-frame__caption">
                Årlig värdeförändring i procent (2003–2025)
              </figcaption>
            </figure>
            <figure className="stat__figure media-frame">
              <ValueChart />
              <figcaption className="media-frame__caption">
                PPM – totalt värde över tid (2010–2026)
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Kontaktformulär mellan bilderna och kalkylatorn */}
      <section className="section stat__contact">
        <div className="container">
          <ContactForm />
        </div>
      </section>

      <CalculatorSection />
    </>
  )
}
