import { Search, ArrowUpRight, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Vagas() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
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
            <Search className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 bg-white text-brand-blue px-6 py-3 rounded-full font-bold text-sm hover:bg-opacity-90 transition">
            Acessar Vagas
            <div className="bg-brand-blue rounded-full p-1">
              <ArrowUpRight className="w-3 h-3 text-white" />
            </div>
          </button>
        </div>
      </nav>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 mt-12 mb-8">
        <h1 className="text-brand-blue text-4xl font-bold mb-2">Vagas</h1>
        <p className="text-gray-600">Encontre a oportunidade para sua carreira</p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar Filters */}
          <aside className="col-span-3">
            <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Filtros</h2>
                <button className="text-gray-400 text-sm hover:text-brand-blue">Limpar</button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Buscar</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cargo ou empresa"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Localização</label>
                <div className="relative">
                  <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent">
                    <option>Todas</option>
                    <option>São Paulo, SP</option>
                    <option>Rio de Janeiro, RJ</option>
                    <option>Florianópolis, SC</option>
                  </select>
                  <div className="absolute right-3 top-3 pointer-events-none">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill="#D1D5DB"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Regime */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Regime</label>
                <div className="relative">
                  <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent">
                    <option>Todos</option>
                    <option>CLT</option>
                    <option>PJ</option>
                    <option>Estágio</option>
                  </select>
                  <div className="absolute right-3 top-3 pointer-events-none">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill="#D1D5DB"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Categoria */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Categoria</label>
                <div className="relative">
                  <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent">
                    <option>Todas</option>
                    <option>Tecnologia</option>
                    <option>Vendas</option>
                    <option>Marketing</option>
                  </select>
                  <div className="absolute right-3 top-3 pointer-events-none">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill="#D1D5DB"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Tipo de contrato */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Tipos de contrato</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <div className="w-5 h-5 border-2 border-brand-green rounded peer-checked:bg-brand-green transition flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-brand-blue">Estágio</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-brand-green peer-checked:border-brand-green transition flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-brand-blue">Freelancer</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-brand-green peer-checked:border-brand-green transition flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-brand-blue">Meio período</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-brand-green peer-checked:border-brand-green transition flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-brand-blue">Tempo integral</span>
                  </label>
                </div>
              </div>

              {/* Senioridade */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Senioridade</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-brand-green peer-checked:border-brand-green transition flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-brand-blue">Júnior</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <div className="w-5 h-5 border-2 border-brand-green rounded peer-checked:bg-brand-green transition flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-brand-blue">Pleno</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-brand-green peer-checked:border-brand-green transition flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-brand-blue">Sênior</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-brand-green peer-checked:border-brand-green transition flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-brand-blue">Líder</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-brand-green peer-checked:border-brand-green transition flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-brand-blue">Outro</span>
                  </label>
                </div>
              </div>

              {/* Habilidades */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Habilidades</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-brand-green peer-checked:border-brand-green transition flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-brand-blue">Pacote Office</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <div className="w-5 h-5 border-2 border-brand-green rounded peer-checked:bg-brand-green transition flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-brand-blue">Adobe Photoshop</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-brand-green peer-checked:border-brand-green transition flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-brand-blue">Social media</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-brand-green peer-checked:border-brand-green transition flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-brand-blue">T.I</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-brand-green peer-checked:border-brand-green transition flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-brand-blue">Adobe Premiere</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-brand-green peer-checked:border-brand-green transition flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-brand-blue">CRM</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-brand-green peer-checked:border-brand-green transition flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-brand-blue">Vendas</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-brand-green peer-checked:border-brand-green transition flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-brand-blue">Digite uma habilidade</span>
                  </label>
                </div>
              </div>

              <button className="w-full bg-brand-green text-white py-3 rounded-full font-bold hover:opacity-90 transition">
                58 vagas encontradas
              </button>
            </div>
          </aside>

          {/* Job Listings */}
          <main className="col-span-9">
            <div className="mb-6 flex items-center gap-2">
              <button className="flex items-center gap-2 text-gray-600 text-sm font-medium hover:text-brand-blue">
                <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                Atualizar
              </button>
            </div>

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
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
                {/* Gradient stripe on top */}
                <div className="h-1.5 bg-gradient-to-r from-brand-green via-brand-blue to-brand-yellow"></div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <Link to="/vagas/1">
                        <h3 className="text-xl font-bold text-brand-blue mb-3 hover:underline cursor-pointer">
                          Assistente Administrativo | Compras - Vaga Afirmativa para pessoa com Deficiência - PCD
                        </h3>
                      </Link>
                      
                      <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
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
                        <span className="px-4 py-1.5 bg-brand-blue text-white text-xs font-medium rounded-full">
                          95% match
                        </span>
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
                    
                    <div className="ml-8 flex flex-col items-end gap-3">
                      <div className="text-right">
                        <div className="text-xs text-brand-green font-semibold mb-0.5">Recrutador On-line</div>
                        <div className="text-xs text-gray-500">25 pessoas aplicaram nesta vaga</div>
                      </div>
                      <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition">
                        Auxiliar Administrativo
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                      <button className="flex items-center gap-2 bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition">
                        Candidatar-se
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-brand-green via-brand-blue to-brand-yellow"></div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <Link to="/vagas/2">
                        <h3 className="text-xl font-bold text-brand-blue mb-3 hover:underline cursor-pointer">
                          Auxiliar Administrativo Nível Pleno | Vaga Afirmativa para Mulheres - Presencial em Florianópolis/SC
                        </h3>
                      </Link>
                      
                      <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="8"/>
                        </svg>
                        <span>Localiza&Co</span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm mb-4">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="#11B000" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="10"/>
                          </svg>
                          <span className="text-gray-700">Florianópolis, Santa Catarina</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="#11B000" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="10"/>
                          </svg>
                          <span className="text-gray-700">Tempo integral</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-1.5 bg-brand-blue text-white text-xs font-medium rounded-full">
                          93% match
                        </span>
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
                    
                    <div className="ml-8 flex flex-col items-end gap-3">
                      <div className="text-right">
                        <div className="text-xs text-brand-green font-semibold mb-0.5">Recrutador On-line</div>
                        <div className="text-xs text-gray-500">25 pessoas aplicaram nesta vaga</div>
                      </div>
                      <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition">
                        Auxiliar Administrativo
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                      <button className="flex items-center gap-2 bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition">
                        Candidatar-se
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Card 3 */}
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-brand-green via-brand-blue to-brand-yellow"></div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <Link to="/vagas/3">
                        <h3 className="text-xl font-bold text-brand-blue mb-3 hover:underline cursor-pointer">
                          Operador de Telemarketing - Vaga Afirmativa para pessoa com Deficiência - PCD | Home Office em São Paulo/SP
                        </h3>
                      </Link>
                      
                      <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="8"/>
                        </svg>
                        <span>Confidencial</span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm mb-4">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="#11B000" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="10"/>
                          </svg>
                          <span className="text-gray-700">São Paulo, São Paulo</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="#11B000" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="10"/>
                          </svg>
                          <span className="text-gray-700">Tempo integral</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-1.5 bg-brand-blue text-white text-xs font-medium rounded-full">
                          86% match
                        </span>
                        <span className="px-4 py-1.5 border-2 border-brand-blue text-brand-blue text-xs font-medium rounded-full">
                          Vendas
                        </span>
                        <span className="px-4 py-1.5 border-2 border-brand-blue text-brand-blue text-xs font-medium rounded-full">
                          Telemarketing
                        </span>
                        <span className="px-4 py-1.5 border-2 border-brand-blue text-brand-blue text-xs font-medium rounded-full">
                          Home Office
                        </span>
                      </div>
                    </div>
                    
                    <div className="ml-8 flex flex-col items-end gap-3">
                      <div className="text-right">
                        <div className="text-xs text-brand-green font-semibold mb-0.5">Recrutador On-line</div>
                        <div className="text-xs text-gray-500">16 pessoas aplicaram nesta vaga</div>
                      </div>
                      <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition">
                        Operador Telemarketing
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                      <button className="flex items-center gap-2 bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition">
                        Candidatar-se
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* "Isso é tudo" Section */}
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
                  <Search className="w-6 h-6 text-brand-green" />
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

      {/* Company Partner Section */}
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

      {/* Footer */}
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
