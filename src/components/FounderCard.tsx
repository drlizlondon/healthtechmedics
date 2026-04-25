import { ReactNode } from "react";

interface FounderCardProps {
  name: ReactNode;
  role: ReactNode;
  summary: ReactNode;
  detail?: ReactNode;
}

const FounderCard = ({ name, role, summary, detail }: FounderCardProps) => (
  <article className="rounded-[24px] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:rounded-[28px] sm:p-8">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/8 text-sm font-semibold text-primary">
      HT
    </div>
    <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-foreground sm:mt-6 sm:text-2xl">{name}</h3>
    <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-primary/70">{role}</p>
    <p className="mt-5 text-base leading-7 text-muted-foreground">{summary}</p>
    {detail ? <p className="mt-5 text-sm leading-7 text-muted-foreground">{detail}</p> : null}
  </article>
);

export default FounderCard;
