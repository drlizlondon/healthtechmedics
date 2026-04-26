import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  aside?: ReactNode;
}

const PageHero = ({ eyebrow, title, description, aside }: PageHeroProps) => (
  <section className="border-b border-border bg-secondary/55">
    <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:items-center lg:gap-10 lg:py-24">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl lg:text-[3.9rem] lg:leading-[1.02]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">{description}</p>
      </div>
      {aside ? (
        <div className="rounded-[24px] border border-border bg-background p-5 shadow-[var(--shadow-card)] sm:rounded-[28px] sm:p-7">
          {aside}
        </div>
      ) : null}
    </div>
  </section>
);

export default PageHero;
