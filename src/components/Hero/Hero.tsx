import Button from '../ui/Button'
import matsHero from '../../assets/MatsHero.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${matsHero})` }}
        aria-hidden="true"
      />
      <div className="hero__scrim" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner container">
        <div className="hero__content">
          <h1 className="hero__title">
            Insyn i ett aktivt fondsparande
            <span className="hero__title-accent"> – i realtid</span>
          </h1>
          <p className="hero__text">
            Följ hur jag själv arbetar med mitt fondsparande så du blir del av
            resonemanget bakom varje förändring över tid.
          </p>
          <p className="hero__text hero__text--muted">
            Ingen rådgivning. Inga personliga rekommendationer. Bara full
            transparens i hur jag själv agerar och tänker kring marknaden.
          </p>
          <div className="hero__actions">
            <Button href="#pris" variant="primary" arrow>
              Få tillgång till sparandet
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
