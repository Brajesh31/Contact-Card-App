#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const required = ['README.md', 'docs/README.md', 'docs/project-structure.md', 'LICENSE'];
const errors = [];

for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) errors.push(`Missing required file: ${file}`);
}
function walk(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['.git', 'node_modules', 'build'].includes(item.name)) continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) walk(full);
    else if (item.isFile() && item.name.endsWith('.md')) checkMarkdown(full);
  }
}
function checkMarkdown(file) {
  const source = fs.readFileSync(file, 'utf8');
  const pattern = /\[[^\]]*\]\(([^)]+)\)/g;
  let match;
  while ((match = pattern.exec(source))) {
    const target = match[1].trim();
    if (/^(https?:|mailto:|#)/i.test(target)) continue;
    const local = target.split('#')[0];
    if (!local) continue;
    const resolved = path.resolve(path.dirname(file), decodeURIComponent(local));
    if (!resolved.startsWith(root + path.sep) && resolved !== root) {
      errors.push(`Path escapes repository: ${path.relative(root, file)} -> ${target}`);
    } else if (!fs.existsSync(resolved)) {
      errors.push(`Broken local link: ${path.relative(root, file)} -> ${target}`);
    }
  }
}
for (const dir of ['docs', '.github']) {
  const absolute = path.join(root, dir);
  if (fs.existsSync(absolute)) walk(absolute);
}
if (fs.existsSync(path.join(root, 'README.md'))) checkMarkdown(path.join(root, 'README.md'));
if (errors.length) {
  console.error(errors.map((error) => `✖ ${error}`).join('\n'));
  process.exit(1);
}
console.log('Documentation structure and local Markdown links are valid.');
