import { motion } from "framer-motion";

const ContinuingSection = () => (
  <section className="py-36 lg:py-48 bg-secondary">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl lg:text-5xl font-semibold text-foreground tracking-[-0.03em] mb-10">
          Continuing the conversation
        </h2>
        <div className="space-y-6 text-lg text-foreground/65 leading-[1.8]">
          <p>
            HealthTechMedics engages with the broader healthcare technology community through research, dialogue and participation in discussions around digital health innovation.
          </p>
          <p>
            The organisation welcomes conversations with individuals and organisations exploring how technology can responsibly improve healthcare delivery.
          </p>
          <p>
            This may include collaboration with founders, healthcare organisations, investors and others interested in the future of healthcare technology.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContinuingSection;
