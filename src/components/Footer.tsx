import { Instagram, Twitter, Linkedin, Dribbble } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              BTB<span className="text-accent">.</span>
            </h3>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              Beyond The Billboard — a bold creative agency crafting unforgettable brand experiences
              for ambitious companies worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Work", "Services", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/60">
              <li>hello@noirstudio.com</li>
              <li>+1 (555) 000-1234</li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest mb-4">
              Locations
            </h4>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/60">
              <li>New York, NY</li>
              <li>London, UK</li>
              <li>Berlin, DE</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Beyond The Billboard. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[Instagram, Twitter, Linkedin, Dribbble].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-primary-foreground/40 hover:text-primary-foreground transition-colors"
                aria-label="Social link"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
