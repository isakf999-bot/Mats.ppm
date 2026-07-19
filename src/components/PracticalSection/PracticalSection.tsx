import section3 from '../../assets/Section3.png'
import { useReveal } from '../../hooks/useReveal'
import './PracticalSection.css'

const POINTS = [
  'vill få bättre struktur i hur du tänker kring sparande',
  'vill följa ett verkligt arbetssätt över tid',
  'vill förstå hur beslut faktiskt fattas i praktiken',
  'söker något mer konkret än allmän sparinformation',
]

export default function PracticalSection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="practical section">
      <div ref={ref} className="practical__inner container reveal">
        <div className="practical__media">
          <img
            className="practical__illustration"
            src={section3}
            alt="Illustration: staplar av mynt som växer längs en stigande pil"
            width={262}
            height={277}
          />
        </div>
        <div className="practical__content">
          <span className="eyebrow">Praktiskt</span>
          <h2 className="section-heading">För dig som vill förstå sparande mer praktiskt</h2>
          <p className="practical__intro">Tjänsten passar dig som:</p>
          <ul className="practical__list">
            {POINTS.map((point) => (
              <li key={point}>
                <span className="practical__check" aria-hidden="true">
                  <svg viewBox="0 0 16 16">
                    <path d="M3 8.5L6.5 12L13 4.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
