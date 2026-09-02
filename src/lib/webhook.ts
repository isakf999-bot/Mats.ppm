/**
 * Gemensam Make-webhook för alla sajtformulär.
 *
 * Request (alltid samma nycklar):
 * {
 *   "formdata": "newsletter" | "fondbyte" | "update" | "support",
 *   "email": "",
 *   "first_name": "",
 *   "last_name": "",
 *   "phone": "",
 *   "date": "2026-08-30T12:23:00Z",
 *   "message": ""
 * }
 *
 * Response (väntas efter hela backendflödet):
 * {
 *   "status": "ok" | "error",
 *   "response": "Text som visas för användaren"
 * }
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

export interface FormWebhookResult {
  status: 'ok' | 'error'
  response: string
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
const REQUEST_TIMEOUT_MS = 45000

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

function parseWebhookBody(raw: string): FormWebhookResult | null {
  if (!raw.trim()) return null
  try {
    const data = JSON.parse(raw) as Record<string, unknown>
    const statusRaw = String(data.status ?? data.Status ?? '').toLowerCase()
    const response = String(
      data.response ?? data.Response ?? data.message ?? '',
    ).trim()

    if (statusRaw === 'ok' || statusRaw === 'success' || statusRaw === 'true') {
      return {
        status: 'ok',
        response: response || 'Tack! Vi har tagit emot dina uppgifter.',
      }
    }

    if (
      statusRaw === 'error' ||
      statusRaw === 'fail' ||
      statusRaw === 'failed' ||
      statusRaw === 'false'
    ) {
      return {
        status: 'error',
        response:
          response ||
          'Något gick fel. Försök igen om en stund.',
      }
    }

    // Om bara "response" finns utan status – behandla HTTP 2xx + text som ok
    if (response) {
      return { status: 'ok', response }
    }
  } catch {
    return null
  }
  return null
}

/**
 * Skickar formulärdata och väntar på backend-svar.
 * Returnerar success-meddelande, eller kastar FormWebhookError.
 */
export async function submitFormWebhook(
  fields: FormWebhookFields,
): Promise<string> {
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

  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

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
      signal: controller.signal,
    })
  } catch (err) {
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw new FormWebhookError(
        'Det tog för lång tid. Försök igen om en stund.',
      )
    }
    throw new FormWebhookError(
      'Kunde inte nå servern. Kontrollera din uppkoppling och försök igen.',
    )
  } finally {
    window.clearTimeout(timeout)
  }

  const raw = await response.text().catch(() => '')
  const parsed = parseWebhookBody(raw)

  if (parsed) {
    if (parsed.status === 'error') {
      throw new FormWebhookError(parsed.response)
    }
    return parsed.response
  }

  if (!response.ok) {
    throw new FormWebhookError(
      'Något gick fel vid skickandet. Försök igen om en stund.',
    )
  }

  // 2xx utan JSON – fallback success
  return 'Tack! Vi har tagit emot dina uppgifter.'
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
