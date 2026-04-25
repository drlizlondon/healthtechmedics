import EditableText from "@/components/content/EditableText";
import { useSiteContent } from "@/components/content/SiteContentProvider";
import InsightBriefingsSection from "@/components/InsightBriefingsSection";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import SiteLayout from "@/components/SiteLayout";

const ServicesPage = () => {
  const { content, editMode } = useSiteContent();

  return (
    <SiteLayout>
      <PageHero
        eyebrow={<EditableText path="services.hero.eyebrow" as="span" multiline={false} />}
        title={<EditableText path="services.hero.title" as="span" multiline={false} />}
        description={<EditableText path="services.hero.description" as="span" />}
        aside={
          <div className="space-y-4">
            <EditableText
              path="services.hero.asideTitle"
              as="p"
              multiline={false}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70"
            />
            {content.services.hero.asideParagraphs.map((_, index) => (
              <EditableText
                key={index}
                path={`services.hero.asideParagraphs.${index}`}
                as="p"
                className="text-sm leading-7 text-muted-foreground"
              />
            ))}
          </div>
        }
      />

      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-6 xl:grid-cols-2">
            {content.services.serviceGroups.map((group, index) => (
              <article
                key={`${group.title}-${index}`}
                className="rounded-[24px] border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] sm:rounded-[30px] sm:p-8"
              >
                <EditableText
                  path={`services.serviceGroups.${index}.title`}
                  as="h2"
                  multiline={false}
                  className="text-2xl font-semibold tracking-[-0.03em] text-foreground"
                />
                <EditableText
                  path={`services.serviceGroups.${index}.description`}
                  as="p"
                  className="mt-4 text-sm leading-7 text-muted-foreground"
                />

                <div className="mt-6 grid gap-5 lg:grid-cols-2">
                  <div>
                    <EditableText
                      path={`services.serviceGroups.${index}.outputsLabel`}
                      as="p"
                      multiline={false}
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/72"
                    />
                    <div className="mt-3 grid gap-3">
                      {group.outputs.map((_, outputIndex) => (
                        <EditableText
                          key={outputIndex}
                          path={`services.serviceGroups.${index}.outputs.${outputIndex}`}
                          as="div"
                          className="rounded-2xl border border-border bg-secondary/35 px-4 py-3 text-sm leading-6 text-foreground/82"
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <EditableText
                      path={`services.serviceGroups.${index}.engagementsLabel`}
                      as="p"
                      multiline={false}
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/72"
                    />
                    <div className="mt-3 grid gap-3">
                      {group.engagements.map((_, engagementIndex) => (
                        <EditableText
                          key={engagementIndex}
                          path={`services.serviceGroups.${index}.engagements.${engagementIndex}`}
                          as="div"
                          className="rounded-2xl border border-border bg-background px-4 py-3 text-sm leading-6 text-foreground/82"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/45 py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionIntro
            eyebrow={<EditableText path="services.whyTeams.eyebrow" as="span" multiline={false} />}
            title={<EditableText path="services.whyTeams.title" as="span" multiline={false} />}
            description={<EditableText path="services.whyTeams.description" as="span" />}
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {content.services.whyTeams.items.map((_, index) => (
              <EditableText
                key={index}
                path={`services.whyTeams.items.${index}`}
                as="div"
                className="rounded-[24px] border border-border bg-background px-6 py-5 text-sm leading-7 text-foreground/82 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
              />
            ))}
          </div>
        </div>
      </section>

      <InsightBriefingsSection />

      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <SectionIntro
            eyebrow={<EditableText path="services.finalCta.eyebrow" as="span" multiline={false} />}
            title={<EditableText path="services.finalCta.title" as="span" multiline={false} />}
            description={<EditableText path="services.finalCta.description" as="span" />}
            align="center"
          />

          <a
            href={content.services.finalCta.buttonHref}
            onClick={(event) => {
              if (editMode) {
                event.preventDefault();
              }
            }}
            className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/92"
          >
            <EditableText path="services.finalCta.buttonLabel" as="span" multiline={false} />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ServicesPage;
