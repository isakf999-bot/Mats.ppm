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
        <figure className="practical__media">
          <svg
            className="practical__illustration"
            viewBox="0 0 420 320"
            role="img"
            aria-label="Illustration: en genomtänkt fondfördelning mellan olika innehav"
          >
            <defs>
              <linearGradient id="prac-gold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f7c65a" />
                <stop offset="100%" stopColor="#f2a81d" />
              </linearGradient>
              <linearGradient id="prac-navy" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e376a" />
                <stop offset="100%" stopColor="#16294d" />
              </linearGradient>
            </defs>

            {/* Kortyta */}
            <rect x="0" y="0" width="420" height="320" rx="16" fill="#fbfbfd" />

            {/* Etikett-chip */}
            <g>
              <rect x="40" y="34" width="150" height="26" rx="13" fill="#16294d" />
              <circle cx="57" cy="47" r="5" fill="#f2a81d" />
              <text x="70" y="51" fill="#ffffff" fontFamily="Poppins, sans-serif" fontSize="11.5" fontWeight="600">Fondfördelning</text>
            </g>

            {/* Donut: fyra segment (r=78, omkrets ≈ 490.1) */}
            <g transform="rotate(-90 214 176)" fill="none" strokeWidth="30" strokeLinecap="butt">
              <circle cx="214" cy="176" r="78" stroke="url(#prac-gold)" strokeDasharray="196 490.1" strokeDashoffset="0" />
              <circle cx="214" cy="176" r="78" stroke="url(#prac-navy)" strokeDasharray="147 490.1" strokeDashoffset="-196" />
              <circle cx="214" cy="176" r="78" stroke="#a9b4c9" strokeDasharray="88.2 490.1" strokeDashoffset="-343" />
              <circle cx="214" cy="176" r="78" stroke="#f2d79a" strokeDasharray="58.8 490.1" strokeDashoffset="-431.2" />
            </g>

            {/* Center-hål med etikett */}
            <circle cx="214" cy="176" r="50" fill="#fbfbfd" />
            <text x="214" y="170" textAnchor="middle" fill="#16294d" fontFamily="Poppins, sans-serif" fontSize="16" fontWeight="700">Fondval</text>
            <text x="214" y="190" textAnchor="middle" fill="#8a8a97" fontFamily="Inter, sans-serif" fontSize="11">över tid</text>

            {/* Liten legend till höger */}
            <g fontFamily="Inter, sans-serif" fontSize="11" fill="#4b4b57">
              <rect x="322" y="118" width="12" height="12" rx="3" fill="#f2a81d" />
              <text x="340" y="128">40%</text>
              <rect x="322" y="144" width="12" height="12" rx="3" fill="#16294d" />
              <text x="340" y="154">30%</text>
              <rect x="322" y="170" width="12" height="12" rx="3" fill="#a9b4c9" />
              <text x="340" y="180">18%</text>
              <rect x="322" y="196" width="12" height="12" rx="3" fill="#f2d79a" />
              <text x="340" y="206">12%</text>
            </g>
          </svg>
        </figure>
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
