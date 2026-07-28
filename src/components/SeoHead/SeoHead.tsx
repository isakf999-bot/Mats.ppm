import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSeoForPath, SITE_URL } from '../../seo/site'

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

/**
 * Uppdaterar title, description, canonical och Open Graph per route
 * så varje undersida får unik SEO (viktigt för SPA).
 */
export default function SeoHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = getSeoForPath(pathname)
    const url = `${SITE_URL}${seo.path === '/' ? '/' : seo.path}`

    document.title = seo.title
    upsertMeta('name', 'description', seo.description)
    upsertMeta('name', 'robots', seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large')
    upsertLink('canonical', url)

    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:title', seo.title)
    upsertMeta('property', 'og:description', seo.description)
    upsertMeta('property', 'og:image', `${SITE_URL}/og-image.png`)

    upsertMeta('name', 'twitter:title', seo.title)
    upsertMeta('name', 'twitter:description', seo.description)
    upsertMeta('name', 'twitter:image', `${SITE_URL}/og-image.png`)
  }, [pathname])

  return null
}
