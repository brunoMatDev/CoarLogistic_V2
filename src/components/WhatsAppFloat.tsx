import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/+1234567890?text=¡Hola! Me interesa obtener más información sobre sus servicios de courier y transporte internacional.", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <Button
        variant="whatsapp"
        size="lg"
        onClick={handleWhatsApp}
        className="rounded-full w-16 h-16 p-0 shadow-glow hover:shadow-elegant hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
      
      {/* Floating tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 hover:opacity-100 pointer-events-none">
        <div className="bg-secondary text-primary-foreground text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-card">
          ¡Chateá con nosotros!
          <div className="absolute top-full right-4 border-4 border-transparent border-t-secondary"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;