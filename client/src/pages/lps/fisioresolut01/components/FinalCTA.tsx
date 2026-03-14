import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Asset paths
const freedomImage = "/assets/images/fisioresolut01/freedom-newmov.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const CTA_LINK = "https://typebot.co/bpip-rafa-fisioresolut";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img src={freedomImage} alt="Pessoa alegre e livre de dores celebrando a recuperação" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/30" />
      </motion.div>

      <div className="relative container mx-auto px-4 py-20 md:py-32 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto space-y-6"
        >
          <motion.p variants={fadeInUp} className="text-secondary font-bold text-lg md:text-xl uppercase tracking-widest">
            Você merece mais
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground leading-tight text-balance">
            Cada dia com dor é um dia a menos vivendo de verdade.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-primary-foreground/80">
            O tratamento que pode transformar sua vida está a <strong className="text-secondary">um clique</strong> de distância.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/70">
            Não espere a dor tirar mais da sua vida. Agende agora e dê o primeiro passo rumo à sua liberdade.
          </motion.p>
          <motion.div variants={fadeInUp} className="pt-4">
            <Button variant="cta" size="xl" asChild>
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="text-xl">
                🚀 Quero minha vida de volta
              </a>
            </Button>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-sm text-primary-foreground/50 pt-2">
            Vagas limitadas para atendimento personalizado
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
