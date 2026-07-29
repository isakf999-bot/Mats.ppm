import './Button.css'

type Variant = 'primary' | 'secondary' | 'navy' | 'ghost'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: Variant
  full?: boolean
  arrow?: boolean
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  href,
  variant = 'primary',
  full = false,
  arrow = false,
  className = '',
  onClick,
}: ButtonProps) {
  const cls = `btn btn--${variant} ${full ? 'btn--full' : ''} ${arrow ? 'btn--has-icon' : ''} ${className}`
  const content = (
    <>
      <span className="btn__label">{children}</span>
      {arrow && (
        <span className="btn__icon" aria-hidden="true">
          <svg className="btn__arrow" viewBox="0 0 16 12">
            <path d="M1 6H14M14 6L9 1M14 6L9 11" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick}>
        {content}
      </a>
    )
  }
  return (
    <button className={cls} onClick={onClick} type="button">
      {content}
    </button>
  )
}
