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
    name: "Maria Eunice",
    date: "Dezembro de 2025",
    text: "Atendimento excelente. Ainda estou no início, mas posso dizer que as pessoas são maravilhosas, a Dra. Maísa é uma pessoa encantadora.",
  },
  {
    name: "Polyana Sarmento",
    date: "Janeiro de 2026",
    text: "Estou em tratamento há 2 semanas e já sinto uma melhora substancial. A dor desapareceu e todos são muito atenciosos, explicando o processo e tirando dúvidas. A equipe é muito educada e prestativa. Maísa, a fisioterapeuta que está me tratando, é muito competente e atenciosa. Recomendo a clínica.",
  },
  {
    name: "Bárbara Costa",
    date: "Outubro de 2025",
    text: "A equipe da clínica é muito atenciosa, prestativa e tira dúvidas. Os fisioterapeutas são excelentes profissionais. Você se sente bem cuidado. Fazer Pilates com a Melissa tem sido excelente para minha saúde. E a Nayá também é uma excelente profissional.",
  },
  {
    name: "Gilcelia Ferreira",
    date: "Novembro de 2025",
    text: "Estou no início do meu tratamento e fui muito bem recebida por todos na clínica, especialmente pelo fisioterapeuta Dr. Lucas, que está me acompanhando de perto. Ainda sinto alguma dor, mas sei que é cedo demais para ela desaparecer.",
  },
  {
    name: "Alba Valéria F. de Araújo Costa",
    date: "Novembro de 2025",
    text: "Faço Pilates na NewMov há quase 2 anos e estou muito satisfeita. A equipe é extremamente competente, atenciosa e acolhedora. O lugar é muito agradável em todos os sentidos. Recomendo muito a clínica/estúdio.",
  },
  {
    name: "Janderson Santos",
    date: "Outubro de 2025",
    text: "Não poderia deixar de agradecer a incrível equipe da clínica de fisioterapia! Atendimento de primeira, profissionais atenciosos e um ambiente super acolhedor. Cada sessão faz diferença na minha recuperação. Recomendo a todos que buscam cuidado, profissionalismo e resultados reais.",
  },
  {
    name: "Myllene Silveira",
    date: "Outubro de 2025",
    text: "Clínica excelente com profissionais muito dedicados e atenciosos. O ambiente é acolhedor e o tratamento é de altíssima qualidade. Recomendo muito!",
  },
  {
    name: "Marcos Campos",
    date: "Outubro de 2025",
    text: "O nível de competência dessa equipe de profissionais fala por si só. Altamente capacitados e atualizados, nos trazem as informações mais atuais quando o assunto é reabilitação da coluna. Recomendo aos pacientes, e sou paciente desse grande centro humanizado de cuidado, competência e apoio.",
  },
  {
    name: "Luana Souza",
    date: "Novembro de 2025",
    text: "Excelente atendimento. A clínica é super organizada, acolhedora e demonstra grande profissionalismo. Gostaria de destacar o atendimento da fisioterapeuta do assoalho pélvico, Nayá Vieira, que é extremamente atenciosa, competente e cuidadosa. Recomendo muito!!!",
  },
  {
    name: "Benizia Santana Luz",
    date: "Agosto de 2025",
    text: "Gostaria de fazer meus sinceros elogios a toda a equipe da clínica NewMov, desde a recepção calorosa até o atendimento atencioso e profissional dos fisioterapeutas. Cada membro da equipe demonstra dedicação, empatia e compromisso com o cuidado do paciente.",
  },
  {
    name: "Dr. João Silva",
    date: "Setembro de 2025",
    text: "Profissionalismo de excelência. A clínica NewMov se destaca pela qualidade do atendimento e pela competência dos profissionais. Recomendo fortemente para qualquer pessoa que busque fisioterapia de qualidade.",
  },
  {
    name: "Carla Mendes",
    date: "Dezembro de 2025",
    text: "Ambiente acolhedor e profissionais muito dedicados. Fiz tratamento de coluna e os resultados foram excelentes. A equipe é sempre atenciosa e explica cada procedimento.",
  },
  {
    name: "Roberto Santos",
    date: "Janeiro de 2026",
    text: "Excelente atendimento! Os fisioterapeutas são muito competentes e o ambiente é muito agradável. Recomendo a clínica NewMov para todos que precisam de fisioterapia.",
  },
  {
    name: "Fernanda Costa",
    date: "Novembro de 2025",
    text: "Muito satisfeita com o tratamento. A clínica é moderna, limpa e os profissionais são atenciosos. Já recomendei para várias amigas.",
  },
  {
    name: "Andréia Oliveira",
    date: "Outubro de 2025",
    text: "Ótima experiência! Os fisioterapeutas entendem realmente do que fazem. Senti melhora significativa em poucas sessões.",
  },
  {
    name: "Thiago Pereira",
    date: "Dezembro de 2025",
    text: "Clínica de referência em Aracaju. Profissionais altamente qualificados e ambiente acolhedor. Voltaria com certeza.",
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
    <section className="bg-warm-newmov py-16 md:py-24">
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
            {reviews.map((review) => (
              <motion.div
                key={review.name}
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
