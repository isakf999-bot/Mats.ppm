import Button from '../ui/Button'
import skool from '../../assets/Skool.png'
import { useReveal } from '../../hooks/useReveal'
import './CommunitySection.css'

export default function CommunitySection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="community section" id="community">
      <div ref={ref} className="community__inner container reveal">
        <div className="community__content">
          <span className="eyebrow">Community</span>
          <h2 className="section-heading">Välkomna till “For The Future by Mats”</h2>
          <p className="community__text">
            Äntligen ett samlat allt på samma ställe. Min kunskap och min
            erfarenhet, samtal i en gemenskap med samtalsforum, live-sessioner
            och kurser för dig som vill tänka längre. Ett aktivt fondsparande
            och beslut som fattas bättre.
          </p>
          <p className="community__text">
            I dag består vår community av över tusen medlemmar och nu kan du bli
            en av dem.
          </p>
          <Button href="#pris" variant="primary" arrow>
            Läs mer
          </Button>
        </div>
        <div className="community__media">
          <img
            className="community__img"
            src={skool}
            alt="For The Future by Mats – ett av Sveriges största ekonomi-communities på Skool"
            width={269}
            height={269}
          />
        </div>
      </div>
    </section>
  )
}
