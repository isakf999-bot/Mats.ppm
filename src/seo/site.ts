/** Bas-URL för canonical, OG och sitemap. Byt när egen domän kopplas. */
export const SITE_URL = 'https://mats-ppm.vercel.app'

export interface PageSeo {
  title: string
  description: string
  path: string
  /** Om true: noindex (t.ex. 404) */
  noindex?: boolean
}

const DEFAULT_TITLE = 'Mats Svensson – Insyn i ett aktivt fondsparande | PPM & ISK'
const DEFAULT_DESC =
  'Följ Mats Svenssons aktiva fondsparande i realtid. Få insyn i fondbyten för PPM och ISK – utan rådgivning, med full transparens sedan 2010.'

export const DEFAULT_SEO: PageSeo = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESC,
  path: '/',
}

/** SEO per route – unik title + description för varje sida. */
export const PAGE_SEO: Record<string, PageSeo> = {
  '/': DEFAULT_SEO,
  '/erbjudandet': {
    title: 'Vad Mats Svensson erbjuder | Fondbytesinformation PPM & ISK',
    description:
      'Läs hur Mats fondbytesinformation fungerar för PPM och ISK – insyn i fondbyten, resonemang och marknadsanalys utan personlig rådgivning.',
    path: '/erbjudandet',
  },
  '/bli-kund': {
    title: 'Bli kund | Mats Svensson fondbytesinformation',
    description:
      'Det är enkelt att bli kund. Få Mats fondbyten via sms och e-post samma dag – välj PPM, PPM & ISK eller For The Future by Mats.',
    path: '/bli-kund',
  },
  '/sa-har-byter-du-fond': {
    title: 'Så här byter du fonder | Guide PPM & ISK',
    description:
      'Steg-för-steg-guide: så byter du PPM-fonder i dator och mobil, samt ISK-fonder på Avanza och Nordnet.',
    path: '/sa-har-byter-du-fond',
  },
  '/senaste-fondbytet': {
    title: 'Senaste fondbytet | Mats Svensson',
    description:
      'Se det senaste fondvalet från Mats Svensson och få uppdateringar direkt i inkorgen.',
    path: '/senaste-fondbytet',
  },
  '/nyhetsarkiv': {
    title: 'Nyhetsarkiv | Mats Svensson',
    description:
      'Arkiv med Mats Svenssons nyhetsbrev och marknadsanalyser kring fondsparande, PPM och ISK.',
    path: '/nyhetsarkiv',
  },
  '/mats-ppm-konto': {
    title: 'Mats PPM-konto & ISK-historik | Resultat',
    description:
      'Följ värdeutvecklingen på Mats egna PPM- och ISK-konton år för år – transparent historik.',
    path: '/mats-ppm-konto',
  },
  '/statistik': {
    title: 'Statistik & avkastning | Mats Svensson',
    description:
      'Se årlig värdeförändring och PPM-utveckling över tid. Statistik över Mats aktiva fondsparande.',
    path: '/statistik',
  },
  '/om-mats-svensson': {
    title: 'Om Mats Svensson | Fondbytesinformation sedan 2010',
    description:
      'Vem är Mats Svensson? Socionom med intresse för fondsparande – uppmärksammad i DI och Aftonbladet, tusentals kunder sedan 2010.',
    path: '/om-mats-svensson',
  },
  '/kundtjanst': {
    title: 'Kundtjänst | Kontakta Mats Svensson',
    description:
      'Kontakta kundtjänst hos Mats Svensson 2000 AB – frågor om fondbytesinformation, abonnemang och support.',
    path: '/kundtjanst',
  },
  '/fragor-svar': {
    title: 'Vanliga frågor och svar | Mats Svensson',
    description:
      'Svar på vanliga frågor om fondbytesinformationen, PPM, ISK, priser och hur tjänsten fungerar.',
    path: '/fragor-svar',
  },
  '/uppdatera-kunduppgifter': {
    title: 'Uppdatera kunduppgifter | Mats Svensson',
    description:
      'Uppdatera dina kunduppgifter för Mats fondbytesinformation – e-post, telefon och övriga uppgifter.',
    path: '/uppdatera-kunduppgifter',
  },
  '/allmanna-villkor': {
    title: 'Allmänna villkor | Mats Svensson',
    description:
      'Allmänna villkor för Mats Svensson 2000 AB – abonnemang, betalning, ångerrätt och ansvar för fondbytesinformationen.',
    path: '/allmanna-villkor',
  },
  '/integritetspolicy': {
    title: 'Integritetspolicy | Mats Svensson',
    description:
      'Hur Mats Svensson 2000 AB behandlar personuppgifter enligt GDPR – ändamål, laglig grund, lagringstid och dina rättigheter.',
    path: '/integritetspolicy',
  },
}

export function getSeoForPath(pathname: string): PageSeo {
  return PAGE_SEO[pathname] ?? {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    path: pathname,
  }
}
