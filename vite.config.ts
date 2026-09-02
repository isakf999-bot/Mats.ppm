import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildRobotsTxt, buildSitemapXml, getSitemapEntries } from './src/seo/site'

const root = fileURLToPath(new URL('.', import.meta.url))

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

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, root, '')
  const siteUrl = (env.VITE_SITE_URL || 'https://mats-svensson.se').replace(/\/$/, '')

  return {
    plugins: [react(), seoFilesPlugin(siteUrl)],
    // Säkerställ att %VITE_SITE_URL% i index.html alltid ersätts
    define: {
      // used by app code via import.meta.env
    },
    envPrefix: 'VITE_',
  }
})
