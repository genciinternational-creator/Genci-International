// robots.txt: everything is crawlable, with the sitemap location.
export const GET = ({ site }) => {
  const lines = ['User-agent: *', 'Allow: /'];
  if (site) lines.push('', `Sitemap: ${new URL('/sitemap.xml', site).href}`);
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
