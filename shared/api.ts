/**
 * Shared code between client and server
 * Useful to share types between client and server
 */

export interface DemoResponse {
  message: string;
}

export interface Vaga {
  id: number;
  titulo: string;
  descricao: string | null;
  area: string | null;
  cidade: string | null;
  estado: string | null;
  tipo_contrato: string | null;
  disponibilidade_semana: string | null;
  disponibilidade_horario: string | null;
  salario: string | null;
  escolaridade: string | null;
  idade_min: number;
  idade_max: number;
  sexo: string | null;
  habilitacao: string | null;
  beneficios: string | null;
  empresa_id: number | null;
  status: number;
  created_at: string;
  // joined fields
  empresa_nome?: string;
  empresa_confidencial?: number;
  empresa_logo?: string;
  empresa_website?: string;
}

export interface VagasResponse {
  vagas: Vaga[];
  total: number;
  page: number;
  limit: number;
}

export interface Stats {
  vagas_ativas: number;
  curriculos: number;
  empresas: number;
  encaminhamentos: number;
}

export interface Area {
  id: number;
  nome: string;
}

export interface Noticia {
  id: number;
  titulo: string;
  slug: string | null;
  conteudo?: string | null;
  imagem: string | null;
  data_publicacao: string | null;
  status?: number;
  views?: number;
}

export interface FAQItem {
  id: number;
  pergunta: string;
  resposta: string;
  categoria: string;
  ordem: number;
  status?: number;
}
