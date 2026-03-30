import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Pencil, Trash2, Briefcase } from "lucide-react";
import { useAdminVagas, useDeleteVaga } from "@/hooks/use-admin-api";

export default function VagasAdmin() {
    const [page, setPage] = useState(1);
    const [busca, setBusca] = useState("");
    const { data, isLoading } = useAdminVagas({ page, limit: 20, busca });
    const deleteMut = useDeleteVaga();

    const vagas = data?.data ?? [];
    const total = data?.total ?? 0;
    const totalPages = Math.ceil(total / 20);

    function handleDelete(id: number, titulo: string) {
        if (confirm(`Deletar vaga "${titulo}"?`)) {
            deleteMut.mutate(id);
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Vagas</h1>
                    <p className="text-sm text-gray-500 mt-1">{total} vagas cadastradas</p>
                </div>
                <Link
                    to="/admin/vagas/nova"
                    className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition"
                >
                    <Plus className="w-4 h-4" />
                    Nova Vaga
                </Link>
            </div>

            <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Buscar vagas..."
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
                                <th className="text-left px-4 py-3 font-medium text-gray-500">Vaga</th>
                                <th className="text-left px-4 py-3 font-medium text-gray-500">Empresa</th>
                                <th className="text-left px-4 py-3 font-medium text-gray-500">Cidade/UF</th>
                                <th className="text-left px-4 py-3 font-medium text-gray-500">Área</th>
                                <th className="text-left px-4 py-3 font-medium text-gray-500">Status</th>
                                <th className="text-right px-4 py-3 font-medium text-gray-500">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {isLoading ? (
                                <>{Array.from({ length: 5 }).map((_, i) => <tr key={i} className="animate-pulse"><td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-48"></div></td><td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-24"></div></td><td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-20"></div></td><td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-16"></div></td><td className="px-4 py-3"><div className="h-5 bg-gray-200 rounded-full w-14"></div></td><td className="px-4 py-3"><div className="flex justify-end gap-2"><div className="h-7 w-7 bg-gray-200 rounded"></div><div className="h-7 w-7 bg-gray-200 rounded"></div></div></td></tr>)}</>
                            ) : vagas.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-4 py-12 text-center">
                                        <Briefcase className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                                        <p className="text-gray-500">Nenhuma vaga cadastrada</p>
                                        <Link to="/admin/vagas/nova" className="text-blue-500 text-sm hover:underline mt-1 inline-block">
                                            Cadastrar primeira vaga
                                        </Link>
                                    </td>
                                </tr>
                            ) : vagas.map((v: any) => (
                                <tr key={v.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3">
                                        <p className="font-medium text-gray-900 line-clamp-1">{v.titulo}</p>
                                        <p className="text-xs text-gray-500">{v.tipo_contrato} · {v.salario ?? "A combinar"}</p>
                                    </td>
                                    <td className="px-4 py-3 text-gray-600">{v.empresa_nome ?? "—"}</td>
                                    <td className="px-4 py-3 text-gray-600">
                                        {[v.cidade, v.estado].filter(Boolean).join(", ") || "—"}
                                    </td>
                                    <td className="px-4 py-3">
                                        {v.area && <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600">{v.area}</span>}
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${v.status === 1 ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                                            }`}>
                                            {v.status === 1 ? "Ativa" : "Inativa"}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link to={`/admin/vagas/${v.id}`} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-blue-500 transition">
                                                <Pencil className="w-4 h-4" />
                                            </Link>
                                            <button onClick={() => handleDelete(v.id, v.titulo)} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-red-500 transition">
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
