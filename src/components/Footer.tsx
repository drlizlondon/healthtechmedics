import EditableText from "@/components/content/EditableText";
import { useSiteContent } from "@/components/content/SiteContentProvider";

const Footer = () => {
  const { content, editMode } = useSiteContent();

  return (
    <footer className="border-t border-border bg-secondary/55">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <EditableText
              path="common.brandName"
              as="p"
              multiline={false}
              className="text-lg font-semibold tracking-[-0.02em] text-foreground"
            />
            <EditableText
              path="footer.description"
              as="p"
              className="mt-3 text-sm leading-7 text-muted-foreground"
            />
            <a
              href={`mailto:${content.common.email}`}
              onClick={(event) => {
                if (editMode) {
                  event.preventDefault();
                }
              }}
              className="mt-3 inline-block text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              <EditableText path="common.email" as="span" multiline={false} />
            </a>
          </div>

          <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 sm:gap-x-10">
            {content.navigation.items.map((item, index) => (
              <a
                key={item.to}
                href={item.to}
                onClick={(event) => {
                  if (editMode) {
                    event.preventDefault();
                  }
                }}
                className="transition-colors hover:text-foreground"
              >
                <EditableText path={`navigation.items.${index}.label`} as="span" multiline={false} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          <EditableText
            path="footer.copyright"
            as="span"
            className=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
