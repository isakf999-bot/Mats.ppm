import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  absoluteUrl,
  buildPageJsonLd,
  getSeoForPath,
  SITE_URL,
} from '../../seo/site'

const OG_IMAGE = `${SITE_URL}/og-image.png`
const OG_IMAGE_ALT = 'Mats Svensson – fondbytesinformation'
const PAGE_JSON_LD_ID = 'page-jsonld'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id: string, data: unknown) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.text = JSON.stringify(data)
}

/**
 * Uppdaterar title, description, canonical, Open Graph och JSON-LD per route
 * så varje undersida får unik SEO (viktigt för SPA).
 */
export default function SeoHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = getSeoForPath(pathname)
    const url = absoluteUrl(seo.path)

    document.title = seo.title
    upsertMeta('name', 'description', seo.description)
    upsertMeta(
      'name',
      'robots',
      seo.noindex
        ? 'noindex, follow'
        : 'index, follow, max-image-preview:large',
    )
    upsertLink('canonical', url)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', 'sv_SE')
    upsertMeta('property', 'og:site_name', 'Mats Svensson')
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:title', seo.title)
    upsertMeta('property', 'og:description', seo.description)
    upsertMeta('property', 'og:image', OG_IMAGE)
    upsertMeta('property', 'og:image:alt', OG_IMAGE_ALT)
    upsertMeta('property', 'og:image:width', '1200')
    upsertMeta('property', 'og:image:height', '630')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', seo.title)
    upsertMeta('name', 'twitter:description', seo.description)
    upsertMeta('name', 'twitter:image', OG_IMAGE)
    upsertMeta('name', 'twitter:image:alt', OG_IMAGE_ALT)

    upsertJsonLd(PAGE_JSON_LD_ID, buildPageJsonLd(seo))
  }, [pathname])

  return null
}
