import { motion } from "framer-motion";

const WhyCliniciansSection = () => (
  <section className="py-32 lg:py-48 bg-secondary">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground tracking-tight mb-10">
            Why clinician insight matters
          </h2>
          <div className="space-y-6 text-lg text-foreground/75 leading-relaxed">
            <p>
              Technology developed without meaningful clinical input often struggles to gain adoption within healthcare systems.
            </p>
            <p>
              Clinicians understand the practical realities of healthcare delivery, including workflow constraints, patient needs and the operational complexity of modern health services.
            </p>
            <p>
              By combining medical insight with technological thinking, more effective and sustainable healthcare solutions can be developed.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-6">Where we are today</h3>
          <div className="space-y-6 text-lg text-foreground/75 leading-relaxed mb-10">
            <p>
              HealthTechMedics engages with the rapidly evolving landscape of healthcare technology, contributing clinical perspective to discussions around digital health innovation.
            </p>
            <p>
              The organisation continues to explore how emerging technologies, particularly artificial intelligence, can be applied responsibly and effectively within healthcare.
            </p>
          </div>
          <div id="contact" className="flex items-center gap-4">
            <a
              href="mailto:contact@healthtechmedics.com"
              className="px-8 py-3.5 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition-opacity duration-200"
            >
              Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyCliniciansSection;
