import { motion } from "framer-motion";

const EngagementSection = () => (
  <section className="py-36 lg:py-48 bg-secondary">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl lg:text-5xl font-semibold text-foreground tracking-[-0.03em] mb-10">
          Engagement
        </h2>
        <div className="space-y-6 text-lg text-foreground/65 leading-[1.8]">
          <p>
            HealthTechMedics operates within the broader health technology ecosystem where clinicians, technologists, investors and healthcare organisations are exploring how innovation can improve healthcare delivery.
          </p>
          <p>
            The initiative engages with ideas and initiatives related to digital health, artificial intelligence and healthcare innovation, including approaches that aim to improve access to care and address health inequalities.
          </p>
          <p>
            HealthTechMedics is particularly interested in initiatives that bring clinicians into conversations about health technology, education and the responsible development of tools intended for real clinical environments.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EngagementSection;
