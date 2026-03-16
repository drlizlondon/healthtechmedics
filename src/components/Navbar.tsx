import { useState } from "react";
import { motion } from "framer-motion";
import logoHorizontal from "@/assets/logo-horizontal.png";

const navLinks = ["About", "Focus Areas", "Insights", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/\s/g, "-"));
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <img src={logoHorizontal} alt="HealthTechMedics" className="h-10" />
        
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border px-6 py-4"
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left py-3 text-foreground/70 hover:text-primary font-medium"
            >
              {link}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
