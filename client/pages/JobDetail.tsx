import { ArrowUpRight, ArrowLeft, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function JobDetail() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - Reused from Vagas page */}
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
          <a href="#" className="text-white text-sm font-medium hover:opacity-80 transition">Para empresas</a>
          <a href="#" className="text-white text-sm font-medium hover:opacity-80 transition">Sobre</a>
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

      {/* Back to search button */}
      <div className="max-w-7xl mx-auto px-6 mt-8 mb-6">
        <Link to="/vagas" className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
          <ArrowLeft className="w-4 h-4" />
          Voltar para a busca
        </Link>
        <p className="text-gray-600 text-sm mt-2">Encontre a oportunidade para sua carreira</p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Job Content */}
          <main className="col-span-8">
            {/* Job Card */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
              {/* Gradient stripe on top */}
              <div className="h-1.5 bg-gradient-to-r from-brand-green via-brand-blue to-brand-yellow"></div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold text-brand-blue mb-4">
                      Assistente Administrativo | Compras - Vaga Afirmativa para pessoa com Deficiência - PCD
                    </h1>
                    
                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="8"/>
                      </svg>
                      <span>Fundação Butantan</span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm mb-4">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="#11B000" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="10"/>
                        </svg>
                        <span className="text-gray-700">Butantã, São Paulo</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="#11B000" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="10"/>
                        </svg>
                        <span className="text-gray-700">Tempo integral</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-1.5 border-2 border-brand-blue text-brand-blue text-xs font-medium rounded-full">
                        Administração
                      </span>
                      <span className="px-4 py-1.5 border-2 border-brand-blue text-brand-blue text-xs font-medium rounded-full">
                        Compras
                      </span>
                      <span className="px-4 py-1.5 border-2 border-brand-blue text-brand-blue text-xs font-medium rounded-full">
                        Vagas Corporativas
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-blue h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-brand-blue font-semibold">Quero essa vaga</span>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-brand-blue transition">
                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-brand-blue transition">
                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-brand-blue">Descrição da Vaga</h2>
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                O Butantan é o maior produtor de vacinas e soros da América Latina e o principal fabricante de imunizantes contra a gripe (Influenza) 
                do hemisfério Sul. Referência mundial de eficiência e qualidade, também é responsável por grande parte da produção de soros 
                hiperimunes e vacinas oferecidas à população gratuitamente pelo Programa Nacional de Imunizações (PNI), como as vacinas contra 
                hepatite A, hepatite B, HPV, raiva e DTPA. Aqui no Butantan, valorizamos a diversidade. Promovemos uma cultura inclusiva, que se traduz 
                no respeito à diversidade de gênero, etnia, pessoa com deficiência, orientação sexual (LGBTQIAPN+), crenças e religiões. Buscamos 
                pessoas alinhadas aos nossos valores e que queiram crescer e se desenvolver junto com a instituição.
              </p>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-brand-blue">Requisitos</h2>
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Cursando último ano de Administração, Economia, Contabilidade, Comunicação Social, Marketing ou Farmácia. 
                Experiência comprovada em compras, preferencialmente com foco em serviços e produtos para viagens.
              </p>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-brand-blue">Responsabilidades</h2>
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Realizar compras de serviços e produtos para viagens corporativas. Emitir pedidos de compra e acompanhar o ciclo de vida dos pedidos 
                até a entrega. Auxiliar em negociações de preços com fornecedores. Garantir conformidade com a legislação vigente. Apoiar em 
                pesquisas de mercado. Monitorar e fazer follow-up dos pedidos. Manter registros e relatórios de compras atualizados. Apoiar na 
                elaboração e revisão de contratos.
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-brand-blue">Benefícios</h2>
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3">Desenvolvimento Humano</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brand-green">Oportunidade de carreira e desenvolvimento</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brand-green">Parcerias na área Educacional e Entretenimento</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brand-green">Acesso aos museus do Instituto Butantan</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3">Saúde e Bem-estar</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brand-green">Convênio Médico e convênio odontológico</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brand-green">Seguro de Vida em Grupo</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brand-green">TotalPass e Subsídio de medicamentos</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3">Alimentação e Transporte</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brand-green">Cartão (food) Benefícios</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brand-green">Refeitório no local</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brand-green">Vale transporte</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brand-green">Ônibus fretado</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3">Demais auxílios e benefícios</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brand-green">Auxílio creche</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brand-green">Auxílio para filho excepcional</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brand-green">Auxílio para compra de material escolar</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brand-green">Day Off de aniversário</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="col-span-4">
            {/* Candidate CTA */}
            <div className="bg-brand-blue rounded-3xl p-8 mb-6 text-center">
              <h3 className="text-white text-2xl font-bold mb-4">Candidate-se</h3>
              <p className="text-white text-sm mb-6">
                Não perca tempo, as vagas se esgotam rapidamente, se candidate já e garanta seu perfil no match, muito breve!
              </p>
              <button className="w-full bg-white text-brand-blue py-3 rounded-full font-bold hover:bg-opacity-90 transition mb-4">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span>Seja um dos primeiros a se candidatar</span>
                </div>
              </button>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-3xl border-2 border-gray-100 p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">?</span>
                </button>
                <div className="flex-1">
                  <h3 className="text-brand-blue text-lg font-bold">Sobre a Empresa</h3>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 mb-3"></div>
                <h4 className="text-brand-blue text-lg font-bold mb-1">Fundação Butantan</h4>
                <p className="text-gray-500 text-sm">Empresa de Tecnologia</p>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                Empresa brasileira inovadora, focada em soluções tecnológicas de ponta para gás.
              </p>
            </div>

            {/* Similar Jobs */}
            <div className="bg-white rounded-3xl border-2 border-gray-100 p-6">
              <h3 className="text-brand-blue text-lg font-bold mb-4">Vagas Similares</h3>
              
              <div className="space-y-3">
                <a href="#" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition group">
                  <div className="flex-1">
                    <h4 className="text-brand-blue font-semibold text-sm mb-1 group-hover:underline">Auxiliar de Produção</h4>
                    <p className="text-gray-500 text-xs">Londrina/PR</p>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </a>

                <a href="#" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition group">
                  <div className="flex-1">
                    <h4 className="text-brand-blue font-semibold text-sm mb-1 group-hover:underline">Telemarketing Pleno</h4>
                    <p className="text-gray-500 text-xs">São Paulo/SP</p>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </a>

                <a href="#" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition group">
                  <div className="flex-1">
                    <h4 className="text-brand-blue font-semibold text-sm mb-1 group-hover:underline">Comercial & Vendas</h4>
                    <p className="text-gray-500 text-xs">Curitiba/PR</p>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </a>

                <a href="#" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition group">
                  <div className="flex-1">
                    <h4 className="text-brand-blue font-semibold text-sm mb-1 group-hover:underline">Designer Gráfico Sênior</h4>
                    <p className="text-gray-500 text-xs">Fortaleza/CE</p>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </a>

                <a href="#" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition group">
                  <div className="flex-1">
                    <h4 className="text-brand-blue font-semibold text-sm mb-1 group-hover:underline">Designer Gráfico Pleno</h4>
                    <p className="text-gray-500 text-xs">Fortaleza/CE</p>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* "Isso é tudo" Section - Reused */}
      <section className="max-w-7xl mx-auto px-6 mt-20 mb-16">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left Side - Text and CTA */}
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="font-bold">Isso é tudo.</span> <span className="font-normal">Refaça a pesquisa para mais opções!</span>
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Junte-se a milhares de profissionais que já encontraram suas oportunidades ideais através do Cebrac. 
              Cadastre-se gratuitamente e tenha acesso a vagas exclusivas.
            </p>
            <button className="flex items-center gap-3 bg-brand-blue text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
              Soluções completas para sua carreira
            </button>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="space-y-4">
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="bg-green-50 border-2 border-brand-green rounded-2xl p-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-brand-green text-xl font-bold mb-2">Rede de Empresas</h3>
                  <p className="text-gray-600 text-sm">
                    Conecte-se com mais de 13.500 empresas parceiras.
                  </p>
                </div>
                <div className="bg-green-50 rounded-full p-2">
                  <ArrowUpRight className="w-5 h-5 text-brand-green" />
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 border-2 border-brand-blue rounded-2xl p-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-brand-blue text-xl font-bold mb-2">Qualificação Profissional</h3>
                  <p className="text-gray-600 text-sm">
                    Cursos reconhecidos no mercado e com metodologia híbrida
                  </p>
                </div>
                <div className="bg-blue-50 rounded-full p-2">
                  <ArrowUpRight className="w-5 h-5 text-brand-blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Background Spacer */}
      <div className="bg-brand-blue h-24 -mx-6"></div>

      {/* Company Partner Section - Reused */}
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
            <a href="#" className="flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
              Para empresas
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </a>
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
