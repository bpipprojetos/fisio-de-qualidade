const Header = () => {
  return (
    <header className="hidden md:flex items-center justify-between px-8 py-4 bg-background">
      <div className="flex items-center gap-3 flex-shrink-0">
        <img loading="lazy" src="/assets/images/lps/blumenau-coluna/logo-itc.png" alt="ITC Vertebral" className="h-14" />
        <span className="text-xl font-bold text-foreground">Blumenau</span>
      </div>
      <nav className="flex items-center gap-8">
        <a href="#tto" className="text-foreground font-medium text-lg hover:text-primary transition-colors">
          Tratamento
        </a>
        <a href="#chao" className="text-foreground font-medium text-lg hover:text-primary transition-colors">
          Equipe
        </a>
        <a href="#depo" className="text-foreground font-medium text-lg hover:text-primary transition-colors">
          Depoimentos
        </a>
      </nav>
    </header>
  );
};

export default Header;
