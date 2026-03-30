/**
 * Script para criar a tabela admin_users e o admin padrão no Supabase automaticamente.
 * Usa a service role key para executar SQL via REST API.
 */
require('dotenv').config();

const SUPABASE_URL = process.env.supabase_url;
const SERVICE_KEY = process.env.supabase_secret_key;

async function supabaseREST(path, opts = {}) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
        ...opts,
        headers: {
            'apikey': SERVICE_KEY,
            'Authorization': `Bearer ${SERVICE_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': opts.prefer || 'return=representation',
            ...(opts.headers || {}),
        },
    });
    const text = await res.text();
    return { ok: res.ok, status: res.status, data: text ? JSON.parse(text) : null };
}

async function run() {
    // 1. Create admin_users table via SQL (using Supabase's rpc or direct REST)
    // Since we can't run raw SQL via REST, we'll create admin_users via the Supabase REST API
    // by first checking if it exists, then inserting

    // Try to read from admin_users
    const check = await supabaseREST('admin_users?select=id&limit=1');

    if (check.status === 404 || (check.data && check.data.message && check.data.message.includes('does not exist'))) {
        console.log('❌ Tabela admin_users NÃO existe.');
        console.log('');
        console.log('Execute este SQL no Supabase Dashboard SQL Editor:');
        console.log('https://supabase.com/dashboard/project/' + process.env.supabase_project_id + '/sql');
        console.log('');
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
    `);
        console.log('Depois rode este script novamente.');
        return;
    }

    console.log('✅ Tabela admin_users existe.');

    // 2. Check if admin user already exists
    const existing = await supabaseREST('admin_users?email=eq.admin@cebractalentos.com.br&select=id,email');
    if (existing.ok && existing.data && existing.data.length > 0) {
        console.log('✅ Admin já existe:', existing.data[0].email);
        return;
    }

    // 3. Create the admin user - password hash for "cebrac2026"
    // bcryptjs hash generated for "cebrac2026"
    const bcrypt = require('bcryptjs');
    const hash = bcrypt.hashSync('cebrac2026', 10);

    const insert = await supabaseREST('admin_users', {
        method: 'POST',
        body: JSON.stringify({
            email: 'admin@cebractalentos.com.br',
            password_hash: hash,
            nome: 'Cebrac Talentos Admin',
            role: 'admin',
        }),
    });

    if (insert.ok) {
        console.log('✅ Admin criado com sucesso!');
        console.log('   Email: admin@cebractalentos.com.br');
        console.log('   Senha: cebrac2026');
    } else {
        console.log('❌ Erro ao criar admin:', JSON.stringify(insert.data));
    }
}

run().catch(e => console.error('ERRO:', e.message));
