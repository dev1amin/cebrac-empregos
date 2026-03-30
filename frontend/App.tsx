import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Vagas from "./pages/Vagas";
import JobDetail from "./pages/JobDetail";
import CandidatarVaga from "./pages/CandidatarVaga";
import ParaEmpresas from "./pages/ParaEmpresas";
import EmpresaRegistro from "./pages/EmpresaRegistro";
import Sobre from "./pages/Sobre";
import FAQ from "./pages/FAQ";
import Noticias from "./pages/Noticias";
import NotFound from "./pages/NotFound";

// Auth
import { AuthProvider } from "./contexts/AuthContext";
import AdminLogin from "./pages/admin/AdminLogin";

// Admin pages
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Empresas from "./pages/admin/Empresas";
import EmpresaForm from "./pages/admin/EmpresaForm";
import VagasAdmin from "./pages/admin/VagasAdmin";
import VagaForm from "./pages/admin/VagaForm";
import Candidatos from "./pages/admin/Candidatos";
import NoticiasAdmin from "./pages/admin/NoticiasAdmin";
import NoticiaForm from "./pages/admin/NoticiaForm";
import AreasAdmin from "./pages/admin/AreasAdmin";
import EncaminhamentosAdmin from "./pages/admin/EncaminhamentosAdmin";
import FAQAdmin from "./pages/admin/FAQAdmin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/vagas" element={<Vagas />} />
            <Route path="/vagas/:id" element={<JobDetail />} />
            <Route path="/vagas/:id/candidatar" element={<CandidatarVaga />} />
            <Route path="/para-empresas" element={<ParaEmpresas />} />
            <Route path="/para-empresas/registro" element={<EmpresaRegistro />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/faq" element={<FAQ />} />

            {/* Admin Login */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Admin Backoffice (protected by AdminLayout) */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="empresas" element={<Empresas />} />
              <Route path="empresas/nova" element={<EmpresaForm />} />
              <Route path="empresas/:id" element={<EmpresaForm />} />
              <Route path="vagas" element={<VagasAdmin />} />
              <Route path="vagas/nova" element={<VagaForm />} />
              <Route path="vagas/:id" element={<VagaForm />} />
              <Route path="candidatos" element={<Candidatos />} />
              <Route path="noticias" element={<NoticiasAdmin />} />
              <Route path="noticias/nova" element={<NoticiaForm />} />
              <Route path="noticias/:id" element={<NoticiaForm />} />
              <Route path="areas" element={<AreasAdmin />} />
              <Route path="faq" element={<FAQAdmin />} />
              <Route path="encaminhamentos" element={<EncaminhamentosAdmin />} />
            </Route>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
