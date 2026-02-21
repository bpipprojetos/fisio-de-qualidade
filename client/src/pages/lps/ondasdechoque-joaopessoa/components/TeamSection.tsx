import { Check } from "lucide-react";

export function TeamSection() {
  const team = [
    {
      name: "Angélica Lins",
      image: "/assets/images/angelica-lins.webp",
      role: "Fundadora e CEO da clínica Unit",
      credentials: [
        "Especialista em dor",
        "Especialista em disfunções Biomecânicas e Neuromusculares",
        "Análise cinemática em 2D"
      ]
    },
    {
      name: "Lívia Ventura",
      image: "/assets/images/livia-ventura.webp",
      role: "Mestra em Ciências da Reabilitação",
      credentials: [
        "Especialista em traumato-ortopedia",
        "Especialista em Esportiva",
        "Quiropraxista"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Especialistas</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nosso Time
          </h2>
          <p className="text-gray-600 text-lg">
            Conheça as profissionais que vão cuidar da sua recuperação com excelência e dedicação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="group bg-[#2F4F4F] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="relative h-96 overflow-hidden">
                <img loading="lazy" 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#2F4F4F] to-transparent h-32"></div>
                <h3 className="absolute bottom-6 left-6 text-white font-display text-3xl font-bold z-10">
                  {member.name}
                </h3>
              </div>
              
              <div className="p-8 flex-1 flex flex-col text-white">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white stroke-[3]" />
                    </div>
                    <span className="text-base font-medium leading-relaxed">{member.role}</span>
                  </li>
                  {member.credentials.map((credential, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white stroke-[3]" />
                      </div>
                      <span className="text-base font-medium leading-relaxed opacity-90">{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
