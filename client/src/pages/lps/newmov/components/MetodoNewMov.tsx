import { motion } from "framer-motion";
import { CheckCircle2, Zap, Activity } from "lucide-react";
const metodoDorImage = "/assets/images/newmov/metodo-dor.jpg";
const metodoAtletasImage = "/assets/images/newmov/metodo-atletas.jpg";
const metodoPosturalImage = "/assets/images/newmov/metodo-postural.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const MetodoNewMov = () => {
  return (
    <>
      {/* MÉTODO GERAL */}
      <section className="bg-warm-newmov py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="text-center space-y-6"
          >
            <motion.p variants={fadeInUp} className="text-secondary font-bold text-sm md:text-base uppercase tracking-widest">
              Nosso Método
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground text-balance">
              O <span className="text-primary">Método NewMov</span>: Padrão Ouro + Tecnologia de Ponta
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Integramos o Padrão Ouro da fisioterapia mundial a Tecnologias de Ponta, combinando o raciocínio da terapia manual para o desbloqueio estrutural imediato, acelerando a regeneração tecidual e a desinflamação.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Finalizamos o processo com uma <strong className="text-foreground">Musculação Terapêutica Controlada</strong> utilizando equipamentos de máxima segurança, focada em consolidar o tratamento e blindar seu corpo contra futuras recorrências.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MÉTODO PARA DOR */}
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary uppercase tracking-wider">Especialidade</p>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Método para Dor</h3>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-lg text-muted-foreground space-y-4">
                <p>
                  Nosso método integra o padrão ouro da fisioterapia mundial a um ecossistema de alta tecnologia. Associamos o raciocínio clínico da terapia manual, incluindo Osteopatia e Quiropraxia, para promover o <strong className="text-foreground">desbloqueio imediato do corpo</strong>, aplicando protocolos de modulação da dor para restaurar sua mobilidade e qualidade de vida.
                </p>
                <p>
                  Utilizamos tecnologias avançadas que aceleram a recuperação tecidual e reduzem a inflamação. Por fim, consolidamos o tratamento por meio da musculação terapêutica controlada com nossos equipamentos, promovendo estabilidade, fortalecimento estrutural e menor risco de recidiva de lesões.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-2">
                {["Terapia Manual", "Osteopatia", "Quiropraxia", "Modulação da Dor", "Musculação Terapêutica"].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img src={metodoDorImage} alt="Tratamento de dor crônica com fisioterapia" loading="lazy" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MÉTODO PARA ATLETAS */}
      <section className="bg-accent-newmov py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1"
            >
              <img src={metodoAtletasImage} alt="Reabilitação e performance para atletas" loading="lazy" className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="space-y-6 order-1 md:order-2"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary uppercase tracking-wider">Especialidade</p>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Método para Atletas</h3>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-lg text-muted-foreground space-y-4">
                <p>
                  Nosso método integra o padrão ouro da fisioterapia mundial a um ecossistema de alta tecnologia, com foco em <strong className="text-foreground">performance e longevidade esportiva</strong>. Associamos o raciocínio clínico da terapia manual, incluindo Osteopatia/Quiropraxia, para otimizar a biomecânica, melhorar a eficiência do movimento e corrigir restrições que limitam seu desempenho. Aplicamos protocolos de modulação da dor quando necessário, sem perder o foco na alta performance.
                </p>
                <p>
                  Utilizamos tecnologias avançadas para acelerar a recuperação tecidual, reduzir a inflamação e encurtar o tempo de retorno ao treino. Por fim, consolidamos o processo com musculação terapêutica controlada e progressiva, utilizando nossos equipamentos para desenvolver força, estabilidade e potência, reduzindo o risco de lesões e elevando seu nível competitivo.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-2">
                {["Alta Performance", "Biomecânica", "Recuperação Esportiva", "Força & Potência", "Prevenção de Lesões"].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MÉTODO PARA DESVIOS POSTURAIS */}
      <section className="bg-warm-newmov py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary uppercase tracking-wider">Especialidade</p>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Método para Desvios Posturais e Escoliose</h3>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-lg text-muted-foreground space-y-4">
                <p>
                  Nosso método integra o padrão ouro da fisioterapia mundial a um ecossistema de alta tecnologia, com foco na <strong className="text-foreground">correção biomecânica e no reequilíbrio muscular</strong>. Realizamos uma avaliação postural minuciosa para identificar assimetrias, desvios estruturais e padrões compensatórios que impactam sua função e desempenho.
                </p>
                <p>
                  Aplicamos protocolos específicos de correção postural e reeducação do controle motor para reorganizar o alinhamento corporal e otimizar a mecânica da coluna. Consolidamos o tratamento com musculação terapêutica progressiva, promovendo maior equilíbrio, eficiência biomecânica e controle da progressão do desvio.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-2">
                {["Correção Postural", "Escoliose", "Reeducação Motora", "Biomecânica", "Equilíbrio Muscular"].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img src={metodoPosturalImage} alt="Avaliação postural e correção de escoliose" loading="lazy" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MetodoNewMov;
