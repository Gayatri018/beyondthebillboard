import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const serviceOptions = [
  "UI/UX Design",
  "Branding",
  "Marketing",
  "Motion Design",
  "Photography",
  "Frontend Development",
];

const budgetOptions = [
  "Under $5K",
  "$5K – $15K",
  "$15K – $50K",
  "$50K+",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Connect to backend (Lovable Cloud) for email sending
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      toast.success("Message sent! We'll be in touch soon.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center py-20"
          >
            <CheckCircle className="mx-auto mb-6 text-accent" size={48} />
            <h2 className="heading-display text-3xl md:text-4xl mb-4">
              Thanks for reaching out!
            </h2>
            <p className="text-body text-lg">
              We'll review your project details and get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  const inputClasses =
    "w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all";

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-body text-accent font-medium tracking-widest uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Let's create
              <br />
              something great.
            </h2>
            <p className="text-body text-lg mb-8 max-w-md">
              Have a project in mind? Drop us a line and let's explore how we
              can bring your vision to life.
            </p>
            <div className="space-y-4">
              <p className="text-sm font-body text-muted-foreground">
                <span className="text-foreground font-medium">Email:</span>{" "}
                hello@noirstudio.com
              </p>
              <p className="text-sm font-body text-muted-foreground">
                <span className="text-foreground font-medium">Phone:</span>{" "}
                +1 (555) 000-1234
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                name="name"
                type="text"
                placeholder="Your Name *"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={inputClasses}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="" disabled>
                  Select Service *
                </option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              <select
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="" disabled>
                  Budget Range *
                </option>
                {budgetOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your project *"
              required
              value={formData.message}
              onChange={handleChange}
              className={inputClasses + " resize-none"}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
