/**
 * Gemensam Make-webhook för alla sajtformulär.
 * JSON-formatet är alltid samma; saknade fält skickas som tom sträng.
 */

export type FormDataKind = 'newsletter' | 'fondbyte' | 'update' | 'support'

export interface FormWebhookFields {
  formdata: FormDataKind
  email?: string | null
  first_name?: string | null
  last_name?: string | null
  phone?: string | null
  message?: string | null
}

export interface FormWebhookPayload {
  formdata: FormDataKind
  email: string
  first_name: string
  last_name: string
  phone: string
  date: string
  message: string
}

export class FormWebhookError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'FormWebhookError'
  }
}

const DEFAULT_WEBHOOK_URL =
  'https://hook.eu1.make.com/murkjy9galtfrb8vpq6i6j1670y7ta8z'
const DEFAULT_API_KEY = 'woskguthek4567'

function getWebhookUrl(): string {
  return (
    (import.meta.env.VITE_FORM_WEBHOOK_URL as string | undefined)?.trim() ||
    DEFAULT_WEBHOOK_URL
  )
}

function getApiKey(): string {
  return (
    (import.meta.env.VITE_MAKE_API_KEY as string | undefined)?.trim() ||
    DEFAULT_API_KEY
  )
}

export function isWebhookConfigured(): boolean {
  return Boolean(getWebhookUrl() && getApiKey())
}

function empty(value: string | null | undefined): string {
  if (value == null) return ''
  return String(value).trim()
}

/** UTC utan millisekunder: 2026-08-30T12:23:00Z */
export function utcNow(): string {
  return new Date().toISOString().replace(/\.\d{3}Z$/, 'Z')
}

/**
 * Skickar formulärdata till Make-webhooken.
 * Alla nycklar finns alltid med – saknade värden blir "".
 */
export async function submitFormWebhook(
  fields: FormWebhookFields,
): Promise<void> {
  const url = getWebhookUrl()
  const apiKey = getApiKey()

  if (!url || !apiKey) {
    throw new FormWebhookError(
      'Webhook är inte konfigurerad. Kontrollera miljövariablerna.',
    )
  }

  const body: FormWebhookPayload = {
    formdata: fields.formdata,
    email: empty(fields.email),
    first_name: empty(fields.first_name),
    last_name: empty(fields.last_name),
    phone: empty(fields.phone),
    date: utcNow(),
    message: empty(fields.message),
  }

  let response: Response
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-make-apikey': apiKey,
      },
      body: JSON.stringify(body),
    })
  } catch {
    throw new FormWebhookError(
      'Kunde inte nå servern. Kontrollera din uppkoppling och försök igen.',
    )
  }

  if (!response.ok) {
    throw new FormWebhookError(
      'Något gick fel vid skickandet. Försök igen om en stund.',
    )
  }
}

export const FORM_ERROR_FALLBACK =
  'Något gick fel. Försök igen eller mejla info@mats-svensson.se.'

/** Dela upp "Förnamn Efternamn" till first/last (resten blir last_name). */
export function splitFullName(fullName: string): {
  first_name: string
  last_name: string
} {
  const parts = fullName.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return { first_name: '', last_name: '' }
  if (parts.length === 1) return { first_name: parts[0], last_name: '' }
  return {
    first_name: parts[0],
    last_name: parts.slice(1).join(' '),
  }
}
