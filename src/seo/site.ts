/** Bas-URL för canonical, OG och sitemap. Sätts via VITE_SITE_URL. */
function resolveSiteUrl(): string {
  const raw =
    (typeof import.meta !== 'undefined' &&
      import.meta.env &&
      (import.meta.env.VITE_SITE_URL as string | undefined)) ||
    'https://mats-svensson.se'
  return String(raw).replace(/\/$/, '')
}

export const SITE_URL = resolveSiteUrl()

export type ChangeFreq =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'

export interface PageSeo {
  title: string
  description: string
  path: string
  /** Kort etikett för breadcrumbs */
  crumb?: string
  /** Om true: noindex (404, utility-sidor) */
  noindex?: boolean
  changefreq?: ChangeFreq
  priority?: number
}

export interface BreadcrumbItem {
  name: string
  path: string
}

export interface SitemapEntry {
  loc: string
  changefreq: ChangeFreq
  priority: number
}

const DEFAULT_TITLE = 'Mats Svensson – Insyn i ett aktivt fondsparande | PPM & ISK'
const DEFAULT_DESC =
  'Följ Mats Svenssons aktiva fondsparande i realtid. Få insyn i fondbyten för PPM och ISK – utan rådgivning, med full transparens sedan 2010.'

export const DEFAULT_SEO: PageSeo = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESC,
  path: '/',
  crumb: 'Hem',
  changefreq: 'weekly',
  priority: 1.0,
}

const NOT_FOUND_SEO: PageSeo = {
  title: 'Sidan hittades inte | Mats Svensson',
  description:
    'Sidan du söker finns inte eller har flyttats. Gå tillbaka till startsidan eller kontakta kundtjänst.',
  path: '/404',
  crumb: '404',
  noindex: true,
}

/** SEO per route – unik title + description för varje sida. */
export const PAGE_SEO: Record<string, PageSeo> = {
  '/': DEFAULT_SEO,
  '/erbjudandet': {
    title: 'Vad Mats Svensson erbjuder | Fondbytesinformation PPM & ISK',
    description:
      'Läs hur Mats fondbytesinformation fungerar för PPM och ISK – insyn i fondbyten, resonemang och marknadsanalys utan personlig rådgivning.',
    path: '/erbjudandet',
    crumb: 'Erbjudandet',
    changefreq: 'monthly',
    priority: 0.9,
  },
  '/bli-kund': {
    title: 'Bli kund | Mats Svensson fondbytesinformation',
    description:
      'Det är enkelt att bli kund. Få Mats fondbyten via sms och e-post samma dag – välj PPM, PPM & ISK eller For The Future by Mats.',
    path: '/bli-kund',
    crumb: 'Bli kund',
    changefreq: 'monthly',
    priority: 0.9,
  },
  '/sa-har-byter-du-fond': {
    title: 'Så här byter du fonder | Guide PPM & ISK',
    description:
      'Steg-för-steg-guide: så byter du PPM-fonder i dator och mobil, samt ISK-fonder på Avanza och Nordnet.',
    path: '/sa-har-byter-du-fond',
    crumb: 'Så byter du fonder',
    changefreq: 'monthly',
    priority: 0.8,
  },
  '/senaste-fondbytet': {
    title: 'Senaste fondbytet | Mats Svensson',
    description:
      'Se det senaste fondvalet från Mats Svensson och få uppdateringar direkt i inkorgen.',
    path: '/senaste-fondbytet',
    crumb: 'Senaste fondbytet',
    changefreq: 'weekly',
    priority: 0.8,
  },
  '/nyhetsarkiv': {
    title: 'Nyhetsarkiv | Mats Svensson',
    description:
      'Arkiv med Mats Svenssons nyhetsbrev och marknadsanalyser kring fondsparande, PPM och ISK.',
    path: '/nyhetsarkiv',
    crumb: 'Nyhetsarkiv',
    changefreq: 'weekly',
    priority: 0.7,
  },
  '/skool': {
    title: 'For The Future by Mats | Community på Skool',
    description:
      'Ett digitalt community för stabil och medveten framtid – långsiktigt sparande, marknadsförståelse, mindset och tryggt lärande tillsammans.',
    path: '/skool',
    crumb: 'Skool',
    changefreq: 'monthly',
    priority: 0.8,
  },
  '/renew': {
    title: 'Förnya abonnemang | Mats Svensson',
    description:
      'Förnya ditt abonnemang på Mats fondbytesinformation – välj paket och betala säkert via Stripe.',
    path: '/renew',
    crumb: 'Förnya',
    noindex: true,
    changefreq: 'monthly',
    priority: 0.3,
  },
  '/mats-ppm-konto': {
    title: 'Mats PPM-konto | Resultat',
    description:
      'Följ värdeutvecklingen på Mats egna PPM-konto år för år – transparent historik.',
    path: '/mats-ppm-konto',
    crumb: 'PPM-konto',
    changefreq: 'monthly',
    priority: 0.8,
  },
  '/statistik': {
    title: 'Statistik & avkastning | Mats Svensson',
    description:
      'Se årlig värdeförändring och PPM-utveckling över tid. Statistik över Mats aktiva fondsparande.',
    path: '/statistik',
    crumb: 'Statistik',
    changefreq: 'monthly',
    priority: 0.8,
  },
  '/om-mats-svensson': {
    title: 'Om Mats Svensson | Fondbytesinformation sedan 2010',
    description:
      'Vem är Mats Svensson? Socionom med intresse för fondsparande – uppmärksammad i DI och Aftonbladet, tusentals kunder sedan 2010.',
    path: '/om-mats-svensson',
    crumb: 'Om Mats',
    changefreq: 'monthly',
    priority: 0.7,
  },
  '/kundtjanst': {
    title: 'Kundtjänst | Kontakta Mats Svensson',
    description:
      'Kontakta kundtjänst hos Mats Svensson 2000 AB – frågor om fondbytesinformation, abonnemang och support.',
    path: '/kundtjanst',
    crumb: 'Kundtjänst',
    changefreq: 'monthly',
    priority: 0.6,
  },
  '/fragor-svar': {
    title: 'Vanliga frågor och svar | Mats Svensson',
    description:
      'Svar på vanliga frågor om fondbytesinformationen, PPM, ISK, priser och hur tjänsten fungerar.',
    path: '/fragor-svar',
    crumb: 'Frågor & svar',
    changefreq: 'monthly',
    priority: 0.7,
  },
  '/uppdatera-kunduppgifter': {
    title: 'Uppdatera kunduppgifter | Mats Svensson',
    description:
      'Uppdatera dina kunduppgifter för Mats fondbytesinformation – e-post, telefon och övriga uppgifter.',
    path: '/uppdatera-kunduppgifter',
    crumb: 'Uppdatera uppgifter',
    noindex: true,
    changefreq: 'yearly',
    priority: 0.3,
  },
  '/allmanna-villkor': {
    title: 'Allmänna villkor | Mats Svensson',
    description:
      'Allmänna villkor för Mats Svensson 2000 AB – abonnemang, betalning, ångerrätt och ansvar för fondbytesinformationen.',
    path: '/allmanna-villkor',
    crumb: 'Allmänna villkor',
    changefreq: 'yearly',
    priority: 0.3,
  },
  '/integritetspolicy': {
    title: 'Integritetspolicy | Mats Svensson',
    description:
      'Hur Mats Svensson 2000 AB behandlar personuppgifter enligt GDPR – ändamål, laglig grund, lagringstid och dina rättigheter.',
    path: '/integritetspolicy',
    crumb: 'Integritetspolicy',
    changefreq: 'yearly',
    priority: 0.3,
  },
}

/** Lowercase + ta bort trailing slash (utom /). */
export function normalizePath(pathname: string): string {
  const raw = pathname.split('?')[0]?.split('#')[0]?.trim() || '/'
  let path = raw.toLowerCase()
  if (!path.startsWith('/')) path = `/${path}`
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1)
  return path || '/'
}

export function absoluteUrl(path: string): string {
  const normalized = normalizePath(path)
  return normalized === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalized}`
}

export function getSeoForPath(pathname: string): PageSeo {
  const path = normalizePath(pathname)
  const known = PAGE_SEO[path]
  if (known) return { ...known, path }
  return { ...NOT_FOUND_SEO, path }
}

export function getBreadcrumbs(seo: PageSeo): BreadcrumbItem[] {
  if (seo.path === '/' || seo.noindex) {
    return [{ name: 'Hem', path: '/' }]
  }
  return [
    { name: 'Hem', path: '/' },
    { name: seo.crumb ?? seo.title.split('|')[0].trim(), path: seo.path },
  ]
}

/** Indexerbara sidor för sitemap (exkl. noindex). */
export function getSitemapEntries(): SitemapEntry[] {
  return Object.values(PAGE_SEO)
    .filter((page) => !page.noindex)
    .map((page) => ({
      loc: absoluteUrl(page.path),
      changefreq: page.changefreq ?? 'monthly',
      priority: page.priority ?? 0.5,
    }))
    .sort((a, b) => b.priority - a.priority || a.loc.localeCompare(b.loc))
}

export function buildSitemapXml(entries: SitemapEntry[] = getSitemapEntries()): string {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

/** robots.txt med sitemap på samma host som SITE_URL. */
export function buildRobotsTxt(siteUrl: string = SITE_URL): string {
  const base = siteUrl.replace(/\/$/, '')
  return `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`
}

/** Dynamisk WebPage + BreadcrumbList per route. */
export function buildPageJsonLd(seo: PageSeo) {
  const url = absoluteUrl(seo.path)
  const crumbs = getBreadcrumbs(seo)

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: seo.title,
      description: seo.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'sv-SE',
      ...(seo.noindex ? { robots: 'noindex' } : {}),
    },
  ]

  if (!seo.noindex && crumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: crumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
