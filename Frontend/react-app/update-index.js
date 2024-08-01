// update-index.js
const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, 'generated/src/models');
const indexPath = path.join(modelsDir, 'index.ts');

const files = fs.readdirSync(modelsDir)
  .filter(file => file.endsWith('.ts') && file !== 'index.ts')
  .map(file => `export * from './${file.replace('.ts', '')}';`)
  .join('\n');

fs.writeFileSync(indexPath, files, 'utf-8');
console.log('Updated index.ts with all model exports');
