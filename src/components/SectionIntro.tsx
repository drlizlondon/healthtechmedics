import { ReactNode } from "react";

interface SectionIntroProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

const SectionIntro = ({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionIntroProps) => (
  <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    {eyebrow ? (
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
        {eyebrow}
      </p>
    ) : null}
    <h2 className="text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl lg:text-4xl xl:text-5xl">
      {title}
    </h2>
    {description ? (
      <p className="mt-4 text-[15px] leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
        {description}
      </p>
    ) : null}
  </div>
);

export default SectionIntro;
