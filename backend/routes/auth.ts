import { Router } from "express";
import { supabaseAuth } from "../supabase";

const auth = supabaseAuth.auth as any;
const router = Router();

// ─── Login ─────────────────────────────────────────────────
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: "Email e senha são obrigatórios" });
            return;
        }

        const { data, error } = await auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            res.status(401).json({ error: "Credenciais inválidas" });
            return;
        }

        const user = data.user;
        const role = user.user_metadata?.role;

        if (role !== "admin") {
            res.status(403).json({ error: "Acesso negado. Usuário não é admin." });
            return;
        }

        res.json({
            token: data.session.access_token,
            refresh_token: data.session.refresh_token,
            user: {
                id: user.id,
                email: user.email,
                nome: user.user_metadata?.nome || "Admin",
                role,
            },
        });
    } catch (err: any) {
        console.error("POST /api/auth/login error:", err.message);
        res.status(500).json({ error: "Erro interno no login" });
    }
});

// ─── Verify / Me ───────────────────────────────────────────
router.get("/me", async (req, res) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        if (!token) {
            res.status(401).json({ error: "Token não fornecido" });
            return;
        }

        const { data, error } = await auth.getUser(token);
        if (error || !data.user) {
            res.status(401).json({ error: "Token inválido" });
            return;
        }

        const user = data.user;
        res.json({
            id: user.id,
            email: user.email,
            nome: user.user_metadata?.nome || "Admin",
            role: user.user_metadata?.role,
        });
    } catch (err: any) {
        console.error("GET /api/auth/me error:", err.message);
        res.status(500).json({ error: "Erro ao verificar token" });
    }
});

// ─── Refresh Token ─────────────────────────────────────────
router.post("/refresh", async (req, res) => {
    try {
        const { refresh_token } = req.body;
        if (!refresh_token) {
            res.status(400).json({ error: "Refresh token necessário" });
            return;
        }

        const { data, error } = await auth.refreshSession({ refresh_token });
        if (error || !data.session) {
            res.status(401).json({ error: "Refresh token inválido" });
            return;
        }

        res.json({
            token: data.session.access_token,
            refresh_token: data.session.refresh_token,
        });
    } catch (err: any) {
        console.error("POST /api/auth/refresh error:", err.message);
        res.status(500).json({ error: "Erro ao renovar token" });
    }
});

export default router;

// ─── Auth Middleware (for protecting admin routes) ──────────
export async function requireAdmin(req: any, res: any, next: any) {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        if (!token) {
            res.status(401).json({ error: "Autenticação necessária" });
            return;
        }

        const { data, error } = await auth.getUser(token);
        if (error || !data.user) {
            res.status(401).json({ error: "Token inválido ou expirado" });
            return;
        }

        if (data.user.user_metadata?.role !== "admin") {
            res.status(403).json({ error: "Acesso negado" });
            return;
        }

        req.adminUser = data.user;
        next();
    } catch (err: any) {
        console.error("Auth middleware error:", err.message);
        res.status(500).json({ error: "Erro na autenticação" });
    }
}
