import { motion } from "framer-motion";
import { Palette, Layers, Megaphone, Film, Camera, Code } from "lucide-react";

const services = [
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive interfaces that delight users and drive conversions." },
  { icon: Layers, title: "Branding", desc: "Bold identities that cut through the noise and stick." },
  { icon: Megaphone, title: "Marketing", desc: "Strategic campaigns that amplify your voice and reach." },
  { icon: Film, title: "Motion Design", desc: "Dynamic visuals that bring your brand story to life." },
  { icon: Camera, title: "Photography", desc: "Striking imagery that captures your brand's essence." },
  { icon: Code, title: "Frontend Dev", desc: "Pixel-perfect code that turns designs into reality." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-body text-accent font-medium tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl">
            Services built for
            <br />
            ambitious brands.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-background border border-border rounded-xl p-8 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-secondary rounded-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <service.icon size={22} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-body text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
