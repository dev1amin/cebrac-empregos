import { Router } from "express";
import { supabase } from "../supabase";

const router = Router();

// GET /api/stats — contadores para a homepage
router.get("/", async (_req, res) => {
  try {
    const [vagasRes, candidatosRes, empresasRes, encRes] = await Promise.all([
      supabase.from("vagas").select("id", { count: "exact", head: true }).eq("status", 1),
      supabase.from("candidatos").select("id", { count: "exact", head: true }).eq("status", 1),
      supabase.from("empresas").select("id", { count: "exact", head: true }).eq("status", 1),
      supabase.from("encaminhamentos").select("id", { count: "exact", head: true }),
    ]);

    res.json({
      vagas_ativas: vagasRes.count ?? 0,
      curriculos: candidatosRes.count ?? 0,
      empresas: empresasRes.count ?? 0,
      encaminhamentos: encRes.count ?? 0,
    });
  } catch (err: any) {
    console.error("GET /api/stats error:", err.message);
    res.status(500).json({ error: "Erro ao buscar estatísticas" });
  }
});

export default router;
