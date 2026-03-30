import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Search, Bookmark, Share2, Users, X, CheckCircle, MapPin, Briefcase, DollarSign, GraduationCap, Clock, Menu } from "lucide-react";
import { useVaga, useVagas, useApplyToJob } from "@/hooks/use-api";
import type { Vaga } from "@shared/api";

function getApplicantCount(vagaId: number): number {
    const key = `vaga_applicants_${vagaId}`;
    const stored = localStorage.getItem(key);
    if (stored) return Number(stored);
    const count = Math.floor(Math.random() * 36) + 15;
    localStorage.setItem(key, String(count));
    return count;
}

function SkeletonBlock() {
    return (
        <div className="animate-pulse space-y-4">
            <div className="h-2 flex"><div className="bg-gray-200 w-full" /></div>
            <div className="p-8 space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="flex gap-3">
                    <div className="h-8 bg-gray-200 rounded-full w-24" />
                    <div className="h-8 bg-gray-200 rounded-full w-20" />
                    <div className="h-8 bg-gray-200 rounded-full w-28" />
                </div>
            </div>
        </div>
    );
}

export default function CandidatarVaga() {
    const { id } = useParams<{ id: string }>();
    const { data: vaga, isLoading } = useVaga(id);
    const applyMut = useApplyToJob();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [success, setSuccess] = useState(false);

    // Fetch similar jobs (same area)
    const { data: similarData } = useVagas({ limit: 5, page: 1, area: vaga?.area || "" });
    const similarJobs = (similarData?.vagas ?? []).filter((v) => v.id !== Number(id)).slice(0, 4);

    const [form, setForm] = useState({
        nome: "", email: "", telefone: "", cidade: "", estado: "",
        escolaridade: "", experiencia: "",
    });

    const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm((f) => ({ ...f, [k]: e.target.value }));

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        applyMut.mutate({ ...form, vaga_id: Number(id) }, {
            onSuccess: () => setSuccess(true),
        });
    }

    const beneficiosList = vaga?.beneficios?.split(",").map((b) => b.trim()).filter(Boolean) ?? [];

    return (
        <div className="min-h-screen bg-gray-50" style={{ zoom: 0.7 }}>
            <div className="px-4 sm:px-6 md:px-10 lg:px-[100px]">
                {/* Navbar */}
                <nav className="bg-brand-blue rounded-[40px] mt-6 px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4 sm:gap-6">
                        <Link to="/" className="flex items-center gap-2">
                            <img src="/images/cebrac-logo-white.png" alt="Cebrac Logo" className="h-5 sm:h-6" />
                        </Link>
                        <div className="h-8 w-px bg-white/30 hidden sm:block"></div>
                        <Link to="/" className="hidden sm:flex items-center gap-2">
                            <img src="/image.png" alt="Cebrac Empresa Logo" className="h-6" />
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center gap-8">
                        <Link to="/" className="text-white text-sm font-medium hover:opacity-80 transition">Home</Link>
                        <Link to="/vagas" className="text-white text-sm font-medium hover:opacity-80 transition">Vagas</Link>
                        <Link to="/para-empresas" className="text-white text-sm font-medium hover:opacity-80 transition">Para empresas</Link>
                        <Link to="/sobre" className="text-white text-sm font-medium hover:opacity-80 transition">Sobre</Link>
                        <Link to="/faq" className="text-white text-sm font-medium hover:opacity-80 transition">FAQ</Link>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                        <button className="text-white hover:opacity-80 transition hidden sm:block"><Search className="w-5 h-5" /></button>
                        <Link to="/vagas" className="hidden sm:flex items-center gap-2 bg-white text-brand-blue px-6 py-2.5 rounded-full font-semibold text-sm">
                            Acessar Vagas <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <button className="lg:hidden text-white p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>

                {mobileMenuOpen && (
                    <div className="lg:hidden mt-2 rounded-2xl bg-brand-blue p-4">
                        <div className="flex flex-col gap-3">
                            <Link to="/" className="text-white text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                            <Link to="/vagas" className="text-white text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Vagas</Link>
                            <Link to="/para-empresas" className="text-white text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Para empresas</Link>
                            <Link to="/sobre" className="text-white text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Sobre</Link>
                            <Link to="/faq" className="text-white text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
                        </div>
                    </div>
                )}

                {/* Back */}
                <div className="mt-8 mb-6">
                    <Link to={`/vagas/${id}`} className="inline-flex items-center gap-2 text-brand-blue text-sm font-medium hover:opacity-80 transition">
                        <div className="flex items-center justify-center w-6 h-6 bg-white border-2 border-brand-blue rounded-full">
                            <svg className="w-3 h-3 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        Voltar para a vaga
                    </Link>
                </div>
            </div>

            {isLoading ? (
                <div className="px-4 sm:px-6 md:px-10 lg:px-[100px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-8"><SkeletonBlock /></div>
                        <div className="lg:col-span-4"><div className="h-64 bg-gray-200 rounded-2xl animate-pulse" /></div>
                    </div>
                </div>
            ) : vaga ? (
                <div className="px-4 sm:px-6 md:px-10 lg:px-[100px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Main Content */}
                        <main className="lg:col-span-8 space-y-6">
                            {/* Job Card Header */}
                            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                                <div className="h-2 flex">
                                    <div className="bg-brand-green" style={{ width: '65%' }}></div>
                                    <div className="bg-brand-blue" style={{ width: '25%' }}></div>
                                    <div className="bg-brand-yellow" style={{ width: '10%' }}></div>
                                </div>
                                <div className="p-6 sm:p-8">
                                    <h1 className="text-2xl sm:text-3xl font-bold text-brand-blue mb-3">{vaga.titulo}</h1>

                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-xs font-bold text-brand-blue">
                                            {vaga.empresa_confidencial ? "?" : (vaga.empresa_nome?.charAt(0) ?? "E")}
                                        </div>
                                        <span className="font-medium">{vaga.empresa_confidencial ? "Empresa Confidencial" : vaga.empresa_nome}</span>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {vaga.cidade && (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                                                <MapPin className="w-3 h-3" /> {vaga.cidade}{vaga.estado ? `, ${vaga.estado}` : ""}
                                            </span>
                                        )}
                                        {vaga.tipo_contrato && (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-brand-blue text-xs font-medium rounded-full">
                                                <Briefcase className="w-3 h-3" /> {vaga.tipo_contrato}
                                            </span>
                                        )}
                                        {vaga.disponibilidade_horario && (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">
                                                <Clock className="w-3 h-3" /> {vaga.disponibilidade_horario}
                                            </span>
                                        )}
                                        {vaga.salario && (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                                                <DollarSign className="w-3 h-3" /> {vaga.salario}
                                            </span>
                                        )}
                                        {vaga.escolaridade && (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-700 text-xs font-medium rounded-full">
                                                <GraduationCap className="w-3 h-3" /> {vaga.escolaridade}
                                            </span>
                                        )}
                                        {vaga.area && (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-brand-blue text-brand-blue text-xs font-medium rounded-full">
                                                {vaga.area}
                                            </span>
                                        )}
                                        {vaga.sexo && vaga.sexo !== "Ambos" && (
                                            <span className="px-3 py-1.5 bg-pink-50 text-pink-700 text-xs font-medium rounded-full">
                                                {vaga.sexo}
                                            </span>
                                        )}
                                        {vaga.habilitacao && (
                                            <span className="px-3 py-1.5 bg-yellow-50 text-yellow-700 text-xs font-medium rounded-full">
                                                CNH: {vaga.habilitacao}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-3 text-sm text-gray-500">
                                        <div className="flex items-center gap-1.5">
                                            <Users className="w-4 h-4 text-brand-green" />
                                            <span>{getApplicantCount(vaga.id)} candidatos já se inscreveram</span>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-100 mt-5 pt-5 flex items-center gap-3">
                                        <button
                                            onClick={() => setShowModal(true)}
                                            className="flex-1 py-3.5 bg-brand-green text-white text-sm font-bold rounded-full hover:opacity-90 transition flex items-center justify-center gap-2"
                                        >
                                            <ArrowUpRight className="w-4 h-4" />
                                            Enviar meu Currículo
                                        </button>
                                        <button className="w-11 h-11 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-brand-blue transition">
                                            <Bookmark className="w-4 h-4 text-gray-400" />
                                        </button>
                                        <button className="w-11 h-11 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-brand-blue transition">
                                            <Share2 className="w-4 h-4 text-gray-400" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <div className="w-1 h-6 bg-brand-blue rounded-full"></div>
                                    Descrição da Vaga
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                                    {vaga.descricao || "Descrição não disponível para esta vaga."}
                                </p>
                            </div>

                            {/* Benefits */}
                            {beneficiosList.length > 0 && (
                                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-brand-green rounded-full"></div>
                                        Benefícios
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {beneficiosList.map((b, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 bg-green-50/50 rounded-xl">
                                                <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-sm text-gray-700">{b}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Job Details Grid */}
                            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <div className="w-1 h-6 bg-brand-yellow rounded-full"></div>
                                    Detalhes da Vaga
                                </h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {vaga.tipo_contrato && (
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <p className="text-xs text-gray-400 mb-1">Tipo de Contrato</p>
                                            <p className="text-sm font-semibold text-gray-900">{vaga.tipo_contrato}</p>
                                        </div>
                                    )}
                                    {vaga.disponibilidade_horario && (
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <p className="text-xs text-gray-400 mb-1">Horário</p>
                                            <p className="text-sm font-semibold text-gray-900">{vaga.disponibilidade_horario}</p>
                                        </div>
                                    )}
                                    {vaga.disponibilidade_semana && (
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <p className="text-xs text-gray-400 mb-1">Dias/Semana</p>
                                            <p className="text-sm font-semibold text-gray-900">{vaga.disponibilidade_semana}</p>
                                        </div>
                                    )}
                                    {vaga.escolaridade && (
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <p className="text-xs text-gray-400 mb-1">Escolaridade</p>
                                            <p className="text-sm font-semibold text-gray-900">{vaga.escolaridade}</p>
                                        </div>
                                    )}
                                    {vaga.salario && (
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <p className="text-xs text-gray-400 mb-1">Salário</p>
                                            <p className="text-sm font-semibold text-brand-green">{vaga.salario}</p>
                                        </div>
                                    )}
                                    {(vaga.idade_min > 0 || vaga.idade_max > 0) && (
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <p className="text-xs text-gray-400 mb-1">Idade</p>
                                            <p className="text-sm font-semibold text-gray-900">
                                                {vaga.idade_min > 0 && vaga.idade_max > 0
                                                    ? `${vaga.idade_min} - ${vaga.idade_max} anos`
                                                    : vaga.idade_min > 0
                                                        ? `A partir de ${vaga.idade_min} anos`
                                                        : `Até ${vaga.idade_max} anos`}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Similar Jobs */}
                            {similarJobs.length > 0 && (
                                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-brand-blue rounded-full"></div>
                                        Vagas Similares
                                    </h2>
                                    <div className="space-y-3">
                                        {similarJobs.map((sv) => (
                                            <Link
                                                key={sv.id}
                                                to={`/vagas/${sv.id}/candidatar`}
                                                className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 hover:shadow-sm transition group"
                                            >
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-brand-blue font-bold text-sm mb-1 group-hover:underline truncate">{sv.titulo}</h4>
                                                    <div className="flex items-center gap-3 text-xs text-gray-500">
                                                        <span>{sv.empresa_confidencial ? "Confidencial" : sv.empresa_nome}</span>
                                                        <span>{sv.cidade}{sv.estado ? `, ${sv.estado}` : ""}</span>
                                                        {sv.salario && <span className="text-brand-green font-medium">{sv.salario}</span>}
                                                    </div>
                                                </div>
                                                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition flex-shrink-0 ml-3">
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </main>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 space-y-6">
                            {/* Apply CTA */}
                            <div className="bg-brand-blue rounded-2xl overflow-hidden sticky top-6">
                                <div className="p-6 sm:p-8 text-center">
                                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <ArrowUpRight className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-white text-xl font-bold mb-2">Interessado nesta vaga?</h3>
                                    <p className="text-white/70 text-sm mb-6">
                                        Envie seu currículo agora e seja um dos primeiros a se candidatar!
                                    </p>
                                    <button
                                        onClick={() => setShowModal(true)}
                                        className="w-full py-3.5 bg-brand-green text-white text-sm font-bold rounded-full hover:opacity-90 transition flex items-center justify-center gap-2"
                                    >
                                        Enviar Currículo
                                        <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="bg-white/10 px-6 py-4 flex items-center justify-center gap-2">
                                    <Users className="w-4 h-4 text-brand-green" />
                                    <span className="text-white/80 text-sm">{getApplicantCount(vaga.id)} pessoas já se candidataram</span>
                                </div>
                            </div>

                            {/* Company Info */}
                            {!vaga.empresa_confidencial && vaga.empresa_nome && (
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <h3 className="text-sm font-bold text-gray-900 mb-4">Sobre a Empresa</h3>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm font-bold text-brand-blue">
                                            {vaga.empresa_nome.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 text-sm">{vaga.empresa_nome}</p>
                                            {vaga.empresa_website && (
                                                <a href={vaga.empresa_website} target="_blank" rel="noopener noreferrer" className="text-brand-blue text-xs hover:underline">
                                                    Visitar site
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Quick Info */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm space-y-3">
                                <h3 className="text-sm font-bold text-gray-900 mb-2">Resumo</h3>
                                {vaga.area && (
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Área</span>
                                        <span className="font-medium text-gray-900">{vaga.area}</span>
                                    </div>
                                )}
                                {vaga.cidade && (
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Local</span>
                                        <span className="font-medium text-gray-900">{vaga.cidade}{vaga.estado ? `, ${vaga.estado}` : ""}</span>
                                    </div>
                                )}
                                {vaga.salario && (
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Salário</span>
                                        <span className="font-medium text-brand-green">{vaga.salario}</span>
                                    </div>
                                )}
                                {vaga.tipo_contrato && (
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Contrato</span>
                                        <span className="font-medium text-gray-900">{vaga.tipo_contrato}</span>
                                    </div>
                                )}
                            </div>
                        </aside>
                    </div>
                </div>
            ) : (
                <div className="px-4 sm:px-6 md:px-10 lg:px-[100px] py-20 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Vaga não encontrada</h2>
                    <p className="text-gray-500 mb-6">Esta vaga pode ter sido removida ou não está mais disponível.</p>
                    <Link to="/vagas" className="text-brand-blue font-semibold hover:underline">Ver todas as vagas</Link>
                </div>
            )}

            {/* Application Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => !applyMut.isPending && setShowModal(false)} />
                    <div className="relative bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">Enviar Currículo</h2>
                                {vaga && <p className="text-xs text-gray-500 mt-0.5">{vaga.titulo}</p>}
                            </div>
                            <button
                                onClick={() => !applyMut.isPending && setShowModal(false)}
                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
                            >
                                <X className="w-4 h-4 text-gray-500" />
                            </button>
                        </div>

                        {success ? (
                            <div className="p-8 text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-brand-green" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Candidatura Enviada!</h3>
                                <p className="text-gray-500 text-sm mb-6">
                                    Sua candidatura para <strong>{vaga?.titulo}</strong> foi enviada com sucesso.
                                    O recrutador entrará em contato em breve.
                                </p>
                                <div className="flex gap-3">
                                    <Link to="/vagas" className="flex-1 py-3 bg-brand-blue text-white text-sm font-bold rounded-full text-center hover:opacity-90 transition">
                                        Ver mais vagas
                                    </Link>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 py-3 border-2 border-gray-200 text-gray-700 text-sm font-bold rounded-full hover:bg-gray-50 transition"
                                    >
                                        Fechar
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-xs font-medium text-gray-600 mb-1">Nome completo *</label>
                                        <input required value={form.nome} onChange={set("nome")} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue" />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-xs font-medium text-gray-600 mb-1">Email *</label>
                                        <input required type="email" value={form.email} onChange={set("email")} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-600 mb-1">Telefone</label>
                                        <input value={form.telefone} onChange={set("telefone")} placeholder="(11) 99999-9999" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-600 mb-1">Escolaridade</label>
                                        <select value={form.escolaridade} onChange={set("escolaridade")} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue bg-white">
                                            <option value="">Selecione</option>
                                            <option value="Ensino Fundamental">Ensino Fundamental</option>
                                            <option value="Ensino Médio">Ensino Médio</option>
                                            <option value="Ensino Técnico">Ensino Técnico</option>
                                            <option value="Graduação">Graduação</option>
                                            <option value="Pós-Graduação">Pós-Graduação</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-600 mb-1">Cidade</label>
                                        <input value={form.cidade} onChange={set("cidade")} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-600 mb-1">Estado</label>
                                        <input value={form.estado} onChange={set("estado")} placeholder="SP" maxLength={2} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-600 mb-1">Experiência profissional</label>
                                    <textarea rows={3} value={form.experiencia} onChange={set("experiencia")} placeholder="Conte resumidamente sobre sua experiência..." className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue resize-none" />
                                </div>

                                {applyMut.isError && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                                        {applyMut.error.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={applyMut.isPending}
                                    className="w-full py-3.5 bg-brand-green text-white text-sm font-bold rounded-full hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {applyMut.isPending ? "Enviando..." : (
                                        <>
                                            Enviar Candidatura
                                            <ArrowUpRight className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="bg-brand-blue rounded-t-[25px] mx-4 sm:mx-6 md:mx-10 lg:mx-[100px] px-4 sm:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8 relative mt-16">
                <div>
                    <div className="absolute -top-5 left-0 right-0 flex items-center justify-center gap-2 sm:gap-3 flex-wrap px-4">
                        <Link to="/para-empresas" className="flex items-center gap-2 bg-brand-green text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:opacity-90 transition">
                            Para empresas
                            <div className="bg-white rounded-full p-1"><ArrowUpRight className="w-3 h-3 text-brand-green" /></div>
                        </Link>
                        <Link to="/" className="flex items-center gap-2 bg-brand-green text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:opacity-90 transition">
                            Home
                            <div className="bg-white rounded-full p-1"><ArrowUpRight className="w-3 h-3 text-brand-green" /></div>
                        </Link>
                        <Link to="/vagas" className="flex items-center gap-2 bg-brand-green text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:opacity-90 transition">
                            Vagas
                            <div className="bg-white rounded-full p-1"><ArrowUpRight className="w-3 h-3 text-brand-green" /></div>
                        </Link>
                        <Link to="/sobre" className="flex items-center gap-2 bg-brand-green text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:opacity-90 transition">
                            Sobre
                            <div className="bg-white rounded-full p-1"><ArrowUpRight className="w-3 h-3 text-brand-green" /></div>
                        </Link>
                        <Link to="/faq" className="flex items-center gap-2 bg-brand-green text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:opacity-90 transition">
                            FAQ
                            <div className="bg-white rounded-full p-1"><ArrowUpRight className="w-3 h-3 text-brand-green" /></div>
                        </Link>
                    </div>
                    <div className="border-t border-white/20 pt-6 mt-8">
                        <div className="flex flex-col sm:flex-row items-center justify-between text-white text-xs sm:text-sm gap-4">
                            <p>©2026, Cebrac Franchising. Todos os direitos reservados.</p>
                            <div className="flex gap-4 sm:gap-8 flex-wrap justify-center">
                                <a href="#" className="hover:opacity-80">Privacy Policy</a>
                                <a href="#" className="hover:opacity-80">Terms of Service</a>
                                <a href="#" className="hover:opacity-80">Cookies Settings</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
