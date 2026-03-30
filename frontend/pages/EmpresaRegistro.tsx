import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search, CheckCircle, Menu, X } from "lucide-react";
import { useRegisterCompany } from "@/hooks/use-api";

export default function EmpresaRegistro() {
    const registerMut = useRegisterCompany();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [success, setSuccess] = useState(false);

    const [form, setForm] = useState({
        nome: "", email: "", telefone: "", cidade: "", estado: "", website: "",
    });

    const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm((f) => ({ ...f, [k]: e.target.value }));

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        registerMut.mutate(form, { onSuccess: () => setSuccess(true) });
    }

    if (success) {
        return (
            <div className="min-h-screen bg-white px-4 sm:px-6 md:px-10 lg:px-[100px]" style={{ zoom: 0.7 }}>
                <nav className="bg-brand-blue rounded-[40px] mt-6 px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/images/cebrac-logo-white.png" alt="Cebrac" className="h-5 sm:h-6" />
                    </Link>
                    <Link to="/vagas" className="hidden sm:flex items-center gap-2 bg-white text-brand-blue px-6 py-2.5 rounded-full font-semibold text-sm">
                        Ver Vagas <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </nav>
                <div className="flex flex-col items-center justify-center py-20">
                    <CheckCircle className="w-20 h-20 text-brand-green mb-6" />
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Empresa Cadastrada!</h1>
                    <p className="text-gray-600 text-center max-w-md mb-8">
                        O cadastro de <strong>{form.nome}</strong> foi realizado com sucesso.
                        Nossa equipe entrará em contato para os próximos passos.
                    </p>
                    <Link to="/" className="bg-brand-blue text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
                        Voltar ao início
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white px-4 sm:px-6 md:px-10 lg:px-[100px]" style={{ zoom: 0.7 }}>
            {/* Navbar */}
            <nav className="bg-brand-blue rounded-[40px] mt-6 px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center gap-4 sm:gap-6">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/images/cebrac-logo-white.png" alt="Cebrac" className="h-5 sm:h-6" />
                    </Link>
                    <div className="h-8 w-px bg-white/30 hidden sm:block"></div>
                    <Link to="/" className="hidden sm:flex items-center gap-2">
                        <img src="/image.png" alt="Cebrac Empresa" className="h-6" />
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

            {/* Hero */}
            <div className="mt-8 sm:mt-12 mb-8">
                <h1 className="text-brand-blue text-3xl sm:text-4xl font-bold mb-2">Cadastre sua Empresa</h1>
                <p className="text-gray-600 text-sm sm:text-base">Conecte-se com os melhores profissionais qualificados pelo Cebrac</p>
            </div>

            <div className="max-w-2xl mb-16">
                <form onSubmit={handleSubmit} className="bg-white border-2 border-gray-100 rounded-3xl p-8 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nome da empresa *</label>
                            <input required value={form.nome} onChange={set("nome")} className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email corporativo *</label>
                            <input required type="email" value={form.email} onChange={set("email")} className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                            <input value={form.telefone} onChange={set("telefone")} placeholder="(11) 3333-3333" className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
                            <input value={form.cidade} onChange={set("cidade")} className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                            <input value={form.estado} onChange={set("estado")} placeholder="SP" maxLength={2} className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                            <input value={form.website} onChange={set("website")} placeholder="https://suaempresa.com.br" className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue" />
                        </div>
                    </div>

                    {registerMut.isError && (
                        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                            {registerMut.error.message}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={registerMut.isPending}
                        className="w-full py-4 bg-brand-green text-white text-sm font-bold rounded-full hover:opacity-90 transition disabled:opacity-50"
                    >
                        {registerMut.isPending ? "Cadastrando..." : "Cadastrar Empresa"}
                    </button>
                </form>
            </div>
        </div>
    );
}
