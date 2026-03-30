import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import vagasRouter from "./routes/vagas";
import statsRouter from "./routes/stats";
import areasRouter from "./routes/areas";
import noticiasRouter from "./routes/noticias";
import faqRouter from "./routes/faq";
import candidatarRouter from "./routes/candidatar";
import empresaRegistroRouter from "./routes/empresa-registro";
import adminRouter from "./routes/admin";
import authRouter, { requireAdmin } from "./routes/auth";

export function createServer() {
  const app = express();

  // Middleware
  const allowedOrigins = process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(",")
    : ["http://localhost:8080"];
  app.use(
    cors({
      origin: allowedOrigins,
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.use("/api/vagas", vagasRouter);
  app.use("/api/stats", statsRouter);
  app.use("/api/areas", areasRouter);
  app.use("/api/noticias", noticiasRouter);
  app.use("/api/faq", faqRouter);
  app.use("/api/candidatar", candidatarRouter);
  app.use("/api/empresa-registro", empresaRegistroRouter);

  // Auth routes (public)
  app.use("/api/auth", authRouter);

  // Admin routes (protected)
  app.use("/api/admin", requireAdmin, adminRouter);

  return app;
}
