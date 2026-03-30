/**
 * Popula o banco com dados reais de teste.
 * Faz login, cria áreas, empresas, vagas, candidatos, notícias e encaminhamentos.
 */
require('dotenv').config();

const BASE = 'http://localhost:8080';

async function api(path, method = 'GET', body = null, token = null) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const opts = { method, headers };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`${BASE}${path}`, opts);
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = text; }
  if (!res.ok) {
    console.error(`  ❌ ${method} ${path}: ${data?.error || data?.detail || res.status}`);
    return null;
  }
  return data;
}

async function run() {
  console.log('🔐 Fazendo login...');
  const loginData = await api('/api/auth/login', 'POST', {
    email: 'admin@cebractalentos.com.br',
    password: 'cebrac2026',
  });
  if (!loginData) return;
  const token = loginData.token;
  console.log('✅ Login OK -', loginData.user.nome);

  // ─── Áreas ──────────────────────────────────────────
  console.log('\n📂 Criando áreas...');
  const areaNomes = [
    'Administração', 'Tecnologia da Informação', 'Saúde', 'Marketing',
    'Recursos Humanos', 'Financeiro', 'Logística', 'Atendimento ao Cliente',
  ];
  const areaIds = [];
  for (const nome of areaNomes) {
    const r = await api('/api/admin/areas', 'POST', { nome }, token);
    if (r) { areaIds.push(r.id); console.log(`  ✅ ${nome} (id: ${r.id})`); }
  }

  // ─── Empresas ───────────────────────────────────────
  console.log('\n🏢 Criando empresas...');
  const empresas = [
    { nome: 'Cebrac Franquias', email: 'contato@cebrac.com.br', telefone: '(11) 4000-1234', cidade: 'São Paulo', estado: 'SP', website: 'https://cebrac.com.br', status: 1, confidencial: 0 },
    { nome: 'TechBrasil Soluções', email: 'rh@techbrasil.com.br', telefone: '(21) 3000-5678', cidade: 'Rio de Janeiro', estado: 'RJ', website: 'https://techbrasil.com.br', status: 1, confidencial: 0 },
    { nome: 'Saúde Mais Clínicas', email: 'vagas@saudemais.com.br', telefone: '(31) 3500-9012', cidade: 'Belo Horizonte', estado: 'MG', website: 'https://saudemais.com.br', status: 1, confidencial: 0 },
    { nome: 'Empresa Confidencial', email: 'rh@confidencial.com', telefone: '(41) 3200-3456', cidade: 'Curitiba', estado: 'PR', status: 1, confidencial: 1 },
    { nome: 'Distribuidora Rápida', email: 'rh@distribuidorarapida.com.br', telefone: '(47) 3100-7890', cidade: 'Joinville', estado: 'SC', website: 'https://distribuidorarapida.com.br', status: 1, confidencial: 0 },
  ];
  const empresaIds = [];
  for (const e of empresas) {
    const r = await api('/api/admin/empresas', 'POST', e, token);
    if (r) { empresaIds.push(r.id); console.log(`  ✅ ${e.nome} (id: ${r.id})`); }
  }

  // ─── Vagas ──────────────────────────────────────────
  console.log('\n💼 Criando vagas...');
  const vagas = [
    { titulo: 'Assistente Administrativo', descricao: 'Vaga para assistente administrativo com experiência em rotinas de escritório, controle de documentos, atendimento telefônico e organização de arquivos. Necessário conhecimento em pacote Office.', area: areaNomes[0], empresa_id: empresaIds[0], cidade: 'São Paulo', estado: 'SP', tipo_contrato: 'CLT', disponibilidade_horario: 'Comercial', disponibilidade_semana: 'Segunda a Sexta', salario: 'R$ 2.200,00', escolaridade: 'Ensino Médio Completo', beneficios: 'VT, VR, Plano de Saúde, Plano Odontológico', sexo: 'Indiferente', status: 1 },
    { titulo: 'Desenvolvedor Full Stack Jr', descricao: 'Buscamos desenvolvedor full stack junior com conhecimento em React, Node.js e banco de dados SQL. Oportunidade de crescimento em uma startup em expansão.', area: areaNomes[1], empresa_id: empresaIds[1], cidade: 'Rio de Janeiro', estado: 'RJ', tipo_contrato: 'CLT', disponibilidade_horario: 'Flexível', disponibilidade_semana: 'Segunda a Sexta', salario: 'R$ 4.500,00', escolaridade: 'Superior Cursando', beneficios: 'VT, VA, Plano de Saúde, Gympass, Home Office', sexo: 'Indiferente', status: 1 },
    { titulo: 'Técnico de Enfermagem', descricao: 'Vaga para técnico de enfermagem com COREN ativo. Atuação em clínica de atendimento ambulatorial. Experiência mínima de 1 ano.', area: areaNomes[2], empresa_id: empresaIds[2], cidade: 'Belo Horizonte', estado: 'MG', tipo_contrato: 'CLT', disponibilidade_horario: 'Escala 12x36', disponibilidade_semana: 'Escala', salario: 'R$ 2.800,00', escolaridade: 'Técnico Completo', beneficios: 'VT, VA, Plano de Saúde, Insalubridade', sexo: 'Indiferente', status: 1 },
    { titulo: 'Analista de Marketing Digital', descricao: 'Analista de marketing digital para gerenciar campanhas em Google Ads, Meta Ads e estratégias de SEO/SEM.', area: areaNomes[3], empresa_id: empresaIds[0], cidade: 'São Paulo', estado: 'SP', tipo_contrato: 'CLT', disponibilidade_horario: 'Comercial', disponibilidade_semana: 'Segunda a Sexta', salario: 'R$ 5.000,00', escolaridade: 'Superior Completo', beneficios: 'VT, VR, Plano de Saúde, Bônus por Performance', sexo: 'Indiferente', status: 1 },
    { titulo: 'Auxiliar de RH', descricao: 'Auxiliar de recursos humanos para processos de recrutamento, admissão, folha de pagamento e administração de benefícios.', area: areaNomes[4], empresa_id: empresaIds[3], cidade: 'Curitiba', estado: 'PR', tipo_contrato: 'CLT', disponibilidade_horario: 'Comercial', disponibilidade_semana: 'Segunda a Sexta', salario: 'R$ 2.000,00', escolaridade: 'Superior Cursando', beneficios: 'VT, VR, Plano Odontológico', sexo: 'Indiferente', status: 1 },
    { titulo: 'Motorista de Entregas', descricao: 'Motorista para entregas na região de Joinville e cidades vizinhas. Necessário CNH B.', area: areaNomes[6], empresa_id: empresaIds[4], cidade: 'Joinville', estado: 'SC', tipo_contrato: 'CLT', disponibilidade_horario: 'Comercial', disponibilidade_semana: 'Segunda a Sábado', salario: 'R$ 2.500,00', escolaridade: 'Ensino Médio Completo', habilitacao: 'B', beneficios: 'VT, VR, Plano de Saúde', sexo: 'Masculino', status: 1 },
    { titulo: 'Estagiário em Finanças', descricao: 'Estágio na área financeira com acompanhamento de contas a pagar/receber, conciliação bancária e apoio em relatórios.', area: areaNomes[5], empresa_id: empresaIds[1], cidade: 'Rio de Janeiro', estado: 'RJ', tipo_contrato: 'Estágio', disponibilidade_horario: '6h/dia', disponibilidade_semana: 'Segunda a Sexta', salario: 'R$ 1.500,00', escolaridade: 'Superior Cursando', beneficios: 'VT, VR, Seguro de Vida', sexo: 'Indiferente', status: 1 },
    { titulo: 'Atendente de SAC', descricao: 'Atendente para central de atendimento ao cliente via telefone, chat e e-mail.', area: areaNomes[7], empresa_id: empresaIds[0], cidade: 'São Paulo', estado: 'SP', tipo_contrato: 'CLT', disponibilidade_horario: 'Escala', disponibilidade_semana: '6x1', salario: 'R$ 1.800,00', escolaridade: 'Ensino Médio Completo', beneficios: 'VT, VR, Plano de Saúde', sexo: 'Indiferente', status: 1 },
    { titulo: 'Analista de Dados', descricao: 'Analista de dados para criação de dashboards, ETL e análise de métricas de negócio com Python, SQL e Power BI.', area: areaNomes[1], empresa_id: empresaIds[1], cidade: 'Remoto', estado: 'SP', tipo_contrato: 'PJ', disponibilidade_horario: 'Flexível', disponibilidade_semana: 'Segunda a Sexta', salario: 'R$ 8.000,00', escolaridade: 'Superior Completo', beneficios: 'Home Office integral, Gympass, Cursos', sexo: 'Indiferente', status: 1 },
    { titulo: 'Recepcionista', descricao: 'Vaga para recepcionista em clínica médica. Atendimento a pacientes e organização de agenda.', area: areaNomes[0], empresa_id: empresaIds[2], cidade: 'Belo Horizonte', estado: 'MG', tipo_contrato: 'CLT', disponibilidade_horario: 'Comercial', disponibilidade_semana: 'Segunda a Sexta', salario: 'R$ 1.700,00', escolaridade: 'Ensino Médio Completo', beneficios: 'VT, VA, Plano de Saúde', sexo: 'Indiferente', status: 1 },
  ];
  const vagaIds = [];
  for (const v of vagas) {
    const r = await api('/api/admin/vagas', 'POST', v, token);
    if (r) { vagaIds.push(r.id); console.log(`  ✅ ${v.titulo} (id: ${r.id})`); }
  }

  // ─── Candidatos ─────────────────────────────────────
  console.log('\n👤 Criando candidatos...');
  const candidatos = [
    { nome: 'João Silva Santos', email: 'joao.silva@gmail.com', telefone: '(11) 98765-4321', cidade: 'São Paulo', estado: 'SP' },
    { nome: 'Maria Oliveira Costa', email: 'maria.oliveira@hotmail.com', telefone: '(21) 97654-3210', cidade: 'Rio de Janeiro', estado: 'RJ' },
    { nome: 'Pedro Almeida', email: 'pedro.almeida@outlook.com', telefone: '(31) 96543-2109', cidade: 'Belo Horizonte', estado: 'MG' },
    { nome: 'Ana Beatriz Ferreira', email: 'anabeatriz@gmail.com', telefone: '(41) 95432-1098', cidade: 'Curitiba', estado: 'PR' },
    { nome: 'Lucas Mendes Rocha', email: 'lucas.mendes@yahoo.com.br', telefone: '(47) 94321-0987', cidade: 'Joinville', estado: 'SC' },
    { nome: 'Camila Rodrigues', email: 'camila.rod@gmail.com', telefone: '(11) 93210-9876', cidade: 'Campinas', estado: 'SP' },
  ];
  const candidatoIds = [];
  for (const c of candidatos) {
    const r = await api('/api/admin/candidatos', 'POST', c, token);
    if (r) { candidatoIds.push(r.id); console.log(`  ✅ ${c.nome} (id: ${r.id})`); }
  }

  // ─── Notícias ───────────────────────────────────────
  console.log('\n📰 Criando notícias...');
  const noticias = [
    { titulo: 'Mercado de Trabalho em 2025: Tendências e Oportunidades', slug: 'mercado-trabalho-2025-tendencias', conteudo: 'O mercado de trabalho brasileiro apresenta sinais de recuperação em 2025, com destaque para os setores de tecnologia, saúde e logística.', imagem: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800', data_publicacao: '2025-01-15', status: 1 },
    { titulo: 'Dicas para se Destacar em Entrevistas de Emprego', slug: 'dicas-entrevistas-emprego', conteudo: 'Preparar-se para uma entrevista de emprego vai muito além de revisar o currículo. É essencial pesquisar sobre a empresa e praticar respostas.', imagem: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800', data_publicacao: '2025-02-10', status: 1 },
    { titulo: 'Programa Jovem Aprendiz: Como Funciona', slug: 'programa-jovem-aprendiz-como-funciona', conteudo: 'O programa Jovem Aprendiz é uma excelente porta de entrada para o mercado de trabalho para jovens de 14 a 24 anos.', imagem: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800', data_publicacao: '2025-03-05', status: 1 },
    { titulo: 'As 10 Profissões Mais Procuradas em Santa Catarina', slug: 'profissoes-mais-procuradas-santa-catarina', conteudo: 'Santa Catarina lidera o ranking de empregabilidade no Sul do Brasil com as menores taxas de desemprego do país.', imagem: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800', data_publicacao: '2025-04-20', status: 1 },
  ];
  const noticiaIds = [];
  for (const n of noticias) {
    const r = await api('/api/admin/noticias', 'POST', n, token);
    if (r) { noticiaIds.push(r.id); console.log(`  ✅ ${n.titulo.substring(0, 50)}... (id: ${r.id})`); }
  }

  // ─── Encaminhamentos ────────────────────────────────
  console.log('\n📫 Criando encaminhamentos...');
  if (candidatoIds.length >= 4 && vagaIds.length >= 4) {
    const encs = [
      { candidato_id: candidatoIds[0], vaga_id: vagaIds[0], status: 'aprovado' },
      { candidato_id: candidatoIds[1], vaga_id: vagaIds[1], status: 'entrevista' },
      { candidato_id: candidatoIds[2], vaga_id: vagaIds[2], status: 'pendente' },
      { candidato_id: candidatoIds[3], vaga_id: vagaIds[4], status: 'pendente' },
      { candidato_id: candidatoIds[4], vaga_id: vagaIds[5], status: 'aprovado' },
      { candidato_id: candidatoIds[5], vaga_id: vagaIds[1], status: 'rejeitado' },
      { candidato_id: candidatoIds[0], vaga_id: vagaIds[3], status: 'entrevista' },
      { candidato_id: candidatoIds[1], vaga_id: vagaIds[6], status: 'pendente' },
    ];
    for (const e of encs) {
      const r = await api('/api/admin/encaminhamentos', 'POST', e, token);
      if (r) console.log(`  ✅ Candidato→Vaga (${e.status})`);
    }
  } else {
    console.log('  ⚠️ Não há candidatos/vagas suficientes para encaminhamentos');
  }

  // ─── Verificação ────────────────────────────────────
  console.log('\n\n═══════════════════════════════════════════');
  console.log('      VERIFICAÇÃO DOS ENDPOINTS PÚBLICOS');
  console.log('═══════════════════════════════════════════\n');

  const stats = await api('/api/stats');
  console.log('📊 Stats:', JSON.stringify(stats, null, 2));

  const areas = await api('/api/areas');
  console.log(`\n📂 Áreas: ${areas?.length || 0} encontradas`);

  const vagasP = await api('/api/vagas');
  console.log(`💼 Vagas: ${vagasP?.data?.length || vagasP?.total || 0} encontradas`);

  const notP = await api('/api/noticias');
  console.log(`📰 Notícias: ${notP?.data?.length || 0} encontradas`);

  const dash = await api('/api/admin/dashboard', 'GET', null, token);
  console.log('\n📋 Dashboard Admin:', JSON.stringify(dash?.stats, null, 2));

  console.log('\n✅ ══════════════════════════════════════════');
  console.log('   BANCO POPULADO COM SUCESSO!');
  console.log(`   🏢 ${empresaIds.length} empresas`);
  console.log(`   💼 ${vagaIds.length} vagas`);
  console.log(`   👤 ${candidatoIds.length} candidatos`);
  console.log(`   📰 ${noticiaIds.length} notícias`);
  console.log(`   📂 ${areaIds.length} áreas`);
  console.log('   ══════════════════════════════════════════\n');
}

run().catch(console.error);
