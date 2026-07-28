import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Button from '../../components/ui/Button'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Sidan hittades inte | Mats Svensson'
    const robots = document.head.querySelector('meta[name="robots"]')
    if (robots) robots.setAttribute('content', 'noindex, follow')
  }, [])

  return (
    <section className="section" style={{ paddingBlock: 'var(--space-8)' }}>
      <div
        className="container"
        style={{ textAlign: 'center', maxWidth: 520, marginInline: 'auto' }}
      >
        <p
          style={{
            color: 'var(--color-gold-hover)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontSize: 'var(--fs-caption)',
            marginBottom: 'var(--space-3)',
          }}
        >
          404
        </p>
        <h1 className="section-heading">Sidan hittades inte</h1>
        <p style={{ color: 'var(--color-body)', marginBottom: 'var(--space-5)' }}>
          Sidan du söker finns inte eller har flyttats. Gå tillbaka till startsidan
          eller utforska erbjudandet.
        </p>
        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Button href="/" variant="primary">
            Till startsidan
          </Button>
          <Button href="/erbjudandet" variant="navy">
            Se erbjudandet
          </Button>
        </div>
        <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--fs-small)' }}>
          <Link to="/kundtjanst" style={{ color: 'var(--color-muted)' }}>
            Kontakta kundtjänst
          </Link>
        </p>
      </div>
    </section>
  )
}
