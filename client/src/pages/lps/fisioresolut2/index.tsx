import { Helmet } from "react-helmet";

const Fisioresolut2LP = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Helmet>
        <title>Clínica Fisioresolut — Fisioterapia na Vila Leopoldina, SP</title>
        <meta 
          name="description" 
          content="Clínica de Fisioterapia na Vila Leopoldina, São Paulo. Tratamento para coluna, joelho, quadril, pé, tornozelo, ombro, cotovelo e mão." 
        />
      </Helmet>
      <iframe
        src="/site.html"
        title="Clínica FisioResolut"
        className="w-full h-full border-none m-0 p-0"
        style={{ position: "fixed", inset: 0, width: '100vw', height: '100vh' }}
      />
    </div>
  );
};

export default Fisioresolut2LP;