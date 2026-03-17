const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-muted">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="font-bold text-foreground mb-2">Local de Atendimento</h4>
          <p className="text-muted-foreground text-sm">
            Ed Ibiza – R. Dr. Léo de Carvalho, 74 – sala 401 – Velha, Blumenau – SC, 89036-239{" "}
            <em>(atrás do Parque Ramiro)</em>
          </p>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-2">Horário de Funcionamento</h4>
          <p className="text-muted-foreground text-sm">
            De segunda à sexta das 7h30 às 21h <em>(recepção até 18h)</em>
          </p>
        </div>
      </div>
      <div className="text-center text-sm text-muted-foreground border-t border-border pt-6 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <span>ITC Vertebral Blumenau | Todos direitos reservados.</span>
          <div className="flex gap-4 items-center justify-center">
            <a href="/politica-privacidade" className="hover:underline">Política de Privacidade</a>
            <a href="/termos-uso" className="hover:underline">Termos de Uso</a>
          </div>
        </div>
        <div className="text-xs text-muted-foreground/60 flex flex-col md:flex-row justify-center gap-2 md:gap-4">
          <span>RAZÂO SOCIAL: OJOELHO FISIOTERAPIA ESPECIALIZADA LTDA</span>
          <span>CNPJ: 20.308.866/0001-71</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
