import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const reviews = [
  {
    name: "Thiago Domingues",
    date: "Recente",
    text: "Excelente experiência com a clínica! O ambiente é muito organizado, limpo e agradável, o que faz você se sentir confortável desde o primeiro dia de tratamento. Toda a equipe é extremamente atenciosa e educada, desde as recepcionistas até os fisioterapeutas. O cuidado profissional e a atenção aos detalhes são notáveis. Recomendo muito!",
  },
  {
    name: "Andrea Beni",
    date: "Recente",
    text: "Nota máxima para todos os profissionais! Trabalho impecável e extremamente dedicado de toda a equipe. O compromisso com a recuperação do paciente é evidente em cada interação. A clínica oferece atenção personalizada com equipamentos e técnicas de ponta. Estou muito satisfeita com os resultados alcançados.",
  },
  {
    name: "Nancy",
    date: "Recente",
    text: "Tudo foi perfeito, além das expectativas. Desde a recepção, estacionamento, café, e especialmente o atendimento profissional e empático da Fisioterapeuta Larissa, que combinou conhecimento técnico e prático. A expertise e compaixão da Larissa fizeram uma diferença significativa na minha recuperação. Recomendo muito!",
  },
  {
    name: "Aníbal",
    date: "Recente",
    text: "Fui atendido pelo fisioterapeuta Raphael, que é um excelente profissional. Ele me transmitiu confiança na minha recuperação, e eu o recomendo fortemente. O tratamento foi muito eficaz e profissional.",
  },
  {
    name: "Marcelo",
    date: "Recente",
    text: "Fiquei muito satisfeito com o tratamento neste instituto. Os profissionais são altamente qualificados e tratam cada paciente individualmente, com exercícios adaptados a cada etapa do tratamento. Recomendo muito para quem precisa de fisioterapia por lesão esportiva (pubalgia, no meu caso).",
  },
  {
    name: "Victor",
    date: "Recente",
    text: "Fiz tratamento para dor lombar e o atendimento de toda a equipe foi excelente; super profissionais e altamente capacitados! O tratamento foi realizado pelo Dr. Lincoln e obtive resultados notáveis nas primeiras sessões. Recomendo de coração!",
  },
  {
    name: "Edu",
    date: "Recente",
    text: "Sem dúvida, um dos melhores institutos para tratamento de lesões. Sou jogador amador de vôlei e tive uma lesão no ombro. Todo o atendimento, desde o WhatsApp até as sessões, foi excepcional. Equipe dedicada e resultados impressionantes.",
  },
  {
    name: "Tanali",
    date: "Recente",
    text: "Excelente atendimento, processos muito eficientes e equipe altamente capacitada! A clínica opera com grande organização e profissionalismo. Os equipamentos modernos e abordagens baseadas em evidências garantem os melhores resultados possíveis.",
  },
  {
    name: "Isabela",
    date: "Recente",
    text: "Clínica de fisioterapia excelente com equipe profissional e atenciosa. As sessões de tratamento são bem organizadas e eficazes. Os fisioterapeutas dedicam tempo para entender a condição de cada paciente e elaborar planos de tratamento adequados.",
  },
  {
    name: "Paciente Verificado",
    date: "Recente",
    text: "Fiz cirurgia no ligamento cruzado anterior e menisco, e não tinha expectativa de andar sem muletas antes de meses. A equipe do Instituto Trata superou todas as minhas expectativas. O plano de tratamento personalizado e o acompanhamento constante fizeram toda a diferença.",
  },
  {
    name: "Paciente Verificado",
    date: "Recente",
    text: "A clínica oferece uma abordagem abrangente à fisioterapia com atenção aos detalhes em cada aspecto do tratamento. A equipe demonstra cuidado genuíno com a recuperação do paciente. As instalações modernas e equipamentos avançados contribuem para a eficácia do tratamento.",
  },
  {
    name: "Paciente Verificado",
    date: "Recente",
    text: "Altamente recomendado! Os fisioterapeutas do Instituto Trata são especialistas em suas áreas e oferecem planos de tratamento personalizados. O ambiente da clínica é limpo, confortável e bem equipado. A equipe é profissional, simpática e sempre disposta a ajudar.",
  },
  {
    name: "Paciente Verificado",
    date: "Recente",
    text: "A equipe do Instituto Trata é composta por profissionais altamente qualificados e apaixonados por ajudar pacientes a se recuperar. A abordagem personalizada ao tratamento garante que cada paciente receba o melhor cuidado possível. Os resultados que alcancei foram excelentes.",
  },
  {
    name: "Paciente Verificado",
    date: "Recente",
    text: "Excelente clínica de fisioterapia com equipe profissional e atenciosa. As sessões de tratamento são bem organizadas e eficazes. Os fisioterapeutas dedicam tempo para entender a condição de cada paciente. Equipamentos modernos e técnicas avançadas garantem os melhores resultados.",
  },
  {
    name: "Paciente Verificado",
    date: "Recente",
    text: "Instituto Trata é uma clínica de fisioterapia de alta qualidade que recomendo muito. A equipe é profissional, conhecedora e genuinamente se preocupa com a recuperação do paciente. As sessões de tratamento são eficazes e pude ver melhorias significativas na minha condição.",
  },
  {
    name: "Paciente Verificado",
    date: "Recente",
    text: "A melhor experiência de fisioterapia que já tive! A equipe do Instituto Trata é excepcional em todos os sentidos. Desde a avaliação inicial até a última sessão, o cuidado e a atenção foram extraordinários. Os fisioterapeutas são especialistas e utilizam técnicas avançadas para garantir um tratamento eficaz.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const GoogleReviews = () => {
  return (
    <section className="bg-warm py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-10"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary">
              <BadgeCheck className="w-7 h-7" />
              <span className="text-sm font-semibold uppercase tracking-widest">Avaliações verificadas</span>
              <BadgeCheck className="w-7 h-7" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground text-balance">
              Veja avaliações <span className="text-primary">reais</span> que nossos pacientes deixaram no Google
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-foreground">5.0</span>
              <span className="text-muted-foreground">no Google</span>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reviews.map((review, index) => (
              <motion.div
                key={`${review.name}-${index}`}
                variants={fadeInUp}
                className="bg-card rounded-2xl p-6 shadow-md border border-border/50 space-y-3 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">{review.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <BadgeCheck className="w-5 h-5 text-blue-500" />
                </div>
                <Stars />
                <p className="text-muted-foreground text-sm leading-relaxed">"{review.text}"</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;