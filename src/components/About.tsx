import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-body text-accent font-medium tracking-widest uppercase mb-4">
            About BTB
          </p>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Behind The Billboard
          </h2>
          <p className="text-accent font-heading text-xl font-medium">
            Beyond the Surface. Beyond the Noise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-body text-lg leading-relaxed">
            Most people see an advertisement as a 30-second interruption or a static image on a highway. We see it as a narrative shift. Beyond The Billboard was born from a simple observation: In an era of infinite scrolling, the brands that win aren't the ones with the loudest voices, but the ones with the deepest echoes.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 text-lg font-heading font-semibold text-foreground hover:text-accent transition-colors duration-300"
            >
              Read about us
              <motion.span
                className="inline-block"
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={22} />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
