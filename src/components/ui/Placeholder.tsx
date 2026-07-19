import './Placeholder.css'

interface PlaceholderProps {
  /** Kort etikett för vilken bild som ska in här (exporteras från Figma). */
  label: string
  /** aspect-ratio, t.ex. "4/5" eller "16/9" */
  ratio?: string
  variant?: 'photo' | 'illustration' | 'news' | 'video' | 'screen'
  className?: string
}

/**
 * Snygg platshållare för bilder vi ännu inte har som filer.
 * Ersätt med <img src=... /> när originalen exporterats från Figma.
 */
export default function Placeholder({
  label,
  ratio = '4/3',
  variant = 'illustration',
  className = '',
}: PlaceholderProps) {
  return (
    <div
      className={`ph ph--${variant} ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Platshållare: ${label}`}
    >
      <div className="ph__grid" aria-hidden="true" />
      <div className="ph__body">
        {variant === 'video' && (
          <span className="ph__play" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
          </span>
        )}
        {variant === 'photo' && (
          <svg className="ph__icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="9" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        )}
        {(variant === 'illustration' || variant === 'news' || variant === 'screen') && (
          <svg className="ph__icon" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <path d="M3 16l5-4 3 2 4-4 6 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9" cy="9" r="1.4" fill="currentColor" />
          </svg>
        )}
        <span className="ph__label">{label}</span>
      </div>
    </div>
  )
}
