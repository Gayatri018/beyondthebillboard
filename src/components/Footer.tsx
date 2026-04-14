const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              BTB<span className="text-accent">.</span>
            </h3>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              Beyond The Billboard is a strategic practice focused on research-led storytelling and the creation of a legacy of modern consumer brands.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Brand Studies", href: "#portfolio" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/60">
              <li>help.beyondthebillboard@gmail.com</li>
              <li>+91 9149548542</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest mb-4">Location</h4>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/60">
              <li>Pune</li>
              <li>Delhi</li>
              <li>Mumbai</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Beyond The Billboard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
