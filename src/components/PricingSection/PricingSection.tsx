import StripePricingTable from '../StripePricingTable/StripePricingTable'
import { useReveal } from '../../hooks/useReveal'
import './PricingSection.css'

export default function PricingSection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="pricing section" id="pris">
      <div ref={ref} className="pricing__inner container reveal">
        <span className="section-eyebrow">Priser</span>
        <h2 className="section-heading section-heading--center">Vad kostar det?</h2>
        <StripePricingTable variant="home" />
      </div>
    </section>
  )
}
