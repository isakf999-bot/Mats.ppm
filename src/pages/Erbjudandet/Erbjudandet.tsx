import Button from '../../components/ui/Button'
import erbHero from '../../assets/erbjudandet-hero.jpg'
import matsHund from '../../assets/mats-hund.webp'
import videoThumb from '../../assets/ppm-video-poster.png'
import { useReveal } from '../../hooks/useReveal'
import './Erbjudandet.css'

export default function Erbjudandet() {
  const introRef = useReveal<HTMLDivElement>()
  const offersRef = useReveal<HTMLDivElement>()
  const iskRef = useReveal<HTMLDivElement>()
  const trustRef = useReveal<HTMLDivElement>()

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="erb-hero">
        <div
          className="erb-hero__bg"
          style={{ backgroundImage: `url(${erbHero})` }}
          aria-hidden="true"
        />
        <div className="erb-hero__scrim" aria-hidden="true" />
        <div className="erb-hero__glow" aria-hidden="true" />

        <div className="erb-hero__inner container">
          <div className="erb-hero__content">
            <span className="eyebrow erb-hero__eyebrow">Tjänsten</span>
            <h1 className="erb-hero__title">Vad Mats Svensson erbjuder</h1>
            <p className="erb-hero__text">Få information om mina fondbyten</p>
            <div className="erb-hero__actions">
              <Button href="/#pris" variant="primary" arrow>
                Beställ nu
              </Button>
              <Button href="/#footer" variant="secondary">
                Kontakt
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Intro ---------- */}
      <section className="section erb-intro">
        <div ref={introRef} className="container reveal erb-intro__inner">
          <h2 className="section-heading">
            Få bättre förståelse för ditt fondsparande
          </h2>

          <p className="erb-intro__lead">
            Att välja fonder kan kännas svårt. Marknaden förändras, utbudet är
            stort och det är inte alltid lätt att veta vilka faktorer som
            faktiskt påverkar utvecklingen.
          </p>

          <p className="erb-intro__text">
            Min ambition är att ge dig bättre insyn i fondsparandet — hur jag
            tänker kring fondval, risk, marknadsläge och långsiktiga möjligheter.
          </p>
          <p className="erb-intro__text">
            Genom tjänsten får du information om vilka fondbyten jag gör i mitt
            eget sparande och kan själv välja om du vill agera utifrån samma
            information. Du får inte bara se vilka fonder jag väljer, utan också
            ta del av resonemanget bakom besluten.
          </p>
          <p className="erb-intro__text">
            Målet är att ge dig mer kunskap, bättre överblick och en tydligare
            process för att kunna fatta mer medvetna beslut kring ditt sparande.
          </p>

          <p className="erb-intro__emphasis">
            Att förstå sitt sparande och sin pension tidigt i livet kan göra stor
            skillnad över tid.
          </p>

          <aside className="erb-newsletter">
            <span className="erb-newsletter__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
                <path d="M3.5 7L12 13L20.5 7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="erb-newsletter__body">
              <p className="erb-newsletter__text">
                Du kan också ta del av mitt kostnadsfria nyhetsbrev. Där går jag
                varje månad igenom faktorer som påverkar börsens utveckling och
                delar min analys av marknadsläget framåt.
              </p>
              <p className="erb-newsletter__note">
                Nyhetsbrevet är kostnadsfritt och du kan prenumerera utan att bli
                kund.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ---------- PPM ---------- */}
      <section className="section erb-ppm">
        <div ref={offersRef} className="container reveal erb-ppm__inner">
          <span className="erb-ppm__tag">PPM</span>
          <h2 className="section-heading">Få information om mina byten i PPM</h2>

          <p className="erb-ppm__text">
            Alla som arbetar och betalar skatt tjänar in pengar till sin
            premiepension. Varje år avsätts 2,5 procent av din pensionsgrundande
            inkomst till PPM, där pengarna placeras i fonder.
          </p>
          <p className="erb-ppm__text">
            För många är det svårt att veta vilka fonder man ska välja, när man
            bör byta och vilka faktorer som påverkar utvecklingen. Utbudet är
            stort och marknaden förändras hela tiden.
          </p>
          <p className="erb-ppm__text">
            Genom min tjänst får du information om vilka fondbyten jag gör i mitt
            eget PPM-sparande. Du får också bättre inblick i hur jag resonerar
            kring fondval, risk, marknadsläge och långsiktigt sparande.
          </p>

          <div className="erb-flow">
            <div className="erb-flow__step">
              <span className="erb-flow__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M3.5 7L12 13L20.5 7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p>
                När jag gör ett fondbyte får du information via <strong>sms och
                mejl</strong>.
              </p>
            </div>
            <span className="erb-flow__arrow" aria-hidden="true">
              <svg viewBox="0 0 16 12">
                <path d="M1 6H14M14 6L9 1M14 6L9 11" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="erb-flow__step">
              <span className="erb-flow__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Zm10-10V7a4 4 0 0 0-8 0v4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p>
                Därefter loggar du själv in på ditt PPM-konto och väljer om du
                vill göra <strong>samma fondbyte</strong>.
              </p>
            </div>
          </div>

          <p className="erb-ppm__text">
            Syftet är inte att utlova avkastning, utan att ge dig kunskap,
            struktur och insyn i processen bakom mer medvetna fondval.
          </p>

          <p className="erb-intro__emphasis">
            Målet är att ge dig mer kunskap, struktur och förståelse för hur ett
            mer aktivt fondsparande kan gå till.
          </p>
        </div>
      </section>

      {/* ---------- ISK ---------- */}
      <section className="section erb-isk">
        <div ref={iskRef} className="container reveal erb-isk__inner">
          <div className="erb-isk__media">
            <img
              className="erb-isk__img"
              src={matsHund}
              alt="Mats Svensson håller sin hund ute bland träden"
              width={1080}
              height={643}
              loading="lazy"
            />
          </div>

          <div className="erb-isk__content">
            <span className="erb-ppm__tag">Investeringssparkonto (ISK)</span>
            <h2 className="section-heading">
              Få information om mina fondbyten i ISK
            </h2>

            <p className="erb-ppm__text">
              Ett investeringssparkonto, ISK, är en vanlig sparform för
              fondsparande. Du slipper deklarera varje enskild vinst och förlust,
              och betalar istället en årlig schablonskatt på värdet på kontot.
              Just nu är det skattefritt upp till 300 000 kr på saldot.
            </p>
            <p className="erb-ppm__text">
              För många sparare är den stora utmaningen inte att öppna ett ISK,
              utan att veta hur man ska tänka kring fondval, risk, marknadsläge
              och när det kan vara aktuellt att göra förändringar.
            </p>
            <p className="erb-ppm__text">
              Genom tjänsten får du information om vilka fondbyten jag gör i mitt
              eget privata fondsparande på ISK, på samma sätt som i mitt
              PPM-sparande.
            </p>
            <p className="erb-ppm__text">
              När jag gör ett fondbyte får du information via sms och mejl.
              Därefter kan du själv logga in hos exempelvis Avanza eller Nordnet
              och välja om du vill göra samma förändring i ditt eget sparande.
            </p>
            <p className="erb-ppm__text">
              Syftet är inte att utlova avkastning, utan att ge dig bättre insyn
              i processen bakom mina fondval. Du får möjlighet att följa hur jag
              resonerar kring marknaden, risknivå, fondval och långsiktigt
              sparande.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Nöjda kunder ---------- */}
      <section className="section erb-trust">
        <div ref={trustRef} className="container reveal erb-trust__inner">
          <h2 className="section-heading">Nöjda kunder sedan år 2010</h2>

          <p className="erb-trust__text">
            I kölvattnet av skandaler inom PPM-systemet är det viktigt att du
            känner förtroende för mig och min tjänst. För att du ska känna dig
            trygg kan du i filmen nedan se när jag loggar in på mitt PPM-konto.
          </p>
          <p className="erb-trust__text">
            Video nedan är från 2019-08-13 och reflekterar värdet på mitt PPM
            konto vid den tidpunkten.
          </p>
          <p className="erb-trust__text">
            Mitt PPM konto har förstås förändrats sedan dess, men filmen visar
            ändå hur du hittar din egen utveckling i PPM.
          </p>

          {/* Nuvarande bild har play-knappen inbränd (skärmdump), därför är vår
              egen guldknapp dold via modifieraren. Tas bort när ren bild finns. */}
          <a
            className="erb-video erb-video--baked-play"
            href="https://www.youtube.com/watch?v=MvRS_y-GwYI"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spela upp filmen: Mats loggar in på sitt PPM-konto"
          >
            <img
              src={videoThumb}
              alt="Mats Svensson loggar in på sitt PPM-konto"
              loading="lazy"
              width={1090}
              height={608}
            />
            <span className="erb-video__play" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section erb-cta">
        <div className="container erb-cta__inner">
          <div className="erb-cta__content">
            <h2 className="erb-cta__title">Redo för nästa steg?</h2>
            <p className="erb-cta__text">
              Kom igång i dag och få mina fondbyten direkt när de sker.
            </p>
          </div>
          <Button href="/#pris" variant="primary" arrow>
            Beställ nu
          </Button>
        </div>
      </section>
    </>
  )
}
