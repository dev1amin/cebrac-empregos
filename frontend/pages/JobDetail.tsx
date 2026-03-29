import { ArrowUpRight, Search, Bookmark, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function JobDetail() {
  return (
    <div className="min-h-screen bg-white" style={{zoom: 0.7, paddingLeft: '100px', paddingRight: '100px'}}>
      {/* Navbar - Same as Vagas page with 2 logos */}
      <nav className="bg-brand-blue rounded-[40px] mx-6 mt-6 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* First Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/cebrac-logo-white.png"
              alt="Cebrac Logo"
              className="h-6"
            />
          </Link>

          {/* Divider */}
          <div className="h-8 w-px bg-white/30"></div>

          {/* Second Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/image.png"
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

      {/* Back to search button - Smaller with blue arrow in white circle */}
      <div className="mx-6 mt-8 mb-6">
        <Link to="/vagas" className="inline-flex items-center gap-2 text-brand-blue text-sm font-medium hover:opacity-80 transition">
          <div className="flex items-center justify-center w-6 h-6 bg-white border-2 border-brand-blue rounded-full">
            <svg className="w-3 h-3 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          Voltar para a busca
        </Link>
        <p className="text-gray-600 text-sm mt-2">Encontre a oportunidade para sua carreira</p>
      </div>

      {/* Main Content */}
      <div className="mx-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Job Content */}
          <main className="col-span-8">
            {/* Job Card - Redesigned to match Vagas page exactly */}
            <div className="bg-white shadow-sm overflow-hidden rounded-b-2xl mb-6">
              {/* Gradient stripe: 65% green, 25% blue, 10% yellow */}
              <div className="h-2 flex">
                <div className="bg-brand-green" style={{width: '65%'}}></div>
                <div className="bg-brand-blue" style={{width: '25%'}}></div>
                <div className="bg-brand-yellow" style={{width: '10%'}}></div>
              </div>
              
              <div className="px-8 py-6">
                <div className="mb-4">
                  <h1 className="text-2xl font-bold text-brand-blue mb-3">
                    Assistente Administrativo | Compras - Vaga Afirmativa para pessoa com Deficiência - PCD
                  </h1>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8"/>
                    </svg>
                    <span>Fundação Butantan</span>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm mb-4">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="#51B84C" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="10"/>
                      </svg>
                      <span className="text-gray-700">Butantã, São Paulo</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="#51B84C" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="10"/>
                      </svg>
                      <span className="text-gray-700">Tempo integral</span>
                    </div>
                    <span className="px-4 py-1.5 border border-brand-blue text-brand-blue text-xs font-medium rounded-full">
                      Administração
                    </span>
                    <span className="px-4 py-1.5 border border-brand-blue text-brand-blue text-xs font-medium rounded-full">
                      Compras
                    </span>
                    <span className="px-4 py-1.5 border border-brand-blue text-brand-blue text-xs font-medium rounded-full">
                      Vagas Corporativas
                    </span>
                  </div>
                </div>

                {/* Separator line */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Bottom row with button */}
                <div className="flex items-center gap-3">
                  <button className="flex-1 py-3 bg-brand-blue text-white text-sm font-bold rounded-full hover:opacity-90 transition">
                    Quero essa vaga
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white border-2 border-brand-blue flex items-center justify-center hover:opacity-90 transition">
                    <Bookmark className="w-4 h-4 text-brand-blue" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white border-2 border-brand-blue flex items-center justify-center hover:opacity-90 transition">
                    <Share2 className="w-4 h-4 text-brand-blue" />
                  </button>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-brand-blue">Descrição da Vaga</h2>
                <svg className="w-5 h-5 text-brand-yellow flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
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
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-brand-blue">Requisitos</h2>
                <svg className="w-5 h-5 text-brand-yellow flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Cursando último ano de Administração, Economia, Contabilidade, Comunicação Social, Marketing ou Farmácia. 
                Experiência comprovada em compras, preferencialmente com foco em serviços e produtos para viagens.
              </p>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-brand-blue">Responsabilidades</h2>
                <svg className="w-5 h-5 text-brand-yellow flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Realizar compras de serviços e produtos para viagens corporativas. Emitir pedidos de compra e acompanhar o ciclo de vida dos pedidos 
                até a entrega. Auxiliar em negociações de preços com fornecedores. Garantir conformidade com a legislação vigente. Apoiar em 
                pesquisas de mercado. Monitorar e fazer follow-up dos pedidos. Manter registros e relatórios de compras atualizados. Apoiar na 
                elaboração e revisão de contratos.
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-brand-blue">Benefícios</h2>
                <svg className="w-5 h-5 text-brand-yellow flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3">Desenvolvimento Humano</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 border-2 border-brand-green bg-brand-green/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Oportunidade de carreira e desenvolvimento</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 border-2 border-brand-green bg-brand-green/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Parcerias na área Educacional e Entretenimento</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 border-2 border-brand-green bg-brand-green/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Acesso aos museus do Instituto Butantan</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3">Saúde e Bem-estar</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 border-2 border-brand-green bg-brand-green/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Convênio Médico e convênio odontológico</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 border-2 border-brand-green bg-brand-green/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Seguro de Vida em Grupo</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 border-2 border-brand-green bg-brand-green/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">TotalPass e Subsídio de medicamentos</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3">Alimentação e Transporte</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 border-2 border-brand-green bg-brand-green/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Cartão (food) Benefícios</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 border-2 border-brand-green bg-brand-green/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Refeitório no local</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 border-2 border-brand-green bg-brand-green/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Vale transporte</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 border-2 border-brand-green bg-brand-green/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Ônibus fretado</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3">Demais auxílios e benefícios</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 border-2 border-brand-green bg-brand-green/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Auxílio creche</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 border-2 border-brand-green bg-brand-green/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Auxílio para filho excepcional</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 border-2 border-brand-green bg-brand-green/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Auxílio para compra de material escolar</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 border-2 border-brand-green bg-brand-green/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Day Off de aniversário</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar - Redesigned */}
          <aside className="col-span-4">
            {/* Candidate CTA - Split in two parts */}
            <div className="bg-brand-blue rounded-3xl overflow-hidden mb-6">
              {/* Top Part */}
              <div className="p-8 text-center border-b border-white/20">
                <h3 className="text-white text-2xl font-bold mb-4">Candidate-se</h3>
                <p className="text-white text-sm">
                  Não perca tempo, as vagas se esgotam rapidamente, se  seu perfil deu match, manda ver!
                </p>
              </div>
              
              {/* Bottom Part */}
              <div className="p-3">
                <div className="bg-white rounded-2xl border border-gray-200 px-4 py-3 flex items-center gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-blue text-sm font-bold">Seja um dos primeiros a se candidatar</span>
                </div>
              </div>
            </div>

            {/* Company Info - Redesigned with arrow and company name next to photo */}
            <div className="bg-white rounded-3xl border-2 border-gray-100 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-brand-blue text-lg font-bold">Sobre a Empresa</h3>
                <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                  <ArrowUpRight className="w-4 h-4 text-brand-blue" />
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div>
                  <h4 className="text-brand-blue font-bold">Fundação Butantan</h4>
                  <p className="text-gray-500 text-xs">Empresa de Tecnologia</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                Empresa brasileira e inovadora, focada em soluções tecnológicas de ponta para o país.
              </p>
            </div>

            {/* Similar Jobs - White background with gray border */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6">
              <h3 className="text-brand-blue text-xl font-bold mb-4">Vagas Similares</h3>
              
              <div className="space-y-3">
                <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-gray-100 hover:shadow-md transition group">
                  <div className="flex-1">
                    <h4 className="text-brand-blue font-bold text-sm mb-1 group-hover:underline">Auxiliar de Produção</h4>
                    <p className="text-gray-500 text-xs">Londrina/PR</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </a>

                <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-gray-100 hover:shadow-md transition group">
                  <div className="flex-1">
                    <h4 className="text-brand-blue font-bold text-sm mb-1 group-hover:underline">Telemarketing Pleno</h4>
                    <p className="text-gray-500 text-xs">São Paulo/SP</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </a>

                <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-gray-100 hover:shadow-md transition group">
                  <div className="flex-1">
                    <h4 className="text-brand-blue font-bold text-sm mb-1 group-hover:underline">Comercial & Vendas</h4>
                    <p className="text-gray-500 text-xs">Curitiba/PR</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </a>

                <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-gray-100 hover:shadow-md transition group">
                  <div className="flex-1">
                    <h4 className="text-brand-blue font-bold text-sm mb-1 group-hover:underline">Designer Gráfico Sênior</h4>
                    <p className="text-gray-500 text-xs">Fortaleza/CE</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </a>

                <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-gray-100 hover:shadow-md transition group">
                  <div className="flex-1">
                    <h4 className="text-brand-blue font-bold text-sm mb-1 group-hover:underline">Designer Gráfico Pleno</h4>
                    <p className="text-gray-500 text-xs">Fortaleza/CE</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* "Isso é tudo" Section */}
      <section className="mx-6 mt-20 mb-16">
        <div className="grid grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="font-bold">Isso é tudo.</span> <span className="font-normal">Refaça a pesquisa para mais opções!</span>
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Junte-se a milhares de profissionais que já encontraram suas oportunidades ideais através do Cebrac. 
              Cadastre-se gratuitamente e tenha acesso a vagas exclusivas.
            </p>
            <button className="flex items-center gap-3 bg-brand-blue text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
              <div className="bg-white rounded-full p-2">
                <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              Soluções completas para sua carreira
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-white border-2 border-brand-green rounded-3xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-brand-green-light border-2 border-brand-green rounded-2xl p-4 flex-shrink-0">
                  <Search className="w-6 h-6 text-brand-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-brand-green text-xl font-bold mb-2">Rede de Empresas</h3>
                  <p className="text-gray-600 text-sm">
                    Conecte-se com mais de 13.500 empresas parceiras.
                  </p>
                </div>
                <div className="bg-brand-green-light rounded-full p-2">
                  <ArrowUpRight className="w-5 h-5 text-brand-green" />
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-brand-blue rounded-3xl p-6 shadow-sm">
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
