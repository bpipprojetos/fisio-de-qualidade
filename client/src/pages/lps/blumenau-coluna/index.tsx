import { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import EtapasSection from "./components/EtapasSection";
import ProblemasSection from "./components/ProblemasSection";
import BeneficiosSection from "./components/BeneficiosSection";
import EquipeSection from "./components/EquipeSection";
import DepoimentosSection from "./components/DepoimentosSection";
import ClinicaSection from "./components/ClinicaSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import "./theme.css";

const BlumenauColunaLP = () => {
  useEffect(() => {
    document.title = "ITC Vertebral Blumenau - Especialista em Coluna";
  }, []);

  return (
    <div className="theme-blumenau min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <EtapasSection />
        <ProblemasSection />
        <BeneficiosSection />
        <EquipeSection />
        <DepoimentosSection />
        <ClinicaSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default BlumenauColunaLP;
