import { Check } from "lucide-react";

export default function Treatments() {
  const treatments = [
    {
      area: "Coluna Vertebral",
      items: [
        "Hérnia de Disco",
        "Lombalgia Crônica",
        "Cervicalgia",
        "Dor Ciática",
        "Pontos Gatilho (Trigger Points)"
      ]
    },
    {
      area: "Ombro e Braço",
      items: [
        "Tendinite do Manguito Rotador",
        "Bursite Subacromial",
        "Epicondilite (Cotovelo de Tenista)",
        "Capsulite Adesiva",
        "Calcificações no Ombro"
      ]
    },
    {
      area: "Membros Inferiores",
      items: [
        "Fascite Plantar e Esporão",
        "Tendinite de Aquiles",
        "Tendinite Patelar (Joelho)",
        "Bursite Trocantérica (Quadril)",
        "Canelite"
      ]
    }
  ];

  return (
    <section id="tratamentos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#14463e] font-bold tracking-widest uppercase text-xs mb-3 block">Áreas de Atuação</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Tratamento completo para todo o corpo
          </h2>
          <p className="text-gray-600 text-lg">
            Nossa tecnologia atua com eficácia em diversas regiões, desde a coluna vertebral até as extremidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index}
              className="bg-[#f8faf9] rounded-2xl p-8 border border-gray-100 hover:border-[#14463e]/20 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-[#14463e] mb-6 pb-4 border-b border-gray-200">
                {treatment.area}
              </h3>
              
              <ul className="space-y-4">
                {treatment.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#14463e]/10 flex items-center justify-center text-[#14463e] flex-shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <button 
                  className="text-[#14463e] font-bold text-sm uppercase tracking-wider hover:text-[#1f5c52] transition-colors flex items-center gap-2 group"
                  onClick={() => window.open("https://typebot.co/bpip-ludmila-toc", "_blank", "noopener,noreferrer")}
                >
                  Agendar Avaliação
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
