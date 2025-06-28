
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Redirect to the portfolio */}
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Portfólio João Silva</h1>
          <p className="text-xl text-muted-foreground mb-6">Cientista de Dados</p>
          <a 
            href="/index.html" 
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Ver Portfólio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
