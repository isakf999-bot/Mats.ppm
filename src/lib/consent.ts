const CONSENT_KEY = 'mats-cookie-consent'
export const GTM_ID = 'GTM-M27JH4J'
/** Custom event: öppna cookie-bannern igen (t.ex. från footer). */
export const OPEN_COOKIE_BANNER_EVENT = 'mats:open-cookie-banner'

export type ConsentValue = 'granted' | 'denied'

export function openCookieBanner() {
  window.dispatchEvent(new Event(OPEN_COOKIE_BANNER_EVENT))
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

export function getStoredConsent(): ConsentValue | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY)
    if (v === 'granted' || v === 'denied') return v
  } catch {
    /* ignore */
  }
  return null
}

export function storeConsent(value: ConsentValue) {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    /* ignore */
  }
}

let defaultsReady = false

/** Sätter Consent Mode-defaults till denied (innan GTM). Körs en gång tidigt. */
export function initConsentDefaults() {
  if (defaultsReady || typeof window === 'undefined') return
  defaultsReady = true

  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args as unknown as Record<string, unknown>)
    }

  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
    wait_for_update: 500,
  })
}

export function updateGtagConsent(value: ConsentValue) {
  if (typeof window.gtag !== 'function') return

  const state = value === 'granted' ? 'granted' : 'denied'
  window.gtag('consent', 'update', {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
    functionality_storage: state,
    personalization_storage: state,
  })
}

let gtmInjected = false

/** Ladda GTM först när cookies accepterats (eller redan sparats som granted). */
export function loadGtm() {
  if (gtmInjected || typeof document === 'undefined') return
  if (document.getElementById('gtm-script')) {
    gtmInjected = true
    return
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  })

  const script = document.createElement('script')
  script.id = 'gtm-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
  document.head.appendChild(script)

  const noscript = document.createElement('noscript')
  noscript.id = 'gtm-noscript'
  noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe>`
  document.body.insertBefore(noscript, document.body.firstChild)

  gtmInjected = true
}

export function applyConsent(value: ConsentValue) {
  storeConsent(value)
  initConsentDefaults()
  updateGtagConsent(value)
  if (value === 'granted') {
    loadGtm()
  }
}
