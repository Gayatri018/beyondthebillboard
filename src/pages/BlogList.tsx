import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/components/BlogSection";

const BlogList = () => {
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
              to="/"
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
              All Insights
            </p>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl">
              From the desk of BTB
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((blog, i) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogList;
