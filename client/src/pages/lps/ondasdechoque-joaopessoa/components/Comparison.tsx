import { Check, X } from "lucide-react";

export function Comparison() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Diferenciais</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A sua saúde em mãos de <span className="text-primary">especialistas</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Somos parte da maior rede de fisioterapia do Brasil, com mais de 80 mil pacientes tratados com sucesso.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            
            {/* TRATA Column */}
            <div className="p-8 md:p-10 bg-gray-50">
              <div className="flex items-center gap-3 mb-8">
                <img loading="lazy" 
                  src="/assets/images/trata-logo.png" 
                  alt="Instituto TRATA" 
                  className="h-8"
                />
                <span className="font-bold text-gray-900">João Pessoa</span>
              </div>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-600 stroke-[3]" />
                  </div>
                  <span className="font-bold text-gray-800">Especialistas em Membros Inferiores</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-600 stroke-[3]" />
                  </div>
                  <span className="font-bold text-gray-800">Protocolo Baseado em Evidência</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-600 stroke-[3]" />
                  </div>
                  <span className="font-bold text-gray-800">Tecnologia de Ponta (TOC)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-600 stroke-[3]" />
                  </div>
                  <span className="font-bold text-gray-800">Atendimento individualizado e personalizado</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-600 stroke-[3]" />
                  </div>
                  <span className="font-bold text-gray-800">Foco na Causa da Lesão</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-600 stroke-[3]" />
                  </div>
                  <span className="font-bold text-gray-800">Atendimentos de 50min a 1 hora</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-600 stroke-[3]" />
                  </div>
                  <span className="font-bold text-gray-800">Melhores equipamentos do mercado</span>
                </li>
              </ul>
            </div>

            {/* Others Column */}
            <div className="p-8 md:p-10 bg-white border-t md:border-t-0 md:border-l border-gray-100">
              <div className="h-8 flex items-center mb-8">
                <span className="font-bold text-gray-400 text-lg">Clínicas Convencionais</span>
              </div>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-3 opacity-60">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-400 stroke-[3]" />
                  </div>
                  <span className="text-gray-600">Generalistas</span>
                </li>
                <li className="flex items-start gap-3 opacity-60">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-400 stroke-[3]" />
                  </div>
                  <span className="text-gray-600">Tratamentos genéricos</span>
                </li>
                <li className="flex items-start gap-3 opacity-60">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-400 stroke-[3]" />
                  </div>
                  <span className="text-gray-600">Recursos limitados</span>
                </li>
                <li className="flex items-start gap-3 opacity-60">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-400 stroke-[3]" />
                  </div>
                  <span className="text-gray-600">Vários pacientes ao mesmo tempo</span>
                </li>
                <li className="flex items-start gap-3 opacity-60">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-400 stroke-[3]" />
                  </div>
                  <span className="text-gray-600">Foco apenas no alívio do sintoma</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
