import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import './VideoSection.css'

interface Video {
  id: string
  title: string
}

// Ordning = vänster → höger, precis som länkarna skickades.
const VIDEOS: Video[] = [
  { id: '759HcBrU_Bc', title: 'Flygkapten om vikten av att spara i PPM' },
  { id: 'itnWZ-5Fg-Q', title: 'Svårt att välja fonder i ISK?' },
  { id: 'lI4fEABQH74', title: 'Intervju med kund' },
  { id: 'bnLIQCXUOHc', title: 'Värdet av att bli påmind om att vara aktiv i PPM' },
  { id: 'biZhHqmxtw4', title: 'Kund om communityt For the future by Mats' },
  { id: 'ruqJl5WAF_A', title: 'Fortsätta spara i PPM även efter 65 år' },
  { id: '_HDzAmh5928', title: 'Ett sammanhang som passar alla ”For The Future By Mats”' },
]

const PER_VIEW = 3

export default function VideoSection() {
  const [index, setIndex] = useState(0)
  const ref = useReveal<HTMLDivElement>()

  const maxIndex = Math.max(0, VIDEOS.length - PER_VIEW)
  const go = (dir: number) =>
    setIndex((i) => Math.min(maxIndex, Math.max(0, i + dir)))

  return (
    <section className="video section" id="video">
      <div ref={ref} className="video__inner container reveal">
        <h2 className="section-heading video__heading">
          Se hur enkelt det är att byta fonder och vad kunderna säger om tjänsten
        </h2>

        <div className="video__viewport">
          <div
            className="video__track"
            style={{ transform: `translateX(calc(-${index} * ((100% - 2 * var(--space-4)) / ${PER_VIEW} + var(--space-4))))` }}
          >
            {VIDEOS.map((v) => (
              <article key={v.id} className="video-card">
                <a
                  className="video-card__thumb"
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Spela upp: ${v.title}`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                    width={480}
                    height={360}
                  />
                  <span className="video-card__play" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
                  </span>
                </a>
                <h3 className="video-card__title">
                  <a
                    href={`https://www.youtube.com/watch?v=${v.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {v.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>

        <div className="video__controls">
          <div className="video__dots" role="tablist" aria-label="Videoposition">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Gå till position ${i + 1}`}
                className={`video__dot ${i === index ? 'is-active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <div className="video__arrows">
            <button
              className="video__arrow"
              aria-label="Föregående"
              disabled={index === 0}
              onClick={() => go(-1)}
            >
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button
              className="video__arrow"
              aria-label="Nästa"
              disabled={index === maxIndex}
              onClick={() => go(1)}
            >
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
