import { motion } from "framer-motion";

const InsightsSection = () => (
  <section id="insights" className="py-36 lg:py-52 bg-secondary">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl lg:text-5xl font-semibold text-foreground tracking-[-0.03em] mb-4">
          Insights
        </h2>
        <p className="text-lg text-foreground/60 mb-20 max-w-2xl leading-relaxed">
          Clinical perspectives on the evolving relationship between medicine and technology.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-card border-l-4 border-primary rounded-[20px] p-12 lg:p-16 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300 max-w-3xl"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-5">
          Featured Report
        </p>
        <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-5 tracking-[-0.02em] leading-tight">
          Clinician Perspectives on AI in General Practice
        </h3>
        <p className="text-foreground/65 leading-[1.8] mb-4 max-w-xl">
          A short report exploring how clinicians view the growing role of artificial intelligence within everyday clinical practice, and the opportunities and challenges associated with its adoption.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-xl italic">
          Part of the HealthTechMedics insight series exploring how emerging technologies interact with real clinical environments.
        </p>
        <button className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
          Download report
        </button>
      </motion.div>
    </div>
  </section>
);

export default InsightsSection;
