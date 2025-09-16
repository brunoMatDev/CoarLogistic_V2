import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/+1234567890?text=Hola, quiero información sobre sus servicios de courier", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-secondary/60 to-primary/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-brand text-primary-foreground mb-2">
            COAR
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-brand text-primary-foreground/90">
            LOGISTIC
          </h2>
        </div>

        {/* Eslogan */}
        <div className="mb-12 animate-fade-in-up delay-200">
          <h3 className="text-xl md:text-3xl lg:text-4xl font-brand text-primary-foreground mb-4">
            ¿Querés traer algo de EEUU?
          </h3>
          <h4 className="text-lg md:text-2xl lg:text-3xl font-brand text-primary font-bold">
            Te lo traemos
          </h4>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up delay-400">
          <Button 
            variant="whatsapp" 
            size="xl"
            onClick={handleWhatsApp}
            className="gap-3 font-bold"
          >
            <MessageCircle className="w-6 h-6" />
            Contactar por WhatsApp
          </Button>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary-foreground/20 rounded-full animate-float delay-1000" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;