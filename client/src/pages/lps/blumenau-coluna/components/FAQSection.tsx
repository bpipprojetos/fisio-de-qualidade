import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Vocês atendem por plano?",
    answer: "Nosso tratamento é particular e aqueles que possuem plano de saúde, oferecemos condições para iniciarmos o tratamento.",
  },
  {
    question: "Preciso de exame de imagem para agendar consulta?",
    answer: "Não é necessário exame para realizar a consulta.",
  },
  {
    question: "Quanto tempo de tratamento?",
    answer: "Depende da sua condição física e o nível do seu problema. Os tratamentos variam entre 1 mês à 4 meses.",
  },
  {
    question: "Estou em crise posso realizar consulta?",
    answer: "Sim, desta forma o especialista já consegue lhe ajudar neste momento e agir imediatamente no problema.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-10">
          Dúvidas Frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
