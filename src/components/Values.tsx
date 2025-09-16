import { 
  Zap, 
  Shield, 
  Lightbulb, 
  Heart, 
  Users, 
  Eye,
  Target 
} from "lucide-react";

const values = [
  {
    title: "Eficiencia",
    description: "Procesos rápidos y optimizados para garantizar entregas puntuales",
    icon: Zap,
  },
  {
    title: "Confiabilidad",
    description: "Una marca en la que los clientes pueden confiar, cumpliendo siempre con los plazos",
    icon: Shield,
  },
  {
    title: "Innovación",
    description: "Adoptamos tecnologías de vanguardia para mejorar nuestros servicios logísticos",
    icon: Lightbulb,
  },
  {
    title: "Sostenibilidad",
    description: "Implementamos prácticas responsables con el medio ambiente",
    icon: Heart,
  },
  {
    title: "Orientación al Cliente",
    description: "Brindamos un servicio personalizado, adaptado a las necesidades específicas",
    icon: Users,
  },
  {
    title: "Transparencia",
    description: "Comunicamos de manera clara y abierta en todo momento",
    icon: Eye,
  },
  {
    title: "Compromiso",
    description: "Estamos comprometidos con la calidad y la mejora continua en nuestros servicios",
    icon: Target,
  }
];

const Values = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-brand text-secondary mb-4">
            Nuestros Valores
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Los principios que guían cada decisión y definen la calidad de nuestro servicio
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            
            return (
              <div
                key={index}
                className="group relative p-6 bg-card border border-border rounded-xl hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-300 animate-float">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold font-brand text-secondary mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up delay-1000">
          <div className="inline-block bg-gradient-diagonal rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold font-brand text-secondary mb-4">
              ¿Listo para experimentar la diferencia?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Descubrí cómo nuestros valores se traducen en un servicio excepcional para vos
            </p>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
};

export default Values;