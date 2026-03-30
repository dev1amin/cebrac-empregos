const mysql = require('mysql2/promise');

async function run() {
  const conn = await mysql.createConnection({
    host: 'xmysql.cebracempregos.com.br',
    user: 'cebracempregos3',
    password: 'Z6nbF3,Zg:B%Ej6N76y4',
    database: 'cebracempregos3',
    connectTimeout: 15000,
    multipleStatements: true
  });

  const sql = `
    CREATE TABLE IF NOT EXISTS empresas (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255),
      telefone VARCHAR(50),
      cidade VARCHAR(100),
      estado CHAR(2),
      website VARCHAR(255),
      logo VARCHAR(255),
      confidencial TINYINT(1) DEFAULT 1,
      status TINYINT(1) DEFAULT 1,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE IF NOT EXISTS vagas (
      id INT AUTO_INCREMENT PRIMARY KEY,
      titulo VARCHAR(255) NOT NULL,
      descricao TEXT,
      area VARCHAR(100),
      cidade VARCHAR(100),
      estado CHAR(2),
      tipo_contrato VARCHAR(50),
      disponibilidade_semana VARCHAR(50),
      disponibilidade_horario VARCHAR(50),
      salario VARCHAR(50),
      escolaridade VARCHAR(100),
      idade_min INT DEFAULT 0,
      idade_max INT DEFAULT 0,
      sexo VARCHAR(20) DEFAULT 'Ambos',
      habilitacao VARCHAR(20),
      beneficios TEXT,
      empresa_id INT,
      status TINYINT(1) DEFAULT 1,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (empresa_id) REFERENCES empresas(id) ON DELETE SET NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE IF NOT EXISTS candidatos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255),
      telefone VARCHAR(50),
      cidade VARCHAR(100),
      estado CHAR(2),
      escolaridade VARCHAR(100),
      experiencia TEXT,
      status TINYINT(1) DEFAULT 1,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE IF NOT EXISTS encaminhamentos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      candidato_id INT,
      vaga_id INT,
      status VARCHAR(30) DEFAULT 'pendente',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (candidato_id) REFERENCES candidatos(id) ON DELETE CASCADE,
      FOREIGN KEY (vaga_id) REFERENCES vagas(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE IF NOT EXISTS noticias (
      id INT AUTO_INCREMENT PRIMARY KEY,
      titulo VARCHAR(255) NOT NULL,
      slug VARCHAR(255),
      conteudo TEXT,
      imagem VARCHAR(255),
      data_publicacao DATE,
      status TINYINT(1) DEFAULT 1,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE IF NOT EXISTS areas (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL UNIQUE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `;

  await conn.query(sql);

  const [tables] = await conn.query('SHOW TABLES');
  const names = tables.map(r => Object.values(r)[0]);
  console.log('TABELAS CRIADAS:', JSON.stringify(names));

  for (const name of names) {
    const [cols] = await conn.query('DESCRIBE `' + name + '`');
    console.log('\n--- ' + name + ' ---');
    cols.forEach(c => console.log('  ' + c.Field + ': ' + c.Type + (c.Key === 'PRI' ? ' PK' : '') + (c.Null === 'NO' ? ' NOT NULL' : '')));
  }

  await conn.end();
  console.log('\nDone!');
}
run().catch(e => console.error('ERRO:', e.message));
