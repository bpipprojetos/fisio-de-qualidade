import { motion } from "framer-motion";
import { Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import "./theme.css";

// Asset paths
const marcaFisioresolut = "/assets/images/fisioresolut01/marca-fisioresolut-trata.png";
const heroImage = "/assets/images/fisioresolut01/hero-newmov.jpg";
const painImage = "/assets/images/fisioresolut01/pain-newmov.jpg";
const transformationImage = "/assets/images/fisioresolut01/transformation-newmov.jpg";
const treatmentImage = "/assets/images/fisioresolut01/treatment-newmov.jpg";

import GoogleReviews from "./components/GoogleReviews";
import GaleriaClinica from "./components/GaleriaClinica";
import FinalCTA from "./components/FinalCTA";
import MetodoNewMov from "./components/MetodoNewMov";
import WhatsAppButton from "./components/WhatsAppButton";
import SobreClinica from "./components/SobreClinica";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const CTA_LINK = "https://typebot.co/bpip-rafa-fisioresolut";

const Index = () => {
  return (
    <div className="theme-fisioresolut01 min-h-screen bg-background font-body">
      <Helmet>
        <title>Dor Crônica Vila Leopoldina - FisioResolut | Instituto Trata</title>
        <meta name="description" content="Tratamento especializado em dor crônica na Vila Leopoldina. Recupere sua qualidade de vida com fisioterapia de ponta e atendimento personalizado." />
      </Helmet>
      <WhatsAppButton />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img src={marcaFisioresolut} alt="Logo FisioResolut - Instituto Trata" className="h-10 md:h-14" loading="lazy" />
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-sm md:text-base font-heading font-bold text-primary">Clínica Especializada em Dor Crônica</p>
            <p className="text-xs md:text-sm text-foreground/80">Vila Leopoldina - São Paulo</p>
          </div>
        </div>
      </header>

      {/* DOBRA 1 — HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Fisioterapeuta auxiliando paciente em exercício de reabilitação" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32 lg:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight text-primary-foreground mb-6 text-balance">
              Dor que dura mais de 3 meses <span className="text-secondary">não é normal.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-primary-foreground/90 mb-3 font-light">
              Ela é <strong>Dor Crônica.</strong>
            </motion.p>
            <motion.div variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/80 space-y-2 mb-8">
              <p>Se você convive com dor todos os dias</p>
              <p>na coluna, no joelho, no ombro ou nas articulações</p>
              <p>e ela nunca vai embora de verdade...</p>
              <p className="pt-2">Você pode estar sofrendo de dor crônica.</p>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground font-semibold mb-8 text-balance">
              Descubra como reduzir sua dor crônica em poucas semanas com um tratamento especializado e personalizado.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  👉 Volte a viver sem dor
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DOBRA 2 — BLOCO DE DOR */}
      <section className="bg-warm py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="space-y-5"
            >
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground text-balance">
                Você já tentou ignorar.
              </motion.h2>
              <motion.div variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground space-y-1">
                <p>Já tentou repousar.</p>
                <p>Já tentou remédio.</p>
                <p>Já tentou "esperar melhorar".</p>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-semibold text-foreground">
                Mas a dor continua lá.
              </motion.p>
              <motion.div variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground space-y-1">
                <p>Ela limita seus movimentos.</p>
                <p>Tira sua disposição.</p>
                <p>Afeta seu humor.</p>
                <p>Prejudica seu sono.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground">
                <p className="mb-2">Você começa a evitar:</p>
                <ul className="space-y-1 pl-4">
                  <li>• Caminhadas</li>
                  <li>• Exercícios</li>
                  <li>• Viagens</li>
                  <li>• Momentos com a família</li>
                </ul>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-lg md:text-xl text-foreground space-y-3 pt-4">
                <p>E aos poucos... sua vida vai ficando menor.</p>
                <p className="font-semibold">Mas dor constante não é parte natural do envelhecimento.</p>
                <p>É um sinal de que algo precisa ser tratado da forma certa.</p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img src={painImage} alt="Pessoa sentindo desconforto e dor nas costas" className="w-full h-auto" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* DOBRA 3 — TRANSFORMAÇÃO */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1"
            >
              <img src={transformationImage} alt="Casal sênior caminhando alegremente em um parque, sem dores" className="w-full h-auto" loading="lazy" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="space-y-5 order-1 md:order-2"
            >
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground text-balance">
                Imagine acordar e <span className="text-primary">não sentir aquela fisgada.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground">
                Imagine levantar da cama com segurança.
              </motion.p>
              <motion.ul variants={fadeInUp} className="space-y-3 text-lg md:text-xl">
                {[
                  "Caminhar sem medo",
                  "Dormir a noite inteira",
                  "Subir escadas sem sofrimento",
                  "Voltar a viajar",
                  "Brincar com filhos e netos",
                  "Ter autonomia novamente",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeInUp} className="text-lg md:text-xl text-foreground space-y-2 pt-4">
                <p>Reduzir a dor crônica não é luxo.</p>
                <p className="font-semibold text-primary">É qualidade de vida.</p>
                <p>E você ainda pode recuperar a sua.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DOBRA 4 — SOLUÇÃO */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="space-y-5"
            >
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground text-balance">
                Na <span className="text-primary">FisioResolut</span>, o tratamento é focado na <span className="text-secondary">causa</span> da dor crônica.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground">
                Aqui você recebe:
              </motion.p>
              <motion.ul variants={fadeInUp} className="space-y-3 text-lg md:text-xl">
                {[
                  "Avaliação detalhada e individual",
                  "Identificação da origem real da dor",
                  "Plano de tratamento personalizado",
                  "Técnicas modernas de reabilitação",
                  "Exercícios direcionados",
                  "Acompanhamento individualizado, de ponta a ponta, por um fisioterapeuta",
                  "Equipe especializada e pós-graduada pela Santa Casa de São Paulo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeInUp} className="text-lg md:text-xl text-foreground space-y-2 pt-4">
                <p>Nós não mascaramos a dor.</p>
                <p className="font-semibold">Nós tratamos o que está causando ela.</p>
                <p className="pt-2">Com método. Com ciência. Com responsabilidade.</p>
                <p className="font-semibold text-primary">Há 10 anos no mesmo endereço na Vila Leopoldina.</p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img src={treatmentImage} alt="Fisioterapeuta realizando tratamento especializado em paciente" className="w-full h-auto" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MÉTODO FISIORESOLUT */}
      <MetodoNewMov />

      {/* DOBRA 5 — PROVA / POSICIONAMENTO */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-6 text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground text-balance">
              Muitos pacientes chegam acreditando que <span className="text-secondary">"não tem mais jeito"</span>.
            </motion.h2>
            <motion.div variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground space-y-1">
              <p>Chegam com dor há anos.</p>
              <p>Com limitação.</p>
              <p>Com medo de cirurgia.</p>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-foreground font-medium">
              E descobrem que:
            </motion.p>
            <motion.p variants={fadeInUp} className="text-2xl md:text-3xl font-heading font-bold text-primary">
              A dor crônica pode ser tratada.
            </motion.p>
            <motion.div variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground space-y-1">
              <p>Com estratégia.</p>
              <p>Com acompanhamento certo.</p>
              <p>Com um plano direcionado.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-lg md:text-xl text-foreground space-y-2 pt-4">
              <p>O que muda o resultado não é o tempo de dor.</p>
              <p className="font-bold text-xl md:text-2xl text-primary">É o tratamento correto.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DOBRA 6 — REFORÇO FINAL */}
      <section className="bg-warm py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-5"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground text-balance text-center">
              Se a sua dor já dura meses...
            </motion.h2>
            <motion.div variants={fadeInUp} className="text-lg md:text-xl text-center text-muted-foreground space-y-3">
              <p className="font-semibold text-xl md:text-2xl text-foreground">Ela não vai desaparecer sozinha.</p>
              <p>Quanto mais tempo você adia o tratamento,<br /> maior a chance da limitação aumentar.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-lg md:text-xl text-center text-muted-foreground space-y-3 pt-4">
              <p>Você não precisa conviver com isso.</p>
              <p className="font-semibold text-foreground">Você precisa entender a causa.</p>
              <p className="text-primary font-bold text-xl md:text-2xl">E começar a tratar corretamente.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DOBRA 7 — CTA FINAL */}
      <section className="bg-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground text-balance">
              Dor que dura mais de 3 meses <span className="text-secondary">não é normal.</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/80 space-y-1">
              <p>Ela é dor crônica.</p>
              <p className="font-semibold text-primary-foreground">E tem tratamento.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-6">
              <Button variant="cta" size="xl" asChild>
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="text-xl">
                  📅 Agende uma consulta 👇
                </a>
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/80 space-y-3 pt-6">
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-secondary" />
                Av. Queiroz Filho, 1700 - Vila Hamburguesa, São Paulo - SP, 05319-090
              </p>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-heading font-bold text-secondary pt-6">
              👉 Dê o primeiro passo para voltar a viver sem dor.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* DOBRA 8 — AVALIAÇÕES GOOGLE */}
      <GoogleReviews />

      {/* GALERIA DA CLÍNICA */}
      <GaleriaClinica />

      {/* DOBRA 9 — GATILHO FINAL */}
      <FinalCTA />

      {/* SOBRE A CLÍNICA */}
      <SobreClinica />

      {/* Footer */}
      <footer className="bg-foreground border-t border-primary-foreground/10 py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="/politica-privacidade" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Política de Privacidade</a>
            <a href="/termos-uso" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Termos de Uso</a>
          </div>
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} FisioResolut - Instituto Trata. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};


export default Index;