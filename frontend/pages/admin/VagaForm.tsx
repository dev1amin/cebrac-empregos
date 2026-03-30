import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Save, Plus } from "lucide-react";
import { useAdminVaga, useCreateVaga, useUpdateVaga, useAdminEmpresas, useAdminAreas, useCreateEmpresa } from "@/hooks/use-admin-api";

const ESTADOS_BR = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA",
  "PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

const TIPOS_CONTRATO = ["CLT", "PJ", "Estágio", "Temporário", "Freelancer", "Home Office"];
const HORARIOS = ["Integral", "Meio Período", "Noturno", "Flexível"];
const SEMANAS = ["Segunda a Sexta", "Segunda a Sábado", "Escala 6x1", "12x36", "Flexível"];

export default function VagaForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id && id !== "nova";

  const { data: existing } = useAdminVaga(isEdit ? id : undefined);
  const { data: empresasData } = useAdminEmpresas({ limit: 200 });
  const { data: areas } = useAdminAreas();
  const createMut = useCreateVaga();
  const updateMut = useUpdateVaga();
  const createEmpresaMut = useCreateEmpresa();

  const [showNewEmpresa, setShowNewEmpresa] = useState(false);
  const [newEmpresa, setNewEmpresa] = useState({ nome: "", cidade: "", estado: "" });

  const [form, setForm] = useState({
    titulo: "", descricao: "", area: "", cidade: "", estado: "",
    tipo_contrato: "", disponibilidade_semana: "", disponibilidade_horario: "",
    salario: "", escolaridade: "", idade_min: 0, idade_max: 0,
    sexo: "Ambos", habilitacao: "", beneficios: "", empresa_id: "" as string | number, status: 1,
  });

  useEffect(() => {
    if (existing) {
      setForm({
        titulo: existing.titulo ?? "",
        descricao: existing.descricao ?? "",
        area: existing.area ?? "",
        cidade: existing.cidade ?? "",
        estado: existing.estado ?? "",
        tipo_contrato: existing.tipo_contrato ?? "",
        disponibilidade_semana: existing.disponibilidade_semana ?? "",
        disponibilidade_horario: existing.disponibilidade_horario ?? "",
        salario: existing.salario ?? "",
        escolaridade: existing.escolaridade ?? "",
        idade_min: existing.idade_min ?? 0,
        idade_max: existing.idade_max ?? 0,
        sexo: existing.sexo ?? "Ambos",
        habilitacao: existing.habilitacao ?? "",
        beneficios: existing.beneficios ?? "",
        empresa_id: existing.empresa_id ?? "",
        status: existing.status ?? 1,
      });
    }
  }, [existing]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = {
      ...form,
      empresa_id: form.empresa_id ? Number(form.empresa_id) : null,
      idade_min: Number(form.idade_min),
      idade_max: Number(form.idade_max),
    };
    if (isEdit) {
      updateMut.mutate({ id: Number(id), data: payload }, { onSuccess: () => navigate("/admin/vagas") });
    } else {
      createMut.mutate(payload, { onSuccess: () => navigate("/admin/vagas") });
    }
  }

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const isPending = createMut.isPending || updateMut.isPending;
  const inputCls = "w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500";

  return (
    <div className="max-w-3xl space-y-6">
      <button onClick={() => navigate("/admin/vagas")} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
        <ArrowLeft className="w-4 h-4" /> Voltar
      </button>

      <h1 className="text-2xl font-bold text-gray-900">{isEdit ? "Editar Vaga" : "Nova Vaga"}</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
        {/* Info Básica */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Informações Básicas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Título *</label>
              <input required value={form.titulo} onChange={set("titulo")} className={inputCls} />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
              <textarea rows={5} value={form.descricao} onChange={set("descricao")} className={inputCls} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Área</label>
              <select value={form.area} onChange={set("area")} className={inputCls}>
                <option value="">Selecione</option>
                {(areas ?? []).map((a: any) => <option key={a.id} value={a.nome}>{a.nome}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
              <div className="flex gap-2">
                <select value={form.empresa_id} onChange={set("empresa_id")} className={`flex-1 ${inputCls}`}>
                  <option value="">Confidencial</option>
                  {(empresasData?.data ?? []).map((e: any) => <option key={e.id} value={e.id}>{e.nome}</option>)}
                </select>
                <button type="button" onClick={() => setShowNewEmpresa(!showNewEmpresa)} className="px-3 py-2 border border-gray-200 rounded-lg text-gray-500 hover:text-brand-blue hover:border-brand-blue transition" title="Criar empresa rápida">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              {showNewEmpresa && (
                <div className="mt-2 p-3 border border-dashed border-gray-300 rounded-lg bg-gray-50 space-y-2">
                  <p className="text-xs font-medium text-gray-600">Criar empresa rápida</p>
                  <input placeholder="Nome da empresa *" value={newEmpresa.nome} onChange={(e) => setNewEmpresa(f => ({ ...f, nome: e.target.value }))} className={inputCls} />
                  <div className="grid grid-cols-2 gap-2">
                    <input placeholder="Cidade" value={newEmpresa.cidade} onChange={(e) => setNewEmpresa(f => ({ ...f, cidade: e.target.value }))} className={inputCls} />
                    <input placeholder="UF" maxLength={2} value={newEmpresa.estado} onChange={(e) => setNewEmpresa(f => ({ ...f, estado: e.target.value }))} className={inputCls} />
                  </div>
                  <button
                    type="button"
                    disabled={!newEmpresa.nome.trim() || createEmpresaMut.isPending}
                    onClick={() => {
                      createEmpresaMut.mutate({ nome: newEmpresa.nome, cidade: newEmpresa.cidade, estado: newEmpresa.estado, status: 1, confidencial: 0 }, {
                        onSuccess: (data: any) => {
                          if (data?.id) setForm(f => ({ ...f, empresa_id: data.id }));
                          setShowNewEmpresa(false);
                          setNewEmpresa({ nome: "", cidade: "", estado: "" });
                        },
                      });
                    }}
                    className="text-xs bg-brand-blue text-white px-3 py-1.5 rounded-md font-medium hover:opacity-90 disabled:opacity-50"
                  >
                    {createEmpresaMut.isPending ? "Criando..." : "Criar e selecionar"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Localização */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Localização</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
              <input value={form.cidade} onChange={set("cidade")} className={inputCls} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
              <select value={form.estado} onChange={set("estado")} className={inputCls}>
                <option value="">Selecione</option>
                {ESTADOS_BR.map((uf) => <option key={uf} value={uf}>{uf}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Contrato */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Contrato & Disponibilidade</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Contrato</label>
              <select value={form.tipo_contrato} onChange={set("tipo_contrato")} className={inputCls}>
                <option value="">Selecione</option>
                {TIPOS_CONTRATO.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Horário</label>
              <select value={form.disponibilidade_horario} onChange={set("disponibilidade_horario")} className={inputCls}>
                <option value="">Selecione</option>
                {HORARIOS.map((h) => <option key={h} value={h}>{h}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Semana</label>
              <select value={form.disponibilidade_semana} onChange={set("disponibilidade_semana")} className={inputCls}>
                <option value="">Selecione</option>
                {SEMANAS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Salário</label>
              <input value={form.salario} onChange={set("salario")} placeholder="R$ 1.500,00 ou A Combinar" className={inputCls} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Escolaridade</label>
              <input value={form.escolaridade} onChange={set("escolaridade")} className={inputCls} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Habilitação</label>
              <input value={form.habilitacao} onChange={set("habilitacao")} placeholder="A, B, AB..." className={inputCls} />
            </div>
          </div>
        </div>

        {/* Perfil */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Perfil do Candidato</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sexo</label>
              <select value={form.sexo} onChange={set("sexo")} className={inputCls}>
                <option value="Ambos">Ambos</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Idade Mínima</label>
              <input type="number" min={0} value={form.idade_min} onChange={(e) => setForm(f => ({ ...f, idade_min: Number(e.target.value) }))} className={inputCls} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Idade Máxima</label>
              <input type="number" min={0} value={form.idade_max} onChange={(e) => setForm(f => ({ ...f, idade_max: Number(e.target.value) }))} className={inputCls} />
            </div>
          </div>
        </div>

        {/* Benefícios */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Benefícios</label>
          <textarea rows={3} value={form.beneficios} onChange={set("beneficios")} placeholder="Ex: Vale Transporte, Vale Alimentação, Plano de Saúde..." className={inputCls} />
        </div>

        {/* Status */}
        <div className="max-w-xs">
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select value={form.status} onChange={(e) => setForm(f => ({ ...f, status: Number(e.target.value) }))} className={inputCls}>
            <option value={1}>Ativa</option>
            <option value={0}>Inativa</option>
          </select>
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
