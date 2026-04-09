import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logoYogabar from "@/assets/logo-yogabar.jpeg";
import logoCountrydelight from "@/assets/logo-countrydelight.png";
import logoPaperboat from "@/assets/logo-paperboat.jpeg";
import heroIllustration from "@/assets/hero-brand-illustration.jpg";

const projects = [
  { title: "Yoga Bar", category: "Clean Label Revolution", image: logoYogabar, slug: "yoga-bar" },
  { title: "Country Delight", category: "Purity-First Disruption", image: logoCountrydelight, slug: "country-delight" },
  { title: "Paper Boat", category: "Nostalgia Marketing", image: logoPaperboat, slug: "paper-boat" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* BRAND hero image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-xl overflow-hidden max-h-[300px]"
        >
          <img
            src={heroIllustration}
            alt="Brand Studies"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-body text-accent font-medium tracking-widest uppercase mb-4">
            Brand Studies
          </p>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Brand narratives.
          </h2>
          <p className="text-body text-lg max-w-2xl">
            Analyzing the strategic shifts and psychological triggers behind iconic growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/case-study/${project.slug}`}
                className="group relative rounded-xl overflow-hidden cursor-pointer bg-card block"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center p-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors duration-300 flex items-end">
                  <div className="p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 w-full flex items-end justify-between">
                    <div>
                      <p className="text-xs text-accent font-medium mb-1">{project.category}</p>
                      <h3 className="font-heading text-lg font-bold text-primary-foreground">{project.title}</h3>
                    </div>
                    <div className="bg-accent text-accent-foreground p-2 rounded-full flex items-center gap-1">
                      <span className="text-xs font-medium">View Case Study</span>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View More Brands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            to="/brand-studies"
            className="group inline-flex items-center gap-3 text-lg font-heading font-bold text-foreground hover:text-accent transition-colors"
          >
            View more brands
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={22} className="group-hover:text-accent transition-colors" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
