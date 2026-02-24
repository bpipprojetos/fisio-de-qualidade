import { Zap, Activity, Layers, Heart } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Analgesia Imediata",
      description: "Reduz a sensibilidade dos receptores de dor, proporcionando alívio logo nas primeiras sessões.",
      color: "bg-[#14463e]"
    },
    {
      icon: <Activity className="w-6 h-6 text-white" />,
      title: "Novos Vasos Sanguíneos",
      description: "Estimula a neovascularização, aumentando o fluxo de sangue, oxigênio e nutrientes.",
      color: "bg-[#1f5c52]"
    },
    {
      icon: <Layers className="w-6 h-6 text-white" />,
      title: "Produção de Colágeno",
      description: "Acelera a síntese de colágeno, essencial para a reparação de tendões e ligamentos.",
      color: "bg-[#2a7366]"
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Regeneração Celular",
      description: "Libera fatores de crescimento que ativam o processo natural de cura do corpo.",
      color: "bg-[#358a7a]"
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-[#f8faf9]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#14463e] font-bold tracking-widest uppercase text-xs mb-3 block">Mecanismo de Ação</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Como a Terapia por Ondas de Choque elimina a sua dor?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            As ondas acústicas de alta energia criam um estímulo mecânico ("mecanotransdução") que desencadeia poderosas respostas biológicas no seu corpo.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Section with Foot Anatomy Image */}
        <div className="mt-24 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Tecnologia de Ponta
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Utilizamos equipamentos de última geração, calibrados para entregar a dose exata de energia necessária para cada tipo de tecido e profundidade de lesão.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="px-4 py-2 rounded-lg bg-[#f0fdf4] text-[#14463e] font-bold text-sm border border-[#14463e]/10">
                  Aprovado ANVISA
                </div>
                <div className="px-4 py-2 rounded-lg bg-[#f0fdf4] text-[#14463e] font-bold text-sm border border-[#14463e]/10">
                  Aprovado FDA
                </div>
              </div>
            </div>
            <div className="relative h-80 lg:h-auto bg-gray-50">
              <img 
                src="/assets/images/features-saolourenco.jpg" 
                alt="Anatomia do pé e tratamento com ondas de choque" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
