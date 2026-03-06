const ClinicaSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-normal text-foreground mb-2">Nossa Clínica,</h2>
        <p className="text-2xl font-bold text-foreground mb-10">Seu lugar de conforto</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img loading="lazy" src="/assets/images/lps/blumenau-coluna/clinica-1.png" alt="Clínica ITC 1" className="w-full rounded-lg" />
          <img loading="lazy" src="/assets/images/lps/blumenau-coluna/clinica-2.png" alt="Clínica ITC 2" className="w-full rounded-lg" />
          <img loading="lazy" src="/assets/images/lps/blumenau-coluna/clinica-3.png" alt="Clínica ITC 3" className="w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default ClinicaSection;
