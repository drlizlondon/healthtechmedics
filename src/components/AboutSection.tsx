import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-36 lg:py-52 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl lg:text-5xl font-semibold text-foreground tracking-[-0.03em] mb-12">
          About HealthTechMedics
        </h2>
        <div className="space-y-7 text-lg text-foreground/70 leading-[1.8]">
          <p>
            HealthTechMedics brings clinical perspective to the development and adoption of healthcare technology.
          </p>
          <p>
            Founded by practising NHS clinicians, the organisation explores how emerging technologies such as artificial intelligence interact with real clinical environments and healthcare systems.
          </p>
          <p>
            Healthcare innovation continues to accelerate, yet many technologies struggle to gain traction within day-to-day clinical practice. This often reflects a gap between technological development and the realities of healthcare delivery.
          </p>
          <p>
            HealthTechMedics contributes clinical perspective to conversations across the healthcare technology ecosystem, helping to ensure that innovation remains grounded in real-world care delivery.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
