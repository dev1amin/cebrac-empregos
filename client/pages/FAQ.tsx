import { ArrowUpRight, ChevronDown, MessageCircle, Mail } from "lucide-react";
import { ArrowUpRight, ChevronDown, Search } from "lucide-react";
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
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-gray-900 font-medium text-base pr-4">{question}</span>
        <div className={`w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5 text-white" />
        </div>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-0">
          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mt-12 mb-12">
        <div className="bg-gray-50 rounded-3xl p-12 flex items-center justify-between border-2 border-gray-100">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Aqui você tira todas as suas dúvidas
            </h1>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
              Encontre respostas para as principais dúvidas sobre nossa plataforma, cursos e serviços.<br />
              <span className="font-bold">Se não encontrar o que procura, entre em contato conosco.</span>
            </p>
          </div>
          <div className="w-20 h-20 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 ml-8">
            <ArrowUpRight className="w-10 h-10 text-white" />
          </div>
        </div>
        
        {/* Gradient bar */}
        <div className="h-1.5 bg-gradient-to-r from-brand-yellow via-brand-blue to-brand-green rounded-full mt-4"></div>
      </section>

      {/* FAQ Sections */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        {/* Cursos e Certificações - Section 1 */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cursos e Certificações</h2>
            <div className="space-y-3">
              <FAQItem 
                question="O que é o Cebrac?" 
                answer="O CEBRAC é uma instituição de ensino profissionalizante com mais de 30 anos de experiência, oferecendo cursos técnicos e profissionalizantes reconhecidos pelo mercado."
              />
              <FAQItem 
                question="Como funciona a plataforma de empregos?" 
                answer="Nossa plataforma conecta profissionais qualificados com empresas parceiras. Você pode criar seu perfil, buscar vagas e se candidatar diretamente através da plataforma."
              />
              <FAQItem 
                question="A plataforma é gratuita?" 
                answer="Sim, o cadastro e acesso às vagas é completamente gratuito para candidatos. Empresas têm planos específicos para publicação de vagas."
              />
              <FAQItem 
                question="Em quais regiões vocês atuam?" 
                answer="Estamos presentes em todo o território nacional, com unidades físicas e cursos online que atendem todas as regiões do Brasil."
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cursos e Certificações</h2>
            <div className="space-y-3">
              <FAQItem 
                question="Que cursos o CEBRAC oferece?" 
                answer="Oferecemos uma ampla gama de cursos profissionalizantes nas áreas de tecnologia, administração, design, idiomas e muito mais. Consulte nosso catálogo completo no site."
              />
              <FAQItem 
                question="Os certificados são reconhecidos pelo mercado?" 
                answer="Sim, todos os nossos certificados são reconhecidos nacionalmente e valorizados pelas principais empresas do mercado de trabalho."
              />
              <FAQItem 
                question="Posso fazer cursos online?" 
                answer="Sim, oferecemos diversos cursos na modalidade online e híbrida, permitindo que você estude no seu próprio ritmo."
              />
              <FAQItem 
                question="Vocês oferecem suporte para colocação profissional?" 
                answer="Sim, nossa plataforma de empregos conecta alunos formados com empresas parceiras, facilitando sua inserção no mercado de trabalho."
              />
            </div>
          </div>
        </div>

        {/* Para Candidatos / Para Empresas */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Para Candidatos</h2>
            <div className="space-y-3">
              <FAQItem 
                question="Como criar meu perfil de candidato?" 
                answer="Clique em 'Criar meu Perfil', preencha seus dados pessoais, experiências profissionais e qualificações. Quanto mais completo seu perfil, maiores as chances de match com vagas."
              />
              <FAQItem 
                question="Como buscar vagas?" 
                answer="Use nossa ferramenta de busca com filtros por área, localização, tipo de contrato e senioridade. Você também pode salvar buscas para receber alertas de novas vagas."
              />
              <FAQItem 
                question="Como me candidatar a uma vaga?" 
                answer="Acesse a vaga de interesse, leia atentamente os requisitos e clique em 'Candidatar-se'. Seu perfil será enviado automaticamente para o recrutador."
              />
              <FAQItem 
                question="Posso acompanhar o status das minhas candidaturas?" 
                answer="Sim, em seu painel você pode visualizar todas as candidaturas enviadas e acompanhar o status de cada processo seletivo."
              />
              <FAQItem 
                question="Que tipo de suporte vocês oferecem aos candidatos?" 
                answer="Oferecemos suporte via chat, email e telefone para auxiliar em qualquer dúvida sobre cadastro, vagas ou processo seletivo."
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Para Empresas</h2>
            <div className="space-y-3">
              <FAQItem 
                question="Como minha empresa pode usar a plataforma?" 
                answer="Cadastre sua empresa, escolha o plano adequado e comece a publicar vagas. Nossa IA ajuda a filtrar os melhores candidatos para suas necessidades."
              />
              <FAQItem 
                question="Que tipo de profissionais posso encontrar?" 
                answer="Nossa base tem profissionais de diversas áreas e níveis de senioridade, todos com formação qualificada pelo CEBRAC ou experiência comprovada."
              />
              <FAQItem 
                question="Como funciona o processo de seleção?" 
                answer="Você publica a vaga, recebe candidaturas qualificadas pela nossa IA, analisa perfis e agenda entrevistas diretamente pela plataforma."
              />
              <FAQItem 
                question="Vocês oferecem suporte na seleção?" 
                answer="Sim, nossa equipe de RH especializada pode auxiliar em todo o processo seletivo, desde a triagem até a contratação."
              />
              <FAQItem 
                question="Qual o prazo médio para preenchimento de vagas?" 
                answer="Em média, nossas vagas são preenchidas em até 72 horas, graças ao nosso sistema de match inteligente e base qualificada de candidatos."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Não Encontrou Sua Resposta */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Não Encontrou Sua Resposta?
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Nossa equipe está pronta para ajudar você.<br />
              Entre em contato conosco através dos canais disponíveis.
            </p>
          </div>

          {/* Right Side - Contact Options */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between bg-brand-green text-white px-8 py-5 rounded-2xl font-bold hover:opacity-90 transition group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">Fale com o nosso suporte</div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition">
                <ArrowUpRight className="w-5 h-5 text-brand-green" />
              </div>
            </button>

            <button className="w-full flex items-center justify-between bg-white border-2 border-gray-100 text-brand-blue px-8 py-5 rounded-2xl font-bold hover:shadow-md transition group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-brand-blue" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">Enviar mensagem direta</div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:scale-110 transition">
                <ArrowUpRight className="w-5 h-5 text-brand-blue" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Same as Vagas page */}
      <footer className="bg-brand-blue rounded-t-[25px] px-10 pt-16 pb-8 relative mt-16">
        <div className="max-w-7xl mx-auto">
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
