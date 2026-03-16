import { motion } from "framer-motion";

const InsightsSection = () => (
  <section id="insights" className="py-32 lg:py-48 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl lg:text-5xl font-semibold text-foreground tracking-tight mb-4">
          Insights
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
          Perspectives on the evolving relationship between medicine and technology.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-card border-l-4 border-primary rounded-[16px] p-10 lg:p-12 shadow-[var(--shadow-card)] max-w-3xl"
      >
        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-4">
          Featured Report
        </p>
        <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4 tracking-tight">
          Clinician Perspectives on AI in General Practice
        </h3>
        <p className="text-foreground/70 leading-relaxed mb-8 max-w-xl">
          A short report exploring how clinicians view the growing role of artificial intelligence within everyday clinical practice, and the opportunities and challenges associated with its adoption.
        </p>
        <button className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity duration-200">
          Download report
        </button>
      </motion.div>
    </div>
  </section>
);

export default InsightsSection;
