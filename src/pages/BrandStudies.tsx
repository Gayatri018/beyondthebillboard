import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/components/Portfolio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BrandStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Link
              to="/#portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <p className="text-sm font-body text-accent font-medium tracking-widest uppercase mb-4">
              All Brand Studies
            </p>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-4">
              Brand narratives.
            </h1>
            <p className="text-body text-lg max-w-2xl">
              Analyzing the strategic shifts and psychological triggers behind iconic growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/case-study/${project.slug}`}
                  className="group relative rounded-xl overflow-hidden cursor-pointer bg-card block border border-border"
                >
                  <div className="aspect-[4/3] overflow-hidden flex items-center justify-center bg-white p-6">
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BrandStudies;
