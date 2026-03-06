const EquipeSection = () => {
  return (
    <section id="chao" className="py-16 px-4 bg-muted">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Será um prazer te atender.
          </h2>
          <p className="text-foreground text-lg leading-relaxed">
            Há 6 anos a equipe do Instituto de Tratamento da Coluna Vertebral em Blumenau transforma vidas e quer lhe receber para proporcionar nosso melhor tratamento para sua coluna com máximo do nosso esforço.
          </p>
        </div>
        <div>
          <img loading="lazy"
            src="/assets/images/lps/blumenau-coluna/time.png"
            alt="Equipe ITC Vertebral"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default EquipeSection;
