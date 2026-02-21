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

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={NotFound} />
      <Route path={"/dorcronica-cambe-arapongas"} component={DorCronicaLP} />
      <Route path={"/ondasdechoque-joaopessoa"} component={OndasDeChoqueJoaoPessoa} />
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
