import { motion } from "framer-motion";

const PerspectivesSection = () => (
  <section className="py-36 lg:py-48 bg-background">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl lg:text-5xl font-semibold text-foreground tracking-[-0.03em] mb-10">
          Perspectives
        </h2>
        <div className="space-y-6 text-lg text-foreground/65 leading-[1.8]">
          <p>Health technology is evolving rapidly.</p>
          <p>
            Clinicians bring an essential perspective to discussions about how emerging ideas and innovations should be developed, implemented and adopted within healthcare systems.
          </p>
          <p>
            HealthTechMedics reflects on topics such as digital health, artificial intelligence, clinical workflow and the role of innovation in improving access to care.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PerspectivesSection;
