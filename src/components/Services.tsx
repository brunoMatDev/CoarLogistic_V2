import { Card } from "@/components/ui/card";
import iconMaritime from "@/assets/icon-maritime.png";
import iconAir from "@/assets/icon-air.png";
import iconCourier from "@/assets/icon-courier.png";
import { FaShip, FaPlane, FaUser } from "react-icons/fa";


const services = [
  {
    title: "Transporte Marítimo",
    description: "Envíos internacionales por vía marítima con la mayor eficiencia y seguridad. Ideal para cargas grandes y económicas.",
    icon: FaShip,
    features: ["Carga completa", "Seguridad garantizada", "Tracking 24/7", "Tarifas competitivas"]
  },
  {
    title: "Transporte Aéreo",
    description: "La velocidad que necesás para tus envíos urgentes. Conectamos continentes en horas, no en semanas.",
    icon: FaPlane,
    features: ["Envío express", "Entrega rápida", "Carga aérea", "Servicio premium"]
  },
  {
    title: "Courier Internacional",
    description: "Servicio de courier personalizado y rápido desde EEUU. Traemos lo que necesités con total confiabilidad.",
    icon: FaUser,
    features: ["Compras personales", "Consolidación", "Asesoría completa", "Puerta a puerta"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-diagonal relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-brand text-secondary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones logísticas integrales que conectan tu mundo con eficiencia, confiabilidad e innovación.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-diagonal"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Diagonal Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 transform -skew-y-2 scale-110 group-hover:scale-125 transition-transform duration-500" />

              <div className="relative p-8 text-center">
                {/* Service Icon */}
                <div className="mb-6 relative">
                  <div className="w-20 h-20 mx-auto rounded-full p-4 shadow-elegant group-hover:shadow-glow transition-all flex items-center justify-center bg-[hsl(var(--primary))]">
                    <service.icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold font-brand text-secondary mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
};

export default Services;