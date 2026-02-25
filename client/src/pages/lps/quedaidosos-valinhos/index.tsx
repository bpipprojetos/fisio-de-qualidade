import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle2, Star, MapPin, Clock, ShieldCheck, ArrowRight, Quote, PlayCircle } from "lucide-react";
import { Link } from "wouter";
import "./theme.css";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openTypebot = () => {
    window.open("https://typebot.co/bpip-fernando-valinhos-queda-idosos", "_blank");
  };

  return (
    <div className="theme-quedaidosos min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      {/* Header */}
      <header className="w-full border-b bg-white shadow-sm">
        <div className="container flex h-24 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/assets/images/lps/quedaidosos-valinhos/logo.png"
              alt="Let's Fisioterapia / ITC Vertebral"
              className="h-16 w-auto object-contain"
              loading="lazy"
            />
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection("metodo")} className="hover:text-green-700 transition-colors">O Método</button>
            <button onClick={() => scrollToSection("beneficios")} className="hover:text-green-700 transition-colors">Benefícios</button>
            <button onClick={() => scrollToSection("historias")} className="hover:text-green-700 transition-colors">Histórias Reais</button>
            <button onClick={() => scrollToSection("duvidas")} className="hover:text-green-700 transition-colors">Dúvidas</button>
          </nav>

        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-green-50 to-white">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/assets/images/lps/quedaidosos-valinhos/pattern-dots.svg')] opacity-10"></div>
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-semibold border border-green-200 shadow-sm">
                  <ShieldCheck className="w-4 h-4" />
                  Protocolo Exclusivo para Idosos 60+
                </div>
                <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-[1.1] text-slate-900 tracking-tight">
                  Pronto para voltar a se mover com <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">liberdade</span> e <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">segurança</span>?
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  Recupere seu equilíbrio, sua confiança e sua independência. Nosso protocolo exclusivo em Valinhos foi desenvolvido especificamente para quem deseja prevenir quedas e viver com qualidade.
                </p>

                <div className="space-y-4 pt-2">
                  {[
                    "Avaliação especializada em prevenção de quedas",
                    "Atendimento 100% individualizado e acolhedor",
                    "Resultados visíveis desde a primeira sessão"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    onClick={openTypebot}
                    size="lg"
                    className="h-14 px-8 text-lg bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-orange-200 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                  >
                    Quero Falar com um Especialista
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <p className="mt-4 text-sm text-slate-500 flex items-center gap-2">
                    <span className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </span>
                    <span className="font-semibold text-slate-700">4.8/5.0</span>
                    no Google (64 avaliações)
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-green-200 to-orange-100 rounded-[2rem] blur-2xl opacity-60"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500 h-[500px] md:h-[650px]">
                  <img
                    src="/assets/images/lps/quedaidosos-valinhos/hero-elderly.jpg"
                    alt="Idoso caminhando feliz e confiante em um parque de Valinhos"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 pt-24 text-white">
                    <p className="font-serif text-2xl italic font-medium">"Voltei a caminhar sem medo no parque."</p>
                    <p className="mt-2 font-medium text-green-300">— Sr. Antônio, 68 anos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parallax / Breathability Section 1 */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img
              src="/assets/images/lps/quedaidosos-valinhos/clinic-reception-bg.jpg"
              alt="Recepção acolhedora da Let's Fisioterapia"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Não deixe o medo de cair limitar a sua vida.
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Aqui na Let's Fisioterapia, entendemos que cada passo importa. Nosso ambiente é preparado para acolher você com a segurança e o carinho que você merece.
              </p>
              <Button
                onClick={openTypebot}
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg px-8 h-14 shadow-lg"
              >
                Agendar Minha Avaliação
              </Button>
            </div>
          </div>
        </section>

        {/* Método Section */}
        <section id="metodo" className="py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-green-600 font-bold tracking-wider uppercase text-sm">Nossa Abordagem</span>
              <h2 className="font-serif text-4xl font-bold text-slate-900 mt-3 mb-6">Por que nosso método funciona?</h2>
              <p className="text-lg text-slate-600">
                Diferente de tratamentos genéricos, focamos nas necessidades reais do corpo maduro. Combinamos tecnologia, ciência e um olhar humano.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Atendimento Individualizado",
                  desc: "Você nunca será apenas mais um número. Nossos fisioterapeutas dedicam atenção total a você durante toda a sessão.",
                  icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
                  image: "/assets/images/lps/quedaidosos-valinhos/individual-treatment.jpg"
                },
                {
                  title: "Alívio Imediato",
                  desc: "Técnicas manuais e equipamentos modernos para reduzir dores e desconfortos já nos primeiros atendimentos.",
                  icon: <Clock className="w-8 h-8 text-orange-500" />,
                  image: "/assets/images/lps/quedaidosos-valinhos/immediate-relief.jpg"
                },
                {
                  title: "Prevenção Real",
                  desc: "Exercícios específicos para fortalecimento e equilíbrio, focados na sua autonomia para as atividades do dia a dia.",
                  icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
                  image: "/assets/images/lps/quedaidosos-valinhos/prevention-exercises.jpg"
                }
              ].map((card, i) => (
                <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-slate-100 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit group-hover:bg-white group-hover:shadow-md transition-all">
                      {card.icon}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Histórias Reais Section */}
        <section id="historias" className="py-24 bg-slate-900 text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-4xl font-bold mb-6">Histórias Reais de Superação</h2>
              <p className="text-lg text-slate-300">
                Veja como nossos pacientes recuperaram a alegria de viver sem dor.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Recuperei minha autonomia",
                  desc: "Sra. Catarina conta como voltou a caminhar sem medo.",
                  video: "/videos/testimonial1.mp4",
                  thumb: "/assets/images/lps/quedaidosos-valinhos/thumb-testimonial1.jpg"
                },
                {
                  title: "Livre das dores nas costas",
                  desc: "Sr. João relata sua experiência com o tratamento da coluna.",
                  video: "/videos/testimonial2.mp4",
                  thumb: "/assets/images/lps/quedaidosos-valinhos/thumb-testimonial2.jpg"
                }
              ].map((item, i) => (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <div className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-slate-700">
                      <img
                        src={item.thumb}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-60"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/50">
                          <PlayCircle className="w-8 h-8 text-white fill-white/20" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                        <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-300">{item.desc}</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl p-0 bg-black border-slate-800">
                    <div className="aspect-video w-full">
                      <video
                        src={item.video}
                        controls
                        className="w-full h-full rounded-lg"
                        poster={item.thumb}
                      >
                        Seu navegador não suporta o elemento de vídeo.
                      </video>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos Google Section */}
        <section className="py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <img
                  src="/assets/images/lps/quedaidosos-valinhos/google-logo.svg"
                  alt="Google Logo"
                  className="w-5 h-5"
                  loading="lazy"
                />
                <span className="font-bold text-slate-700">4.8 de 5.0</span>
                <span className="text-slate-400">|</span>
                <span className="text-slate-600">64 avaliações verificadas</span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">O que dizem nossos pacientes</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Maria Helena", text: "Excelente atendimento! Os profissionais são muito atenciosos e competentes. Minha mãe melhorou muito do equilíbrio.", stars: 5 },
                { name: "José Carlos", text: "Estrutura fantástica e fisioterapeutas dedicados. Recomendo a todos de Valinhos.", stars: 5 },
                { name: "Ana Paula", text: "O tratamento para coluna do meu pai foi um sucesso. Ele não sente mais dores.", stars: 5 },
                { name: "Roberto Silva", text: "Ambiente acolhedor e seguro. Me sinto muito bem cuidado aqui.", stars: 5 },
                { name: "Lúcia Ferreira", text: "Profissionais que realmente se importam com a gente. Nota 10!", stars: 5 },
                { name: "Antônio Marcos", text: "Melhor clínica de fisioterapia da região. Equipamentos novos e equipe top.", stars: 5 },
                { name: "Sônia Lima", text: "Fiz o tratamento de prevenção de quedas e me sinto muito mais segura para caminhar.", stars: 5 },
                { name: "Pedro Santos", text: "Atendimento pontual e muito eficiente. Resolveram minha dor lombar.", stars: 5 },
                { name: "Cláudia Souza", text: "Carinho e dedicação definem esse lugar. Obrigada por tudo!", stars: 5 },
              ].map((review, i) => (
                <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-1 text-yellow-400 mb-3">
                      {[...Array(review.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                        {review.name.charAt(0)}
                      </div>
                      <span className="font-semibold text-slate-900 text-sm">{review.name}</span>
                      <CheckCircle2 className="w-4 h-4 ml-auto text-green-600 opacity-50" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                onClick={openTypebot}
                size="lg"
                className="bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 font-bold px-8"
              >
                Ver mais avaliações no Google
              </Button>
            </div>
          </div>
        </section>

        {/* Dúvidas Frequentes Section */}
        <section id="duvidas" className="py-24 bg-white">
          <div className="container max-w-3xl">
            <h2 className="font-serif text-4xl font-bold text-slate-900 text-center mb-12">Dúvidas Frequentes</h2>

            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "O tratamento serve para quem tem osteoporose?",
                  a: "Sim, com certeza! Nosso protocolo é adaptado para fortalecer a musculatura e os ossos com total segurança, respeitando os limites de cada paciente. É fundamental para quem tem osteoporose prevenir quedas."
                },
                {
                  q: "Preciso de encaminhamento médico?",
                  a: "Não é obrigatório. Nossos fisioterapeutas são profissionais de primeiro contato, capacitados para realizar uma avaliação completa e iniciar o tratamento. Se necessário, trabalhamos em conjunto com seu médico."
                },
                {
                  q: "Quantas vezes por semana preciso ir?",
                  a: "Isso depende da avaliação inicial. Geralmente, iniciamos com 2 vezes por semana para garantir resultados consistentes e, conforme sua evolução, ajustamos a frequência."
                },
                {
                  q: "Aceitam convênio?",
                  a: "Trabalhamos com sistema de reembolso e atendimento particular para garantir a qualidade e o tempo de atenção que você merece, sem a pressa dos atendimentos de convênio."
                },
                {
                  q: "O tratamento dói?",
                  a: "Pelo contrário! Nosso foco é o alívio da dor e o conforto. Utilizamos técnicas manuais suaves e exercícios progressivos. Você nunca fará nada que cause dor durante as sessões."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-green-700 text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="py-24 bg-green-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20"><img src="/assets/images/lps/quedaidosos-valinhos/happy-elderly-footer.jpg" alt="Senhora feliz e confiante" className="w-full h-full object-cover mix-blend-overlay" loading="lazy" /></div>
          <div className="container relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
              Sua saúde não pode esperar. <br />
              <span className="text-green-300">Agende sua avaliação hoje mesmo.</span>
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
              Dê o primeiro passo para uma vida com mais movimento, liberdade e sem dores. Estamos prontos para receber você em Valinhos.
            </p>
            <Button
              onClick={openTypebot}
              size="lg"
              className="h-16 px-10 text-xl bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-2xl hover:shadow-orange-500/20 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Quero Agendar Agora
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 md:col-span-2">

                <p className="leading-relaxed max-w-sm">
                  Clínica especializada em fisioterapia para idosos e tratamento da coluna vertebral em Valinhos/SP.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">Contato</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                    <span>R. Laurindo Ferraro, 49 - Jardim Soleil, Valinhos - SP, 13271-745</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-green-600 shrink-0" />
                    <span>Seg a Sex: 07h às 21h<br />Sáb: 07h às 12h</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
                <ul className="space-y-3">
                  <li><button onClick={() => scrollToSection("metodo")} className="hover:text-white transition-colors">O Método</button></li>
                  <li><button onClick={() => scrollToSection("beneficios")} className="hover:text-white transition-colors">Benefícios</button></li>
                  <li><button onClick={() => scrollToSection("historias")} className="hover:text-white transition-colors">Histórias Reais</button></li>
                  <li><button onClick={() => scrollToSection("duvidas")} className="hover:text-white transition-colors">Dúvidas Frequentes</button></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-900 text-center text-sm">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} Let's Fisioterapia / ITC Vertebral Valinhos. Todos os direitos reservados.</p>
                <Link href="/politica-privacidade" className="text-slate-500 hover:text-green-500 transition-colors">
                  Política de Privacidade
                </Link>
                <Link href="/termos-uso" className="text-slate-500 hover:text-green-500 transition-colors">
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
