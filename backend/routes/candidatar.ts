import { Router } from "express";
import { supabase } from "../supabase";

const router = Router();

// POST /api/candidatar — apply to a job (public)
router.post("/", async (req, res) => {
    try {
        const { nome, email, telefone, cidade, estado, escolaridade, experiencia, vaga_id } = req.body;

        if (!nome || !email || !vaga_id) {
            return res.status(400).json({ error: "Nome, email e vaga são obrigatórios" });
        }

        // Check if vaga exists
        const { data: vaga } = await supabase.from("vagas").select("id").eq("id", vaga_id).single();
        if (!vaga) return res.status(404).json({ error: "Vaga não encontrada" });

        // Check if already applied (same email + same vaga)
        const { data: existingEnc } = await supabase
            .from("encaminhamentos")
            .select("id, candidatos!inner(email)")
            .eq("vaga_id", vaga_id)
            .eq("candidatos.email", email)
            .limit(1);
        if (existingEnc && existingEnc.length > 0) {
            return res.status(409).json({ error: "Você já se candidatou a esta vaga" });
        }

        // Upsert candidato (find by email or create)
        let { data: candidato } = await supabase
            .from("candidatos")
            .select("id")
            .eq("email", email)
            .single();

        if (!candidato) {
            const { data: newCandidato, error: candErr } = await supabase
                .from("candidatos")
                .insert({ nome, email, telefone, cidade, estado, escolaridade, experiencia, status: 1 })
                .select("id")
                .single();
            if (candErr) throw candErr;
            candidato = newCandidato;
        }

        // Create encaminhamento
        const { data: enc, error: encErr } = await supabase
            .from("encaminhamentos")
            .insert({ candidato_id: candidato!.id, vaga_id, status: "pendente" })
            .select()
            .single();
        if (encErr) throw encErr;

        res.status(201).json({ ok: true, encaminhamento_id: enc.id });
    } catch (err: any) {
        console.error("POST /api/candidatar error:", err.message);
        res.status(500).json({ error: "Erro ao processar candidatura" });
    }
});

export default router;
