import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import SiteLayout from "@/components/SiteLayout";

const focusAreas = [
  {
    title: "Clinical workflow review",
    text: "Reviewing whether a product fits how work is actually done, where it may add friction, and what operational assumptions need testing.",
  },
  {
    title: "Patient journey insight",
    text: "Looking at the care pathway through the patient and clinician lens, including communication, transitions, expectations, and points of confusion.",
  },
  {
    title: "Digital health product feedback",
    text: "Providing a clinician-led view on usability, relevance, and whether a product proposition feels grounded in real service delivery.",
  },
  {
    title: "Implementation and adoption challenges",
    text: "Helping teams think through the barriers that often appear between concept and real-world use, from workflow fit to service constraints.",
  },
  {
    title: "Healthcare system realities",
    text: "Bringing perspective on how the surrounding system shapes product use, decision-making, incentives, and practical feasibility.",
  },
  {
    title: "Clinical perspective for investors",
    text: "Offering grounded input for diligence conversations where product credibility and real-world fit are material questions.",
  },
];

const FocusAreasPage = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Focus Areas"
      title="Where we typically add value"
      description="HealthTechMedics focuses on the practical questions that sit between a good health technology idea and a product that can work credibly in real care settings."
    />

    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          title="Founder-led support across product, workflow, and implementation questions"
          description="The exact shape of work will depend on the stage of the team and the problem in front of it, but these are the recurring areas where clinical input is often most useful."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {focusAreas.map((item) => (
            <article key={item.title} className="rounded-[28px] border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-foreground">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default FocusAreasPage;
