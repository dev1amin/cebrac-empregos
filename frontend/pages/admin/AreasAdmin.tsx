import { useState } from "react";
import { Plus, Pencil, Trash2, Tag, ChevronDown, ChevronRight, Briefcase } from "lucide-react";
import { useAdminAreas, useCreateArea, useUpdateArea, useDeleteArea } from "@/hooks/use-admin-api";

export default function AreasAdmin() {
    const { data: areas, isLoading } = useAdminAreas();
    const createMut = useCreateArea();
    const updateMut = useUpdateArea();
    const deleteMut = useDeleteArea();

    const [novaArea, setNovaArea] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingNome, setEditingNome] = useState("");
    const [expandedId, setExpandedId] = useState<number | null>(null);

    function handleCreate(e: React.FormEvent) {
        e.preventDefault();
        if (!novaArea.trim()) return;
        createMut.mutate({ nome: novaArea.trim() }, {
            onSuccess: () => setNovaArea(""),
        });
    }

    function handleUpdate(id: number) {
        if (!editingNome.trim()) return;
        updateMut.mutate({ id, data: { nome: editingNome.trim() } }, {
            onSuccess: () => setEditingId(null),
        });
    }

    function handleDelete(id: number, nome: string) {
        if (confirm(`Deletar área "${nome}"?`)) {
            deleteMut.mutate(id);
        }
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Áreas</h1>
                <p className="text-sm text-gray-500 mt-1">{(areas ?? []).length} áreas cadastradas</p>
            </div>

            {/* Create form */}
            <form onSubmit={handleCreate} className="flex gap-3 max-w-md">
                <input
                    type="text"
                    placeholder="Nome da área..."
                    value={novaArea}
                    onChange={(e) => setNovaArea(e.target.value)}
                    className="flex-1 px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
                <button
                    type="submit"
                    disabled={createMut.isPending}
                    className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
                >
                    <Plus className="w-4 h-4" />
                    Adicionar
                </button>
            </form>

            {/* List */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="divide-y divide-gray-100">
                    {isLoading ? (
                        <div className="animate-pulse space-y-0">{Array.from({ length: 5 }).map((_, i) => <div key={i} className="px-4 py-4 flex items-center justify-between border-b border-gray-100"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-gray-200 rounded-lg"></div><div className="h-4 bg-gray-200 rounded w-32"></div></div><div className="flex gap-2"><div className="h-7 w-7 bg-gray-200 rounded"></div><div className="h-7 w-7 bg-gray-200 rounded"></div></div></div>)}</div>
                    ) : (areas ?? []).length === 0 ? (
                        <div className="px-4 py-12 text-center">
                            <Tag className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                            <p className="text-gray-500">Nenhuma área cadastrada</p>
                        </div>
                    ) : (areas ?? []).map((area: any) => (
                        <div key={area.id}>
                            <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
                                {editingId === area.id ? (
                                    <div className="flex items-center gap-3 flex-1">
                                        <input
                                            value={editingNome}
                                            onChange={(e) => setEditingNome(e.target.value)}
                                            onKeyDown={(e) => e.key === "Enter" && handleUpdate(area.id)}
                                            autoFocus
                                            className="flex-1 px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                        />
                                        <button onClick={() => handleUpdate(area.id)} className="text-sm text-blue-500 hover:underline">Salvar</button>
                                        <button onClick={() => setEditingId(null)} className="text-sm text-gray-400 hover:underline">Cancelar</button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex items-center gap-3">
                                            <button onClick={() => setExpandedId(expandedId === area.id ? null : area.id)} className="p-0.5">
                                                {expandedId === area.id ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                                            </button>
                                            <Tag className="w-4 h-4 text-gray-400" />
                                            <span className="text-sm font-medium text-gray-900">{area.nome}</span>
                                            {area.vagas_count > 0 && (
                                                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{area.vagas_count} vagas</span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => { setEditingId(area.id); setEditingNome(area.nome); }}
                                                className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-blue-500 transition"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(area.id, area.nome)}
                                                className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-red-500 transition"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                            {expandedId === area.id && area.vagas && area.vagas.length > 0 && (
                                <div className="px-4 pb-3 pl-12">
                                    <div className="space-y-1.5">
                                        {area.vagas.map((v: any) => (
                                            <div key={v.id} className="flex items-center gap-2 text-sm text-gray-600 py-1 px-3 rounded-md bg-gray-50">
                                                <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                                                <span className="flex-1 truncate">{v.titulo}</span>
                                                <span className="text-xs text-gray-400">{v.cidade}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
