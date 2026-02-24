import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Treatments from "./components/Treatments";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./theme.css";

export default function Home() {
  return (
    <div className="theme-trata min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      <Header />

      <main className="flex-grow">
        <Hero />
        <Features />
        <Treatments />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
