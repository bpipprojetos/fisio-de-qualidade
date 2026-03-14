import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import DorCronicaLP from "./pages/lps/dor-cronica";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import OndasDeChoqueJoaoPessoa from "./pages/lps/ondasdechoque-joaopessoa";
import OndasDeChoqueSaoLourenco from "./pages/lps/ondasdechoque-saolourenco";
import QuedaIdososValinhos from "./pages/lps/quedaidosos-valinhos";
import BlumenauColunaLP from "./pages/lps/blumenau-coluna";
import NewmovLP from "./pages/lps/newmov";
import Fisioresolut01LP from "./pages/lps/fisioresolut01";
import Fisioresolut02LP from "./pages/lps/fisioresolut02";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={NotFound} />
      <Route path={"/dorcronica-cambe-arapongas"} component={DorCronicaLP} />
      <Route path={"/ondasdechoque-joaopessoa"} component={OndasDeChoqueJoaoPessoa} />
      <Route path={"/ondasdechoque-saolourenco"} component={OndasDeChoqueSaoLourenco} />
      <Route path={"/quedaidosos-valinhos"} component={QuedaIdososValinhos} />
      <Route path={"/blumenau-coluna"} component={BlumenauColunaLP} />
      <Route path={"/newmov"} component={NewmovLP} />
      <Route path={"/fisioresolut01"} component={Fisioresolut01LP} />
      <Route path={"/fisioresolut02"} component={Fisioresolut02LP} />
      <Route path={"/politica-privacidade"} component={PrivacyPolicy} />
      <Route path={"/termos-uso"} component={TermsOfUse} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
