import EditableText from "@/components/content/EditableText";
import { useSiteContent } from "@/components/content/SiteContentProvider";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import SiteLayout from "@/components/SiteLayout";

const WorkshopsPage = () => {
  const { content, editMode } = useSiteContent();

  return (
    <SiteLayout>
      <PageHero
        eyebrow={<EditableText path="workshops.hero.eyebrow" as="span" multiline={false} />}
        title={<EditableText path="workshops.hero.title" as="span" multiline={false} />}
        description={<EditableText path="workshops.hero.description" as="span" />}
        aside={
          <div>
            <EditableText path="workshops.hero.asideText" as="p" className="text-sm leading-7 text-muted-foreground" />
          </div>
        }
      />

      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionIntro
            eyebrow={<EditableText path="workshops.tracksSection.eyebrow" as="span" multiline={false} />}
            title={<EditableText path="workshops.tracksSection.title" as="span" multiline={false} />}
            description={<EditableText path="workshops.tracksSection.description" as="span" />}
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {content.workshops.tracksSection.items.map((_, index) => (
              <EditableText
                key={index}
                path={`workshops.tracksSection.items.${index}`}
                as="div"
                className="rounded-[24px] border border-border bg-card px-6 py-5 text-sm leading-7 text-foreground/82 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/45 py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionIntro
            eyebrow={<EditableText path="workshops.audienceSection.eyebrow" as="span" multiline={false} />}
            title={<EditableText path="workshops.audienceSection.title" as="span" multiline={false} />}
            description={<EditableText path="workshops.audienceSection.description" as="span" />}
          />

          <div className="mt-12 flex flex-wrap gap-3">
            {content.workshops.audienceSection.audiences.map((_, index) => (
              <EditableText
                key={index}
                path={`workshops.audienceSection.audiences.${index}`}
                as="div"
                className="rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground/82 shadow-[var(--shadow-card)]"
              />
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {content.workshops.audienceSection.formats.map((_, index) => (
              <EditableText
                key={index}
                path={`workshops.audienceSection.formats.${index}`}
                as="div"
                className="rounded-[24px] border border-border bg-card px-6 py-5 text-sm leading-7 text-foreground/82 shadow-[var(--shadow-card)]"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <SectionIntro
            eyebrow={<EditableText path="workshops.finalCta.eyebrow" as="span" multiline={false} />}
            title={<EditableText path="workshops.finalCta.title" as="span" multiline={false} />}
            description={<EditableText path="workshops.finalCta.description" as="span" />}
            align="center"
          />

          <a
            href={content.workshops.finalCta.buttonHref}
            onClick={(event) => {
              if (editMode) {
                event.preventDefault();
              }
            }}
            className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/92"
          >
            <EditableText path="workshops.finalCta.buttonLabel" as="span" multiline={false} />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
};

export default WorkshopsPage;
