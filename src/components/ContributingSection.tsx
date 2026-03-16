import { motion } from "framer-motion";

const ContributingSection = () => (
  <section className="py-36 lg:py-48 bg-background">
    <div className="max-w-3xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl lg:text-5xl font-semibold text-foreground tracking-[-0.03em] mb-10">
          Working with health technology teams
        </h2>
        <div className="space-y-6 text-lg text-foreground/65 leading-[1.8]">
          <p>
            HealthTechMedics provides clinical insight to teams developing health technology ideas and innovations.
          </p>
          <p>This can include situations such as:</p>
          <ul className="space-y-4 text-foreground/60 pl-1">
            <li className="flex gap-3">
              <span className="text-accent mt-1.5 shrink-0">•</span>
              <span>understanding clinical workflows and how new tools fit into day-to-day healthcare practice</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent mt-1.5 shrink-0">•</span>
              <span>exploring how digital health ideas may be adopted within real clinical environments</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent mt-1.5 shrink-0">•</span>
              <span>providing clinical perspective during early product development or strategy discussions</span>
            </li>
          </ul>
          <p>
            The aim is to help ensure that emerging innovations align with the realities of clinical practice, healthcare systems and patient care.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContributingSection;
