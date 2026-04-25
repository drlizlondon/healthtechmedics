import EditableText from "@/components/content/EditableText";
import { useSiteContent } from "@/components/content/SiteContentProvider";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import SiteLayout from "@/components/SiteLayout";

const ContactPage = () => {
  const { content, editMode } = useSiteContent();

  return (
    <SiteLayout>
      <PageHero
        eyebrow={<EditableText path="contact.hero.eyebrow" as="span" multiline={false} />}
        title={<EditableText path="contact.hero.title" as="span" multiline={false} />}
        description={<EditableText path="contact.hero.description" as="span" />}
        aside={
          <div className="space-y-4">
            <EditableText
              path="contact.hero.asideTitle"
              as="p"
              multiline={false}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70"
            />
            <a
              href={`mailto:${content.common.email}`}
              onClick={(event) => {
                if (editMode) {
                  event.preventDefault();
                }
              }}
              className="text-lg font-medium text-foreground transition-colors hover:text-primary"
            >
              <EditableText path="common.email" as="span" multiline={false} />
            </a>
            <EditableText path="contact.hero.asideText" as="p" className="text-sm leading-7 text-muted-foreground" />
          </div>
        }
      />

      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-10">
            <SectionIntro
              eyebrow={<EditableText path="contact.introSection.eyebrow" as="span" multiline={false} />}
              title={<EditableText path="contact.introSection.title" as="span" multiline={false} />}
              description={<EditableText path="contact.introSection.description" as="span" />}
            />

            <ContactForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ContactPage;
