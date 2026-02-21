import { ArrowRight } from "lucide-react";

export function Pathologies() {
  const pathologies = [
    {
      area: "Pé e Tornozelo",
      image: "/assets/images/toc_pe_nologo.jpg",
      conditions: [
        "Fascite Plantar",
        "Esporão de Calcâneo",
        "Tendinite de Aquiles",
        "Neuroma de Morton",
        "Entorses e Lesões Ligamentares"
      ]
    },
    {
      area: "Joelho",
      image: "/assets/images/toc_joelho_nologo.jpg",
      conditions: [
        "Tendinite Patelar (Joelho de Saltador)",
        "Tendinite da Pata de Ganso",
        "Síndrome da Dor Femoropatelar",
        "Lesões Meniscais (casos específicos)",
        "Artrose (alívio de sintomas)"
      ]
    },
    {
      area: "Quadril",
      image: "/assets/images/toc_quadril_nologo.jpg",
      conditions: [
        "Bursite Trocantérica",
        "Tendinopatia Glútea",
        "Síndrome do Piriforme",
        "Pubalgia",
        "Dor Lateral do Quadril"
      ]
    }
  ];

  return (
    <section id="patologias" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Áreas de Atuação</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Especialistas no tratamento de <span className="text-primary">membros inferiores</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Nossa equipe é altamente especializada em identificar e tratar as patologias mais complexas de joelho, quadril e pé.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pathologies.map((item, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img loading="lazy" 
                  src={item.image} 
                  alt={item.area} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <h3 className="absolute bottom-4 left-6 text-white font-display text-2xl font-bold z-20">
                  {item.area}
                </h3>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  {item.conditions.map((condition, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-sm font-medium">{condition}</span>
                    </li>
                  ))}
                </ul>
                
                <button onClick={() => window.open("https://typebot.co/bpip-angelica-toc", "_blank")} className="w-full py-3 px-4 rounded-xl border border-gray-200 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:border-primary">
                  SAIBA MAIS <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
