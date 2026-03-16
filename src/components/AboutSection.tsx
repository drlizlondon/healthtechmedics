import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-32 lg:py-48 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl lg:text-5xl font-semibold text-foreground tracking-tight mb-10">
          About HealthTechMedics
        </h2>
        <div className="space-y-6 text-lg text-foreground/75 leading-relaxed">
          <p>
            HealthTechMedics was founded by practising clinicians interested in the intersection of clinical practice and healthcare technology.
          </p>
          <p>
            While healthcare innovation continues to accelerate, many technologies struggle to gain traction within real clinical environments. This often reflects a gap between technological development and the realities of day-to-day healthcare delivery.
          </p>
          <p>As doctors working within the NHS, we see these challenges first-hand.</p>
          <p>
            HealthTechMedics contributes clinical perspective to conversations with founders, investors and innovators developing healthcare technologies. By bringing together frontline medical experience with an understanding of digital health, the organisation aims to support more thoughtful development and adoption of healthcare technology.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
