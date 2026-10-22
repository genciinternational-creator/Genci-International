// Sitemap of the public pages (the 404 page is left out on purpose).
export const GET = ({ site }) => {
  const paths = ['/', '/privacy/', '/terms/'];
  const urls = site ? paths.map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`) : [];
  const xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', ...urls, '</urlset>', ''].join('\n');
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
