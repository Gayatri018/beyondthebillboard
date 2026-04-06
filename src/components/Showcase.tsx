import { motion } from "framer-motion";
import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";

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
            Creative Vision
          </p>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl">
            Where art meets
            <br />
            strategy.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 rounded-xl overflow-hidden"
          >
            <img
              src={showcase1}
              alt="Creative showcase poster"
              loading="lazy"
              width={800}
              height={1000}
              className="w-full h-auto object-cover rounded-xl"
            />
          </motion.div>

          <div className="md:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src={showcase2}
                alt="Abstract creative composition"
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-auto object-cover rounded-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-primary text-primary-foreground rounded-xl p-8 md:p-10"
            >
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Bold ideas.
                <br />
                Bolder execution.
              </h3>
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                Every project starts with a question: how do we make this
                unforgettable? We push boundaries, challenge norms, and deliver
                work that demands attention.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
