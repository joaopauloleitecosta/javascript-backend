// server-info.js

// Importa o módulo 'os' (Operating System) do Node.js
const os = require('os');

// 1️⃣ Obtém a data atual formatada
const dataAtual = new Date().toISOString().split('T')[0];

// 2️⃣ Obtém o nome do sistema operacional
const sistemaOperacional = os.type(); // Ex: 'Windows_NT' ou 'Linux'

// 3️⃣ Obtém a versão do Node.js
const versaoNode = process.version;

// Exibe tudo no console
console.log("===== INFORMAÇÕES DO SERVIDOR =====");
console.log(`Data atual: ${dataAtual}`);
console.log(`Sistema operacional: ${sistemaOperacional}`);
console.log(`Versão do Node.js: ${versaoNode}`);
