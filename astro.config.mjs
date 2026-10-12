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
      for (const folder of ['videos', 'brand']) {
        const target = path.join(fileURLToPath(dir), folder);
        if (!fs.existsSync(target)) continue;
        for (const file of fs.readdirSync(target)) {
          if (file.endsWith('.webp.json')) fs.rmSync(path.join(target, file));
        }
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
