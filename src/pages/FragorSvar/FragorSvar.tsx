import { useState } from 'react'
import PageHero from '../../components/PageHero/PageHero'
import '../shared/pageShared.css'
import './FragorSvar.css'

interface Faq {
  q: string
  a: string[]
  /** true = frågetexten kunde inte hittas på gamla sajten */
  missingQuestion?: boolean
}

const PPM_FAQ: Faq[] = [
  {
    q: 'Vad är premiepension?',
    a: [
      'Pensionen består oftast av tre delar – allmän pension, tjänstepension och premiepension. Därtill kan du ha ett eget pensionssparande. Hur stora de olika delarna blir i din framtida pension, eller om alla delar finns med är individuellt. Premiepensionen är en del av den allmänna pensionen. Varje år avsätts 2,5 procent av din lön och andra skattepliktiga ersättningar till premiepensionen. Hur stor den blir beror på summa och avkastning från de fonder du valt.',
    ],
  },
  {
    q: 'Hur följer jag som kund dina byten?',
    a: ['Du får information via e-post och sms samma dag som jag byter mina fonder.'],
  },
  {
    q: 'Varför kommer inte nyhetsbrevet fram som det ska?',
    a: [
      'Ditt filter för skräppost kan ha fångat upp det. Detta gör att meddelandet antingen hamnar bland skräpposten eller inte kommer fram alls.',
      'Se till att du har mats@mats-svensson.se som kontakt i din adressbok så minskar risken för detta problem. Eller så kan du flytta e-post meddelandet från skräpposten till din vanliga inkorg, och då brukar man få ett meddelande om man vill godkänna mats@mats-svensson.se som en giltig avsändare, vilket du då skall göra.',
      'Om du har en företagsadress så kan det system vi använder för att skicka e-post vara blockerat. Kolla i så fall med din IT-avdelning. Är det blockerat så fråga om de kan tillåta ”mats@mats-svensson.se”. Om det inte går så bör du ge oss en annan e-postadress som vi kan använda istället.',
      'Ditt e-postkonto kan vara fullt. Du behöver i så fall radera en del så att det finns plats för nya.',
      'Du har bytt till en ny e-postadress som inte har blivit uppdaterad i vårt system.',
      'Du har avprenumererat dig själv från nya e-post meddelanden från mig.',
      'Längst ner i varje mail jag skickar, finns en länk att klicka på om du inte vill ha några fler e-post meddelanden. Ibland händer det att man klickar på denna länk av misstag. Vissa e-post system kan även ha automatiska funktioner för att avprenumerera på den här typen av e-post. Kolla med din IT-avdelning om du har detta problem med en din företags e-post.',
    ],
  },
  {
    q: 'Måste jag byta fonder samma dag som jag får sms och e-post?',
    a: [
      'Både ja och nej. Ja, du bör byta samma dag för möjligheten till samma avkastning som jag, men naturligtvis är du inte tvungen. Du styr själv över dina placeringar.',
    ],
  },
  {
    q: 'Kan jag behålla egna fonder och bara göra vissa fondbyten enligt din information?',
    a: [
      'Ja det kan du, men då blir inte avkastningen densamma som min. Det går bra att använda mina fondval som inspiration, och sedan sätta samman dina fondval som du själv vill.',
    ],
  },
  {
    q: 'Är jag garanterad avkastning?',
    a: [
      'Jag kan inte garantera någon avkastning, men jag kan garantera att jag varje dag gör allt jag kan för att min, och därmed din, avkastning ska bli så hög som möjligt. Jag placerar ju mina egna pengar, min egen pension, och vill naturligtvis att den ska bli så hög som möjligt.',
    ],
  },
  {
    q: 'Hur betalar jag för tjänsten?',
    a: [
      'Du kan välja mellan att betala för ett år i taget med antingen Faktura, Swish eller kortbetalning. Du kan även välja att betala per månad, men då enbart med kort.',
    ],
  },
  {
    q: 'Är Mats Svensson ett registrerat företag?',
    a: [
      'Ja, det är ett registrerat bolagsnamn som heter Mats Svensson 2000 AB. Företaget är registrerat hos bolagsverket och innehar F-skattsedel.',
    ],
  },
]

const ISK_FAQ: Faq[] = [
  {
    q: 'Vad är ISK?',
    a: [
      'Ett investeringssparkonto, ISK, är ett förenklat sätt att spara i fonder eller aktier. Många banker erbjuder ISK, men de banker som har det största utbudet av fonder är Nordnet och Avanza.',
    ],
  },
  {
    q: 'Skall jag öppna ISK på Nordnet eller Avanza?',
    a: [
      'Både Nordnet och Avanza är bra banker för ISK. Det finns egentligen ingen större skillnad mellan dem anser jag, så det är upp till dig att välja. Jag har konto hos både Nordnet och Avanza för att jag skall kunna ge information om fondval för ISK för båda dessa banker.',
    ],
  },
]

function FaqList({ items, idPrefix }: { items: Faq[]; idPrefix: string }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="faq__list">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={idPrefix + i} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
            <button
              className="faq__question"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className={item.missingQuestion ? 'faq__missing' : ''}>
                {item.q}
              </span>
              <svg viewBox="0 0 14 14" aria-hidden="true" className="faq__icon">
                <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              </svg>
            </button>
            <div className="faq__answer">
              <div className="faq__answer-inner">
                {item.a.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function FragorSvar() {
  return (
    <>
      <PageHero eyebrow="Kontakt/support" title="Vanliga frågor och svar" />

      <section className="section">
        <div className="container faq__inner">
          <h2 className="section-heading faq__heading">Premiepension (PPM)</h2>
          <FaqList items={PPM_FAQ} idPrefix="ppm" />

          <h2 className="section-heading faq__heading faq__heading--spaced">
            Investeringssparkonto (ISK)
          </h2>
          <FaqList items={ISK_FAQ} idPrefix="isk" />
        </div>
      </section>
    </>
  )
}
