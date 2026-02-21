import { Check } from "lucide-react";
import { Button } from "./ui/button";

export function Benefits() {
  const benefits = [
    "Tratamento Não Invasivo (sem cortes)",
    "Resultados Rápidos (3 a 5 sessões)",
    "Sem Efeitos Colaterais Graves",
    "Ataca a Causa da Dor",
    "Sem Necessidade de Afastamento",
    "Baseado em Evidências Científicas"
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="beneficios" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1">
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Por que escolher?</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Sua recuperação <span className="text-primary">sem cirurgia</span> começa aqui
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-600 stroke-[3]" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
              <p className="text-gray-600 italic">
                "A Terapia por Ondas de Choque é frequentemente a última alternativa antes da cirurgia, com taxas de sucesso impressionantes em casos crônicos."
              </p>
            </div>

            <Button 
              onClick={() => window.open("https://typebot.co/bpip-angelica-toc", "_blank")}
              className="h-14 px-8 bg-primary hover:bg-primary/90 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              QUERO VIVER SEM DOR
            </Button>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 bg-white p-2 rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img loading="lazy" 
                src="/assets/images/toc_joelho_hero.jpg" 
                alt="Tratamento no Joelho" 
                className="rounded-2xl w-full"
              />
            </div>
            <div className="absolute top-10 -right-4 z-0 bg-gray-100 p-2 rounded-3xl w-full h-full -rotate-2"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
