import Button from '../../components/ui/Button'
import skoolWordmark from '../../assets/skool-wordmark.png'
import matsHero from '../../assets/MatsHero.png'
import skoolShot1 from '../../assets/skool-shot-1.png'
import skoolShot2 from '../../assets/skool-shot-2.png'
import { useReveal } from '../../hooks/useReveal'
import '../shared/pageShared.css'
import './Skool.css'

const SKOOL_URL =
  'https://www.skool.com/forthefuturebymats/about?ref=fe351d772023406289e3690f9d14c6eb'

const FOCUS = [
  'Långsiktiga strategier för sparande och investeringar',
  'Marknadsförståelse & makro',
  'Mentalt fokus, disciplin och mindset',
  'Tryggt lärande tillsammans med andra',
]

export default function Skool() {
  const bodyRef = useReveal<HTMLDivElement>()

  return (
    <>
      <section className="skool-hero" aria-label="Skool">
        <div
          className="skool-hero__bg"
          style={{ backgroundImage: `url(${matsHero})` }}
          aria-hidden="true"
        />
        <div className="skool-hero__scrim" aria-hidden="true" />
        <div className="skool-hero__grid" aria-hidden="true" />
        <div className="skool-hero__glow" aria-hidden="true" />

        <div className="skool-hero__inner container">
          <img
            className="skool-hero__wordmark"
            src={skoolWordmark}
            alt="skool"
            width={420}
            height={160}
          />
        </div>
      </section>

      <section className="section skool-body">
        <div ref={bodyRef} className="container reveal skool-body__grid">
          <div className="skool-copy">
            <h1 className="skool-copy__title">For The Future by Mats</h1>
            <p>
              Ett digitalt community för människor som vill skapa en stabil och
              medveten framtid – ekonomiskt, mentalt och personligt
            </p>
            <p>
              Efter att ha drivit min fondinformations-tjänst i femton år valde
              jag att skapa detta community för att kunna ge möjlighet till mer
              kunskap, högre avkastning och en bättre framtid.
            </p>
            <p>
              <strong>Syftet är enkelt:</strong>
            </p>
            <p>Att hjälpa dig utvecklas både som investerare och som människa.</p>

            <ul className="skool-focus__list">
              {FOCUS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              Mitt mål har alltid varit att “avskaffa mig själv” — att ge dig
              kunskap, verktyg och självförtroende nog att stå på egna ben och
              fatta kloka beslut över tid.
            </p>
            <p>
              <strong>Allt det kan du få på For The Future By Mats!</strong>
            </p>
            <p>
              Det handlar inte om snabba genvägar – utan om att förstå sig
              själv, sina beslut och sin riktning framåt.
            </p>
            <p>För dig som vill växa – på riktigt.</p>

            <p>
              <strong>Så deltar du:</strong>
            </p>
            <p>
              Delta genom att klicka på knappen till ett av Sveriges största
              ekonomi-communities på SKOOL!
            </p>
            <div className="skool-copy__cta">
              <Button href={SKOOL_URL} variant="primary" arrow external>
                Läs mer och delta
              </Button>
            </div>
          </div>

          <div className="skool-media">
            <figure className="skool-media__item">
              <img
                src={skoolShot1}
                alt="For The Future by Mats – community på Skool"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="skool-media__item">
              <img
                src={skoolShot2}
                alt="Kurser och startmaterial i For The Future by Mats"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}
