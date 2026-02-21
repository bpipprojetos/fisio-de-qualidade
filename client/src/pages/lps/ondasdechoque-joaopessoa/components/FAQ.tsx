import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "O tratamento dói?",
      answer: "Pode haver um desconforto durante a aplicação, mas é totalmente suportável. A intensidade é ajustada para cada paciente, garantindo que o tratamento seja eficaz sem causar dor excessiva."
    },
    {
      question: "Quantas sessões são necessárias?",
      answer: "A maioria dos casos responde bem com 3 a 5 sessões, realizadas com intervalo semanal. O número exato depende da gravidade e cronicidade da lesão, o que será avaliado na sua primeira consulta."
    },
    {
      question: "O convênio cobre o tratamento?",
      answer: "A Terapia por Ondas de Choque é um procedimento particular, pois utiliza tecnologia de ponta não coberta pela maioria dos planos. No entanto, oferecemos condições facilitadas de pagamento. Consulte nossa equipe para mais detalhes."
    },
    {
      question: "Qual a diferença do 'choquinho' da fisioterapia?",
      answer: "São tecnologias completamente diferentes. O 'choquinho' (TENS) é um estímulo elétrico superficial para alívio temporário da dor. As ondas de choque são ondas acústicas de alta energia que penetram profundamente nos tecidos, promovendo a regeneração real e a cura da lesão."
    },
    {
      question: "Já na primeira consulta eu sei se o tratamento é para mim?",
      answer: "Sim. Nossa avaliação inicial é completa e detalhada. O fisioterapeuta especialista irá diagnosticar seu caso, analisar seus exames e indicar se a Terapia por Ondas de Choque é a melhor opção para você."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Dúvidas</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Perguntas Frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-xl px-6 shadow-sm">
              <AccordionTrigger className="text-left font-bold text-gray-800 hover:text-primary py-6 text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
