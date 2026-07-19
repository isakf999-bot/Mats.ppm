import { useReveal } from '../../hooks/useReveal'
import './FocusSection.css'

interface FocusCard {
  tag: string
  title: string
  paragraphs: React.ReactNode[]
  note: string
}

const CARDS: FocusCard[] = [
  {
    tag: 'PPM',
    title: 'Premiepension (PPM)',
    paragraphs: [
      'Ett aktivt sparande i PPM är för många den enda vägen till en god pension. Rätt fondval ger dig en pension med guldkant',
      'Vilka fonder ska du välja? Få information om Mats Svenssons fondsparande i PPM!',
    ],
    note: 'Ingen bindningstid. Välj månadsvis eller årsvis.',
  },
  {
    tag: 'ISK',
    title: 'Investeringssparkonto (ISK)',
    paragraphs: [
      'Ett ISK-sparande är ett privat fondsparande med förmånlig beskattning',
      <>
        Få information om Mats Svenssons <strong>Fondval</strong> i ISK-sparande
        på Avanza och på Nordnet
      </>,
    ],
    note: 'Ingen bindningstid. Välj månadsvis eller årsvis',
  },
]

function FocusIcon() {
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true">
      <path d="M4 22V11M11 22V5M18 22V14M25 22V8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

export default function FocusSection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="focus section" id="fokus">
      <div ref={ref} className="focus__inner container reveal">
        <h2 className="section-heading section-heading--center">Fokus på PPM och ISK</h2>

        <div className="focus__grid">
          {CARDS.map((card) => (
            <article key={card.tag} className="focus-card">
              <div className="focus-card__icon">
                <FocusIcon />
              </div>
              <h3 className="focus-card__title">{card.title}</h3>
              {card.paragraphs.map((p, i) => (
                <p key={i} className="focus-card__text">{p}</p>
              ))}
              <p className="focus-card__note">{card.note}</p>
              <a href="#pris" className="focus-card__link">
                Läs mer
                <svg viewBox="0 0 16 12" aria-hidden="true">
                  <path d="M1 6H14M14 6L9 1M14 6L9 11" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
