import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";

// Asset paths
const galeria1 = "/assets/images/fisioresolut01/galeria-new-1.jpg";
const galeria2 = "/assets/images/fisioresolut01/galeria-new-2.jpg";
const galeria3 = "/assets/images/fisioresolut01/galeria-new-3.jpg";
const galeria4 = "/assets/images/fisioresolut01/galeria-new-4.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const images = [
  { src: galeria4, alt: "Fisioterapia especializada na Vila Leopoldina" },
  { src: galeria1, alt: "Equipamentos de reabilitação para joelho, quadril e membros inferiores" },
  { src: galeria2, alt: "Área de tratamento para ombro, cotovelo e membros superiores" },
  { src: galeria3, alt: "Espaço de fisioterapia para coluna e reabilitação postural" },
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
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-square"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
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