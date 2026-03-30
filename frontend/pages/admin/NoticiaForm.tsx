import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Save, Plus, Trash2, Type, Image, MoveUp, MoveDown } from "lucide-react";
import { useAdminNoticia, useCreateNoticia, useUpdateNoticia } from "@/hooks/use-admin-api";

function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

interface ContentBlock {
    type: "text" | "image";
    value: string;
}

function parseContent(raw: string): ContentBlock[] {
    if (!raw) return [{ type: "text", value: "" }];
    try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
    } catch { }
    return [{ type: "text", value: raw }];
}

function serializeBlocks(blocks: ContentBlock[]): string {
    if (blocks.length === 1 && blocks[0].type === "text") return blocks[0].value;
    return JSON.stringify(blocks);
}

export default function NoticiaForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = !!id && id !== "nova";

    const { data: existing } = useAdminNoticia(isEdit ? id : undefined);
    const createMut = useCreateNoticia();
    const updateMut = useUpdateNoticia();

    const [form, setForm] = useState({
        titulo: "", slug: "", conteudo: "", imagem: "",
        data_publicacao: new Date().toISOString().split("T")[0], status: 1,
    });
    const [blocks, setBlocks] = useState<ContentBlock[]>([{ type: "text", value: "" }]);

    useEffect(() => {
        if (existing) {
            setForm({
                titulo: existing.titulo ?? "",
                slug: existing.slug ?? "",
                conteudo: existing.conteudo ?? "",
                imagem: existing.imagem ?? "",
                data_publicacao: existing.data_publicacao ?? new Date().toISOString().split("T")[0],
                status: existing.status ?? 1,
            });
            setBlocks(parseContent(existing.conteudo ?? ""));
        }
    }, [existing]);

    function handleTituloChange(e: React.ChangeEvent<HTMLInputElement>) {
        const titulo = e.target.value;
        setForm((f) => ({
            ...f,
            titulo,
            slug: !isEdit ? slugify(titulo) : f.slug,
        }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const payload = { ...form, conteudo: serializeBlocks(blocks) };
        if (isEdit) {
            updateMut.mutate({ id: Number(id), data: payload }, { onSuccess: () => navigate("/admin/noticias") });
        } else {
            createMut.mutate(payload, { onSuccess: () => navigate("/admin/noticias") });
        }
    }

    function updateBlock(index: number, value: string) {
        setBlocks((prev) => prev.map((b, i) => (i === index ? { ...b, value } : b)));
    }

    function addBlock(type: "text" | "image") {
        setBlocks((prev) => [...prev, { type, value: "" }]);
    }

    function removeBlock(index: number) {
        setBlocks((prev) => prev.filter((_, i) => i !== index));
    }

    function moveBlock(index: number, dir: -1 | 1) {
        setBlocks((prev) => {
            const next = [...prev];
            const target = index + dir;
            if (target < 0 || target >= next.length) return prev;
            [next[index], next[target]] = [next[target], next[index]];
            return next;
        });
    }

    const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm((f) => ({ ...f, [k]: e.target.value }));

    const isPending = createMut.isPending || updateMut.isPending;
    const inputCls = "w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500";

    return (
        <div className="max-w-2xl space-y-6">
            <button onClick={() => navigate("/admin/noticias")} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
                <ArrowLeft className="w-4 h-4" /> Voltar
            </button>

            <h1 className="text-2xl font-bold text-gray-900">{isEdit ? "Editar Notícia" : "Nova Notícia"}</h1>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Título *</label>
                    <input required value={form.titulo} onChange={handleTituloChange} className={inputCls} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                    <input value={form.slug} onChange={set("slug")} className={inputCls} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Conteúdo</label>
                    <div className="space-y-3 border border-gray-200 rounded-lg p-4 bg-gray-50">
                        {blocks.map((block, i) => (
                            <div key={i} className="flex gap-2 items-start">
                                <div className="flex flex-col gap-1 pt-2">
                                    <button type="button" onClick={() => moveBlock(i, -1)} className="p-0.5 hover:bg-gray-200 rounded" title="Mover acima"><MoveUp className="w-3.5 h-3.5 text-gray-400" /></button>
                                    <button type="button" onClick={() => moveBlock(i, 1)} className="p-0.5 hover:bg-gray-200 rounded" title="Mover abaixo"><MoveDown className="w-3.5 h-3.5 text-gray-400" /></button>
                                </div>
                                <div className="flex-1">
                                    {block.type === "text" ? (
                                        <textarea rows={4} value={block.value} onChange={(e) => updateBlock(i, e.target.value)} placeholder="Texto do parágrafo..." className={inputCls} />
                                    ) : (
                                        <input value={block.value} onChange={(e) => updateBlock(i, e.target.value)} placeholder="URL da imagem (https://...)" className={inputCls} />
                                    )}
                                    <span className="text-xs text-gray-400 mt-0.5">{block.type === "text" ? "Parágrafo" : "Imagem"}</span>
                                </div>
                                {blocks.length > 1 && (
                                    <button type="button" onClick={() => removeBlock(i)} className="p-1.5 mt-1 hover:bg-red-50 rounded text-gray-400 hover:text-red-500">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        ))}
                        <div className="flex gap-2 pt-2 border-t border-gray-200">
                            <button type="button" onClick={() => addBlock("text")} className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-brand-blue bg-white border border-gray-200 px-3 py-1.5 rounded-md">
                                <Type className="w-3.5 h-3.5" /> Parágrafo
                            </button>
                            <button type="button" onClick={() => addBlock("image")} className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-brand-blue bg-white border border-gray-200 px-3 py-1.5 rounded-md">
                                <Image className="w-3.5 h-3.5" /> Imagem
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Imagem (URL)</label>
                        <input value={form.imagem} onChange={set("imagem")} className={inputCls} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Data de Publicação</label>
                        <input type="date" value={form.data_publicacao} onChange={set("data_publicacao")} className={inputCls} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select value={form.status} onChange={(e) => setForm(f => ({ ...f, status: Number(e.target.value) }))} className={inputCls}>
                            <option value={1}>Publicada</option>
                            <option value={0}>Rascunho</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-100">
                    <button
                        type="submit"
                        disabled={isPending}
                        className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
                    >
                        <Save className="w-4 h-4" />
                        {isPending ? "Salvando..." : "Salvar"}
                    </button>
                </div>
            </form>
        </div>
    );
}
