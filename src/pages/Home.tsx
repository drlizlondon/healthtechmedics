import { ArrowRight, FlaskConical, GraduationCap, ShieldCheck } from "lucide-react";
import EditableText from "@/components/content/EditableText";
import { useSiteContent } from "@/components/content/SiteContentProvider";
import SectionIntro from "@/components/SectionIntro";
import SiteLayout from "@/components/SiteLayout";

const HomePage = () => {
  const { content, editMode } = useSiteContent();

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border bg-[linear-gradient(180deg,#f8fbfd_0%,#fdfefe_48%,#ffffff_100%)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[24rem] sm:h-[30rem] bg-[radial-gradient(circle_at_top_right,rgba(38,84,122,0.08),transparent_38%),radial-gradient(circle_at_15%_20%,rgba(120,151,173,0.09),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:items-center lg:gap-10 lg:py-24">
          <div className="max-w-3xl">
            <EditableText
              path="home.hero.eyebrow"
              as="p"
              multiline={false}
              className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/72"
            />
            <EditableText
              path="home.hero.title"
              as="h1"
              className="mt-5 text-3xl font-semibold tracking-[-0.055em] text-foreground sm:mt-6 sm:text-5xl lg:text-[4.35rem] lg:leading-[1.02]"
            />
            <EditableText
              path="home.hero.description"
              as="p"
              className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8"
            />

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href={content.home.hero.primaryCtaHref}
                onClick={(event) => {
                  if (editMode) {
                    event.preventDefault();
                  }
                }}
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/92 hover:shadow-[var(--shadow-soft)] sm:w-auto"
              >
                <EditableText path="home.hero.primaryCtaLabel" as="span" multiline={false} />
              </a>
              <a
                href={content.home.hero.secondaryCtaHref}
                onClick={(event) => {
                  if (editMode) {
                    event.preventDefault();
                  }
                }}
                className="inline-flex w-full items-center justify-center rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/25 hover:text-primary sm:w-auto"
              >
                <EditableText path="home.hero.secondaryCtaLabel" as="span" multiline={false} />
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {content.home.pillars.map((pillar, index) => {
              const icons = [ShieldCheck, GraduationCap, FlaskConical];
              const Icon = icons[index];

              return (
                <article
                  key={`${pillar.title}-${index}`}
                  className="group rounded-[24px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,249,251,0.96))] p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] sm:rounded-[30px] sm:p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-secondary/65 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <EditableText
                    path={`home.pillars.${index}.title`}
                    as="p"
                    multiline={false}
                    className="mt-5 text-lg font-semibold tracking-[-0.02em] text-foreground"
                  />
                  <EditableText
                    path={`home.pillars.${index}.text`}
                    as="p"
                    className="mt-2 text-sm leading-7 text-muted-foreground"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/55">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 sm:py-6">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {content.home.credibilityItems.map((item, index) => (
              <EditableText
                key={`${item}-${index}`}
                path={`home.credibilityItems.${index}`}
                as="div"
                className="rounded-2xl border border-border/85 bg-background/82 px-4 py-4 text-sm leading-6 text-foreground/78 shadow-[var(--shadow-card)]"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionIntro
            eyebrow={<EditableText path="home.servicePreviewSection.eyebrow" as="span" multiline={false} />}
            title={<EditableText path="home.servicePreviewSection.title" as="span" multiline={false} />}
            description={<EditableText path="home.servicePreviewSection.description" as="span" />}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {content.home.servicePreview.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="rounded-[24px] border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] sm:rounded-[28px] sm:p-7"
              >
                <EditableText
                  path={`home.servicePreview.${index}.title`}
                  as="h3"
                  multiline={false}
                  className="text-xl font-semibold tracking-[-0.02em] text-foreground"
                />
                <EditableText
                  path={`home.servicePreview.${index}.text`}
                  as="p"
                  className="mt-4 text-sm leading-7 text-muted-foreground"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/45 py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionIntro
            eyebrow={<EditableText path="home.studioModel.eyebrow" as="span" multiline={false} />}
            title={<EditableText path="home.studioModel.title" as="span" multiline={false} />}
            description={<EditableText path="home.studioModel.description" as="span" />}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {content.home.studioModel.projects.map((project, index) => (
              <article
                key={`${project.title}-${index}`}
                className="rounded-[24px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,249,251,0.96))] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] sm:rounded-[30px] sm:p-8"
              >
                <EditableText
                  path={`home.studioModel.projects.${index}.tag`}
                  as="p"
                  multiline={false}
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/72"
                />
                <EditableText
                  path={`home.studioModel.projects.${index}.title`}
                  as="h3"
                  multiline={false}
                  className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-foreground"
                />
                <EditableText
                  path={`home.studioModel.projects.${index}.description`}
                  as="p"
                  className="mt-4 text-sm leading-7 text-muted-foreground"
                />
                <a
                  href={project.href}
                  onClick={(event) => {
                    if (editMode) {
                      event.preventDefault();
                    }
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/30 hover:text-primary"
                >
                  <EditableText
                    path={`home.studioModel.projects.${index}.buttonLabel`}
                    as="span"
                    multiline={false}
                  />
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <SectionIntro
            eyebrow={<EditableText path="home.finalCta.eyebrow" as="span" multiline={false} />}
            title={<EditableText path="home.finalCta.title" as="span" multiline={false} />}
            description={<EditableText path="home.finalCta.description" as="span" />}
            align="center"
          />

          <a
            href={content.home.finalCta.buttonHref}
            onClick={(event) => {
              if (editMode) {
                event.preventDefault();
              }
            }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/92 hover:shadow-[var(--shadow-soft)]"
          >
            <EditableText path="home.finalCta.buttonLabel" as="span" multiline={false} />
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
};

export default HomePage;
