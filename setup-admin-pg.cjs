/**
 * Cria a tabela admin_users e o admin padrão conectando diretamente ao PostgreSQL do Supabase.
 * Também pode rodar qualquer SQL de migração automaticamente.
 */
const { Client } = require('pg');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const PROJECT_REF = process.env.supabase_project_id;

// Supabase exposes the PostgreSQL database at db.<project-ref>.supabase.co
// Default password is in the Supabase dashboard. We'll use the pooler (port 6543) via transaction mode
// or direct connection (port 5432)
const DB_URL = `postgresql://postgres.${PROJECT_REF}:${process.env.supabase_db_password || ''}@aws-0-sa-east-1.pooler.supabase.com:6543/postgres`;

async function run() {
    // If no DB password is set, try using the service role key approach via SQL API
    if (!process.env.supabase_db_password) {
        console.log('⚠️  supabase_db_password não está no .env');
        console.log('');
        console.log('Adicione ao .env:');
        console.log('supabase_db_password=SUA_SENHA_DO_BANCO');
        console.log('');
        console.log('Você encontra a senha em:');
        console.log(`https://supabase.com/dashboard/project/${PROJECT_REF}/settings/database`);
        console.log('');
        console.log('OU execute este SQL no Dashboard:');
        console.log(`https://supabase.com/dashboard/project/${PROJECT_REF}/sql`);
        console.log('');
        printSQL();
        return;
    }

    const client = new Client({ connectionString: DB_URL });

    try {
        console.log('Conectando ao PostgreSQL do Supabase...');
        await client.connect();
        console.log('✅ Conectado!');

        // Create admin_users table
        await client.query(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        nome VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'admin',
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);
        console.log('✅ Tabela admin_users criada');

        // Enable RLS
        await client.query('ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;');
        console.log('✅ RLS ativado');

        // Check if admin exists
        const existing = await client.query(
            "SELECT id, email FROM admin_users WHERE email = 'admin@cebractalentos.com.br'"
        );

        if (existing.rows.length > 0) {
            console.log('✅ Admin já existe:', existing.rows[0].email);
        } else {
            const hash = bcrypt.hashSync('cebrac2026', 10);
            await client.query(
                "INSERT INTO admin_users (email, password_hash, nome, role) VALUES ($1, $2, $3, $4)",
                ['admin@cebractalentos.com.br', hash, 'Cebrac Talentos Admin', 'admin']
            );
            console.log('✅ Admin criado!');
            console.log('   Email: admin@cebractalentos.com.br');
            console.log('   Senha: cebrac2026');
        }

        // Verify
        const tables = await client.query(`
      SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename;
    `);
        console.log('\nTabelas no banco:');
        tables.rows.forEach(r => console.log('  - ' + r.tablename));

    } catch (err) {
        console.error('ERRO:', err.message);
        if (err.message.includes('password')) {
            console.log('\n⚠️  Senha do banco incorreta. Verifique supabase_db_password no .env');
        }
    } finally {
        await client.end();
    }
}

function printSQL() {
    console.log(`
CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  nome VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Inserir admin (senha: cebrac2026, hash gerado com bcryptjs)
INSERT INTO admin_users (email, password_hash, nome, role)
VALUES (
  'admin@cebractalentos.com.br',
  '$2a$10$placeholder_run_setup_admin_script',
  'Cebrac Talentos Admin',
  'admin'
) ON CONFLICT (email) DO NOTHING;
  `);
}

run().catch(e => console.error('ERRO FATAL:', e.message));
