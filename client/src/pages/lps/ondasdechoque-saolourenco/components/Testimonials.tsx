import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mike Jeckson Correa",
      time: "Há 3 meses",
      text: "Equipe de profissionais excelentes! Atendimento e cuidados sob medida🙌 Excelentes resultados nos tratamentos 👏👏👏👏👏",
      rating: 5
    },
    {
      name: "Laila Lage Libânio",
      time: "Há 1 ano",
      text: "Cheguei com forte dores no quadril direito, devido a desgaste ósseo. E em um mês de tratamento não senti mais nenhuma dor. Voltei a fazer musculação indicada e direcionada pela Drª Ludmila.",
      rating: 5
    },
    {
      name: "Danny Ferreira",
      time: "Há 3 anos",
      text: "Confesso q me falta palavras para expressar tanta gratidão. Meus pais tem problema na coluna, devido a isso, sempre procuramos um tratamento adequado, mas sem muito sucesso. Aqui foi diferente!",
      rating: 5
    },
    {
      name: "Patricia Junqueira",
      time: "Há 2 anos",
      text: "Dra. Ludmila é uma excelente profissional!!! Extremamente atenciosa e competente!!! Meu filho de 14 anos estava com dores nas costas e movimentos limitados. Tratamento eficaz e humanizado!",
      rating: 5
    },
    {
      name: "Luiz Rocha",
      time: "Há 4 anos",
      text: "Sou do Rio de Janeiro e a uns 7 anos tinha uma dor absurda no meu joelho. Fui em diversas clínicas no Rio e em uns 5 ortopedistas 'famosos' daqui, sempre me passavam fisioterapia mas nenhuma adiantava. Aqui foi maravilhoso!",
      rating: 5
    },
    {
      name: "Eline Braga",
      time: "Há 4 anos",
      text: "Foi maravilhoso.....eu tenho hérnia de disco na cervical e tive muita dor na coluna que irradiava para o braço esquerdo. Procurei a Ludmila e fui muito bem atendida!",
      rating: 5
    },
    {
      name: "Regina Celia Evaristo",
      time: "Há 4 anos",
      text: "Estava sentindo muita dor no punho para realizar até mesmo movimentos simples. O tratamento que fiz aqui foi excepcional. Hoje, não sinto nenhuma dor.",
      rating: 5
    },
    {
      name: "Silvia Ribeiro",
      time: "Há 3 anos",
      text: "Estava procurando um tratamento para minha mãe que não fosse cirurgia e encontrei em São Paulo a clínica Trata. Olhando as unidades encontrei uma em São Lourenço. Que atendimento!",
      rating: 5
    },
    {
      name: "Joaovictor Piresarrais",
      time: "Há 1 mês",
      text: "Lugar incrível, atendeu todas minhas expectativas",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-[#f8faf9]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#14463e]/10 text-[#14463e] text-xs font-bold mb-4">
            <Star className="w-3 h-3 fill-[#14463e] text-[#14463e]" />
            4.9/5.0 no Google
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Histórias reais de quem vive sem dor
          </h2>
          <p className="text-gray-600 text-lg">
            Veja o que nossos pacientes de São Lourenço dizem sobre o tratamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="mb-4 text-gray-300">
                <Quote size={32} className="fill-current" />
              </div>
              
              <p className="text-gray-700 text-base mb-6 flex-grow leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                <div>
                  <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Google Review • {testimonial.time}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
