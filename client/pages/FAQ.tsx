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
      {/* Navbar - Reused */}
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
          <Link to="/para-empresas" className="text-white text-sm font-medium hover:opacity-80 transition">Para empresas</Link>
          <Link to="/sobre" className="text-white text-sm font-medium hover:opacity-80 transition">Sobre</Link>
          <Link to="/faq" className="text-white text-sm font-medium hover:opacity-80 transition">FAQ</Link>
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

      {/* Blue Background Spacer */}
      <div className="bg-brand-blue h-24"></div>

      {/* Footer - Reused */}
      <footer className="bg-brand-blue px-10 py-12 -mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Link to="/para-empresas" className="flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
              Para empresas
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </Link>
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
            <Link to="/sobre" className="flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
              Sobre
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </Link>
            <Link to="/faq" className="flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
              FAQ
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 text-brand-green" />
              </div>
            </Link>
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
