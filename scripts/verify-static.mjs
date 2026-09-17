import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'out');

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(filename) : [filename];
  });
}

assert(existsSync(path.join(output, 'index.html')), 'Missing out/index.html; run pnpm build first.');
assert(existsSync(path.join(output, '404.html')), 'Missing static 404 page.');

const pages = walk(path.join(root, 'app')).filter((filename) => /[/\\]page\.(tsx|jsx|ts|js)$/.test(filename));
for (const page of pages) {
  const route = path.relative(path.join(root, 'app'), path.dirname(page));
  assert(existsSync(path.join(output, route, 'index.html')), `Missing exported route: /${route}`);
}

const files = walk(output);
const references = new Set();
const missing = [];
function checkReference(value, fromFile) {
  if (!value || value.startsWith('#') || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value)) return;
  const fromUrl = `https://static.local/${path.relative(output, fromFile).split(path.sep).join('/')}`;
  const url = new URL(value.replaceAll('&amp;', '&'), fromUrl);
  const destination = path.join(output, decodeURIComponent(url.pathname));
  references.add(url.pathname);
  if (!existsSync(destination) || (statSync(destination).isDirectory() && !existsSync(path.join(destination, 'index.html')))) {
    missing.push(`${path.relative(output, fromFile)} -> ${url.pathname}`);
  }
}

for (const file of files) {
  if (file.endsWith('.html')) {
    const html = readFileSync(file, 'utf8');
    for (const match of html.matchAll(/\b(?:src|href|poster)="([^"]*)"/g)) checkReference(match[1], file);
  } else if (file.endsWith('.css')) {
    const css = readFileSync(file, 'utf8');
    for (const match of css.matchAll(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^\s)]+))\s*\)/g)) {
      checkReference(match[1] ?? match[2] ?? match[3], file);
    }
  }
}

assert.equal(missing.length, 0, `Broken local references:\n${missing.join('\n')}`);
console.log(`Verified ${pages.length} page routes, static 404, and ${references.size} local page/asset references.`);
