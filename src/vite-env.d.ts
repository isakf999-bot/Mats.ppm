/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Gemensam formulär-webhook (ActiveCampaign). Tom tills URL finns. */
  readonly VITE_FORM_WEBHOOK_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
