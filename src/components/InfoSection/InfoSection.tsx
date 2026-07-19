import { useReveal } from '../../hooks/useReveal'
import './InfoSection.css'

const POINTS = [
  'Informationen som delas är generell och ska inte ses som finansiell rådgivning eller personliga rekommendationer.',
  'Innehållet utgår från hur jag själv arbetar med mitt sparande och tar inte hänsyn till individuella förutsättningar eller mål.',
  'Alla investeringsbeslut fattas av dig själv och investeringar innebär alltid risk.',
]

export default function InfoSection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="info section">
      <div ref={ref} className="info__inner container reveal">
        <div className="info__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12 3a5 5 0 0 0-5 5c0 4-2 5-2 7h14c0-2-2-3-2-7a5 5 0 0 0-5-5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M10 20a2 2 0 0 0 4 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </div>
        <div className="info__body">
          <h2 className="info__title">Viktig information</h2>
          <ul className="info__list">
            {POINTS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
