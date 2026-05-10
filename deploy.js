// Script de deploy manual para GitHub Pages
// Evita o bug ENAMETOOLONG do gh-pages no Windows

import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const REMOTE_URL = 'https://github.com/kaoanrodrigues/qr-code-de-maquina-de-autoservi-o.git';
const distDir = join(__dirname, 'dist');

function run(cmd, cwd) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit', cwd: cwd || __dirname });
}

// 1. Build do projeto
console.log('\n📦 Fazendo build...');
run('npm run build');

// 2. Verifica se dist foi gerado
if (!existsSync(distDir)) {
  console.error('❌ Pasta dist não encontrada. O build falhou.');
  process.exit(1);
}

// 3. Inicializa git na pasta dist e faz push para gh-pages
console.log('\n🚀 Fazendo deploy para gh-pages...');
process.chdir(distDir);

run('git init', distDir);
run('git add .', distDir);

try {
  run('git commit -m "deploy"', distDir);
} catch {
  console.log('Nada novo para commitar, mas continuando...');
}

try {
  run(`git remote add origin ${REMOTE_URL}`, distDir);
} catch {
  run(`git remote set-url origin ${REMOTE_URL}`, distDir);
}

run('git push -f origin HEAD:gh-pages', distDir);

console.log('\n✅ Deploy concluído! Acesse:');
console.log('https://kaoanrodrigues.github.io/qr-code-de-maquina-de-autoservi-o/');
