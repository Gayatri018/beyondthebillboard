import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "build-brand-emotional-connection",
    title: "How to Build a Brand That Connects Emotionally with Your Audience",
    date: "10 April 2026",
    excerpt: "In an era where consumers are overwhelmed with options, the brands that emerge victorious are those that master the art of emotional connection.",
  },
  {
    slug: "branding-evolves-2026",
    title: "How Branding Evolves in 2026: AI, Immersion, Motion & Voice in Focus",
    date: "13 April 2026",
    excerpt: "In 2026, your brand won't just look beautiful, it will listen, move, and adapt. We're entering the era of Human + Intelligent Branding.",
  },
  {
    slug: "clicks-to-conversations",
    title: "From Clicks to Conversations: Building Websites People Actually Trust",
    date: "16 April 2026",
    excerpt: "Driving traffic today is no longer the hard part. What's harder and far more valuable is convincing them to stay.",
  },
  {
    slug: "unique-brand-voice",
    title: "How to Develop a Unique Brand Voice That Resonates",
    date: "18 April 2026",
    excerpt: "Your brand voice is the single most effective channel, reflecting your company values across all communication pathways.",
  },
  {
    slug: "effective-influencer-marketing",
    title: "Maximizing Your Online Presence: A Step-by-Step Guide to Effective Influencer Marketing",
    date: "21 April 2026",
    excerpt: "India has crossed 99,000+ active startups. Social media and influencers go hand in hand for brand growth.",
  },
  {
    slug: "rebuild-trust-brand-crisis",
    title: "How to Rebuild Trust After a Brand Identity Crisis?",
    date: "24 April 2026",
    excerpt: "A brand identity crisis can emerge at any time. The reputation of a brand is vulnerable more often than expected.",
  },
  {
    slug: "effective-brand-communication",
    title: "Effective Brand Communication: Navigating the Marketing Funnel",
    date: "27 April 2026",
    excerpt: "Effective brand communication plays a crucial role in consumer perceptions and fostering brand loyalty.",
  },
];

const BlogSection = () => {
  const sortedBlogs = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const displayedBlogs = sortedBlogs.slice(0, 3);

  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-body text-accent font-medium tracking-widest uppercase mb-4">
            Blogs
          </p>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl">
            From the desk of BTB
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedBlogs.map((blog, i) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/blog/${blog.slug}`}
                className="group block bg-card border border-border rounded-xl p-8 h-full hover:border-accent/50 transition-all duration-300"
              >
                <p className="text-xs font-body text-accent font-medium tracking-widest uppercase mb-3">
                  {blog.date}
                </p>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-body text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/blog"
            className="group inline-flex items-center gap-3 text-lg font-heading font-semibold text-foreground hover:text-accent transition-colors duration-300"
          >
            Read more insights
            <motion.span
              className="inline-block"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={22} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
