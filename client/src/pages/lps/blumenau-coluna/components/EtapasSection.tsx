const etapas = [
  {
    img: "/assets/images/lps/blumenau-coluna/etapa-1.png",
    desc: (
      <p>
        <strong>Para tratar sua condição, é essencial entender suas causas.</strong> Em uma consulta de 1 hora, o especialista conversa, realiza testes físicos e explica as razões das dores, além do plano de tratamento.
      </p>
    ),
  },
  {
    img: "/assets/images/lps/blumenau-coluna/etapa-2.png",
    desc: (
      <p>
        Nosso primeiro objetivo é utilizar técnicas, exercícios e tecnologia{" "}
        <strong>para diminuir e controlar sua dor.</strong> Só assim conseguimos avançar as etapas do seu tratamento.
      </p>
    ),
  },
  {
    img: "/assets/images/lps/blumenau-coluna/etapa-3.png",
    desc: (
      <p>
        Após o controle da dor,{" "}
        <strong>iniciamos o trabalho de fortalecimento muscular</strong> para amplificar o efeito do seu tratamento, essencial para reta final e sua alta.
      </p>
    ),
  },
  {
    img: "/assets/images/lps/blumenau-coluna/etapa-4.png",
    desc: (
      <p>
        <strong>Momento de reavaliar o tratamento</strong> até aqui, orientar e reforçar condutas para que você receba alta e{" "}
        <strong>sinta-se bem e seguro com sua coluna.</strong>
      </p>
    ),
  },
];

const EtapasSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {etapas.map((etapa, i) => (
          <div key={i} className="text-center">
            <img loading="lazy"
              src={etapa.img}
              alt={`Etapa ${i + 1}`}
              className="w-full rounded-lg mb-4"
            />
            <div className="text-sm text-foreground leading-relaxed">{etapa.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EtapasSection;
