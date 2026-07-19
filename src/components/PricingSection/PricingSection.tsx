import { useState } from 'react'
import Button from '../ui/Button'
import { useReveal } from '../../hooks/useReveal'
import './PricingSection.css'

interface Plan {
  name: string
  subtitle: string
  desc: string
  monthly: number
  yearly: number
  featured?: boolean
  badge?: string
  features: string[]
}

const PLANS: Plan[] = [
  {
    name: 'Mats fondbytesinformation',
    subtitle: 'PPM',
    desc: 'Ta del av Mats fondbytesinformation för de PPM fonder han väljer i sitt privata sparande',
    monthly: 169,
    yearly: 1690,
    features: [
      'Utskick av Email samma dag Mats byter sina fonder.',
      'Utskick av SMS samma dag Mats byter sina fonder.',
      'Marknadsanalys varje månad via nyhetsbrev.',
    ],
  },
  {
    name: 'Mats fondbytesinformation',
    subtitle: 'PPM & ISK',
    desc: 'Ta del av Mats fondbytesinformation för de PPM & ISK fonder han väljer i sitt privata sparande',
    monthly: 217,
    yearly: 2170,
    features: [
      'Ta del av mina fondbytesbeslut för PPM och ISK-fonder över tid',
      'Utskick av E-mail samma dag Mats byter sina fonder',
      'Utskick av SMS samma dag Mats byter sina fonder',
      'Marknadsanalys vare månad via nyhetsbrev',
    ],
  },
  {
    name: 'For The Future by Mats',
    subtitle: '(PPM & ISK plus Skool Premium)',
    desc: 'Ta del av Mats fondbytesinformation för de PPM & ISK fonder han väljer i sitt privata sparande',
    monthly: 367,
    yearly: 3670,
    featured: true,
    badge: 'Populärast',
    features: [
      'Utskick av Email samma dag Mats byter sina fonder.',
      'Utskick av SMS samma dag Mats byter sina fonder.',
      'Marknadsanalys varje månad via nyhetsbrev.',
      'Skool Premium med alla kurser, föreläsningar, Q&A varje vecka',
    ],
  },
]

export default function PricingSection() {
  const [yearly, setYearly] = useState(false)
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="pricing section" id="pris">
      <div ref={ref} className="pricing__inner container reveal">
        <h2 className="section-heading section-heading--center">Vad kostar det?</h2>

        <div className="pricing__toggle" role="tablist" aria-label="Betalningsperiod">
          <button
            role="tab"
            aria-selected={!yearly}
            className={`pricing__toggle-btn ${!yearly ? 'is-active' : ''}`}
            onClick={() => setYearly(false)}
          >
            Varje månad
          </button>
          <button
            role="tab"
            aria-selected={yearly}
            className={`pricing__toggle-btn ${yearly ? 'is-active' : ''}`}
            onClick={() => setYearly(true)}
          >
            Varje år
          </button>
        </div>

        <div className="pricing__grid">
          {PLANS.map((plan, i) => (
            <article
              key={i}
              className={`price-card ${plan.featured ? 'price-card--featured' : ''}`}
            >
              {plan.badge && <span className="price-card__badge">{plan.badge}</span>}

              <header className="price-card__header">
                <h3 className="price-card__name">{plan.name}</h3>
                <p className="price-card__subtitle">{plan.subtitle}</p>
              </header>

              <p className="price-card__desc">{plan.desc}</p>

              <div className="price-card__price">
                <span className="price-card__amount">
                  {yearly ? plan.yearly : plan.monthly} kr
                </span>
                <span className="price-card__period">/{yearly ? 'år' : 'mån'}</span>
              </div>

              <Button
                href="#kontakt"
                variant={plan.featured ? 'primary' : 'navy'}
                full
              >
                Abonnera
              </Button>

              <p className="price-card__included">I detta ingår:</p>
              <ul className="price-card__features">
                {plan.features.map((f, j) => (
                  <li key={j}>
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 8.5L6.5 12L13 4.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
