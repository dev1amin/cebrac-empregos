import { useQuery, useMutation } from "@tanstack/react-query";
import type { VagasResponse, Vaga, Stats, Area, Noticia, FAQItem } from "@shared/api";

const API_BASE = "/api";

async function fetchJSON<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export function useStats() {
  return useQuery<Stats>({
    queryKey: ["stats"],
    queryFn: () => fetchJSON<Stats>(`${API_BASE}/stats`),
    staleTime: 60_000,
  });
}

export function useVagas(params: Record<string, string | number> = {}) {
  const qs = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== "" && v !== null) qs.set(k, String(v));
  }
  const key = qs.toString();
  return useQuery<VagasResponse>({
    queryKey: ["vagas", key],
    queryFn: () => fetchJSON<VagasResponse>(`${API_BASE}/vagas?${key}`),
    staleTime: 30_000,
  });
}

export function useVaga(id: string | undefined) {
  return useQuery<Vaga>({
    queryKey: ["vaga", id],
    queryFn: () => fetchJSON<Vaga>(`${API_BASE}/vagas/${id}`),
    enabled: !!id,
    staleTime: 60_000,
  });
}

export function useAreas() {
  return useQuery<Area[]>({
    queryKey: ["areas"],
    queryFn: () => fetchJSON<Area[]>(`${API_BASE}/areas`),
    staleTime: 300_000,
  });
}

export function useNoticias(limit = 3) {
  return useQuery<Noticia[]>({
    queryKey: ["noticias", limit],
    queryFn: () => fetchJSON<Noticia[]>(`${API_BASE}/noticias?limit=${limit}`),
    staleTime: 60_000,
  });
}

export function useFaq() {
  return useQuery<FAQItem[]>({
    queryKey: ["faq"],
    queryFn: () => fetchJSON<FAQItem[]>(`${API_BASE}/faq`),
    staleTime: 300_000,
  });
}

export function useApplyToJob() {
  return useMutation<any, Error, any>({
    mutationFn: async (body) => {
      const res = await fetch(`${API_BASE}/candidatar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
      return data;
    },
  });
}

export function useRegisterCompany() {
  return useMutation<any, Error, any>({
    mutationFn: async (body) => {
      const res = await fetch(`${API_BASE}/empresa-registro`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
      return data;
    },
  });
}
