import EditableText from "@/components/content/EditableText";
import { useSiteContent } from "@/components/content/SiteContentProvider";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import SiteLayout from "@/components/SiteLayout";

const LabPage = () => {
  const { content, editMode } = useSiteContent();

  return (
    <SiteLayout>
      <PageHero
        eyebrow={<EditableText path="lab.hero.eyebrow" as="span" multiline={false} />}
        title={<EditableText path="lab.hero.title" as="span" multiline={false} />}
        description={<EditableText path="lab.hero.description" as="span" />}
        aside={
          <div>
            <EditableText path="lab.hero.asideText" as="p" className="text-sm leading-7 text-muted-foreground" />
          </div>
        }
      />

      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionIntro
            eyebrow={<EditableText path="lab.activeProjectsSection.eyebrow" as="span" multiline={false} />}
            title={<EditableText path="lab.activeProjectsSection.title" as="span" multiline={false} />}
            description={<EditableText path="lab.activeProjectsSection.description" as="span" />}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {content.lab.activeProjectsSection.projects.map((project, index) => (
              <article
                key={`${project.title}-${index}`}
                className="rounded-[24px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,249,251,0.96))] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] sm:rounded-[30px] sm:p-8"
              >
                <EditableText
                  path={`lab.activeProjectsSection.projects.${index}.tag`}
                  as="p"
                  multiline={false}
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/72"
                />
                <EditableText
                  path={`lab.activeProjectsSection.projects.${index}.title`}
                  as="h2"
                  multiline={false}
                  className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl"
                />
                <EditableText
                  path={`lab.activeProjectsSection.projects.${index}.description`}
                  as="p"
                  className="mt-4 text-sm leading-7 text-muted-foreground"
                />
              </article>
            ))}
            <article className="rounded-[24px] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:rounded-[30px] sm:p-8">
              <EditableText
                path="lab.activeProjectsSection.studioCard.tag"
                as="p"
                multiline={false}
                className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/72"
              />
              <EditableText
                path="lab.activeProjectsSection.studioCard.title"
                as="h2"
                multiline={false}
                className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl"
              />
              <EditableText
                path="lab.activeProjectsSection.studioCard.description"
                as="p"
                className="mt-4 text-sm leading-7 text-muted-foreground"
              />
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/45 py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionIntro
            eyebrow={<EditableText path="lab.researchAreasSection.eyebrow" as="span" multiline={false} />}
            title={<EditableText path="lab.researchAreasSection.title" as="span" multiline={false} />}
            description={<EditableText path="lab.researchAreasSection.description" as="span" />}
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {content.lab.researchAreasSection.items.map((_, index) => (
              <EditableText
                key={index}
                path={`lab.researchAreasSection.items.${index}`}
                as="div"
                className="rounded-[24px] border border-border bg-background px-6 py-5 text-sm leading-7 text-foreground/82 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <SectionIntro
            eyebrow={<EditableText path="lab.collaboration.eyebrow" as="span" multiline={false} />}
            title={<EditableText path="lab.collaboration.title" as="span" multiline={false} />}
            description={<EditableText path="lab.collaboration.description" as="span" />}
            align="center"
          />

          <a
            href={content.lab.collaboration.buttonHref}
            onClick={(event) => {
              if (editMode) {
                event.preventDefault();
              }
            }}
            className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/92"
          >
            <EditableText path="lab.collaboration.buttonLabel" as="span" multiline={false} />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
};

export default LabPage;
