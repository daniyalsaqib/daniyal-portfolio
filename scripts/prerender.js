import { build } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const distSsrDir = path.join(rootDir, 'dist-ssr');
const indexPath = path.join(distDir, 'index.html');

async function prerender() {
  console.log('Building SSR bundle with Vite...');
  await build({
    root: rootDir,
    logLevel: 'warn',
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: 'dist-ssr',
      emptyOutDir: true,
    },
  });

  console.log('Rendering application to static HTML...');
  const entrySsrPath = path.join(distSsrDir, 'entry-server.js');
  const entryServer = await import(`file://${entrySsrPath.replace(/\\/g, '/')}`);
  const appHtml = entryServer.render();

  if (!fs.existsSync(indexPath)) {
    throw new Error(`Production index.html not found at ${indexPath}`);
  }

  let indexHtml = fs.readFileSync(indexPath, 'utf-8');
  const rootPlaceholder = '<div id="root"></div>';

  if (!indexHtml.includes(rootPlaceholder)) {
    throw new Error(`Could not find ${rootPlaceholder} in ${indexPath}`);
  }

  indexHtml = indexHtml.replace(rootPlaceholder, `<div id="root">${appHtml}</div>`);
  fs.writeFileSync(indexPath, indexHtml, 'utf-8');
  console.log(`Pre-rendered markup (${appHtml.length} characters) successfully injected into dist/index.html`);

  try {
    fs.rmSync(distSsrDir, { recursive: true, force: true });
    console.log('Cleaned up temporary SSR artifacts.');
  } catch (err) {
    console.warn('Note: Could not remove temporary dist-ssr directory:', err);
  }
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
