import section1 from '../../assets/Section1.png'
import { useReveal } from '../../hooks/useReveal'
import './StructureSection.css'

export default function StructureSection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="structure section" id="struktur">
      <div ref={ref} className="structure__inner container reveal">
        <div className="structure__media">
          <img
            className="structure__illustration"
            src={section1}
            alt="Illustration: hand med myntstaplar och ett stigande diagram som symboliserar struktur i sparandet"
            width={356}
            height={310}
          />
        </div>
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
            Du ser inte bara förändringar i portföljen, du får förstå
            resonemanget bakom dem. Fokus ligger på processen över tid, inte
            snabba tips eller kortsiktiga signaler.
          </p>
        </div>
      </div>
    </section>
  )
}
