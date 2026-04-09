import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 md:pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Link
              to="/#about"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-sm font-body text-accent font-medium tracking-widest uppercase mb-4">
              About BTB
            </p>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-4">
              Behind The Billboard
            </h1>
            <p className="text-accent font-heading text-xl font-medium">
              Beyond the Surface. Beyond the Noise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-body text-lg leading-relaxed">
              Most people see an advertisement as a 30-second interruption or a static image on a highway. We see it as a narrative shift. Beyond The Billboard was born from a simple observation: In an era of infinite scrolling, the brands that win aren't the ones with the loudest voices, but the ones with the deepest echoes.
            </p>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Who We Are</h3>
              <p className="text-body text-base leading-relaxed">
                An integration of research, storytelling, and brand architecture. Led by a Master's scholar in Journalism and Mass Communication, the foundation is built on the intersection of media ethics, audience psychology, and creative prose. We don't just "write content", we decode the "Why" behind the "What." With a background in professional content writing and a heartbeat for literature, we bring a unique hybrid approach: the precision of a journalist and the pulse of a poet.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Philosophy: The Emotional ROI</h3>
              <p className="text-body text-base leading-relaxed">
                We believe every successful brand follows a definitive arc: Function → Resonance → Loyalty. Our mission is to document this shift through Brand Studies, tracking how narrative-driven advertising directly impacts a brand's revenue and perception. By peeling back the layers of branding, we uncover the blueprints for growth, the copywriting nuances, and strategic pivots that transform a startup into a household brand.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Why "BTB"?</h3>
              <p className="text-body text-base leading-relaxed">
                Because Beyond The Billboard is just the beginning. The real magic happens in the conversation that follows. It happens when a brand stops being a product and starts being a part of a consumer's identity. Join us as we explore the architects, the voices, and the vibrant stories that define the brand landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
