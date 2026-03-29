import { ArrowUpRight, Search, FileText, TrendingUp, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProfileAnalysisSection from "./ProfileAnalysisSection";

export default function Index() {
  const [activeCard, setActiveCard] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const statsCards = [
    { num: "01.", value: "72h", title: "Tempo medio para conseguir emprego", desc: "Nossos alunos conseguem colocacao profissional em ate 3 dias." },
    { num: "02.", value: "94%", title: "Calculo da taxa de empregabilidade", desc: "Quase todos os nossos formandos conseguem emprego." },
    { num: "03.", value: "+45%", title: "Crescimento no salario medio", desc: "Aumento significativo apos conclusao." },
    { num: "04.", value: "500+", title: "Empresas parceiras no Cebrac Empresa", desc: "" },
  ];

  return (
    <div className="min-h-screen bg-white pt-[18px] px-4 sm:px-6 md:px-10 lg:px-[100px] pb-0 overflow-x-hidden flex flex-col" style={{zoom: 0.7}}>
      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-[100vh] lg:h-[120vh]">
        <div className="relative rounded-[25px] overflow-hidden h-full flex flex-col">
          <div className="absolute inset-0">
            <video
              src="https://i.imgur.com/Hq9YdTA.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[hsl(231,59%,35%)] via-[hsl(231,59%,35%,0.7)] to-transparent"></div>

          <nav className="relative z-10 mx-4 sm:mx-6 lg:mx-10 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mt-[20px] sm:mt-[30px]">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <img
                  src="/images/cebrac-logo-white.png"
                  alt="Cebrac Logo"
                  className="h-5 sm:h-6"
                />
              </div>
              <div className="h-8 w-px bg-white/30 hidden sm:block"></div>
              <div className="hidden sm:flex items-center gap-2">
                <img
                  src="/image.png"
                  alt="Cebrac Empresa Logo"
                  className="h-6"
                />
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-white text-sm font-medium hover:opacity-80 transition">Home</Link>
              <Link to="/vagas" className="text-white text-sm font-medium hover:opacity-80 transition">Vagas</Link>
              <Link to="/para-empresas" className="text-white text-sm font-medium hover:opacity-80 transition">Para empresas</Link>
              <Link to="/sobre" className="text-white text-sm font-medium hover:opacity-80 transition">Sobre</Link>
              <Link to="/faq" className="text-white text-sm font-medium hover:opacity-80 transition">FAQ</Link>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <button className="text-white hover:opacity-80 transition hidden sm:block">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden sm:flex items-center gap-2 bg-white text-brand-blue px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm hover:bg-opacity-90 transition">
                Acessar Vagas
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                className="lg:hidden text-white p-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden relative z-20 mx-4 sm:mx-6 mt-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4">
              <div className="flex flex-col gap-3">
                <Link to="/" className="text-white text-sm font-medium hover:opacity-80 transition" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/vagas" className="text-white text-sm font-medium hover:opacity-80 transition" onClick={() => setMobileMenuOpen(false)}>Vagas</Link>
                <Link to="/para-empresas" className="text-white text-sm font-medium hover:opacity-80 transition" onClick={() => setMobileMenuOpen(false)}>Para empresas</Link>
                <Link to="/sobre" className="text-white text-sm font-medium hover:opacity-80 transition" onClick={() => setMobileMenuOpen(false)}>Sobre</Link>
                <Link to="/faq" className="text-white text-sm font-medium hover:opacity-80 transition" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
                <button className="flex items-center gap-2 bg-white text-brand-blue px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-opacity-90 transition w-fit mt-2">
                  Acessar Vagas
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          <div className="relative z-10 px-4 sm:px-6 lg:px-10 mt-auto pb-6 sm:pb-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-0">
              <div className="max-w-2xl">
                <div className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-4 sm:mb-6">
                  <span className="text-white text-xs sm:text-sm">Cebrac Talentos</span>
                </div>

                <h1 className="text-white text-[clamp(28px,4vw,62px)] font-light leading-[1.1] tracking-tight">
                  Diariamente,
                  <br />
                  conectamos talentos
                  <br />
                  com as melhores
                  <br />
                  <span className="text-brand-yellow font-extrabold">
                    oportunidades
                  </span>
                </h1>
              </div>

              <div className="max-w-sm pb-2">
                <p className="text-white text-left lg:text-right text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                  Mais de 5.000 vagas disponíveis e cursos profissionalizantes
                  para impulsionar sua carreira. Junte-se a milhares de
                  profissionais que encontraram seu futuro conosco.
                </p>
                <div className="flex lg:justify-end">
                  <button className="flex items-center gap-4 sm:gap-8 bg-white text-brand-gray-text px-4 sm:px-5 py-3 sm:py-3.5 rounded-[35px] font-semibold hover:shadow-lg transition text-sm sm:text-base">
                    Faça agora seu teste vocacional
                    <div className="bg-brand-blue rounded-full p-1.5">
                      <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[72%] z-20 pointer-events-none hidden sm:block">
          <div className="relative w-[420px] h-[100px]">
            <svg
              viewBox="0 0 420 100"
              className="w-full h-full block"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0
                   C78 0 105 12 132 34
                   C160 57 180 100 210 100
                   C240 100 260 57 288 34
                   C315 12 342 0 420 0
                   L420 0
                   L0 0Z"
                fill="hsl(231, 59%, 35%)"
              />
            </svg>

            <div className="absolute top-[10px] left-1/2 -translate-x-1/2">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                <img
                  src="/images/cebrac-icon.png"
                  alt="Cebrac Logo"
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="pt-16 sm:pt-28 pb-12 sm:pb-20">
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center">
            <a href="https://www.cebrac.com.br/" target="_blank" rel="noopener noreferrer" className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <h3 className="text-brand-blue-dark text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-4 tracking-tight">
                5.172
              </h3>
              <div className="border border-brand-blue-dark rounded-full px-4 sm:px-6 py-1.5 sm:py-2 inline-block">
                <p className="text-brand-blue-dark text-xs sm:text-sm whitespace-nowrap">Vagas Ativas</p>
              </div>
            </a>

            <a href="https://www.cebrac.com.br/" target="_blank" rel="noopener noreferrer" className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <h3 className="text-brand-blue-dark text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-4 tracking-tight">
                +3.9k
              </h3>
              <div className="border border-brand-blue-dark rounded-full px-4 sm:px-6 py-1.5 sm:py-2 inline-block">
                <p className="text-brand-blue-dark text-xs sm:text-sm whitespace-nowrap">Curriculos</p>
              </div>
            </a>

            <a href="https://www.cebrac.com.br/" target="_blank" rel="noopener noreferrer" className="text-center flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer col-span-2 sm:col-span-1">
              <p className="text-brand-blue-dark text-base sm:text-lg font-extrabold max-w-[190px] leading-tight">
                A melhor escola profissionalizante{" "}
                <span className="font-extrabold">da America Latina!</span>
              </p>
            </a>

            <a href="https://www.cebrac.com.br/" target="_blank" rel="noopener noreferrer" className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <h3 className="text-brand-blue-dark text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-4 tracking-tight">
                +13.5k
              </h3>
              <div className="border border-brand-blue-dark rounded-full px-4 sm:px-6 py-1.5 sm:py-2 inline-block">
                <p className="text-brand-blue-dark text-xs sm:text-sm whitespace-nowrap">
                  Empresas Parceiras
                </p>
              </div>
            </a>

            <a href="https://www.cebrac.com.br/" target="_blank" rel="noopener noreferrer" className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <h3 className="text-brand-blue-dark text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-4 tracking-tight">
                +21k
              </h3>
              <div className="border border-brand-blue-dark rounded-full px-4 sm:px-6 py-1.5 sm:py-2 inline-block">
                <p className="text-brand-blue-dark text-xs sm:text-sm whitespace-nowrap">Contratacoes</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Profile Analysis Section */}
      <ProfileAnalysisSection />

      {/* Company Logos Section */}
      <section className="pb-12 sm:pb-20">
        <div>
          <div className="bg-white rounded-[25px] py-6 sm:py-8">
            <div className="flex items-center justify-center gap-3 sm:gap-6 px-4 sm:px-8 lg:px-16 flex-wrap lg:flex-nowrap">
              <div className="w-[80px] h-[80px] sm:w-[110px] sm:h-[100px] lg:w-[138px] lg:h-[120px] bg-brand-gray rounded-full flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/partner-agrale.png"
                  alt="Agrale"
                  className="w-12 sm:w-16 lg:w-20 h-auto"
                />
              </div>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 hidden lg:block">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#25348F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div className="w-[80px] h-[80px] sm:w-[110px] sm:h-[100px] lg:w-[138px] lg:h-[120px] bg-brand-gray rounded-full flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/partner-ambev.png"
                  alt="Ambev"
                  className="w-12 sm:w-16 lg:w-20 h-auto"
                />
              </div>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 hidden lg:block">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#25348F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div className="w-[80px] h-[80px] sm:w-[110px] sm:h-[100px] lg:w-[138px] lg:h-[120px] bg-brand-gray rounded-full flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/partner-3.png"
                  alt="Company 3"
                  className="w-12 sm:w-16 lg:w-20 h-auto"
                />
              </div>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 hidden lg:block">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#25348F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div className="w-[80px] h-[80px] sm:w-[110px] sm:h-[100px] lg:w-[138px] lg:h-[120px] bg-brand-gray rounded-full flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/partner-4.png"
                  alt="Company 4"
                  className="w-10 sm:w-12 lg:w-16 h-auto"
                />
              </div>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 hidden lg:block">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#25348F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div className="w-[80px] h-[80px] sm:w-[110px] sm:h-[100px] lg:w-[138px] lg:h-[120px] bg-brand-gray rounded-full flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/partner-5.png"
                  alt="Company 5"
                  className="w-10 sm:w-12 lg:w-16 h-auto"
                />
              </div>
            </div>
          </div>

          {/* Company CTA */}
          <div className="bg-brand-gray rounded-[25px] p-4 sm:p-6 mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
            <div className="flex items-center gap-4 sm:gap-6">
              <svg width="58" height="30" viewBox="0 0 58 30" fill="none" className="flex-shrink-0 hidden sm:block">
                <path d="M26.8526 27.6548H3.0879C1.38501 27.6548 0 26.4462 0 24.9602V4.88985C0 3.40389 1.38501 2.19531 3.0879 2.19531H26.8526V27.6482V27.6548Z" fill="#51B84C" />
                <path d="M33.7552 0.537425C32.514 -0.175836 30.5916 -0.18244 29.3428 0.537425L6.68311 13.6337C5.44189 14.3469 5.44189 15.5093 6.68311 16.2292L29.305 29.3188C30.5159 30.0189 32.5064 30.0189 33.7174 29.3188L56.3695 16.2226C57.6107 15.5093 57.6107 14.3469 56.3695 13.6271L33.7476 0.537425H33.7552Z" fill="#FFCA00" />
                <path d="M26.4598 2.20215L6.69116 13.6275C5.44995 14.3408 5.44995 15.5031 6.69116 16.223L26.4522 27.655C36.2684 21.1762 36.276 8.4696 26.4673 2.20215" fill="#25348F" />
              </svg>
              <h3 className="text-brand-gray-text text-xl sm:text-2xl lg:text-[35px] font-extrabold leading-tight tracking-tight">
                Sua empresa pode estar aqui!
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <p className="text-brand-gray-text text-sm max-w-xs">
                Junte-se às mais de 500 empresas que confiam no Cebrac e
                colabore para a empregabilidade!
              </p>
              <button className="flex items-center gap-2 bg-brand-green text-white px-6 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap flex-shrink-0">
                Seja Parceiro
                <div className="bg-white rounded-full p-1">
                  <ArrowUpRight className="w-3 h-3 text-brand-green" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="pb-12 sm:pb-20">
        <div>
          <div className="bg-brand-gray rounded-b-[25px] pb-0 pt-10 sm:pt-16 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between mb-8 sm:mb-12 gap-4 sm:gap-8">
              <div>
                <h2 className="text-brand-gray-text text-2xl sm:text-[35px] font-extrabold leading-tight tracking-tight max-w-md mb-4">
                  Descubra como funciona a nossa plataforma
                </h2>
              </div>
              <div>
                <p className="text-brand-gray-text text-sm max-w-md">
                  Três passos simples para conquistar a sua próxima oportunidade
                  profissional com maior eficiência.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-0">
              {/* Left - Steps */}
              <div className="space-y-4 pb-10 sm:pb-16">
                <div className="bg-white border-2 border-brand-green rounded-[25px] p-4 sm:p-6 shadow-sm">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                      <div className="bg-brand-green text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold">1</div>
                      <div className="bg-brand-green-light border border-brand-green rounded-xl p-2 sm:p-3">
                        <Search className="w-4 sm:w-5 h-4 sm:h-5 text-brand-green" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-brand-green text-base sm:text-lg font-extrabold mb-2 tracking-tight">
                        Selecione sua vaga ideal
                      </h3>
                      <p className="text-brand-gray-text text-xs sm:text-sm leading-relaxed">
                        Navegue por milhares de oportunidades filtradas
                        especialmente para seu perfil. Nossa plataforma usa
                        inteligência artificial para recomendar as vagas mais
                        compatíveis com sua experiência e objetivos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-brand-gray-border rounded-[25px] p-4 sm:p-6 shadow-sm">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                      <div className="bg-brand-gray-border text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold">2</div>
                      <div className="bg-gray-100 border border-brand-gray-border rounded-xl p-2 sm:p-3">
                        <FileText className="w-4 sm:w-5 h-4 sm:h-5 text-brand-gray-border" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-brand-gray-border text-base sm:text-lg font-extrabold tracking-tight">
                        Análise detalhada do seu currículo
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-brand-gray-border rounded-[25px] p-4 sm:p-6 shadow-sm">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                      <div className="bg-brand-gray-border text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold">3</div>
                      <div className="bg-gray-100 border border-brand-gray-border rounded-xl p-2 sm:p-3">
                        <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-brand-gray-border" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-brand-gray-border text-base sm:text-lg font-extrabold tracking-tight">
                        Consiga o emprego dos seus sonhos
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Job Cards Preview */}
              <div className="space-y-4 pb-10 sm:pb-16">
                <div className="bg-brand-green-light border border-brand-green rounded-[20px] p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <div className="flex-1">
                      <h3 className="text-brand-blue font-bold text-sm sm:text-base mb-1">Desenvolvedor Frontend React</h3>
                      <p className="text-gray-500 text-xs">TechCorp</p>
                    </div>
                    <span className="bg-brand-green text-white text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">95% match</span>
                  </div>
                  <p className="text-brand-green text-sm font-semibold mb-3">R$8.000 - R$12.000</p>
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brand-green text-xs font-medium">Perfeito para seu perfil</span>
                  </div>
                  <div className="bg-white/60 rounded-full h-2">
                    <div className="bg-brand-green h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-[20px] p-4 sm:p-5 shadow-sm">
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <div className="flex-1">
                      <h3 className="text-brand-blue font-bold text-sm sm:text-base mb-1">UX/UI Designer Senior</h3>
                      <p className="text-gray-500 text-xs">DesignStudio</p>
                    </div>
                    <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">90% match</span>
                  </div>
                  <p className="text-brand-green text-sm font-semibold">R$6.000 - R$9.000</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-[20px] p-4 sm:p-5 shadow-sm">
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <div className="flex-1">
                      <h3 className="text-brand-blue font-bold text-sm sm:text-base mb-1">Product Manager</h3>
                      <p className="text-gray-500 text-xs">StartupXYZ</p>
                    </div>
                    <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">85% match</span>
                  </div>
                  <p className="text-brand-green text-sm font-semibold">R$10.000 - R$15.000</p>
                </div>
              </div>
            </div>

            {/* Color bars at very bottom */}
            <div className="flex -mx-4 sm:-mx-8 lg:-mx-16">
              <div className="h-2 bg-brand-yellow flex-1"></div>
              <div className="h-2 bg-brand-blue flex-1"></div>
              <div className="h-2 bg-brand-green flex-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Development Section */}
      <section className="pb-12 sm:pb-20">
        <div className="relative">
          <div className="absolute -left-16 bottom-0 w-32 pointer-events-none overflow-hidden hidden lg:block" style={{top: '-130px'}}>
            <div className="absolute top-10 -left-10 w-[300px] h-px bg-gray-200 origin-top-left rotate-[55deg]"></div>
            <div className="absolute top-40 -left-10 w-[300px] h-px bg-gray-200 origin-top-left rotate-[55deg]"></div>
          </div>
          <div className="absolute -right-16 bottom-0 w-32 pointer-events-none overflow-hidden hidden lg:block" style={{top: '-130px'}}>
            <div className="absolute top-10 -right-10 w-[300px] h-px bg-gray-200 origin-top-right -rotate-[55deg]"></div>
            <div className="absolute top-40 -right-10 w-[300px] h-px bg-gray-200 origin-top-right -rotate-[55deg]"></div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-tight">
              <span className="font-medium text-gray-600">Desenvolvido para</span>{" "}
              <span className="font-extrabold text-gray-900">profissionais</span>
              <br />
              <span className="font-extrabold text-gray-900">modernos</span>
            </h2>
            <p className="text-brand-gray-text text-sm max-w-lg mx-auto mb-8 sm:mb-12 px-4">
              O Cebrac forma profissionais com foco, prática e qualidade, prontos
              para encarar os desafios do mercado de trabalho.
            </p>

            <button className="bg-brand-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold mb-10 sm:mb-16 flex items-center gap-3 sm:gap-4 mx-auto text-sm sm:text-base">
              <div className="bg-white rounded-full p-1.5 sm:p-2">
                <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-brand-blue" />
              </div>
              Soluções completas para sua carreira
            </button>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
              {statsCards.map((card, index) => {
                const isActive = activeCard === index;
                return (
                  <div
                    key={card.num}
                    onMouseEnter={() => setActiveCard(index)}
                    onClick={() => setActiveCard(index)}
                    className={`rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-500 ease-out ${
                      isActive
                        ? "bg-brand-blue text-white shadow-xl scale-[1.04]"
                        : "bg-brand-gray border border-brand-blue text-brand-gray-text"
                    }`}
                  >
                    <div className={`border rounded-full w-10 h-10 flex items-center justify-center mb-8 sm:mb-12 transition-colors duration-500 ${
                      isActive ? "border-white" : "border-brand-gray-text"
                    }`}>
                      <span className={`text-sm font-medium transition-colors duration-500 ${
                        isActive ? "text-white" : ""
                      }`}>{card.num}</span>
                    </div>
                    <div className="text-left">
                      <h3 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-500 ${
                        isActive ? "text-white" : "text-brand-blue"
                      }`}>{card.value}</h3>
                      <p className={`text-sm font-bold mb-2 transition-colors duration-500 ${
                        isActive ? "text-white" : ""
                      }`}>{card.title}</p>
                      {card.desc && (
                        <p className={`text-xs transition-colors duration-500 ${
                          isActive ? "text-white/90" : ""
                        }`}>{card.desc}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Learning Paths */}
            <div className="bg-brand-gray rounded-2xl p-6 sm:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="flex flex-col items-start">
                  <div className="w-full mb-4">
                    <img
                      src="/images/learning-accelerated.png"
                      alt="Aprendizado Acelerado"
                      className="w-full h-24 sm:h-32 object-contain"
                    />
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Metodologia otimizada</p>
                  <h4 className="text-brand-blue text-xl sm:text-[28px] font-bold leading-tight tracking-tight">
                    Aprendizado Acelerado
                  </h4>
                </div>

                <div className="flex flex-col items-start">
                  <div className="w-full mb-4">
                    <img
                      src="/images/learning-market.png"
                      alt="Foco no Mercado"
                      className="w-full h-24 sm:h-32 object-contain"
                    />
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Currículo desenvolvido de verdade</p>
                  <h4 className="text-brand-blue text-xl sm:text-[28px] font-bold leading-tight tracking-tight">
                    Foco no Mercado
                  </h4>
                </div>

                <div className="flex flex-col items-start">
                  <div className="w-full mb-4">
                    <img
                      src="/images/learning-mentorship.png"
                      alt="Mentoria Personalizada"
                      className="w-full h-24 sm:h-32 object-contain"
                    />
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Acompanhamento individual</p>
                  <h4 className="text-brand-blue text-xl sm:text-[28px] font-bold leading-tight tracking-tight">
                    Mentoria Personalizada
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pb-12 sm:pb-20">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                Veja tudo o que nossos mais de{" "}
                <span className="font-extrabold">2 milhões de alunos</span>{" "}
                dizem!
              </h2>
              <p className="text-brand-gray-text text-sm">
                Histórias reais de profissionais que encontraram suas
                oportunidades ideais através do Cebrac Empregos. Venha você
                também mudar de vida com seu novo emprego.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-brand-gray rounded-2xl p-4 sm:p-6 flex gap-4">
                <div className="flex-1">
                  <p className="text-xs text-brand-gray-text mb-3 leading-relaxed">
                    "Mivara made our honeymoon unforgettable. From the
                    ocean-view villa to the candlelit dinner on the beach, every
                    moment felt personal and thoughtful. We can't wait to
                    return."
                  </p>
                  <p className="text-xs font-semibold text-brand-gray-text">
                    João Oliveira, Fortaleza/CE
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-300 flex-shrink-0"></div>
              </div>

              <div className="bg-brand-gray rounded-2xl p-4 sm:p-6 flex gap-4">
                <div className="flex-1">
                  <p className="text-xs text-brand-gray-text mb-3 leading-relaxed">
                    "It's rare to find a place where you can completely
                    disconnect but Mivara gave us that. The spa was beyond
                    amazing, and every part of the resort felt like a peaceful
                    retreat."
                  </p>
                  <p className="text-xs font-semibold text-brand-gray-text">
                    Nathalia Pereira, Londrina/PR
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-300 flex-shrink-0"></div>
              </div>

              <div className="bg-brand-gray rounded-2xl p-4 sm:p-6 flex gap-4">
                <div className="flex-1">
                  <p className="text-xs text-brand-gray-text mb-3 leading-relaxed">
                    "Mivara exceeded all our expectations! The staff was
                    incredibly friendly, and the excursions offered were
                    breathtaking. We truly felt like VIPs throughout our stay."
                  </p>
                  <p className="text-xs font-semibold text-brand-gray-text">
                    Pedro Afonso, Curitiba/PR
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-300 flex-shrink-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-12 sm:pb-20">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                Está pronto para transformar sua carreira?
              </h2>
              <p className="text-brand-gray-text text-sm mb-6 sm:mb-8">
                Junte-se a milhares de profissionais que já encontraram suas
                oportunidades ideias através do Cebrac. Cadastre-se
                gratuitamente e tenha acesso a vagas exclusivas.
              </p>
              <button className="flex items-center gap-4 bg-brand-blue text-white px-6 sm:px-8 py-3 rounded-full font-semibold">
                Cadastrar Currículo
                <div className="bg-white rounded-full p-2">
                  <TrendingUp className="w-4 h-4 text-brand-blue" />
                </div>
              </button>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white border-2 border-brand-green rounded-[25px] p-4 sm:p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-green-light border border-brand-green rounded-xl p-2 sm:p-3 flex-shrink-0">
                    <Search className="w-4 sm:w-5 h-4 sm:h-5 text-brand-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-brand-green text-base sm:text-lg font-extrabold mb-1 tracking-tight">
                      Rede de Empresas
                    </h3>
                    <p className="text-brand-gray-text text-sm">
                      Conecte-se com mais de 13.500 empresas parceiras.
                    </p>
                  </div>
                  <div className="bg-brand-green-light rounded-full p-2">
                    <ArrowUpRight className="w-4 h-4 text-brand-green" />
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-brand-blue rounded-[25px] p-4 sm:p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 border border-brand-blue rounded-xl p-2 sm:p-3 flex-shrink-0">
                    <FileText className="w-4 sm:w-5 h-4 sm:h-5 text-brand-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-brand-blue text-base sm:text-lg font-extrabold mb-1 tracking-tight">
                      Qualificação Profissional
                    </h3>
                    <p className="text-brand-gray-text text-sm">
                      Cursos reconhecidos no mercado e com metodologia híbrida
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-full p-2">
                    <ArrowUpRight className="w-4 h-4 text-brand-blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-blue rounded-t-[25px] px-4 sm:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8 relative mt-auto">
        <div>
          <div className="absolute -top-5 left-0 right-0 flex items-center justify-center gap-2 sm:gap-3 flex-wrap px-4">
            <Link to="/para-empresas" className="flex items-center gap-2 bg-brand-green text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:opacity-90 transition">
              Para empresas
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </Link>
            <Link to="/" className="flex items-center gap-2 bg-brand-green text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:opacity-90 transition">
              Home
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </Link>
            <Link to="/vagas" className="flex items-center gap-2 bg-brand-green text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:opacity-90 transition">
              Vagas
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </Link>
            <Link to="/sobre" className="flex items-center gap-2 bg-brand-green text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:opacity-90 transition">
              Sobre
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </Link>
            <Link to="/faq" className="flex items-center gap-2 bg-brand-green text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:opacity-90 transition">
              FAQ
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
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
