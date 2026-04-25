import { useState } from "react";
import { Copy, PencilLine } from "lucide-react";
import { useSiteContent } from "@/components/content/SiteContentProvider";

const EditModePanel = () => {
  const { isDev, editMode, setEditMode, copyContentJson } = useSiteContent();
  const [copied, setCopied] = useState(false);

  if (!isDev) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 z-[70] w-[min(320px,calc(100vw-2rem))] rounded-[24px] border border-border bg-background/95 p-4 shadow-[var(--shadow-card-hover)] backdrop-blur-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/72">Local Edit Mode</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Toggle inline editing in development, then copy the updated JSON back into `src/content/siteContent.ts`.
          </p>
        </div>
        <PencilLine className="mt-1 h-4 w-4 shrink-0 text-primary" />
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setEditMode(!editMode)}
          className={`inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
            editMode ? "bg-primary text-primary-foreground" : "border border-border bg-background text-foreground hover:border-primary/30"
          }`}
        >
          {editMode ? "Edit Mode On" : "Edit Mode Off"}
        </button>
        <button
          type="button"
          onClick={async () => {
            const success = await copyContentJson();
            if (success) {
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1800);
            }
          }}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
        >
          <Copy className="h-4 w-4" />
          {copied ? "Copied" : "Copy updated content JSON"}
        </button>
      </div>
    </div>
  );
};

export default EditModePanel;
