import PageHero from '../../components/PageHero/PageHero'
import omMatsBild from '../../assets/om-mats-1.jpg'
import { useReveal } from '../../hooks/useReveal'
import '../shared/pageShared.css'
import './OmMats.css'

export default function OmMats() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <>
      <PageHero eyebrow="Om" title="Vem är Mats Svensson?" />

      <section className="section">
        <div ref={ref} className="container reveal om-mats__inner">
          <div className="om-mats__content page-prose">
            <p>
              Jag arbetar idag med mitt företag men har också tjugo års
              erfarenhet som socionom med inriktning barn och ungdomar. Jag bor
              på en gård utanför Helsingborg med fru, fyra barn och många olika
              djur.
            </p>
            <p>
              Mitt hjärta har alltid slagit lite extra för människor, socialt
              arbete och mjuka värden. När premiepensionssystemet lanserades år
              2000 var jag egentligen inte särskilt intresserad av fonder och
              sparande.
            </p>
            <p>
              Några år senare väcktes ändå min nyfikenhet. Jag började sätta mig
              in i hur systemet fungerade, vilka faktorer som påverkade
              fondutvecklingen och hur man kunde tänka mer aktivt kring sina
              fondval.
            </p>
            <p>
              Med tiden växte intresset till en tydlig process. År 2009
              uppmärksammades jag bland annat i Dagens industri efter ett år med
              mycket stark avkastning i mitt fondsparande.
            </p>
            <p>
              Det blev startpunkten för min fondbytesinformationstjänst. Min idé
              var att fler skulle kunna få insyn i hur jag resonerar kring
              fondval, marknadsläge och risk — inte som ett löfte om resultat,
              utan som ett sätt att ge mer kunskap och förståelse för processen
              bakom besluten.
            </p>
          </div>

          <div className="om-mats__media">
            <img
              className="om-mats__img"
              src={omMatsBild}
              alt="Mats Svensson"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  )
}
