import {
  ComponentPropsWithoutRef,
  ElementType,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
} from "react";
import { cn } from "@/lib/utils";
import { getContentValue, useSiteContent } from "@/components/content/SiteContentProvider";

interface EditableTextProps<T extends ElementType> {
  as?: T;
  className?: string;
  path: string;
  multiline?: boolean;
}

const stopEditingClick = (event: MouseEvent<HTMLElement>) => {
  event.stopPropagation();
};

const EditableText = <T extends ElementType = "span">({
  as,
  className,
  path,
  multiline = true,
}: EditableTextProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof EditableTextProps<T>>) => {
  const Component = (as || "span") as ElementType;
  const { content, editMode, updateContentAtPath } = useSiteContent();
  const ref = useRef<HTMLElement | null>(null);

  const value = String(getContentValue(content, path) ?? "");

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (ref.current.textContent !== value) {
      ref.current.textContent = value;
    }
  }, [value]);

  if (!editMode) {
    return <Component className={className}>{value}</Component>;
  }

  return (
    <Component
      ref={ref}
      className={cn(
        className,
        "cursor-text rounded-md outline outline-1 outline-primary/20 outline-offset-4 transition-colors hover:outline-primary/45 focus:outline-primary/60",
      )}
      contentEditable
      suppressContentEditableWarning
      spellCheck
      onClick={stopEditingClick}
      onMouseDown={stopEditingClick}
      onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
        if (!multiline && event.key === "Enter") {
          event.preventDefault();
          event.currentTarget.blur();
        }
      }}
      onBlur={(event: FocusEvent<HTMLElement>) => {
        updateContentAtPath(path, event.currentTarget.innerText);
      }}
    >
      {value}
    </Component>
  );
};

export default EditableText;
