import { ArrowUpRight } from "lucide-react";

export default function ProfileAnalysisSection() {
  const analysisMetrics = [
    { label: "Experiência Profissional", percentage: 64 },
    { label: "Habilidades Técnicas", percentage: 45 },
    { label: "Formação Acadêmica", percentage: 36 },
    { label: "Objetivos de Carreira", percentage: 72 },
    { label: "Preferências Salariais", percentage: 91 },
    { label: "Localização Desejada", percentage: 91 },
  ];

  const steps = [
    {
      number: "1",
      title: "Perfil Profissional",
      description: "Experiências, habilidades e preferências",
    },
    {
      number: "2",
      title: "Compatibilidade",
      description: "Nossa IA compara com milhares de vagas",
    },
    {
      number: "3",
      title: "Recomendações",
      description: "Vagas ranqueadas por compatibilidade",
    },
  ];

  return (
    <section className="pb-20">
      <div>
        {/* Color bars at top */}
        <div className="flex h-2.5">
          <div className="flex-1 bg-brand-green"></div>
          <div className="flex-1 bg-brand-blue"></div>
          <div className="flex-1 bg-brand-yellow"></div>
        </div>

        {/* Main content */}
        <div className="bg-brand-gray-light rounded-b-[25px] pt-12 px-16 pb-0">
          {/* Header */}
          <div className="flex justify-between mb-12 gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold text-brand-gray-text mb-4 leading-tight tracking-tight">
                Descubra agora a vaga perfeita para seu perfil!
              </h2>
            </div>
            <div className="flex-1">
              <p className="text-brand-gray-text text-sm leading-relaxed">
                Preencha um formulário simples e deixe a nossa IA fazer o resto.
                Com um clique, descubra as oportunidades perfeitas para você.
              </p>
            </div>
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-2 gap-8 pb-0">
            {/* Left Card - Steps */}
            <div className="rounded-3xl overflow-hidden relative flex flex-col">
              {/* Top light section with IA badge + title */}
              <div className="bg-[#E9EEFF] rounded-t-3xl px-8 pt-8 pb-6 flex items-start gap-5">
                <div className="flex-shrink-0 w-[90px] h-[90px] rounded-2xl overflow-hidden">
                  <img
                    src="/Mask_group.png"
                    alt="IA"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-[#25348F] text-xl font-extrabold leading-tight mb-2">
                    Análise Inteligente de perfil
                  </h3>
                  <p className="text-[#25348F] text-xs leading-relaxed">
                    Nossa IA analisa seu perfil profissional e encontra as vagas mais
                    compatíveis com suas habilidades, experiência e objetivos de
                    carreira.
                  </p>
                </div>
              </div>

              {/* Bottom dark section with steps + button */}
              <div className="bg-gradient-to-b from-[#193EE2] to-[#010A5B] px-8 pt-6 pb-8 flex-1 flex flex-col rounded-b-3xl">
                {/* Steps */}
                <div className="space-y-4 mb-8 flex-1">
                  {steps.map((step) => (
                    <div
                      key={step.number}
                      className="bg-[#2E4DCB] rounded-2xl py-5 px-5 flex items-center gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-9 h-9 rounded-full border border-white/55 bg-white/15 flex items-center justify-center">
                          <span className="text-white text-sm font-extrabold">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0 bg-[#3A5AE8] rounded-xl px-4 py-2.5 min-w-[160px]">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow flex-shrink-0"></div>
                        <h3 className="text-white font-semibold text-sm whitespace-nowrap">
                          {step.title}
                        </h3>
                      </div>
                      <div className="w-px h-8 bg-white/20 flex-shrink-0"></div>
                      <p className="text-white text-xs leading-tight flex-1">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className="w-full flex items-center justify-between bg-brand-green rounded-[10px] px-5 py-4 font-semibold text-white text-base hover:bg-opacity-90 transition group">
                  <span>Fazer meu teste de Compatibilidade</span>
                  <div className="bg-white rounded-full p-2 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                    <ArrowUpRight className="w-4 h-4 text-brand-green" />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Card - Profile Analysis */}
            <div className="rounded-3xl p-10 bg-[#E9EEFF]">
              {/* Header with icon */}
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-full bg-[#ECEFFF] border border-[#25348F] flex items-center justify-center flex-shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M14.9064 13.0147C15.4722 13.6043 16.0874 13.9262 15.9906 14.8823C15.9044 15.729 14.8843 16.2517 14.1367 15.8767C12.8874 14.8377 11.8032 13.5905 10.6506 12.4389C10.5833 12.3709 10.1806 11.9704 10.1438 11.9672C7.38648 13.8709 3.62283 13.3515 1.49545 10.7519C-0.747597 8.00997 -0.434222 3.95075 2.21264 1.61359C5.36216 -1.16657 10.2289 -0.229584 12.1881 3.46738C13.2817 5.53046 13.1797 8.0291 11.9819 10.021C12.961 11.0154 13.939 12.0086 14.9054 13.0147H14.9064ZM10.8136 6.55881C10.8136 4.13666 8.86923 2.17238 6.4716 2.17238C4.07396 2.17238 2.12956 4.13666 2.12956 6.55881C2.12956 8.98096 4.07396 10.9452 6.4716 10.9452C8.86923 10.9452 10.8136 8.98096 10.8136 6.55881Z"
                        fill="#25348F"
                      />
                    </g>
                  </svg>
                </div>
                <h3 className="text-[#3A479A] text-2xl font-extrabold">
                  Análise de perfil
                </h3>
              </div>

              {/* Analysis Metrics */}
              <div className="space-y-7">
                {analysisMetrics.map((metric) => (
                  <div key={metric.label}>
                    <label className="text-brand-gray-text text-sm font-medium block mb-2.5">
                      {metric.label}
                    </label>
                    <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#4058ED] transition-all duration-500"
                        style={{ width: `${metric.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
