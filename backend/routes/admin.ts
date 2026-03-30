import { Router } from "express";
import { supabase } from "../supabase";

const router = Router();

// ─── Dashboard (enhanced) ─────────────────────────────────
router.get("/dashboard", async (_req, res) => {
    try {
        const now = new Date();
        const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
        const oneWeekAgoISO = oneWeekAgo.toISOString();
        const twoWeeksAgoISO = twoWeeksAgo.toISOString();

        const [vagasAtivas, vagasTotal, empresas, candidatos, encaminhamentos, noticias,
            candidatosThisWeek, candidatosLastWeek] = await Promise.all([
                supabase.from("vagas").select("id", { count: "exact", head: true }).eq("status", 1),
                supabase.from("vagas").select("id", { count: "exact", head: true }),
                supabase.from("empresas").select("id", { count: "exact", head: true }),
                supabase.from("candidatos").select("id", { count: "exact", head: true }),
                supabase.from("encaminhamentos").select("id", { count: "exact", head: true }),
                supabase.from("noticias").select("id", { count: "exact", head: true }),
                supabase.from("candidatos").select("id", { count: "exact", head: true }).gte("created_at", oneWeekAgoISO),
                supabase.from("candidatos").select("id", { count: "exact", head: true }).gte("created_at", twoWeeksAgoISO).lt("created_at", oneWeekAgoISO),
            ]);

        // Vagas with most applications (top 5)
        const { data: topVagas } = await supabase
            .from("vagas")
            .select("id, titulo, cidade, estado")
            .eq("status", 1)
            .limit(50);

        // Get application counts per vaga
        let vagasComCandidaturas: any[] = [];
        if (topVagas && topVagas.length > 0) {
            const vagaIds = topVagas.map((v: any) => v.id);
            const { data: encData } = await supabase
                .from("encaminhamentos")
                .select("vaga_id")
                .in("vaga_id", vagaIds);

            const countMap: Record<number, number> = {};
            (encData ?? []).forEach((e: any) => {
                countMap[e.vaga_id] = (countMap[e.vaga_id] || 0) + 1;
            });

            vagasComCandidaturas = topVagas
                .map((v: any) => ({ ...v, candidaturas: countMap[v.id] || 0 }))
                .sort((a: any, b: any) => b.candidaturas - a.candidaturas)
                .slice(0, 5);
        }

        const { data: vagasRecentes } = await supabase
            .from("vagas")
            .select("id, titulo, cidade, created_at")
            .order("created_at", { ascending: false })
            .limit(5);

        const { data: encRecentes } = await supabase
            .from("encaminhamentos")
            .select("id, status, created_at, candidatos(nome), vagas(titulo)")
            .order("created_at", { ascending: false })
            .limit(5);

        const thisWeekCount = candidatosThisWeek.count ?? 0;
        const lastWeekCount = candidatosLastWeek.count ?? 0;
        const weekChange = lastWeekCount > 0
            ? Math.round(((thisWeekCount - lastWeekCount) / lastWeekCount) * 100)
            : (thisWeekCount > 0 ? 100 : 0);

        res.json({
            stats: {
                vagas_ativas: vagasAtivas.count ?? 0,
                vagas_total: vagasTotal.count ?? 0,
                empresas: empresas.count ?? 0,
                candidatos: candidatos.count ?? 0,
                encaminhamentos: encaminhamentos.count ?? 0,
                noticias: noticias.count ?? 0,
                candidatos_novos_semana: thisWeekCount,
                candidatos_variacao_semana: weekChange,
            },
            vagas_recentes: vagasRecentes ?? [],
            encaminhamentos_recentes: encRecentes ?? [],
            vagas_top_candidaturas: vagasComCandidaturas,
        });
    } catch (err: any) {
        console.error("GET /api/admin/dashboard error:", err.message);
        res.status(500).json({ error: "Erro ao buscar dashboard" });
    }
});

// ─── EMPRESAS CRUD ─────────────────────────────────────────
router.get("/empresas", async (req, res) => {
    try {
        const page = Math.max(1, Number(req.query.page) || 1);
        const limit = Number(req.query.limit) || 20;
        const offset = (page - 1) * limit;
        const busca = req.query.busca as string | undefined;

        let query = supabase
            .from("empresas")
            .select("*", { count: "exact" })
            .order("created_at", { ascending: false })
            .range(offset, offset + limit - 1);

        if (busca) query = query.or(`nome.ilike.%${busca}%,email.ilike.%${busca}%`);

        const { data, error, count } = await query;
        if (error) throw error;

        // Fetch vagas for each empresa
        const empresaIds = (data ?? []).map((e: any) => e.id);
        let vagasByEmpresa: Record<number, any[]> = {};
        if (empresaIds.length > 0) {
            const { data: vagas } = await supabase
                .from("vagas")
                .select("id, titulo, cidade, estado, status, empresa_id")
                .in("empresa_id", empresaIds);
            for (const v of vagas ?? []) {
                if (!vagasByEmpresa[v.empresa_id]) vagasByEmpresa[v.empresa_id] = [];
                vagasByEmpresa[v.empresa_id].push(v);
            }
        }

        const enriched = (data ?? []).map((e: any) => ({
            ...e,
            vagas: vagasByEmpresa[e.id] ?? [],
            vagas_count: (vagasByEmpresa[e.id] ?? []).length,
        }));

        res.json({ data: enriched, total: count ?? 0, page, limit });
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao buscar empresas" });
    }
});

router.get("/empresas/:id", async (req, res) => {
    try {
        const { data, error } = await supabase.from("empresas").select("*").eq("id", req.params.id).single();
        if (error || !data) return res.status(404).json({ error: "Empresa não encontrada" });
        res.json(data);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao buscar empresa" });
    }
});

router.post("/empresas", async (req, res) => {
    try {
        const { nome, email, telefone, cidade, estado, website, logo, confidencial, status } = req.body;
        const { data, error } = await supabase
            .from("empresas")
            .insert({ nome, email, telefone, cidade, estado, website, logo, confidencial: confidencial ?? 1, status: status ?? 1 })
            .select()
            .single();
        if (error) throw error;
        res.status(201).json(data);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao criar empresa" });
    }
});

router.put("/empresas/:id", async (req, res) => {
    try {
        const { nome, email, telefone, cidade, estado, website, logo, confidencial, status } = req.body;
        const { data, error } = await supabase
            .from("empresas")
            .update({ nome, email, telefone, cidade, estado, website, logo, confidencial, status })
            .eq("id", req.params.id)
            .select()
            .single();
        if (error) throw error;
        res.json(data);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao atualizar empresa" });
    }
});

router.delete("/empresas/:id", async (req, res) => {
    try {
        const { error } = await supabase.from("empresas").delete().eq("id", req.params.id);
        if (error) throw error;
        res.json({ ok: true });
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao deletar empresa" });
    }
});

// ─── VAGAS CRUD ────────────────────────────────────────────
router.get("/vagas", async (req, res) => {
    try {
        const page = Math.max(1, Number(req.query.page) || 1);
        const limit = Number(req.query.limit) || 20;
        const offset = (page - 1) * limit;
        const busca = req.query.busca as string | undefined;
        const statusFilter = req.query.status as string | undefined;

        let query = supabase
            .from("vagas")
            .select("*, empresas(nome)", { count: "exact" })
            .order("created_at", { ascending: false })
            .range(offset, offset + limit - 1);

        if (busca) query = query.or(`titulo.ilike.%${busca}%,area.ilike.%${busca}%`);
        if (statusFilter !== undefined) query = query.eq("status", Number(statusFilter));

        const { data, error, count } = await query;
        if (error) throw error;

        const vagas = (data ?? []).map((v: any) => ({
            ...v,
            empresa_nome: v.empresas?.nome ?? null,
            empresas: undefined,
        }));

        res.json({ data: vagas, total: count ?? 0, page, limit });
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao buscar vagas" });
    }
});

router.get("/vagas/:id", async (req, res) => {
    try {
        const { data, error } = await supabase.from("vagas").select("*, empresas(nome)").eq("id", req.params.id).single();
        if (error || !data) return res.status(404).json({ error: "Vaga não encontrada" });
        res.json({ ...data, empresa_nome: (data as any).empresas?.nome ?? null, empresas: undefined });
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao buscar vaga" });
    }
});

router.post("/vagas", async (req, res) => {
    try {
        const fields = [
            "titulo", "descricao", "area", "cidade", "estado", "tipo_contrato",
            "disponibilidade_semana", "disponibilidade_horario", "salario", "escolaridade",
            "idade_min", "idade_max", "sexo", "habilitacao", "beneficios", "empresa_id", "status",
        ];
        const row: any = {};
        for (const f of fields) if (req.body[f] !== undefined) row[f] = req.body[f];
        if (!row.status) row.status = 1;

        const { data, error } = await supabase.from("vagas").insert(row).select().single();
        if (error) throw error;
        res.status(201).json(data);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao criar vaga" });
    }
});

router.put("/vagas/:id", async (req, res) => {
    try {
        const fields = [
            "titulo", "descricao", "area", "cidade", "estado", "tipo_contrato",
            "disponibilidade_semana", "disponibilidade_horario", "salario", "escolaridade",
            "idade_min", "idade_max", "sexo", "habilitacao", "beneficios", "empresa_id", "status",
        ];
        const row: any = {};
        for (const f of fields) if (req.body[f] !== undefined) row[f] = req.body[f];

        const { data, error } = await supabase.from("vagas").update(row).eq("id", req.params.id).select().single();
        if (error) throw error;
        res.json(data);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao atualizar vaga" });
    }
});

router.delete("/vagas/:id", async (req, res) => {
    try {
        const { error } = await supabase.from("vagas").delete().eq("id", req.params.id);
        if (error) throw error;
        res.json({ ok: true });
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao deletar vaga" });
    }
});

// ─── CANDIDATOS CRUD ───────────────────────────────────────
router.get("/candidatos", async (req, res) => {
    try {
        const page = Math.max(1, Number(req.query.page) || 1);
        const limit = Number(req.query.limit) || 20;
        const offset = (page - 1) * limit;
        const busca = req.query.busca as string | undefined;

        let query = supabase
            .from("candidatos")
            .select("*", { count: "exact" })
            .order("created_at", { ascending: false })
            .range(offset, offset + limit - 1);

        if (busca) query = query.or(`nome.ilike.%${busca}%,email.ilike.%${busca}%`);

        const { data, error, count } = await query;
        if (error) throw error;

        // Join with encaminhamentos to get applied vaga titles
        const candidatoIds = (data ?? []).map((c: any) => c.id);
        let vagaMap: Record<number, string[]> = {};
        if (candidatoIds.length > 0) {
            const { data: encData } = await supabase
                .from("encaminhamentos")
                .select("candidato_id, vagas(titulo)")
                .in("candidato_id", candidatoIds);
            (encData ?? []).forEach((e: any) => {
                const cid = e.candidato_id;
                const titulo = e.vagas?.titulo;
                if (titulo) {
                    if (!vagaMap[cid]) vagaMap[cid] = [];
                    if (!vagaMap[cid].includes(titulo)) vagaMap[cid].push(titulo);
                }
            });
        }

        const rows = (data ?? []).map((c: any) => ({
            ...c,
            vagas_aplicadas: vagaMap[c.id] ?? [],
        }));

        res.json({ data: rows, total: count ?? 0, page, limit });
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao buscar candidatos" });
    }
});

router.get("/candidatos/:id", async (req, res) => {
    try {
        const { data, error } = await supabase.from("candidatos").select("*").eq("id", req.params.id).single();
        if (error || !data) return res.status(404).json({ error: "Candidato não encontrado" });
        res.json(data);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao buscar candidato" });
    }
});

router.post("/candidatos", async (req, res) => {
    try {
        const { nome, email, telefone, cidade, estado, curriculo_url } = req.body;
        const { data, error } = await supabase
            .from("candidatos")
            .insert({ nome, email, telefone, cidade, estado, curriculo_url })
            .select()
            .single();
        if (error) throw error;
        res.status(201).json(data);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao criar candidato" });
    }
});

router.put("/candidatos/:id", async (req, res) => {
    try {
        const { nome, email, telefone, cidade, estado, escolaridade, experiencia, status } = req.body;
        const { data, error } = await supabase
            .from("candidatos")
            .update({ nome, email, telefone, cidade, estado, escolaridade, experiencia, status })
            .eq("id", req.params.id)
            .select()
            .single();
        if (error) throw error;
        res.json(data);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao atualizar candidato" });
    }
});

router.delete("/candidatos/:id", async (req, res) => {
    try {
        const { error } = await supabase.from("candidatos").delete().eq("id", req.params.id);
        if (error) throw error;
        res.json({ ok: true });
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao deletar candidato" });
    }
});

// ─── NOTÍCIAS CRUD ─────────────────────────────────────────
router.get("/noticias", async (req, res) => {
    try {
        const page = Math.max(1, Number(req.query.page) || 1);
        const limit = Number(req.query.limit) || 20;
        const offset = (page - 1) * limit;
        const busca = req.query.busca as string | undefined;

        let query = supabase
            .from("noticias")
            .select("*", { count: "exact" })
            .order("created_at", { ascending: false })
            .range(offset, offset + limit - 1);

        if (busca) query = query.ilike("titulo", `%${busca}%`);

        const { data, error, count } = await query;
        if (error) throw error;
        res.json({ data: data ?? [], total: count ?? 0, page, limit });
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao buscar notícias" });
    }
});

router.get("/noticias/:id", async (req, res) => {
    try {
        const { data, error } = await supabase.from("noticias").select("*").eq("id", req.params.id).single();
        if (error || !data) return res.status(404).json({ error: "Notícia não encontrada" });
        res.json(data);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao buscar notícia" });
    }
});

router.post("/noticias", async (req, res) => {
    try {
        const { titulo, slug, conteudo, imagem, data_publicacao, status } = req.body;
        const { data, error } = await supabase
            .from("noticias")
            .insert({ titulo, slug, conteudo, imagem, data_publicacao, status: status ?? 1 })
            .select()
            .single();
        if (error) throw error;
        res.status(201).json(data);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao criar notícia" });
    }
});

router.put("/noticias/:id", async (req, res) => {
    try {
        const { titulo, slug, conteudo, imagem, data_publicacao, status } = req.body;
        const { data, error } = await supabase
            .from("noticias")
            .update({ titulo, slug, conteudo, imagem, data_publicacao, status })
            .eq("id", req.params.id)
            .select()
            .single();
        if (error) throw error;
        res.json(data);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao atualizar notícia" });
    }
});

router.delete("/noticias/:id", async (req, res) => {
    try {
        const { error } = await supabase.from("noticias").delete().eq("id", req.params.id);
        if (error) throw error;
        res.json({ ok: true });
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao deletar notícia" });
    }
});

// ─── ÁREAS CRUD ────────────────────────────────────────────
router.get("/areas", async (_req, res) => {
    try {
        const { data, error } = await supabase.from("areas").select("*").order("nome");
        if (error) throw error;

        // Count vagas per area
        const { data: vagasData } = await supabase.from("vagas").select("id, area, titulo, cidade, estado, status");
        const areaVagasMap: Record<string, any[]> = {};
        (vagasData ?? []).forEach((v: any) => {
            if (v.area) {
                if (!areaVagasMap[v.area]) areaVagasMap[v.area] = [];
                areaVagasMap[v.area].push(v);
            }
        });

        const areas = (data ?? []).map((a: any) => ({
            ...a,
            vagas: areaVagasMap[a.nome] ?? [],
            vagas_count: (areaVagasMap[a.nome] ?? []).length,
        }));

        res.json(areas);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao buscar áreas" });
    }
});

router.post("/areas", async (req, res) => {
    try {
        const { nome } = req.body;
        const { data, error } = await supabase.from("areas").insert({ nome }).select().single();
        if (error) throw error;
        res.status(201).json(data);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao criar área" });
    }
});

router.put("/areas/:id", async (req, res) => {
    try {
        const { nome } = req.body;
        const { data, error } = await supabase.from("areas").update({ nome }).eq("id", req.params.id).select().single();
        if (error) throw error;
        res.json(data);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao atualizar área" });
    }
});

router.delete("/areas/:id", async (req, res) => {
    try {
        const { error } = await supabase.from("areas").delete().eq("id", req.params.id);
        if (error) throw error;
        res.json({ ok: true });
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao deletar área" });
    }
});

// ─── ENCAMINHAMENTOS CRUD ──────────────────────────────────
router.get("/encaminhamentos", async (req, res) => {
    try {
        const page = Math.max(1, Number(req.query.page) || 1);
        const limit = Number(req.query.limit) || 20;
        const offset = (page - 1) * limit;

        const { data, error, count } = await supabase
            .from("encaminhamentos")
            .select("*, candidatos(nome, email), vagas(titulo)", { count: "exact" })
            .order("created_at", { ascending: false })
            .range(offset, offset + limit - 1);

        if (error) throw error;

        const rows = (data ?? []).map((e: any) => ({
            ...e,
            candidato_nome: e.candidatos?.nome ?? null,
            candidato_email: e.candidatos?.email ?? null,
            vaga_titulo: e.vagas?.titulo ?? null,
            candidatos: undefined,
            vagas: undefined,
        }));

        res.json({ data: rows, total: count ?? 0, page, limit });
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao buscar encaminhamentos" });
    }
});

router.post("/encaminhamentos", async (req, res) => {
    try {
        const { candidato_id, vaga_id, status } = req.body;
        const { data, error } = await supabase
            .from("encaminhamentos")
            .insert({ candidato_id, vaga_id, status: status ?? "pendente" })
            .select()
            .single();
        if (error) throw error;
        res.status(201).json(data);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao criar encaminhamento" });
    }
});

router.put("/encaminhamentos/:id", async (req, res) => {
    try {
        const { status } = req.body;
        const { data, error } = await supabase
            .from("encaminhamentos")
            .update({ status })
            .eq("id", req.params.id)
            .select()
            .single();
        if (error) throw error;
        res.json(data);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao atualizar encaminhamento" });
    }
});

router.delete("/encaminhamentos/:id", async (req, res) => {
    try {
        const { error } = await supabase.from("encaminhamentos").delete().eq("id", req.params.id);
        if (error) throw error;
        res.json({ ok: true });
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao deletar encaminhamento" });
    }
});

// ─── FAQ CRUD ──────────────────────────────────────────────
router.get("/faq", async (_req, res) => {
    try {
        const { data, error } = await supabase
            .from("faq_items")
            .select("*")
            .order("categoria")
            .order("ordem");
        if (error) throw error;
        res.json(data ?? []);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao buscar FAQ" });
    }
});

router.post("/faq", async (req, res) => {
    try {
        const { pergunta, resposta, categoria, ordem, status } = req.body;
        const { data, error } = await supabase
            .from("faq_items")
            .insert({ pergunta, resposta, categoria: categoria || "Geral", ordem: ordem || 0, status: status ?? 1 })
            .select()
            .single();
        if (error) throw error;
        res.status(201).json(data);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao criar FAQ" });
    }
});

router.put("/faq/:id", async (req, res) => {
    try {
        const { pergunta, resposta, categoria, ordem, status } = req.body;
        const { data, error } = await supabase
            .from("faq_items")
            .update({ pergunta, resposta, categoria, ordem, status })
            .eq("id", req.params.id)
            .select()
            .single();
        if (error) throw error;
        res.json(data);
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao atualizar FAQ" });
    }
});

router.delete("/faq/:id", async (req, res) => {
    try {
        const { error } = await supabase.from("faq_items").delete().eq("id", req.params.id);
        if (error) throw error;
        res.json({ ok: true });
    } catch (err: any) {
        res.status(500).json({ error: "Erro ao deletar FAQ" });
    }
});

export default router;
