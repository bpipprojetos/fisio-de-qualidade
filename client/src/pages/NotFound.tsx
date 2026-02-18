import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
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
  );
}
