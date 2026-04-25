import { Download, Eye } from "lucide-react";
import EditableText from "@/components/content/EditableText";
import { useSiteContent } from "@/components/content/SiteContentProvider";
import SectionIntro from "@/components/SectionIntro";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const InsightBriefingsSection = () => {
  const { content, editMode } = useSiteContent();

  return (
    <section className="border-y border-border bg-secondary/45 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionIntro
          eyebrow={<EditableText path="briefings.section.eyebrow" as="span" multiline={false} />}
          title={<EditableText path="briefings.section.title" as="span" multiline={false} />}
          description={<EditableText path="briefings.section.description" as="span" />}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {content.briefings.items.map((briefing, index) => (
            <article
              key={`${briefing.title}-${index}`}
              className="overflow-hidden rounded-[24px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,249,251,0.96))] shadow-[var(--shadow-card)] sm:rounded-[30px]"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group block w-full overflow-hidden border-b border-border bg-secondary/25 text-left"
                    aria-label={`View ${briefing.title}`}
                  >
                    <img
                      src={briefing.imageSrc}
                      alt={briefing.alt}
                      className="h-[280px] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.015] sm:h-[360px] lg:h-[420px]"
                    />
                  </button>
                </DialogTrigger>

                <DialogContent className="max-w-5xl gap-0 overflow-hidden border-border p-0 sm:rounded-[28px]">
                  <DialogHeader className="border-b border-border bg-background px-6 py-5">
                    <DialogTitle className="text-xl tracking-[-0.02em]">
                      <EditableText path={`briefings.items.${index}.title`} as="span" multiline={false} />
                    </DialogTitle>
                    <DialogDescription className="mt-2 max-w-3xl text-sm leading-7">
                      <EditableText path={`briefings.items.${index}.description`} as="span" />
                    </DialogDescription>
                  </DialogHeader>
                  <div className="max-h-[82vh] overflow-auto bg-secondary/35 p-4 sm:p-6">
                    <img
                      src={briefing.imageSrc}
                      alt={briefing.alt}
                      className="mx-auto h-auto w-full rounded-[20px] border border-border bg-background shadow-[var(--shadow-card)]"
                    />
                  </div>
                </DialogContent>
              </Dialog>

              <div className="p-5 sm:p-6 lg:p-7">
                <EditableText
                  path={`briefings.items.${index}.title`}
                  as="h3"
                  multiline={false}
                  className="text-xl font-semibold tracking-[-0.03em] text-foreground sm:text-2xl"
                />
                <EditableText
                  path={`briefings.items.${index}.description`}
                  as="p"
                  className="mt-4 text-sm leading-7 text-muted-foreground"
                />

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/92 hover:shadow-[var(--shadow-soft)]"
                      >
                        <Eye className="h-4 w-4" />
                        <EditableText path={`briefings.items.${index}.viewLabel`} as="span" multiline={false} />
                      </button>
                    </DialogTrigger>

                    <DialogContent className="max-w-5xl gap-0 overflow-hidden border-border p-0 sm:rounded-[28px]">
                      <DialogHeader className="border-b border-border bg-background px-6 py-5">
                        <DialogTitle className="text-xl tracking-[-0.02em]">
                          <EditableText path={`briefings.items.${index}.title`} as="span" multiline={false} />
                        </DialogTitle>
                        <DialogDescription className="mt-2 max-w-3xl text-sm leading-7">
                          <EditableText path={`briefings.items.${index}.description`} as="span" />
                        </DialogDescription>
                      </DialogHeader>
                      <div className="max-h-[82vh] overflow-auto bg-secondary/35 p-4 sm:p-6">
                        <img
                          src={briefing.imageSrc}
                          alt={briefing.alt}
                          className="mx-auto h-auto w-full rounded-[20px] border border-border bg-background shadow-[var(--shadow-card)]"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>

                  <a
                    href={briefing.pdfSrc}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => {
                      if (editMode) {
                        event.preventDefault();
                      }
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/30 hover:text-primary"
                  >
                    <Download className="h-4 w-4" />
                    <EditableText path={`briefings.items.${index}.downloadLabel`} as="span" multiline={false} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightBriefingsSection;
