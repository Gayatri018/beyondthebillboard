import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import portfolioYogabar from "@/assets/portfolio-yogabar.jpg";
import portfolioCountrydelight from "@/assets/portfolio-countrydelight.jpg";
import portfolioPaperboat from "@/assets/portfolio-paperboat.jpg";
import portfolioChitale from "@/assets/portfolio-chitale.jpg";
import portfolioAmul from "@/assets/portfolio-amul.jpg";
import portfolioMaggi from "@/assets/portfolio-maggi.jpg";

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
  "yoga-bar": {
    title: "Yoga Bar",
    category: "Clean Label Revolution",
    image: portfolioYogabar,
    overview: "A strategic analysis of Yoga Bar's \"Clean Label\" revolution, a brand that bypassed traditional celebrity endorsements to build a multi-crore empire through radical transparency and community-led digital storytelling.",
    problem: "The Indian FMCG snack market was saturated with \"healthy\" alternatives that were often loaded with synthetic additives and hidden sugars. Consumers faced a massive trust deficit, struggling to find a brand that balanced genuine nutrition with a modern, approachable identity.",
    process: "Through the lens of narrative-led growth, I investigated Yoga Bar's journey from a bootstrapped startup to a market disruptor. The research mapped their transition from a functional product to an emotional anchor, focusing on their strategy of ingredient-first transparency and their consistent \"Clean Label\" digital campaigns.",
    solution: "A brand architecture built on honesty. By decoding the shift in audience perception from seeing a snack to trusting a health partner, this study highlights how Yoga Bar used social media to educate rather than just sell. The result was a definitive narrative shift that turned an underdog brand into a household staple, culminating in a landmark acquisition.",
    results: ["100 Cr+ Annual Revenue Run Rate", "Complete Acquisition by ITC Ltd.", "3x Category Growth in Muesli & Protein Bar"],
    visuals: [portfolioYogabar, portfolioCountrydelight],
  },
  "country-delight": {
    title: "Country Delight",
    category: "Purity-First Disruption",
    image: portfolioCountrydelight,
    overview: "A strategic analysis of Country Delight's \"Purity-First\" disruption, a brand that redefined the daily essentials category by bridging the gap between farm-fresh tradition and high-tech supply chain transparency.",
    problem: "The Indian dairy and fresh-produce market suffered from a deeply fragmented supply chain, leading to consistent concerns over adulteration and \"middleman\" processing. For the modern urban consumer, the simple act of buying milk had become a gamble on quality rather than a standard of health.",
    process: "Applying a narrative-driven framework, I explored how Country Delight bypassed the shelf-life obsession of traditional FMCG giants. This research examined their \"direct-to-home\" model as a psychological tool for building trust, mapping how they leveraged the \"Natural Milk\" narrative to move from a utility service to a premium daily ritual.",
    solution: "A brand architecture rooted in accountability. By decoding how Country Delight transformed a low-engagement commodity into a high-trust digital relationship, this study highlights their use of \"test-at-home\" kits as a narrative device. The result was a radical shift in consumer behavior, proving that in a crowded market, transparency is the most potent growth engine.",
    results: ["1,000 Cr+ Annual Revenue", "Backed by Tiger Global", "15+ Cities Urban Expansion"],
    visuals: [portfolioCountrydelight, portfolioPaperboat],
  },
  "paper-boat": {
    title: "Paper Boat",
    category: "Nostalgia Marketing",
    image: portfolioPaperboat,
    overview: "A strategic analysis of Paper Boat's \"Nostalgia Marketing\" empire, a brand that bypassed the competitive \"juice\" category to create a new category of \"Drinks and Memories.\"",
    problem: "The Indian beverage market was dominated by carbonated sodas and synthetic fruit drinks. While functional, these products lacked any cultural or emotional soul, leaving a void for the authentic, traditional flavors that defined Indian childhoods.",
    process: "Using a narrative-driven lens, I explored how Paper Boat used storytelling as their primary product ingredient. The research deconstructed their \"Memories\" campaign, mapping how they used poetic copywriting and ethnic packaging to transform a simple aam-panna into a time-machine for the urban consumer.",
    solution: "A brand architecture built on \"The Return to Innocence.\" By decoding the psychological power of nostalgia, this study highlights how Paper Boat turned a commodity into a cultural icon. The result was a brand that doesn't just sit on a shelf, but lives in the collective memory of a nation.",
    results: ["500 Cr+ Estimated Brand Valuation", "40+ Flavors Reviving Forgotten Recipes", "One of India's Most Loved D2C Brands"],
    visuals: [portfolioPaperboat, portfolioChitale],
  },
  "chitale-bandhu": {
    title: "Chitale Bandhu Mithaiwale",
    category: "Precision Heritage",
    image: portfolioChitale,
    overview: "A strategic analysis of Chitale Bandhu, a brand that transformed a traditional regional snack into a global FMCG staple through a rare blend of culinary heritage and industrial automation.",
    problem: "In the mid-20th century, the traditional Indian sweets (Mithai) and savory (Namkeen) market was highly unorganized, with inconsistent quality and limited shelf life. For a growing middle class, there was a desire for authentic traditional flavors that could offer the convenience and standardized quality of international snack brands.",
    process: "Using a narrative-led growth lens, I explored the transition of the \"Chitale Legacy\" from a local dairy in 1939 to a retail giant. The research focused on their 1970s pivot, identifying the \"Bakarwadi\" as their anchor product and analyzed how they leveraged Pune's cultural identity to build a brand narrative that balances old-world trust with new-age technology.",
    solution: "A brand architecture built on \"Precision Heritage.\" By decoding how Chitale Bandhu moved from manual labor to being the first in India to machine-produce Bakarwadi, this study highlights their mastery of supply chain consistency. The result was a definitive shift from a neighborhood sweet shop to a global export brand, proving that tradition can scale without losing its soul.",
    results: ["3,000 kg+ Daily Production", "200 Cr+ Estimated Annual Turnover", "Global Exports to US, Europe & SE Asia"],
    visuals: [portfolioChitale, portfolioAmul],
  },
  "amul": {
    title: "Amul",
    category: "Topical Marketing",
    image: portfolioAmul,
    overview: "A strategic analysis of Amul's \"Topical\" marketing, a brand that turned advertising into a daily social commentary, becoming the \"Taste of India\" through sharp wit and consistent cultural relevance.",
    problem: "In a market of sterile, product-focused dairy ads, how does a brand stay relevant to every generation for over 60 years without changing its mascot or its core message?",
    process: "I deconstructed the \"Amul Girl\" as a narrative device. This research maps how the brand uses satire and social commentary to bridge the gap between a commodity (butter) and the collective consciousness of a nation.",
    solution: "A brand architecture built on \"Topicality and Trust.\" By decoding the \"No-Approval\" agency model, this study highlights how Amul bypasses traditional corporate delays to stay ahead of the news cycle. The result is a brand that doesn't just sit in the fridge, it sits at the breakfast table of the Indian democracy.",
    results: ["6,000+ Topicals, World's Longest Campaign", "80,000 Cr+ Group Turnover", "India's Most Trusted Food Brand"],
    visuals: [portfolioAmul, portfolioMaggi],
  },
  "maggi": {
    title: "Maggi",
    category: "Crisis & Comeback",
    image: portfolioMaggi,
    overview: "A strategic analysis of Maggi's \"Return to the Kitchen\", a case study in crisis management and emotional branding that restored a near-total market share after a nationwide ban and a total collapse of consumer trust.",
    problem: "In 2015, India's most iconic comfort food brand vanished overnight. Following a regulatory crisis, Maggi went from 80% market dominance to zero presence. The challenge wasn't just logistical; it was a psychological heartbreak. To survive, Nestlé had to prove the product was safe while healing a broken relationship with millions of Indian mothers and students.",
    process: "Using a narrative-led lens, I deconstructed the \"Miss You\" and \"Nothing Like Maggi\" digital campaigns. The research focused on the shift from \"Convenience\" to \"Nostalgia\", analyzing how the brand utilized audience-generated stories to lead its comeback. By focusing on the emotional void left by the product, the brand turned its absence into its most powerful marketing tool.",
    solution: "A brand architecture built on \"Radical Resilience.\" By decoding the psychology of a comeback, this study highlights how Maggi successfully moved from a \"mass commodity\" to a \"cherished memory.\" The result was a masterclass in community-led growth, proving that if a brand's echo is deep enough, it can survive even the loudest silence and return to market leadership.",
    results: ["6 Billion+ Servings in a Single Year", "60% Market Share Recovery from 0%", "Top 5 Most Trusted Food Brands in India"],
    visuals: [portfolioMaggi, portfolioYogabar],
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
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/#portfolio" className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft size={16} /> Back to Brand Studies
            </Link>
            <p className="text-sm font-body text-accent font-medium tracking-widest uppercase mb-3">{study.category}</p>
            <h1 className="heading-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground">{study.title}</h1>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
        <CaseSection title="Overview" content={study.overview} />
        <CaseSection title="The Problem" content={study.problem} />
        <CaseSection title="The Process" content={study.process} />
        <CaseSection title="The Solution" content={study.solution} />

        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className="heading-display text-2xl md:text-3xl mb-6">Visuals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {study.visuals.map((src, i) => (
              <img key={i} src={src} alt={`${study.title} visual ${i + 1}`} className="rounded-xl w-full object-cover aspect-[4/3]" loading="lazy" />
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
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
            <ArrowLeft size={16} /> View All Brand Studies
          </Link>
        </div>
      </div>
    </div>
  );
};

const CaseSection = ({ title, content }: { title: string; content: string }) => (
  <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
    <h2 className="heading-display text-2xl md:text-3xl mb-6">{title}</h2>
    <p className="text-body text-lg leading-relaxed">{content}</p>
  </motion.section>
);

export default CaseStudy;
