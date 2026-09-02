import PageHero from '../../components/PageHero/PageHero'
import guideHero from '../../assets/guide-hero.jpg'
import poster1 from '../../assets/guide-poster-1.jpg'
import poster2 from '../../assets/guide-poster-2.jpg'
import omMats from '../../assets/om-mats-1.jpg'
import '../shared/pageShared.css'
import './ByterFonder.css'

/** Poster-bilderna är sajtens egna, matchade till respektive video via
    dokumentordningen på original­sidan (inte YouTubes thumbnails). */
const GUIDES = [
  {
    id: '1qyqBsUPXYE',
    title: 'Byta PPM fonder i din dator',
    text: 'Filmen visar hur du byter PPM fonder i din dator.',
    poster: guideHero,
    pdf: 'https://mats-svensson.se/wp-content/uploads/2021/04/hur-du-byter-fonder-med-din-dator.pdf',
  },
  {
    id: 'cNFgOfjHpJA',
    title: 'Byta PPM fonder i mobilen',
    text: 'Det är lika enkelt att byta PPM fonderna direkt i mobilen.',
    poster: poster2,
  },
  {
    id: '7fnHgUm-kWw',
    title: 'Byta ISK fonder på Avanza',
    text: 'Här ser du hur du byter ISK fonder på Avanza.',
    poster: omMats,
  },
  {
    id: '27TsQaazCMs',
    title: 'Byta ISK fonder på Nordnet',
    text: 'Här ser du hur du byter ISK fonder på Nordnet.',
    poster: poster1,
  },
]

export default function ByterFonder() {
  return (
    <>
      <PageHero
        eyebrow="Tjänst"
        title="Så här byter du fonder"
        image={guideHero}
      />

      <section className="section">
        <div className="container page-prose guide__intro">
          <p>
            Det är enkelt att byta fonder. Jag brukar säga att det är lika lätt
            som att koka kaffe.
          </p>
          <p>
            För att hjälpa dig på traven har jag tagit fram några snabbguider i
            både film och textformat, som du kan ta del av på den här sidan.
          </p>
        </div>

        <div className="container">
          <h2 className="section-heading guide__heading">
            Snabbguider i film och text
          </h2>

          <div className="page-videos">
            {GUIDES.map((g) => (
              <article key={g.id} className="guide-card">
                <a
                  className="page-video__thumb"
                  href={`https://www.youtube.com/watch?v=${g.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Spela upp: ${g.title}`}
                >
                  <img src={g.poster} alt={g.title} loading="lazy" />
                  <span className="page-video__play" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" fill="currentColor" />
                    </svg>
                  </span>
                </a>
                <h3 className="page-video__title">{g.title}</h3>
                <p className="page-video__text">{g.text}</p>
                {g.pdf && (
                  <p className="page-video__text">
                    Vill du hellre läsa hur man gör finns också ett PDF dokument
                    som beskriver det.{' '}
                    <a
                      className="page-link"
                      href={g.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Klicka här
                    </a>{' '}
                    för att ladda ner dokumentet.
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
