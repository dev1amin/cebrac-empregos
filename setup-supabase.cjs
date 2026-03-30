/**
 * Script para criar as tabelas no Supabase
 * Tenta executar via Management API, se falhar imprime instruções
 */
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const PROJECT_REF = process.env.supabase_project_id;
const SUPABASE_URL = process.env.supabase_url;
const SERVICE_KEY = process.env.supabase_secret_key;

const sql = fs.readFileSync(path.join(__dirname, 'supabase-migration.sql'), 'utf-8');

async function tryExecuteSQL() {
  console.log('Tentando executar a migração no Supabase...\n');

  // Método 1: tentar endpoint SQL via Management API
  try {
    const res = await fetch(`https://api.supabase.com/v1/projects/${PROJECT_REF}/database/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SERVICE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: sql }),
    });
    if (res.ok) {
      const data = await res.json();
      console.log('✅ Migração executada com sucesso via Management API!');
      console.log(JSON.stringify(data, null, 2));
      return true;
    }
    console.log(`Management API retornou ${res.status}: ${await res.text()}`);
  } catch (e) {
    console.log('Management API não disponível:', e.message);
  }

  // Método 2: verificar se tabelas já existem via PostgREST
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/areas?select=id&limit=1`, {
      headers: {
        'apikey': SERVICE_KEY,
        'Authorization': `Bearer ${SERVICE_KEY}`,
      },
    });
    if (res.ok) {
      console.log('✅ Tabela "areas" já existe no Supabase! As tabelas podem já ter sido criadas.');
      return true;
    }
  } catch (e) {
    // tabela não existe ainda
  }

  return false;
}

async function verifyTables() {
  const tables = ['areas', 'empresas', 'vagas', 'candidatos', 'encaminhamentos', 'noticias'];
  console.log('\nVerificando tabelas...');
  for (const table of tables) {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?select=id&limit=1`, {
        headers: {
          'apikey': SERVICE_KEY,
          'Authorization': `Bearer ${SERVICE_KEY}`,
        },
      });
      const status = res.ok ? '✅' : '❌';
      console.log(`  ${status} ${table} — HTTP ${res.status}`);
    } catch (e) {
      console.log(`  ❌ ${table} — erro: ${e.message}`);
    }
  }
}

async function run() {
  const success = await tryExecuteSQL();

  if (!success) {
    console.log('\n' + '='.repeat(60));
    console.log('⚠️  Não foi possível executar automaticamente.');
    console.log('');
    console.log('Por favor, execute o SQL manualmente:');
    console.log('1. Abra https://supabase.com/dashboard/project/' + PROJECT_REF + '/sql');
    console.log('2. Cole o conteúdo do arquivo supabase-migration.sql');
    console.log('3. Clique em "Run"');
    console.log('4. Depois rode este script novamente para verificar');
    console.log('='.repeat(60));
  }

  await verifyTables();
}

run().catch(e => console.error('ERRO:', e.message));
