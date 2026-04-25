import EditableText from "@/components/content/EditableText";
import { useSiteContent } from "@/components/content/SiteContentProvider";
import FounderCard from "@/components/FounderCard";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import SiteLayout from "@/components/SiteLayout";

const AboutPage = () => {
  const { content, editMode } = useSiteContent();

  return (
    <SiteLayout>
      <PageHero
        eyebrow={<EditableText path="about.hero.eyebrow" as="span" multiline={false} />}
        title={<EditableText path="about.hero.title" as="span" multiline={false} />}
        description={<EditableText path="about.hero.description" as="span" />}
        aside={
          <div className="space-y-4">
            <EditableText
              path="about.hero.asideEyebrow"
              as="p"
              multiline={false}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70"
            />
            {content.about.hero.asideItems.map((_, index) => (
              <EditableText
                key={index}
                path={`about.hero.asideItems.${index}`}
                as="div"
                className="rounded-2xl border border-border bg-secondary/70 p-4 text-sm font-medium text-foreground"
              />
            ))}
          </div>
        }
      />

      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionIntro
            eyebrow={<EditableText path="about.foundersSection.eyebrow" as="span" multiline={false} />}
            title={<EditableText path="about.foundersSection.title" as="span" multiline={false} />}
            description={<EditableText path="about.foundersSection.description" as="span" />}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {content.about.foundersSection.founders.map((founder, index) => (
              <FounderCard
                key={`${founder.name}-${index}`}
                name={<EditableText path={`about.foundersSection.founders.${index}.name`} as="span" multiline={false} />}
                role={<EditableText path={`about.foundersSection.founders.${index}.role`} as="span" multiline={false} />}
                summary={<EditableText path={`about.foundersSection.founders.${index}.summary`} as="span" />}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50 py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionIntro
            eyebrow={<EditableText path="about.whyBuiltSection.eyebrow" as="span" multiline={false} />}
            title={<EditableText path="about.whyBuiltSection.title" as="span" multiline={false} />}
            description={<EditableText path="about.whyBuiltSection.description" as="span" />}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {content.about.whyBuiltSection.items.map((_, index) => (
              <article key={index} className="rounded-[24px] border border-border bg-background p-6 shadow-[var(--shadow-card)] sm:rounded-[28px] sm:p-8">
                <EditableText
                  path={`about.whyBuiltSection.items.${index}.number`}
                  as="p"
                  multiline={false}
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/72"
                />
                <EditableText
                  path={`about.whyBuiltSection.items.${index}.title`}
                  as="h3"
                  multiline={false}
                  className="mt-4 text-xl font-semibold tracking-[-0.02em] text-foreground"
                />
                <EditableText
                  path={`about.whyBuiltSection.items.${index}.text`}
                  as="p"
                  className="mt-4 text-sm leading-7 text-muted-foreground"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionIntro
            eyebrow={<EditableText path="about.howWeWorkSection.eyebrow" as="span" multiline={false} />}
            title={<EditableText path="about.howWeWorkSection.title" as="span" multiline={false} />}
            description={<EditableText path="about.howWeWorkSection.description" as="span" />}
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {content.about.howWeWorkSection.items.map((_, index) => (
              <EditableText
                key={index}
                path={`about.howWeWorkSection.items.${index}`}
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
            eyebrow={<EditableText path="about.finalCta.eyebrow" as="span" multiline={false} />}
            title={<EditableText path="about.finalCta.title" as="span" multiline={false} />}
            description={<EditableText path="about.finalCta.description" as="span" />}
            align="center"
          />

          <a
            href={content.about.finalCta.buttonHref}
            onClick={(event) => {
              if (editMode) {
                event.preventDefault();
              }
            }}
            className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/92"
          >
            <EditableText path="about.finalCta.buttonLabel" as="span" multiline={false} />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
};

export default AboutPage;
