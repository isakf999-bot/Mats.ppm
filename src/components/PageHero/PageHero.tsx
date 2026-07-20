import './PageHero.css'

interface PageHeroProps {
  eyebrow?: string
  title: string
  text?: string
  /** Bakgrundsbild (valfri). Utan bild blir heron enfärgad svart. */
  image?: string
}

export default function PageHero({ eyebrow, title, text, image }: PageHeroProps) {
  return (
    <section className={`page-hero ${image ? '' : 'page-hero--centered'}`}>
      {image && (
        <>
          <div
            className="page-hero__bg"
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden="true"
          />
          <div className="page-hero__scrim" aria-hidden="true" />
        </>
      )}
      <div className="page-hero__glow" aria-hidden="true" />

      <div className="page-hero__inner container">
        {eyebrow && <span className="eyebrow page-hero__eyebrow">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {text && <p className="page-hero__text">{text}</p>}
      </div>
    </section>
  )
}
