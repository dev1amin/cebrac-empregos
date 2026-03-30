import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Pencil, Trash2, Building2, ChevronDown, ChevronRight, Briefcase } from "lucide-react";
import { useAdminEmpresas, useDeleteEmpresa } from "@/hooks/use-admin-api";

export default function Empresas() {
    const [page, setPage] = useState(1);
    const [busca, setBusca] = useState("");
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const { data, isLoading } = useAdminEmpresas({ page, limit: 20, busca });
    const deleteMut = useDeleteEmpresa();

    const empresas = data?.data ?? [];
    const total = data?.total ?? 0;
    const totalPages = Math.ceil(total / 20);

    function handleDelete(id: number, nome: string) {
        if (confirm(`Deletar empresa "${nome}"?`)) {
            deleteMut.mutate(id);
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Empresas</h1>
                    <p className="text-sm text-gray-500 mt-1">{total} empresas cadastradas</p>
                </div>
                <Link
                    to="/admin/empresas/nova"
                    className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition"
                >
                    <Plus className="w-4 h-4" />
                    Nova Empresa
                </Link>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Buscar empresas..."
                    value={busca}
                    onChange={(e) => { setBusca(e.target.value); setPage(1); }}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="text-left px-4 py-3 font-medium text-gray-500">Empresa</th>
                                <th className="text-left px-4 py-3 font-medium text-gray-500">Email</th>
                                <th className="text-left px-4 py-3 font-medium text-gray-500">Cidade/UF</th>
                                <th className="text-left px-4 py-3 font-medium text-gray-500">Vagas</th>
                                <th className="text-left px-4 py-3 font-medium text-gray-500">Status</th>
                                <th className="text-right px-4 py-3 font-medium text-gray-500">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {isLoading ? (
                                <>{Array.from({ length: 5 }).map((_, i) => <tr key={i} className="animate-pulse"><td className="px-4 py-3"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-gray-200 rounded-full"></div><div className="h-4 bg-gray-200 rounded w-32"></div></div></td><td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-36"></div></td><td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-24"></div></td><td className="px-4 py-3"><div className="h-5 bg-gray-200 rounded-full w-16"></div></td><td className="px-4 py-3"><div className="h-5 bg-gray-200 rounded-full w-14"></div></td><td className="px-4 py-3"><div className="flex justify-end gap-2"><div className="h-7 w-7 bg-gray-200 rounded"></div><div className="h-7 w-7 bg-gray-200 rounded"></div></div></td></tr>)}</>
                            ) : empresas.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-4 py-12 text-center">
                                        <Building2 className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                                        <p className="text-gray-500">Nenhuma empresa cadastrada</p>
                                        <Link to="/admin/empresas/nova" className="text-blue-500 text-sm hover:underline mt-1 inline-block">
                                            Cadastrar primeira empresa
                                        </Link>
                                    </td>
                                </tr>
                            ) : empresas.map((e: any) => (
                                <>
                                    <tr key={e.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                                                    {e.nome?.charAt(0) ?? "?"}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{e.nome}</p>
                                                    {e.confidencial === 1 && <span className="text-xs text-orange-500">Confidencial</span>}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-gray-600">{e.email ?? "—"}</td>
                                        <td className="px-4 py-3 text-gray-600">
                                            {[e.cidade, e.estado].filter(Boolean).join(", ") || "—"}
                                        </td>
                                        <td className="px-4 py-3">
                                            {(e.vagas_count ?? 0) > 0 ? (
                                                <button
                                                    onClick={() => setExpandedId(expandedId === e.id ? null : e.id)}
                                                    className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
                                                >
                                                    {expandedId === e.id ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                                                    <Briefcase className="w-3 h-3" />
                                                    {e.vagas_count} vaga{e.vagas_count !== 1 ? "s" : ""}
                                                </button>
                                            ) : (
                                                <span className="text-xs text-gray-400">Nenhuma</span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${e.status === 1 ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                                                }`}>
                                                {e.status === 1 ? "Ativa" : "Inativa"}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    to={`/admin/empresas/${e.id}`}
                                                    className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-blue-500 transition"
                                                >
                                                    <Pencil className="w-4 h-4" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(e.id, e.nome)}
                                                    className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-red-500 transition"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {expandedId === e.id && e.vagas && e.vagas.length > 0 && (
                                        <tr key={`${e.id}-vagas`} className="bg-blue-50/50">
                                            <td colSpan={6} className="px-4 py-3">
                                                <div className="pl-11 space-y-1.5">
                                                    <p className="text-xs font-medium text-gray-500 mb-2">Vagas publicadas:</p>
                                                    {e.vagas.map((v: any) => (
                                                        <div key={v.id} className="flex items-center justify-between bg-white rounded-lg px-3 py-2 border border-gray-100">
                                                            <div className="flex items-center gap-2">
                                                                <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                                                                <span className="text-sm text-gray-700">{v.titulo}</span>
                                                                {v.cidade && <span className="text-xs text-gray-400">• {v.cidade}{v.estado ? `/${v.estado}` : ""}</span>}
                                                            </div>
                                                            <span className={`text-xs px-2 py-0.5 rounded-full ${v.status === 1 ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                                                                }`}>
                                                                {v.status === 1 ? "Ativa" : "Inativa"}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
                        <p className="text-sm text-gray-500">Página {page} de {totalPages}</p>
                        <div className="flex gap-2">
                            <button
                                disabled={page <= 1}
                                onClick={() => setPage(page - 1)}
                                className="px-3 py-1.5 text-sm border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50"
                            >
                                Anterior
                            </button>
                            <button
                                disabled={page >= totalPages}
                                onClick={() => setPage(page + 1)}
                                className="px-3 py-1.5 text-sm border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50"
                            >
                                Próxima
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
