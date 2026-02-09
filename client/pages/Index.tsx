import { ArrowUpRight, Search, FileText, TrendingUp, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-white p-[39px]">
      {/* Hero Section */}
      <section className="relative rounded-[25px] overflow-visible pb-8">
        {/* Background Image with rounded corners */}
        <div className="absolute inset-0 rounded-[25px] overflow-hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F800ecce2934e44f78371bc74f86175a9%2F9ca2f76aac7244e59ada473eb7d44ff1"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Navigation with Glass Effect */}
        <nav className="relative z-10 mx-10 mt-6 mb-32 flex items-center justify-between px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <div className="flex items-center gap-6">
            {/* First Logo */}
            <div className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F800ecce2934e44f78371bc74f86175a9%2Fefd6f08e8c3b4872bd6e38bdef2fc67d"
                alt="Cebrac Logo"
                className="h-6"
              />
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-white/30"></div>

            {/* Second Logo */}
            <div className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F800ecce2934e44f78371bc74f86175a9%2Fde0f743057674fdfaef58afdb6bd8369"
                alt="Cebrac Empresa Logo"
                className="h-6"
              />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-white text-sm font-medium hover:opacity-80 transition"
            >
              Home
            </Link>
            <Link
              to="/vagas"
              className="text-white text-sm font-medium hover:opacity-80 transition"
            >
              Vagas
            </Link>
            <Link
              to="/para-empresas"
              className="text-white text-sm font-medium hover:opacity-80 transition"
            >
              Para empresas
            </Link>
            <Link
              to="/sobre"
              className="text-white text-sm font-medium hover:opacity-80 transition"
            >
              Sobre
            </Link>
            <Link
              to="/faq"
              className="text-white text-sm font-medium hover:opacity-80 transition"
            >
              FAQ
            </Link>
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

        {/* Hero Content */}
        <div className="relative z-10 px-10 pb-20">
          <div className="flex justify-between items-start">
            {/* Left Side */}
            <div className="max-w-2xl">
              {/* Cebrac Empregos Badge */}
              <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-8">
                <span className="text-white text-sm">Cebrac Empregos</span>
              </div>

              <h1 className="text-white text-[62px] font-light leading-[1.1] tracking-tight mb-6">
                Diariamente,
                <br />
                conectamos talentos
                <br />
                com as melhores
                <br />
                <span className="text-brand-yellow font-extrabold">
                  oportunidades
                </span>
              </h1>
            </div>

            {/* Right Side - positioned lower */}
            <div className="max-w-sm mt-32">
              <p className="text-white text-right text-base mb-8 leading-relaxed">
                Mais de 5.000 vagas disponíveis e cursos profissionalizantes
                para impulsionar sua carreira. Junte-se a milhares de
                profissionais que encontraram seu futuro conosco.
              </p>
              <div className="flex justify-end">
                <button className="flex items-center gap-8 bg-white text-brand-gray-text px-5 py-3.5 rounded-[35px] font-semibold hover:shadow-lg transition">
                  Faça agora seu teste vocacional
                  <div className="bg-brand-blue rounded-full p-1.5">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Bubble */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
          <div className="bg-white rounded-full p-4 shadow-lg">
            <svg width="35" height="30" viewBox="0 0 35 30" fill="none">
              <ellipse cx="17.5" cy="15" rx="17.5" ry="15" fill="#25348F" />
              <circle cx="17.5" cy="15" r="8" fill="white" />
            </svg>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-5 gap-6 items-center">
            {/* Stat 1 */}
            <div className="text-center">
              <h3 className="text-brand-blue-dark text-5xl font-extrabold mb-4 tracking-tight">
                5.172
              </h3>
              <div className="border border-brand-blue-dark rounded-full px-6 py-2 inline-block">
                <p className="text-brand-blue-dark text-sm whitespace-nowrap">Vagas Ativas</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <h3 className="text-brand-blue-dark text-5xl font-extrabold mb-4 tracking-tight">
                +3.9k
              </h3>
              <div className="border border-brand-blue-dark rounded-full px-6 py-2 inline-block">
                <p className="text-brand-blue-dark text-sm whitespace-nowrap">Currículos</p>
              </div>
            </div>

            {/* Central Message */}
            <div className="text-center flex flex-col items-center justify-center">
              <p className="text-brand-blue-dark text-lg font-extrabold max-w-[190px] leading-tight">
                A melhor escola profissionalizante{" "}
                <span className="font-extrabold">da América Latina!</span>
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <h3 className="text-brand-blue-dark text-5xl font-extrabold mb-4 tracking-tight">
                +13.5k
              </h3>
              <div className="border border-brand-blue-dark rounded-full px-6 py-2 inline-block">
                <p className="text-brand-blue-dark text-sm whitespace-nowrap">
                  Empresas Parceiras
                </p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <h3 className="text-brand-blue-dark text-5xl font-extrabold mb-4 tracking-tight">
                +21k
              </h3>
              <div className="border border-brand-blue-dark rounded-full px-6 py-2 inline-block">
                <p className="text-brand-blue-dark text-sm whitespace-nowrap">Contratações</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="px-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[25px] py-8">
            <div className="flex items-center justify-center gap-6 px-16">
              {/* Logo 1 */}
              <div className="w-[138px] h-[120px] bg-brand-gray rounded-full flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a4a7e3655a7f431c460dea7ad9115310b287ec09?width=176"
                  alt="Agrale"
                  className="w-20 h-auto"
                />
              </div>

              {/* Arrow */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#25348F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Logo 2 */}
              <div className="w-[138px] h-[120px] bg-brand-gray rounded-full flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/51ce4c98fe83fe06e8728c248e7240eb171cd409?width=176"
                  alt="Ambev"
                  className="w-20 h-auto"
                />
              </div>

              {/* Arrow */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#25348F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Logo 3 */}
              <div className="w-[138px] h-[120px] bg-brand-gray rounded-full flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F800ecce2934e44f78371bc74f86175a9%2F009c2b4eb8114b6aae90e13b48fbb06d"
                  alt="Company 3"
                  className="w-20 h-auto"
                />
              </div>

              {/* Arrow */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#25348F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Logo 4 */}
              <div className="w-[138px] h-[120px] bg-brand-gray rounded-full flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F800ecce2934e44f78371bc74f86175a9%2F4c31880b8b44469380788aa76dc641cf"
                  alt="Company 4"
                  className="w-16 h-auto"
                />
              </div>

              {/* Arrow */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#25348F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Logo 5 */}
              <div className="w-[138px] h-[120px] bg-brand-gray rounded-full flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F800ecce2934e44f78371bc74f86175a9%2F559e8232c6804810870bac86d5747257"
                  alt="Company 5"
                  className="w-16 h-auto"
                />
              </div>
            </div>
          </div>

          {/* Company CTA */}
          <div className="bg-brand-gray rounded-[25px] p-6 mt-8 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <svg width="58" height="30" viewBox="0 0 58 30" fill="none">
                <path
                  d="M26.8526 27.6548H3.0879C1.38501 27.6548 0 26.4462 0 24.9602V4.88985C0 3.40389 1.38501 2.19531 3.0879 2.19531H26.8526V27.6482V27.6548Z"
                  fill="#11B000"
                />
                <path
                  d="M33.7552 0.537425C32.514 -0.175836 30.5916 -0.18244 29.3428 0.537425L6.68311 13.6337C5.44189 14.3469 5.44189 15.5093 6.68311 16.2292L29.305 29.3188C30.5159 30.0189 32.5064 30.0189 33.7174 29.3188L56.3695 16.2226C57.6107 15.5093 57.6107 14.3469 56.3695 13.6271L33.7476 0.537425H33.7552Z"
                  fill="#FFCA00"
                />
                <path
                  d="M26.4598 2.20215L6.69116 13.6275C5.44995 14.3408 5.44995 15.5031 6.69116 16.223L26.4522 27.655C36.2684 21.1762 36.276 8.4696 26.4673 2.20215"
                  fill="#25348F"
                />
              </svg>
              <div>
                <h3 className="text-brand-gray-text text-[35px] font-extrabold leading-tight tracking-tight">
                  Sua empresa pode estar aqui!
                </h3>
              </div>
            </div>

            <div>
              <p className="text-brand-gray-text text-sm max-w-sm mb-4">
                Junte-se às mais de 500 empresas que confiam no Cebrac e
                colabore para a empregabilidade!
              </p>
              <button className="flex items-center gap-2 bg-brand-green text-white px-6 py-2.5 rounded-full font-semibold text-sm">
                Seja Parceiro
                <div className="bg-white rounded-full p-1">
                  <ArrowUpRight className="w-3 h-3 text-brand-green" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="px-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-gray rounded-b-[25px] p-16">
            <div className="flex justify-between mb-12">
              <div>
                <h2 className="text-brand-gray-text text-[35px] font-extrabold leading-tight tracking-tight max-w-md mb-4">
                  Descubra como funciona a nossa plataforma
                </h2>
              </div>
              <div>
                <p className="text-brand-gray-text text-sm max-w-md">
                  Três passos simples para conquistar a sua próxima oportunidade
                  profissional com maior eficiência.
                </p>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {/* Step 1 - Active */}
              <div className="bg-white border-2 border-brand-green rounded-[25px] p-6 shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-brand-green text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold">
                      1
                    </div>
                    <div className="bg-brand-green-light border border-brand-green rounded-xl p-3">
                      <Search className="w-5 h-5 text-brand-green" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-brand-green text-lg font-extrabold mb-2 tracking-tight">
                      Selecione sua vaga ideal
                    </h3>
                    <p className="text-brand-gray-text text-sm leading-relaxed">
                      Navegue por milhares de oportunidades filtradas
                      especialmente para seu perfil. Nossa plataforma usa
                      inteligência artificial para recomendar as vagas mais
                      compatíveis com sua experiência e objetivos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white border border-brand-gray-border rounded-[25px] p-6 shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-brand-gray-border text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold">
                      2
                    </div>
                    <div className="bg-gray-100 border border-brand-gray-border rounded-xl p-3">
                      <FileText className="w-5 h-5 text-brand-gray-border" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-brand-gray-border text-lg font-extrabold tracking-tight">
                      Análise detalhada do seu currículo
                    </h3>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white border border-brand-gray-border rounded-[25px] p-6 shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-brand-gray-border text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold">
                      3
                    </div>
                    <div className="bg-gray-100 border border-brand-gray-border rounded-xl p-3">
                      <TrendingUp className="w-5 h-5 text-brand-gray-border" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-brand-gray-border text-lg font-extrabold tracking-tight">
                      Consiga o emprego dos seus sonhos
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side preview */}
            <div className="absolute right-10 top-0 w-1/3">
              {/* Job card preview would go here */}
            </div>

            {/* Color bars at bottom */}
            <div className="flex mt-12 -mx-16">
              <div className="h-2 bg-brand-yellow flex-1"></div>
              <div className="h-2 bg-brand-blue flex-1"></div>
              <div className="h-2 bg-[#11B000] flex-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Development Section */}
      <section className="px-10 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Decorative lines */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="h-px bg-gray-300 w-60"></div>
            <svg width="35" height="30" viewBox="0 0 35 30" fill="none">
              <ellipse cx="17.5" cy="15" rx="17.5" ry="15" fill="#25348F" />
              <circle cx="17.5" cy="15" r="8" fill="white" />
            </svg>
            <div className="h-px bg-gray-300 w-60"></div>
          </div>

          <h2 className="text-5xl font-medium text-brand-gray-text mb-4 tracking-tight">
            Desenvolvido para{" "}
            <span className="font-extrabold">profissionais modernos</span>
          </h2>
          <p className="text-brand-gray-text text-sm max-w-lg mx-auto mb-12">
            O Cebrac forma profissionais com foco, prática e qualidade, prontos
            para encarar os desafios do mercado de trabalho.
          </p>

          <button className="bg-brand-blue text-white px-8 py-3 rounded-full font-semibold mb-16 flex items-center gap-2 mx-auto">
            <Eye className="w-4 h-4" />
            Visualize cursos para sua carreira
          </button>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-16">
            {/* Card 1 - Primary */}
            <div className="bg-brand-blue text-white rounded-2xl p-8 shadow-lg">
              <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center mb-12">
                <span className="text-sm font-medium">01.</span>
              </div>
              <div className="text-left">
                <h3 className="text-4xl font-bold mb-4">72h</h3>
                <p className="text-sm font-bold mb-2">
                  Tempo médio para conseguir emprego
                </p>
                <p className="text-xs opacity-90">
                  Nossos alunos conseguem colocação profissional em até 3 dias.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-brand-gray border border-brand-blue text-brand-gray-text rounded-2xl p-8">
              <div className="border border-brand-gray-text rounded-full w-10 h-10 flex items-center justify-center mb-12">
                <span className="text-sm font-medium">02.</span>
              </div>
              <div className="text-left">
                <h3 className="text-4xl font-bold text-brand-blue mb-4">94%</h3>
                <p className="text-sm font-bold mb-2">
                  Cálculo da taxa de empregabilidade
                </p>
                <p className="text-xs">
                  Quase todos os nossos formandos conseguem emprego.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-brand-gray border border-brand-blue text-brand-gray-text rounded-2xl p-8">
              <div className="border border-brand-gray-text rounded-full w-10 h-10 flex items-center justify-center mb-12">
                <span className="text-sm font-medium">03.</span>
              </div>
              <div className="text-left">
                <h3 className="text-4xl font-bold text-brand-blue mb-4">
                  +45%
                </h3>
                <p className="text-sm font-bold mb-2">
                  Crescimento no salário médio
                </p>
                <p className="text-xs">Aumento significativo após conclusão.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-brand-gray border border-brand-blue text-brand-gray-text rounded-2xl p-8">
              <div className="border border-brand-gray-text rounded-full w-10 h-10 flex items-center justify-center mb-12">
                <span className="text-sm font-medium">04.</span>
              </div>
              <div className="text-left">
                <h3 className="text-4xl font-bold text-brand-blue mb-4">
                  500+
                </h3>
                <p className="text-sm font-bold mb-2">
                  Empresas parceiras no Cebrac Empresa
                </p>
              </div>
            </div>
          </div>

          {/* Learning Paths */}
          <div className="grid grid-cols-3 gap-6">
            {/* Path 1 */}
            <div className="bg-brand-blue rounded-2xl overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6 text-left text-white">
                <h4 className="text-lg font-extrabold mb-2">
                  Aprendizado Acelerado
                </h4>
              </div>
            </div>

            {/* Path 2 */}
            <div className="bg-brand-blue rounded-2xl overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6 text-left text-white">
                <h4 className="text-lg font-extrabold mb-2">Foco no Mercado</h4>
              </div>
            </div>

            {/* Path 3 */}
            <div className="bg-brand-blue rounded-2xl overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6 text-left text-white">
                <h4 className="text-lg font-extrabold mb-2">
                  Mentoria Personalizada
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-16">
            {/* Left - Heading */}
            <div>
              <h2 className="text-5xl font-medium text-brand-gray-text mb-6 tracking-tight leading-tight">
                Veja tudo o que nossos mais de{" "}
                <span className="font-extrabold">2 milhões de alunos</span>{" "}
                dizem!
              </h2>
              <p className="text-brand-gray-text text-sm">
                Histórias reais de profissionais que encontraram suas
                oportunidades ideais através do Cebrac Empregos. Venha você
                também mudar de vida com seu novo emprego.
              </p>
            </div>

            {/* Right - Testimonials */}
            <div className="space-y-4">
              <div className="bg-brand-gray rounded-2xl p-6 flex gap-4">
                <div className="flex-1">
                  <p className="text-xs text-brand-gray-text mb-3 leading-relaxed">
                    "Mivara made our honeymoon unforgettable. From the
                    ocean-view villa to the candlelit dinner on the beach, every
                    moment felt personal and thoughtful. We can't wait to
                    return."
                  </p>
                  <p className="text-xs font-semibold text-brand-gray-text">
                    João Oliveira, Fortaleza/CE
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0"></div>
              </div>

              <div className="bg-brand-gray rounded-2xl p-6 flex gap-4">
                <div className="flex-1">
                  <p className="text-xs text-brand-gray-text mb-3 leading-relaxed">
                    "It's rare to find a place where you can completely
                    disconnect but Mivara gave us that. The spa was beyond
                    amazing, and every part of the resort felt like a peaceful
                    retreat."
                  </p>
                  <p className="text-xs font-semibold text-brand-gray-text">
                    Nathalia Pereira, Londrina/PR
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0"></div>
              </div>

              <div className="bg-brand-gray rounded-2xl p-6 flex gap-4">
                <div className="flex-1">
                  <p className="text-xs text-brand-gray-text mb-3 leading-relaxed">
                    "Mivara exceeded all our expectations! The staff was
                    incredibly friendly, and the excursions offered were
                    breathtaking. We truly felt like VIPs throughout our stay."
                  </p>
                  <p className="text-xs font-semibold text-brand-gray-text">
                    Pedro Afonso, Curitiba/PR
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-16">
            {/* Left - CTA */}
            <div>
              <h2 className="text-5xl font-medium text-brand-gray-text mb-6 tracking-tight leading-tight">
                Está pronto para transformar sua carreira?
              </h2>
              <p className="text-brand-gray-text text-sm mb-8">
                Junte-se a milhares de profissionais que já encontraram suas
                oportunidades ideias através do Cebrac. Cadastre-se
                gratuitamente e tenha acesso a vagas exclusivas.
              </p>
              <button className="flex items-center gap-4 bg-brand-blue text-white px-8 py-3 rounded-full font-semibold">
                Cadastrar Currículo
                <div className="bg-white rounded-full p-2">
                  <TrendingUp className="w-4 h-4 text-brand-blue" />
                </div>
              </button>
            </div>

            {/* Right - Features */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="bg-white border-2 border-brand-green rounded-[25px] p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-green-light border border-brand-green rounded-xl p-3 flex-shrink-0">
                    <Search className="w-5 h-5 text-brand-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-brand-green text-lg font-extrabold mb-1 tracking-tight">
                      Rede de Empresas
                    </h3>
                    <p className="text-brand-gray-text text-sm">
                      Conecte-se com mais de 13.500 empresas parceiras.
                    </p>
                  </div>
                  <div className="bg-brand-green-light rounded-full p-2">
                    <ArrowUpRight className="w-4 h-4 text-brand-green" />
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white border-2 border-brand-blue rounded-[25px] p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 border border-brand-blue rounded-xl p-3 flex-shrink-0">
                    <FileText className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-brand-blue text-lg font-extrabold mb-1 tracking-tight">
                      Qualificação Profissional
                    </h3>
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-brand-blue-darker to-brand-blue-dark rounded-t-[25px] px-10 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Footer Navigation */}
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
                <a href="#" className="hover:opacity-80">
                  Privacy Policy
                </a>
                <a href="#" className="hover:opacity-80">
                  Terms of Service
                </a>
                <a href="#" className="hover:opacity-80">
                  Cookies Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
