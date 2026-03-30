// Migration runner for Supabase PostgreSQL
// Tries multiple connection methods
require('dotenv').config();
const { readFileSync } = require('fs');
const { Client } = require('pg');

const PROJECT_REF = 'aitettnvznujgdtnpmiq';
const SERVICE_KEY = process.env.supabase_secret_key;

const sql = readFileSync('./migration-v2.sql', 'utf8');

async function tryConnect(config, label) {
    const client = new Client(config);
    try {
        await client.connect();
        console.log(`✓ Connected via ${label}`);
        await client.query(sql);
        console.log('✓ Migration executed successfully!');
        await client.end();
        return true;
    } catch (err) {
        console.log(`✗ ${label} failed: ${err.message}`);
        try { await client.end(); } catch { }
        return false;
    }
}

async function main() {
    // Method 1: Direct connection with service role key as password
    const ok1 = await tryConnect({
        host: `db.${PROJECT_REF}.supabase.co`,
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: SERVICE_KEY,
        ssl: { rejectUnauthorized: false },
        connectionTimeoutMillis: 8000,
    }, 'direct (service key)');
    if (ok1) return;

    // Method 2: Pooler transaction mode (us-east-1)
    const ok2 = await tryConnect({
        host: `aws-0-us-east-1.pooler.supabase.com`,
        port: 6543,
        database: 'postgres',
        user: `postgres.${PROJECT_REF}`,
        password: SERVICE_KEY,
        ssl: { rejectUnauthorized: false },
        connectionTimeoutMillis: 8000,
    }, 'pooler us-east-1');
    if (ok2) return;

    // Method 3: Pooler session mode (us-east-1)
    const ok3 = await tryConnect({
        host: `aws-0-us-east-1.pooler.supabase.com`,
        port: 5432,
        database: 'postgres',
        user: `postgres.${PROJECT_REF}`,
        password: SERVICE_KEY,
        ssl: { rejectUnauthorized: false },
        connectionTimeoutMillis: 8000,
    }, 'pooler session us-east-1');
    if (ok3) return;

    // Method 4: Try sa-east-1 (São Paulo region)
    const ok4 = await tryConnect({
        host: `aws-0-sa-east-1.pooler.supabase.com`,
        port: 6543,
        database: 'postgres',
        user: `postgres.${PROJECT_REF}`,
        password: SERVICE_KEY,
        ssl: { rejectUnauthorized: false },
        connectionTimeoutMillis: 8000,
    }, 'pooler sa-east-1');
    if (ok4) return;

    console.log('\n══════════════════════════════════════════');
    console.log('Could not connect automatically.');
    console.log('Please run migration-v2.sql manually in the Supabase Dashboard SQL Editor:');
    console.log('https://supabase.com/dashboard/project/' + PROJECT_REF + '/sql/new');
    console.log('══════════════════════════════════════════');
}

main();
