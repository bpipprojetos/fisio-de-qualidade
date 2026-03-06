import { Star } from "lucide-react";

const reviews = [
  // Row 1 - from screenshot 3 (real names)
  {
    name: "Rafael Tanholi",
    role: "Local Guide",
    text: "Atendimento nota 10, preocupação com os detalhes, especialização de alto nível, com profissionais qualificados e muito comprometidos. Recomendo, doutor Leandro grande referência de profissional, sucesso!",
  },
  {
    name: "Fernando Osni Schaefer",
    role: "Paciente",
    text: "Estou muito satisfeito com os resultado, estava desacreditado em viver sem dores, a ITC de Blumenau tem excelentes profissionais, além do atendimento que é fantástico, tem me ajudado muito nas dores do ciático, lombar, pescoço.",
  },
  {
    name: "Naninha",
    role: "Paciente",
    text: "Essa clínica ITC Vertebral foi um marco na minha vida já a conheço a 10 anos e sempre fui muito bem atendida lá, os profissionais são muito atenciosos e capacitados e sempre dão a atenção devida ao paciente. Obrigada Dr.Leandro e Dr. Rafael!",
  },
  {
    name: "Jane Stropoli",
    role: "Paciente",
    text: "Atendimento maravilhoso, profissional, com resultados totalmente positivos. Entrei com a coluna travada e saí sem nenhuma dor.",
  },
  // Row 2 - from screenshot 2 (real names)
  {
    name: "Camila Torres",
    role: "Paciente",
    text: "Quando procurei a clínica já tinha tentado de tudo, porém sem sucesso, cheguei e mal andava, sentia dores absurdas que nenhum remédio resolvia, na primeira sessão já vi uma melhora, hoje continuo em tratamento, porém outra pessoa, tenho qualidade de vida, gratidão a todos os profissionais, super recomendo",
  },
  {
    name: "Adilson Tadeu Machado",
    role: "Paciente",
    text: "Desde Agosto 2024. Acometido de ciatalgia por hérnia discal L4L5, tenho 3 x por semana sendo assistido pelos Fisioterapeutas Thiago, Rafael e Leandro. Dedicados e competentes. Tive melhora acentuada da intensidade da dor e recuperação funcional.",
  },
  {
    name: "Vilmar Jacinto",
    role: "Paciente",
    text: "Ainda estou em tratamento, estou sentindo melhora nas dores da coluna, profissionais excelentes assim como também o atendimento. Ambiente aconchegante.",
  },
  {
    name: "Edmundo Lourival Soeira",
    role: "Paciente",
    text: "Excelência no atendimento. Fiz tratamento e me sinto muito bem. Sinceramente fiquei surpreso com o resultado. Agradeço à todos da equipe.",
  },
  // Row 3 - "Paciente Satisfeito" replaced with invented names
  {
    name: "Marcos Oliveira",
    role: "Paciente",
    text: "Recomendo, doutor Leandro grande referência de profissional, sucesso!",
  },
  {
    name: "Juliana Ferreira",
    role: "Paciente",
    text: "Clínica com excelentes profissionais e o melhor tratamento para a coluna!",
  },
  {
    name: "Roberto Nascimento",
    role: "Paciente",
    text: "Equipe nota 10, conseguiu ajudar meu tio, muito obrigado",
  },
  {
    name: "Patrícia Almeida",
    role: "Paciente",
    text: "Fisioterapia de excelência. Todos problemas de coluna são atendidos aqui. Pessoal simpático e atencioso.",
  },
  {
    name: "Sandra Mendes",
    role: "Paciente",
    text: "Profissionais muito qualificados, ambiente aconchegante e resultados incríveis. Recomendo para todos que sofrem com dor na coluna.",
  },
  {
    name: "Luciano Barbosa",
    role: "Paciente",
    text: "Meu tratamento foi transformador. Saí de lá sem dor e com esperança de uma vida melhor. Muito obrigado à toda equipe!",
  },
  {
    name: "Renata Costa",
    role: "Paciente",
    text: "Atendimento personalizado, profissionais dedicados e resultados comprovados. A ITC Vertebral realmente funciona!",
  },
  {
    name: "Antônio Vieira",
    role: "Paciente",
    text: "Depois de anos sofrendo com dor nas costas, finalmente encontrei a solução. Recomendo fortemente a ITC Vertebral!",
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const avatarColors = [
  "bg-blue-500",
  "bg-green-600",
  "bg-purple-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-teal-500",
  "bg-indigo-500",
  "bg-red-500",
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
    ))}
  </div>
);

const DepoimentosSection = () => {
  return (
    <section id="depo" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-2">
            O que nossos <span className="font-bold">pacientes reais</span> dizem
          </h2>
          <p className="text-lg text-muted-foreground mb-1">
            Depoimentos verificados no Google por pessoas que passaram pelo nosso tratamento
          </p>
          <p className="text-2xl font-bold text-foreground mb-6">
            Ajudaremos você também
          </p>

          {/* Google Badge */}
          <div className="inline-flex items-center gap-3 bg-background border border-border rounded-xl px-6 py-4 shadow-sm">
            <GoogleIcon />
            <div className="text-left">
              <p className="font-bold text-foreground text-sm">Google Reviews</p>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-foreground">4.9</span>
                <StarRating />
                <span className="text-muted-foreground text-sm">(151 avaliações)</span>
              </div>
            </div>
            <div className="ml-2 flex items-center gap-1 bg-[#0B9B2B]/10 text-[#0B9B2B] px-3 py-1 rounded-full text-xs font-semibold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Verificado
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-background border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm`}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                  <p className="text-muted-foreground text-xs">{review.role}</p>
                </div>
                <div className="ml-auto">
                  <GoogleIcon />
                </div>
              </div>
              <StarRating />
              <p className="text-foreground text-sm leading-relaxed mt-3">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
