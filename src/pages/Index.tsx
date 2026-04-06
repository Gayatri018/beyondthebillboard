import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <Showcase />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
