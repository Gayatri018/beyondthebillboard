import { motion } from "framer-motion";

const clientNames = [
  "ACME Corp", "Zenith", "Nova Labs", "Prism Co", "Vertex",
  "Orion", "Pulse", "Forge", "Atlas", "Bloom",
];

const Clients = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-body text-accent font-medium tracking-widest uppercase mb-4">
            Trusted By
          </p>
          <h2 className="heading-display text-3xl md:text-4xl">
            Brands we've shaped.
          </h2>
        </motion.div>
      </div>

      {/* Scrolling marquee */}
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clientNames, ...clientNames].map((name, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-8 md:mx-12"
            >
              <span className="font-heading text-2xl md:text-3xl font-bold text-muted-foreground/30 hover:text-foreground transition-colors duration-300 cursor-default">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
