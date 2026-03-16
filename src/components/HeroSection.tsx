import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8 items-center w-full">
          <div className="col-span-12 lg:col-span-7 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold text-foreground tracking-[-0.035em] leading-[1.08]"
            >
              Clinical insight at the intersection of{" "}
              <span className="text-primary">healthcare</span> and{" "}
              <span className="text-primary">technology</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.2, 0, 0, 1] }}
              className="mt-8 text-xl text-foreground/80 leading-relaxed max-w-xl font-medium"
            >
              HealthTechMedics brings frontline clinical perspective to conversations around digital health, artificial intelligence and healthcare innovation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0, 0, 1] }}
              className="mt-6 text-lg text-foreground/65 leading-relaxed max-w-xl"
            >
              Founded by practising NHS clinicians, HealthTechMedics explores how emerging healthcare technologies interact with real clinical environments and healthcare systems. The organisation contributes clinical insight to discussions with founders, investors and innovators working to improve healthcare through technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0, 0, 1] }}
              className="mt-10 flex items-center gap-4"
            >
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
              >
                Contact
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="px-8 py-4 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200"
              >
                Learn more
              </button>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-12 text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium"
            >
              NHS clinicians · Artificial intelligence · Digital health innovation
            </motion.p>
          </div>
        </div>

        {/* Background image with stronger fade */}
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/60 to-background/10" />
          <img src={heroBg} className="h-full w-full object-cover opacity-70" alt="Healthcare Technology Network" />
        </div>
      </section>

      {/* Hero bridge line */}
      <div className="bg-secondary py-10 lg:py-14">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-lg text-foreground/60 max-w-3xl mx-auto px-6 leading-relaxed"
        >
          HealthTechMedics contributes clinical perspective to conversations across the healthcare technology ecosystem.
        </motion.p>
      </div>
    </>
  );
};

export default HeroSection;
