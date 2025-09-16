import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Linkedin,
  Instagram
} from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/+1234567890?text=Hola, quiero información sobre sus servicios", "_blank");
  };

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/company/coar-logistic", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/coar.logistic", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary via-secondary to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,127,50,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,127,50,0.2),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-brand text-primary-foreground mb-4">
            Conectate con Nosotros
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Estamos aquí para ayudarte con todas tus necesidades logísticas. Contactanos hoy mismo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-diagonal">
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <h3 className="text-2xl font-bold font-brand text-primary-foreground mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground mb-1">Oficina Principal</h4>
                    <p className="text-primary-foreground/70">
                      Av. Corrientes 1234, CABA<br />
                      Buenos Aires, Argentina
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground mb-1">Teléfono</h4>
                    <p className="text-primary-foreground/70">+54 11 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground mb-1">Email</h4>
                    <p className="text-primary-foreground/70">info@coarlogistic.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground mb-1">Horarios</h4>
                    <p className="text-primary-foreground/70">
                      Lunes a Viernes: 9:00 - 18:00<br />
                      Sábados: 9:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA and Social Media */}
          <div className="space-y-8 animate-slide-diagonal delay-200">
            {/* WhatsApp CTA */}
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 text-center">
              <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow animate-float">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold font-brand text-primary-foreground mb-4">
                ¡Hablemos por WhatsApp!
              </h3>
              
              <p className="text-primary-foreground/70 mb-6">
                La forma más rápida de obtener información sobre nuestros servicios y recibir una cotización personalizada.
              </p>
              
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={handleWhatsApp}
                className="gap-2 font-bold"
              >
                <MessageCircle className="w-5 h-5" />
                Iniciar Conversación
              </Button>
            </div>

            {/* Social Media */}
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 text-center">
              <h3 className="text-2xl font-bold font-brand text-primary-foreground mb-6">
                Seguinos en Redes
              </h3>
              
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleLinkedIn}
                  className="border-primary-foreground text-primary-foreground hover:bg-primary hover:border-primary"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleInstagram}
                  className="border-primary-foreground text-primary-foreground hover:bg-primary hover:border-primary"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Global Network Mockup */}
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <h3 className="text-xl font-bold font-brand text-primary-foreground mb-4 text-center">
                Red Global COAR
              </h3>
              <div className="relative h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-primary-foreground/50 text-sm">
                    Conectando el mundo a través de la logística
                  </div>
                </div>
                {/* Animated Connection Points */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse" />
                <div className="absolute top-8 right-6 w-2 h-2 bg-primary rounded-full animate-pulse delay-500" />
                <div className="absolute bottom-6 left-8 w-2 h-2 bg-primary rounded-full animate-pulse delay-1000" />
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full animate-pulse delay-1500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary-foreground/10 rounded-full animate-float blur-2xl" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/20 rounded-full animate-float delay-1000 blur-xl" />
    </section>
  );
};

export default Contact;