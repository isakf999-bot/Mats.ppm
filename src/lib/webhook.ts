/**
 * Gemensam webhook för alla sajtformulär (ActiveCampaign via Måns).
 *
 * Sätt VITE_FORM_WEBHOOK_URL i .env / Vercel när URL:en finns.
 * Alla formulär skickar samma JSON-form med `type` som skiljer dem åt.
 */

export type FormWebhookType =
  | 'newsletter'
  | 'contact'
  | 'update'
  | 'latest-fund'

export interface FormWebhookPayload {
  type: FormWebhookType
  email: string
  firstName?: string
  lastName?: string
  name?: string
  phone?: string
  message?: string
  consent?: boolean
  /** Var formuläret skickades ifrån (pathname eller komponent) */
  source: string
  submittedAt: string
}

export class FormWebhookError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'FormWebhookError'
  }
}

function getWebhookUrl(): string {
  return (import.meta.env.VITE_FORM_WEBHOOK_URL as string | undefined)?.trim() ?? ''
}

export function isWebhookConfigured(): boolean {
  return Boolean(getWebhookUrl())
}

/**
 * Skickar formulärdata till den gemensamma webhooken.
 * Kastar FormWebhookError vid saknad URL eller misslyckat anrop.
 */
export async function submitFormWebhook(
  payload: Omit<FormWebhookPayload, 'submittedAt'> & { submittedAt?: string },
): Promise<void> {
  const url = getWebhookUrl()
  if (!url) {
    throw new FormWebhookError(
      'Webhook är inte konfigurerad ännu. Lägg in VITE_FORM_WEBHOOK_URL.',
    )
  }

  const body: FormWebhookPayload = {
    ...payload,
    submittedAt: payload.submittedAt ?? new Date().toISOString(),
  }

  let response: Response
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
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
