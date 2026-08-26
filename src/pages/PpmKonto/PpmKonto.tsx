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

export default function PpmKonto() {
  const [year, setYear] = useState('2025')

  return (
    <>
      <PageHero
        eyebrow="Resultat"
        title="Historik"
        text="Följ värdeutvecklingen på Mats egna PPM-konto, år för år."
        align="left"
      />

      <section className="section">
        <div className="container">
          <h2 className="section-heading ppm__heading">Mats PPM-konto</h2>

          <div className="ppm__years" role="tablist" aria-label="Välj år">
            {PPM_YEARS.map((y) => (
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

          <h3 className="ppm__subheading">Mats PPM-konto år {year}</h3>

          {ppmImage(year) ? (
            <figure className="ppm__figure media-frame">
              <img
                className="ppm__img"
                src={ppmImage(year)}
                alt={`Värdeutveckling för Mats PPM-konto år ${year}`}
                loading="lazy"
              />
            </figure>
          ) : (
            <p className="ppm__empty">Ingen bild för {year} ännu.</p>
          )}
        </div>
      </section>
    </>
  )
}
