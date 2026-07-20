import PageHero from '../../components/PageHero/PageHero'
import CalculatorSection from '../../components/CalculatorSection/CalculatorSection'
import ContactForm from '../../components/ContactForm/ContactForm'
import statistikBild from '../../assets/statistik-2025.jpg'
import historiskBild from '../../assets/historisk-utveckling.png'
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
            <figure className="stat__figure">
              <img
                className="stat__img"
                src={statistikBild}
                alt="Diagram över årlig värdeförändring sedan 2003"
                loading="lazy"
              />
            </figure>
            <figure className="stat__figure">
              <img
                className="stat__img"
                src={historiskBild}
                alt="Historisk utveckling av Mats fondsparande"
                loading="lazy"
              />
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
