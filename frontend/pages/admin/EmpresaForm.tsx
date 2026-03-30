import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useAdminEmpresa, useCreateEmpresa, useUpdateEmpresa } from "@/hooks/use-admin-api";

const ESTADOS_BR = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA",
  "PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

export default function EmpresaForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id && id !== "nova";

  const { data: existing } = useAdminEmpresa(isEdit ? id : undefined);
  const createMut = useCreateEmpresa();
  const updateMut = useUpdateEmpresa();

  const [form, setForm] = useState({
    nome: "", email: "", telefone: "", cidade: "", estado: "",
    website: "", logo: "", confidencial: 1, status: 1,
  });

  useEffect(() => {
    if (existing) {
      setForm({
        nome: existing.nome ?? "",
        email: existing.email ?? "",
        telefone: existing.telefone ?? "",
        cidade: existing.cidade ?? "",
        estado: existing.estado ?? "",
        website: existing.website ?? "",
        logo: existing.logo ?? "",
        confidencial: existing.confidencial ?? 1,
        status: existing.status ?? 1,
      });
    }
  }, [existing]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isEdit) {
      updateMut.mutate({ id: Number(id), data: form }, { onSuccess: () => navigate("/admin/empresas") });
    } else {
      createMut.mutate(form, { onSuccess: () => navigate("/admin/empresas") });
    }
  }

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const isPending = createMut.isPending || updateMut.isPending;

  return (
    <div className="max-w-2xl space-y-6">
      <button onClick={() => navigate("/admin/empresas")} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
        <ArrowLeft className="w-4 h-4" /> Voltar
      </button>

      <h1 className="text-2xl font-bold text-gray-900">{isEdit ? "Editar Empresa" : "Nova Empresa"}</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
            <input required value={form.nome} onChange={set("nome")} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" value={form.email} onChange={set("email")} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
            <input value={form.telefone} onChange={set("telefone")} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
            <input value={form.cidade} onChange={set("cidade")} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
            <select value={form.estado} onChange={set("estado")} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500">
              <option value="">Selecione</option>
              {ESTADOS_BR.map((uf) => <option key={uf} value={uf}>{uf}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
            <input value={form.website} onChange={set("website")} placeholder="https://..." className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Logo (URL)</label>
            <input value={form.logo} onChange={set("logo")} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confidencial</label>
            <select value={form.confidencial} onChange={(e) => setForm((f) => ({ ...f, confidencial: Number(e.target.value) }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500">
              <option value={1}>Sim</option>
              <option value={0}>Não</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: Number(e.target.value) }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500">
              <option value={1}>Ativa</option>
              <option value={0}>Inativa</option>
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
