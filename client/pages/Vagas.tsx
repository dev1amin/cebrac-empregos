import { Search, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Vagas() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - Same as homepage */}
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

      {/* Page Header */}
      <div className="mx-6 mt-12 mb-8">
        <h1 className="text-brand-blue text-4xl font-bold mb-2">Vagas</h1>
        <p className="text-gray-600">Encontre a oportunidade para sua carreira</p>
      </div>

      {/* Main Content */}
      <div className="mx-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar Filters */}
          <aside className="col-span-3">
            <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Filtros</h2>
                <button className="text-gray-400 text-sm hover:text-brand-blue">Limpar</button>
              </div>

              {/* Search with icon circle */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Buscar</label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
                    <Search className="w-3.5 h-3.5 text-white" />
                  </div>
                  <input
                    type="text"
                    placeholder="Cargo ou empresa"
                    className="w-full pl-11 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  />
                </div>
              </div>

              {/* Selects with arrow circle */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Localização</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-400 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent">
                    <option>Todas</option>
                    <option>São Paulo, SP</option>
                    <option>Rio de Janeiro, RJ</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full pointer-events-none">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Regime</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-400 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent">
                    <option>Todas</option>
                    <option>CLT</option>
                    <option>PJ</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full pointer-events-none">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Categoria</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-400 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent">
                    <option>Todas</option>
                    <option>Tecnologia</option>
                    <option>Vendas</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full pointer-events-none">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Checkboxes with green border and light green background - Square style */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Tipos de contrato</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded bg-white peer-checked:bg-brand-green/10 peer-checked:border-brand-green transition"></div>
                      <svg className="w-3 h-3 text-brand-green absolute opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-brand-blue font-medium">Estágio</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded bg-white peer-checked:bg-brand-green/10 peer-checked:border-brand-green transition"></div>
                      <svg className="w-3 h-3 text-brand-green absolute opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600 group-hover:text-brand-blue">Freelancer</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded bg-white peer-checked:bg-brand-green/10 peer-checked:border-brand-green transition"></div>
                      <svg className="w-3 h-3 text-brand-green absolute opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600 group-hover:text-brand-blue">Tempo integral</span>
                  </label>
                </div>
              </div>

              {/* Habilidades como botões */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Digite uma habilidade</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 border-2 border-brand-green bg-brand-green-light text-brand-green text-xs font-medium rounded-full">
                    Adobe Photoshop
                  </button>
                  <button className="px-4 py-2 border border-gray-300 bg-white text-gray-600 text-xs font-medium rounded-full hover:border-brand-green hover:text-brand-green">
                    Pacote Office
                  </button>
                  <button className="px-4 py-2 border border-gray-300 bg-white text-gray-600 text-xs font-medium rounded-full hover:border-brand-green hover:text-brand-green">
                    Social Media
                  </button>
                </div>
              </div>

              <button className="w-full bg-brand-green text-white py-3 rounded-full font-bold hover:opacity-90 transition">
                58 vagas encontradas
              </button>
            </div>
          </aside>

          {/* Job Listings */}
          <main className="col-span-9">
            <div className="mb-8">
              <h2 className="text-3xl font-normal text-gray-700 mb-2">Você não vai acreditar!</h2>
              <p className="text-4xl font-bold text-gray-900 mb-4">Encontramos as vaga que vão mudar a sua vida!</p>
              <p className="text-gray-600 text-sm max-w-3xl">
                Analise com calma e escolha a que melhor se encaixar na sua perspectiva, nossa IA já adiantou todo o processo, agora é só
                agendar a sua entrevista!
              </p>
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {/* Job Card 1 */}
              <div className="bg-white shadow-sm hover:shadow-md transition overflow-hidden rounded-b-2xl">
                {/* Gradient stripe: 65% green, 25% blue, 10% yellow */}
                <div className="h-2 flex">
                  <div className="bg-brand-green" style={{width: '65%'}}></div>
                  <div className="bg-brand-blue" style={{width: '25%'}}></div>
                  <div className="bg-brand-yellow" style={{width: '10%'}}></div>
                </div>
                
                <div className="px-8 py-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <Link to="/vagas/1">
                        <h3 className="text-brand-blue text-xl font-bold mb-3 hover:underline cursor-pointer">
                          Assistente Administrativo | Compras - Vaga Afirmativa para pessoa com Deficiência - PCD
                        </h3>
                      </Link>
                      
                      <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="8"/>
                        </svg>
                        <span>Fundação Butantan</span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm mb-4">
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
                      </div>
                    </div>
                    
                    <div className="ml-8 text-right">
                      <div className="text-xs text-brand-green font-semibold mb-0.5">Recrutador On-line</div>
                      <div className="text-xs text-gray-500">25 pessoas aplicaram nesta vaga</div>
                    </div>
                  </div>

                  {/* Separator line */}
                  <div className="border-t border-gray-200 my-4"></div>

                  {/* Bottom row with badges and buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-1.5 bg-brand-blue/10 text-brand-blue text-xs font-medium rounded-full border border-brand-blue">
                        95% match
                      </span>
                      <span className="px-4 py-1.5 border border-brand-blue text-brand-blue text-xs font-medium rounded-full">
                        Administração
                      </span>
                      <span className="px-4 py-1.5 border border-brand-blue text-brand-blue text-xs font-medium rounded-full">
                        Compras
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center rounded-full overflow-hidden" style={{backgroundColor: '#7D8ADF'}}>
                        <span className="px-5 py-2.5 text-white text-sm font-semibold">
                          Auxiliar Administrativo
                        </span>
                        <button className="px-5 py-2.5 text-white text-sm font-semibold rounded-full hover:opacity-90 transition" style={{backgroundColor: '#25348F'}}>
                          Candidatar-se
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="bg-white shadow-sm hover:shadow-md transition overflow-hidden rounded-b-2xl">
                <div className="h-2 flex">
                  <div className="bg-brand-green" style={{width: '65%'}}></div>
                  <div className="bg-brand-blue" style={{width: '25%'}}></div>
                  <div className="bg-brand-yellow" style={{width: '10%'}}></div>
                </div>

                <div className="px-8 py-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <Link to="/vagas/2">
                        <h3 className="text-brand-blue text-xl font-bold mb-3 hover:underline cursor-pointer">
                          Auxiliar Administrativo Nível Pleno | Vaga Afirmativa para Mulheres - Presencial em Florianópolis/SC
                        </h3>
                      </Link>

                      <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="8"/>
                        </svg>
                        <span>Localiza&Co</span>
                      </div>

                      <div className="flex items-center gap-4 text-sm mb-4">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="#51B84C" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="10"/>
                          </svg>
                          <span className="text-gray-700">Florianópolis, SC</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="#51B84C" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="10"/>
                          </svg>
                          <span className="text-gray-700">Tempo integral</span>
                        </div>
                      </div>
                    </div>

                    <div className="ml-8 text-right">
                      <div className="text-xs text-brand-green font-semibold mb-0.5">Recrutador On-line</div>
                      <div className="text-xs text-gray-500">32 pessoas aplicaram nesta vaga</div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 my-4"></div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-1.5 bg-brand-blue/10 text-brand-blue text-xs font-medium rounded-full border border-brand-blue">
                        93% match
                      </span>
                      <span className="px-4 py-1.5 border border-brand-blue text-brand-blue text-xs font-medium rounded-full">
                        Administração
                      </span>
                      <span className="px-4 py-1.5 border border-brand-blue text-brand-blue text-xs font-medium rounded-full">
                        Presencial
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center rounded-full overflow-hidden" style={{backgroundColor: '#7D8ADF'}}>
                        <span className="px-5 py-2.5 text-white text-sm font-semibold">
                          Auxiliar Administrativo
                        </span>
                        <button className="px-5 py-2.5 text-white text-sm font-semibold rounded-full hover:opacity-90 transition" style={{backgroundColor: '#25348F'}}>
                          Candidatar-se
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Card 3 */}
              <div className="bg-white shadow-sm hover:shadow-md transition overflow-hidden rounded-b-2xl">
                <div className="h-2 flex">
                  <div className="bg-brand-green" style={{width: '65%'}}></div>
                  <div className="bg-brand-blue" style={{width: '25%'}}></div>
                  <div className="bg-brand-yellow" style={{width: '10%'}}></div>
                </div>

                <div className="px-8 py-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <Link to="/vagas/3">
                        <h3 className="text-brand-blue text-xl font-bold mb-3 hover:underline cursor-pointer">
                          Operador de Telemarketing - Vaga Afirmativa para pessoa com Deficiência - PCD | Home Office em São Paulo/SP
                        </h3>
                      </Link>

                      <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="8"/>
                        </svg>
                        <span>Confidencial</span>
                      </div>

                      <div className="flex items-center gap-4 text-sm mb-4">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="#51B84C" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="10"/>
                          </svg>
                          <span className="text-gray-700">São Paulo, SP</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="#51B84C" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="10"/>
                          </svg>
                          <span className="text-gray-700">Home Office</span>
                        </div>
                      </div>
                    </div>

                    <div className="ml-8 text-right">
                      <div className="text-xs text-brand-green font-semibold mb-0.5">Recrutador On-line</div>
                      <div className="text-xs text-gray-500">16 pessoas aplicaram nesta vaga</div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 my-4"></div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-1.5 bg-brand-blue/10 text-brand-blue text-xs font-medium rounded-full border border-brand-blue">
                        86% match
                      </span>
                      <span className="px-4 py-1.5 border border-brand-blue text-brand-blue text-xs font-medium rounded-full">
                        Vendas
                      </span>
                      <span className="px-4 py-1.5 border border-brand-blue text-brand-blue text-xs font-medium rounded-full">
                        Home Office
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center rounded-full overflow-hidden" style={{backgroundColor: '#7D8ADF'}}>
                        <span className="px-5 py-2.5 text-white text-sm font-semibold">
                          Operador Telemarketing
                        </span>
                        <button className="px-5 py-2.5 text-white text-sm font-semibold rounded-full hover:opacity-90 transition" style={{backgroundColor: '#25348F'}}>
                          Candidatar-se
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
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

      {/* Company Partner Section with gray background */}
      <section className="bg-brand-gray py-12 mt-16">
        <div className="mx-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <svg width="58" height="30" viewBox="0 0 58 30" fill="none">
                <path d="M26.8526 27.6548H3.0879C1.38501 27.6548 0 26.4462 0 24.9602V4.88985C0 3.40389 1.38501 2.19531 3.0879 2.19531H26.8526V27.6482V27.6548Z" fill="#51B84C"/>
                <path d="M33.7552 0.537425C32.514 -0.175836 30.5916 -0.18244 29.3428 0.537425L6.68311 13.6337C5.44189 14.3469 5.44189 15.5093 6.68311 16.2292L29.305 29.3188C30.5159 30.0189 32.5064 30.0189 33.7174 29.3188L56.3695 16.2226C57.6107 15.5093 57.6107 14.3469 56.3695 13.6271L33.7476 0.537425H33.7552Z" fill="#FFCA00"/>
                <path d="M26.4598 2.20215L6.69116 13.6275C5.44995 14.3408 5.44995 15.5031 6.69116 16.223L26.4522 27.655C36.2684 21.1762 36.276 8.4696 26.4673 2.20215" fill="#25348F"/>
              </svg>
              <h3 className="text-gray-900 text-3xl font-bold">Sua empresa pode estar aqui!</h3>
            </div>
            <div className="flex items-center gap-8">
              <p className="text-gray-600 text-sm max-w-xs">
                Junte-se às mais de 500 empresas que confiam no Cebrac e colabore para a empregabilidade!
              </p>
              <button className="flex items-center gap-2 bg-brand-green text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition whitespace-nowrap">
                Seja Parceiro
                <div className="bg-white rounded-full p-1.5">
                  <ArrowUpRight className="w-4 h-4 text-brand-green" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Same as homepage */}
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
