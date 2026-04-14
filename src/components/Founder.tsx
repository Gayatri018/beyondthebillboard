import { motion } from "framer-motion";
import founderImg from "@/assets/founder.png";

const Founder = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-body text-accent font-medium tracking-widest uppercase mb-4">
            Meet the Strategist
          </p>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl">
            The Mind Behind BTB
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={founderImg}
                alt="Bipasha Dey, Founder of Beyond The Billboard"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Bipasha Dey
            </h3>
            <p className="text-body text-base leading-relaxed">
              Bipasha Dey is the architect behind Beyond the Billboard, a strategic narrative practice born at the intersection of observation and storytelling. She bridges the precision of a journalist with the pulse of a poet, treating branding not as a series of slogans, but as a discipline of deep resonance. As a strategist, she decodes the hidden narratives that move modern Indian brands from simple commodities to cultural staples.
            </p>
            <p className="text-body text-base leading-relaxed">
              Currently a Master's candidate in Journalism and Mass Communication, Bipasha treats branding as a rigorous social science. Her approach is rooted in the high stakes of media ethics and audience psychology, focusing on how stories travel through a crowded market. By uncovering the "Why" behind the "What," she helps brands navigate the gap between being seen and being truly remembered.
            </p>
            <blockquote className="border-l-4 border-accent pl-6 py-2">
              <p className="text-body text-lg italic text-foreground/80">
                "A brand is not what we see on a billboard. It is the echo that remains in the market once the billboard is gone."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
