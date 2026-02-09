import { Search, ArrowUpRight, MapPin, Clock, Briefcase, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Vagas() {
  const [selectedFilters, setSelectedFilters] = useState({
    tipo: "Estágio",
    habilidades: ["Adobe Photoshop"],
  });

  return (
    <div className="min-h-screen bg-white p-[39px]">
      {/* Hero Section with Navbar */}
      <section className="relative overflow-hidden rounded-b-[25px] mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-blue-darker"></div>
        
        {/* Navigation with Glass Effect */}
        <nav className="relative z-10 mx-10 mt-6 mb-16 flex items-center justify-between px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <svg width="44" height="23" viewBox="0 0 58 30" fill="none">
                <path d="M26.8526 27.6548H3.0879C1.38501 27.6548 0 26.4462 0 24.9602V4.88985C0 3.40389 1.38501 2.19531 3.0879 2.19531H26.8526V27.6482V27.6548Z" fill="#11B000"/>
                <path d="M33.7552 0.537425C32.514 -0.175836 30.5916 -0.18244 29.3428 0.537425L6.68311 13.6337C5.44189 14.3469 5.44189 15.5093 6.68311 16.2292L29.305 29.3188C30.5159 30.0189 32.5064 30.0189 33.7174 29.3188L56.3695 16.2226C57.6107 15.5093 57.6107 14.3469 56.3695 13.6271L33.7476 0.537425H33.7552Z" fill="#FFCA00"/>
                <path d="M26.4598 2.20215L6.69116 13.6275C5.44995 14.3408 5.44995 15.5031 6.69116 16.223L26.4522 27.655C36.2684 21.1762 36.276 8.4696 26.4673 2.20215" fill="#25348F"/>
              </svg>
              <div className="text-white text-xs font-semibold">cebrac</div>
            </Link>
            
            <div className="h-8 w-px bg-white/30"></div>
            
            <div className="flex items-center gap-2">
              <svg width="44" height="23" viewBox="0 0 58 30" fill="none">
                <path d="M26.8526 27.6548H3.0879C1.38501 27.6548 0 26.4462 0 24.9602V4.88985C0 3.40389 1.38501 2.19531 3.0879 2.19531H26.8526V27.6482V27.6548Z" fill="#11B000"/>
                <path d="M33.7552 0.537425C32.514 -0.175836 30.5916 -0.18244 29.3428 0.537425L6.68311 13.6337C5.44189 14.3469 5.44189 15.5093 6.68311 16.2292L29.305 29.3188C30.5159 30.0189 32.5064 30.0189 33.7174 29.3188L56.3695 16.2226C57.6107 15.5093 57.6107 14.3469 56.3695 13.6271L33.7476 0.537425H33.7552Z" fill="#FFCA00"/>
                <path d="M26.4598 2.20215L6.69116 13.6275C5.44995 14.3408 5.44995 15.5031 6.69116 16.223L26.4522 27.655C36.2684 21.1762 36.276 8.4696 26.4673 2.20215" fill="#25348F"/>
              </svg>
              <div className="text-white text-xs font-semibold">EMPRESA</div>
            </div>
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
            <button className="flex items-center gap-2 bg-white text-brand-blue px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-opacity-90 transition">
              Acessar Vagas
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </nav>

        <div className="relative z-10 px-10 pb-12">
          <h1 className="text-white text-4xl font-bold mb-2">Vagas</h1>
          <p className="text-white/80 text-sm">Encontre a oportunidade para sua carreira</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar Filters */}
          <aside className="col-span-3">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-brand-gray-text">Filtros</h2>
                <button className="text-brand-blue text-sm hover:underline">Limpar</button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="text-sm font-medium text-brand-gray-text mb-2 block">Buscar</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cargo ou empresa"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                  <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="text-sm font-medium text-brand-gray-text mb-2 block">Localização</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue">
                  <option>Todas</option>
                  <option>São Paulo, SP</option>
                  <option>Rio de Janeiro, RJ</option>
                  <option>Florianópolis, SC</option>
                </select>
              </div>

              {/* Regime */}
              <div className="mb-6">
                <label className="text-sm font-medium text-brand-gray-text mb-2 block">Regime</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue">
                  <option>Todos</option>
                  <option>CLT</option>
                  <option>PJ</option>
                  <option>Estágio</option>
                </select>
              </div>

              {/* Categoria */}
              <div className="mb-6">
                <label className="text-sm font-medium text-brand-gray-text mb-2 block">Categoria</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue">
                  <option>Todas</option>
                  <option>Tecnologia</option>
                  <option>Vendas</option>
                  <option>Marketing</option>
                </select>
              </div>

              {/* Tipo de contrato */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-brand-gray-text mb-3">Tipo de contrato</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-brand-blue rounded" checked={selectedFilters.tipo === "Estágio"} />
                    <span className="text-sm text-brand-gray-text">Estágio</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-brand-blue rounded" />
                    <span className="text-sm text-brand-gray-text">Temporário</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-brand-blue rounded" />
                    <span className="text-sm text-brand-gray-text">Meio período</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-brand-blue rounded" />
                    <span className="text-sm text-brand-gray-text">Tempo integral</span>
                  </label>
                </div>
              </div>

              {/* Senioridade */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-brand-gray-text mb-3">Senioridade</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-brand-blue rounded" />
                    <span className="text-sm text-brand-gray-text">Júnior</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-brand-blue rounded" />
                    <span className="text-sm text-brand-gray-text">Pleno</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-brand-blue rounded" />
                    <span className="text-sm text-brand-gray-text">Sênior</span>
                  </label>
                </div>
              </div>

              {/* Habilidades */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-brand-gray-text mb-3">Habilidades</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-brand-blue rounded" checked />
                    <span className="text-sm text-brand-gray-text">Adobe Photoshop</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-brand-blue rounded" />
                    <span className="text-sm text-brand-gray-text">Excel</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-brand-blue rounded" />
                    <span className="text-sm text-brand-gray-text">Inglês Avançado</span>
                  </label>
                </div>
              </div>

              <button className="w-full bg-brand-green text-white py-3 rounded-full font-semibold hover:opacity-90 transition">
                58 vagas encontradas
              </button>
            </div>
          </aside>

          {/* Job Listings */}
          <main className="col-span-9">
            <div className="mb-6">
              <button className="flex items-center gap-2 text-brand-blue text-sm font-medium hover:underline">
                <X className="w-4 h-4" />
                Atualizar
              </button>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-brand-gray-text mb-2">Você não vai acreditar!</h2>
              <p className="text-3xl font-extrabold text-brand-gray-text">Encontramos as vaga que vão mudar a sua vida!</p>
              <p className="text-sm text-brand-gray-text mt-4">
                Analise com calma e escolha a que melhor se encaixar na sua perspectiva, nossa IA já adiantou todo o processo, agora é só
                agendar a sua entrevista!
              </p>
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {/* Job Card 1 - Featured */}
              <div className="border-l-4 border-brand-green bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-brand-blue mb-2">
                      Assistente Administrativo | Compras - Vaga Afirmativa para pessoa com Deficiência - PCD
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Fundação Butantan</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Butantã, São Paulo</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>Tempo integral</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-brand-blue text-white text-xs rounded-full">
                        Efetiva (CLT)
                      </span>
                      <span className="px-3 py-1 border border-brand-blue text-brand-blue text-xs rounded-full">
                        Administrativa
                      </span>
                      <span className="px-3 py-1 border border-brand-blue text-brand-blue text-xs rounded-full">
                        Compras
                      </span>
                      <span className="px-3 py-1 border border-brand-blue text-brand-blue text-xs rounded-full">
                        Vagas Corporativas
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-2">Remuneração On-line</div>
                    <div className="text-xs text-gray-500 mb-4">A combinar em entrevista</div>
                    <button className="bg-brand-blue text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition flex items-center gap-2">
                      Auxiliar Administrativo
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="border-l-4 border-gray-300 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-brand-blue mb-2">
                      Auxiliar Administrativo Nível Pleno | Vaga Afirmativa para Mulheres - Presencial em Florianópolis/SC
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Localiza&Co</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Florianópolis, Santa Catarina</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>Tempo integral</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-brand-blue text-white text-xs rounded-full">
                        Efetiva (CLT)
                      </span>
                      <span className="px-3 py-1 border border-brand-blue text-brand-blue text-xs rounded-full">
                        Administrativa
                      </span>
                      <span className="px-3 py-1 border border-brand-blue text-brand-blue text-xs rounded-full">
                        Compras
                      </span>
                      <span className="px-3 py-1 border border-brand-blue text-brand-blue text-xs rounded-full">
                        Vagas Corporativas
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-2">Remuneração On-line</div>
                    <div className="text-xs text-gray-500 mb-4">A combinar em entrevista</div>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition flex items-center gap-2">
                      Auxiliar Administrativo
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Job Card 3 */}
              <div className="border-l-4 border-yellow-400 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-brand-blue mb-2">
                      Operador de Telemarketing - Vaga Afirmativa para pessoa com Deficiência - PCD | Home Office em São Paulo/SP
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>CONTLdireital</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>São Paulo, São Paulo</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>Tempo integral</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-brand-blue text-white text-xs rounded-full">
                        Efetiva (CLT)
                      </span>
                      <span className="px-3 py-1 border border-brand-blue text-brand-blue text-xs rounded-full">
                        Vendas
                      </span>
                      <span className="px-3 py-1 border border-brand-blue text-brand-blue text-xs rounded-full">
                        Telemarketing
                      </span>
                      <span className="px-3 py-1 border border-brand-blue text-brand-blue text-xs rounded-full">
                        Home Office
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-2">Remuneração On-line</div>
                    <div className="text-xs text-gray-500 mb-4">A combinar em entrevista</div>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition flex items-center gap-2">
                      Operador Telemarketing
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Call to Action Section - Reusing from homepage */}
      <section className="max-w-7xl mx-auto mt-20 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium text-brand-gray-text mb-4">
            <span className="font-normal">Isso é tudo.</span> Refaça a pesquisa para mais opções!
          </h2>
          <p className="text-brand-gray-text text-sm max-w-2xl mx-auto mb-8">
            Junte-se a milhares de profissionais que já encontraram suas oportunidades ideias através do Cebrac. 
            Cadastre-se gratuitamente e tenha acesso a vagas exclusivas.
          </p>
          <button className="bg-brand-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition inline-flex items-center gap-3">
            <Briefcase className="w-5 h-5" />
            Soluções completas para sua carreira
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white border-2 border-brand-green rounded-[25px] p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-brand-green-light border border-brand-green rounded-xl p-3 flex-shrink-0">
                <Search className="w-5 h-5 text-brand-green" />
              </div>
              <div className="flex-1">
                <h3 className="text-brand-green text-lg font-extrabold mb-1">Rede de Empresas</h3>
                <p className="text-brand-gray-text text-sm">
                  Conecte-se com mais de 13.500 empresas parceiras.
                </p>
              </div>
              <div className="bg-brand-green-light rounded-full p-2">
                <ArrowUpRight className="w-4 h-4 text-brand-green" />
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-brand-blue rounded-[25px] p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 border border-brand-blue rounded-xl p-3 flex-shrink-0">
                <Briefcase className="w-5 h-5 text-brand-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-brand-blue text-lg font-extrabold mb-1">Qualificação Profissional</h3>
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
      </section>

      {/* Company Partner Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="bg-brand-gray rounded-[25px] p-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <svg width="58" height="30" viewBox="0 0 58 30" fill="none">
              <path d="M26.8526 27.6548H3.0879C1.38501 27.6548 0 26.4462 0 24.9602V4.88985C0 3.40389 1.38501 2.19531 3.0879 2.19531H26.8526V27.6482V27.6548Z" fill="#11B000"/>
              <path d="M33.7552 0.537425C32.514 -0.175836 30.5916 -0.18244 29.3428 0.537425L6.68311 13.6337C5.44189 14.3469 5.44189 15.5093 6.68311 16.2292L29.305 29.3188C30.5159 30.0189 32.5064 30.0189 33.7174 29.3188L56.3695 16.2226C57.6107 15.5093 57.6107 14.3469 56.3695 13.6271L33.7476 0.537425H33.7552Z" fill="#FFCA00"/>
              <path d="M26.4598 2.20215L6.69116 13.6275C5.44995 14.3408 5.44995 15.5031 6.69116 16.223L26.4522 27.655C36.2684 21.1762 36.276 8.4696 26.4673 2.20215" fill="#25348F"/>
            </svg>
            <h3 className="text-brand-gray-text text-3xl font-extrabold">Sua empresa pode estar aqui!</h3>
          </div>
          <div className="text-right">
            <p className="text-brand-gray-text text-sm mb-4 max-w-md">
              Junte-se às mais de 500 empresas que confiam no Cebrac e colabore para a empregabilidade!
            </p>
            <button className="flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition ml-auto">
              Seja Parceiro
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-brand-blue-darker to-brand-blue-dark rounded-t-[25px] px-10 py-12 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <button className="flex items-center gap-2 bg-brand-green text-white px-6 py-2 rounded-full font-semibold text-sm">
              Para empresas
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </button>
            <button className="flex items-center gap-2 bg-brand-green text-white px-6 py-2 rounded-full font-semibold text-sm">
              Home
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </button>
            <button className="flex items-center gap-2 bg-brand-green text-white px-6 py-2 rounded-full font-semibold text-sm">
              Vagas
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </button>
            <button className="flex items-center gap-2 bg-brand-green text-white px-6 py-2 rounded-full font-semibold text-sm">
              Sobre
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </button>
            <button className="flex items-center gap-2 bg-brand-green text-white px-6 py-2 rounded-full font-semibold text-sm">
              FAQ
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </button>
          </div>

          <div className="border-t border-brand-blue pt-6">
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
