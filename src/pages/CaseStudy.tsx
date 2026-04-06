import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const caseStudies: Record<string, {
  title: string;
  category: string;
  image: string;
  overview: string;
  problem: string;
  process: string;
  solution: string;
  results: string[];
  visuals: string[];
}> = {
  "luminary-brand": {
    title: "Luminary Brand",
    category: "Branding",
    image: portfolio1,
    overview: "A complete brand identity overhaul for Luminary, a premium lifestyle brand targeting modern urban professionals seeking authenticity.",
    problem: "Luminary's existing identity felt outdated and failed to connect with their evolving audience. They needed a brand that felt premium yet approachable.",
    process: "We conducted extensive market research, competitor analysis, and stakeholder interviews. Through iterative workshops, we distilled the brand's core values into a visual language.",
    solution: "A refined, minimal identity system featuring a custom wordmark, a warm earthy palette, and a flexible design system that scales across digital and print.",
    results: ["45% increase in brand recognition", "3x social media engagement", "200% growth in direct-to-consumer sales"],
    visuals: [portfolio1, portfolio2],
  },
  "classe-identity": {
    title: "Classé Identity",
    category: "Brand Identity",
    image: portfolio2,
    overview: "Crafting an elevated identity for Classé, a luxury fashion house entering the North American market with a focus on timeless elegance.",
    problem: "Classé needed a brand identity that communicated luxury without pretension, bridging European heritage with modern North American sensibilities.",
    process: "Deep dives into luxury market positioning, typography studies, and material explorations led to a refined aesthetic rooted in restraint and quality.",
    solution: "A monochromatic identity system with bespoke serif typography, premium packaging, and a cohesive digital presence across all touchpoints.",
    results: ["Successful launch in 12 flagship stores", "Featured in Vogue and GQ", "92% positive brand perception score"],
    visuals: [portfolio2, portfolio3],
  },
  "minimal-packaging": {
    title: "Minimal Packaging",
    category: "Packaging Design",
    image: portfolio3,
    overview: "Sustainable, minimal packaging design for an eco-conscious skincare line committed to reducing environmental impact without compromising aesthetics.",
    problem: "The client needed packaging that reflected their sustainability values while standing out on shelves against established luxury competitors.",
    process: "We explored biodegradable materials, minimal ink processes, and structural designs that reduced waste by 60% compared to industry standards.",
    solution: "Clean, tactile packaging using recycled kraft and soy-based inks, with embossed details replacing printed graphics for a premium feel.",
    results: ["60% reduction in packaging waste", "Won Dieline Awards 2024", "30% increase in retail placement"],
    visuals: [portfolio3, portfolio4],
  },
  "app-interfaces": {
    title: "App Interfaces",
    category: "UI/UX Design",
    image: portfolio4,
    overview: "A complete UI/UX redesign for a fintech app serving over 2 million users, focused on simplifying complex financial workflows.",
    problem: "Users struggled with the app's complex navigation and dense information architecture, resulting in high drop-off rates during onboarding.",
    process: "User research, journey mapping, and rapid prototyping informed a ground-up redesign focused on progressive disclosure and intuitive navigation.",
    solution: "A clean, card-based interface with contextual guidance, streamlined onboarding, and a personalized dashboard that surfaces relevant actions.",
    results: ["70% reduction in onboarding drop-off", "4.8★ App Store rating", "50% increase in daily active users"],
    visuals: [portfolio4, portfolio5],
  },
  "editorial-spread": {
    title: "Editorial Spread",
    category: "Print Design",
    image: portfolio5,
    overview: "Art direction and layout design for a quarterly arts and culture publication exploring the intersection of design, technology, and human experience.",
    problem: "The publication needed a visual refresh that honored its editorial heritage while appealing to a younger, digitally-native readership.",
    process: "Typographic explorations, grid system development, and photo art direction created a framework that balanced tradition with contemporary energy.",
    solution: "A bold editorial system using dramatic scale contrasts, experimental typography, and curated photography that tells stories at a glance.",
    results: ["35% increase in newsstand sales", "Shortlisted for SPD Awards", "Expanded to 3 new international markets"],
    visuals: [portfolio5, portfolio6],
  },
  "motion-reel": {
    title: "Motion Reel",
    category: "Motion Graphics",
    image: portfolio6,
    overview: "A dynamic motion identity system for a tech conference, creating cohesive animated content across screens, social media, and live event visuals.",
    problem: "The conference lacked visual cohesion across its many touchpoints, from keynote slides to social teasers to venue signage.",
    process: "We developed a modular motion toolkit based on geometric transformations and a vibrant, evolving color system tied to the event's themes.",
    solution: "A complete motion identity including animated logos, transition packages, lower thirds, social templates, and real-time generative visuals for the main stage.",
    results: ["2M+ social impressions during event", "98% attendee satisfaction", "Adopted as permanent brand motion system"],
    visuals: [portfolio6, portfolio1],
  },
};

const CaseStudy = () => {
  const { slug } = useParams();
  const study = slug ? caseStudies[slug] : null;

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="heading-display text-4xl mb-4">Project not found</h1>
          <Link to="/" className="text-accent hover:underline">← Back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/#portfolio" className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft size={16} /> Back to Work
            </Link>
            <p className="text-sm font-body text-accent font-medium tracking-widest uppercase mb-3">{study.category}</p>
            <h1 className="heading-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground">{study.title}</h1>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="heading-display text-2xl md:text-3xl mb-6">Overview</h2>
          <p className="text-body text-lg leading-relaxed">{study.overview}</p>
        </motion.section>

        {/* Problem / Process / Solution */}
        {[
          { title: "The Problem", content: study.problem },
          { title: "The Process", content: study.process },
          { title: "The Solution", content: study.solution },
        ].map((section) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="heading-display text-2xl md:text-3xl mb-6">{section.title}</h2>
            <p className="text-body text-lg leading-relaxed">{section.content}</p>
          </motion.section>
        ))}

        {/* Visuals */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="heading-display text-2xl md:text-3xl mb-6">Visuals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {study.visuals.map((src, i) => (
              <img key={i} src={src} alt={`${study.title} visual ${i + 1}`} className="rounded-xl w-full object-cover aspect-[4/3]" loading="lazy" />
            ))}
          </div>
        </motion.section>

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="heading-display text-2xl md:text-3xl mb-8">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.results.map((result, i) => (
              <div key={i} className="bg-card rounded-xl p-6 text-center border border-border">
                <p className="font-heading text-lg font-bold text-foreground">{result}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="text-center pt-8 border-t border-border">
          <Link to="/#portfolio" className="inline-flex items-center gap-2 text-accent hover:underline font-medium">
            <ArrowLeft size={16} /> View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
