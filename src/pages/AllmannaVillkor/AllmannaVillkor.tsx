import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero/PageHero'
import '../shared/pageShared.css'
import '../shared/Legal.css'

export default function AllmannaVillkor() {
  return (
    <>
      <PageHero eyebrow="Juridiskt" title="Allmänna villkor" align="left" />

      <section className="section">
        <article className="container legal">
          <p className="legal__meta">
            Version 6.0; giltiga från och med den 20:e februari 2026
          </p>

          <h2>1. Information om företaget</h2>
          <p>Mats Svensson 2000 AB (&quot;Bolaget&quot;)</p>
          <p>Org. nr: 556831–3976</p>
          <p>Henry Dunkers plats 4</p>
          <p>252 67 Helsingborg</p>
          <p>
            Telefon:{' '}
            <a href="tel:+46736196986">073-619 69 86</a>
          </p>
          <p>
            E-post:{' '}
            <a href="mailto:info@mats-svensson.se">info@mats-svensson.se</a>
          </p>
          <p>Innehar F-skattsedel</p>

          <h2>2. Allmänt om tecknande av Avtalet om Tjänsten</h2>
          <p>
            Information om Bolagets tjänst (&quot;Tjänsten&quot;) återfinns på{' '}
            <a href="https://mats-svensson.se/erbjudandet/">
              https://mats-svensson.se/erbjudandet/
            </a>
            .
          </p>
          <p>
            När en person (&quot;Kund&quot; eller &quot;du&quot;) och Bolaget ingår avtal om
            Tjänsten (&quot;Avtalet&quot;) tillämpas dessa allmänna villkor
            (&quot;Villkoren&quot;) på Avtalet. Dessa Villkor utgör en integrerad del av
            Avtalet.
          </p>

          <h3>2.1 Avtal via Bolagets hemsida</h3>
          <p>
            Beställning av Tjänsten via Bolagets hemsida sker via{' '}
            <a href="https://mats-svensson.se">https://mats-svensson.se</a>
          </p>
          <p>
            Du fyller i dina kontaktuppgifter (e-post adress, mobilnummer,
            fullständigt namn och land) i ett formulär samt klickar i rutan att
            du godkänner Tjänstevillkoren och Integritetspolicy för Bolaget.
            Genom att därefter klicka på &quot;Betala och abonnera&quot; (eller
            motsvarande text på annat språk) bekräftar du din beställning av
            Tjänsten och ingår Avtalet.
          </p>

          <h3>2.2 Abonnemangsform</h3>
          <p>
            Tjänsten erbjuds som ett löpande abonnemang utan fast avtalsperiod.
            Du väljer vid beställning mellan månadsvis eller årsvis betalning.
            Abonnemanget löper tillsvidare och förnyas automatiskt vid varje
            betalningsperiods slut tills du aktivt säger upp det.
          </p>
          <p>
            Bolaget erbjuder olika tjänstenivåer: Fondbytesinformation PPM,
            Fondbytesinformation PPM &amp; ISK samt For the Future by Mats (PPM
            &amp; ISK plus Skool Premium). Du kan när som helst under pågående
            abonnemangsperiod byta mellan dessa tjänstenivåer via Kundportalen.
          </p>

          <h2>3. Kostnadsfri provperiod</h2>
          <p>
            Bolaget kan erbjuda kostnadsfria provperioder via rabattkoder.
            Provperiodens längd och villkor framgår av respektive erbjudande.
          </p>
          <p>
            Bolaget avgör efter eget gottfinnande vilka som är berättigade till
            kostnadsfri provperiod och förbehåller sig rätten att begränsa eller
            avsluta provperioder för att förhindra missbruk. Kunder med ett
            befintligt eller nyligen avslutat Avtal är som huvudregel inte
            berättigade till kostnadsfri provperiod. Det går inte att kombinera
            ett erbjudande om kostnadsfri provperiod med andra erbjudanden.
          </p>
          <p>
            Om du inte avslutar Avtalet innan provperiodens slut påbörjas
            automatiskt ett betalt abonnemang enligt den abonnemangsform du valt
            vid registreringen.
          </p>

          <h2>4. Bolagets information</h2>
          <p>
            Bolagets information om Mats Svenssons fondplaceringar
            (&quot;Informationen&quot;) utgör inte någon finansiell rådgivning,
            rådgivningstjänst eller förvaltningstjänst och det är du som Kund
            som avgör om och i så fall hur du använder Informationen. Bolaget
            saknar helt kännedom om dina individuella ekonomiska förutsättningar
            och saknar därför möjlighet att ge dig individuellt utformad
            rådgivning. Du har varken rätt eller möjlighet att vända dig direkt
            till Bolaget för individuellt utformad rådgivning av något slag.
          </p>
          <p>
            Du bekräftar genom ingående av Avtalet att du är fullt medveten om
            att aktie- och fondhandel är förenad med risk för kapitalförlust
            samt att historisk avkastning inte är någon garanti för framtida
            avkastning. Du bekräftar vidare att du är medveten om att aktier och
            fondandelar kan öka och minska i värde vilket innebär att du aldrig
            är garanterad att få tillbaka det kapitalbelopp du sätter in eller
            flyttar på ditt premiepensionskonto, oavsett om det sker på grundval
            av Informationen eller inte. Då fonder ofta placerar del av
            kapitalet på utländska marknader bekräftar du även att du är medveten
            om att värdet på fondandelar kan påverkas av förändringar i
            valutakurser.
          </p>

          <h2>5. Pris</h2>
          <p>
            Priset för Tjänsten framgår av Bolagets hemsida i en pristabell. I
            priset inkluderas samtliga förekommande skatter, avgifter och andra
            kostnader. I priset inkluderas inte de eventuella kostnader du har
            för din förvaltning av ditt premiepensionskapital. Bolaget
            förbehåller sig rätten att justera priset för Tjänsten i enlighet
            med punkt 6.4.
          </p>

          <h2>6. Villkor för betalning och fullgörande</h2>
          <p>
            Tjänsten tillhandahålls omedelbart i samband med ingående av
            Avtalet.
          </p>

          <h3>6.1 Betalningsmetod</h3>
          <p>
            Betalning för Tjänsten sker uteslutande via konto- eller kreditkort
            genom betaltjänsten Stripe. Inga andra betalningsmetoder erbjuds.
          </p>
          <p>
            Om täckning saknas på ditt kort nekas beställningen och inget Avtal
            ingås. Om din betalningsmetod inte fungerar vid automatisk förnyelse
            förblir du betalningsskyldig för obetald avgift. Bolaget förbehåller
            sig rätten att avbryta Tjänsten till dess betalning erlagts.
          </p>

          <h3>6.2 Automatisk förnyelse</h3>
          <p>
            Abonnemanget förnyas automatiskt vid varje betalningsperiods slut
            enligt följande:
          </p>
          <p>
            Månadsabonnemang: Förnyas automatiskt varje månad. Betalning
            debiteras ditt kort på den kalenderdag som motsvarar din
            ursprungliga startdag. Du erhåller ett kvitto via e-post efter varje
            genomförd betalning.
          </p>
          <p>
            Årsabonnemang: Förnyas automatiskt varje år. Du erhåller en
            påminnelse via e-post trettio (30) dagar innan förnyelsen sker.
            Betalning debiteras ditt kort på den kalenderdag som motsvarar din
            ursprungliga startdag.
          </p>

          <h3>6.3 Uppsägning och avslutande</h3>
          <p>
            Du kan när som helst säga upp ditt abonnemang genom att kontakta
            kundtjänst
          </p>
          <p>
            Vid uppsägning avslutas abonnemanget vid utgången av den innevarande
            betalningsperiod du redan har betalat för. Du behåller tillgång till
            Tjänsten under resterande tid av perioden. Ingen återbetalning sker
            för oanvänd tid.
          </p>
          <p>
            Du kan även via Kundportalen byta tjänstenivå under pågående
            abonnemangsperiod.
          </p>

          <h3>6.4 Prisändringar</h3>
          <p>
            Bolaget förbehåller sig rätten att ändra priset för Tjänsten. Du
            informeras om prisändringar via e-post senast trettio (30) dagar
            innan ändringen träder i kraft. Prisändringen tillämpas från och med
            din nästa automatiska förnyelse efter att informationsperioden har
            löpt ut. Om du inte accepterar det nya priset kan du säga upp ditt
            abonnemang innan förnyelsen sker.
          </p>

          <h2>7. Reklamation</h2>
          <p>
            Du har som kund alltid rätt att reklamera fel i Tjänsten inom skälig
            tid från det att du upptäckte, eller borde ha upptäckt ett fel i
            Tjänsten. Reklamation som sker inom två månader efter det att du
            märkte felet anses alltid ha skett i rätt tid
            (&quot;Reklamationsfristen&quot;). Om du inte reklamerar inom
            Reklamationsfristen förlorar du rätten att åberopa eventuellt fel.
          </p>
          <p>
            Med fel i Tjänsten avses att Tjänsten avviker från Avtalet. Exempel
            kan vara att Informationen inte når dig på vederbörligt sätt eller
            andra tekniska brister i Tjänsten, förutsatt att felet är att
            hänföra till förhållande från Bolagets sida. Med fel avses således
            inte brister i Tjänsten som beror på att du lämnat felaktiga
            kontaktuppgifter.
          </p>
          <p>
            Som fel i Tjänsten avses inte sådana omständigheter som är att
            hänföra till dig som kund, exempelvis tekniska brister från din
            sida.
          </p>
          <p>
            Reklamation kan göras till Bolaget via e-post eller kontaktformulär
            på hemsidan. Reklamation anses ha skett i rätt tid när du inom
            Reklamationsfristen avsänder sådant meddelande till Bolaget. Om
            Bolaget bedömer att reklamationen är skälig har du i första hand
            rätt till avhjälpande av felet samt till återbetalning avseende tid
            under vilken Tjänsten inte tillhandahållits.
          </p>

          <h2>8. Ångerrätt</h2>
          <p>
            Vid köp av Bolagets Tjänster har du alltid rätt att frånträda
            Avtalet inom 14 dagar från det att Avtalet ingicks
            (&quot;Ångerrätt&quot;). Du har rätt att frånträda Avtalet utan att ange
            något skäl.
          </p>
          <p>
            För att utöva ångerrätten lämnas ett klart och tydligt meddelande
            till Bolaget om att du önskar frånträda Avtalet. Meddelandet kan
            skickas via e-post eller kontaktformulär på hemsidan.
          </p>
          <p>
            Du kan även använda Konsumentverkets standardformulär för utövande
            av ångerrätt som nås via{' '}
            <a
              href="http://publikationer.konsumentverket.se/kontrakt-och-mallar/angerblankett"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://publikationer.konsumentverket.se/kontrakt-och-mallar/angerblankett
            </a>
            .
          </p>
          <p>
            För att du ska anses ha utövat Ångerrätten i tid ska meddelande om
            att du vill nyttja Ångerrätten avsändas till Bolaget inom 14 dagar
            från det att Avtalet ingicks.
          </p>
          <p>
            Bolaget återbetalar avgift som erlagts för Tjänsten. Återbetalning
            kommer att ske utan onödigt dröjsmål och alltid senast inom 14
            dagar från det att Bolaget underrättades om ditt beslut att
            utnyttja din ångerrätt. Bolaget kommer att använda samma metod för
            återbetalning som du använde vid betalning av Tjänsten.
          </p>

          <h2>9. Garanti och ansvar</h2>
          <p>
            Bolaget lämnar inte några som helst garantier avseende Informationen
            och åtar sig inte något som helst ansvar för eventuella
            kapitalförluster eller annan direkt eller indirekt skada som
            åsamkas dig på grund av din användning av Informationen. Bolaget
            ansvarar inte heller under några omständigheter för riktigheten
            och/eller tillförlitligheten i Informationen.
          </p>
          <p>
            Bolaget är inte skyldig att genom försäkring eller på annat sätt
            täcka dina eventuella kapitalförluster eller andra direkta eller
            indirekta skador som kan drabba dig på grund av din användning av
            Tjänsten eller Informationen. Bolaget åtar sig inte heller, utöver
            vad som anges i dessa Villkor, något som helst ansvar för direkta
            eller indirekta kapitalförluster eller andra skador i övrigt som
            kan åsamkas dig på grund av eventuella tekniska avbrott eller andra
            uppehåll i Tjänsten.
          </p>
          <p>
            Informationen som Bolaget lämnar till dig är för närvarande baserad
            på Mats Svenssons förvaltning av dennes premiepensionskapital. Om
            Mats Svensson till följd av exempelvis sjukdom, frånfall eller annan
            omständighet inte längre kan förvalta sitt premiepensionskapital
            har Bolaget rätt att utse annan professionell person
            (&quot;Placerare&quot;) vars förvaltning ska ligga till grund för lämnande
            av Informationen. Mats Svenssons eventuella frånfall och Bolagets
            utseende av Placerare utgör inte grund för uppsägning av Tjänsten
            och du har inte heller rätt till återbetalning av erlagd avgift för
            innevarande betalningsperiod eller annan ersättning, skadestånd
            eller kompensation.
          </p>

          <h2>10. Behandling av personuppgifter</h2>
          <p>
            Din personliga integritet är viktig för Bolaget. Bolaget är
            personuppgiftsansvarig för behandlingen av personuppgifter enligt
            avtalet och hanterar dessa enligt bestämmelserna i EU:s
            dataskyddsförordning (GDPR) samt den kompletterande svenska lagen
            om dataskydd. I Bolagets{' '}
            <Link to="/integritetspolicy">Integritetspolicy</Link> finner du mer
            information om vilka personuppgifter som Bolaget behandlar om dig,
            ändamålet, den rättsliga grunden samt lagringstiden för
            behandlingen, samt din rätt till bland annat information, radering
            och rättelse.
          </p>

          <h2>11. Force Majeure</h2>
          <p>
            Bolaget friskriver sig, utöver vad som i övrigt anges i dessa
            Villkor, från sin skyldighet att fullgöra sin del av Avtalet och
            från skyldighet att betala skadestånd eller annan ersättning till
            dig som kund om Bolagets åtaganden enligt Avtalet inte alls eller
            endast till onormalt hög kostnad kan fullgöras på grund av krig
            eller upplopp, på grund av sådan arbetsinställelse, blockad,
            eldsvåda, explosion eller ingrepp av offentlig myndighet och
            liknande händelser som Bolaget inte råder över och inte heller
            kunnat förutse.
          </p>

          <h2>12. Sekretess</h2>
          <p>
            Du förbinder dig att, utan begränsning i tiden, inte för tredje man
            avslöja Konfidentiell Information (inklusive, men inte begränsat
            till, Informationen) som du erhåller från Bolaget. Med Konfidentiell
            Information avses all information som lämnas av Bolaget till dig
            som kund och som rör Avtalet och/eller Tjänsten och/eller dess
            innehåll, oavsett om och hur informationen finns dokumenterad, med
            undantag för (i) information som är allmänt känd eller kommer till
            allmän kännedom på annat sätt än genom brott mot Avtalet; (ii)
            information som du kan visa att du redan kände till innan du
            mottog den från Bolaget; och (iii) information som du mottagit
            eller kommer att motta från tredje man utan att vara bunden av
            sekretess i förhållande till den informationen.
          </p>

          <h2>13. Immateriella rättigheter</h2>
          <p>
            Bolaget behåller äganderätten till samtliga förekommande till
            Tjänsten knutna immateriella rättigheter. Du har som kund inte rätt
            att licensiera, överlåta eller på annat sätt förfoga över Bolagets
            immateriella rättigheter eller dina rättigheter och/eller
            skyldigheter enligt Avtalet.
          </p>

          <h2>14. Tillämplig lag och tvister</h2>
          <p>Svensk lag ska tillämpas på Avtalet och dessa Villkor.</p>
          <p>
            Som kund har du, i händelse av tvist, rätt att hänföra tvisten till
            Allmänna Reklamationsnämnden (ARN). Bolaget har som policy att
            följa ARN:s rekommendationer. Du kan kontakta ARN via deras hemsida{' '}
            <a
              href="https://www.arn.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.arn.se
            </a>{' '}
            eller genom att skicka brev till: Allmänna Reklamationsnämnden, Box
            174, 101 23 Stockholm.
          </p>
          <p>
            Du kan också vända dig till EU-kommissionens online-plattform för
            alternativ tvistelösning som nås via{' '}
            <a
              href="http://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://ec.europa.eu/consumers/odr/
            </a>
            .
          </p>
          <p>
            Tvister som uppstår i anledning av Avtalet ska slutligt avgöras av
            allmän domstol.
          </p>
        </article>
      </section>
    </>
  )
}
