import { Zap, Droplet, Layers, Activity } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Analgesia",
      description: "Reduz a sensibilidade dos receptores de dor, proporcionando alívio logo nas primeiras sessões."
    },
    {
      icon: <Droplet className="w-6 h-6 text-white" />,
      title: "Novos Vasos Sanguíneos",
      description: "Estimula a neovascularização, aumentando o fluxo de sangue, oxigênio e nutrientes para a área lesionada."
    },
    {
      icon: <Layers className="w-6 h-6 text-white" />,
      title: "Produção de Colágeno",
      description: "Acelera a síntese de colágeno, proteína essencial para a reparação e fortalecimento de tendões e ligamentos."
    },
    {
      icon: <Activity className="w-6 h-6 text-white" />,
      title: "Regeneração Celular",
      description: "Libera fatores de crescimento que ativam o processo natural de cura e regeneração do próprio corpo."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" strokeWidth="1" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Mecanismo de Ação</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Como a Terapia por Ondas de Choque <span className="text-primary">elimina a sua dor?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            As ondas acústicas de alta energia criam um estímulo mecânico ("mecanotransdução") que desencadeia poderosas respostas biológicas no seu corpo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-800 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 border border-gray-700">
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold mb-4">Tecnologia de Ponta</h3>
            <p className="text-gray-400 mb-6">
              Utilizamos equipamentos de última geração, calibrados para entregar a dose exata de energia necessária para cada tipo de tecido e profundidade de lesão.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-gray-700 rounded-lg text-sm font-medium text-gray-300">Aprovado ANVISA</div>
              <div className="px-4 py-2 bg-gray-700 rounded-lg text-sm font-medium text-gray-300">Aprovado FDA</div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md">
            <img loading="lazy" 
              src="/assets/images/tecnologia-real.jpg" 
              alt="Equipamento de Ondas de Choque" 
              className="w-full rounded-xl shadow-2xl border border-gray-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
