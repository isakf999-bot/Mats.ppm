import PageHero from '../../components/PageHero/PageHero'
import StripePricingTable from '../../components/StripePricingTable/StripePricingTable'
import '../shared/pageShared.css'
import './Renew.css'

export default function Renew() {
  return (
    <>
      <PageHero
        eyebrow="Abonnemang"
        title="Förnya ditt abonnemang"
        text="Välj ditt paket nedan för att förnya eller fortsätta din fondbytesinformation."
      />

      <section className="section renew">
        <div className="container renew__inner">
          <StripePricingTable variant="renew" />
        </div>
      </section>
    </>
  )
}
