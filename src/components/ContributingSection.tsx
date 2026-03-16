import { motion } from "framer-motion";

const ContributingSection = () => (
  <section className="py-36 lg:py-48 bg-background">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl lg:text-5xl font-semibold text-foreground tracking-[-0.03em] mb-10">
          Contributing to the conversation
        </h2>
        <div className="space-y-6 text-lg text-foreground/65 leading-[1.8]">
          <p>Healthcare technology is evolving rapidly.</p>
          <p>
            Clinicians bring an essential perspective to discussions about how emerging technologies should be developed, implemented and adopted within healthcare systems.
          </p>
          <p>
            HealthTechMedics aims to contribute to these conversations by sharing clinical insight from real-world healthcare environments.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContributingSection;
