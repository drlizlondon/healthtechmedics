import { motion } from "framer-motion";

const WhyCliniciansSection = () => (
  <section className="py-36 lg:py-52 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground tracking-[-0.03em] mb-10">
            Why clinician insight matters
          </h2>
          <div className="space-y-7 text-lg text-foreground/65 leading-[1.8]">
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
          <h3 className="text-2xl font-semibold text-primary mb-8">Our Perspective</h3>
          <div className="space-y-7 text-lg text-foreground/65 leading-[1.8] mb-12">
            <p>
              Healthcare systems are complex environments where technology must operate safely, reliably and effectively.
            </p>
            <p>
              Clinicians play an essential role in shaping how digital health solutions are designed, implemented and adopted.
            </p>
            <p>
              HealthTechMedics contributes clinical insight to conversations around healthcare innovation, engaging with founders, investors and organisations working to improve healthcare through technology.
            </p>
          </div>
          <div id="contact" className="flex items-center gap-4">
            <a
              href="mailto:contact@healthtechmedics.com"
              className="px-8 py-3.5 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
            >
              Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200"
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
