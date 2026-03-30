-- Migration V2: FAQ table, news views, curriculo_url, storage bucket
-- Run this in the Supabase Dashboard SQL Editor

-- 1. Create faq_items table
CREATE TABLE IF NOT EXISTS faq_items (
    id SERIAL PRIMARY KEY,
    pergunta TEXT NOT NULL,
    resposta TEXT NOT NULL,
    categoria VARCHAR(100) DEFAULT 'Geral',
    ordem INT DEFAULT 0,
    status SMALLINT DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE faq_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "faq_items_read" ON faq_items FOR
SELECT USING (true);

-- 2. Add views column to noticias
ALTER TABLE noticias ADD COLUMN IF NOT EXISTS views INT DEFAULT 0;

-- 3. Add curriculo_url column to candidatos
ALTER TABLE candidatos ADD COLUMN IF NOT EXISTS curriculo_url TEXT;

-- 4. Create storage bucket for CVs (run via Supabase Storage API or Dashboard)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('curriculos', 'curriculos', true)
-- ON CONFLICT DO NOTHING;

-- 5. Seed initial FAQ items
INSERT INTO
    faq_items (
        pergunta,
        resposta,
        categoria,
        ordem
    )
VALUES (
        'O que é o Cebrac?',
        'O CEBRAC é uma instituição de ensino profissionalizante com mais de 30 anos de experiência, oferecendo cursos técnicos e profissionalizantes reconhecidos pelo mercado.',
        'Cursos e Certificações',
        1
    ),
    (
        'Como funciona a plataforma de empregos?',
        'Nossa plataforma conecta profissionais qualificados com empresas parceiras. Você pode criar seu perfil, buscar vagas e se candidatar diretamente através da plataforma.',
        'Cursos e Certificações',
        2
    ),
    (
        'A plataforma é gratuita?',
        'Sim, o cadastro e acesso às vagas é completamente gratuito para candidatos. Empresas têm planos específicos para publicação de vagas.',
        'Cursos e Certificações',
        3
    ),
    (
        'Em quais regiões vocês atuam?',
        'Estamos presentes em todo o território nacional, com unidades físicas e cursos online que atendem todas as regiões do Brasil.',
        'Cursos e Certificações',
        4
    ),
    (
        'Que cursos o CEBRAC oferece?',
        'Oferecemos uma ampla gama de cursos profissionalizantes nas áreas de tecnologia, administração, design, idiomas e muito mais.',
        'Cursos e Certificações',
        5
    ),
    (
        'Os certificados são reconhecidos pelo mercado?',
        'Sim, todos os nossos certificados são reconhecidos nacionalmente e valorizados pelas principais empresas do mercado de trabalho.',
        'Cursos e Certificações',
        6
    ),
    (
        'Posso fazer cursos online?',
        'Sim, oferecemos diversos cursos na modalidade online e híbrida, permitindo que você estude no seu próprio ritmo.',
        'Cursos e Certificações',
        7
    ),
    (
        'Vocês oferecem suporte para colocação profissional?',
        'Sim, nossa plataforma de empregos conecta alunos formados com empresas parceiras, facilitando sua inserção no mercado de trabalho.',
        'Cursos e Certificações',
        8
    ),
    (
        'Como criar meu perfil de candidato?',
        'Clique em "Criar meu Perfil", preencha seus dados pessoais, experiências profissionais e qualificações. Quanto mais completo seu perfil, maiores as chances de match com vagas.',
        'Para Candidatos',
        1
    ),
    (
        'Como buscar vagas?',
        'Use nossa ferramenta de busca com filtros por área, localização, tipo de contrato e senioridade. Você também pode salvar buscas para receber alertas de novas vagas.',
        'Para Candidatos',
        2
    ),
    (
        'Como me candidatar a uma vaga?',
        'Acesse a vaga de interesse, leia atentamente os requisitos e clique em "Candidatar-se". Seu perfil será enviado automaticamente para o recrutador.',
        'Para Candidatos',
        3
    ),
    (
        'Posso acompanhar o status das minhas candidaturas?',
        'Sim, em seu painel você pode visualizar todas as candidaturas enviadas e acompanhar o status de cada processo seletivo.',
        'Para Candidatos',
        4
    ),
    (
        'Que tipo de suporte vocês oferecem aos candidatos?',
        'Oferecemos suporte via chat, email e telefone para auxiliar em qualquer dúvida sobre cadastro, vagas ou processo seletivo.',
        'Para Candidatos',
        5
    ),
    (
        'Como minha empresa pode usar a plataforma?',
        'Cadastre sua empresa, escolha o plano adequado e comece a publicar vagas. Nossa IA ajuda a filtrar os melhores candidatos para suas necessidades.',
        'Para Empresas',
        1
    ),
    (
        'Que tipo de profissionais posso encontrar?',
        'Nossa base tem profissionais de diversas áreas e níveis de senioridade, todos com formação qualificada pelo CEBRAC ou experiência comprovada.',
        'Para Empresas',
        2
    ),
    (
        'Como funciona o processo de seleção?',
        'Você publica a vaga, recebe candidaturas qualificadas pela nossa IA, analisa perfis e agenda entrevistas diretamente pela plataforma.',
        'Para Empresas',
        3
    ),
    (
        'Vocês oferecem suporte na seleção?',
        'Sim, nossa equipe de RH especializada pode auxiliar em todo o processo seletivo, desde a triagem até a contratação.',
        'Para Empresas',
        4
    ),
    (
        'Qual o prazo médio para preenchimento de vagas?',
        'Em média, nossas vagas são preenchidas em até 72 horas, graças ao nosso sistema de match inteligente e base qualificada de candidatos.',
        'Para Empresas',
        5
    );