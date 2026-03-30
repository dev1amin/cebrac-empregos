import { useAdminDashboard } from "@/hooks/use-admin-api";
import { Briefcase, Building2, Users, Send, Newspaper, TrendingUp, TrendingDown, ArrowUpRight, Trophy } from "lucide-react";

export default function Dashboard() {
  const { data, isLoading } = useAdminDashboard();
  const stats = data?.stats;
  const candidatosNovos = data?.candidatos_novos_semana ?? 0;
  const candidatosVar = data?.candidatos_variacao_semana ?? 0;
  const topVagas = data?.vagas_top_candidaturas ?? [];

  const cards = [
    { label: "Vagas Ativas", value: stats?.vagas_ativas ?? 0, total: stats?.vagas_total ?? 0, icon: Briefcase, color: "bg-blue-500" },
    { label: "Empresas", value: stats?.empresas ?? 0, icon: Building2, color: "bg-emerald-500" },
    { label: "Candidatos", value: stats?.candidatos ?? 0, icon: Users, color: "bg-violet-500" },
    { label: "Encaminhamentos", value: stats?.encaminhamentos ?? 0, icon: Send, color: "bg-amber-500" },
    { label: "Notícias", value: stats?.noticias ?? 0, icon: Newspaper, color: "bg-rose-500" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Visão geral da plataforma Cebrac Empregos</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {cards.map((card) => (
          <div key={card.label} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg ${card.color} flex items-center justify-center`}>
                <card.icon className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-4 h-4 text-gray-300" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{isLoading ? <span className="inline-block h-7 w-12 bg-gray-200 rounded animate-pulse"></span> : card.value}</p>
            <p className="text-xs text-gray-500 mt-1">
              {card.label}
              {card.total !== undefined && card.total > 0 && ` (${card.total} total)`}
            </p>
          </div>
        ))}
      </div>

      {/* Analytics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-500">Candidatos esta semana</p>
            <Users className="w-4 h-4 text-violet-400" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{isLoading ? <span className="inline-block h-7 w-12 bg-gray-200 rounded animate-pulse"></span> : candidatosNovos}</p>
          {!isLoading && (
            <div className={`flex items-center gap-1 mt-1 text-xs font-medium ${candidatosVar >= 0 ? "text-green-600" : "text-red-500"}`}>
              {candidatosVar >= 0 ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
              {candidatosVar >= 0 ? "+" : ""}{candidatosVar.toFixed(0)}% vs semana anterior
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 sm:col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="w-4 h-4 text-amber-500" />
            <p className="text-sm font-semibold text-gray-900">Top Vagas por Candidaturas</p>
          </div>
          {isLoading ? (
            <div className="space-y-2 animate-pulse">{Array.from({length:3}).map((_,i)=><div key={i} className="flex items-center gap-3"><div className="h-4 w-5 bg-gray-200 rounded"></div><div className="h-4 bg-gray-200 rounded flex-1"></div><div className="h-5 w-20 bg-gray-200 rounded-full"></div></div>)}</div>
          ) : topVagas.length === 0 ? (
            <p className="text-sm text-gray-400">Nenhuma candidatura registrada</p>
          ) : (
            <div className="space-y-2">
              {topVagas.map((v: any, i: number) => (
                <div key={v.id || i} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-400 w-5">{i + 1}.</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 truncate">{v.titulo}</p>
                  </div>
                  <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{v.total_candidaturas} candidaturas</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vagas recentes */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Vagas Recentes</h2>
          {isLoading ? (
            <div className="space-y-3 animate-pulse">{Array.from({length:3}).map((_,i)=><div key={i} className="flex items-center justify-between py-2 border-b border-gray-100"><div><div className="h-4 bg-gray-200 rounded w-40 mb-1"></div><div className="h-3 bg-gray-200 rounded w-24"></div></div><div className="h-3 bg-gray-200 rounded w-16"></div></div>)}</div>
          ) : data?.vagas_recentes && data.vagas_recentes.length > 0 ? (
            <div className="space-y-3">
              {data.vagas_recentes.map((v: any) => (
                <div key={v.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{v.titulo}</p>
                    <p className="text-xs text-gray-500">{v.cidade}</p>
                  </div>
                  <span className="text-xs text-gray-400">
                    {new Date(v.created_at).toLocaleDateString("pt-BR")}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400">Nenhuma vaga cadastrada ainda.</p>
          )}
        </div>

        {/* Encaminhamentos recentes */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Encaminhamentos Recentes</h2>
          {isLoading ? (
            <div className="space-y-3 animate-pulse">{Array.from({length:3}).map((_,i)=><div key={i} className="flex items-center justify-between py-2 border-b border-gray-100"><div><div className="h-4 bg-gray-200 rounded w-40 mb-1"></div><div className="h-3 bg-gray-200 rounded w-24"></div></div><div className="h-3 bg-gray-200 rounded w-16"></div></div>)}</div>
          ) : data?.encaminhamentos_recentes && data.encaminhamentos_recentes.length > 0 ? (
            <div className="space-y-3">
              {data.encaminhamentos_recentes.map((e: any) => (
                <div key={e.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{e.candidatos?.nome ?? "Candidato"}</p>
                    <p className="text-xs text-gray-500">{e.vagas?.titulo ?? "Vaga"}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    e.status === "aprovado" ? "bg-green-100 text-green-700" :
                    e.status === "rejeitado" ? "bg-red-100 text-red-700" :
                    "bg-yellow-100 text-yellow-700"
                  }`}>
                    {e.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400">Nenhum encaminhamento ainda.</p>
          )}
        </div>
      </div>
    </div>
  );
}
