import { ArrowRight, ExternalLink, ImageIcon } from "lucide-react";
import EditableText from "@/components/content/EditableText";
import { useSiteContent } from "@/components/content/SiteContentProvider";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import SiteLayout from "@/components/SiteLayout";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const withBase = (assetPath: string) =>
  assetPath.startsWith("/") ? `${import.meta.env.BASE_URL}${assetPath.slice(1)}` : assetPath;

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

      <section className="border-y border-border bg-secondary/35 py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionIntro
            eyebrow={<EditableText path="lab.prototypesSection.eyebrow" as="span" multiline={false} />}
            title={<EditableText path="lab.prototypesSection.title" as="span" multiline={false} />}
            description={<EditableText path="lab.prototypesSection.description" as="span" />}
          />

          <div className="mt-12 grid gap-8">
            {content.lab.prototypesSection.items.map((prototype, prototypeIndex) => (
              <article
                key={`${prototype.title}-${prototypeIndex}`}
                className="rounded-[28px] border border-border bg-background p-5 shadow-[var(--shadow-card)] sm:p-6 lg:grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-8 lg:rounded-[34px] lg:p-8"
              >
                <div>
                  <EditableText
                    path={`lab.prototypesSection.items.${prototypeIndex}.status`}
                    as="p"
                    multiline={false}
                    className="inline-flex rounded-full border border-border bg-secondary/75 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary/80"
                  />
                  <EditableText
                    path={`lab.prototypesSection.items.${prototypeIndex}.title`}
                    as="h3"
                    multiline={false}
                    className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl"
                  />
                  <EditableText
                    path={`lab.prototypesSection.items.${prototypeIndex}.description`}
                    as="p"
                    className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base"
                  />

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={prototype.href}
                      onClick={(event) => {
                        if (editMode) {
                          event.preventDefault();
                        }
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/92 hover:shadow-[var(--shadow-soft)]"
                    >
                      <EditableText
                        path={`lab.prototypesSection.items.${prototypeIndex}.viewMvpLabel`}
                        as="span"
                        multiline={false}
                      />
                      <ExternalLink className="h-4 w-4" />
                    </a>

                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/30 hover:text-primary"
                        >
                          <EditableText
                            path={`lab.prototypesSection.items.${prototypeIndex}.viewScreenshotsLabel`}
                            as="span"
                            multiline={false}
                          />
                          <ImageIcon className="h-4 w-4" />
                        </button>
                      </DialogTrigger>

                      <DialogContent className="max-w-6xl gap-0 overflow-hidden border-border p-0 sm:rounded-[28px]">
                        <DialogHeader className="border-b border-border bg-background px-6 py-5">
                          <DialogTitle className="text-xl tracking-[-0.02em]">
                            <EditableText
                              path={`lab.prototypesSection.items.${prototypeIndex}.title`}
                              as="span"
                              multiline={false}
                            />
                          </DialogTitle>
                          <DialogDescription className="mt-2 max-w-3xl text-sm leading-7">
                            <EditableText
                              path={`lab.prototypesSection.items.${prototypeIndex}.description`}
                              as="span"
                            />
                          </DialogDescription>
                        </DialogHeader>
                        <div className="max-h-[82vh] overflow-auto bg-secondary/35 p-4 sm:p-6">
                          <div className="grid gap-4">
                            {prototype.screenshots.map((shot, screenshotIndex) => (
                              <img
                                key={`${shot.src}-${screenshotIndex}`}
                                src={withBase(shot.src)}
                                alt={shot.alt}
                                className="w-full rounded-[20px] border border-border bg-background shadow-[var(--shadow-card)]"
                              />
                            ))}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <div className="mt-8 lg:mt-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="group block w-full text-left"
                      >
                        <div className="relative min-h-[260px] rounded-[26px] border border-border bg-[linear-gradient(180deg,rgba(246,249,251,0.95),rgba(255,255,255,0.98))] p-4 shadow-[var(--shadow-card)]">
                          <div className="relative mx-auto max-w-[560px]">
                            {prototype.screenshots.map((shot, screenshotIndex) => {
                              const rotations = ["-rotate-[3deg]", "rotate-[2deg]", "-rotate-[1deg]"];
                              const offsets = [
                                "relative z-30 mx-auto w-[88%]",
                                "relative -mt-28 ml-auto mr-0 z-20 w-[74%] sm:-mt-32",
                                "relative -mt-24 ml-0 mr-auto z-10 w-[68%] sm:-mt-28",
                              ];

                              return (
                                <img
                                  key={`${shot.src}-${screenshotIndex}`}
                                  src={withBase(shot.src)}
                                  alt={shot.alt}
                                  className={`${offsets[screenshotIndex] ?? "relative"} ${rotations[screenshotIndex] ?? ""} rounded-[18px] border border-border bg-background shadow-[var(--shadow-card)] transition-transform duration-300 group-hover:scale-[1.01]`}
                                />
                              );
                            })}
                          </div>
                        </div>
                      </button>
                    </DialogTrigger>

                    <DialogContent className="max-w-6xl gap-0 overflow-hidden border-border p-0 sm:rounded-[28px]">
                      <DialogHeader className="border-b border-border bg-background px-6 py-5">
                        <DialogTitle className="text-xl tracking-[-0.02em]">
                          <EditableText
                            path={`lab.prototypesSection.items.${prototypeIndex}.title`}
                            as="span"
                            multiline={false}
                          />
                        </DialogTitle>
                        <DialogDescription className="mt-2 max-w-3xl text-sm leading-7">
                          <EditableText
                            path={`lab.prototypesSection.items.${prototypeIndex}.description`}
                            as="span"
                          />
                        </DialogDescription>
                      </DialogHeader>
                      <div className="max-h-[82vh] overflow-auto bg-secondary/35 p-4 sm:p-6">
                        <div className="grid gap-4">
                          {prototype.screenshots.map((shot, screenshotIndex) => (
                            <img
                              key={`${shot.src}-${screenshotIndex}`}
                              src={withBase(shot.src)}
                              alt={shot.alt}
                              className="w-full rounded-[20px] border border-border bg-background shadow-[var(--shadow-card)]"
                            />
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <EditableText
                    path="lab.prototypesSection.caption"
                    as="p"
                    className="mt-4 text-xs uppercase tracking-[0.14em] text-muted-foreground"
                  />
                </div>
              </article>
            ))}
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
