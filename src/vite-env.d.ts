/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Make-webhook URL för formulär */
  readonly VITE_FORM_WEBHOOK_URL?: string
  /** Make API-nyckel (header x-make-apikey) */
  readonly VITE_MAKE_API_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'pricing-table-id'?: string
          'publishable-key'?: string
          'client-reference-id'?: string
          'customer-email'?: string
        },
        HTMLElement
      >
    }
  }
}
