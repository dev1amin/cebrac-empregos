import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Pencil, Trash2, Newspaper, Eye } from "lucide-react";
import { useAdminNoticias, useDeleteNoticia } from "@/hooks/use-admin-api";

export default function NoticiasAdmin() {
    const [page, setPage] = useState(1);
    const [busca, setBusca] = useState("");
    const { data, isLoading } = useAdminNoticias({ page, limit: 20, busca });
    const deleteMut = useDeleteNoticia();

    const noticias = data?.data ?? [];
    const total = data?.total ?? 0;
    const totalPages = Math.ceil(total / 20);

    function handleDelete(id: number, titulo: string) {
        if (confirm(`Deletar notícia "${titulo}"?`)) {
            deleteMut.mutate(id);
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Notícias</h1>
                    <p className="text-sm text-gray-500 mt-1">{total} notícias cadastradas</p>
                </div>
                <Link
                    to="/admin/noticias/nova"
                    className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition"
                >
                    <Plus className="w-4 h-4" />
                    Nova Notícia
                </Link>
            </div>

            <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Buscar notícias..."
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
                                <th className="text-left px-4 py-3 font-medium text-gray-500">Título</th>
                                <th className="text-left px-4 py-3 font-medium text-gray-500">Slug</th>
                                <th className="text-left px-4 py-3 font-medium text-gray-500">Publicação</th>
                                <th className="text-left px-4 py-3 font-medium text-gray-500">Views</th>
                                <th className="text-left px-4 py-3 font-medium text-gray-500">Status</th>
                                <th className="text-right px-4 py-3 font-medium text-gray-500">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {isLoading ? (
                                <>{Array.from({ length: 5 }).map((_, i) => <tr key={i} className="animate-pulse"><td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-48"></div></td><td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-24"></div></td><td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-20"></div></td><td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-12"></div></td><td className="px-4 py-3"><div className="h-5 bg-gray-200 rounded-full w-16"></div></td><td className="px-4 py-3"><div className="flex justify-end gap-2"><div className="h-7 w-7 bg-gray-200 rounded"></div><div className="h-7 w-7 bg-gray-200 rounded"></div></div></td></tr>)}</>
                            ) : noticias.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-4 py-12 text-center">
                                        <Newspaper className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                                        <p className="text-gray-500">Nenhuma notícia cadastrada</p>
                                        <Link to="/admin/noticias/nova" className="text-blue-500 text-sm hover:underline mt-1 inline-block">
                                            Cadastrar primeira notícia
                                        </Link>
                                    </td>
                                </tr>
                            ) : noticias.map((n: any) => (
                                <tr key={n.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-medium text-gray-900 line-clamp-1">{n.titulo}</td>
                                    <td className="px-4 py-3 text-gray-500 text-xs font-mono">{n.slug ?? "—"}</td>
                                    <td className="px-4 py-3 text-gray-600">
                                        {n.data_publicacao ? new Date(n.data_publicacao).toLocaleDateString("pt-BR") : "—"}
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-1.5 text-gray-500">
                                            <Eye className="w-3.5 h-3.5" />
                                            <span className="text-xs font-medium">{n.views ?? 0}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${n.status === 1 ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                                            }`}>
                                            {n.status === 1 ? "Publicada" : "Rascunho"}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link to={`/admin/noticias/${n.id}`} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-blue-500 transition">
                                                <Pencil className="w-4 h-4" />
                                            </Link>
                                            <button onClick={() => handleDelete(n.id, n.titulo)} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-red-500 transition">
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
