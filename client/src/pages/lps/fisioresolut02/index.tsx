import { useState } from "react";
import { Helmet } from "react-helmet";
import "./theme.css";

/**
 * Design Philosophy: Professional Healthcare Landing Page
 * - Dark background with orange accents (trust, health, growth)
 * - High contrast for readability
 * - Emotional storytelling through testimonials
 * - Multiple CTAs for conversion optimization
 * - Focus on pain points and solutions
 */

// Asset paths
const marcaFisioresolut = "/assets/images/fisioresolut02/marca-fisioresolut-trata.png";
const heroImage = "/assets/images/fisioresolut02/hero-clinica.webp";
const painImage = "/assets/images/fisioresolut02/chronic-pain.webp";

const anatomyPe = "/assets/images/fisioresolut02/anatomy-pe.webp";
const anatomyJoelho = "/assets/images/fisioresolut02/anatomy-joelho.webp";
const anatomyQuadril = "/assets/images/fisioresolut02/anatomy-quadril.webp";
const anatomyColuna = "/assets/images/fisioresolut02/anatomy-coluna.webp";
const anatomyOmbro = "/assets/images/fisioresolut02/anatomy-ombro.webp";
const anatomyDorCronica = "/assets/images/fisioresolut02/anatomy-dor-cronica.webp";

const clinica1 = "/assets/images/fisioresolut02/clinica-1.jpg";
const clinica2 = "/assets/images/fisioresolut02/clinica-2.jpg";
const clinica3 = "/assets/images/fisioresolut02/clinica-3.jpg";
const clinica4 = "/assets/images/fisioresolut02/clinica-4.jpg";
const predioClinica = "/assets/images/fisioresolut02/predio-clinica.jpg";

const CTA_LINK = "https://typebot.co/bpip-rafa-fisioresolut";

const Button = ({ children, className = "", size = "md", ...props }: any) => {
  const sizeClasses: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  return (
    <button
      className={`font-semibold rounded-lg transition-all ${sizeClasses[size as string]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "", ...props }: any) => (
  <div className={`rounded-lg border ${className}`} {...props}>
    {children}
  </div>
);

export default function Home() {
  const testimonials = [
    {
      initial: "T",
      name: "Thiago Domingues",
      location: "Vila Leopoldina",
      text: "Excelente experiência com a clínica! O ambiente é muito organizado, limpo e agradável. Toda a equipe é extremamente atenciosa e educada. O atendimento profissional e a atenção aos detalhes são notáveis. Sou muito grato pelo apoio durante minha jornada de recuperação.",
    },
    {
      initial: "A",
      name: "Andrea Beni",
      location: "Vila Leopoldina",
      text: "Um perfeito 5 para todos os profissionais! Trabalho impecável e extremamente dedicado de toda a equipe. O compromisso com a recuperação do paciente é evidente em cada interação. A clínica oferece atendimento personalizado com equipamentos de última geração.",
    },
    {
      initial: "I",
      name: "Isabela",
      location: "Vila Leopoldina",
      text: "Tive sessões para tratar inflamação no joelho e estou muito satisfeita com os resultados e o atendimento das recepcionistas e do Dr. Lucas. O tratamento foi eficaz e a equipe foi sempre apoiadora e encorajadora.",
    },
    {
      initial: "N",
      name: "Nancy",
      location: "Vila Leopoldina",
      text: "Tudo foi perfeito, além das expectativas. Desde a recepção, estacionamento, café e especialmente o atendimento profissional e empático da Fisioterapeuta Larissa. Toda a experiência foi excepcional desde o momento em que cheguei.",
    },
    {
      initial: "P",
      name: "Paciente",
      location: "Vila Leopoldina",
      text: "Fiz cirurgia no ligamento cruzado anterior e menisco. A equipe do Instituto Trata superou todas as minhas expectativas. O plano de tratamento personalizado e o acompanhamento constante fizeram toda a diferença. Consegui atingir meus objetivos de reabilitação muito mais rápido.",
    },
    {
      initial: "A",
      name: "Aníbal",
      location: "Vila Leopoldina",
      text: "Fui atendido pelo fisioterapeuta Raphael, que é um excelente profissional. Ele me transmitiu confiança para minha recuperação. Seu conhecimento e habilidade no tratamento da minha condição foram evidentes desde a primeira sessão. Seu encorajamento foi inestimável.",
    },
    {
      initial: "M",
      name: "Marcelo",
      location: "Vila Leopoldina",
      text: "Fiquei muito satisfeito com o tratamento neste instituto. Os profissionais são altamente qualificados e tratam cada paciente individualmente, com exercícios adaptados a cada etapa do tratamento. A abordagem personalizada era exatamente o que eu precisava.",
    },
    {
      initial: "V",
      name: "Victor",
      location: "Vila Leopoldina",
      text: "Fiz tratamento para dor nas costas e o atendimento de toda a equipe foi excelente. Foram super profissionais e altamente qualificados! O Dr. Lincoln obteve resultados notáveis nas primeiras sessões. Recomendo-o de todo o coração!",
    },
    {
      initial: "E",
      name: "Edu",
      location: "Vila Leopoldina",
      text: "Sem dúvida, um dos melhores institutos para tratamento de lesões. Sou jogador de voleibol amador e tive uma lenlesão no ombro. Todo o atendimento foi excelente. A responsividade e profissionalismo da equipe foram notáveis.",
    },
    {
      initial: "T",
      name: "Tanali",
      location: "Vila Leopoldina",
      text: "Excelente atendimento, processos muito eficientes e uma equipe altamente qualificada! A clínica opera com grande organização e profissionalismo. Desde o agendamento até as sessões de tratamento, tudo corre perfeitamente.",
    },
    {
      initial: "P",
      name: "Paciente",
      location: "Vila Leopoldina",
      text: "A clínica oferece uma abordagem abrangente da fisioterapia com atenção aos detalhes em cada aspecto do tratamento. A equipe demonstra genuíno cuidado com a recuperação do paciente e vai além para garantir a satisfação.",
    },
    {
      initial: "P",
      name: "Paciente",
      location: "Vila Leopoldina",
      text: "Altamente recomendado! Os fisioterapeutas do Instituto Trata são especialistas em sua área e oferecem planos de tratamento personalizados. O ambiente da clínica é limpo, confortável e bem equipado. A equipe é profissional e amigável.",
    },
    {
      initial: "P",
      name: "Paciente",
      location: "Vila Leopoldina",
      text: "A equipe do Instituto Trata é composta por profissionais altamente qualificados que são apaixonados por ajudar os pacientes a se recuperarem. A abordagem personalizada do tratamento garante que cada paciente receba o melhor cuidado possível.",
    },
    {
      initial: "P",
      name: "Paciente",
      location: "Vila Leopoldina",
      text: "Clínica de fisioterapia excelente com uma equipe profissional e atenciosa. As sessões de tratamento são bem organizadas e eficazes. Os fisioterapeutas dedicam tempo para entender a condição de cada paciente e elaboram planos de tratamento apropriados.",
    },
    {
      initial: "P",
      name: "Paciente",
      location: "Vila Leopoldina",
      text: "Instituto Trata é uma clínica de fisioterapia de alta qualidade que recomendo fortemente. A equipe é profissional, conhecedora e genuinamente se importa com a recuperação do paciente. As sessões de tratamento são eficazes.",
    },
    {
      initial: "P",
      name: "Paciente",
      location: "Vila Leopoldina",
      text: "A melhor experiência de fisioterapia que já tive! A equipe do Instituto Trata é excepcional em todos os aspectos. Desde a avaliação inicial até a última sessão, o cuidado e atenção fornecidos foram notáveis.",
    },
  ];

  return (
    <div className="theme-fisioresolut02 min-h-screen bg-slate-950 text-white font-sans">
      <Helmet>
        <title>Fisioresolut Instituto Trata | Fisioterapia na Vila Leopoldina</title>
        <meta name="description" content="Tratamento especializado em dor crônica, joelho, quadril e coluna na Vila Leopoldina. Recupere sua mobilidade com tecnologia e ciência." />
      </Helmet>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img 
              src={marcaFisioresolut}
              alt="Logo Fisioresolut Instituto Trata - Fisioterapia Especializada"
              className="h-10 md:h-12"
              loading="lazy"
            />
          </div>
          <div className="hidden md:block text-right">
            <p className="text-slate-900 font-semibold text-sm">Fisioterapia Especializada</p>
            <p className="text-slate-600 text-xs">na Vila Leopoldina</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 md:pb-32 min-h-[90vh] flex items-center"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/60" />
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p className="text-orange-500 font-semibold text-sm mb-4 flex items-center gap-2">
              <span className="text-orange-500">●</span> Vila Leopoldina - São Paulo
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Dor Crônica</span>
              <br />
              <span className="text-orange-500">Que Não Passa?</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Você já tentou várias fisioterapias e a dor continua? Oferecemos um tratamento diferenciado, baseado em tecnologia e ciência, que já transformou a vida de milhares de pessoas na Vila Leopoldina.
            </p>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white mb-8 w-full md:w-auto"
              onClick={() => window.open(CTA_LINK, '_blank')}
            >
              Comece Seu Tratamento Agora →
            </Button>
            <div className="flex items-center gap-4">
              <div className="inline-block bg-slate-800 border border-slate-600 text-white px-6 py-3 rounded-full font-bold text-sm md:text-lg">
                +83k Pacientes Tratados em todo o Brasil
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chronic Pain Impact Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* SVG Diagonal Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-24 text-slate-950"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${painImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-900/50" />

        <div className="container relative z-10 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div />
            <div className="text-right flex flex-col items-end">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-white">A dor volta porque</span>
                <br />
                <span className="text-orange-400">você nunca tratou</span>
                <br />
                <span className="text-white">o que realmente importa.</span>
              </h2>
              <div className="bg-orange-500/20 border border-orange-500/40 rounded-2xl p-6 mb-6 inline-block">
                <p className="text-orange-300 font-semibold">
                  E o que realmente importa está explicado aqui.
                </p>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                Você pode estar sofrendo de dor crônica.
              </p>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Se você convive com dor todos os dias na coluna, no joelho, no ombro ou nas articulações e ela nunca vai embora de verdade...
              </p>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white w-full md:w-auto"
                onClick={() => window.open(CTA_LINK, '_blank')}
              >
                Descubra como reduzir sua dor crônica
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-slate-950">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-500">★</span>
              ))}
              <span className="text-gray-400 ml-2">5.0 no Google</span>
              <span className="text-gray-400">114 avaliações</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">O Que Nossos Pacientes Dizem</h2>
            <p className="text-gray-400 text-lg">Histórias reais de quem recuperou a qualidade de vida em nossa clínica.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 9).map((testimonial, index) => (
              <Card key={index} className="bg-slate-900 border-slate-800 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-orange-500">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed italic">"{testimonial.text}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              onClick={() => window.open(CTA_LINK, '_blank')}
            >
              Ver Mais Depoimentos e Agendar
            </Button>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold text-sm mb-2 uppercase tracking-wider">Diferenciais</p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">A sua saúde em mãos de especialistas</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Somos parte da maior rede de fisioterapia do Brasil, com mais de 80 mil pacientes tratados com sucesso através do Instituto Trata.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-slate-50 border-slate-200 p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <img 
                  src={marcaFisioresolut}
                  alt="Fisioresolut Instituto Trata - Logotipo Oficial"
                  className="h-10"
                  loading="lazy"
                />
              </div>
              <ul className="space-y-4">
                {[
                  "Atendimento Individualizado de Ponta a Ponta",
                  "Mesmo Fisioterapeuta e Equipe Especialista",
                  "Equipe Formada pela Santa Casa de São Paulo",
                  "Ampla Experiência em Ortopedia",
                  "10 Anos no Mesmo Endereço na Vila Leopoldina",
                  "Alta Satisfação dos Pacientes (Nota 5.0)",
                  "Protocolo Baseado em Evidência Científica",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-xl leading-none">✓</span>
                    <span className="text-slate-700 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-slate-100 border-slate-200 p-8 shadow-inner border-dashed">
              <h3 className="text-xl font-bold text-slate-500 mb-6 uppercase tracking-tight">Clínicas Convencionais</h3>
              <ul className="space-y-4">
                {[
                  "Atendimento por estagiários ou generalistas",
                  "Tratamentos genéricos sem personalização",
                  "Recursos e equipamentos limitados",
                  "Vários pacientes ao mesmo tempo por profissional",
                  "Foco apenas no alívio temporário do sintoma",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 opacity-60">
                    <span className="text-red-500 font-bold text-xl leading-none">✕</span>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 md:py-32 bg-slate-950">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 font-semibold text-sm mb-4 uppercase tracking-wider">Por que escolher?</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                <span className="text-white">Sua recuperação sem cirurgia começa aqui</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Tratamento Não Invasivo",
                  "Sem Efeitos Colaterais",
                  "Sem Afastamento",
                  "Resultados Rápidos",
                  "Ataca a Causa da Dor",
                  "Ciência e Tecnologia",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-green-500 font-bold text-lg">✓</span>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 border-l-4 border-orange-500 rounded-r-lg p-6 mb-8">
                <p className="text-gray-300 italic text-base">
                  "A fisioterapia especializada é frequentemente a melhor alternativa antes da cirurgia, com altas taxas de sucesso em casos crônicos."
                </p>
              </div>

              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white w-full md:w-auto"
                onClick={() => window.open(CTA_LINK, '_blank')}
              >
                QUERO VIVER SEM DOR
              </Button>
            </div>

            <div className="relative group">
              <div className="absolute -inset-2 bg-orange-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src={painImage}
                alt="Paciente em processo de recuperação física na clínica"
                className="rounded-lg w-full relative z-10 shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold text-sm mb-2 uppercase tracking-widest">Áreas de Atuação</p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 px-4">Especialistas em Membros Inferiores, Coluna e Ombro</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Nossa equipe utiliza protocolos avançados para tratar as patologias mais recorrentes do sistema musculoesquelético.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pé e Tornozelo",
                image: anatomyPe,
                conditions: ["Fascite Plantar", "Esporão de Calcâneo", "Tendinite de Aquiles", "Neuroma de Morton", "Entorses"],
              },
              {
                title: "Joelho",
                image: anatomyJoelho,
                conditions: ["Tendinite Patelar", "Lesões Meniscais", "Condromalácia", "LCA / LCP", "Artrose"],
              },
              {
                title: "Quadril",
                image: anatomyQuadril,
                conditions: ["Bursite Trocantérica", "Tendinopatia Glútea", "Síndrome do Piriforme", "Pubalgia", "Impacto Femoroacetabular"],
              },
              {
                title: "Coluna Vertebral",
                image: anatomyColuna,
                conditions: ["Hérnia de Disco", "Dor Lombar Crônica", "Cervicalgia", "Escoliose", "Estenose Espinal"],
              },
              {
                title: "Ombro e Braço",
                image: anatomyOmbro,
                conditions: ["Síndrome do Impacto", "Tendinite Manguito Rotador", "Ombro Congelado", "Epicondilite", "Túnel do Carpo"],
              },
              {
                title: "Dor Crônica",
                image: anatomyDorCronica,
                conditions: ["Dores Persistentes", "Fibromialgia", "Reabilitação Pós-Trauma", "Dor Neuropática", "Sensibilização Central"],
              },
            ].map((area, index) => (
              <Card key={index} className="bg-slate-50 border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 translate-y-0 hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={area.image}
                    alt={`Anatomia e tratamento para ${area.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{area.title}</h3>
                  <ul className="space-y-2 mb-8 h-32 overflow-y-auto">
                    {area.conditions.map((condition, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-slate-700 text-sm font-medium">{condition}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="sm"
                    className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold"
                    onClick={() => window.open(CTA_LINK, '_blank')}
                  >
                    FALAR COM ESPECIALISTA →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32 bg-slate-950">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Conheça Nossa Clínica</h2>
            <p className="text-gray-400 text-lg">Ambiente moderno e equipado com o que há de mais avançado na fisioterapia.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[clinica1, clinica2, clinica3, clinica4].map((image, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-2xl group relative h-96">
                <img 
                  src={image}
                  alt={`Estrutura da Clínica Fisioresolut Vila Leopoldina - Foto ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Visite Nossa Unidade</h2>
            <p className="text-gray-600 text-lg">Localização privilegiada na Vila Leopoldina/Hamburguesa para sua comodidade e fácil acesso.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <Card className="bg-slate-50 border-slate-200 p-10 shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-orange-500">📍</span> Fisioresolut / Instituto Trata
              </h3>
              <p className="text-gray-700 text-xl mb-8 leading-relaxed font-medium">
                Av. Queiroz Filho, 1700<br />
                Vila Hamburguesa, São Paulo - SP<br />
                CEP: 05319-090
              </p>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white w-full shadow-lg shadow-orange-500/30 py-4 text-xl"
                onClick={() => window.open(CTA_LINK, '_blank')}
              >
                Agendar Pelo WhatsApp
              </Button>
            </Card>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={predioClinica}
                alt="Fachada do edifício onde fica a Clínica Fisioresolut na Vila Hamburguesa"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-16 border-t border-slate-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <img src={marcaFisioresolut} alt="Fisioresolut Logo Inverse" className="h-10 mb-6 brightness-0 invert opacity-80" />
              <p className="max-w-sm text-sm leading-relaxed mb-6">
                Especialistas em fisioterapia ortopédica e tratamento da dor crônica. Há mais de uma década transformando vidas através de ciência e atendimento humano na Vila Leopoldina.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Links Úteis</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/politica-privacidade" className="hover:text-orange-500 transition-colors">Política de Privacidade</a></li>
                <li><a href="/termos-uso" className="hover:text-orange-500 transition-colors">Termos de Uso</a></li>
                <li><a href="/" className="hover:text-orange-500 transition-colors">Página Inicial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h4>
              <p className="text-sm mb-2">Segunda a Sexta: 08h às 20h</p>
              <p className="text-sm text-orange-500 font-bold">Vila Leopoldina - SP</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs opacity-50">
            <p>&copy; {new Date().getFullYear()} Fisioresolut / Instituto Trata. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={CTA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all hover:scale-110 flex items-center justify-center animate-bounce-slow"
        title="Fale conosco no WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171c-1.519.754-2.753 1.787-3.53 3.025C2.357 9.775 2 11.609 2 13.528c0 1.803.42 3.51 1.252 5.015l-1.332 3.861 3.965-1.309c1.438.743 3.05 1.143 4.897 1.143h.005c5.211 0 9.448-4.24 9.448-9.452 0-2.529-.981-4.902-2.765-6.686-1.784-1.784-4.157-2.766-6.686-2.766"/>
        </svg>
      </a>
    </div>
  );
}
