import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  Linkedin,
  Instagram
} from "lucide-react";

const Contact = () => {
  // Estado para formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar el formulario (API, email, etc)
    alert(`Gracias por contactarnos, ${formData.name}!`);
    setFormData({ name: "", email: "", message: "" });
  };

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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start lg:items-center">
          {/* Columna izquierda: Formulario + Redes Sociales */}
          <div className="space-y-8 max-w-lg w-full mx-auto lg:mx-0">
          {/* Formulario clásico */}
            <form 
              onSubmit={handleSubmit} 
              className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20"
            >
              <h3 className="text-2xl font-bold font-brand text-primary-foreground mb-6">
                Envíanos un Mensaje
              </h3>

              <label className="block mb-4">
                <span className="text-primary-foreground font-semibold mb-1 block">Nombre</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-primary-foreground/30 bg-transparent px-4 py-2 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tu nombre"
                />
              </label>

              <label className="block mb-4">
                <span className="text-primary-foreground font-semibold mb-1 block">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-primary-foreground/30 bg-transparent px-4 py-2 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="tu@email.com"
                />
              </label>

              <label className="block mb-6">
                <span className="text-primary-foreground font-semibold mb-1 block">Mensaje</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-md border border-primary-foreground/30 bg-transparent px-4 py-2 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </label>

              <Button type="submit" size="lg" className="font-bold w-full">
                Enviar Mensaje
              </Button>
            </form>

            {/* Redes Sociales debajo del formulario */}
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
          </div>

          {/* Columna derecha: Información de contacto + WhatsApp CTA */}
          <div className="space-y-8 max-w-lg w-full mx-auto lg:mx-0">
          {/* Información de Contacto */}
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
                    <h4 className="font-semibold text-primary-foreground mb-1">Ubicación</h4>
                    <p className="text-primary-foreground/70">
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
              </div>
            </div>

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