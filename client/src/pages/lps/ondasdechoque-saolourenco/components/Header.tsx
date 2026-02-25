import { Button } from "./ui/button";
import { Menu, X, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "O que Tratamos", href: "#tratamentos" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <header className="w-full bg-[#14463e] border-b border-[#1f5c52] shadow-md relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 cursor-pointer">
            {/* Logos - White text on Green background */}
            <div className="flex items-center gap-6">
              <span className="font-bold text-xl leading-none text-white tracking-tight border-r border-white/20 pr-6">
                ITC Vertebral
              </span>

              <span className="font-bold text-xl leading-none text-white tracking-tight">
                Instituto TRATA
              </span>
            </div>

            {/* Location Badge */}
            <div className="hidden md:flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <MapPin className="w-3 h-3 text-white/80" />
              <span className="text-xs font-medium text-white/90 uppercase tracking-wide">
                Clínica em São Lourenço
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors uppercase tracking-wide hover:underline decoration-2 underline-offset-4"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button removed as requested */}

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#14463e] border-b border-[#1f5c52] shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 gap-4">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg border border-white/10 w-fit mb-2">
              <MapPin className="w-3 h-3 text-white/80" />
              <span className="text-xs font-medium text-white/90 uppercase tracking-wide">
                Clínica em São Lourenço
              </span>
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-bold text-white hover:text-white/80 py-2 border-b border-white/10 uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              className="w-full bg-white text-[#14463e] rounded-full mt-2 font-bold uppercase"
              onClick={() => {
                window.open("https://typebot.co/bpip-ludmila-toc", "_blank", "noopener,noreferrer");
                setIsMenuOpen(false);
              }}
            >
              AGENDAR AVALIAÇÃO
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
