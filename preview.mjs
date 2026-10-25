import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const publicFiles = new Set(['/index.html', '/404.html', '/styles.css', '/script.js', '/robots.txt']);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.webp': 'image/webp', '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8' };
const port = Number(process.env.PORT || 4173);
const server = http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const route = pathname === '/' ? '/index.html' : pathname;
    const target = resolve(root, `.${route}`);
    const allowed = target.startsWith(resolve(root) + sep) && !route.includes('/.') && (publicFiles.has(route) || route.startsWith('/assets/web/') || route.startsWith('/assets/fonts/'));
    const data = allowed ? await readFile(target).catch(() => null) : null;
    response.writeHead(data ? 200 : 404, { 'Content-Type': data ? (types[extname(target)] || 'application/octet-stream') : types['.html'] });
    response.end(data || await readFile(resolve(root, '404.html')));
  } catch {
    response.writeHead(400); response.end('Bad request');
  }
});
server.listen(port, '127.0.0.1', () => console.log(`Superior Plumbing preview: http://127.0.0.1:${port}`));
