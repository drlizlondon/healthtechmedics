import {
  ArrowRight,
  ClipboardCheck,
  FileText,
  LockKeyhole,
  ShieldCheck,
  Stethoscope,
  Workflow,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const findings = [
  "Many clinicians are already experimenting with AI tools in everyday life",
  "Clinical AI training has not kept pace with adoption",
  "Administrative clinical tasks remain a major burden",
  "Clinicians appear open to AI-assisted systems where safeguards and oversight are clear",
];

const strategicInsights = [
  {
    icon: Stethoscope,
    title: "Clinical adoption depends heavily on trust",
  },
  {
    icon: Workflow,
    title: "Workflow integration matters as much as technical capability",
  },
  {
    icon: ShieldCheck,
    title: "Governance and accountability messaging influence adoption",
  },
  {
    icon: ClipboardCheck,
    title: "Administrative burden remains a strong opportunity area for AI-assisted tools",
  },
];

const ProjectsPage = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Selected Public Projects"
      title="Selected Public Projects"
      description="Clinician-led insight work exploring healthcare workflows, AI adoption and real-world implementation challenges."
      aside={
        <div>
          <p className="text-sm leading-7 text-muted-foreground">
            HealthTechMedics combines frontline clinical experience with healthcare technology insight to explore how digital tools interact with real clinical environments, operational pressures and adoption challenges.
          </p>
        </div>
      }
    />

    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          eyebrow="Featured Project"
          title="AI in Clinical Practice, Clinician Insight Survey"
          description="Survey of 20 UK general practice clinicians exploring AI adoption, workflow integration and barriers to clinical implementation."
        />

        <div className="mt-14 overflow-hidden rounded-[34px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,249,251,0.96))] shadow-[var(--shadow-card-hover)]">
          <div className="grid gap-10 p-6 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:p-8">
            <div className="group relative overflow-hidden rounded-[28px] border border-border bg-secondary/40 shadow-[var(--shadow-card)]">
              <img
                src="/healthtechmedics-ai-clinician-survey-2026-preview.png"
                alt="Preview of the HealthTechMedics AI clinician survey report cover"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/88 via-background/28 to-transparent px-5 py-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/88 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur">
                  <FileText className="h-3.5 w-3.5 text-primary" />
                  PDF insight report
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/72">Public-facing work example</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
                  AI in Clinical Practice, Clinician Insight Survey
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                  Survey of 20 UK general practice clinicians exploring AI adoption, workflow integration and barriers to clinical implementation.
                </p>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  HealthTechMedics clinician insight survey, 2026. Responses from 20 UK general practice clinicians, including GP trainees and CCT-qualified GPs.
                </p>

                <div className="mt-8 rounded-[28px] border border-border bg-background/90 p-6 shadow-[var(--shadow-card)]">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/72">Key findings</h3>
                  <div className="mt-5 grid gap-3">
                    {findings.map((finding) => (
                      <div
                        key={finding}
                        className="rounded-2xl border border-border bg-secondary/35 px-4 py-3 text-sm leading-6 text-foreground/82"
                      >
                        {finding}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="rounded-full px-6 py-6 text-sm font-medium shadow-[var(--shadow-soft)]">
                      Read Insight Report
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl gap-0 overflow-hidden border-border p-0 sm:rounded-[28px]">
                    <DialogHeader className="border-b border-border bg-background px-6 py-5">
                      <DialogTitle className="text-xl tracking-[-0.02em]">
                        AI in Clinical Practice, Clinician Insight Survey
                      </DialogTitle>
                      <DialogDescription className="mt-2 max-w-3xl text-sm leading-7">
                        HealthTechMedics clinician insight survey, 2026. Responses from 20 UK general practice clinicians, including GP trainees and CCT-qualified GPs.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="h-[78vh] bg-secondary/35">
                      <iframe
                        src="/healthtechmedics-ai-clinician-survey-2026.pdf"
                        title="AI in Clinical Practice, Clinician Insight Survey PDF"
                        className="h-full w-full"
                      />
                    </div>
                  </DialogContent>
                </Dialog>

                <a
                  href="/healthtechmedics-ai-clinician-survey-2026.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/30 hover:text-primary"
                >
                  Open PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-border bg-secondary/45 py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[32px] border border-border bg-background/92 p-8 shadow-[var(--shadow-card-hover)] lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/72">Interpretation</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            What this suggests
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
            Clinicians do not appear fundamentally resistant to AI-assisted systems. Concerns appear to centre more around governance, accountability, workflow integration and patient safety than the technology itself.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          eyebrow="Strategic Insight"
          title="Why this matters for health technology teams"
          description="The practical implications are less about novelty and more about whether tools can be introduced in a way that clinicians can trust, understand, and use safely."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {strategicInsights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[28px] border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-secondary/55 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-foreground">{item.title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-[linear-gradient(180deg,rgba(246,249,251,0.7),rgba(255,255,255,1))] py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-[34px] border border-border bg-background/92 p-8 text-center shadow-[var(--shadow-card-hover)] lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/72">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            Building a healthcare product?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            Speak with practising clinicians early. We help teams better understand workflow realities, implementation risks and adoption barriers before rollout or scale-up.
          </p>
          <a
            href="mailto:HealthTechMedics@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/92 hover:shadow-[var(--shadow-soft)]"
          >
            Speak with HealthTechMedics
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <LockKeyhole className="h-3.5 w-3.5" />
            Discreet, clinician-led advisory perspective
          </p>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default ProjectsPage;
