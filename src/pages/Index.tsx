import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ConversionPorts from "@/components/ConversionPorts";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen font-brand">
      <Hero />
      <Services />
      <ConversionPorts />
      <Values />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
