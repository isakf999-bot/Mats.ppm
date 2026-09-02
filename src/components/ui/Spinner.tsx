import './Spinner.css'

interface SpinnerProps {
  className?: string
  label?: string
}

export default function Spinner({
  className = '',
  label = 'Laddar',
}: SpinnerProps) {
  return (
    <span className={`spinner ${className}`.trim()} role="status" aria-label={label}>
      <span className="spinner__dot" aria-hidden="true" />
    </span>
  )
}
