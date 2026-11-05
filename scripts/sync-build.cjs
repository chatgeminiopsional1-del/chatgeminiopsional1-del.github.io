const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  // Sync dist to docs
  copyDir('dist', 'docs');
  // Sync dist/assets to assets
  if (fs.existsSync('dist/assets')) {
    copyDir('dist/assets', 'assets');
  }

  // Ensure all public icons & SEO files exist at root, docs, and dist
  const publicFiles = [
    'favicon.ico',
    'favicon-48x48.png',
    'favicon-96x96.png',
    'favicon-192x192.png',
    'favicon.png',
    'apple-touch-icon.png',
    'logo.png',
    'logo512.png',
    'site.webmanifest',
    'sitemap.xml',
    'robots.txt'
  ];

  for (const file of publicFiles) {
    const src = path.join('public', file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, file);
      fs.copyFileSync(src, path.join('dist', file));
      fs.copyFileSync(src, path.join('docs', file));
    }
  }

  console.log('Build artifacts and public SEO files successfully synced!');
} catch (err) {
  console.error('Error syncing build artifacts:', err);
  process.exit(1);
}
