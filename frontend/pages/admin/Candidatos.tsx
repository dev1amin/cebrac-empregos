import { useState } from "react";
import { Search, Pencil, Trash2, Users } from "lucide-react";
import { useAdminCandidatos, useDeleteCandidato } from "@/hooks/use-admin-api";
import { Link } from "react-router-dom";

export default function Candidatos() {
  const [page, setPage] = useState(1);
  const [busca, setBusca] = useState("");
  const { data, isLoading } = useAdminCandidatos({ page, limit: 20, busca });
  const deleteMut = useDeleteCandidato();

  const candidatos = data?.data ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / 20);

  function handleDelete(id: number, nome: string) {
    if (confirm(`Deletar candidato "${nome}"?`)) {
      deleteMut.mutate(id);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Candidatos</h1>
        <p className="text-sm text-gray-500 mt-1">{total} candidatos cadastrados</p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar candidatos..."
          value={busca}
          onChange={(e) => { setBusca(e.target.value); setPage(1); }}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
        />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-medium text-gray-500">Nome</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">Email</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">Telefone</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">Cidade/UF</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">Vagas Aplicadas</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">Status</th>
                <th className="text-right px-4 py-3 font-medium text-gray-500">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {isLoading ? (
                <>{Array.from({length:5}).map((_,i)=><tr key={i} className="animate-pulse"><td className="px-4 py-3"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-gray-200 rounded-full"></div><div className="h-4 bg-gray-200 rounded w-32"></div></div></td><td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-36"></div></td><td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-24"></div></td><td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-20"></div></td><td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-28"></div></td><td className="px-4 py-3"><div className="h-5 bg-gray-200 rounded-full w-16"></div></td><td className="px-4 py-3"><div className="flex justify-end gap-2"><div className="h-7 w-7 bg-gray-200 rounded"></div><div className="h-7 w-7 bg-gray-200 rounded"></div></div></td></tr>)}</>
              ) : candidatos.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center">
                    <Users className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">Nenhum candidato cadastrado</p>
                  </td>
                </tr>
              ) : candidatos.map((c: any) => (
                <tr key={c.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{c.nome}</td>
                  <td className="px-4 py-3 text-gray-600">{c.email ?? "—"}</td>
                  <td className="px-4 py-3 text-gray-600">{c.telefone ?? "—"}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {[c.cidade, c.estado].filter(Boolean).join(", ") || "—"}
                  </td>
                  <td className="px-4 py-3">
                    {c.vagas_aplicadas && c.vagas_aplicadas.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {c.vagas_aplicadas.map((v: string, i: number) => (
                          <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 max-w-[160px] truncate" title={v}>{v}</span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-xs text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      c.status === 1 ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                    }`}>
                      {c.status === 1 ? "Ativo" : "Inativo"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => handleDelete(c.id, c.nome)} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-red-500 transition">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
            <p className="text-sm text-gray-500">Página {page} de {totalPages}</p>
            <div className="flex gap-2">
              <button disabled={page <= 1} onClick={() => setPage(page - 1)} className="px-3 py-1.5 text-sm border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50">Anterior</button>
              <button disabled={page >= totalPages} onClick={() => setPage(page + 1)} className="px-3 py-1.5 text-sm border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50">Próxima</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
