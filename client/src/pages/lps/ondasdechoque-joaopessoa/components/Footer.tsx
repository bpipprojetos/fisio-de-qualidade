import { Button } from "./ui/button";
import { MapPin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer id="agendar" className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-4">

        {/* Final CTA */}
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white mb-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/cubes.png')] opacity-10"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Pronto para dar o primeiro passo para uma vida sem dor?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              Não adie mais sua qualidade de vida. Agende sua avaliação no Instituto TRATA de João Pessoa e descubra como a Terapia por Ondas de Choque pode ser a solução definitiva.
            </p>
            <Button
              className="h-16 px-10 bg-white text-primary hover:bg-gray-100 text-lg md:text-xl font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.open("https://typebot.co/bpip-angelica-toc", "_blank")}
            >
              AGENDE SUA AVALIAÇÃO AGORA
            </Button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12 items-center">
          <div>
            <img loading="lazy"
              src="/assets/images/trata-logo.png"
              alt="Instituto TRATA"
              className="h-12 mb-6"
            />
            <p className="text-gray-500 leading-relaxed max-w-md">
              Referência em tratamento de joelho, quadril e pé. Tecnologia avançada e atendimento humanizado para sua recuperação completa.
            </p>
          </div>

          <div className="md:text-right">
            <h3 className="font-bold text-gray-900 text-lg mb-6">Onde Estamos</h3>
            <ul className="space-y-4 inline-block text-left md:text-right">
              <li className="flex md:justify-end items-start gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1 md:order-2" />
                <span className="md:order-1">Av. João Câncio da Silva, 945 – Manaíra<br />João Pessoa – PB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Instituto TRATA João Pessoa. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="/politica-privacidade">
              <a className="hover:text-primary transition-colors">Política de Privacidade</a>
            </Link>
            <Link href="/termos-uso">
              <a className="hover:text-primary transition-colors">Termos de Uso</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
