import { Button } from "@/components/ui/button";
import { ExternalLink, DollarSign, Anchor } from "lucide-react";

const ConversionPorts = () => {
  const handleExchangeRate = () => {
    window.open("https://www.xe.com/", "_blank");
  };

  const handlePortsInfo = () => {
    window.open("https://www.worldportsource.com/", "_blank");
  };

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 to-transparent transform -skew-y-3" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-primary/20 to-transparent transform skew-y-3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-brand text-primary-foreground mb-4">
            Herramientas Útiles
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Accede a información actualizada sobre tipos de cambio y puertos internacionales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Exchange Rate Card */}
          <div className="group bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-diagonal">
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-full flex items-center justify-center shadow-glow group-hover:shadow-elegant transition-all duration-300 animate-float">
                  <DollarSign className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold font-brand text-primary-foreground mb-4">
                Tipo de Cambio
              </h3>
              
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                Consulta las cotizaciones actualizadas en tiempo real para planificar tus envíos internacionales
              </p>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleExchangeRate}
                className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary font-semibold"
              >
                <ExternalLink className="w-5 h-5" />
                Ver Cotizaciones
              </Button>
            </div>
          </div>

          {/* Ports Information Card */}
          <div className="group bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-diagonal delay-200">
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-full flex items-center justify-center shadow-glow group-hover:shadow-elegant transition-all duration-300 animate-float">
                  <Anchor className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold font-brand text-primary-foreground mb-4">
                Información de Puertos
              </h3>
              
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Accede fácilmente a la información oficial completa de puertos internacionales y sus operaciones.              </p>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={handlePortsInfo}
                className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary font-semibold"
              >
                <ExternalLink className="w-5 h-5" />
                Ver Puertos
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full animate-float blur-xl" />
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-primary-foreground/20 rounded-full animate-float delay-1000 blur-xl" />
    </section>
  );
};

export default ConversionPorts;