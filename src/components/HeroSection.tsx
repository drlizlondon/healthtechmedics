import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8 items-center w-full">
        <div className="col-span-12 lg:col-span-7 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-foreground tracking-tighter leading-[1.05]"
          >
            Clinicians exploring the{" "}
            <span className="text-primary">future</span> of healthcare technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0, 0, 1] }}
            className="mt-8 text-lg lg:text-xl text-foreground/75 leading-relaxed max-w-xl"
          >
            HealthTechMedics brings clinical perspective to conversations around digital health and healthcare innovation. Founded by practising doctors, the organisation contributes insight into how emerging technologies interact with real clinical environments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0, 0, 1] }}
            className="mt-10 flex items-center gap-4"
          >
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition-opacity duration-200"
            >
              Contact
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="px-8 py-4 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors duration-200"
            >
              Learn more
            </button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 text-sm uppercase tracking-widest text-muted-foreground font-medium"
          >
            NHS clinicians · Artificial intelligence · Digital health innovation
          </motion.p>
        </div>
      </div>

      {/* Background image with gradient mask */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <img src={heroBg} className="h-full w-full object-cover" alt="Healthcare Technology Network" />
      </div>
    </section>
  );
};

export default HeroSection;
