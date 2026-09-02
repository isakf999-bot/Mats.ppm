import { useEffect, useRef } from 'react'
import './StripePricingTable.css'

export type StripeTableVariant = 'home' | 'renew'

const STRIPE_SCRIPT = 'https://js.stripe.com/v3/pricing-table.js'
const PUBLISHABLE_KEY = 'pk_live_ywiGIV4M4Zyb8I5IGt0LPPzS'

const TABLES: Record<
  StripeTableVariant,
  { pricingTableId: string; persistUtm: boolean }
> = {
  home: {
    pricingTableId: 'prctbl_1SV82nCcPqkdxdjxTcpjrNIJ',
    persistUtm: true,
  },
  renew: {
    pricingTableId: 'prctbl_1StUguCcPqkdxdjxFVnBZz6e',
    persistUtm: false,
  },
}

const ATTRIBUTION_DAYS = 30
const STORAGE_KEY = 'stripe_utm_source'
const POLL_MS = 200

function safeClientRef(s: string | null): string {
  return String(s || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, '_')
    .slice(0, 200)
}

function safeEmail(s: string | null): string {
  return String(s || '')
    .trim()
    .replace(/[<>"'`]/g, '')
}

function ensureStripeScript(): void {
  if (document.querySelector(`script[src="${STRIPE_SCRIPT}"]`)) return
  const script = document.createElement('script')
  script.src = STRIPE_SCRIPT
  script.async = true
  document.head.appendChild(script)
}

function resolveUtmSource(persist: boolean): string {
  const params = new URLSearchParams(window.location.search)
  const fromUrl = safeClientRef(params.get('utm_source'))

  if (!persist) return fromUrl

  const now = Date.now()
  const expiryMs = ATTRIBUTION_DAYS * 24 * 60 * 60 * 1000
  let record: { utm_source?: string; _expires?: number } = {}

  try {
    record = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') as typeof record
  } catch {
    record = {}
  }

  if (record._expires && now > record._expires) {
    record = {}
  }

  if (fromUrl) {
    record.utm_source = fromUrl
    record._expires = now + expiryMs
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record))
  }

  return record.utm_source || ''
}

interface StripePricingTableProps {
  variant?: StripeTableVariant
  className?: string
}

export default function StripePricingTable({
  variant = 'home',
  className = '',
}: StripePricingTableProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const config = TABLES[variant]

  useEffect(() => {
    ensureStripeScript()

    const utmSource = resolveUtmSource(config.persistUtm)
    const email = safeEmail(
      new URLSearchParams(window.location.search).get('email'),
    )

    const inject = () => {
      const table = hostRef.current?.querySelector('stripe-pricing-table')
      if (!table) return false

      if (utmSource) {
        table.setAttribute('client-reference-id', utmSource)
      } else {
        table.removeAttribute('client-reference-id')
      }

      if (email) {
        table.setAttribute('customer-email', email)
      } else {
        table.removeAttribute('customer-email')
      }

      return true
    }

    if (inject()) return

    const interval = window.setInterval(() => {
      if (inject()) window.clearInterval(interval)
    }, POLL_MS)

    return () => window.clearInterval(interval)
  }, [config.persistUtm, variant])

  return (
    <div ref={hostRef} className={`stripe-pricing ${className}`.trim()}>
      <stripe-pricing-table
        pricing-table-id={config.pricingTableId}
        publishable-key={PUBLISHABLE_KEY}
      />
    </div>
  )
}
