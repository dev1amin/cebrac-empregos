import { useState } from "react";
import { Plus, Pencil, Trash2, ChevronDown, ChevronRight, HelpCircle, GripVertical } from "lucide-react";
import { useAdminFaq, useCreateFaq, useUpdateFaq, useDeleteFaq } from "@/hooks/use-admin-api";

const CATEGORIAS = ["Cursos e Certificações", "Para Candidatos", "Para Empresas"];

export default function FAQAdmin() {
    const { data: faqItems, isLoading } = useAdminFaq();
    const createMut = useCreateFaq();
    const updateMut = useUpdateFaq();
    const deleteMut = useDeleteFaq();

    const [showAdd, setShowAdd] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [expandedCat, setExpandedCat] = useState<string[]>(CATEGORIAS);

    const [form, setForm] = useState({ pergunta: "", resposta: "", categoria: CATEGORIAS[0], ordem: 0 });
    const [editForm, setEditForm] = useState({ pergunta: "", resposta: "", categoria: CATEGORIAS[0], ordem: 0, status: 1 });

    const grouped = CATEGORIAS.reduce((acc, cat) => {
        acc[cat] = (faqItems ?? []).filter((f: any) => f.categoria === cat).sort((a: any, b: any) => a.ordem - b.ordem);
        return acc;
    }, {} as Record<string, any[]>);

    function handleCreate(e: React.FormEvent) {
        e.preventDefault();
        const maxOrdem = Math.max(0, ...(grouped[form.categoria] ?? []).map((f: any) => f.ordem));
        createMut.mutate({ ...form, ordem: maxOrdem + 1, status: 1 }, {
            onSuccess: () => { setShowAdd(false); setForm({ pergunta: "", resposta: "", categoria: CATEGORIAS[0], ordem: 0 }); },
        });
    }

    function startEdit(item: any) {
        setEditingId(item.id);
        setEditForm({ pergunta: item.pergunta, resposta: item.resposta, categoria: item.categoria, ordem: item.ordem, status: item.status });
    }

    function handleUpdate(id: number) {
        updateMut.mutate({ id, data: editForm }, { onSuccess: () => setEditingId(null) });
    }

    function handleDelete(id: number, pergunta: string) {
        if (confirm(`Deletar a pergunta "${pergunta}"?`)) deleteMut.mutate(id);
    }

    function toggleCat(cat: string) {
        setExpandedCat((prev) => prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]);
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">FAQ</h1>
                    <p className="text-sm text-gray-500 mt-1">{(faqItems ?? []).length} perguntas cadastradas</p>
                </div>
                <button
                    onClick={() => setShowAdd(!showAdd)}
                    className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition"
                >
                    <Plus className="w-4 h-4" />
                    Nova Pergunta
                </button>
            </div>

            {showAdd && (
                <form onSubmit={handleCreate} className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
                    <h2 className="text-sm font-semibold text-gray-900">Adicionar Pergunta</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Pergunta *</label>
                            <input required value={form.pergunta} onChange={(e) => setForm(f => ({ ...f, pergunta: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Resposta *</label>
                            <textarea required rows={3} value={form.resposta} onChange={(e) => setForm(f => ({ ...f, resposta: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                            <select value={form.categoria} onChange={(e) => setForm(f => ({ ...f, categoria: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue">
                                {CATEGORIAS.map((c) => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                        <button type="submit" disabled={createMut.isPending} className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50">
                            {createMut.isPending ? "Salvando..." : "Adicionar"}
                        </button>
                        <button type="button" onClick={() => setShowAdd(false)} className="text-sm text-gray-500 hover:text-gray-700">Cancelar</button>
                    </div>
                </form>
            )}

            {isLoading ? (
                <div className="space-y-4 animate-pulse">{Array.from({ length: 3 }).map((_, i) => <div key={i} className="bg-white rounded-xl border border-gray-200 p-5"><div className="h-5 bg-gray-200 rounded w-48 mb-3"></div><div className="space-y-2">{Array.from({ length: 2 }).map((_, j) => <div key={j} className="flex items-center justify-between py-2"><div className="h-4 bg-gray-200 rounded w-64"></div><div className="flex gap-2"><div className="h-6 w-6 bg-gray-200 rounded"></div><div className="h-6 w-6 bg-gray-200 rounded"></div></div></div>)}</div></div>)}</div>
            ) : (
                <div className="space-y-4">
                    {CATEGORIAS.map((cat) => (
                        <div key={cat} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <button
                                onClick={() => toggleCat(cat)}
                                className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition"
                            >
                                <div className="flex items-center gap-3">
                                    {expandedCat.includes(cat) ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                                    <span className="font-semibold text-gray-900">{cat}</span>
                                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{grouped[cat]?.length ?? 0}</span>
                                </div>
                            </button>

                            {expandedCat.includes(cat) && (
                                <div className="border-t border-gray-100 divide-y divide-gray-50">
                                    {(grouped[cat] ?? []).length === 0 ? (
                                        <div className="px-5 py-6 text-center text-sm text-gray-400">Nenhuma pergunta nesta categoria</div>
                                    ) : (grouped[cat] ?? []).map((item: any) => (
                                        <div key={item.id} className="px-5 py-3 hover:bg-gray-50">
                                            {editingId === item.id ? (
                                                <div className="space-y-3">
                                                    <input value={editForm.pergunta} onChange={(e) => setEditForm(f => ({ ...f, pergunta: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
                                                    <textarea rows={3} value={editForm.resposta} onChange={(e) => setEditForm(f => ({ ...f, resposta: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
                                                    <div className="flex items-center gap-3">
                                                        <select value={editForm.categoria} onChange={(e) => setEditForm(f => ({ ...f, categoria: e.target.value }))} className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
                                                            {CATEGORIAS.map((c) => <option key={c} value={c}>{c}</option>)}
                                                        </select>
                                                        <select value={editForm.status} onChange={(e) => setEditForm(f => ({ ...f, status: Number(e.target.value) }))} className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
                                                            <option value={1}>Publicada</option>
                                                            <option value={0}>Rascunho</option>
                                                        </select>
                                                        <button onClick={() => handleUpdate(item.id)} className="text-sm text-blue-500 font-medium hover:underline">Salvar</button>
                                                        <button onClick={() => setEditingId(null)} className="text-sm text-gray-400 hover:underline">Cancelar</button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex items-start justify-between gap-4">
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2">
                                                            <p className="text-sm font-medium text-gray-900">{item.pergunta}</p>
                                                            {item.status === 0 && (
                                                                <span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">Rascunho</span>
                                                            )}
                                                        </div>
                                                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.resposta}</p>
                                                    </div>
                                                    <div className="flex items-center gap-1 flex-shrink-0">
                                                        <button onClick={() => startEdit(item)} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-blue-500 transition">
                                                            <Pencil className="w-3.5 h-3.5" />
                                                        </button>
                                                        <button onClick={() => handleDelete(item.id, item.pergunta)} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-red-500 transition">
                                                            <Trash2 className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
