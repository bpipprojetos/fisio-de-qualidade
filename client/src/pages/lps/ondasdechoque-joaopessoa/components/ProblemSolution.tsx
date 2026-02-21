import { Activity, Ban, HeartPulse } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img loading="lazy" 
                src="/assets/images/paciente_local_v2.jpg" 
                alt="Paciente recuperado e feliz" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-xl mb-1">Recupere sua liberdade</p>
                  <p className="text-gray-200 text-sm">Volte a fazer o que você ama sem dor</p>
                </div>
              </div>
            </div>
            
            {/* Decorative pattern */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-gray-100 rounded-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-red-50 rounded-full blur-3xl"></div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">O Problema</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Você já tentou de tudo e a <span className="text-primary">dor persiste?</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Analgésicos, repouso, fisioterapia convencional... Se você já passou por tudo isso e a dor no joelho, quadril ou pé continua limitando seus movimentos, você não está sozinho. Muitas dores crônicas não respondem aos tratamentos tradicionais porque a verdadeira causa da lesão não foi tratada.
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative">
              <div className="absolute -top-6 left-8 bg-primary text-white p-3 rounded-xl shadow-lg">
                <HeartPulse className="w-6 h-6" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-gray-900 mb-4 mt-2">
                A Solução Definitiva
              </h3>
              <p className="text-gray-600 mb-6">
                A <strong>Terapia por Ondas de Choque (TOC)</strong> é uma revolução no tratamento de lesões musculoesqueléticas. Aprovada pela ANVISA e FDA, essa tecnologia atua diretamente na origem da dor.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <Activity className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Promove regeneração dos tecidos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <Activity className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Acelera a cicatrização</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <Ban className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Tratamento não invasivo (sem cortes)</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
