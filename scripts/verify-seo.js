import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const indexHtmlPath = path.join(distDir, 'index.html');
const sitemapXmlPath = path.join(distDir, 'sitemap.xml');
const robotsTxtPath = path.join(distDir, 'robots.txt');
const webmanifestPath = path.join(distDir, 'site.webmanifest');
const ogImagePath = path.join(distDir, 'og-image.jpg');

console.log('=== STARTING COMPREHENSIVE TECHNICAL SEO AUDIT & VERIFICATION ===\n');

// -------------------------------------------------------------
// Helper: Strict XML Syntax & Hierarchy Parser
// -------------------------------------------------------------
function parseAndValidateXml(xmlString) {
  const trimmed = xmlString.trim();
  if (!trimmed.startsWith('<?xml')) {
    throw new Error('XML does not start with standard <?xml declaration');
  }

  // Tokenize tags and content
  const tagRegex = /<([?!/]?)([\w:-]+)([^>]*)>/g;
  const stack = [];
  let match;
  let hasRoot = false;
  let rootTag = null;
  const urls = [];
  let currentUrl = null;
  let currentTag = null;
  let lastIndex = 0;

  while ((match = tagRegex.exec(trimmed)) !== null) {
    const [fullTag, prefix, tagName, attrsStr] = match;
    const textBetween = trimmed.substring(lastIndex, match.index).trim();

    if (currentTag && textBetween) {
      if (currentUrl && ['loc', 'lastmod', 'changefreq', 'priority'].includes(currentTag)) {
        currentUrl[currentTag] = textBetween;
      }
    }

    lastIndex = match.index + fullTag.length;

    // Declaration or comments
    if (prefix === '?' || prefix === '!') {
      continue;
    }

    // Closing tag
    if (prefix === '/') {
      if (stack.length === 0) {
        throw new Error(`Unexpected closing tag </${tagName}> without matching open tag`);
      }
      const expected = stack.pop();
      if (expected !== tagName) {
        throw new Error(`Mismatched closing tag: expected </${expected}>, got </${tagName}>`);
      }
      if (tagName === 'url' && currentUrl) {
        urls.push(currentUrl);
        currentUrl = null;
      }
      currentTag = stack[stack.length - 1] || null;
      continue;
    }

    // Self-closing tag
    const isSelfClosing = attrsStr.trim().endsWith('/');
    if (!hasRoot) {
      hasRoot = true;
      rootTag = tagName;
    }

    if (!isSelfClosing) {
      stack.push(tagName);
      currentTag = tagName;
      if (tagName === 'url') {
        currentUrl = {};
      }
    }
  }

  if (stack.length > 0) {
    throw new Error(`Unclosed XML tags remaining: ${stack.join(', ')}`);
  }

  return { rootTag, urls };
}

// -------------------------------------------------------------
// 1. Robots.txt Validation
// -------------------------------------------------------------
console.log('1. Checking robots.txt...');
if (!fs.existsSync(robotsTxtPath)) {
  throw new Error('dist/robots.txt is missing');
}
const robotsTxt = fs.readFileSync(robotsTxtPath, 'utf8');
if (!robotsTxt.includes('Allow: /')) {
  throw new Error('robots.txt does not allow crawling of /');
}
if (!robotsTxt.includes('Sitemap: https://daniyalsaqib.me/sitemap.xml')) {
  throw new Error('robots.txt is missing Sitemap: https://daniyalsaqib.me/sitemap.xml');
}
console.log('  ✔ robots.txt exists, allows root crawling, and declares sitemap location.');

// -------------------------------------------------------------
// 2. Strict XML Sitemap Validation
// -------------------------------------------------------------
console.log('2. Checking sitemap.xml...');
if (!fs.existsSync(sitemapXmlPath)) {
  throw new Error('dist/sitemap.xml is missing');
}
const sitemapXml = fs.readFileSync(sitemapXmlPath, 'utf8');
const parsedXml = parseAndValidateXml(sitemapXml);

if (parsedXml.rootTag !== 'urlset') {
  throw new Error(`Sitemap root tag must be <urlset>, found <${parsedXml.rootTag}>`);
}
if (!sitemapXml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
  throw new Error('Sitemap missing standard xmlns schema namespace');
}
if (parsedXml.urls.length === 0) {
  throw new Error('Sitemap contains 0 <url> entries');
}

const homeUrlEntry = parsedXml.urls.find((u) => u.loc === 'https://daniyalsaqib.me/');
if (!homeUrlEntry) {
  throw new Error('Sitemap does not contain canonical https://daniyalsaqib.me/ URL');
}
if (!/^\d{4}-\d{2}-\d{2}$/.test(homeUrlEntry.lastmod)) {
  throw new Error(`Sitemap lastmod is not in valid YYYY-MM-DD format: ${homeUrlEntry.lastmod}`);
}
console.log(`  ✔ sitemap.xml parsed with ${parsedXml.urls.length} URLs (Canonical: ${homeUrlEntry.loc}, lastmod: ${homeUrlEntry.lastmod})`);

// -------------------------------------------------------------
// 3. Web App Manifest Validation
// -------------------------------------------------------------
console.log('3. Checking site.webmanifest...');
if (!fs.existsSync(webmanifestPath)) {
  throw new Error('dist/site.webmanifest is missing');
}
const webmanifest = JSON.parse(fs.readFileSync(webmanifestPath, 'utf8'));
if (!webmanifest.name || !webmanifest.short_name || !Array.isArray(webmanifest.icons)) {
  throw new Error('site.webmanifest missing required manifest fields');
}
for (const icon of webmanifest.icons) {
  const iconPath = path.join(distDir, icon.src.replace(/^\//, ''));
  if (!fs.existsSync(iconPath)) {
    throw new Error(`Manifest referenced icon does not exist: ${icon.src}`);
  }
}
console.log('  ✔ site.webmanifest is valid JSON and referenced icon file exists.');

// -------------------------------------------------------------
// 4. Open Graph & Social Preview Asset Format Validation
// -------------------------------------------------------------
console.log('4. Checking social preview image asset (og-image.jpg)...');
if (!fs.existsSync(ogImagePath)) {
  throw new Error('dist/og-image.jpg is missing');
}
const ogBuf = fs.readFileSync(ogImagePath);
if (ogBuf.length < 50000) {
  throw new Error('og-image.jpg is suspiciously small (< 50KB)');
}
// Validate JPEG Magic Bytes: 0xFF 0xD8 0xFF
if (ogBuf[0] !== 0xff || ogBuf[1] !== 0xd8 || ogBuf[2] !== 0xff) {
  throw new Error('og-image.jpg is not a valid JPEG (invalid magic bytes)');
}
let ogWidth = 0;
let ogHeight = 0;
for (let i = 0; i < ogBuf.length - 8; i++) {
  if (ogBuf[i] === 0xff && (ogBuf[i + 1] === 0xc0 || ogBuf[i + 1] === 0xc2)) {
    ogHeight = ogBuf.readUInt16BE(i + 5);
    ogWidth = ogBuf.readUInt16BE(i + 7);
    break;
  }
}
if (ogWidth < 1200 || ogHeight < 630) {
  throw new Error(`og-image.jpg dimensions ${ogWidth}x${ogHeight} below recommended 1200x630`);
}
// Verify no stray/misnamed files
const ogPngPath = path.join(distDir, 'og-image.png');
if (fs.existsSync(ogPngPath)) {
  throw new Error('Found unexpected og-image.png in dist. Do not leave JPEG assets under PNG extension.');
}
console.log(`  ✔ og-image.jpg verified (Valid JPEG format, ${ogWidth}x${ogHeight}px, ${ogBuf.length} bytes).`);

// -------------------------------------------------------------
// 5. HTML Document & Meta Tags Audit
// -------------------------------------------------------------
console.log('5. Auditing dist/index.html metadata and tags...');
if (!fs.existsSync(indexHtmlPath)) {
  throw new Error('dist/index.html is missing');
}
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Check for single occurrences (no duplicates)
function countOccurrences(str, regex) {
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

if (countOccurrences(indexHtml, /<title>/gi) !== 1) {
  throw new Error('Expected exactly 1 <title> tag in index.html');
}
if (countOccurrences(indexHtml, /<meta\s+name=["']description["']/gi) !== 1) {
  throw new Error('Expected exactly 1 meta description tag in index.html');
}
if (countOccurrences(indexHtml, /<link\s+rel=["']canonical["']/gi) !== 1) {
  throw new Error('Expected exactly 1 canonical tag in index.html');
}

// Canonical URL format
const canonicalMatch = indexHtml.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
if (!canonicalMatch || canonicalMatch[1] !== 'https://daniyalsaqib.me/') {
  throw new Error(`Canonical tag href must be https://daniyalsaqib.me/, found: ${canonicalMatch?.[1]}`);
}

// Robots tag
if (!indexHtml.includes('name="robots"') || !indexHtml.includes('max-image-preview:large')) {
  throw new Error('Robots meta tag missing or misconfigured');
}

// Open Graph tags
const requiredOgTags = ['og:type', 'og:url', 'og:title', 'og:description', 'og:image'];
for (const tag of requiredOgTags) {
  if (!indexHtml.includes(`property="${tag}"`)) {
    throw new Error(`Missing Open Graph tag: ${tag}`);
  }
}
if (!indexHtml.includes('https://daniyalsaqib.me/og-image.jpg')) {
  throw new Error('og:image does not point to https://daniyalsaqib.me/og-image.jpg');
}

// Twitter Card tags
const requiredTwitterTags = ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'];
for (const tag of requiredTwitterTags) {
  if (!indexHtml.includes(`name="${tag}"`)) {
    throw new Error(`Missing Twitter tag: ${tag}`);
  }
}

console.log('  ✔ All core meta tags verified with 0 duplicates and correct HTTPS endpoints.');

// -------------------------------------------------------------
// 6. Structured Data (JSON-LD) Validation
// -------------------------------------------------------------
console.log('6. Validating Schema.org JSON-LD...');
const jsonLdMatch = indexHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (!jsonLdMatch) {
  throw new Error('JSON-LD script tag not found in index.html');
}
const schema = JSON.parse(jsonLdMatch[1]);
if (schema['@context'] !== 'https://schema.org') {
  throw new Error(`Schema context must be https://schema.org, found ${schema['@context']}`);
}
if (!Array.isArray(schema['@graph'])) {
  throw new Error('Schema must contain a top-level @graph array');
}

const graphTypes = schema['@graph'].map((item) => item['@type']);
for (const expectedType of ['WebSite', 'ProfilePage', 'Person']) {
  if (!graphTypes.includes(expectedType)) {
    throw new Error(`Schema graph missing expected type: ${expectedType}`);
  }
}

const person = schema['@graph'].find((item) => item['@type'] === 'Person');
if (!person) throw new Error('Person schema not found');
if (person.name !== 'Daniyal Saqib') throw new Error(`Person name is incorrect: ${person.name}`);
if (person.url !== 'https://daniyalsaqib.me/') throw new Error(`Person url must be https://daniyalsaqib.me/`);
if (!person.sameAs.includes('https://linkedin.com/in/daniyal-saqib-012142335')) throw new Error('Person missing LinkedIn profile');
if (!person.sameAs.includes('https://github.com/daniyalsaqib')) throw new Error('Person missing GitHub profile');
if (!person.worksFor || person.worksFor.name !== 'Devsignia') throw new Error('Person worksFor must be Devsignia');
if (!person.alumniOf || person.alumniOf.name !== 'University of Management and Technology') throw new Error('Person alumniOf must be UMT');
if (!Array.isArray(person.knowsAbout) || person.knowsAbout.length < 5) throw new Error('Person knowsAbout must list core technical skills');

console.log(`  ✔ JSON-LD parsed cleanly: ${graphTypes.join(', ')} graph validated with accurate verified data.`);

// -------------------------------------------------------------
// 7. Prerendered HTML & Crawlability Validation
// -------------------------------------------------------------
console.log('7. Validating pre-rendered DOM markup in #root...');
const rootStartTag = '<div id="root">';
const rootStart = indexHtml.indexOf(rootStartTag);
if (rootStart === -1) {
  throw new Error('<div id="root"> missing from dist/index.html');
}
const bodyEnd = indexHtml.indexOf('</body>', rootStart);
if (bodyEnd === -1) {
  throw new Error('</body> missing from dist/index.html');
}
// Strip the trailing </div> of #root
const rootHtmlWithEnd = indexHtml.substring(rootStart + rootStartTag.length, bodyEnd).trim();
const prerenderedContent = rootHtmlWithEnd.endsWith('</div>')
  ? rootHtmlWithEnd.slice(0, -6).trim()
  : rootHtmlWithEnd;

if (!prerenderedContent || prerenderedContent.length < 20000) {
  throw new Error(`Prerendered content is suspiciously short (${prerenderedContent.length} chars)`);
}

const criticalHeadings = [
  'Daniyal Saqib',
  'Engineering &amp; Execution',
  'Where I&#x27;ve worked',
  'Crafted Systems &amp; Software',
  'Skills &amp; Technologies',
  'Societies &amp; Campus Initiatives',
  'Let&#x27;s connect',
];
for (const heading of criticalHeadings) {
  if (!prerenderedContent.includes(heading)) {
    throw new Error(`Missing expected section heading in pre-rendered markup: ${heading}`);
  }
}

// Verify that all 5 projects and all 5 work experiences are present in the DOM
const allProjects = [
  'ABL Statement &amp; Policy Intelligence',
  'Networking CRM System',
  'Inbox Copilot',
  'PatientZero Prototype',
  'ABL Core Banking Console',
];
for (const p of allProjects) {
  if (!prerenderedContent.includes(p)) {
    throw new Error(`Project missing from pre-rendered DOM: ${p}`);
  }
}

const allCompanies = [
  'Devsignia',
  'Allied Bank Limited (ABL)',
  'Axiolink Systems',
  'Codzilla Technologies',
  'WiMetrix',
];
for (const c of allCompanies) {
  if (!prerenderedContent.includes(c)) {
    throw new Error(`Company missing from pre-rendered DOM: ${c}`);
  }
}
console.log(`  ✔ Pre-rendered DOM verified (${prerenderedContent.length} chars, all 5 projects and 5 work histories verified in DOM).`);

// -------------------------------------------------------------
// 8. Internal Navigation Anchors Validation
// -------------------------------------------------------------
console.log('8. Checking internal navigation anchor links...');
const internalLinkRegex = /href="#([a-zA-Z0-9_-]+)"/g;
let linkMatch;
const internalAnchors = new Set();
while ((linkMatch = internalLinkRegex.exec(prerenderedContent)) !== null) {
  internalAnchors.add(linkMatch[1]);
}

for (const anchor of internalAnchors) {
  const targetRegex = new RegExp(`id=["']${anchor}["']`, 'i');
  if (!prerenderedContent.match(targetRegex)) {
    throw new Error(`Broken internal anchor link: href="#${anchor}" has no corresponding id="${anchor}"`);
  }
}
console.log(`  ✔ All ${internalAnchors.size} internal anchor links resolve to valid section IDs in the DOM (${Array.from(internalAnchors).join(', ')}).`);

// -------------------------------------------------------------
// 9. Consistency of Preferred Domain & HTTPS
// -------------------------------------------------------------
console.log('9. Checking domain and protocol consistency...');
if (indexHtml.includes('http://daniyalsaqib.me') || indexHtml.includes('http://www.daniyalsaqib.me')) {
  throw new Error('Insecure HTTP reference to daniyalsaqib.me found in index.html');
}
for (const entry of parsedXml.urls) {
  if (entry.loc && entry.loc.startsWith('http://')) {
    throw new Error(`Insecure HTTP URL found in sitemap.xml loc: ${entry.loc}`);
  }
}
console.log('  ✔ All canonical URLs, sitemap locs, and schema identifiers consistently use https://daniyalsaqib.me/.');

console.log('\n=============================================================');
console.log('  ALL AUDIT AND TECHNICAL SEO VERIFICATIONS PASSED (9/9)  ');
console.log('=============================================================\n');
