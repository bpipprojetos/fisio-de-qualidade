import { Button } from "./ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-[#e8f0ee] text-[#14463e] text-xs font-bold uppercase tracking-wider mb-2">
            Tecnologia Avançada em São Lourenço
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
            Cansado de conviver com a <span className="text-[#14463e]">dor crônica?</span>
          </h1>
          
          <div className="w-20 h-1 bg-[#14463e] rounded-full"></div>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            Descubra a <strong className="relative inline-block"><span className="relative z-10">Terapia por Ondas de Choque</span><span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300/60 -z-0 transform -rotate-1"></span></strong>. Tratamento eficaz para coluna, ombro, braços, quadril, joelho e pé. Atua na causa da dor e acelera sua recuperação.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button 
              size="lg" 
              className="bg-[#14463e] hover:bg-[#1f5c52] text-white rounded-full px-8 py-6 text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              onClick={() => window.open("https://typebot.co/bpip-ludmila-toc", "_blank", "noopener,noreferrer")}
            >
              AGENDE SUA AVALIAÇÃO
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 pt-4 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-[#14463e] w-5 h-5" />
              Sem Cirurgia
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-[#14463e] w-5 h-5" />
              Sem Repouso
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-[#14463e] w-5 h-5" />
              Alívio Rápido
            </div>
          </div>
        </div>

        {/* Image Content - Adjusted for Vertical Image */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Main Image Card */}
          <div className="relative z-10 bg-white p-3 rounded-[2rem] shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 max-w-md">
            <img 
              src="/assets/images/hero-saolourenco.png" 
              alt="Tratamento de ombro com ondas de choque" 
              className="w-full h-auto rounded-[1.5rem] object-contain shadow-inner"
            />
            
            {/* Floating Stat Card */}
            <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#14463e] animate-pulse"></div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-0.5">RESULTADO</p>
                  <p className="font-bold text-gray-900 text-lg leading-none mb-1">+80 mil pacientes</p>
                  <p className="text-xs text-gray-500">recuperados na rede</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-10 right-0 w-3/4 h-full bg-[#e8f0ee] rounded-l-3xl -z-10 transform translate-x-10"></div>
        </div>
      </div>
    </section>
  );
}
