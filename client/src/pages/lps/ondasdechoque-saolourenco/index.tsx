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

      {/* Floating WhatsApp Button */}
      <a
        href="https://tintim.link/whatsapp/5775a6a7-73c3-4465-8f93-24c0cd9991ba/c1c1a1ae-339e-4e0a-8489-c7238a82d152"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
          background: "#25D366",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          textDecoration: "none",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          width="34"
          height="34"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}
