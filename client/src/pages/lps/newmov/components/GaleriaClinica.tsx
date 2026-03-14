import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";
const galeria1 = "/assets/images/newmov/galeria-1.png";
const galeria2 = "/assets/images/newmov/galeria-2.png";
const galeria3 = "/assets/images/newmov/galeria-3.png";
const galeria4 = "/assets/images/newmov/galeria-4.png";
const galeria5 = "/assets/images/newmov/galeria-5.png";
const galeria6 = "/assets/images/newmov/galeria-6.png";
const galeria7 = "/assets/images/newmov/galeria-7.png";
const galeria8 = "/assets/images/newmov/galeria-8.png";
const galeria9 = "/assets/images/newmov/galeria-9.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const images = [
  { src: galeria1, alt: "Avaliação com equipamento de alta tecnologia" },
  { src: galeria2, alt: "Exercício terapêutico com acompanhamento profissional" },
  { src: galeria3, alt: "Tecnologia de fotobiomodulação para regeneração tecidual" },
  { src: galeria4, alt: "Eletroestimulação para modulação da dor" },
  { src: galeria5, alt: "Musculação terapêutica controlada" },
  { src: galeria6, alt: "Reabilitação com equipamento digital de alta precisão" },
  { src: galeria7, alt: "Botas pneumáticas para recuperação vascular" },
  { src: galeria8, alt: "Treino proprioceptivo com acompanhamento profissional" },
  { src: galeria9, alt: "Espaço completo de reabilitação e fortalecimento" },
];

const GaleriaClinica = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-10"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-primary">
              <FlaskConical className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-widest">Nosso Espaço</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground text-balance">
              Isso aqui <span className="text-primary">não é academia.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              É um centro de reabilitação com <strong className="text-foreground">tecnologia de ponta</strong> e <strong className="text-foreground">embasamento científico</strong>, focado em resolver dor crônica de verdade.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-[3/4]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GaleriaClinica;
