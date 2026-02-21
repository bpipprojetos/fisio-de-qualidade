import { Star, Quote, CheckCircle2 } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "58 anos",
      location: "João Pessoa",
      text: "Eu sofria com fascite plantar há anos. Já tinha tentado de tudo, palmilhas, remédios... Com a Terapia por Ondas de Choque no Instituto TRATA, finalmente voltei a caminhar sem dor. Foi um divisor de águas na minha vida.",
      date: "Há 2 semanas"
    },
    {
      name: "João Pereira",
      age: "35 anos",
      location: "João Pessoa",
      text: "Como corredor amador, a dor no joelho era constante. Achei que teria que parar de correr. O tratamento com ondas de choque foi rápido e eficaz. Hoje, voltei a treinar sem limitações. Recomendo demais!",
      date: "Há 1 mês"
    },
    {
      name: "Carlos Almeida",
      age: "62 anos",
      location: "João Pessoa",
      text: "Tinha indicação de cirurgia para o quadril. Decidi tentar as ondas de choque como última opção. Foi a melhor decisão que tomei. A dor sumiu e recuperei minha mobilidade. Gratidão à equipe do TRATA.",
      date: "Há 3 semanas"
    },
    {
      name: "Ana Beatriz",
      age: "42 anos",
      location: "João Pessoa",
      text: "O atendimento é impecável. Tratei uma tendinite no tendão de Aquiles que me incomodava há meses. Em 4 sessões já senti uma diferença absurda. Profissionais muito qualificados.",
      date: "Há 2 meses"
    },
    {
      name: "Ricardo Mendes",
      age: "29 anos",
      location: "João Pessoa",
      text: "Faço CrossFit e lesionei o ombro e o joelho. O protocolo do TRATA é diferenciado. Eles não tratam só a dor, mas a causa. A tecnologia de ondas de choque acelerou muito minha recuperação.",
      date: "Há 1 semana"
    },
    {
      name: "Sônia Rocha",
      age: "71 anos",
      location: "João Pessoa",
      text: "Achei que na minha idade teria que conviver com a dor da artrose. Me enganei. O tratamento me devolveu a alegria de brincar com meus netos sem sentir pontadas no joelho. Maravilhoso!",
      date: "Há 3 meses"
    },
    {
      name: "Felipe Gomes",
      age: "24 anos",
      location: "João Pessoa",
      text: "Tive uma pubalgia chata jogando futebol. O Dr. explicou tudo sobre o tratamento e as ondas de choque. Foi a solução para eu voltar aos gramados. Estrutura da clínica é top.",
      date: "Há 5 dias"
    },
    {
      name: "Lúcia Ferreira",
      age: "55 anos",
      location: "João Pessoa",
      text: "O esporão de calcâneo não me deixava trabalhar em pé. Fiz o tratamento completo e hoje não sinto mais nada. O investimento na saúde vale cada centavo. Podem confiar.",
      date: "Há 1 mês"
    },
    {
      name: "Roberto Dias",
      age: "48 anos",
      location: "João Pessoa",
      text: "Profissionais excelentes e tecnologia de ponta. O ambiente é acolhedor e você se sente cuidado de verdade. Minha dor no quadril desapareceu completamente.",
      date: "Há 2 semanas"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Prova Social</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Histórias reais de quem <span className="text-primary">vive sem dor</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-yellow-400 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="text-white font-bold text-lg ml-2">4.9/5.0</span>
          </div>
          <p className="text-gray-400">Baseado em avaliações verificadas de pacientes</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 relative hover:bg-gray-750 transition-all hover:-translate-y-1 duration-300 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs text-green-400 font-medium bg-green-400/10 px-2 py-1 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  Google
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-sm flex-1">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-700/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-red-700 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.location} • {item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
}
