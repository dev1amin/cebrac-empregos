import { Router } from "express";
import { supabase } from "../supabase";

const router = Router();

// GET /api/noticias — lista notícias recentes
router.get("/", async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 3;
    const { data, error } = await supabase
      .from("noticias")
      .select("id, titulo, slug, imagem, data_publicacao, views")
      .eq("status", 1)
      .order("data_publicacao", { ascending: false })
      .limit(limit);
    if (error) throw error;
    res.json(data ?? []);
  } catch (err: any) {
    console.error("GET /api/noticias error:", err.message);
    res.status(500).json({ error: "Erro ao buscar notícias" });
  }
});

// GET /api/noticias/:slug — detalhe da notícia (increments views)
router.get("/:slug", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("noticias")
      .select("*")
      .eq("slug", req.params.slug)
      .eq("status", 1)
      .single();
    if (error || !data) return res.status(404).json({ error: "Notícia não encontrada" });

    // Increment views
    supabase
      .from("noticias")
      .update({ views: (data.views || 0) + 1 })
      .eq("id", data.id)
      .then(() => {});

    res.json(data);
  } catch (err: any) {
    console.error("GET /api/noticias/:slug error:", err.message);
    res.status(500).json({ error: "Erro ao buscar notícia" });
  }
});

export default router;
