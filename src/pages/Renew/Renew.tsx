import PageHero from '../../components/PageHero/PageHero'
import StripePricingTable from '../../components/StripePricingTable/StripePricingTable'
import '../shared/pageShared.css'
import './Renew.css'

export default function Renew() {
  return (
    <>
      <PageHero
        eyebrow="Abonnemang"
        title="Dags att förnya din tjänst!"
        text="Tack för fortsatt förtroende. Välj önskat alternativ nedan."
      />

      <section className="section renew">
        <div className="container renew__inner">
          <StripePricingTable variant="renew" />
        </div>
      </section>
    </>
  )
}
