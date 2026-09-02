import { useMemo, useState } from 'react'
import Button from '../ui/Button'
import { useReveal } from '../../hooks/useReveal'
import './CalculatorSection.css'

interface SliderConfig {
  key: string
  label: string
  min: number
  max: number
  step: number
  suffix: string
}

const SLIDERS: SliderConfig[] = [
  { key: 'monthly', label: 'Månadssparande', min: 0, max: 20000, step: 500, suffix: 'kr' },
  { key: 'start', label: 'Startbelopp', min: 0, max: 1000000, step: 10000, suffix: 'kr' },
  { key: 'years', label: 'Antal år att spara', min: 1, max: 40, step: 1, suffix: 'år' },
  { key: 'rate', label: 'Årlig avkastning', min: 0, max: 20, step: 0.5, suffix: '%' },
]

const formatSEK = (n: number) =>
  new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 }).format(Math.round(n))

export default function CalculatorSection() {
  const [values, setValues] = useState<Record<string, number>>({
    monthly: 1000,
    start: 100000,
    years: 10,
    rate: 7,
  })
  const ref = useReveal<HTMLDivElement>()

  const total = useMemo(() => {
    const { monthly, start, years, rate } = values
    const r = rate / 100 / 12
    const months = years * 12
    // Framtida värde av startbelopp + månatliga insättningar
    const fvStart = start * Math.pow(1 + r, months)
    const fvMonthly = r === 0 ? monthly * months : monthly * ((Math.pow(1 + r, months) - 1) / r)
    return fvStart + fvMonthly
  }, [values])

  const set = (key: string, val: number) =>
    setValues((v) => ({ ...v, [key]: val }))

  return (
    <section className="calc section" id="kalkylator">
      <div ref={ref} className="calc__inner container reveal">
        <div className="calc__head">
          <h2 className="section-heading">
            Bygg en förmögenhet med ränta på ränta-effekten
          </h2>
          <p className="calc__intro">
            Nedan ser du skillnaden på att få +7% avkastning per år (vilket är
            det normala) och att få +15% per år, vilket Mats Svensson har som mål
            de kommande 15 åren. Laborera med egna exempel och lägg märke till
            hur stor skillnad några procents avkastning gör.
          </p>
        </div>

        <div className="calc__grid">
          <div className="calc__panel">
            {SLIDERS.map((s) => {
              const pct = ((values[s.key] - s.min) / (s.max - s.min)) * 100
              return (
                <div key={s.key} className="calc-field">
                  <div className="calc-field__top">
                    <label htmlFor={s.key}>{s.label}</label>
                    <span className="calc-field__value">
                      {formatSEK(values[s.key])} {s.suffix}
                    </span>
                  </div>
                  <input
                    id={s.key}
                    type="range"
                    min={s.min}
                    max={s.max}
                    step={s.step}
                    value={values[s.key]}
                    onChange={(e) => set(s.key, Number(e.target.value))}
                    className="calc-field__range"
                    style={{ '--pct': `${pct}%` } as React.CSSProperties}
                  />
                </div>
              )
            })}
          </div>

          <div className="calc__result">
            <div className="calc__result-glow" aria-hidden="true" />
            <p className="calc__result-label">Totalbelopp efter {values.years} år</p>
            <p className="calc__result-amount">{formatSEK(total)} kr</p>
            <Button href="#pris" variant="primary" arrow>
              Beställ nu
            </Button>
            <p className="calc__result-note">
              ”Laborera gärna med egna siffror i räknesnurran och se skillnaden
              mellan att få 7% avkastning per år och 15% per år vilket är mitt
              mål de kommande 15 åren. Skatter, avgifter och andra eventuella
              kostnader är inte inräknat i summan.”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
