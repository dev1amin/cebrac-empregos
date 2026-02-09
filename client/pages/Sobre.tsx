import { ArrowUpRight, Target, Users, TrendingUp, Search, Settings, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sobre() {
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

      {/* Hero Section - Same as ParaEmpresas */}
      <section className="relative bg-brand-blue rounded-t-[40px] mx-6 mt-6 overflow-hidden h-[79vh] flex flex-col">
        <div className="relative z-10 px-12 flex-1 flex flex-col">
          {/* "Grandes Oportunidades" badge - Top Right */}
          <div className="flex justify-end pt-8">
            <button className="px-6 py-2.5 border-2 border-white/30 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition">
              Grandes Oportunidades
            </button>
          </div>

          {/* Main Hero Content - Inside a card at bottom */}
          <div className="flex-1 flex items-end pb-10">
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-3xl p-10 w-full">
              <h1 className="text-white text-5xl font-bold mb-6">
                Busca pela Transformação de Vidas e Carreiras
              </h1>
              <div className="flex items-start gap-3">
                <p className="text-white/90 text-lg leading-relaxed flex-1">
                  Há mais de 30 anos, o CEBRAC é referência em educação profissional, conectando talentos às melhores 
                  oportunidades do mercado de trabalho brasileiro.
                </p>
                <button className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-opacity-90 transition">
                  <ArrowUpRight className="w-5 h-5 text-brand-blue" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient bar at bottom - 33% yellow, 33% blue, 33% green */}
        <div className="flex h-3">
          <div className="bg-brand-yellow" style={{width: '33.33%'}}></div>
          <div className="bg-brand-blue" style={{width: '33.33%'}}></div>
          <div className="bg-brand-green" style={{width: '33.34%'}}></div>
        </div>
      </section>

      {/* Company Partner Banner */}
      <section className="mx-6 my-12">
        <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-between">
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
      </section>

      {/* Mission, Vision, Values - Nossa Missão wider with icon on side */}
      <section className="mx-6 mb-20">
        {/* Nossa Missão - Full width with icon on right */}
        <div className="bg-brand-blue rounded-3xl p-10 text-white shadow-lg hover:shadow-xl transition flex items-center gap-8 mb-6">
          <div className="flex-1">
            <h3 className="text-4xl font-bold mb-4">Nossa Missão</h3>
            <p className="text-white/90 text-base leading-relaxed">
              Capacitar profissionais com conhecimentos práticos e atualizados, preparando-os para os desafios do mercado de trabalho moderno.
            </p>
          </div>
          <div className="flex-shrink-0 w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center">
            <Target className="w-12 h-12 text-brand-blue" />
          </div>
        </div>

        {/* Vision and Values - Side by side */}
        <div className="grid grid-cols-2 gap-6">
          {/* Nossa Visão */}
          <div className="bg-gray-100 rounded-3xl p-8">
            <h3 className="text-brand-blue text-2xl font-bold mb-3">Nossa Visão</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ser referência nacional em educação profissional e empregabilidade.
            </p>
          </div>

          {/* Nossos Valores */}
          <div className="bg-gray-100 rounded-3xl p-8">
            <h3 className="text-brand-blue text-2xl font-bold mb-3">Nossos Valores</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Qualidade, inovação, ética e compromisso com resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História - Increased lateral padding */}
      <section className="mx-24 mb-20">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Nossa História</h2>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              Fundado em 1992, o CEBRAC nasceu com o propósito de democratizar o acesso à educação profissional de qualidade. 
              Ao longo de três décadas, formamos mais de 500.000 profissionais em diversas áreas. Nossa trajetória é marcada pela 
              constante evolução e adaptação às demandas do mercado. Pioneiros em metodologias inovadoras, sempre mantivemos o 
              foco na empregabilidade e no desenvolvimento integral dos nossos alunos.
            </p>
            <p className="text-gray-700 text-base mb-8 leading-relaxed">
              <span className="font-bold">Hoje, com presença em todo o território nacional</span>, continuamos nossa missão de 
              transformar vidas através da educação, conectando talentos às melhores oportunidades profissionais.
            </p>
            <button className="flex items-center gap-3 bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition">
              <TrendingUp className="w-5 h-5" />
              Quero cadastrar minha empresa
            </button>
          </div>

          {/* Right Side - Statistics */}
          <div className="grid grid-cols-2 gap-4">
            {/* 30+ */}
            <div className="bg-brand-blue rounded-3xl p-8 text-white">
              <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center mb-4">
                <span className="text-white text-xs font-bold">01</span>
              </div>
              <div className="text-5xl font-bold mb-2">30+</div>
              <div className="text-sm font-semibold mb-2">Anos de Experiência</div>
              <p className="text-white/80 text-xs">
                Muito orgulho do caminho trilhado até aqui, crescendo base e conquistas.
              </p>
            </div>

            {/* 2M+ */}
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-8">
              <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4">
                <span className="text-gray-600 text-xs font-bold">02</span>
              </div>
              <div className="text-5xl font-bold text-brand-blue mb-2">2M+</div>
              <div className="text-sm font-semibold text-gray-900 mb-2">Profissionais Formados</div>
              <p className="text-gray-600 text-xs">
                Acumulamos mais de 2 milhões de alunos formados em todo o território nacional.
              </p>
            </div>

            {/* 94% */}
            <div className="bg-brand-green rounded-3xl p-8 text-white">
              <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center mb-4">
                <span className="text-white text-xs font-bold">03</span>
              </div>
              <div className="text-5xl font-bold mb-2">94%</div>
              <div className="text-sm font-semibold mb-2">Taxa de Empregabilidade</div>
              <p className="text-white/90 text-xs">
                Garantir as qualidade nacional ampliando suas oportunidades.
              </p>
            </div>

            {/* 1000+ */}
            <div className="bg-yellow-400 rounded-3xl p-8">
              <div className="w-10 h-10 rounded-full border-2 border-gray-900/30 flex items-center justify-center mb-4">
                <span className="text-gray-900 text-xs font-bold">04</span>
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-sm font-semibold text-gray-900 mb-2">Empresas Parceiras</div>
              <p className="text-gray-900/80 text-xs">
                Traz grandes ideias de crescimento e de fundação de mercado contínua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery - Right after Nossa História */}
      <section className="mx-6 mb-20">
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-gray-200 rounded-3xl aspect-video"></div>
          <div className="bg-gray-200 rounded-3xl aspect-video"></div>
          <div className="bg-gray-200 rounded-3xl aspect-video"></div>
          <div className="bg-gray-200 rounded-3xl aspect-video"></div>
        </div>
      </section>

      {/* What Makes Cebrac Unique - Redesigned with larger cards */}
      <section className="mx-6 mb-20">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Descubra que torna o<br />Cebrac uma rede única!
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Combinamos tradição educacional com inovação tecnológica para oferecer a melhor experiência de aprendizado.
          </p>
        </div>

        {/* Row 1: Foco (small) | Metodologia (large green) | Certificação (small) */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Foco na Empregabilidade - Normal */}
          <div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Foco na Empregabilidade</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cursos desenvolvidos em parceria com empresas para atender demandas reais.
            </p>
          </div>

          {/* Metodologia Prática - Large green with icon */}
          <div className="bg-brand-green rounded-3xl p-8 text-white shadow-lg flex items-center gap-6">
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Metodologia Prática</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Aprendizado baseado em projetos reais e situações do mercado de trabalho.
              </p>
            </div>
          </div>

          {/* Certificação Reconhecida - Normal */}
          <div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Certificação Reconhecida</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Certificados valorizados pelo mercado e reconhecidos nacionalmente.
            </p>
          </div>
        </div>

        {/* Row 2: Acompanhamento (large blue) | Inovação (small) | Resultados (small) */}
        <div className="grid grid-cols-3 gap-6">
          {/* Acompanhamento Personalizado - Large blue with icon */}
          <div className="bg-brand-blue rounded-3xl p-8 text-white shadow-lg flex items-center gap-6">
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Acompanhamento Personalizado</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Mentoria individual e suporte contínuo durante toda a jornada.
              </p>
            </div>
          </div>

          {/* Inovação Constante - Normal */}
          <div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Inovação Constante</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sempre atualizados com as últimas tendências e tecnologias do mercado.
            </p>
          </div>

          {/* Resultados Comprovados - Normal */}
          <div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Resultados Comprovados</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Histórico sólido de sucesso na colocação profissional dos nossos alunos.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-6 mb-20">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Pronto para Transformar sua Carreira?
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Junte-se a milhares de profissionais que já encontraram suas oportunidades ideais através do Cebrac. 
              Cadastre-se gratuitamente e tenha acesso a vagas exclusivas.
            </p>
          </div>

          {/* Right Side - CTA Buttons */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between bg-brand-green text-white px-8 py-5 rounded-2xl font-bold hover:opacity-90 transition group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">Explorar oportunidades</div>
                  <div className="text-white/80 text-sm">Conecte-se com mais de 13.500 empresas parceiras.</div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition">
                <ArrowUpRight className="w-5 h-5 text-brand-green" />
              </div>
            </button>

            <button className="w-full flex items-center justify-between bg-white border-2 border-gray-100 text-brand-blue px-8 py-5 rounded-2xl font-bold hover:shadow-md transition group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">Criar meu Perfil</div>
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
