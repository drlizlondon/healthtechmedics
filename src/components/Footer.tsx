const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="text-lg font-semibold text-foreground">HealthTechMedics</p>
            <p className="mt-2 text-muted-foreground max-w-sm">
              Exploring the intersection of clinical practice and healthcare technology.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <button onClick={() => scrollTo("about")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollTo("focus-areas")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Areas of Focus
            </button>
            <button onClick={() => scrollTo("insights")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Insights
            </button>
            <button onClick={() => scrollTo("contact")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} HealthTechMedics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
