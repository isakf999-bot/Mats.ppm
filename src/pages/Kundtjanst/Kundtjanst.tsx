import PageHero from '../../components/PageHero/PageHero'
import ContactForm from '../../components/ContactForm/ContactForm'
import '../shared/pageShared.css'
import './Kundtjanst.css'

export default function Kundtjanst() {
  return (
    <>
      <PageHero eyebrow="Kontakt/support" title="Kundtjänst" />

      <section className="section">
        <div className="container page-prose">
          <p>
            Om du har en fundering eller en fråga kan du se om svaret finns i
            Frågor&amp;Svar under fliken Kontakt/Support. Finner du inte svaret
            där kan du maila{' '}
            <a className="page-link" href="mailto:info@mats-svensson.se">
              info@mats-svensson.se
            </a>
            . Vill du bli uppringd kan du fylla i formuläret nedan.
          </p>
          <p>
            Har du frågor kring din faktura mailar du{' '}
            <a className="page-link" href="mailto:faktura@mats-svensson.se">
              faktura@mats-svensson.se
            </a>
          </p>
        </div>

        <div className="container kt__form-block">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
