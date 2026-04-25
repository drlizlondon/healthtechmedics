import EditableText from "@/components/content/EditableText";
import { useSiteContent } from "@/components/content/SiteContentProvider";
import SiteLayout from "@/components/SiteLayout";

const NotFound = () => {
  const { editMode } = useSiteContent();

  return (
    <SiteLayout>
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
        <EditableText
          path="notFound.eyebrow"
          as="p"
          multiline={false}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70"
        />
        <EditableText
          path="notFound.title"
          as="h1"
          multiline={false}
          className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl"
        />
        <EditableText
          path="notFound.description"
          as="p"
          className="mt-5 text-lg leading-8 text-muted-foreground"
        />
        <a
          href="/"
          onClick={(event) => {
            if (editMode) {
              event.preventDefault();
            }
          }}
          className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/92"
        >
          <EditableText path="notFound.buttonLabel" as="span" multiline={false} />
        </a>
      </section>
    </SiteLayout>
  );
};

export default NotFound;
