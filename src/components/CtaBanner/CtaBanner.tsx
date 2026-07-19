import Button from '../ui/Button'
import { useReveal } from '../../hooks/useReveal'
import './CtaBanner.css'

export default function CtaBanner() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="cta-banner section">
      <div ref={ref} className="cta-banner__inner container reveal">
        <h2 className="cta-banner__title">
          Vill du få en tydligare bild av hur ett aktivt fondsparande faktiskt
          går till?
        </h2>
        <Button href="#pris" variant="primary" arrow>
          Få tillgång idag
        </Button>
      </div>
    </section>
  )
}
