import { Button } from "./ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="flex-1 max-w-2xl z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-primary font-semibold text-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Tecnologia Avançada em João Pessoa
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Cansado de conviver com a <span className="text-primary">dor crônica?</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Descubra a <strong className="text-gray-900">Terapia por Ondas de Choque</strong>. A tecnologia não invasiva que atua na causa da dor, acelera sua recuperação e devolve a qualidade de vida que você merece.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <Button 
                onClick={() => window.open("https://typebot.co/bpip-angelica-toc", "_blank")}
                className="h-14 px-8 bg-primary hover:bg-primary/90 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                AGENDE SUA AVALIAÇÃO <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection("como-funciona")}
                variant="outline"
                className="h-14 px-8 border-2 border-gray-200 hover:border-primary/20 hover:bg-red-50 text-gray-700 font-semibold rounded-full text-lg transition-all duration-300"
              >
                CONHEÇA A TECNOLOGIA
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-gray-500 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Sem Cirurgia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Sem Repouso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Alívio Rápido</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Melhores do Nordeste (2x consecutivas)</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative w-full max-w-xl lg:max-w-none animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10"></div>
              <img loading="lazy" 
                src="/assets/images/hero-real.jpeg" 
                alt="Terapia por Ondas de Choque no Joelho" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100 z-20 max-w-[200px] md:max-w-xs animate-in fade-in zoom-in duration-700 delay-700">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Resultado</span>
              </div>
              <p className="text-gray-900 font-bold text-lg md:text-xl leading-tight">
                +80 mil pacientes recuperados
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gray-50/50 skew-x-12 transform origin-top-right"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
