import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroIllustration from "@/assets/hero-brand-illustration.jpg";
import logoYogabar from "@/assets/logo-yogabar.jpeg";
import logoCountrydelight from "@/assets/logo-countrydelight.png";
import logoPaperboat from "@/assets/logo-paperboat.jpeg";
import logoChitale from "@/assets/logo-chitale.png";
import logoAmul from "@/assets/logo-amul.jpeg";
import logoMaggi from "@/assets/logo-maggi.png";

const projects = [
  { title: "Yoga Bar", category: "Clean Label Revolution", image: logoYogabar, slug: "yoga-bar" },
  { title: "Country Delight", category: "Purity-First Disruption", image: logoCountrydelight, slug: "country-delight" },
  { title: "Paper Boat", category: "Nostalgia Marketing", image: logoPaperboat, slug: "paper-boat" },
  { title: "Chitale Bandhu", category: "Precision Heritage", image: logoChitale, slug: "chitale-bandhu" },
  { title: "Amul", category: "Topical Marketing", image: logoAmul, slug: "amul" },
  { title: "Maggi", category: "Crisis & Comeback", image: logoMaggi, slug: "maggi" },
];

const BrandStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero banner with BRAND illustration */}
      <section className="pt-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden max-h-[350px] mb-12"
          >
            <img
              src={heroIllustration}
              alt="Brand Studies"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <Link
              to="/#portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
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
        </div>
      </section>

      {/* All 6 brands grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandStudies;
