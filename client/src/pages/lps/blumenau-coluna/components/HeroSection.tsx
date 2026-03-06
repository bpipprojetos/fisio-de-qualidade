const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/images/lps/blumenau-coluna/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 text-center px-4 py-20 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          <span className="text-primary">Dores</span> na coluna?
        </h1>
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
          Conheça nosso tratamento que já ajudou mais de 2.300 pessoas em Blumenau e Região
        </p>
        <p className="mt-10 text-lg text-white/80">
          Nosso <strong className="text-white">método de tratamento é baseado</strong> em 4 etapas
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
