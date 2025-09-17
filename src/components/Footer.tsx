import { 
  MessageCircle, 
  Linkedin, 
  Instagram,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import logo from "../assets/LogoAzul-Photoroom.png";

const Footer = () => {
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
    <footer className="bg-secondary text-primary-foreground py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,127,50,0.1)_50%,transparent_65%)] bg-[length:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src={logo} alt="" className="h-12"/>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Tu socio confiable en logística internacional. Conectamos tu mundo con eficiencia, 
              confiabilidad e innovación desde hace más de una década.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Av. Corrientes 1234, CABA, Buenos Aires
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  +54 11 1234-5678
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  info@coarlogistic.com
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-bold text-primary-foreground mb-4 text-lg">Servicios</h5>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>Transporte Marítimo</li>
              <li>Transporte Aéreo</li>
              <li>Courier Internacional</li>
              <li>Logística Integral</li>
              <li>Asesoría Personalizada</li>
            </ul>
          </div>

          {/* Company Values */}
          <div>
            <h5 className="font-bold text-primary-foreground mb-4 text-lg">Valores</h5>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>Eficiencia</li>
              <li>Confiabilidad</li>
              <li>Innovación</li>
              <li>Transparencia</li>
              <li>Sostenibilidad</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-foreground/80">Seguinos:</span>
              
              <button
                onClick={handleLinkedIn}
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </button>
              
              <button
                onClick={handleInstagram}
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </button>
              
              <button
                onClick={handleWhatsApp}
                className="w-10 h-10 bg-[#25D366] hover:bg-[#1DA851] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Copyright */}
            <div className="text-sm text-primary-foreground/60 text-center md:text-right">
              <p>&copy; 2024 COAR LOGISTIC. Todos los derechos reservados.</p>
              <p className="mt-1">Diseñado para conectar tu mundo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-32 bg-gradient-to-r from-primary/10 to-transparent blur-3xl" />
      <div className="absolute top-0 right-0 w-64 h-24 bg-gradient-to-l from-primary/10 to-transparent blur-2xl" />
    </footer>
  );
};

export default Footer;