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
            HealthTechMedics is a clinician-led initiative exploring the intersection of clinical practice and health technology.
          </p>
          <p>
            Healthcare innovation continues to accelerate, yet many promising ideas struggle to translate effectively into real clinical environments.
          </p>
          <p>
            Founded by practising NHS clinicians, HealthTechMedics brings frontline clinical perspective to the development and adoption of health technology and digital health innovation.
          </p>
          <p>
            The initiative focuses on how emerging ideas such as artificial intelligence and digital health tools interact with healthcare systems, clinical workflows and patient care.
          </p>
          <p>
            HealthTechMedics sits within the broader health technology ecosystem and contributes clinical insight to discussions around how innovation can responsibly improve healthcare delivery.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
