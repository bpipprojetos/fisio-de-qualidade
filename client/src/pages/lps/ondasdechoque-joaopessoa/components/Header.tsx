import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img loading="lazy" 
              src="/assets/images/trata-logo.png" 
              alt="Instituto TRATA" 
              className="h-10 md:h-12"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("como-funciona")} className="text-gray-600 hover:text-primary font-medium transition-colors">
            Como Funciona
          </button>
          <button onClick={() => scrollToSection("patologias")} className="text-gray-600 hover:text-primary font-medium transition-colors">
            O que Tratamos
          </button>
          <button onClick={() => scrollToSection("beneficios")} className="text-gray-600 hover:text-primary font-medium transition-colors">
            Benefícios
          </button>
          <button onClick={() => scrollToSection("depoimentos")} className="text-gray-600 hover:text-primary font-medium transition-colors">
            Depoimentos
          </button>
          <Button 
            onClick={() => window.open("https://typebot.co/bpip-angelica-toc", "_blank")}
            className="bg-primary hover:bg-primary/90 text-white font-bold px-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            AGENDAR AVALIAÇÃO
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 gap-4">
            <button onClick={() => scrollToSection("como-funciona")} className="text-left py-2 text-gray-600 font-medium border-b border-gray-50">
              Como Funciona
            </button>
            <button onClick={() => scrollToSection("patologias")} className="text-left py-2 text-gray-600 font-medium border-b border-gray-50">
              O que Tratamos
            </button>
            <button onClick={() => scrollToSection("beneficios")} className="text-left py-2 text-gray-600 font-medium border-b border-gray-50">
              Benefícios
            </button>
            <button onClick={() => scrollToSection("depoimentos")} className="text-left py-2 text-gray-600 font-medium border-b border-gray-50">
              Depoimentos
            </button>
            <Button 
              onClick={() => window.open("https://typebot.co/bpip-angelica-toc", "_blank")}
              className="w-full bg-primary text-white font-bold rounded-full mt-2"
            >
              AGENDAR AVALIAÇÃO
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
