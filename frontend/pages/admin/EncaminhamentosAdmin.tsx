import { useState } from "react";
import { Send, Trash2 } from "lucide-react";
import { useAdminEncaminhamentos, useUpdateEncaminhamento, useDeleteEncaminhamento } from "@/hooks/use-admin-api";

const STATUS_OPTIONS = [
  { value: "pendente", label: "Pendente", color: "bg-yellow-100 text-yellow-700" },
  { value: "aprovado", label: "Aprovado", color: "bg-green-100 text-green-700" },
  { value: "rejeitado", label: "Rejeitado", color: "bg-red-100 text-red-700" },
  { value: "entrevista", label: "Entrevista", color: "bg-blue-100 text-blue-700" },
];

export default function EncaminhamentosAdmin() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useAdminEncaminhamentos({ page, limit: 20 });
  const updateMut = useUpdateEncaminhamento();
  const deleteMut = useDeleteEncaminhamento();

  const encaminhamentos = data?.data ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / 20);

  function handleStatusChange(id: number, status: string) {
    updateMut.mutate({ id, data: { status } });
  }

  function handleDelete(id: number) {
    if (confirm("Deletar este encaminhamento?")) {
      deleteMut.mutate(id);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Encaminhamentos</h1>
        <p className="text-sm text-gray-500 mt-1">{total} encaminhamentos registrados</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-medium text-gray-500">Candidato</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">Vaga</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">Status</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">Data</th>
                <th className="text-right px-4 py-3 font-medium text-gray-500">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {isLoading ? (
                <>{Array.from({length:5}).map((_,i)=><tr key={i} className="animate-pulse"><td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-32"></div></td><td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-40"></div></td><td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-24"></div></td><td className="px-4 py-3"><div className="h-5 bg-gray-200 rounded-full w-16"></div></td><td className="px-4 py-3"><div className="h-3 bg-gray-200 rounded w-20"></div></td></tr>)}</>
              ) : encaminhamentos.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center">
                    <Send className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">Nenhum encaminhamento registrado</p>
                  </td>
                </tr>
              ) : encaminhamentos.map((e: any) => (
                <tr key={e.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-medium text-gray-900">{e.candidato_nome ?? `#${e.candidato_id}`}</p>
                    {e.candidato_email && <p className="text-xs text-gray-500">{e.candidato_email}</p>}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{e.vaga_titulo ?? `#${e.vaga_id}`}</td>
                  <td className="px-4 py-3">
                    <select
                      value={e.status}
                      onChange={(ev) => handleStatusChange(e.id, ev.target.value)}
                      className="text-xs px-2 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    >
                      {STATUS_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-xs">
                    {new Date(e.created_at).toLocaleDateString("pt-BR")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end">
                      <button onClick={() => handleDelete(e.id)} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-red-500 transition">
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
