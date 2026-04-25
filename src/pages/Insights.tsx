import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import SiteLayout from "@/components/SiteLayout";

const insightAreas = [
  "Clinical workflow and service design",
  "Patient journey and patient experience",
  "Digital health adoption and implementation",
  "Frontline perspective on AI in healthcare",
  "Early-stage product thinking in health technology",
];

const InsightsPage = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Insights"
      title="Thoughtful commentary at the intersection of clinical practice and technology"
      description="This page is structured to support future articles, short reports, or founder perspectives. It is intentionally credible and restrained until published insight pieces are ready to add."
    />

    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          title="Planned insight themes"
          description="Potential topics include the areas below. Replace or expand these with real published pieces when available."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {insightAreas.map((item) => (
            <div key={item} className="rounded-[24px] border border-border bg-card px-6 py-5 text-sm leading-7 text-foreground/82 shadow-[var(--shadow-card)]">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[28px] border border-dashed border-border bg-secondary/55 p-8 shadow-[var(--shadow-card)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">Placeholder structure</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">Add published pieces here when ready</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
            Sample placeholder copy for review: this section can later feature articles, short reports, founder notes, or commentary on workflow, patient journeys, implementation challenges, and healthcare system realities. Replace with real content before publication.
          </p>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default InsightsPage;
