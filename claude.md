# Fullstack Web Project — Design & Engineering Standard

## Roll & Grundprincip

Jag är fullstack-utvecklare med tungt fokus på FRONTEND/DESIGN. Backend
ska vara enkelt och robust, men UI/UX är den absolut viktigaste delen
av allt du bygger åt mig.

**Grundregel: Allt du levererar ska hålla en nivå som skulle kunna
publiceras på Awwwards, Godly eller Land-book utan justering.**
Om det du bygger ser ut som en gratis-mall, en Bootstrap-default,
eller något du skulle hitta på tusen andra sajter — det är ett
misslyckande, oavsett om koden "fungerar".

Innan du levererar något, ställ dig själv frågan: "Skulle jag bli
imponerad om jag såg detta på en riktig produkt?" Om svaret är nej,
gör om det innan du visar det för mig.

## Tech Stack

- Frontend: React + Vite, TypeScript (JavaScript funkar också om
  projektet inte behöver TS) — detta är standardvalet om jag inte
  anger något annat
- Styling: Beror på om projektet är React eller inte —
  - INTE React (rent HTML/CSS, eller annat ramverk): SCSS/CSS3 som grund
  - React: CSS/CSS Modules per komponent enligt DEL 4B (varje komponent
    får en egen `.css`/`.module.css`), inte SCSS rakt av
  Tailwind CSS ska helst undvikas i båda fallen, men kan vara ett
  medvetet undantag i vissa fall (t.ex. om projektet redan är byggt
  med Tailwind, eller jag uttryckligen ber om det) — håll dig ändå
  konsekvent inom ETT system per projekt, blanda inte flera
- Design/Handoff: Figma för mockups/referenser när relevant
- Animation: [FYLL I — t.ex. Framer Motion / GSAP]
- Backend: [FYLL I — t.ex. Node/Express, serverless]
- Databas: [FYLL I — t.ex. Postgres/Supabase]
- Data-källor/API: [FYLL I när relevant för projektet]

---

## DEL 1 — HUR DU ANVÄNDER BILDER SOM JAG SKICKAR

Detta är den viktigaste delen av hela filen. Jag kommer ofta skicka
skärmdumpar av sajter, sektioner eller UI-element som referens.
Du ska ALLTID behandla en bild som en precis specifikation, inte
som en vag stämningsbild.

### Steg-för-steg när jag skickar en bild

1. **Beskriv först vad du ser, innan du kodar.** Lista: layout-struktur,
   färgpalett (med ungefärliga hex-koder om du kan uppskatta dem),
   typografi (font-vikt, storlek-relationer), spacing-mönster,
   komponenter som syns (navbar, cards, buttons, badges osv.),
   och eventuella animationer/states du kan anta finns.

2. **Fråga vilken typ av referens det är**, om det inte är uppenbart:
   - "Klona detta EXAKT" → bygg pixel-nära, samma struktur, samma
     spacing, byt bara ut innehåll/text/data till mitt projekt
   - "Ta inspiration av detta" → använd som stilistisk grund men
     skapa något eget utifrån det
   - Om jag inte specificerar: anta en 60–70% kloning av struktur/
     layout/spacing, och lägg till 30–40% egen twist utifrån resten
     av denna fil (färgpalett, tech stack, projektets syfte)

3. **Extrahera specifika delar när jag ber om det.** Om jag säger
   "ta navbaren från denna bild" eller "ta hero-sektionen" — bygg
   ENDAST den delen exakt som den ser ut på bilden (positionering av
   logotyp, menyalternativ, spacing mellan dem, hover-states om
   synliga, bakgrundsfärg/blur/transparens), och lämna resten av
   sidan orörd om inte annat sagts.

4. **Applicera extraherad stil konsekvent.** Om du klonat en navbar
   eller ett komponent-mönster från en bild, återanvänd samma
   design-tokens (färger, radius, spacing, skuggor) på resten av
   sidan du bygger, så helheten känns sammanhängande — inte som en
   klonad del ihopklistrad med resten i annan stil.

5. **Var specifik om osäkerhet.** Om en exakt färg eller ett mått är
   omöjligt att avgöra från bilden, gör ditt bästa antagande och säg
   det uttryckligen: "Jag uppskattade denna färg till #0A0A0F, justera
   om det inte stämmer."

6. **Flera bilder = kombinera aktivt, inte sekventiellt.** Om jag
   skickar flera bilder i samma begäran (t.ex. en för navbar, en för
   scoreboards), bygg dem som EN sammanhängande design, inte som
   separata stilar som råkar hamna på samma sida.

### Vad du ALDRIG ska göra med referensbilder

- Aldrig ignorera bilden och bygga din egen generiska tolkning istället
- Aldrig "runda av" detaljer för att det är enklare att koda
- Aldrig strunta i spacing/proportioner för att det är krångligt att
  matcha exakt — proportioner är oftast det som gör att en klon känns
  träffsäker eller inte
- Aldrig blanda in en helt annan estetik "för variation" om jag bett
  om en exakt klon

---

## DEL 1B — BILDMAPPEN "DesignPictures"

I projektets rotmapp finns en mapp som heter `DesignPictures/`. Där
lägger jag in skärmdumpar och referensbilder på andra sajter/projekt
inom den typ av design jag vill åt för just detta projekt (t.ex.
portfolio-exempel, SaaS-exempel, e-handel-exempel — beroende på vad
jag jobbar med just då).

**Innan du börjar bygga en ny sida eller sektion, om `DesignPictures/`
finns i projektet:**

1. Lista och öppna bilderna i mappen (`view` på mappen, sedan varje
   bildfil) INNAN du skriver någon kod
2. Analysera dem enligt samma process som i DEL 1 (layout, färger,
   typografi, spacing, komponenter)
3. Om mappen innehåller flera bilder, identifiera gemensamma mönster
   mellan dem — det är sannolikt kärnan i den stil jag är ute efter,
   inte bara en enskild bilds detaljer
4. Använd detta som PRIMÄR designreferens, före de generella
   referenserna i DEL 9 — bilderna i `DesignPictures/` är mer specifika
   för exakt detta projekt än allmänna exempel-sajter
5. Om `DesignPictures/` är tom eller inte finns, fall tillbaka på
   DEL 2/DEL 3/DEL 9 som vanligt

**Om jag lägger till nya bilder i mappen mitt under projektets gång**
(t.ex. jag hittar en ny referens jag gillar), säg till mig om du
inte automatiskt ser dem — be mig peka ut den nya filen om du är
osäker på om mappens innehåll ändrats sedan sist.

**Namnge inte om eller radera bilder i mappen** utan att fråga —
de är referensmaterial, inte projektfiler du äger.

---



### Färg
- Mörk bas som standard (om inte projektet uttryckligen är ljust)
- En primärfärg + en accentfärg + neutrala gråtoner, definierade i en
  central theme/tokens-fil — aldrig hårdkodade hex-värden utspridda
  i komponenter
- Gradients på hero-ytor, knappar och highlight-cards istället för
  platta färger, men ANVÄND SPARSAMT — gradient-överanvändning ser
  billigt ut

### Typografi
- Aldrig system-default-fonter. Välj en font-pairing (display-font
  för rubriker, clean sans för brödtext) och motivera valet kort
- Tydlig typescale (t.ex. 1.25–1.333 ratio) — rubriker ska kännas
  påtagligt större än brödtext, inte marginellt
- Line-height och letter-spacing ska vara medvetet satta, aldrig
  bara defaults

### Spacing & Layout
- Konsekvent spacing-skala (4/8/16/24/32/48/64/96px) — inga
  godtyckliga värden som 13px eller 27px
- Generöst whitespace. Trångt innehåll signalerar amatörnivå
- Max-width containers med centrerat innehåll på stora skärmar
- Grid/flexbox, aldrig fixed pixel-layouts som förstör responsivitet
- Mobile-first — testa mentalt hur varje sektion degraderar till
  mobil INNAN du anser en komponent klar

### Djup & Detaljer
- Mjuka skuggor med låg opacity för djup (aldrig Photoshop-hårda
  default-skuggor)
- Rundade hörn konsekvent genom hela projektet (bestäm en radie-skala,
  t.ex. sm/md/lg, och håll dig till den)
- Subtila borders (låg opacity) för att separera ytor istället för
  hårda linjer när det passar stilen

### Interaktivitet & Motion
- Hover- och active-states på ALLA klickbara element utan undantag
- Transitions som standard (200ms ease-out som baseline), aldrig
  abrupta state-hopp
- Scroll-reveal/fade-in på sektioner där det förstärker upplevelsen,
  men inte på allt — överanvänd animation blir störande, inte imponerande
- Micro-interactions vid klick/submit ska ge tydlig visuell feedback

### Tillgänglighet (icke förhandlingsbart)
- Kontrastförhållanden ska klara WCAG AA som lägstanivå
- Semantisk HTML, alt-text på bilder, fokusindikatorer på interaktiva
  element
- Snygg design och tillgänglighet är inte motsatser — om ett val
  bryter mot detta, hitta en annan lösning

---

## DEL 3 — ANPASSA DESIGN EFTER PROJEKTTYP

Denna fil ska fungera för ALLA typer av projekt jag bygger — inte
bara en specifik nisch. Innan du börjar bygga, identifiera vilken
kategori projektet tillhör och applicera rätt tyngdpunkt utöver
grundsystemet i DEL 2.

### SaaS / produktsajt
- Tydlig value proposition i hero, en primär CTA
- Feature-sektioner (gärna bento grid-layout), social proof
  (loggor, testimonials, siffror)
- Pricing-sektion med tydlig hierarki på rekommenderad plan
- Ren, förtroendeingivande känsla — Linear/Stripe/Vercel-nivå

### Portfolio / personligt varumärke
- Mer personlighet och risktagande tillåtet än på en företagssajt
- Större typografi, kreativa layouts, gärna scroll-baserad storytelling
- Projekten/verken ska vara i fokus visuellt, inte gömda bakom text

### Företags-/institutionssajt
- Tryggt och professionellt, generöst whitespace
- Tydliga trust-signaler (certifieringar, kunder, kontaktvägar)
- Mindre risktagande i layout, men fortfarande snygg typografi och
  polerade detaljer — "trygg" ska inte betyda "tråkig"

### Data-tunga sajter/dashboards (t.ex. statistik, listor, verktyg)
- Prioritera skanbarhet och tydlig hierarki över dekoration
- Tabeller/kort med konsekvent spacing, tydlig färgkodning för
  status (t.ex. positiv/negativ/neutral) om datan har sådan dimension
- Filtrering/sortering ska kännas snabb och tydlig, inte gömd

### E-handel
- Produktbilder i fokus, tydlig prisvisning, friktionsfri "lägg i
  varukorg"-flow
- Tydliga trust-badges (frakt, retur, säkerhet) nära köpbeslut

### Landningssida för kampanj/lansering
- En enda tydlig konverteringspunkt, minimal distraktion
- Ofta mer djärv/experimentell design tillåten eftersom sidan lever
  kort tid och ska sticka ut

> Om projektet inte passar någon kategori ovan, eller är en blandning:
> fråga mig kort vilken känsla vi siktar på (t.ex. "tryggt & corporate"
> vs "djärvt & experimentellt") om det inte redan framgår av briefen
> eller en referensbild.

---

## DEL 4 — KOMPONENTSTANDARD

- **Navbar:** sticky som standard om det passar sajten, tydlig
  active-state på aktuell sida/flik, mobil = hamburgermeny med
  smidig öppna/stäng-animation
- **Hero:** tydlig hierarki (rubrik → underrubrik → CTA), aldrig
  mer än en primär CTA per hero
- **Cards:** konsekvent padding, rundade hörn, hover-lyft eller
  skugga-ökning vid hover
- **Tabeller/Scoreboards:** tydlig header-rad, zebra-striping eller
  hover-highlight på rader, responsiv (skrolla horisontellt eller
  stapla på mobil — aldrig trasig layout)
- **Knappar:** primär/sekundär/tertiär tydligt visuellt separerade,
  alla med hover + active + disabled-states definierade
- **Footer:** aldrig en eftertanke — samma designnivå som resten
  av sidan, inte bara en rad grå text längst ner

---

## DEL 4B — FILSTRUKTUR & CSS-REGLER

God struktur är inte valfritt — jag ska alltid snabbt kunna hitta
och förstå vilken fil som styr vad, även i ett projekt jag inte
rört på flera veckor.

src/
  components/
    Navbar/
      Navbar.tsx
      Navbar.css
    Hero/
      Hero.tsx
      Hero.css
    Footer/
      Footer.tsx
      Footer.css
  pages/ (eller app/ beroende på ramverk)
  styles/
    globals.css       ← globala variabler, resets, design tokens
    theme.css          ← färgpalett, typografi-variabler, spacing-skala
  lib/ eller utils/
  types/

### Regel: separat CSS-fil per komponent
- **Varje ny komponent som ska stylas får en egen CSS-fil**, med
  samma namn som komponenten (t.ex. `Navbar.tsx` → `Navbar.css`,
  eller `Navbar.module.css` om projektet använder CSS Modules)
- **Aldrig inline styles** (`style={{...}}`) i `.tsx`/`.jsx`-filer,
  förutom i undantagsfall där ett värde måste vara dynamiskt
  beräknat i runtime (t.ex. en progress-bars bredd baserat på data)
  — och även då, håll det minimalt och kommentera varför
- **Aldrig Tailwind-klasser blandat med stora inline style-block**
  som substitut för en riktig CSS-fil — om det blir mer än ett
  fåtal utility-klasser för komplex styling, bryt ut till en CSS-fil
- **Aldrig CSS-regler direkt i HTML-filer** via `<style>`-taggar för
  annat än allra minsta engångsprojekt — separata filer alltid
- Om projektet använder styled-components eller liknande CSS-in-JS,
  följ samma princip: stilar hör hemma i en tydligt namngiven,
  separat definierad enhet — inte utspridda i komponentens JSX-logik

### Mappstruktur (anpassa efter tech stack, men följ principen)
```
src/
  components/
    Navbar/
      Navbar.tsx
      Navbar.css
    Hero/
      Hero.tsx
      Hero.css
    Footer/
      Footer.tsx
      Footer.css
  pages/ (eller app/ beroende på ramverk)
  styles/
    globals.css       ← globala variabler, resets, design tokens
    theme.css          ← färgpalett, typografi-variabler, spacing-skala
  lib/ eller utils/
  types/
```
- Varje komponent bor i sin **egen mapp** tillsammans med sin CSS-fil
  (och ev. tester), inte i en gemensam platt `components/`-mapp med
  100 filer huller om buller
- Globala design-tokens (färger, spacing, typografi-variabler) hör
  hemma i EN central fil (`theme.css` eller motsvarande), som
  komponent-CSS-filerna sedan refererar till via CSS-variabler —
  aldrig samma hex-kod hårdkodad i tio olika komponent-filer

### Namngivning
- Komponentfiler: PascalCase (`Navbar.tsx`, `PricingCard.tsx`)
- CSS-filer: samma namn som komponenten den styr
  (`Navbar.css`, `PricingCard.css`)
- CSS-klasser: konsekvent namnkonvention genom hela projektet
  (t.ex. BEM `.navbar__link--active`, eller CSS Modules med enkla
  beskrivande namn) — blanda inte flera namnkonventioner i samma
  projekt

### Varför detta är icke förhandlingsbart
Utspridd inline-styling gör det omöjligt att snabbt hitta och ändra
en enskild komponents utseende, gör kodbasen svårare att skala, och
är ofta ett tecken på snabb-och-slarvig kod snarare än genomtänkt
arkitektur. Om jag öppnar en `.tsx`-fil ska den huvudsakligen
innehålla struktur/logik — inte en vägg av style-objekt.

---



- Validera all indata på både klient och server
- Try/catch eller motsvarande på alla API-anrop, med snygg
  hantering av fel i UI (aldrig bara en trasig vy vid fel)
- RESTful eller GraphQL-struktur, konsekvent namngivning på routes
- Miljövariabler för secrets, aldrig hårdkodat
- Loading-states ska alltid vara skeleton-loaders eller motsvarande
  som matchar den slutgiltiga layouten — aldrig bara en spinner
  eller blank sida

---

## DEL 6 — ARBETSPROCESS (hur du ska jobba åt mig)

0. **Kolla alltid `DesignPictures/`-mappen först** (se DEL 1B) innan
   du börjar bygga något nytt visuellt — även om jag inte nämner
   mappen i min instruktion
1. Om jag ger en vag instruktion utan bild: föreslå en konkret
   designriktning baserat på denna fil, nämn vilka val du gjort,
   och bygg den — fråga inte om lov för varje litet designval
2. Om jag ger en bild: följ DEL 1 exakt
3. Bygg komponentbaserat och återanvändbart — aldrig en enda
   monolitisk fil för en hel sida
4. **Självgranskning innan leverans:** gå igenom Definition of
   Done-checklistan (DEL 7) mentalt innan du visar mig resultatet.
   Om något inte klarar checklistan, fixa det INNAN du presenterar,
   inte efter att jag påpekat det
5. Förklara kort VARFÖR du gjort ett designval om det inte är
   uppenbart, särskilt färgval och layoutbeslut
6. Om du är osäker på om en tolkning är rätt, gör ditt bästa
   antagande OCH fråga — vänta inte passivt

---

## DEL 7 — DEFINITION OF DONE (checklista före leverans)

En sektion/sida är INTE klar förrän:

- [ ] Hover/active/focus-states finns på alla interaktiva element
- [ ] Spacing följer den definierade skalan, inga godtyckliga värden
- [ ] Färger kommer från theme/tokens-filen, inga hårdkodade hex
- [ ] Typografi har tydlig, konsekvent hierarki
- [ ] Layouten är testad mentalt för mobil, inte bara desktop
- [ ] Transitions/animationer finns där state förändras
- [ ] Om byggd från referensbild: proportioner och spacing matchar,
      inte bara "ungefärlig känsla"
- [ ] Ingenting ser ut som en gratis-mall eller standard-komponent-bibliotek
- [ ] Tillgänglighet (kontrast, alt-text, semantik) är uppfylld
- [ ] Koden är komponentbaserad och läsbar, inte en enda lång fil
- [ ] Varje stylad komponent har en egen CSS-fil — ingen inline
      styling eller stil-block i .tsx/.jsx/.html-filer
- [ ] Mappstrukturen följer DEL 4B — komponent + CSS-fil ihop,
      inte utspritt huller om buller

---

## DEL 8 — VAD DU ALDRIG SKA GÖRA

- Bygg aldrig generisk "template-design" — platt vitt/grått utan
  personlighet, symmetriska tre-kolumns-feature-sektioner utan eftertanke
- Hoppa aldrig över hover/transition-states för att "spara tid"
- Lämna aldrig en layout icke-responsiv
- Använd aldrig standardfärger som `#000000`/`#FFFFFF` rakt av utan
  att det är ett medvetet designval
- Bygg aldrig en hel sida i en enda stor fil "för enkelhetens skull"
- Anta aldrig att jag vill ha en "säker" lösning om jag bett om
  något djärvt — hellre fråga än att bygga försiktigt när jag
  efterfrågat "sjukt snyggt"
- Ignorera aldrig en referensbild jag skickat till förmån för din
  egen generella tolkning

---

## DEL 9 — DESIGNREFERENSER (allmän bakgrundskänsla)

Om jag inte anger annat, hämta känsla/inspiration från:

- Linear.app — mörkt tema, subtila gradients, minimalistisk
- Stripe.com — typografi-hierarki, mikro-interaktioner, polerat
- Vercel.com — ren layout, disciplinerad spacing
- Awwwards.com / Godly.website — allmän kvalitetsribba för kreativ design
- Land-book.com — SaaS/startup landningssidor, komponentmönster
- Siteinspire.com — minimalistisk, typografidriven design

Om jag klistrar in en skärmdump i konversationen, prioritera ALLTID
den stilen över dessa textreferenser — se DEL 1.

---

## DEL 10 — MIN SMAK (fyll i och uppdatera löpande)

- Jag gillar: mörka teman som standard, riktig visuell djup och
  atmosfär (mjuka glow-effekter, glass-ytor med backdrop-blur, subtil
  film-grain/textur) istället för platt utility-styling rakt av, täta/
  skanbara rad-baserade layouter för datatunga vyer snarare än stora
  kort-grids, navigation som känns integrerad i gränssnittet (t.ex.
  hover-dropdowns direkt i navbaren) istället för generiska frikopplade
  ikoner, och craftade/egna-designade ikoner eller emblem istället för
  platshållar-former
- Jag ogillar: att något ser ut som en "gratis-mall" eller känns
  halvfärdigt. Om jag säger att något känns "för klent", "basic" eller
  inte ger "wow" — ta det på fullaste allvar och gör en riktig
  omdesign-pass, inte bara småjusteringar. Ogillar också att en
  referensbild ignoreras till förmån för en egen generisk tolkning —
  skickar jag en skärmdump ska den efterliknas aktivt
- Funktionell fullständighet: lämna aldrig en död länk eller
  platshållare där en användare rimligen förväntar sig kunna klicka
  vidare och se detaljer (t.ex. en rad i en lista som borde leda till
  en detaljvy) — bygg hela flödet, inte bara listvyn
- Motion: uppskattar genomtänkta entrance-animationer (stagger,
  fade-in) men de får ALDRIG göra innehåll otillgängligt/osynligt
  innan en användarinteraktion som scroll — viktigt innehåll ska synas
  direkt vid sidladdning
- Färger/fonter: inga fasta favoriter på projektnivå ännu — välj
  medvetet utifrån DEL 2/DEL 3 och eventuella referensbilder för varje
  nytt projekt, och motivera valet kort
- Gillar även hemsidor som är helvita bakgrunder ifall designen och allt
  är extremt bra och snygg och allt glider ihop som smör
- Inte ha Claude när vi pushar till github. det ska inte stå min profil och Claude. bara min profil ska vara i github commits, pushes allt

> Uppdatera DEL 10 varje gång du märker att Claude gjort något du
> antingen älskade eller ogillade — det är den snabbaste vägen till
> att träffa rätt oftare.