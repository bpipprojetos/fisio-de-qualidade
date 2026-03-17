import { MapPin, Calendar } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#14463e] border-t border-[#1f5c52] pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="font-bold text-2xl leading-none text-white tracking-tight">
                  ITC Vertebral
                </span>
              </div>
              <div className="w-12 h-0.5 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl leading-none text-white tracking-tight">
                  Instituto TRATA
                </span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed text-sm">
              Referência em tratamento de coluna, joelho, quadril, ombro e pé. Tecnologia avançada e atendimento humanizado para sua recuperação completa, sem cirurgia.
            </p>
          </div>

          {/* Contact Info - Address Only, No Phone */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-white">Localização</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-medium text-white text-sm">Endereço</p>
                  <p className="text-white/70 text-sm">
                    R. Dr. Melo Viana, 269, Centro<br />
                    São Lourenço – MG, 37470-000
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  className="w-full bg-white hover:bg-gray-100 text-[#14463e] font-bold uppercase text-xs tracking-wider"
                  onClick={() => window.open("https://typebot.co/bpip-ludmila-toc", "_blank", "noopener,noreferrer")}
                >
                  <Calendar className="mr-2 w-4 h-4" />
                  Agendar Visita
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-white">Links Rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#como-funciona" className="text-white/70 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#tratamentos" className="text-white/70 hover:text-white transition-colors">
                  O que Tratamos
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-white/70 hover:text-white transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-white/70 hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-6 text-xs text-white/40">
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 text-center md:text-left">
            <p>© 2026 ITC Vertebral & Instituto TRATA São Lourenço. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="/politica-privacidade" className="hover:text-white transition-colors underline">
                Política de Privacidade
              </a>
              <a href="/termos-uso" className="hover:text-white transition-colors underline">
                Termos de Uso
              </a>
            </div>
          </div>
          <div className="text-white/30 flex flex-col md:flex-row justify-center gap-2 md:gap-4 border-t border-white/5 pt-4 w-full text-center">
            <span>RAZÂO SOCIAL: OJOELHO FISIOTERAPIA ESPECIALIZADA LTDA</span>
            <span>CNPJ: 20.308.866/0001-71</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
