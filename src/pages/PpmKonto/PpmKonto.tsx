import { useState } from 'react'
import PageHero from '../../components/PageHero/PageHero'
import '../shared/pageShared.css'
import './PpmKonto.css'

/** Alla årsbilder laddas via Vite-glob så vi slipper 30 importrader. */
const FILES = import.meta.glob('../../assets/ppm/*.{png,jpg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const img = (name: string): string | undefined =>
  Object.entries(FILES).find(([path]) => path.endsWith(`/${name}`))?.[1]

const PPM_YEARS = [
  '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017',
  '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008',
  '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000',
]

/** Filändelsen skiljer sig mellan åren. */
const ppmImage = (year: string) => img(`${year}.jpg`) ?? img(`${year}.png`)

const ISK_YEARS = ['2023', '2022']

const ISK_IMAGES: Record<string, { label: string; src?: string }[]> = {
  '2023': [
    { label: 'Avanza', src: img('isk-avanza-2023.jpg') },
    { label: 'Nordnet', src: img('isk-nordnet-2023.jpg') },
  ],
  '2022': [
    { label: 'Avanza 1 år', src: img('isk-avanza-1ar.jpg') },
    { label: 'Avanza 3 år', src: img('isk-avanza-3ar.jpg') },
    { label: 'Nordnet 1 år', src: img('isk-nordnet-1ar.jpg') },
    { label: 'Nordnet 3 år', src: img('isk-nordnet-3ar.jpg') },
  ],
}

type Account = 'ppm' | 'isk'

export default function PpmKonto() {
  const [account, setAccount] = useState<Account>('ppm')
  const [ppmYear, setPpmYear] = useState('2025')
  const [iskYear, setIskYear] = useState('2023')

  const years = account === 'ppm' ? PPM_YEARS : ISK_YEARS
  const year = account === 'ppm' ? ppmYear : iskYear
  const setYear = account === 'ppm' ? setPpmYear : setIskYear

  return (
    <>
      <PageHero
        eyebrow="Resultat"
        title="Historik"
        text="Följ värdeutvecklingen på Mats egna konton, år för år."
      />

      <section className="section">
        <div className="container">
          {/* Switch: PPM / ISK */}
          <div className="ppm__switch" role="tablist" aria-label="Välj konto">
            <button
              role="tab"
              aria-selected={account === 'ppm'}
              className={`ppm__switch-btn ${account === 'ppm' ? 'is-active' : ''}`}
              onClick={() => setAccount('ppm')}
            >
              Mats PPM-konto
            </button>
            <button
              role="tab"
              aria-selected={account === 'isk'}
              className={`ppm__switch-btn ${account === 'isk' ? 'is-active' : ''}`}
              onClick={() => setAccount('isk')}
            >
              Mats ISK-konto
            </button>
          </div>

          <h2 className="section-heading ppm__heading">
            {account === 'ppm' ? 'Mats PPM-konto' : 'Mats ISK-konto'}
          </h2>

          {/* Årsväljare */}
          <div className="ppm__years" role="tablist" aria-label="Välj år">
            {years.map((y) => (
              <button
                key={y}
                role="tab"
                aria-selected={y === year}
                className={`ppm__year ${y === year ? 'is-active' : ''}`}
                onClick={() => setYear(y)}
              >
                {y}
              </button>
            ))}
          </div>

          <h3 className="ppm__subheading">
            {account === 'ppm' ? 'Mats PPM-konto' : 'Mats ISK-konto'} år {year}
          </h3>

          {account === 'ppm' ? (
            ppmImage(year) ? (
              <figure className="ppm__figure">
                <img
                  className="ppm__img"
                  src={ppmImage(year)}
                  alt={`Värdeutveckling för Mats PPM-konto år ${year}`}
                  loading="lazy"
                />
              </figure>
            ) : (
              <div className="page-placeholder">
                <span className="page-placeholder__icon" aria-hidden="true">!</span>
                <p>
                  <strong>Bild saknas för {year}.</strong> Skicka bilden så lägger
                  jag in den.
                </p>
              </div>
            )
          ) : (
            <div className="ppm__grid">
              {ISK_IMAGES[year]?.map((item) => (
                <figure key={item.label} className="ppm__figure">
                  {item.src ? (
                    <>
                      <img
                        className="ppm__img"
                        src={item.src}
                        alt={`Mats ISK-konto ${item.label} år ${year}`}
                        loading="lazy"
                      />
                      <figcaption className="ppm__caption">{item.label}</figcaption>
                    </>
                  ) : (
                    <div className="page-placeholder">
                      <span className="page-placeholder__icon" aria-hidden="true">!</span>
                      <p>
                        <strong>Bild saknas: {item.label}.</strong>
                      </p>
                    </div>
                  )}
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
