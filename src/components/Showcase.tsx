import { motion } from "framer-motion";
import brandingAsset from "@/assets/branding-strategic-asset.jpg";

const Showcase = () => {
  return (
    <section id="showcase" className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-body text-accent font-medium tracking-widest uppercase mb-4">
            Brand Narratives
          </p>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl">
            Where art meets
            <br />
            strategy.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 rounded-xl overflow-hidden"
          >
            <img
              src={brandingAsset}
              alt="Branding is a Strategic Asset"
              loading="lazy"
              width={800}
              height={400}
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3 bg-primary text-primary-foreground rounded-xl p-8 md:p-10 flex flex-col justify-center"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Bold ideas.
              <br />
              Bolder execution.
            </h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Every brand starts with a question: How do we move beyond the noise?
              I bridge the gap by decoding the "Why" behind the "What" to build
              narratives that don't just demand attention, but command respect.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
