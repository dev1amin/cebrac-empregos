import { ArrowUpRight, Check, Target, Users, TrendingUp, Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ParaEmpresas() {
  const [openStep, setOpenStep] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - Same as Vagas page with 2 logos */}
      <nav className="bg-brand-blue rounded-[40px] mx-6 mt-6 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* First Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F800ecce2934e44f78371bc74f86175a9%2Fefd6f08e8c3b4872bd6e38bdef2fc67d"
              alt="Cebrac Logo"
              className="h-6"
            />
          </Link>

          {/* Divider */}
          <div className="h-8 w-px bg-white/30"></div>

          {/* Second Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F800ecce2934e44f78371bc74f86175a9%2Fde0f743057674fdfaef58afdb6bd8369"
              alt="Cebrac Empresa Logo"
              className="h-6"
            />
          </Link>
        </div>
        
        <div className="flex items-center gap-8">
          <Link to="/" className="text-white text-sm font-medium hover:opacity-80 transition">Home</Link>
          <Link to="/vagas" className="text-white text-sm font-medium hover:opacity-80 transition">Vagas</Link>
          <Link to="/para-empresas" className="text-white text-sm font-medium hover:opacity-80 transition">Para empresas</Link>
          <Link to="/sobre" className="text-white text-sm font-medium hover:opacity-80 transition">Sobre</Link>
          <Link to="/faq" className="text-white text-sm font-medium hover:opacity-80 transition">FAQ</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-white hover:opacity-80 transition">
            <Search className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 bg-white text-brand-blue px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-opacity-90 transition">
            Acessar Vagas
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Hero Section - Same size as home balloon */}
      <section className="relative bg-brand-blue rounded-t-[40px] mx-6 mt-6 overflow-hidden h-[100vh] flex flex-col">
        <div className="relative z-10 px-12 flex-1 flex flex-col">
          {/* "Grandes Oportunidades" badge - Top Right */}
          <div className="flex justify-end pt-8">
            <button className="px-6 py-2.5 border-2 border-white/30 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition">
              Grandes Oportunidades
            </button>
          </div>

          {/* Main Hero Content - Inside a card at bottom */}
          <div className="flex-1 flex items-end pb-10">
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-3xl p-10 w-full">
              <h1 className="text-white text-5xl font-bold mb-6">
                Encontre os Melhores Talentos para sua Empresa
              </h1>
              <div className="flex items-start gap-3">
                <p className="text-white/90 text-lg leading-relaxed flex-1">
                  Nossa plataforma conecta sua empresa aos profissionais mais qualificados do mercado. Publique vagas, receba
                  candidaturas qualificadas e encontre o talento ideal para sua equipe.
                </p>
                <button className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-opacity-90 transition">
                  <ArrowUpRight className="w-5 h-5 text-brand-blue" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient bar at bottom - 33% yellow, 33% blue, 33% green */}
        <div className="flex h-3">
          <div className="bg-brand-yellow" style={{width: '33.33%'}}></div>
          <div className="bg-brand-blue" style={{width: '33.33%'}}></div>
          <div className="bg-brand-green" style={{width: '33.34%'}}></div>
        </div>
      </section>

      {/* Company Partner Banner */}
      <section className="mx-6 my-12">
        <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <svg width="58" height="30" viewBox="0 0 58 30" fill="none">
              <path d="M26.8526 27.6548H3.0879C1.38501 27.6548 0 26.4462 0 24.9602V4.88985C0 3.40389 1.38501 2.19531 3.0879 2.19531H26.8526V27.6482V27.6548Z" fill="#51B84C"/>
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

      {/* Features Section - Updated Grid */}
      <section className="mx-6 mb-20">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-2 bg-brand-green rounded-3xl p-8 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-500 ease-out flex flex-col justify-end min-h-[280px] cursor-pointer">
            <h3 className="text-4xl font-bold mb-3">
              Candidatos Qualificados
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Acesso a uma base de profissionais pré-selecionados e qualificados, com perfis detalhados e competências validadas.
            </p>
          </div>

          <div className="group bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-sm hover:bg-brand-green hover:border-brand-green hover:shadow-xl hover:scale-[1.04] transition-all duration-500 ease-out cursor-pointer flex flex-col justify-end min-h-[280px]">
            <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4 transition-all duration-500 group-hover:opacity-0 group-hover:h-0 group-hover:w-0 group-hover:mb-0 group-hover:overflow-hidden">
              <span className="text-gray-600 font-bold">02.</span>
            </div>
            <h3 className="text-brand-blue text-3xl font-bold mb-4 transition-colors duration-500 group-hover:text-white">
              Processo<br />Ágil
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/90">
              Publique vagas em minutos e receba candidaturas organizadas. Nossa IA ajuda a filtrar os melhores perfis para sua empresa.
            </p>
          </div>

          <div className="group bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-sm hover:bg-brand-green hover:border-brand-green hover:shadow-xl hover:scale-[1.04] transition-all duration-500 ease-out cursor-pointer flex flex-col justify-end min-h-[280px]">
            <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4 transition-all duration-500 group-hover:opacity-0 group-hover:h-0 group-hover:w-0 group-hover:mb-0 group-hover:overflow-hidden">
              <span className="text-gray-600 font-bold">03.</span>
            </div>
            <h3 className="text-brand-blue text-3xl font-bold mb-4 transition-colors duration-500 group-hover:text-white">
              Suporte<br />Especializado
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/90">
              Nossa equipe de especialistas em RH está sempre disponível para ajudar você a encontrar o candidato perfeito.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section - Updated with Accordion */}
      <section className="mx-6 mb-20">
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

          {/* Right Side - Steps with Accordion */}
          <div className="space-y-4">
            {[
              { id: 1, title: "Publique sua vaga", desc: "Acesso a uma base de profissionais pré-selecionados e qualificados, com perfis detalhados e competências validadas pelo Cebrac." },
              { id: 2, title: "Receba candidaturas", desc: "Acesso a uma base de profissionais pré-selecionados e qualificados, com perfis detalhados e competências validadas pelo Cebrac." },
              { id: 3, title: "Contrate o ideal", desc: "Acesso a uma base de profissionais pré-selecionados e qualificados, com perfis detalhados e competências validadas pelo Cebrac." },
            ].map((step) => {
              const isOpen = openStep === step.id;
              return (
                <div
                  key={step.id}
                  className="group"
                  onMouseEnter={() => setOpenStep(step.id)}
                >
                  <motion.div
                    className={`rounded-2xl cursor-pointer transition-all duration-500 ease-out ${
                      isOpen ? 'bg-brand-blue scale-[1.02] shadow-lg' : 'bg-gray-100 hover:scale-[1.02]'
                    }`}
                    layout
                  >
                    <button
                      onClick={() => setOpenStep(isOpen ? null : step.id)}
                      className="w-full p-6 flex items-center justify-between"
                    >
                      <h3 className={`text-xl font-bold transition-colors duration-500 ${
                        isOpen ? 'text-white' : 'text-gray-900'
                      }`}>{step.title}</h3>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-500 ${
                        isOpen ? 'bg-white/20' : 'bg-gray-300'
                      }`}>
                        <span className={`font-bold text-sm transition-colors duration-500 ${
                          isOpen ? 'text-white' : 'text-gray-700'
                        }`}>{step.id}</span>
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <p className="text-white/80 text-sm leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section - White Background with Blue Text */}
      <section className="bg-white py-20">
        <div className="mx-6">
          <div className="flex items-center justify-between">
            <a href="https://www.cebrac.com.br/" target="_blank" rel="noopener noreferrer" className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-6xl font-bold text-brand-blue mb-3">+500</div>
              <div className="px-6 py-2 border-2 border-brand-blue rounded-full">
                <span className="text-brand-blue text-sm font-medium">Empresas Parceiras</span>
              </div>
            </a>

            <a href="https://www.cebrac.com.br/" target="_blank" rel="noopener noreferrer" className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-6xl font-bold text-brand-blue mb-3">+10k</div>
              <div className="px-6 py-2 border-2 border-brand-blue rounded-full">
                <span className="text-brand-blue text-sm font-medium">Profissionais</span>
              </div>
            </a>

            <a href="https://www.cebrac.com.br/" target="_blank" rel="noopener noreferrer" className="w-32 h-32 rounded-full bg-white flex items-center justify-center border-4 border-brand-blue shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
              <svg width="58" height="30" viewBox="0 0 58 30" fill="none">
                <path d="M26.8526 27.6548H3.0879C1.38501 27.6548 0 26.4462 0 24.9602V4.88985C0 3.40389 1.38501 2.19531 3.0879 2.19531H26.8526V27.6482V27.6548Z" fill="#51B84C"/>
                <path d="M33.7552 0.537425C32.514 -0.175836 30.5916 -0.18244 29.3428 0.537425L6.68311 13.6337C5.44189 14.3469 5.44189 15.5093 6.68311 16.2292L29.305 29.3188C30.5159 30.0189 32.5064 30.0189 33.7174 29.3188L56.3695 16.2226C57.6107 15.5093 57.6107 14.3469 56.3695 13.6271L33.7476 0.537425H33.7552Z" fill="#FFCA00"/>
                <path d="M26.4598 2.20215L6.69116 13.6275C5.44995 14.3408 5.44995 15.5031 6.69116 16.223L26.4522 27.655C36.2684 21.1762 36.276 8.4696 26.4673 2.20215" fill="#25348F"/>
              </svg>
            </a>

            <a href="https://www.cebrac.com.br/" target="_blank" rel="noopener noreferrer" className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-6xl font-bold text-brand-blue mb-3">95%</div>
              <div className="px-6 py-2 border-2 border-brand-blue rounded-full">
                <span className="text-brand-blue text-sm font-medium">Taxa de Sucesso</span>
              </div>
            </a>

            <a href="https://www.cebrac.com.br/" target="_blank" rel="noopener noreferrer" className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-6xl font-bold text-brand-blue mb-3">72h</div>
              <div className="px-6 py-2 border-2 border-brand-blue rounded-full">
                <span className="text-brand-blue text-sm font-medium">Media de Resposta</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Same as Vagas page */}
      <footer className="bg-brand-blue rounded-t-[25px] mx-6 px-8 pt-16 pb-8 relative mt-16">
        <div>
          {/* Footer Navigation - Half in, half out */}
          <div className="absolute -top-5 left-0 right-0 flex items-center justify-center gap-3">
            <Link to="/para-empresas" className="flex items-center gap-2 bg-brand-green text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
              Para empresas
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </Link>
            <Link to="/" className="flex items-center gap-2 bg-brand-green text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
              Home
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </Link>
            <Link to="/vagas" className="flex items-center gap-2 bg-brand-green text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
              Vagas
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </Link>
            <Link to="/sobre" className="flex items-center gap-2 bg-brand-green text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
              Sobre
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </Link>
            <Link to="/faq" className="flex items-center gap-2 bg-brand-green text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
              FAQ
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </Link>
          </div>

          <div className="border-t border-white/20 pt-6 mt-8">
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
