import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Clock,
  HeartPulse,
  MapPin,
  Microscope,
  Move,
  ShieldCheck,
  Star,
  UserCheck,
  Users
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openTypebot = () => {
    // Placeholder for Typebot integration
    window.open("https://typebot.co/jonathan-dorcronica", "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden">

      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-2 transition-all duration-300">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/assets/images/logo-instituto.png" alt="ITC Vertebral + Instituto Trata" className="h-12 object-contain" />
            <div className="h-8 w-px bg-gray-300 hidden sm:block"></div>
            <span className="text-sm font-medium text-gray-600 hidden sm:block leading-tight">
              Fisioterapia<br />Especializada
            </span>
          </div>
          <Button
            onClick={openTypebot}
            variant="default"
            className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all hover:scale-105 hidden sm:flex"
          >
            Agendar Avaliação
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/paciente-descansando.jpg"
            alt="Fisioterapia Especializada"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Cambé e Arapongas
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Dor Crônica <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                Que Não Passa?
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Você já tentou várias fisioterapias e a dor continua? Oferecemos um tratamento diferenciado, baseado em tecnologia e ciência, que já transformou a vida de milhares de pessoas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={openTypebot}
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all"
              >
                Qualifique-se Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="flex items-center gap-4 px-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs text-white overflow-hidden">
                      <Users className="w-4 h-4 text-slate-400" />
                    </div>
                  ))}
                </div>
                <p>+83k Pacientes Tratados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise Section (New) */}
      <section className="py-12 bg-slate-900 border-y border-white/5">
        <div className="container">
          <p className="text-center text-muted-foreground mb-8 text-sm uppercase tracking-widest">Especialidades e Tratamentos</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {["Coluna Vertebral", "Joelho", "Quadril", "Ombro", "Pé e Tornozelo", "Dor de Cabeça"].map((area, idx) => (
              <div key={idx} className="bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-4 border border-white/5 flex flex-col items-center justify-center gap-2 group cursor-default">
                <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                <span className="font-medium text-white">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Visual Section 1 (New) */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/paciente-recuperado.jpg"
            alt="Paciente recuperado voltando às atividades físicas"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-xl space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 mb-4">
              <span className="text-primary font-bold">Roberto, 68 anos</span> <span className="text-white/80">- Cambé</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              "Voltei a brincar com meus netos sem medo da dor."
            </h2>
            <p className="text-xl text-white/90 font-light">
              A vida não espera. Recupere os momentos que realmente importam.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Você Reconhece Essa Situação?</h2>
            <p className="text-muted-foreground text-lg">
              Muitos de nossos pacientes chegam até nós após meses ou anos de tentativas frustradas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Dor Persistente",
                desc: "Você sente dor há meses ou anos e parece que nada resolve definitivamente."
              },
              {
                icon: HeartPulse,
                title: "Tratamentos Falhos",
                desc: "Já passou por diversas clínicas, fez dezenas de sessões e o alívio foi apenas temporário."
              },
              {
                icon: ShieldCheck,
                title: "Medo da Cirurgia",
                desc: "Recebeu indicação cirúrgica mas gostaria de tentar uma alternativa conservadora e segura."
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-7 h-7 text-slate-400 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Visual Section 2 (New) */}
      <section className="relative h-[60vh] flex items-center justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/alongamento.jpg"
            alt="Mulher realizando exercícios de alongamento e mobilidade"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10 text-right">
          <div className="max-w-xl ml-auto space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 mb-4">
              <span className="text-primary font-bold">Ana Paula, 42 anos</span> <span className="text-white/80">- Arapongas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              "O movimento é a chave para a liberdade."
            </h2>
            <p className="text-xl text-white/90 font-light">
              Não deixe que a dor defina seus limites. Seu corpo foi feito para se mover.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-background relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Por Que Nosso Método é <span className="text-primary">Diferente?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Não tratamos apenas o sintoma, buscamos a causa raiz do problema através de uma abordagem integrada e tecnológica.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Avaliação Biomecânica Detalhada",
                    desc: "Utilizamos tecnologia para mapear exatamente onde está o desequilíbrio no seu corpo."
                  },
                  {
                    title: "Tecnologia Avançada",
                    desc: "Equipamentos de última geração que aceleram a recuperação e garantem precisão."
                  },
                  {
                    title: "Tratamento Individualizado",
                    desc: "Nada de 'receita de bolo'. Seu protocolo é desenhado especificamente para você."
                  },
                  {
                    title: "Foco na Causa Raiz",
                    desc: "Não queremos apenas aliviar a dor hoje, queremos evitar que ela volte amanhã."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-cyan-500 rounded-2xl opacity-20 blur-2xl" />
              <img
                src="/assets/images/postura.jpg"
                alt="Tecnologia e tratamento"
                className="relative rounded-2xl shadow-2xl border border-white/10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Method Steps */}
      <section className="py-24 bg-slate-900/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Como Funciona o Tratamento</h2>
            <p className="text-muted-foreground text-lg">Um processo estruturado para garantir sua recuperação.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            {[
              {
                step: "01",
                icon: Microscope,
                title: "Avaliação Completa",
                desc: "Entendemos seu histórico e realizamos testes físicos e tecnológicos precisos."
              },
              {
                step: "02",
                icon: BrainCircuit,
                title: "Protocolo Personalizado",
                desc: "Iniciamos o tratamento focado nas suas necessidades específicas e objetivos."
              },
              {
                step: "03",
                icon: UserCheck,
                title: "Reavaliação e Alta",
                desc: "Acompanhamos sua evolução até que você esteja pronto para viver sem dor."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative bg-background border border-white/5 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center border-4 border-background relative z-10 mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-background">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Visual Section 3 (New) */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/tratamento-clinico.jpg"
            alt="Paciente descansando tranquilamente após tratamento"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-xl space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 mb-4">
              <span className="text-primary font-bold">Mariana, 35 anos</span> <span className="text-white/80">- Cambé</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              "Dormir bem não é mais um sonho distante."
            </h2>
            <p className="text-xl text-white/90 font-light">
              O alívio real transforma suas noites e seus dias.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-background">
        <div className="container">
          <div className="bg-primary rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('/assets/images/bg-pattern.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />

            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Este Tratamento É Para Você?</h2>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                {[
                  "Tem dor crônica há mais de 3 meses",
                  "Já tentou outros tratamentos sem sucesso",
                  "Quer evitar cirurgias invasivas",
                  "Busca recuperar sua qualidade de vida",
                  "Sente dores na coluna, joelho ou quadril",
                  "Quer um atendimento exclusivo e atencioso"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={openTypebot}
                size="lg"
                className="bg-white text-primary hover:bg-slate-100 font-bold text-lg px-10 shadow-xl"
              >
                Sim, Quero Agendar Minha Avaliação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof (Updated with Real Google Reviews) */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
              <span className="text-white font-medium text-sm">Avaliação 5.0 no Google</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              O Que Nossos Pacientes <span className="text-primary">Dizem</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Histórias reais de quem recuperou a qualidade de vida em nossas clínicas de Cambé e Arapongas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Elisa Dolfini Paranzini",
                text: "São Excelentes!!! Profissionais Qualificados, que estão sempre se Atualizando para nos dar o Melhor tratamento e que se importam conosco e fazem o melhor para termos uma qualidade de vida!",
                unit: "Cambé"
              },
              {
                name: "Amanda Soraia",
                text: "Clínica maravilhosa, fui super bem atendida, atendimento personalizado para cada cliente, pude perceber no local, sempre educados e atenciosos, Super indico, desde a atendente da recepção até os Profissionais.",
                unit: "Cambé"
              },
              {
                name: "Katielly Oliveira Rocha",
                text: "Simplesmente incrível! A clínica de fisioterapia é excepcional em todos os aspectos. Desde a recepção acolhedora até os profissionais altamente capacitados, o atendimento é de primeira.",
                unit: "Cambé"
              },
              {
                name: "Júlia Bosqui",
                text: "Equipe comprometida e atualizada, atendimento de excelência desde a recepção até o final!!!!! Estamos muito felizes com os resultados que meus pais tiveram (meu pai tratou dor no joelho e minha mãe é paciente da neuro).",
                unit: "Cambé"
              },
              {
                name: "Tiago Ruiz",
                text: "Excelente atendimento e resultados rápidos! Estou muito satisfeito com o Instituto Trata. Fui tratado com profissionalismo.",
                unit: "Cambé"
              },
              {
                name: "Ana Vitoria Vieira Trindade",
                text: "O atendimento é excelente! Conhecidos meus que foram nessa clínica, tiveram seus problemas físicos resolvidos! Uma ótima clínica, com materiais e atendimento de qualidade.",
                unit: "Cambé"
              },
              {
                name: "Adriane Lima",
                text: "Excelente atendimento e serviço! A equipe é sempre atenciosa e profissional. Recomendo de olhos fechados!",
                unit: "Cambé"
              },
              {
                name: "Isabel Souza",
                text: "Atendimento maravilhoso, profissionais excelentes e muito atenciosos. Recomendo muito!",
                unit: "Arapongas"
              },
              {
                name: "Ricardo Miyakawa",
                text: "Profissionais extremamente capacitados, estrutura excelente e atendimento nota 10!",
                unit: "Cambé"
              }
            ].map((review, i) => (
              <div key={i} className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4 opacity-50" />
                </div>
                <p className="text-gray-300 mb-6 flex-grow text-sm leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{review.name}</p>
                    <div className="flex items-center gap-1 text-xs text-primary">
                      <MapPin className="w-3 h-3" />
                      {review.unit}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 text-lg rounded-full shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] transition-all duration-300 animate-pulse"
              onClick={openTypebot}
            >
              Quero Agendar Minha Avaliação
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Location (Updated with 2 Maps) */}
      <section className="py-24 bg-slate-900/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Visite Nossas Clínicas
            </h2>
            <p className="text-muted-foreground text-lg">
              Estamos convenientemente localizados em Cambé e Arapongas para melhor atendê-lo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Cambé Location */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Unidade Cambé</h3>
                  <p className="text-muted-foreground text-lg">Rua Espanha, 58 – Sala 4 - Centro</p>
                  <p className="text-sm text-slate-500 mt-1">Segunda a Sexta: 08h às 19h</p>
                </div>
              </div>

              <div className="h-[350px] bg-slate-800 rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1172.9300305011746!2d-51.27834714151326!3d-23.27649514785461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb430d47345095%3A0xc6e4663d2e61298c!2sInstituto%20Trata!5e1!3m2!1spt-BR!2sbr!4v1739500000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Mapa Unidade Cambé"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>

              <Button onClick={openTypebot} className="w-full" variant="outline">
                Agendar em Cambé
              </Button>
            </div>

            {/* Arapongas Location */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Unidade Arapongas</h3>
                  <p className="text-muted-foreground text-lg">Rua Drongo, 735 - Centro</p>
                  <p className="text-sm text-slate-500 mt-1">Segunda a Sexta: 08h às 19h</p>
                </div>
              </div>

              <div className="h-[350px] bg-slate-800 rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.15!2d-51.42335!3d-23.41235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecab1555555555%3A0x1234567890abcdef!2sInstituto%20Trata%20Arapongas!5e0!3m2!1spt-BR!2sbr!4v1739500000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Mapa Unidade Arapongas"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>

              <Button onClick={openTypebot} className="w-full" variant="outline">
                Agendar em Arapongas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <Activity className="text-primary w-6 h-6" />
                <span className="text-xl font-bold text-white">
                  Fisioterapia<span className="text-primary">Especializada</span>
                </span>
              </div>
              <p className="text-muted-foreground max-w-xs">
                Transformando vidas através do movimento sem dor. Tratamento especializado em Cambé e Arapongas.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Tratamentos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Coluna Vertebral</li>
                <li>Joelho e Quadril</li>
                <li>Ombro e Cotovelo</li>
                <li>Dor Crônica</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/politica-privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
                <li><Link href="/termos-uso" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
                <li>Fisios de Qualidade</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/30 text-center text-sm text-slate-600">
            <p>&copy; {new Date().getFullYear()} Fisio de Qualidade - Tratamento Especializado. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
