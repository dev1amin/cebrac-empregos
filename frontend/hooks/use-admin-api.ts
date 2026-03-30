import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const API = "/api/admin";

function getAuthHeaders(): Record<string, string> {
  const token = localStorage.getItem("admin_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function fetchJSON<T>(url: string): Promise<T> {
  const res = await fetch(url, { headers: getAuthHeaders() });
  if (res.status === 401) {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_refresh_token");
    window.location.href = "/admin/login";
    throw new Error("Sessão expirada");
  }
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function mutateJSON<T>(url: string, method: string, body?: any): Promise<T> {
  const res = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json", ...getAuthHeaders() },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (res.status === 401) {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_refresh_token");
    window.location.href = "/admin/login";
    throw new Error("Sessão expirada");
  }
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
}

// ─── Dashboard ────────────────────────────────────────────
export interface AdminDashboard {
  stats: {
    vagas_ativas: number;
    vagas_total: number;
    empresas: number;
    candidatos: number;
    encaminhamentos: number;
    noticias: number;
  };
  vagas_recentes: any[];
  encaminhamentos_recentes: any[];
  candidatos_novos_semana: number;
  candidatos_variacao_semana: number;
  vagas_top_candidaturas: any[];
}

export function useAdminDashboard() {
  return useQuery<AdminDashboard>({
    queryKey: ["admin", "dashboard"],
    queryFn: () => fetchJSON(`${API}/dashboard`),
    staleTime: 30_000,
  });
}

// ─── Generic paginated list hook ──────────────────────────
interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

function useAdminList<T>(entity: string, params: Record<string, string | number> = {}) {
  const qs = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== "" && v !== null) qs.set(k, String(v));
  }
  const key = qs.toString();
  return useQuery<PaginatedResponse<T>>({
    queryKey: ["admin", entity, key],
    queryFn: () => fetchJSON(`${API}/${entity}?${key}`),
    staleTime: 15_000,
  });
}

function useAdminItem<T>(entity: string, id: string | number | undefined) {
  return useQuery<T>({
    queryKey: ["admin", entity, id],
    queryFn: () => fetchJSON(`${API}/${entity}/${id}`),
    enabled: !!id,
    staleTime: 30_000,
  });
}

// ─── Generic mutation hooks ────────────────────────────────
function useAdminCreate<T>(entity: string) {
  const qc = useQueryClient();
  return useMutation<T, Error, any>({
    mutationFn: (body) => mutateJSON(`${API}/${entity}`, "POST", body),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", entity] }),
  });
}

function useAdminUpdate<T>(entity: string) {
  const qc = useQueryClient();
  return useMutation<T, Error, { id: number | string; data: any }>({
    mutationFn: ({ id, data }) => mutateJSON(`${API}/${entity}/${id}`, "PUT", data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", entity] }),
  });
}

function useAdminDelete(entity: string) {
  const qc = useQueryClient();
  return useMutation<any, Error, number | string>({
    mutationFn: (id) => mutateJSON(`${API}/${entity}/${id}`, "DELETE"),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", entity] }),
  });
}

// ─── Empresas ──────────────────────────────────────────────
export function useAdminEmpresas(params: Record<string, string | number> = {}) {
  return useAdminList<any>("empresas", params);
}
export function useAdminEmpresa(id: string | number | undefined) {
  return useAdminItem<any>("empresas", id);
}
export function useCreateEmpresa() { return useAdminCreate<any>("empresas"); }
export function useUpdateEmpresa() { return useAdminUpdate<any>("empresas"); }
export function useDeleteEmpresa() { return useAdminDelete("empresas"); }

// ─── Vagas ─────────────────────────────────────────────────
export function useAdminVagas(params: Record<string, string | number> = {}) {
  return useAdminList<any>("vagas", params);
}
export function useAdminVaga(id: string | number | undefined) {
  return useAdminItem<any>("vagas", id);
}
export function useCreateVaga() { return useAdminCreate<any>("vagas"); }
export function useUpdateVaga() { return useAdminUpdate<any>("vagas"); }
export function useDeleteVaga() { return useAdminDelete("vagas"); }

// ─── Candidatos ────────────────────────────────────────────
export function useAdminCandidatos(params: Record<string, string | number> = {}) {
  return useAdminList<any>("candidatos", params);
}
export function useAdminCandidato(id: string | number | undefined) {
  return useAdminItem<any>("candidatos", id);
}
export function useUpdateCandidato() { return useAdminUpdate<any>("candidatos"); }
export function useDeleteCandidato() { return useAdminDelete("candidatos"); }

// ─── Notícias ──────────────────────────────────────────────
export function useAdminNoticias(params: Record<string, string | number> = {}) {
  return useAdminList<any>("noticias", params);
}
export function useAdminNoticia(id: string | number | undefined) {
  return useAdminItem<any>("noticias", id);
}
export function useCreateNoticia() { return useAdminCreate<any>("noticias"); }
export function useUpdateNoticia() { return useAdminUpdate<any>("noticias"); }
export function useDeleteNoticia() { return useAdminDelete("noticias"); }

// ─── Áreas ─────────────────────────────────────────────────
export function useAdminAreas() {
  return useQuery<any[]>({
    queryKey: ["admin", "areas"],
    queryFn: () => fetchJSON(`${API}/areas`),
    staleTime: 60_000,
  });
}
export function useCreateArea() { return useAdminCreate<any>("areas"); }
export function useUpdateArea() { return useAdminUpdate<any>("areas"); }
export function useDeleteArea() { return useAdminDelete("areas"); }

// ─── Encaminhamentos ───────────────────────────────────────
export function useAdminEncaminhamentos(params: Record<string, string | number> = {}) {
  return useAdminList<any>("encaminhamentos", params);
}
export function useCreateEncaminhamento() { return useAdminCreate<any>("encaminhamentos"); }
export function useUpdateEncaminhamento() { return useAdminUpdate<any>("encaminhamentos"); }
export function useDeleteEncaminhamento() { return useAdminDelete("encaminhamentos"); }

// ─── FAQ ───────────────────────────────────────────────────
export function useAdminFaq() {
  return useQuery<any[]>({
    queryKey: ["admin", "faq"],
    queryFn: () => fetchJSON(`${API}/faq`),
    staleTime: 30_000,
  });
}
export function useCreateFaq() { return useAdminCreate<any>("faq"); }
export function useUpdateFaq() { return useAdminUpdate<any>("faq"); }
export function useDeleteFaq() { return useAdminDelete("faq"); }
