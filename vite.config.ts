import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  buildRobotsTxt,
  buildSitemapXml,
  getPrerenderPages,
  getSitemapEntries,
  type PageSeo,
} from './src/seo/site'

const root = fileURLToPath(new URL('.', import.meta.url))

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function replaceMeta(
  html: string,
  attr: 'name' | 'property',
  key: string,
  content: string,
): string {
  const escaped = escapeHtml(content)
  const re = new RegExp(
    `<meta\\s+[^>]*${attr}=["']${key}["'][^>]*>`,
    'i',
  )
  const match = html.match(re)
  if (!match) return html

  const tag = match[0]
  if (/content=/i.test(tag)) {
    const updated = tag.replace(
      /content=(["'])[\s\S]*?\1/i,
      `content="${escaped}"`,
    )
    return html.replace(tag, updated)
  }
  return html
}

function applyPageSeo(html: string, siteUrl: string, page: PageSeo): string {
  const url = page.path === '/' ? `${siteUrl}/` : `${siteUrl}${page.path}`
  const title = page.title
  const description = page.description
  const robots = page.noindex
    ? 'noindex, follow'
    : 'index, follow, max-image-preview:large'
  const heading = page.crumb ?? title.split('|')[0].trim()

  let out = html
  out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
  out = out.replace(
    /(<link\s+rel="canonical"\s+href=")[^"]*("\s*\/?>)/i,
    `$1${url}$2`,
  )
  out = replaceMeta(out, 'name', 'description', description)
  out = replaceMeta(out, 'name', 'robots', robots)
  out = replaceMeta(out, 'property', 'og:url', url)
  out = replaceMeta(out, 'property', 'og:title', title)
  out = replaceMeta(out, 'property', 'og:description', description)
  out = replaceMeta(out, 'name', 'twitter:title', title)
  out = replaceMeta(out, 'name', 'twitter:description', description)

  // Unik H1 + ingress i crawlbar shell (React ersätter #root ändå)
  out = out.replace(
    /<main id="main-content">[\s\S]*?<\/main>/i,
    `<main id="main-content">
        <h1>${escapeHtml(heading)}</h1>
        <p>${escapeHtml(description)}</p>
        <p>
          <a href="/">Hem</a>
          ·
          <a href="/erbjudandet">Erbjudandet</a>
          ·
          <a href="/bli-kund">Bli kund</a>
          ·
          <a href="/om-mats-svensson">Om Mats Svensson</a>
          ·
          <a href="/kundtjanst">Kundtjänst</a>
        </p>
      </main>`,
  )

  return out
}

function seoFilesPlugin(siteUrl: string): Plugin {
  const writeSeoFiles = (outDir?: string) => {
    const entries = getSitemapEntries().map((entry) => ({
      ...entry,
      loc: entry.loc.replace(/^https?:\/\/[^/]+/, siteUrl),
    }))
    const sitemap = buildSitemapXml(entries)
    const robots = buildRobotsTxt(siteUrl)

    writeFileSync(resolve(root, 'public/sitemap.xml'), sitemap, 'utf8')
    writeFileSync(resolve(root, 'public/robots.txt'), robots, 'utf8')
    if (outDir) {
      writeFileSync(resolve(outDir, 'sitemap.xml'), sitemap, 'utf8')
      writeFileSync(resolve(outDir, 'robots.txt'), robots, 'utf8')
    }
  }

  return {
    name: 'generate-seo-files',
    buildStart() {
      writeSeoFiles()
    },
    closeBundle() {
      writeSeoFiles(resolve(root, 'dist'))
    },
  }
}

/** Skriver unik index.html per route så crawlers ser rätt title (inte bara SPA-shell). */
function prerenderRoutesPlugin(siteUrl: string): Plugin {
  return {
    name: 'prerender-route-html',
    apply: 'build',
    closeBundle() {
      const dist = resolve(root, 'dist')
      const template = readFileSync(resolve(dist, 'index.html'), 'utf8')

      for (const page of getPrerenderPages()) {
        const html = applyPageSeo(template, siteUrl, page)
        const outFile = resolve(dist, page.path.replace(/^\//, ''), 'index.html')
        mkdirSync(dirname(outFile), { recursive: true })
        writeFileSync(outFile, html, 'utf8')
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, root, '')
  const siteUrl = (env.VITE_SITE_URL || 'https://mats-svensson.se').replace(/\/$/, '')

  return {
    plugins: [react(), seoFilesPlugin(siteUrl), prerenderRoutesPlugin(siteUrl)],
    envPrefix: 'VITE_',
  }
})
