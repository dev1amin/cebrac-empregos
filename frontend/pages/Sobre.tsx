import { ArrowUpRight, Target, Users, TrendingUp, Search, Settings, Briefcase, Eye, Heart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sobre() {
  const [activeValue, setActiveValue] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const valueCards = [
    { id: 0, title: "Nossa Missao", desc: "Capacitar profissionais com conhecimentos praticos e atualizados, preparando-os para os desafios do mercado de trabalho moderno.", icon: Target },
    { id: 1, title: "Nossa Visao", desc: "Ser referencia nacional em educacao profissional e empregabilidade.", icon: Eye },
    { id: 2, title: "Nossos Valores", desc: "Qualidade, inovacao, etica e compromisso com resultados.", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 md:px-10 lg:px-[100px]" style={{zoom: 0.7}}>
      <nav className="bg-brand-blue rounded-[25px] sm:rounded-[40px] mx-0 sm:mx-6 mt-4 sm:mt-6 px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/cebrac-logo-white.png"
              alt="Cebrac Logo"
              className="h-5 sm:h-6"
            />
          </Link>
          <div className="h-8 w-px bg-white/30 hidden sm:block"></div>
          <Link to="/" className="hidden sm:flex items-center gap-2">
            <img
              src="/image.png"
              alt="Cebrac Empresa Logo"
              className="h-6"
            />
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

      {mobileMenuOpen && (
        <div className="lg:hidden mx-0 sm:mx-6 mt-2 rounded-2xl bg-brand-blue/95 backdrop-blur-md border border-white/20 p-4">
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

      <section className="relative rounded-t-[25px] sm:rounded-t-[40px] mx-0 sm:mx-6 mt-4 sm:mt-6 overflow-hidden h-[60vh] sm:h-[80vh] lg:h-[100vh] flex flex-col">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover rounded-t-[25px] sm:rounded-t-[40px]">
          <source src="https://i.imgur.com/F7UMNBg.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 px-4 sm:px-8 lg:px-12 flex-1 flex flex-col">
          <div className="flex justify-end pt-4 sm:pt-8">
            <button className="px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-white/30 text-white rounded-full font-semibold text-xs sm:text-sm hover:bg-white/10 transition">
              Grandes Oportunidades
            </button>
          </div>

          <div className="flex-1 flex items-end pb-6 sm:pb-10">
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-10 w-full">
              <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6">
                Busca pela Transformacao de Vidas e Carreiras
              </h1>
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <p className="text-white/90 text-sm sm:text-lg leading-relaxed flex-1">
                  Ha mais de 30 anos, o CEBRAC e referencia em educacao profissional, conectando talentos as melhores
                  oportunidades do mercado de trabalho brasileiro.
                </p>
                <button className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center hover:bg-opacity-90 transition">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-2 sm:h-3 relative z-[999]" style={{zIndex: '999'}}>
          <div className="bg-brand-yellow" style={{width: '33.33%'}}></div>
          <div className="bg-brand-blue" style={{width: '33.33%'}}></div>
          <div className="bg-brand-green" style={{width: '33.34%'}}></div>
        </div>
      </section>

      <section className="mx-0 sm:mx-6 my-8 sm:my-12">
        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <svg width="58" height="30" viewBox="0 0 58 30" fill="none" className="flex-shrink-0 hidden sm:block">
              <path d="M26.8526 27.6548H3.0879C1.38501 27.6548 0 26.4462 0 24.9602V4.88985C0 3.40389 1.38501 2.19531 3.0879 2.19531H26.8526V27.6482V27.6548Z" fill="#11B000"/>
              <path d="M33.7552 0.537425C32.514 -0.175836 30.5916 -0.18244 29.3428 0.537425L6.68311 13.6337C5.44189 14.3469 5.44189 15.5093 6.68311 16.2292L29.305 29.3188C30.5159 30.0189 32.5064 30.0189 33.7174 29.3188L56.3695 16.2226C57.6107 15.5093 57.6107 14.3469 56.3695 13.6271L33.7476 0.537425H33.7552Z" fill="#FFCA00"/>
              <path d="M26.4598 2.20215L6.69116 13.6275C5.44995 14.3408 5.44995 15.5031 6.69116 16.223L26.4522 27.655C36.2684 21.1762 36.276 8.4696 26.4673 2.20215" fill="#25348F"/>
            </svg>
            <h3 className="text-gray-900 text-xl sm:text-2xl lg:text-3xl font-bold">Sua empresa pode estar aqui!</h3>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <p className="text-gray-600 text-sm max-w-md">
              Junte-se as mais de 500 empresas que confiam no Cebrac e colabore para a empregabilidade!
            </p>
            <button className="flex items-center gap-2 bg-brand-green text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:opacity-90 transition whitespace-nowrap flex-shrink-0">
              Seja Parceiro
              <div className="bg-white rounded-full p-1.5">
                <ArrowUpRight className="w-4 h-4 text-brand-green" />
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="mx-0 sm:mx-6 mb-12 sm:mb-20">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:h-[200px]">
          {valueCards.map((card) => {
            const isActive = activeValue === card.id;
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveValue(card.id)}
                onClick={() => setActiveValue(card.id)}
                className={`rounded-2xl sm:rounded-3xl cursor-pointer overflow-hidden transition-all duration-500 ease-out ${
                  isActive
                    ? "lg:flex-[3] bg-brand-blue text-white shadow-xl p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
                    : "lg:flex-1 bg-gray-100 p-4 sm:p-6 flex flex-col justify-center"
                }`}
              >
                <div className={`transition-all duration-500 ${isActive ? "flex-1" : ""}`}>
                  <h3 className={`font-bold transition-all duration-500 ${
                    isActive ? "text-2xl sm:text-4xl text-white mb-2 sm:mb-4" : "text-lg sm:text-xl text-brand-blue mb-2 sm:mb-3"
                  }`}>{card.title}</h3>
                  <p className={`leading-relaxed transition-all duration-500 ${
                    isActive ? "text-sm sm:text-base text-white/90" : "text-xs sm:text-sm text-gray-600"
                  }`}>{card.desc}</p>
                </div>
                <div className={`flex-shrink-0 rounded-full bg-yellow-400 flex items-center justify-center transition-all duration-500 ${
                  isActive ? "w-16 h-16 sm:w-24 sm:h-24 opacity-100" : "w-0 h-0 opacity-0"
                }`}>
                  <Icon className={`text-brand-blue transition-all duration-500 ${
                    isActive ? "w-8 h-8 sm:w-12 sm:h-12" : "w-0 h-0"
                  }`} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-0 sm:mx-6 lg:mx-24 mb-12 sm:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Nossa Historia</h2>
            <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              Fundado em 1992, o CEBRAC nasceu com o proposito de democratizar o acesso a educacao profissional de qualidade.
              Ao longo de tres decadas, formamos mais de 500.000 profissionais em diversas areas. Nossa trajetoria e marcada pela
              constante evolucao e adaptacao as demandas do mercado. Pioneiros em metodologias inovadoras, sempre mantivemos o
              foco na empregabilidade e no desenvolvimento integral dos nossos alunos.
            </p>
            <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              <span className="font-bold">Hoje, com presenca em todo o territorio nacional</span>, continuamos nossa missao de
              transformar vidas atraves da educacao, conectando talentos as melhores oportunidades profissionais.
            </p>
            <button className="flex items-center gap-3 bg-brand-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:opacity-90 transition text-sm sm:text-base">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
              Quero cadastrar minha empresa
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-brand-blue rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/30 flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-white text-[10px] sm:text-xs font-bold">01</span>
              </div>
              <div className="text-3xl sm:text-5xl font-bold mb-1 sm:mb-2">30+</div>
              <div className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Anos de Experiencia</div>
              <p className="text-white/80 text-[10px] sm:text-xs">
                Muito orgulho do caminho trilhado ate aqui, crescendo base e conquistas.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300 flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-gray-600 text-[10px] sm:text-xs font-bold">02</span>
              </div>
              <div className="text-3xl sm:text-5xl font-bold text-brand-blue mb-1 sm:mb-2">2M+</div>
              <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-1 sm:mb-2">Profissionais Formados</div>
              <p className="text-gray-600 text-[10px] sm:text-xs">
                Acumulamos mais de 2 milhoes de alunos formados em todo o territorio nacional.
              </p>
            </div>

            <div className="bg-brand-green rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/30 flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-white text-[10px] sm:text-xs font-bold">03</span>
              </div>
              <div className="text-3xl sm:text-5xl font-bold mb-1 sm:mb-2">94%</div>
              <div className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Taxa de Empregabilidade</div>
              <p className="text-white/90 text-[10px] sm:text-xs">
                Garantir as qualidade nacional ampliando suas oportunidades.
              </p>
            </div>

            <div className="bg-yellow-400 rounded-2xl sm:rounded-3xl p-5 sm:p-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-900/30 flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-gray-900 text-[10px] sm:text-xs font-bold">04</span>
              </div>
              <div className="text-3xl sm:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">1000+</div>
              <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-1 sm:mb-2">Empresas Parceiras</div>
              <p className="text-gray-900/80 text-[10px] sm:text-xs">
                Traz grandes ideias de crescimento e de fundacao de mercado continua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-0 sm:mx-6 mb-12 sm:mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <div className="bg-gray-200 rounded-2xl sm:rounded-3xl aspect-video overflow-hidden">
            <img src="https://i.imgur.com/SOIWX18.png" alt="Gallery 1" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 rounded-2xl sm:rounded-3xl aspect-video overflow-hidden">
            <img src="https://i.imgur.com/2LoYQr8.png" alt="Gallery 2" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 rounded-2xl sm:rounded-3xl aspect-video overflow-hidden">
            <img src="https://i.imgur.com/Gfj5SM0_d.webp?maxwidth=760&fidelity=grand" alt="Gallery 3" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 rounded-2xl sm:rounded-3xl aspect-video overflow-hidden">
            <img src="https://i.imgur.com/mkO0MQF_d.webp?maxwidth=760&fidelity=grand" alt="Gallery 4" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-0 sm:mx-6 mb-12 sm:mb-20">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Descubra que torna o<br className="hidden sm:block" />Cebrac uma rede unica!
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg max-w-2xl">
            Combinamos tradicao educacional com inovacao tecnologica para oferecer a melhor experiencia de aprendizado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="bg-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Foco na Empregabilidade</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Cursos desenvolvidos em parceria com empresas para atender demandas reais.
            </p>
          </div>

          <div className="bg-brand-green rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center">
              <Settings className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Metodologia Pratica</h3>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                Aprendizado baseado em projetos reais e situacoes do mercado de trabalho.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Certificacao Reconhecida</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Certificados valorizados pelo mercado e reconhecidos nacionalmente.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-brand-blue rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center">
              <Briefcase className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Acompanhamento Personalizado</h3>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                Mentoria individual e suporte continuo durante toda a jornada.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Inovacao Constante</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Sempre atualizados com as ultimas tendencias e tecnologias do mercado.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Resultados Comprovados</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Historico solido de sucesso na colocacao profissional dos nossos alunos.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-0 sm:mx-6 mb-12 sm:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Pronto para Transformar sua Carreira?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Junte-se a milhares de profissionais que ja encontraram suas oportunidades ideais atraves do Cebrac.
              Cadastre-se gratuitamente e tenha acesso a vagas exclusivas.
            </p>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-between bg-brand-green text-white px-4 sm:px-8 py-4 sm:py-5 rounded-2xl font-bold hover:opacity-90 transition group">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Search className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-base sm:text-lg">Explorar oportunidades</div>
                  <div className="text-white/80 text-xs sm:text-sm">Conecte-se com mais de 13.500 empresas parceiras.</div>
                </div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition flex-shrink-0">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green" />
              </div>
            </button>

            <button className="w-full flex items-center justify-between bg-white border-2 border-gray-100 text-brand-blue px-4 sm:px-8 py-4 sm:py-5 rounded-2xl font-bold hover:shadow-md transition group">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-bold text-base sm:text-lg">Criar meu Perfil</div>
                </div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:scale-110 transition flex-shrink-0">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue" />
              </div>
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-brand-blue rounded-t-[25px] mx-0 sm:mx-6 px-4 sm:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8 relative mt-12 sm:mt-16">
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
