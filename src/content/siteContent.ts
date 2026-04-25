/*
 * Update site copy here for production.
 *
 * In local development you can use the on-page Edit Mode, then click
 * "Copy updated content JSON" and paste the result back into this file.
 *
 * Keeping visible copy in one place makes future editing and review easier.
 */
export const defaultSiteContent = {
  common: {
    brandName: "HealthTechMedics",
    email: "HealthTechMedics@gmail.com",
  },
  navigation: {
    items: [
      { label: "Services", to: "/services" },
      { label: "Workshops", to: "/workshops" },
      { label: "Lab", to: "/lab" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  footer: {
    description:
      "Clinician-led healthcare innovation studio working across advisory, education and internal product exploration.",
    copyright:
      "Clinician-led insight, healthcare innovation and implementation thinking.",
  },
  home: {
    hero: {
      eyebrow: "Clinician-led healthcare innovation studio",
      title: "Clinician-led insight, healthcare innovation and rapid product validation.",
      description:
        "HealthTechMedics works with healthcare organisations, founders and clinical teams while also developing internal healthcare technology concepts and MVPs grounded in real clinical experience.",
      primaryCtaLabel: "Explore Services",
      primaryCtaHref: "/services",
      secondaryCtaLabel: "View Lab Projects",
      secondaryCtaHref: "/lab",
    },
    pillars: [
      {
        title: "Advisory",
        text: "Clinical insight for healthcare products, workflows and implementation decisions.",
      },
      {
        title: "Education",
        text: "Workshops and practical healthcare innovation education for clinicians and teams.",
      },
      {
        title: "Lab / Ventures",
        text: "Internal healthcare product research, prototyping and MVP development.",
      },
    ],
    credibilityItems: [
      "Practising clinicians with acute and primary care perspective",
      "Advisory support for healthcare products and implementation questions",
      "Education and workshops for clinical and innovation teams",
      "Internal healthcare concepts and MVP exploration grounded in care delivery realities",
    ],
    servicePreviewSection: {
      eyebrow: "Service Areas",
      title: "Three connected ways of working",
      description:
        "HealthTechMedics combines external advisory work, practical education and internal product exploration to stay close to healthcare implementation problems.",
    },
    servicePreview: [
      {
        title: "Clinical product advisory",
        text: "Review of healthcare products, propositions and implementation plans through a clinician and service delivery lens.",
      },
      {
        title: "Workflow and adoption review",
        text: "Assessment of how a service or tool may land across clinical workflow, communication and operational pressure points.",
      },
      {
        title: "Clinician research and insight",
        text: "Structured clinician input to support product thinking, strategic questions and early-stage healthcare decisions.",
      },
    ],
    studioModel: {
      eyebrow: "Studio Model",
      title: "Building internally. Advising externally.",
      description:
        "We do not only advise on healthcare innovation. We actively research, prototype and test healthcare ideas internally to stay close to real implementation problems, workflow realities and patient experience challenges.",
      projects: [
        {
          tag: "MVP",
          title: "Result Sense",
          description:
            "Interactive clinician and patient-facing NHS pathway tools designed to make healthcare guidance more usable and actionable.",
          buttonLabel: "View Project",
          href: "/lab",
        },
        {
          tag: "Exploration",
          title: "Research Concept",
          description:
            "Early-stage clinician-led healthcare workflow and patient experience exploration.",
          buttonLabel: "View Project",
          href: "/lab",
        },
      ],
    },
    finalCta: {
      eyebrow: "Next Step",
      title: "Need clinician perspective on a healthcare product, implementation challenge, or internal concept?",
      description:
        "We work with healthcare organisations, innovation teams, founders and clinicians who want sharper thinking before important product or implementation decisions.",
      buttonLabel: "Contact HealthTechMedics",
      buttonHref: "/contact",
    },
  },
  services: {
    hero: {
      eyebrow: "Services",
      title: "Services for healthcare innovation, product decisions and implementation questions.",
      description:
        "HealthTechMedics combines clinician-led advisory, research support and healthcare innovation thinking for teams navigating healthcare products, workflows and adoption challenges.",
      asideTitle: "Engagements",
      asideParagraphs: [
        "Engagements are scoped according to the type of work, urgency, preparation required and deliverables. We can provide a tailored quote after an initial discussion.",
        "Indicative formats include advisory calls, written reviews, workshops, clinician insight projects and bespoke support.",
      ],
    },
    serviceGroups: [
      {
        title: "Clinical Product Advisory",
        description:
          "Clinician-led review of healthcare products, propositions and service models to help teams understand whether they feel credible and usable in practice.",
        outputsLabel: "Example outputs",
        outputs: ["Written product review", "Clinical credibility commentary", "Decision support memo"],
        engagementsLabel: "Engagement types",
        engagements: ["Advisory session", "Early product review", "Strategy discussion"],
      },
      {
        title: "Workflow & Adoption Review",
        description:
          "Focused assessment of workflow fit, communication challenges and adoption barriers that may affect rollout or use in live healthcare settings.",
        outputsLabel: "Example outputs",
        outputs: ["Workflow friction map", "Adoption risk summary", "Implementation commentary"],
        engagementsLabel: "Engagement types",
        engagements: ["Feature review", "Service redesign input", "Rollout planning discussion"],
      },
      {
        title: "Clinician Research & Insight",
        description:
          "Structured clinician and stakeholder input to support product development, strategic decisions and exploratory healthcare questions.",
        outputsLabel: "Example outputs",
        outputs: ["Interview synthesis", "Clinician insight summary", "Survey interpretation"],
        engagementsLabel: "Engagement types",
        engagements: ["Clinician interviews", "Small insight panels", "Exploratory research support"],
      },
      {
        title: "Healthcare AI & Digital Health Review",
        description:
          "Clinician-led review of AI-enabled workflows and digital health concepts, including communication, governance, trust and likely workflow fit.",
        outputsLabel: "Example outputs",
        outputs: ["AI use case review", "Risk and trust commentary", "Workflow suitability assessment"],
        engagementsLabel: "Engagement types",
        engagements: ["AI feature review", "Digital health proposition review", "Governance discussion support"],
      },
      {
        title: "Investor & Innovation Support",
        description:
          "Operational and clinical perspective for investors, innovation teams and early-stage decision-makers evaluating healthcare products and implementation risks.",
        outputsLabel: "Example outputs",
        outputs: ["Clinical diligence notes", "Implementation risk commentary", "Healthcare context summary"],
        engagementsLabel: "Engagement types",
        engagements: ["Investor diligence call", "Innovation team advisory", "Opportunity review"],
      },
    ],
    whyTeams: {
      eyebrow: "Credibility",
      title: "Why teams work with us",
      description:
        "HealthTechMedics brings practising clinician perspective into healthcare innovation questions that are often shaped by workflow, communication, implementation pressure and trust.",
      items: [
        "Practising clinician perspective",
        "Understanding of operational healthcare realities",
        "Clinician workflow awareness",
        "Implementation-focused thinking",
        "Ability to access clinician insight",
        "Healthcare communication understanding",
      ],
    },
    finalCta: {
      eyebrow: "Next Step",
      title: "Need a tailored scope?",
      description:
        "We can quote for advisory calls, written reviews, workshops, clinician insight projects and bespoke support after an initial discussion.",
      buttonLabel: "Request a consultation",
      buttonHref: "/contact",
    },
  },
  briefings: {
    section: {
      eyebrow: "Insights & Briefings",
      title: "Insights & Briefings",
      description:
        "Clinician-led briefing work exploring healthcare AI adoption, workflow pressures, implementation questions and practitioner perspectives.",
    },
    items: [
      {
        title: "AI Integration and Blood Test Workflows",
        description:
          "GP perspectives on blood test workload, opportunities for AI-supported triage and areas where clinical oversight remains essential.",
        imageSrc: "/gp%20insight.PNG",
        pdfSrc: "/healthtechmedics-ai-blood-test-workflows-briefing.pdf",
        alt: "HealthTechMedics insight briefing poster on GP perspectives about AI integration and blood test workflows.",
        viewLabel: "View briefing",
        downloadLabel: "Download PDF",
      },
      {
        title: "AI in the Clinic: Personal Use vs Clinical Training",
        description:
          "Insight snapshot exploring the gap between widespread AI use and limited formal clinical training in healthcare settings.",
        imageSrc: "/gap.PNG",
        pdfSrc: "/healthtechmedics-ai-clinician-survey-2026.pdf",
        alt: "HealthTechMedics insight briefing poster on AI use, professional training and trust in clinical practice.",
        viewLabel: "View briefing",
        downloadLabel: "Download PDF",
      },
    ],
  },
  workshops: {
    hero: {
      eyebrow: "Workshops",
      title: "Practical healthcare innovation education delivered by practising clinicians.",
      description:
        "HealthTechMedics delivers workshops for teams that want clearer understanding of healthcare AI, frontline workflows, product adoption and clinical implementation realities.",
      asideText:
        "Sessions are designed to be operationally useful for clinical, product, innovation and investment audiences rather than generic inspiration.",
    },
    tracksSection: {
      eyebrow: "Workshop Tracks",
      title: "Workshop tracks",
      description:
        "Content can be adapted for clinicians, innovation teams, startup founders, investor audiences and mixed healthcare groups.",
      items: [
        "AI in clinical environments",
        "Frontline workflow realities",
        "Healthcare product adoption",
        "Building healthcare products with clinical insight",
        "Clinician communication and trust",
        "Transitioning clinicians into health tech",
      ],
    },
    audienceSection: {
      eyebrow: "Audience",
      title: "Who these workshops are for",
      description:
        "Workshops are suited to teams that need a stronger understanding of clinical reality, implementation and healthcare technology use in practice.",
      audiences: [
        "Health tech startups",
        "Innovation teams",
        "NHS groups",
        "Clinicians exploring health tech",
        "Investors and advisory teams",
      ],
      formats: [
        "60 to 90 minute teaching session",
        "Half-day workshop",
        "Facilitated discussion",
        "Bespoke team session",
        "Conference or panel contribution",
      ],
    },
    finalCta: {
      eyebrow: "Discuss a Workshop",
      title: "Need a workshop for your team or event?",
      description:
        "We can scope sessions for product teams, clinical teams, innovation programmes, NHS groups and investor audiences. Fees depend on format, audience, preparation required and whether follow-up materials are included.",
      buttonLabel: "Discuss a workshop",
      buttonHref: "/contact",
    },
  },
  lab: {
    hero: {
      eyebrow: "Lab",
      title: "Researching, testing and building healthcare concepts grounded in clinical reality.",
      description:
        "Our lab allows us to explore healthcare problems through clinician-led research, workflow analysis, rapid prototyping and MVP development.",
      asideText:
        "The lab strengthens our advisory and education work by keeping us close to the practical realities of product design, communication and implementation in healthcare.",
    },
    activeProjectsSection: {
      eyebrow: "Active Projects",
      title: "Active projects",
      description:
        "A selective view of the internal concepts we are exploring. These are intended to show focus and capability rather than volume.",
      projects: [
        {
          tag: "Active Project",
          title: "Result Sense",
          description:
            "Interactive clinician and patient-facing NHS pathway tools designed to make healthcare guidance more usable, actionable and easier to navigate.",
        },
      ],
      studioCard: {
        tag: "Studio approach",
        title: "Why the lab exists",
        description:
          "Internal prototyping helps us stay close to healthcare product decisions, implementation constraints, communication challenges and the practical trade-offs teams face when building for live care settings.",
      },
    },
    researchAreasSection: {
      eyebrow: "Research Areas",
      title: "Research areas",
      description:
        "The lab focuses on healthcare problems where clinician perspective, workflow analysis and communication design have a direct effect on whether a concept is likely to work.",
      items: [
        "Clinical workflows",
        "Patient understanding",
        "Healthcare communication",
        "Implementation barriers",
        "Clinician burnout and operational systems",
        "Healthcare AI usability",
      ],
    },
    collaboration: {
      eyebrow: "Collaboration",
      title: "Discuss a collaboration",
      description:
        "We also collaborate with clinicians, founders and healthcare organisations exploring early-stage healthcare ideas and implementation challenges.",
      buttonLabel: "Discuss a collaboration",
      buttonHref: "/contact",
    },
  },
  about: {
    hero: {
      eyebrow: "About",
      title: "Founded by practising NHS clinicians.",
      description:
        "HealthTechMedics was built to bridge the gap between healthcare reality and healthcare innovation through advisory work, education and clinician-led product exploration.",
      asideEyebrow: "At a glance",
      asideItems: [
        "Acute and primary care perspective",
        "Founder-led advisory and education",
        "Internal healthcare innovation studio model",
      ],
    },
    foundersSection: {
      eyebrow: "Founders",
      title: "Two practising doctors with complementary perspectives",
      description:
        "HealthTechMedics combines acute care and primary care insight to help teams understand how healthcare products, education and implementation plans may land in practice.",
      founders: [
        {
          name: "Dr Lizzie",
          role: "A&E doctor",
          summary:
            "Co-founder of HealthTechMedics. Brings acute care perspective, frontline workflow understanding and interest in healthcare technology and clinical communication.",
        },
        {
          name: "Dr Ed",
          role: "GP",
          summary:
            "Co-founder of HealthTechMedics. Brings primary care perspective, patient journey understanding and insight into everyday clinical decision-making and service pressures.",
        },
      ],
    },
    whyBuiltSection: {
      eyebrow: "Why We Built HealthTechMedics",
      title: "Why we built HealthTechMedics",
      description:
        "HealthTechMedics was created to bring clearer clinical perspective into healthcare product thinking, implementation decisions and healthcare innovation work.",
      items: [
        {
          number: "01",
          title: "Product assumptions often miss healthcare reality",
          text: "Healthcare products are frequently built around assumptions that make sense on paper but break down when they meet clinical workflow, pressure and communication complexity.",
        },
        {
          number: "02",
          title: "Implementation failures are often predictable",
          text: "Many healthcare tools struggle not because the idea is poor, but because adoption, trust, responsibility and workflow fit were not understood early enough.",
        },
        {
          number: "03",
          title: "Clinician perspective is often brought in too late",
          text: "HealthTechMedics was built to help close that gap by bringing practising clinician perspective into innovation, product development and implementation thinking earlier.",
        },
      ],
    },
    howWeWorkSection: {
      eyebrow: "How We Work",
      title: "How we work",
      description:
        "HealthTechMedics is designed for organisations that want direct clinician input without unnecessary complexity.",
      items: [
        "Focused, founder-led input",
        "Honest, clinically grounded feedback",
        "Clear written summaries where useful",
        "Practical perspective without unnecessary complexity",
        "Suitable for advisory, workshops, diligence and research support",
      ],
    },
    finalCta: {
      eyebrow: "Contact",
      title: "Looking for clinician input on a healthcare innovation question?",
      description:
        "We support advisory work, education, internal concept discussions, product reviews and implementation-focused conversations.",
      buttonLabel: "Request a consultation",
      buttonHref: "/contact",
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Request a consultation.",
      description:
        "We work with organisations, founders, clinicians and healthcare teams exploring healthcare products, implementation, education and innovation challenges.",
      asideTitle: "Email",
      asideText:
        "Engagements are scoped according to the type of work, urgency, preparation required and deliverables. We can provide a tailored quote after an initial discussion.",
    },
    introSection: {
      eyebrow: "Enquiries",
      title: "Tell us what you need",
      description:
        "Contact HealthTechMedics to discuss advisory support, workshops, product review, research collaboration, lab discussions, or speaking opportunities. If helpful, you can also request our services and workshop brochure by email.",
    },
    form: {
      labels: {
        name: "Name",
        organisation: "Organisation",
        email: "Email",
        enquiryType: "Type of enquiry",
        description: "Brief description",
        timing: "Preferred timing",
      },
      descriptionPlaceholder: "",
      timingPlaceholder: "For example: this month, next quarter, or flexible",
      enquiryOptions: [
        "Advisory support",
        "Workshops",
        "Product review",
        "Research collaboration",
        "Lab / venture discussion",
        "Speaking engagement",
      ],
      helperText:
        "This form opens an email draft to HealthTechMedics. You can also contact us directly at",
      submitLabel: "Email HealthTechMedics",
    },
  },
  notFound: {
    eyebrow: "404",
    title: "Page not found",
    description:
      "The page you were looking for is not available. You can return to the homepage and continue browsing the site from there.",
    buttonLabel: "Return home",
  },
} as const;

export type SiteContent = typeof defaultSiteContent;
