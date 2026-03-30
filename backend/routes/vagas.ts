import { Router } from "express";
import { supabase } from "../supabase";

const router = Router();

// GET /api/vagas — lista vagas com filtros opcionais
router.get("/", async (req, res) => {
  try {
    const { area, cidade, estado, tipo_contrato, horario, semana, busca, page = "1", limit = "10" } = req.query;

    let query = supabase
      .from("vagas")
      .select("*, empresas(nome, confidencial, logo)", { count: "exact" })
      .eq("status", 1)
      .order("created_at", { ascending: false });

    if (area) query = query.eq("area", area as string);
    if (cidade) query = query.eq("cidade", cidade as string);
    if (estado) query = query.eq("estado", estado as string);
    if (tipo_contrato) query = query.eq("tipo_contrato", tipo_contrato as string);
    if (horario) query = query.eq("disponibilidade_horario", horario as string);
    if (semana) query = query.eq("disponibilidade_semana", semana as string);
    if (busca) query = query.or(`titulo.ilike.%${busca}%,descricao.ilike.%${busca}%`);

    const pageNum = Math.max(1, Number(page));
    const lim = Number(limit);
    const offset = (pageNum - 1) * lim;
    query = query.range(offset, offset + lim - 1);

    const { data, error, count } = await query;
    if (error) throw error;

    const vagas = (data ?? []).map((v: any) => ({
      ...v,
      empresa_nome: v.empresas?.nome ?? null,
      empresa_confidencial: v.empresas?.confidencial ?? 1,
      empresa_logo: v.empresas?.logo ?? null,
      empresas: undefined,
    }));

    res.json({ vagas, total: count ?? 0, page: pageNum, limit: lim });
  } catch (err: any) {
    console.error("GET /api/vagas error:", err.message);
    res.status(500).json({ error: "Erro ao buscar vagas" });
  }
});

// GET /api/vagas/:id — detalhe de uma vaga
router.get("/:id", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("vagas")
      .select("*, empresas(nome, confidencial, website, logo)")
      .eq("id", req.params.id)
      .single();

    if (error || !data) return res.status(404).json({ error: "Vaga não encontrada" });

    const vaga = {
      ...data,
      empresa_nome: (data as any).empresas?.nome ?? null,
      empresa_confidencial: (data as any).empresas?.confidencial ?? 1,
      empresa_website: (data as any).empresas?.website ?? null,
      empresa_logo: (data as any).empresas?.logo ?? null,
      empresas: undefined,
    };
    res.json(vaga);
  } catch (err: any) {
    console.error("GET /api/vagas/:id error:", err.message);
    res.status(500).json({ error: "Erro ao buscar vaga" });
  }
});

export default router;
