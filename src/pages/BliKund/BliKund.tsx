import PageHero from '../../components/PageHero/PageHero'
import PricingSection from '../../components/PricingSection/PricingSection'
import '../shared/pageShared.css'

export default function BliKund() {
  return (
    <>
      <PageHero
        eyebrow="Tjänst"
        title="Det är enkelt att bli kund"
        text="Välj ett av alternativen nedan 👇"
      />
      <PricingSection />
    </>
  )
}
