import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function PrivacyPolicy() {
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
              Voltar para a Página Principal
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Política de Privacidade</h1>

        <div className="prose prose-lg max-w-none text-gray-300">
          <p className="mb-6">
            A sua privacidade é importante para nós. É política do Instituto Trata e ITC Vertebral (Unidades Cambé e Arapongas) respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Fisioterapia Especializada, e outros sites que possuímos e operamos.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Informações que coletamos</h2>
          <p className="mb-4">
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
          <p className="mb-4">
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Compartilhamento de dados</h2>
          <p className="mb-4">
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Cookies</h2>
          <p className="mb-4">
            O nosso site usa cookies para melhorar a experiência do usuário. Ao continuar navegando, você concorda com o uso de cookies. Você pode desativar os cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Links para sites externos</h2>
          <p className="mb-4">
            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Compromisso do Usuário</h2>
          <p className="mb-4">
            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Fisioterapia Especializada oferece no site e com caráter enunciativo, mas não limitativo:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
            <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
            <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Fisioterapia Especializada, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Mais informações</h2>
          <p className="mb-6">
            Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
          </p>

          <p className="text-sm text-gray-500 mt-12 border-t border-gray-800 pt-8">
            Esta política é efetiva a partir de <strong>Fevereiro/2026</strong>.
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
