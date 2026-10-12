// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Public domain. Powers canonical URLs, Open Graph, the sitemap and schema.
// SITE_URL can override it (for a staging address, for example).
const site = process.env.SITE_URL || 'https://www.genciinternational.com';

// Image provenance notes (*.webp.json) live beside the posters in public/ for the
// design tooling, but they are internal: keep them out of the published site.
const dropProvenanceNotes = {
  name: 'genci:drop-provenance-notes',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const videos = path.join(fileURLToPath(dir), 'videos');
      if (!fs.existsSync(videos)) return;
      for (const file of fs.readdirSync(videos)) {
        if (file.endsWith('.json')) fs.rmSync(path.join(videos, file));
      }
    },
  },
};

export default defineConfig({
  site,
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
  integrations: [dropProvenanceNotes],
});
