import { Router } from "express";
import { supabase } from "../supabase";

const router = Router();

// GET /api/areas — lista todas as áreas
router.get("/", async (_req, res) => {
  try {
    const { data, error } = await supabase
      .from("areas")
      .select("*")
      .order("nome");
    if (error) throw error;
    res.json(data ?? []);
  } catch (err: any) {
    console.error("GET /api/areas error:", err.message);
    res.status(500).json({ error: "Erro ao buscar áreas" });
  }
});

export default router;
