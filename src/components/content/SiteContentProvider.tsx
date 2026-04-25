import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { defaultSiteContent, SiteContent } from "@/content/siteContent";

const STORAGE_KEY = "healthtechmedics-site-content-draft";

interface SiteContentContextValue {
  content: SiteContent;
  editMode: boolean;
  isDev: boolean;
  setEditMode: (next: boolean) => void;
  updateContentAtPath: (path: string, value: string) => void;
  copyContentJson: () => Promise<boolean>;
}

const SiteContentContext = createContext<SiteContentContextValue | null>(null);

const cloneContent = (content: SiteContent): SiteContent =>
  JSON.parse(JSON.stringify(content)) as SiteContent;

const getPathSegments = (path: string) =>
  path.split(".").map((segment) => (/^\d+$/.test(segment) ? Number(segment) : segment));

const setValueAtPath = (content: SiteContent, path: string, value: string) => {
  const segments = getPathSegments(path);
  const next = cloneContent(content) as Record<string, unknown>;

  let cursor: Record<string, unknown> | unknown[] = next;

  for (let index = 0; index < segments.length - 1; index += 1) {
    const segment = segments[index];
    cursor = cursor[segment as keyof typeof cursor] as Record<string, unknown> | unknown[];
  }

  const lastSegment = segments[segments.length - 1];
  cursor[lastSegment as keyof typeof cursor] = value;

  return next as SiteContent;
};

export const getContentValue = (content: SiteContent, path: string) => {
  const segments = getPathSegments(path);
  let cursor: unknown = content;

  for (const segment of segments) {
    cursor = (cursor as Record<string, unknown> | unknown[])[segment as keyof typeof cursor];
  }

  return cursor;
};

export const SiteContentProvider = ({ children }: { children: ReactNode }) => {
  const isDev = import.meta.env.DEV;
  const [editMode, setEditMode] = useState(false);
  const [content, setContent] = useState<SiteContent>(() => {
    if (!isDev) {
      return cloneContent(defaultSiteContent);
    }

    try {
      const savedDraft = window.localStorage.getItem(STORAGE_KEY);
      if (savedDraft) {
        return JSON.parse(savedDraft) as SiteContent;
      }
    } catch {
      return cloneContent(defaultSiteContent);
    }

    return cloneContent(defaultSiteContent);
  });

  useEffect(() => {
    if (!isDev) {
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch {
      /* noop: local editing should still work without persistence */
    }
  }, [content, isDev]);

  const value = useMemo<SiteContentContextValue>(
    () => ({
      content,
      editMode: isDev ? editMode : false,
      isDev,
      setEditMode,
      updateContentAtPath: (path, nextValue) => {
        setContent((current) => setValueAtPath(current, path, nextValue));
      },
      copyContentJson: async () => {
        try {
          await navigator.clipboard.writeText(JSON.stringify(content, null, 2));
          return true;
        } catch {
          return false;
        }
      },
    }),
    [content, editMode, isDev],
  );

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
};

export const useSiteContent = () => {
  const context = useContext(SiteContentContext);

  if (!context) {
    throw new Error("useSiteContent must be used within SiteContentProvider");
  }

  return context;
};
