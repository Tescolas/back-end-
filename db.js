const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./banco.db');

// Cria a tabela se não existir
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS mensagens (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      texto TEXT NOT NULL,
      criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;
