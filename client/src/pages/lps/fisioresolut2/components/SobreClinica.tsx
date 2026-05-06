import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

// Asset paths
const marcaFisioresolut = "/assets/images/fisioresolut01/marca-fisioresolut-trata.png";
const clinica1 = "/assets/images/fisioresolut01/clinica-1.jpg";
const clinica2 = "/assets/images/fisioresolut01/clinica-2.jpg";
const clinica3 = "/assets/images/fisioresolut01/clinica-3.jpg";
const clinica4 = "/assets/images/fisioresolut01/clinica-4.jpg";
const clinica5 = "/assets/images/fisioresolut01/clinica-5.jpg";
const clinica6 = "/assets/images/fisioresolut01/clinica-6.jpg";
const clinica7 = "/assets/images/fisioresolut01/clinica-7.jpg";
const clinica8 = "/assets/images/fisioresolut01/clinica-8.jpg";
const clinica9 = "/assets/images/fisioresolut01/clinica-9.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const images = [
  { src: clinica1, alt: "Fisioterapeuta realizando terapia manual" },
  { src: clinica2, alt: "Atendimento fisioterapêutico especializado" },
  { src: clinica3, alt: "Tratamento de ombro na clínica" },
  { src: clinica7, alt: "Fisioterapia ortopédica" },
  { src: clinica8, alt: "Exercício terapêutico com faixa elástica" },
  { src: clinica4, alt: "Recepção FisioResolut - Instituto Trata" },
  { src: clinica5, alt: "Laboratório de análise de marcha" },
  { src: clinica6, alt: "Consultório da clínica" },
  { src: clinica9, alt: "Edifício da clínica na Vila Leopoldina" },
];

const SobreClinica = () => {
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
          {/* Logos */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center">
            <img src={marcaFisioresolut} alt="Logo FisioResolut - Especialistas em Fisioterapia" className="h-16 md:h-24" loading="lazy" />
          </motion.div>

          {/* Title */}
          <motion.div variants={fadeInUp} className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground text-balance">
              Conheça nossa <span className="text-primary">clínica</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Um espaço moderno e acolhedor, projetado para oferecer o melhor tratamento em fisioterapia e reabilitação.
            </p>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow ${
                  i === 0 ? "col-span-2 md:col-span-1 aspect-video md:aspect-square" : "aspect-square"
                }`}
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

          {/* Address */}
          <motion.div variants={fadeInUp} className="text-center space-y-4 pt-4">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-foreground text-lg md:text-xl">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-semibold">Av. Queiroz Filho, 1700 - Vila Hamburguesa, São Paulo - SP, 05319-090</span>
              </div>
              <p className="text-muted-foreground text-base md:text-lg">
                Há 10 anos no mesmo endereço na Vila Leopoldina
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SobreClinica;
