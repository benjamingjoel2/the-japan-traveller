// @ts-check
import { defineConfig } from 'astro/config';
import { site } from './src/config/site.mjs';

export default defineConfig({
  site: site.url,
  trailingSlash: 'never',
  build: {
    // /about.html, served as /about by Vercel cleanUrls
    format: 'file',
    // inline all CSS: no render-blocking stylesheet request
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  prefetch: false,
  devToolbar: { enabled: false },
});
