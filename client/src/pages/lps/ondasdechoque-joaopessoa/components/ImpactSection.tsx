import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function ImpactSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax/Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <img loading="lazy" 
          src="/assets/images/ondas-de-choque-impacto.jpg" 
          alt="Tecnologia de Ondas de Choque em Ação" 
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            A tecnologia que <span className="text-primary">enxerga</span> onde a sua dor se esconde.
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light leading-relaxed drop-shadow-md">
            Não deixe que a dor defina o seu futuro. O tratamento que já recuperou milhares de pacientes agora está ao seu alcance.
          </p>

          <Button 
            onClick={() => window.open("https://typebot.co/bpip-angelica-toc", "_blank")}
            className="h-16 px-10 bg-primary hover:bg-primary/90 text-white text-lg md:text-xl font-bold rounded-full shadow-[0_0_30px_rgba(227,6,19,0.5)] hover:shadow-[0_0_50px_rgba(227,6,19,0.7)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 border-2 border-white/20 backdrop-blur-sm"
          >
            QUERO MINHA VIDA DE VOLTA <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* CSS Animation for Zoom */}
      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
}
