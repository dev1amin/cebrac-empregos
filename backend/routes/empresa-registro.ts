import { Router } from "express";
import { supabase } from "../supabase";

const router = Router();

// POST /api/empresa-registro — company self-registration (public)
router.post("/", async (req, res) => {
    try {
        const { nome, email, telefone, cidade, estado, website } = req.body;

        if (!nome || !email) {
            return res.status(400).json({ error: "Nome e email são obrigatórios" });
        }

        // Check if company already exists by email
        const { data: existing } = await supabase
            .from("empresas")
            .select("id")
            .eq("email", email)
            .single();
        if (existing) {
            return res.status(409).json({ error: "Empresa já cadastrada com este email" });
        }

        const { data, error } = await supabase
            .from("empresas")
            .insert({ nome, email, telefone, cidade, estado, website, confidencial: 0, status: 1 })
            .select()
            .single();
        if (error) throw error;

        res.status(201).json({ ok: true, empresa_id: data.id });
    } catch (err: any) {
        console.error("POST /api/empresa-registro error:", err.message);
        res.status(500).json({ error: "Erro ao cadastrar empresa" });
    }
});

export default router;
