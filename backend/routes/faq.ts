import { Router } from "express";
import { supabase } from "../supabase";

const router = Router();

// GET /api/faq — public FAQ items
router.get("/", async (_req, res) => {
    try {
        const { data, error } = await supabase
            .from("faq_items")
            .select("id, pergunta, resposta, categoria, ordem")
            .eq("status", 1)
            .order("categoria")
            .order("ordem");
        if (error) throw error;
        res.json(data ?? []);
    } catch (err: any) {
        console.error("GET /api/faq error:", err.message);
        res.status(500).json({ error: "Erro ao buscar FAQ" });
    }
});

export default router;
