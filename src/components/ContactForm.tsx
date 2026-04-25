import { FormEvent, useEffect, useState } from "react";
import EditableText from "@/components/content/EditableText";
import { useSiteContent } from "@/components/content/SiteContentProvider";

const ContactForm = () => {
  const { content, editMode } = useSiteContent();
  const options = content.contact.form.enquiryOptions;

  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: "",
    enquiryType: options[0] ?? "",
    description: "",
    timing: "",
  });

  useEffect(() => {
    if (!options.includes(form.enquiryType)) {
      setForm((current) => ({ ...current, enquiryType: options[0] ?? "" }));
    }
  }, [form.enquiryType, options]);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `${content.common.brandName} enquiry: ${form.enquiryType}`;
    const body = [
      `${content.contact.form.labels.name}: ${form.name}`,
      `${content.contact.form.labels.organisation}: ${form.organisation}`,
      `${content.contact.form.labels.email}: ${form.email}`,
      `${content.contact.form.labels.enquiryType}: ${form.enquiryType}`,
      `${content.contact.form.labels.timing}: ${form.timing}`,
      "",
      `${content.contact.form.labels.description}:`,
      form.description,
    ].join("\n");

    window.location.href = `mailto:${content.common.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[24px] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:rounded-[30px] sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <EditableText path="contact.form.labels.name" as="span" multiline={false} className="mb-2 block text-sm font-medium text-foreground" />
          <input
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
            required
          />
        </label>
        <label className="block">
          <EditableText path="contact.form.labels.organisation" as="span" multiline={false} className="mb-2 block text-sm font-medium text-foreground" />
          <input
            type="text"
            value={form.organisation}
            onChange={(event) => updateField("organisation", event.target.value)}
            className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
          />
        </label>
        <label className="block">
          <EditableText path="contact.form.labels.email" as="span" multiline={false} className="mb-2 block text-sm font-medium text-foreground" />
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
            required
          />
        </label>
        <label className="block">
          <EditableText path="contact.form.labels.enquiryType" as="span" multiline={false} className="mb-2 block text-sm font-medium text-foreground" />
          <select
            value={form.enquiryType}
            onChange={(event) => updateField("enquiryType", event.target.value)}
            className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
          >
            {options.map((option, index) => (
              <option key={option} value={option}>
                {editMode ? option : option}
                {!editMode ? null : ""}
              </option>
            ))}
          </select>
          {editMode ? (
            <div className="mt-3 grid gap-2">
              {options.map((_, index) => (
                <EditableText
                  key={content.contact.form.enquiryOptions[index]}
                  path={`contact.form.enquiryOptions.${index}`}
                  as="div"
                  multiline={false}
                  className="rounded-xl border border-border bg-secondary/35 px-3 py-2 text-sm text-foreground/82"
                />
              ))}
            </div>
          ) : null}
        </label>
      </div>

      <label className="mt-5 block">
        <EditableText path="contact.form.labels.description" as="span" multiline={false} className="mb-2 block text-sm font-medium text-foreground" />
        <textarea
          value={form.description}
          onChange={(event) => updateField("description", event.target.value)}
          className="min-h-[140px] w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
          required
          placeholder={content.contact.form.descriptionPlaceholder}
        />
      </label>

      <label className="mt-5 block">
        <EditableText path="contact.form.labels.timing" as="span" multiline={false} className="mb-2 block text-sm font-medium text-foreground" />
        <input
          type="text"
          value={form.timing}
          onChange={(event) => updateField("timing", event.target.value)}
          className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
          placeholder={content.contact.form.timingPlaceholder}
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-7 text-muted-foreground">
          <EditableText path="contact.form.helperText" as="span" />
          {" "}
          <a
            href={`mailto:${content.common.email}`}
            onClick={(event) => {
              if (editMode) {
                event.preventDefault();
              }
            }}
            className="font-medium text-foreground hover:text-primary"
          >
            <EditableText path="common.email" as="span" multiline={false} />
          </a>
          .
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/92 hover:shadow-[var(--shadow-soft)]"
        >
          <EditableText path="contact.form.submitLabel" as="span" multiline={false} />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
