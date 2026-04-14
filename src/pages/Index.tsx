import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import Founder from "@/components/Founder";
import BlogSection from "@/components/BlogSection";
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
      <About />
      <Founder />
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
