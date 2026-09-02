import { useReveal } from '../../hooks/useReveal'
import './StructureSection.css'

export default function StructureSection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="structure section" id="struktur">
      <div ref={ref} className="structure__inner container reveal">
        <figure className="structure__media">
          <svg
            className="structure__illustration"
            viewBox="0 0 420 320"
            role="img"
            aria-label="Illustration: ett fondsparande som växer strukturerat över tid"
          >
            <defs>
              <linearGradient id="struct-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#16294d" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#16294d" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="struct-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f2a81d" />
                <stop offset="100%" stopColor="#f7c65a" />
              </linearGradient>
            </defs>

            {/* Kortyta */}
            <rect x="0" y="0" width="420" height="320" rx="16" fill="#fbfbfd" />

            {/* Rutnät */}
            <g stroke="#16294d" strokeOpacity="0.07" strokeWidth="1">
              <line x1="40" y1="70" x2="392" y2="70" />
              <line x1="40" y1="130" x2="392" y2="130" />
              <line x1="40" y1="190" x2="392" y2="190" />
              <line x1="40" y1="250" x2="392" y2="250" />
            </g>

            {/* Bakomliggande staplar (navy, låg opacitet) */}
            <g fill="#16294d" fillOpacity="0.10">
              <rect x="70" y="196" width="26" height="54" rx="5" />
              <rect x="132" y="168" width="26" height="82" rx="5" />
              <rect x="194" y="182" width="26" height="68" rx="5" />
              <rect x="256" y="140" width="26" height="110" rx="5" />
              <rect x="318" y="104" width="26" height="146" rx="5" />
            </g>

            {/* Area under trendlinjen */}
            <path
              d="M53 214 L115 196 L177 205 L239 150 L301 132 L331 96 L331 250 L53 250 Z"
              fill="url(#struct-area)"
            />

            {/* Trendlinje */}
            <path
              d="M53 214 L115 196 L177 205 L239 150 L301 132 L331 96"
              fill="none"
              stroke="url(#struct-line)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Datapunkter */}
            <g fill="#ffffff" stroke="#f2a81d" strokeWidth="3">
              <circle cx="53" cy="214" r="4.5" />
              <circle cx="177" cy="205" r="4.5" />
              <circle cx="301" cy="132" r="4.5" />
            </g>

            {/* Pilspets uppe till höger */}
            <path
              d="M331 96 l-16 4 M331 96 l-4 16"
              fill="none"
              stroke="#f2a81d"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Baslinje */}
            <line x1="40" y1="250" x2="392" y2="250" stroke="#16294d" strokeOpacity="0.18" strokeWidth="1.5" />

            {/* Liten etikett-chip */}
            <g>
              <rect x="40" y="36" width="96" height="26" rx="13" fill="#16294d" />
              <circle cx="57" cy="49" r="5" fill="#f2a81d" />
              <text x="70" y="53" fill="#ffffff" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="600">PPM · ISK</text>
            </g>
          </svg>
        </figure>
        <div className="structure__content">
          <span className="eyebrow">Struktur</span>
          <h2 className="section-heading">Få struktur i ditt sparande</h2>
          <p className="structure__lead">
            De flesta sparar passivt. Andra agerar utan tydlig struktur.
          </p>
          <p className="structure__text">
            Här får du följa ett verkligt fondsparande där beslut tas löpande
            utifrån marknaden och hur jag tolkar den.
          </p>
          <p className="structure__text">
            Du ser inte bara förändringar i PPM/ISK portföljerna, du får förstå
            resonemanget bakom dem. Fokus ligger på processen över tid, inte
            snabba tips eller kortsiktiga signaler.
          </p>
        </div>
      </div>
    </section>
  )
}
