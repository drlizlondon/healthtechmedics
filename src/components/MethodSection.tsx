import EditableText from "@/components/content/EditableText";
import { useSiteContent } from "@/components/content/SiteContentProvider";

/**
 * Deliberately not another card grid. The questions are the strongest thing on
 * the site, so they get their own rhythm: numbered, large type, plenty of air.
 */
const MethodSection = () => {
  const { content } = useSiteContent();

  return (
    <section className="border-y border-border bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <EditableText
          path="home.method.eyebrow"
          as="p"
          multiline={false}
          className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/72"
        />
        <EditableText
          path="home.method.title"
          as="h2"
          multiline={false}
          className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl"
        />

        <ol className="mt-12 space-y-0">
          {content.home.method.questions.map((_, index) => (
            <li
              key={index}
              className="flex items-baseline gap-5 border-t border-border py-6 sm:gap-8 sm:py-7"
            >
              <span className="shrink-0 text-sm font-semibold tabular-nums text-accent sm:text-base">
                {String(index + 1).padStart(2, "0")}
              </span>
              <EditableText
                path={`home.method.questions.${index}`}
                as="p"
                className="text-xl font-medium tracking-[-0.02em] text-foreground sm:text-2xl"
              />
            </li>
          ))}
        </ol>

        <EditableText
          path="home.method.footnote"
          as="p"
          className="mt-10 border-t border-border pt-8 text-base leading-8 text-muted-foreground"
        />
      </div>
    </section>
  );
};

export default MethodSection;
