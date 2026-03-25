import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  CheckCircle2, 
  PlayCircle, 
  Clock, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Star,
  Zap,
  Award,
  Users,
  BrainCircuit,
  HeartPulse,
  Microscope,
  UserCheck
} from "lucide-react";

export default function PhysiovidaManausLP() {
  const openTypebot = () => {
    window.open("https://wa.me/5592982823611", "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {/* Navbar overlay */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img 
              src="/assets/images/logo-physiovida.png" 
              alt="Physiovida Logo" 
              className="h-10 w-auto"
            />
          </div>
          <Button onClick={openTypebot} className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white rounded-full px-6">
            Agendar Consulta
          </Button>
          <Button onClick={openTypebot} variant="ghost" size="icon" className="md:hidden text-white">
            <Phone className="w-6 h-6" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/lps/physiovida-manaus/hero-bg.jpg" 
            alt="Clínica de Fisioterapia em Manaus" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold text-sm tracking-wide uppercase">Fisioterapia de Elite em Manaus</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                Recupere sua <span className="text-primary">liberdade</span> de movimento.
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Especialistas em Coluna e Membros Inferiores. Método exclusivo que evita cirurgias e devolve sua qualidade de vida em tempo recorde.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={openTypebot} 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-8 text-xl rounded-full shadow-[0_20px_40px_rgba(var(--primary-rgb),0.3)] hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Quero Falar com um Especialista
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
                
                <div className="flex items-center gap-4 px-4 py-2">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-slate-800" />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">+80.000 vidas transformadas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              {/* Empty space for layout balance as per original design or specific user preference to keep it clean */}
            </div>
          </div>
        </div>
      </section>
      {/* Specialties and Treatments - Restored Section */}
      <section className="py-12 bg-slate-950 border-y border-white/5">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Especialidades e Tratamentos</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Coluna Vertebral",
              "Joelho",
              "Quadril",
              "Ombro",
              "Pé e Tornozelo",
              "Dor de Cabeça"
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-white/5 rounded-xl p-6 text-center flex flex-col items-center justify-center gap-3 hover:bg-slate-900 transition-colors group">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]" />
                <span className="text-white font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Visual Section 1 */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/assets/images/lps/physiovida-manaus/wellness-1.jpg" 
            alt="Pessoa idosa feliz brincando com netos após tratamento" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-xl space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 mb-4">
              <span className="text-primary font-bold">Roberto, 68 anos</span> <span className="text-white/80">- Manaus</span>
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

          <div className="mt-12 text-center">
            <Button 
              onClick={openTypebot} 
              size="lg" 
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-7 text-xl rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.2)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.4)] transition-all duration-300 group"
            >
              Quero Agendar Minha Avaliação
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Wellness Visual Section 2 */}
      <section className="relative h-[60vh] flex items-center justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/assets/images/lps/physiovida-manaus/wellness-2.jpg" 
            alt="Mulher praticando exercícios físicos com liberdade de movemento" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10 text-right">
          <div className="max-w-xl ml-auto space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 mb-4">
              <span className="text-primary font-bold">Ana Paula, 42 anos</span> <span className="text-white/80">- Manaus</span>
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
                src="/assets/images/lps/physiovida-manaus/technology-treatment.jpg" 
                alt="Tecnologia avançada no tratamento de fisioterapia especializada" 
                className="relative rounded-2xl shadow-2xl border border-white/10 w-full"
                loading="lazy"
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

      {/* Wellness Visual Section 3 */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/assets/images/lps/physiovida-manaus/well-sleep.jpg" 
            alt="Pessoa dormindo tranquilamente após alívio da dor crônica" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-xl space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 mb-4">
              <span className="text-primary font-bold">Mariana, 35 anos</span> <span className="text-white/80">- Manaus</span>
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
            <div className="absolute inset-0 z-0">
              <img 
                src="/assets/images/lps/physiovida-manaus/target-audience-bg.jpg" 
                alt="Fisioterapia Especializada Manaus" 
                className="w-full h-full object-cover opacity-10 mix-blend-overlay"
                loading="lazy"
              />
            </div>
            
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

      {/* Social Proof */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" className="w-5 h-5" />
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
              Histórias reais de quem recuperou a qualidade de vida em nossas clínicas de Manaus.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Elisa Dolfini",
                text: "São Excelentes!!! O Dr. Raphael é extremamente qualificado, sempre se atualizando para nos dar o melhor tratamento. Eles realmente se importam conosco e fazem o melhor para termos qualidade de vida!",
                unit: "Manaus"
              },
              {
                name: "Amanda Soraia",
                text: "Clínica maravilhosa, fui super bem atendida pelo Dr. Raphael. Atendimento personalizado para cada cliente, pude perceber no local, sempre educados e atenciosos. Super indico!",
                unit: "Manaus"
              },
              {
                name: "Katielly Oliveira",
                text: "Simplesmente incrível! A clínica é excepcional em todos os aspectos. Desde a recepção acolhedora até o atendimento do Dr. Raphael, tudo é de primeira qualidade.",
                unit: "Manaus"
              },
              {
                name: "Júlia Bosqui",
                text: "Equipe comprometida e atualizada! Estamos muito felizes com os resultados que meus pais tiveram com o Dr. Raphael. Meu pai tratou dor no joelho e teve uma melhora impressionante.",
                unit: "Manaus"
              },
              {
                name: "Tiago Ruiz",
                text: "Excelente atendimento e resultados rápidos! Estou muito satisfeito com o tratamento do Dr. Raphael. Fui tratado com muito profissionalismo e atenção.",
                unit: "Manaus"
              },
              {
                name: "Ana Vitoria",
                text: "O atendimento é excelente! Conhecidos meus que foram atendidos pelo Dr. Raphael tiveram seus problemas físicos resolvidos! Uma ótima clínica, com materiais e atendimento de qualidade.",
                unit: "Manaus"
              },
              {
                name: "Adriane Lima",
                text: "Excelente atendimento e serviço! O Dr. Raphael é sempre atencioso e profissional. Recomendo de olhos fechados para quem busca fisioterapia especializada.",
                unit: "Manaus"
              },
              {
                name: "Isabel Souza",
                text: "Atendimento maravilhoso, Dr. Raphael é um profissional excelente e muito atencioso. Recomendo muito para quem precisa de tratamento sério e eficaz.",
                unit: "Manaus"
              },
              {
                name: "Ricardo Miyakawa",
                text: "Profissional extremamente capacitado! O Dr. Raphael oferece uma estrutura excelente e atendimento nota 10. Resolveu minhas dores que eu já tratava há tempos.",
                unit: "Manaus"
              }
            ].map((review, i) => (
              <div key={i} className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Review" className="w-4 h-4 opacity-50" />
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

      {/* Areas of Expertise Detailed */}
      <section className="py-24 bg-white text-slate-900 font-sans">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider text-primary uppercase mb-2 block">Áreas de Atuação</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 max-w-3xl mx-auto">
              Especialistas no tratamento de <span className="text-primary">membros inferiores e coluna</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Nossa equipe é altamente especializada em identificar e tratar as patologias mais complexas de joelho, quadril, pé e coluna.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pé e Tornozelo */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/assets/images/lps/physiovida-manaus/foot-ankle.webp" 
                  alt="Tratamento especializado em Pé e Tornozelo" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Pé e Tornozelo</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {["Fascite Plantar", "Esporão de Calcâneo", "Tendinite de Aquiles", "Neuroma de Morton", "Entorses e Lesões Ligamentares"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <Button onClick={openTypebot} variant="ghost" className="w-full justify-between hover:bg-slate-50 text-slate-900">
                    SAIBA MAIS <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Joelho */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/assets/images/lps/physiovida-manaus/knee.jpg" 
                  alt="Fisioterapia especializada para Joelho em Manaus" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Joelho</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {["Tendinite Patelar", "Tendinite da Pata de Ganso", "Síndrome da Dor Femoropatelar", "Lesões Meniscais", "Artrose (alívio de sintomas)"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <Button onClick={openTypebot} variant="ghost" className="w-full justify-between hover:bg-slate-50 text-slate-900">
                    SAIBA MAIS <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Quadril */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/assets/images/lps/physiovida-manaus/hip.jpg" 
                  alt="Tratamento para dores no Quadril" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Quadril</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {["Bursite Trocantérica", "Tendinopatia Glútea", "Síndrome do Piriforme", "Pubalgia", "Dor Lateral do Quadril"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <Button onClick={openTypebot} variant="ghost" className="w-full justify-between hover:bg-slate-50 text-slate-900">
                    SAIBA MAIS <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Coluna */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/assets/images/lps/physiovida-manaus/spine.jpg" 
                  alt="Especialista em Coluna Vertebral e Hérnia de Disco" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Coluna</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {["Hérnia de Disco", "Lombalgia", "Cervicalgia", "Escoliose", "Ciática"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <Button onClick={openTypebot} variant="ghost" className="w-full justify-between hover:bg-slate-50 text-slate-900">
                    SAIBA MAIS <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Ombro e Braço */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/assets/images/lps/physiovida-manaus/shoulder-arm.jpg" 
                  alt="Tratamento para Ombro e Braço em Manaus" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Ombro e Braço</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {["Bursite", "Tendinite", "Síndrome do Manguito Rotador", "Capsulite Adesiva", "Epicondilite"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <Button onClick={openTypebot} variant="ghost" className="w-full justify-between hover:bg-slate-50 text-slate-900">
                    SAIBA MAIS <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-24 bg-white text-slate-900 border-t border-slate-100 font-sans">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider text-primary uppercase mb-2 block">DIFERENCIAIS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              A sua saúde em mãos de <span className="text-primary">especialistas</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Somos parte da maior rede de fisioterapia do Brasil, com mais de 80 mil pacientes tratados com sucesso.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2">
              {/* Physiovida Manaus */}
              <div className="p-8 md:p-12 bg-slate-50">
                <div className="flex items-center gap-3 mb-8">
                  <img 
                    src="/assets/images/logo-physiovida.png" 
                    alt="Physiovida Logo" 
                    className="h-10 object-contain brightness-0"
                    loading="lazy"
                  />
                </div>

                <ul className="space-y-6">
                  {[
                    "Especialistas em Membros Inferiores e Coluna",
                    "Protocolo Baseado em Evidência",
                    "Tecnologia de Ponta",
                    "Atendimento individualizado e personalizado",
                    "Foco na Causa da Lesão",
                    "Atendimentos de 50min a 1 hora",
                    "Melhores equipamentos do mercado"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-medium text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clínicas Convencionais */}
              <div className="p-8 md:p-12 bg-white">
                <h3 className="font-bold text-xl text-slate-400 mb-8">Clínicas Convencionais</h3>
                <ul className="space-y-6">
                  {[
                    "Generalistas",
                    "Tratamentos genéricos",
                    "Recursos limitados",
                    "Vários pacientes ao mesmo tempo",
                    "Foco apenas no alívio do sintoma"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 opacity-60">
                      <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-red-400 font-bold text-xs">✕</span>
                      </div>
                      <span className="font-medium text-slate-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button 
              onClick={openTypebot} 
              size="lg" 
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-7 text-xl rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.2)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.4)] transition-all duration-300 group"
            >
              Quero Agendar Minha Avaliação
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Recovery without Surgery Section */}
      <section className="py-24 bg-slate-50 text-slate-900">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-sm font-bold tracking-wider text-primary uppercase mb-2 block">POR QUE ESCOLHER?</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  Sua recuperação sem cirurgia começa aqui
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Tratamento Não Invasivo (sem cortes)",
                  "Resultados Rápidos (3 a 5 sessões)",
                  "Sem Efeitos Colaterais Graves",
                  "Ataca a Causa da Dor",
                  "Sem Necessidade de Afastamento",
                  "Baseado em Evidências Científicas"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 italic text-sm leading-relaxed">
                  "A Tecnologia Avançada para Alívio da Dor é frequentemente a última alternativa antes da cirurgia, com taxas de sucesso impressionantes em casos crônicos."
                </p>
              </div>

              <Button 
                onClick={openTypebot} 
                size="lg" 
                className="bg-[#103025] hover:bg-[#1a4a3a] text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300"
              >
                QUERO RECUPERAR MINHA QUALIDADE DE VIDA
              </Button>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/assets/images/lps/physiovida-manaus/specialized-treatment.jpg" 
                  alt="Equipamentos e Tecnologia para Fisioterapia Especializada" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24 bg-background relative border-t border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Abordagens especializadas para cada necessidade, focadas na recuperação completa e duradoura.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Osteopatia",
                desc: "Terapia manual que trata a causa da dor, restabelecendo o equilíbrio do corpo.",
                features: ["Alívio de dores crônicas", "Melhora da mobilidade", "Sem uso de medicamentos"]
              },
              {
                title: "Quiropraxia",
                desc: "Ajustes precisos na coluna e articulações para otimizar o funcionamento do sistema nervoso.",
                features: ["Correção postural", "Alívio imediato de tensão", "Melhora do desempenho físico"]
              },
              {
                title: "Acupuntura",
                desc: "Técnica milenar que estimula pontos específicos para alívio da dor e bem-estar.",
                features: ["Redução de inflamações", "Controle do estresse", "Equilíbrio energético"]
              },
              {
                title: "Fisioterapia Pélvica",
                desc: "Reabilitação focada no fortalecimento e funcionalidade do assoalho pélvico.",
                features: ["Tratamento de incontinência", "Preparo para o parto", "Recuperação pós-cirúrgica"]
              },
              {
                title: "Microfisioterapia",
                desc: "Identifica e trata memórias traumáticas que afetam a saúde física e emocional.",
                features: ["Toques sutis", "Autocura do corpo", "Tratamento de traumas"]
              },
              {
                title: "Palmilhas Posturais",
                desc: "Correção da pisada para alinhar todo o corpo e prevenir lesões.",
                features: ["Feitas sob medida", "Prevenção de dores", "Conforto no dia a dia"]
              },
              {
                title: "Pilates Clínico",
                desc: "Exercícios controlados para fortalecimento, flexibilidade e consciência corporal.",
                features: ["Reabilitação segura", "Melhora da postura", "Fortalecimento do core"]
              },
              {
                title: "Fisioterapia Infantil",
                desc: "Cuidado especializado para o desenvolvimento motor e recuperação de crianças.",
                features: ["Abordagem lúdica", "Tratamento respiratório", "Correção postural precoce"]
              },
              {
                title: "Heike",
                desc: "Terapia manual suave que busca o equilíbrio físico e emocional.",
                features: ["Relaxamento profundo", "Alívio de tensões", "Bem-estar integral"]
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-card/30 border border-white/5 rounded-2xl p-8 hover:bg-card/50 transition-all duration-300 hover:-translate-y-1 group">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              onClick={openTypebot} 
              size="lg" 
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-7 text-xl rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.2)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.4)] transition-all duration-300 group"
            >
              Quero Agendar Minha Avaliação
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-slate-900/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Visite Nossas Clínicas
            </h2>
            <p className="text-muted-foreground text-lg">
              Estamos convenientemente localizados em Manaus para melhor atendê-lo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex gap-4 items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Unidade Manaus</h3>
                  <p className="text-muted-foreground text-lg">Travessa Baltazar, Rua B Sete, 63 - Adrianópolis</p>
                  <p className="text-sm text-slate-500 mt-1">Manaus - AM, 69057-081</p>
                  <p className="text-sm text-slate-500 mt-1">Segunda a Sexta: 08h às 19h</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1469.34!2d-60.010!3d-3.116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c100!2sAdrian%C3%B3polis!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
                  className="w-full h-full border-0 grayscale invert opacity-80"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Pronto para começar?</h3>
              <p className="text-muted-foreground mb-8">
                Agende sua avaliação agora mesmo e dê o primeiro passo para uma vida sem limitações.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">WhatsApp</p>
                    <p className="text-white font-bold">(92) 98282-3611</p>
                  </div>
                </div>
                
                <Button 
                  onClick={openTypebot} 
                  className="w-full bg-primary hover:bg-primary/90 text-white py-8 text-xl rounded-2xl shadow-lg"
                >
                  Agendar Agora
                </Button>
                
                <p className="text-center text-xs text-muted-foreground pt-4">
                  * Respondemos em média em menos de 5 minutos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-white/5">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <img 
                src="/assets/images/logo-physiovida.png" 
                alt="Physiovida Logo" 
                className="h-8 w-auto opacity-70"
              />
            </div>
            
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="/politica-privacidade" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="/termos-uso" className="hover:text-primary transition-colors">Termos de Uso</a>
            </div>
            
            <div className="text-xs text-slate-500">
              © 2024 Physiovida Manaus. Todos os direitos reservados.
            </div>
          </div>
          <div className="text-center mt-8 text-[10px] text-slate-600">
            Bruno Parente Tecnologia em Saúde LTDA - CNPJ: 45.195.127/0001-44<br />
            RESPONSÁVEL TÉCNICO: Dr. Raphael (CREFITO: XXXX)
          </div>
        </div>
      </footer>
    </div>
  );
}
