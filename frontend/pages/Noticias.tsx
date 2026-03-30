import { ArrowUpRight, Search, Menu, X, Calendar, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNoticias } from "@/hooks/use-api";

function SkeletonCard() {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-200" />
            <div className="p-6">
                <div className="h-3 bg-gray-200 rounded w-24 mb-3" />
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-5 bg-gray-200 rounded w-1/2 mb-4" />
                <div className="h-3 bg-gray-200 rounded w-full mb-2" />
                <div className="h-3 bg-gray-200 rounded w-5/6" />
            </div>
        </div>
    );
}

export default function Noticias() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { data: noticias, isLoading } = useNoticias(50);

    return (
        <div className="min-h-screen bg-white px-4 sm:px-6 md:px-10 lg:px-[100px]" style={{ zoom: 0.7 }}>
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
                    <Link to="/noticias" className="text-white text-sm font-medium hover:opacity-80 transition border-b-2 border-white pb-0.5">Notícias</Link>
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
                        <Link to="/noticias" className="text-white text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Notícias</Link>
                        <Link to="/sobre" className="text-white text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Sobre</Link>
                        <Link to="/faq" className="text-white text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
                    </div>
                </div>
            )}

            {/* Hero */}
            <section className="mt-8 sm:mt-12 mb-10 sm:mb-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Últimas <span className="text-brand-blue">Notícias</span>
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
                        Fique por dentro das novidades do mundo do trabalho, cursos e oportunidades no Cebrac.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="mb-16 sm:mb-24">
                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
                    </div>
                ) : !noticias || noticias.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Calendar className="w-10 h-10 text-gray-300" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhuma notícia publicada ainda</h3>
                        <p className="text-gray-500 text-sm">Em breve teremos novidades por aqui!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {noticias.map((n) => (
                            <article key={n.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition group">
                                {n.imagem ? (
                                    <div className="h-48 overflow-hidden">
                                        <img src={n.imagem} alt={n.titulo} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                    </div>
                                ) : (
                                    <div className="h-48 bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center">
                                        <span className="text-white text-4xl font-bold opacity-30">CEBRAC</span>
                                    </div>
                                )}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                                        {n.data_publicacao && (
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(n.data_publicacao).toLocaleDateString("pt-BR")}
                                            </span>
                                        )}
                                        {n.views !== undefined && (
                                            <span className="flex items-center gap-1">
                                                <Eye className="w-3 h-3" />
                                                {n.views} views
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-brand-blue transition">
                                        {n.titulo}
                                    </h3>
                                    {n.conteudo && (
                                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                            {(() => {
                                                try {
                                                    const blocks = JSON.parse(n.conteudo);
                                                    if (Array.isArray(blocks)) return blocks.filter((b: any) => b.type === "text").map((b: any) => b.value).join(" ");
                                                } catch { }
                                                return n.conteudo;
                                            })()}
                                        </p>
                                    )}
                                    {n.slug && (
                                        <Link to={`/noticias/${n.slug}`} className="text-brand-blue text-sm font-semibold hover:underline inline-flex items-center gap-1">
                                            Ler mais <ArrowUpRight className="w-3 h-3" />
                                        </Link>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>

            {/* Footer */}
            <footer className="bg-brand-blue rounded-t-[25px] px-4 sm:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8 relative mt-auto">
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
