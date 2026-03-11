import { ArrowUpRight, ChevronDown, MessageCircle, Mail, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
      >
        <span className="text-gray-900 font-medium text-sm sm:text-base pr-4">{question}</span>
        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </div>
      </button>
      {isOpen && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 md:px-10 lg:px-[100px]" style={{zoom: 0.7}}>
      <nav className="bg-brand-blue rounded-[25px] sm:rounded-[40px] mx-0 sm:mx-6 mt-4 sm:mt-6 px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F800ecce2934e44f78371bc74f86175a9%2Fefd6f08e8c3b4872bd6e38bdef2fc67d"
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

      <section className="mx-0 sm:mx-6 mt-8 sm:mt-12 mb-8 sm:mb-12">
        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between border-2 border-gray-100 gap-4">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Aqui voce tira todas as suas duvidas
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Encontre respostas para as principais duvidas sobre nossa plataforma, cursos e servicos.<br />
              <span className="font-bold">Se nao encontrar o que procura, entre em contato conosco.</span>
            </p>
          </div>
          <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
            <ArrowUpRight className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
          </div>
        </div>

        <div className="h-1.5 flex rounded-full mt-4 overflow-hidden">
          <div className="w-1/3 bg-brand-yellow"></div>
          <div className="w-1/3 bg-brand-blue"></div>
          <div className="w-1/3 bg-brand-green"></div>
        </div>
      </section>

      <section className="mx-0 sm:mx-6 mb-12 sm:mb-20">
        <div className="bg-gray-200 border border-gray-300 rounded-2xl px-4 sm:px-10 py-4 sm:py-6 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Cursos e Certificacoes</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            <div className="space-y-3">
              <FAQItem
                question="O que e o Cebrac?"
                answer="O CEBRAC e uma instituicao de ensino profissionalizante com mais de 30 anos de experiencia, oferecendo cursos tecnicos e profissionalizantes reconhecidos pelo mercado."
              />
              <FAQItem
                question="Como funciona a plataforma de empregos?"
                answer="Nossa plataforma conecta profissionais qualificados com empresas parceiras. Voce pode criar seu perfil, buscar vagas e se candidatar diretamente atraves da plataforma."
              />
              <FAQItem
                question="A plataforma e gratuita?"
                answer="Sim, o cadastro e acesso as vagas e completamente gratuito para candidatos. Empresas tem planos especificos para publicacao de vagas."
              />
              <FAQItem
                question="Em quais regioes voces atuam?"
                answer="Estamos presentes em todo o territorio nacional, com unidades fisicas e cursos online que atendem todas as regioes do Brasil."
              />
            </div>

            <div className="space-y-3">
              <FAQItem
                question="Que cursos o CEBRAC oferece?"
                answer="Oferecemos uma ampla gama de cursos profissionalizantes nas areas de tecnologia, administracao, design, idiomas e muito mais. Consulte nosso catalogo completo no site."
              />
              <FAQItem
                question="Os certificados sao reconhecidos pelo mercado?"
                answer="Sim, todos os nossos certificados sao reconhecidos nacionalmente e valorizados pelas principais empresas do mercado de trabalho."
              />
              <FAQItem
                question="Posso fazer cursos online?"
                answer="Sim, oferecemos diversos cursos na modalidade online e hibrida, permitindo que voce estude no seu proprio ritmo."
              />
              <FAQItem
                question="Voces oferecem suporte para colocacao profissional?"
                answer="Sim, nossa plataforma de empregos conecta alunos formados com empresas parceiras, facilitando sua insercao no mercado de trabalho."
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 border border-gray-300 rounded-2xl px-4 sm:px-10 py-4 sm:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Para Candidatos</h2>
              <div className="space-y-3">
                <FAQItem
                  question="Como criar meu perfil de candidato?"
                  answer="Clique em 'Criar meu Perfil', preencha seus dados pessoais, experiencias profissionais e qualificacoes. Quanto mais completo seu perfil, maiores as chances de match com vagas."
                />
                <FAQItem
                  question="Como buscar vagas?"
                  answer="Use nossa ferramenta de busca com filtros por area, localizacao, tipo de contrato e senioridade. Voce tambem pode salvar buscas para receber alertas de novas vagas."
                />
                <FAQItem
                  question="Como me candidatar a uma vaga?"
                  answer="Acesse a vaga de interesse, leia atentamente os requisitos e clique em 'Candidatar-se'. Seu perfil sera enviado automaticamente para o recrutador."
                />
                <FAQItem
                  question="Posso acompanhar o status das minhas candidaturas?"
                  answer="Sim, em seu painel voce pode visualizar todas as candidaturas enviadas e acompanhar o status de cada processo seletivo."
                />
                <FAQItem
                  question="Que tipo de suporte voces oferecem aos candidatos?"
                  answer="Oferecemos suporte via chat, email e telefone para auxiliar em qualquer duvida sobre cadastro, vagas ou processo seletivo."
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Para Empresas</h2>
              <div className="space-y-3">
                <FAQItem
                  question="Como minha empresa pode usar a plataforma?"
                  answer="Cadastre sua empresa, escolha o plano adequado e comece a publicar vagas. Nossa IA ajuda a filtrar os melhores candidatos para suas necessidades."
                />
                <FAQItem
                  question="Que tipo de profissionais posso encontrar?"
                  answer="Nossa base tem profissionais de diversas areas e niveis de senioridade, todos com formacao qualificada pelo CEBRAC ou experiencia comprovada."
                />
                <FAQItem
                  question="Como funciona o processo de selecao?"
                  answer="Voce publica a vaga, recebe candidaturas qualificadas pela nossa IA, analisa perfis e agenda entrevistas diretamente pela plataforma."
                />
                <FAQItem
                  question="Voces oferecem suporte na selecao?"
                  answer="Sim, nossa equipe de RH especializada pode auxiliar em todo o processo seletivo, desde a triagem ate a contratacao."
                />
                <FAQItem
                  question="Qual o prazo medio para preenchimento de vagas?"
                  answer="Em media, nossas vagas sao preenchidas em ate 72 horas, gracas ao nosso sistema de match inteligente e base qualificada de candidatos."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-0 sm:mx-6 mb-12 sm:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Nao Encontrou Sua Resposta?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Nossa equipe esta pronta para ajudar voce.<br />
              Entre em contato conosco atraves dos canais disponiveis.
            </p>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-between bg-brand-green text-white px-4 sm:px-8 py-4 sm:py-5 rounded-2xl font-bold hover:opacity-90 transition group">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-base sm:text-lg">Fale com o nosso suporte</div>
                </div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition flex-shrink-0">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green" />
              </div>
            </button>

            <button className="w-full flex items-center justify-between bg-white border-2 border-gray-100 text-brand-blue px-4 sm:px-8 py-4 sm:py-5 rounded-2xl font-bold hover:shadow-md transition group">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-base sm:text-lg">Enviar mensagem direta</div>
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
