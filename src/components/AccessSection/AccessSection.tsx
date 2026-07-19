import section2 from '../../assets/Section2.png'
import { useReveal } from '../../hooks/useReveal'
import './AccessSection.css'

const CARDS = [
  {
    title: 'Direkt insyn',
    text: 'Se hur jag själv agerar när jag gör förändringar i mitt fondsparande.',
  },
  {
    title: 'Resonemang bakom besluten',
    text: 'Varje förändring sätts i ett sammanhang — vad som påverkar och varför.',
  },
  {
    title: 'Ett arbetssätt över tid',
    text: 'Följ en löpande process istället för enstaka beslut.',
  },
]

export default function AccessSection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="access section" id="tjanst">
      <div ref={ref} className="access__inner container reveal">
        <h2 className="section-heading section-heading--center">Det du får tillgång till</h2>

        <div className="access__grid">
          {CARDS.map((card) => (
            <article key={card.title} className="access-card">
              <span className="access-card__index" aria-hidden="true" />
              <h3 className="access-card__title">{card.title}</h3>
              <p className="access-card__text">{card.text}</p>
            </article>
          ))}
        </div>

        <article className="access-feature">
          <div className="access-feature__body">
            <h3 className="access-feature__title">En process för mer medveten fondval</h3>
            <p className="access-feature__text">
              År 2009 blev jag uppmärksammad i Dagens Industri efter ett år med
              mycket stark avkastning i mitt fondsparande. Det blev startpunkten
              för min fondbytesinformationstjänst — skapad för att fler ska kunna
              följa hur jag tänker kring fondval, marknadsläge, risk och
              långsiktigt sparande.
            </p>
            <p className="access-feature__text">
              Sedan dess har tjänsten även uppmärksammats av Aftonbladet. I dag
              kan du som kund ta del av mina fondbyten och få bättre insyn i
              processen bakom besluten.
            </p>
            <p className="access-feature__text">
              Målet är inte bara avkastning, utan att ge dig större förståelse
              för fondsparande, marknadens möjligheter och processen bakom
              besluten.
            </p>
          </div>
          <div className="access-feature__media">
            <img
              className="access-feature__img"
              src={section2}
              alt="Tidningsurklipp om Mats Svenssons fondsparande och PPM-tips"
              width={269}
              height={341}
            />
          </div>
        </article>
      </div>
    </section>
  )
}
