import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ImpactSection } from "./components/ImpactSection";
import { ProblemSolution } from "./components/ProblemSolution";
import { HowItWorks } from "./components/HowItWorks";
import { Pathologies } from "./components/Pathologies";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Comparison } from "./components/Comparison";
import { TeamSection } from "./components/TeamSection";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import "./theme.css";

export default function Home() {
  return (
    <div className="theme-trata min-h-screen bg-white font-sans text-gray-900 selection:bg-primary/20 selection:text-primary">
      <Header />
      <main>
        <Hero />
        <ImpactSection />
        <ProblemSolution />
        <HowItWorks />
        <Pathologies />
        <Benefits />
        <Testimonials />
        <Comparison />
        <TeamSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
