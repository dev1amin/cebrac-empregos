-- ============================================
-- Migração MySQL → Supabase (PostgreSQL)
-- Cebrac Empregos
-- ============================================

-- Tabela: areas
CREATE TABLE IF NOT EXISTS areas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL UNIQUE
);

-- Tabela: empresas
CREATE TABLE IF NOT EXISTS empresas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  telefone VARCHAR(50),
  cidade VARCHAR(100),
  estado CHAR(2),
  website VARCHAR(255),
  logo VARCHAR(255),
  confidencial SMALLINT DEFAULT 1,
  status SMALLINT DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela: vagas
CREATE TABLE IF NOT EXISTS vagas (
  id SERIAL PRIMARY KEY,
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
  empresa_id INT REFERENCES empresas(id) ON DELETE SET NULL,
  status SMALLINT DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela: candidatos
CREATE TABLE IF NOT EXISTS candidatos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  telefone VARCHAR(50),
  cidade VARCHAR(100),
  estado CHAR(2),
  escolaridade VARCHAR(100),
  experiencia TEXT,
  status SMALLINT DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela: encaminhamentos
CREATE TABLE IF NOT EXISTS encaminhamentos (
  id SERIAL PRIMARY KEY,
  candidato_id INT REFERENCES candidatos(id) ON DELETE CASCADE,
  vaga_id INT REFERENCES vagas(id) ON DELETE CASCADE,
  status VARCHAR(30) DEFAULT 'pendente',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela: noticias
CREATE TABLE IF NOT EXISTS noticias (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  slug VARCHAR(255),
  conteudo TEXT,
  imagem VARCHAR(255),
  data_publicacao DATE,
  status SMALLINT DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Row Level Security (RLS)
-- ============================================
ALTER TABLE areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE empresas ENABLE ROW LEVEL SECURITY;
ALTER TABLE vagas ENABLE ROW LEVEL SECURITY;
ALTER TABLE candidatos ENABLE ROW LEVEL SECURITY;
ALTER TABLE encaminhamentos ENABLE ROW LEVEL SECURITY;
ALTER TABLE noticias ENABLE ROW LEVEL SECURITY;

-- Policies: leitura pública para dados ativos
CREATE POLICY "areas_public_read" ON areas FOR SELECT USING (true);
CREATE POLICY "empresas_public_read" ON empresas FOR SELECT USING (status = 1);
CREATE POLICY "vagas_public_read" ON vagas FOR SELECT USING (status = 1);
CREATE POLICY "noticias_public_read" ON noticias FOR SELECT USING (status = 1);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_vagas_status ON vagas(status);
CREATE INDEX IF NOT EXISTS idx_vagas_area ON vagas(area);
CREATE INDEX IF NOT EXISTS idx_vagas_cidade ON vagas(cidade);
CREATE INDEX IF NOT EXISTS idx_vagas_empresa ON vagas(empresa_id);
CREATE INDEX IF NOT EXISTS idx_empresas_status ON empresas(status);
CREATE INDEX IF NOT EXISTS idx_candidatos_status ON candidatos(status);
CREATE INDEX IF NOT EXISTS idx_noticias_status ON noticias(status);
CREATE INDEX IF NOT EXISTS idx_noticias_slug ON noticias(slug);
CREATE INDEX IF NOT EXISTS idx_encaminhamentos_candidato ON encaminhamentos(candidato_id);
CREATE INDEX IF NOT EXISTS idx_encaminhamentos_vaga ON encaminhamentos(vaga_id);
