import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";
import logo from "../assets/LogoAzul-Photoroom.png"

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/+1234567890?text=Hola, quiero información sobre sus servicios de courier", "_blank");
  };
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* Hero Background Image */}
       <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay con gradiente y capa extra negra para oscurecer más */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/80 to-primary/60" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-16 animate-fade-in-up">
          <img 
            src={logo} 
            alt="COAR LOGISTIC" 
            className="w-64 md:w-80 lg:w-96 mx-auto" 
          />
        </div>

        {/* Botón Contáctanos */}
        <div className="animate-fade-in-up delay-200">
          <Button 
            size="xl"
            onClick={handleContactClick}
            className="font-bold px-10 py-4"
          >
            Contáctanos
          </Button>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary-foreground/20 rounded-full animate-float delay-1000" />
      </div>


    </section>
  );
};

export default Hero;