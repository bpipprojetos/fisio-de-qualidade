import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-[#14463e] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Pronto para dar o primeiro passo para uma vida sem dor?
          </h2>
          
          <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
            Não adie mais sua qualidade de vida. Agende sua avaliação no Instituto TRATA de São Lourenço e descubra como a Terapia por Ondas de Choque pode ser a solução definitiva.
          </p>
          
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-[#14463e] rounded-full px-10 py-8 text-lg font-bold uppercase tracking-wider shadow-2xl transition-all transform hover:-translate-y-1"
              onClick={() => window.open("https://typebot.co/bpip-ludmila-toc", "_blank", "noopener,noreferrer")}
            >
              <Calendar className="mr-2 w-5 h-5" />
              AGENDE SUA AVALIAÇÃO AGORA
            </Button>
          </div>
          
          <p className="text-white/40 text-sm pt-4">
            Referência em tratamento de coluna, joelho, quadril, ombro e pé. Tecnologia avançada e atendimento humanizado.
          </p>
        </div>
      </div>
    </section>
  );
}
