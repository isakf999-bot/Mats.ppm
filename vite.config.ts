import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildSitemapXml } from './src/seo/site'

const root = fileURLToPath(new URL('.', import.meta.url))

function sitemapPlugin(): Plugin {
  const writeSitemap = (outDir?: string) => {
    const xml = buildSitemapXml()
    writeFileSync(resolve(root, 'public/sitemap.xml'), xml, 'utf8')
    if (outDir) {
      writeFileSync(resolve(outDir, 'sitemap.xml'), xml, 'utf8')
    }
  }

  return {
    name: 'generate-sitemap',
    buildStart() {
      writeSitemap()
    },
    closeBundle() {
      writeSitemap(resolve(root, 'dist'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sitemapPlugin()],
})
