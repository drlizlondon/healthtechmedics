import { motion } from "framer-motion";

const areas = [
  {
    title: "Clinical workflow optimisation",
    text: "Exploring ways to reduce administrative burden and improve efficiency within clinical environments.",
  },
  {
    title: "Artificial intelligence in healthcare",
    text: "Examining the responsible and practical application of artificial intelligence within real healthcare settings.",
  },
  {
    title: "Digital health tools",
    text: "Supporting the development of technologies designed to improve patient care and clinical outcomes.",
  },
  {
    title: "Clinician-led innovation",
    text: "Encouraging greater collaboration between clinicians and technology developers so healthcare solutions reflect real clinical needs.",
  },
];

const FocusAreasSection = () => (
  <section id="focus-areas" className="py-32 lg:py-48 bg-secondary">
    <div className="max-w-7xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl lg:text-5xl font-semibold text-foreground tracking-tight mb-16"
      >
        Areas of Focus
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {areas.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-card p-10 rounded-[24px] border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300"
          >
            <div className="w-12 h-1 bg-accent mb-8 rounded-full" />
            <h3 className="text-xl font-semibold text-primary mb-4 leading-tight">{area.title}</h3>
            <p className="text-foreground/65 leading-relaxed">{area.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FocusAreasSection;
