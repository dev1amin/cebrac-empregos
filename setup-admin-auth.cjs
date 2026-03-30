/**
 * Cria o usuário admin usando Supabase Auth (nativo).
 * Não precisa de tabela extra — usa o sistema de auth do Supabase direto.
 */
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    process.env.supabase_url,
    process.env.supabase_secret_key
);

async function run() {
    const email = 'admin@cebractalentos.com.br';
    const password = 'cebrac2026';

    console.log('Criando admin no Supabase Auth...\n');

    // Check if user already exists by trying to get users
    const { data: { users } } = await supabase.auth.admin.listUsers();
    const existing = users?.find(u => u.email === email);

    if (existing) {
        console.log('✅ Admin já existe:', existing.email);
        console.log('   ID:', existing.id);
        console.log('   Metadata:', JSON.stringify(existing.user_metadata));

        // Update metadata if needed
        if (!existing.user_metadata?.role) {
            const { data, error } = await supabase.auth.admin.updateUserById(existing.id, {
                user_metadata: { role: 'admin', nome: 'Cebrac Talentos Admin' },
            });
            if (!error) console.log('✅ Metadata atualizada com role=admin');
        }
        return;
    }

    // Create admin user
    const { data, error } = await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true, // auto-confirm email
        user_metadata: {
            role: 'admin',
            nome: 'Cebrac Talentos Admin',
        },
    });

    if (error) {
        console.error('❌ Erro:', error.message);
        return;
    }

    console.log('✅ Admin criado com sucesso!');
    console.log('   Email:', email);
    console.log('   Senha:', password);
    console.log('   ID:', data.user.id);

    // Verify login works
    console.log('\nTestando login...');
    const { data: session, error: loginErr } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (loginErr) {
        console.error('❌ Login falhou:', loginErr.message);
    } else {
        console.log('✅ Login funciona!');
        console.log('   Access token (primeiros 50 chars):', session.session?.access_token?.substring(0, 50) + '...');
    }
}

run().catch(e => console.error('ERRO:', e.message));
