import { useEffect } from 'react'
import StripePricingTable, {
  type StripeTableVariant,
} from '../StripePricingTable/StripePricingTable'
import './StripeCheckoutModal.css'

interface StripeCheckoutModalProps {
  open: boolean
  onClose: () => void
  variant?: StripeTableVariant
}

export default function StripeCheckoutModal({
  open,
  onClose,
  variant = 'home',
}: StripeCheckoutModalProps) {
  useEffect(() => {
    if (!open) return

    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="stripe-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="stripe-modal-title"
    >
      <button
        type="button"
        className="stripe-modal__backdrop"
        aria-label="Stäng"
        onClick={onClose}
      />
      <div className="stripe-modal__panel">
        <header className="stripe-modal__header">
          <h2 id="stripe-modal-title" className="stripe-modal__title">
            Välj paket och betala
          </h2>
          <button
            type="button"
            className="stripe-modal__close"
            onClick={onClose}
            aria-label="Stäng"
          >
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <path
                d="M2 2l8 8M10 2L2 10"
                stroke="currentColor"
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </header>
        <div className="stripe-modal__body">
          <StripePricingTable variant={variant} />
        </div>
      </div>
    </div>
  )
}
