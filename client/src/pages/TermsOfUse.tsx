import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function TermsOfUse() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/dorcronica-cambe-arapongas">
                            <img
                                src="/assets/images/logo-instituto.png"
                                alt="ITC Vertebral + Instituto Trata"
                                className="h-12 md:h-14 cursor-pointer"
                            />
                        </Link>
                        <span className="text-sm md:text-base text-gray-600 font-medium border-l-2 border-gray-300 pl-4 hidden sm:block">
                            Fisioterapia Especializada
                        </span>
                    </div>
                    <Link href="/dorcronica-cambe-arapongas">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                            Voltar para o Início
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Termos de Uso</h1>

                <div className="prose prose-lg max-w-none text-gray-300">
                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Termos</h2>
                    <p className="mb-4">
                        Ao acessar ao site Fisioterapia Especializada, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Uso de Licença</h2>
                    <p className="mb-4">
                        É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Fisioterapia Especializada , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>modificar ou copiar os materiais;</li>
                        <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                        <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Fisioterapia Especializada;</li>
                        <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                        <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Isenção de responsabilidade</h2>
                    <p className="mb-4">
                        Os materiais no site da Fisioterapia Especializada são fornecidos 'como estão'. Fisioterapia Especializada não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Limitações</h2>
                    <p className="mb-4">
                        Em nenhum caso o Fisioterapia Especializada ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Fisioterapia Especializada, mesmo que Fisioterapia Especializada ou um representante autorizado da Fisioterapia Especializada tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Precisão dos materiais</h2>
                    <p className="mb-4">
                        Os materiais exibidos no site da Fisioterapia Especializada podem incluir erros técnicos, tipográficos ou fotográficos. Fisioterapia Especializada não garante que qualquer material em seu site seja preciso, completo ou atual. Fisioterapia Especializada pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Links</h2>
                    <p className="mb-4">
                        O Fisioterapia Especializada não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Fisioterapia Especializada do site. O uso de qualquer site vinculado é por conta e risco do usuário.
                    </p>

                    <p className="text-sm text-gray-500 mt-12 border-t border-gray-800 pt-8">
                        Estes termos são efetivos a partir de <strong>Fevereiro/2026</strong>.
                    </p>
                </div>
            </main>

            <footer className="bg-black py-8 border-t border-gray-800 mt-12">
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Fisioterapia Especializada - Cambé e Arapongas. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
