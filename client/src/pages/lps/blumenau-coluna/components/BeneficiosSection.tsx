const WPP_LINK = "https://typebot.co/bpip-edu-blumenau";

const BeneficiosSection = () => {
  return (
    <section id="tto" className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">
          Benefícios do Tratamento
        </p>
        <div className="w-16 h-1 bg-primary mx-auto mb-6" />
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
          O Tratamento é:
        </h2>
        <img loading="lazy"
          src="/assets/images/lps/blumenau-coluna/tratamento-beneficios.png"
          alt="Benefícios do tratamento"
          className="w-full max-w-3xl mx-auto mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Além disso, em seu tratamento você recebe:
            </h3>
            <p className="text-foreground mb-6">
              Tudo que você precisa para renovar sua coluna e manter-se bem. Não deixe seu problema ampliar.
            </p>
            <a
              href={WPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-itc-green text-primary-foreground font-bold px-8 py-4 rounded-md text-lg hover:opacity-90 transition-opacity"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agende Sua Consulta
            </a>
          </div>
          <div>
            <img loading="lazy"
              src="/assets/images/lps/blumenau-coluna/tratamento-recebe.png"
              alt="O que você recebe no tratamento"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;
