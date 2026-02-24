import { CheckCircle2 } from "lucide-react";

export default function Benefits() {
  const benefits = [
    "Tratamento Não Invasivo (sem cortes)",
    "Resultados Rápidos (3 a 5 sessões)",
    "Sem Efeitos Colaterais Graves",
    "Ataca a Causa da Dor",
    "Sem Necessidade de Afastamento",
    "Baseado em Evidências Científicas"
  ];

  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/images/sl-benefits-close.png"
                alt="Close-up do tratamento por ondas de choque"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#14463e]/90 p-8 backdrop-blur-sm">
                <p className="text-white text-lg font-medium italic leading-relaxed border-l-4 border-white pl-4">
                  "A Terapia por Ondas de Choque é frequentemente a última alternativa antes da cirurgia, com taxas de sucesso impressionantes."
                </p>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#14463e]/10 rounded-2xl -z-10"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <span className="text-[#14463e] font-bold tracking-widest uppercase text-xs mb-2 block">Por que escolher?</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Sua recuperação sem cirurgia começa aqui
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-[#f8faf9] border border-gray-100">
                  <div className="text-[#14463e]">
                    <CheckCircle2 size={24} className="fill-[#14463e]/10" />
                  </div>
                  <span className="text-lg text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                className="bg-[#14463e] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider w-full sm:w-auto hover:bg-[#1f5c52] transition-colors shadow-lg"
                onClick={() => window.open("https://wa.me/5535991910211", "_blank", "noopener,noreferrer")}
              >
                QUERO VIVER SEM DOR
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
