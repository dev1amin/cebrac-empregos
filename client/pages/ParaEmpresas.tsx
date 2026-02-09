import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function ParaEmpresas() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - Reused */}
      <nav className="bg-brand-blue rounded-[40px] mx-6 mt-6 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-3">
            <svg width="44" height="23" viewBox="0 0 58 30" fill="none">
              <path d="M26.8526 27.6548H3.0879C1.38501 27.6548 0 26.4462 0 24.9602V4.88985C0 3.40389 1.38501 2.19531 3.0879 2.19531H26.8526V27.6482V27.6548Z" fill="#11B000"/>
              <path d="M33.7552 0.537425C32.514 -0.175836 30.5916 -0.18244 29.3428 0.537425L6.68311 13.6337C5.44189 14.3469 5.44189 15.5093 6.68311 16.2292L29.305 29.3188C30.5159 30.0189 32.5064 30.0189 33.7174 29.3188L56.3695 16.2226C57.6107 15.5093 57.6107 14.3469 56.3695 13.6271L33.7476 0.537425H33.7552Z" fill="#FFCA00"/>
              <path d="M26.4598 2.20215L6.69116 13.6275C5.44995 14.3408 5.44995 15.5031 6.69116 16.223L26.4522 27.655C36.2684 21.1762 36.276 8.4696 26.4673 2.20215" fill="#25348F"/>
            </svg>
            <div className="flex items-center gap-2">
              <div className="h-6 w-px bg-white/20"></div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#FFCA00"/>
                <path d="M12 8v8M8 12h8" stroke="#25348F" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-white font-bold text-sm uppercase tracking-wide">Cebrac Empregos</span>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-8">
          <Link to="/" className="text-white text-sm font-medium hover:opacity-80 transition">Home</Link>
          <Link to="/vagas" className="text-white text-sm font-medium hover:opacity-80 transition">Vagas</Link>
          <Link to="/para-empresas" className="text-white text-sm font-medium hover:opacity-80 transition">Para empresas</Link>
          <Link to="/sobre" className="text-white text-sm font-medium hover:opacity-80 transition">Sobre</Link>
          <a href="#" className="text-white text-sm font-medium hover:opacity-80 transition">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-white hover:opacity-80 transition">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="flex items-center gap-2 bg-white text-brand-blue px-6 py-3 rounded-full font-bold text-sm hover:bg-opacity-90 transition">
            Acessar Vagas
            <div className="bg-brand-blue rounded-full p-1">
              <ArrowUpRight className="w-3 h-3 text-white" />
            </div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-brand-blue rounded-[40px] mx-6 mt-12 overflow-hidden">
        <div className="relative z-10 px-12 py-24">
          {/* "Grandes Oportunidades" badge */}
          <div className="flex justify-end mb-12">
            <button className="px-6 py-2.5 border-2 border-white/30 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition">
              Grandes Oportunidades
            </button>
          </div>

          {/* Main Hero Card */}
          <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-3xl p-10 max-w-4xl">
            <h1 className="text-white text-5xl font-bold mb-6">
              Encontre os Melhores Talentos para sua Empresa
            </h1>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Nossa plataforma conecta sua empresa aos profissionais mais qualificados do mercado. Publique vagas, receba 
              candidaturas qualificadas e encontre o talento ideal para sua equipe.
            </p>
            <button className="flex items-center gap-2 bg-white text-brand-blue px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition">
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gradient bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-yellow via-brand-blue to-brand-green"></div>
      </section>

      {/* Company Partner Banner */}
      <section className="max-w-7xl mx-auto px-6 my-12">
        <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <svg width="58" height="30" viewBox="0 0 58 30" fill="none">
              <path d="M26.8526 27.6548H3.0879C1.38501 27.6548 0 26.4462 0 24.9602V4.88985C0 3.40389 1.38501 2.19531 3.0879 2.19531H26.8526V27.6482V27.6548Z" fill="#11B000"/>
              <path d="M33.7552 0.537425C32.514 -0.175836 30.5916 -0.18244 29.3428 0.537425L6.68311 13.6337C5.44189 14.3469 5.44189 15.5093 6.68311 16.2292L29.305 29.3188C30.5159 30.0189 32.5064 30.0189 33.7174 29.3188L56.3695 16.2226C57.6107 15.5093 57.6107 14.3469 56.3695 13.6271L33.7476 0.537425H33.7552Z" fill="#FFCA00"/>
              <path d="M26.4598 2.20215L6.69116 13.6275C5.44995 14.3408 5.44995 15.5031 6.69116 16.223L26.4522 27.655C36.2684 21.1762 36.276 8.4696 26.4673 2.20215" fill="#25348F"/>
            </svg>
            <h3 className="text-gray-900 text-3xl font-bold">Sua empresa pode estar aqui!</h3>
          </div>
          <div className="flex items-center gap-8">
            <p className="text-gray-600 text-sm max-w-md">
              Junte-se às mais de 500 empresas que confiam no Cebrac e colabore para a empregabilidade!
            </p>
            <button className="flex items-center gap-2 bg-brand-green text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition">
              Seja Parceiro
              <div className="bg-white rounded-full p-1.5">
                <ArrowUpRight className="w-4 h-4 text-brand-green" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-3 gap-6">
          {/* Card 1 - Candidatos Qualificados */}
          <div className="bg-brand-green rounded-3xl p-8 text-white shadow-lg hover:shadow-xl transition">
            <h3 className="text-3xl font-bold mb-4">
              Candidatos<br />Qualificados
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Acesso a uma base de profissionais pré-selecionados e qualificados, com perfis detalhados e competências validadas.
            </p>
          </div>

          {/* Card 2 - Processo Ágil */}
          <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4">
              <span className="text-gray-600 font-bold">02.</span>
            </div>
            <h3 className="text-brand-blue text-3xl font-bold mb-4">
              Processo<br />Ágil
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Publique vagas em minutos e receba candidaturas organizadas. Nossa IA ajuda a filtrar os melhores perfis para sua empresa.
            </p>
          </div>

          {/* Card 3 - Suporte Especializado */}
          <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4">
              <span className="text-gray-600 font-bold">03.</span>
            </div>
            <h3 className="text-brand-blue text-3xl font-bold mb-4">
              Suporte<br />Especializado
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Nossa equipe de especialistas em RH está sempre disponível para ajudar você a encontrar o candidato perfeito.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Entenda o passo a passo de como tudo funciona por aqui!
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              É muito simples, em apenas 3 passos muito rápidos, você e sua empresa já podem começar a receber candidaturas qualificadas, o resto é com a gente!
            </p>
            <button className="flex items-center gap-3 bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition">
              <TrendingUp className="w-5 h-5" />
              Quero cadastrar minha empresa
            </button>
          </div>

          {/* Right Side - Steps */}
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="bg-brand-blue rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Publique sua vaga</h3>
                  <p className="text-white/90 text-sm">
                    Acesso a uma base de profissionais pré-selecionados e qualificados, com perfis detalhados e competências validadas pelo Cebrac.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-700 font-bold">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Receba candidaturas</h3>
                  <p className="text-gray-600 text-sm">
                    Acesso a uma base de profissionais pré-selecionados e qualificados, com perfis detalhados e competências validadas pelo Cebrac.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-700 font-bold">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Contrate o ideal</h3>
                  <p className="text-gray-600 text-sm">
                    Acesso a uma base de profissionais pré-selecionados e qualificados, com perfis detalhados e competências validadas pelo Cebrac.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Background Section */}
      <div className="bg-brand-blue py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Statistics */}
          <div className="flex items-center justify-between mb-16">
            {/* +500 */}
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-3">+500</div>
              <div className="px-6 py-2 border-2 border-white/30 rounded-full">
                <span className="text-white text-sm font-medium">Empresas Parceiras</span>
              </div>
            </div>

            {/* +10k */}
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-3">+10k</div>
              <div className="px-6 py-2 border-2 border-white/30 rounded-full">
                <span className="text-white text-sm font-medium">Profissionais</span>
              </div>
            </div>

            {/* Logo Circle */}
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center border-4 border-brand-blue shadow-xl">
              <svg width="58" height="30" viewBox="0 0 58 30" fill="none">
                <path d="M26.8526 27.6548H3.0879C1.38501 27.6548 0 26.4462 0 24.9602V4.88985C0 3.40389 1.38501 2.19531 3.0879 2.19531H26.8526V27.6482V27.6548Z" fill="#11B000"/>
                <path d="M33.7552 0.537425C32.514 -0.175836 30.5916 -0.18244 29.3428 0.537425L6.68311 13.6337C5.44189 14.3469 5.44189 15.5093 6.68311 16.2292L29.305 29.3188C30.5159 30.0189 32.5064 30.0189 33.7174 29.3188L56.3695 16.2226C57.6107 15.5093 57.6107 14.3469 56.3695 13.6271L33.7476 0.537425H33.7552Z" fill="#FFCA00"/>
                <path d="M26.4598 2.20215L6.69116 13.6275C5.44995 14.3408 5.44995 15.5031 6.69116 16.223L26.4522 27.655C36.2684 21.1762 36.276 8.4696 26.4673 2.20215" fill="#25348F"/>
              </svg>
            </div>

            {/* 95% */}
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-3">95%</div>
              <div className="px-6 py-2 border-2 border-white/30 rounded-full">
                <span className="text-white text-sm font-medium">Taxa de Sucesso</span>
              </div>
            </div>

            {/* 72h */}
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-3">72h</div>
              <div className="px-6 py-2 border-2 border-white/30 rounded-full">
                <span className="text-white text-sm font-medium">Média de Resposta</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Partner Section Again */}
      <section className="bg-white -mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <svg width="58" height="30" viewBox="0 0 58 30" fill="none">
                <path d="M26.8526 27.6548H3.0879C1.38501 27.6548 0 26.4462 0 24.9602V4.88985C0 3.40389 1.38501 2.19531 3.0879 2.19531H26.8526V27.6482V27.6548Z" fill="#11B000"/>
                <path d="M33.7552 0.537425C32.514 -0.175836 30.5916 -0.18244 29.3428 0.537425L6.68311 13.6337C5.44189 14.3469 5.44189 15.5093 6.68311 16.2292L29.305 29.3188C30.5159 30.0189 32.5064 30.0189 33.7174 29.3188L56.3695 16.2226C57.6107 15.5093 57.6107 14.3469 56.3695 13.6271L33.7476 0.537425H33.7552Z" fill="#FFCA00"/>
                <path d="M26.4598 2.20215L6.69116 13.6275C5.44995 14.3408 5.44995 15.5031 6.69116 16.223L26.4522 27.655C36.2684 21.1762 36.276 8.4696 26.4673 2.20215" fill="#25348F"/>
              </svg>
              <h3 className="text-gray-900 text-3xl font-bold">Sua empresa pode estar aqui!</h3>
            </div>
            <div className="flex items-center gap-8">
              <p className="text-gray-600 text-sm max-w-md">
                Junte-se às mais de 500 empresas que confiam no Cebrac e colabore para a empregabilidade!
              </p>
              <button className="flex items-center gap-2 bg-brand-green text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition">
                Seja Parceiro
                <div className="bg-white rounded-full p-1.5">
                  <ArrowUpRight className="w-4 h-4 text-brand-green" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Reused */}
      <footer className="bg-brand-blue rounded-t-[40px] mt-16 px-10 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Link to="/" className="flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
              Home
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </Link>
            <Link to="/vagas" className="flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
              Vagas
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </Link>
            <Link to="/para-empresas" className="flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
              Para empresas
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </Link>
            <a href="#" className="flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
              Sobre
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </a>
            <a href="#" className="flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
              FAQ
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </a>
          </div>

          <div className="border-t border-white/20 pt-6">
            <div className="flex items-center justify-between text-white text-sm">
              <p>©2026, Cebrac Franchising. Todos os direitos reservados.</p>
              <div className="flex gap-8">
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
