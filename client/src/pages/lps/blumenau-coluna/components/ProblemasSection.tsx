const ProblemasSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">
            Problemas Comuns
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Você enfrenta alguns dos problemas abaixo?
          </h2>
          <img loading="lazy"
            src="/assets/images/lps/blumenau-coluna/problemas.png"
            alt="Problemas comuns na coluna"
            className="w-full mb-4"
          />
          <p className="text-foreground">
            <strong>Diariamente</strong> tratamos pessoas com os problemas acima.
          </p>
        </div>
        <div className="flex justify-center">
          <img loading="lazy"
            src="/assets/images/lps/blumenau-coluna/dor-na-coluna-figura.png"
            alt="Dor na coluna figura"
            className="max-w-sm w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemasSection;
