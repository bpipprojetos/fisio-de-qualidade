import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background">
      <div className="flex-1 flex items-center justify-center w-full">
        <Card className="w-full max-w-lg mx-4 shadow-xl border-border/10 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
                <AlertCircle className="relative h-16 w-16 text-primary" />
              </div>
            </div>

            <h1 className="text-4xl font-bold text-white mb-2 font-sans tracking-tight">404</h1>

            <h2 className="text-xl font-semibold text-slate-300 mb-4">
              Página Não Encontrada
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
              O conteúdo que você está procurando não está disponível ou foi movido.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <footer className="w-full py-8 border-t border-border/10 bg-background/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-xs flex flex-col gap-4">
          <p>© {new Date().getFullYear()} OJOELHO FISIOTERAPIA ESPECIALIZADA LTDA. Todos os direitos reservados.</p>
          <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 opacity-50">
            <span>RAZÂO SOCIAL: OJOELHO FISIOTERAPIA ESPECIALIZADA LTDA</span>
            <span>CNPJ: 20.308.866/0001-71</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
