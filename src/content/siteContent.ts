/*
 * Update site copy here for production.
 *
 * In local development you can use the on-page Edit Mode, then click
 * "Save to content file" to write changes back here automatically,
 * or use "Copy updated content JSON" if you prefer to paste manually.
 *
 * Keeping visible copy in one place makes future editing and review easier.
 */
export const defaultSiteContent = {
  "common": {
    "brandName": "HealthTechMedics",
    "email": "HealthTechMedics@gmail.com"
  },
  "navigation": {
    "items": [
      {
        "label": "Services",
        "to": "/services"
      },
      {
        "label": "Workshops",
        "to": "/workshops"
      },
      {
        "label": "Lab",
        "to": "/lab"
      },
      {
        "label": "About",
        "to": "/about"
      },
      {
        "label": "Contact",
        "to": "/contact"
      }
    ]
  },
  "footer": {
    "description": "Two practising NHS doctors. We review digital health products, and we build them.",
    "copyright": "© HealthTechMedics. Reviews are our own clinical judgement."
  },
  "home": {
    "hero": {
      "eyebrow": "Clinician-led product review",
      "title": "Why doesn't it exist already?",
      "description": "It's the question we ask about every digital health product we review, and it usually has the answer in it. Dr Lizzie Soyode and Dr Ed Cairn — two practising NHS doctors who review products the way the clinician who'd have to use one does.",
      "primaryCtaLabel": "Request a review",
      "primaryCtaHref": "/contact",
      "secondaryCtaLabel": "What we've built",
      "secondaryCtaHref": "/lab"
    },
    "method": {
      "eyebrow": "How we review",
      "title": "Every review answers five questions.",
      "questions": [
        "Who would actually use this?",
        "Who else has to be involved before they can?",
        "Who won't like it?",
        "Why doesn't it exist already?",
        "Who is responsible when it's wrong?"
      ],
      "footnote": "The fourth question usually contains the answer. Most things that look obviously missing from the NHS were tried before, or are held up by something that hasn't moved in fifteen years."
    },
    "pillars": [
      {
        "title": "Review",
        "text": "What a clinician will actually do with your product on a bad day."
      },
      {
        "title": "Teach",
        "text": "Sessions for teams who need to understand how the NHS really runs."
      },
      {
        "title": "Build",
        "text": "We build NHS pathway tools ourselves, so we aren't reviewing from the outside."
      }
    ],
    "credibilityItems": [
      "Adult and paediatric A&E, general practice, psychiatry, stroke, acute medicine, surgery",
      "We review the product, not the pitch deck",
      "We've built NHS pathway prototypes ourselves",
      "Findings in writing, not a workshop"
    ],
    "servicePreviewSection": {
      "eyebrow": "What we do",
      "title": "Three things, and the third one matters",
      "description": "We review products, we teach teams, and we build our own prototypes. The building is what keeps the reviewing honest."
    },
    "servicePreview": [
      {
        "title": "Product review",
        "text": "We read your product the way the clinician who'd have to use it does."
      },
      {
        "title": "Adoption review",
        "text": "Where your product gets abandoned, and who abandons it."
      },
      {
        "title": "Clinical diligence",
        "text": "For investors: what this hits when it meets a real service."
      }
    ],
    "studioModel": {
      "eyebrow": "The lab",
      "title": "We build the things we review.",
      "description": "Anyone can have an opinion about a product. We build NHS pathway tools ourselves, which is how we know what an opinion is worth.",
      "projects": [
        {
          "tag": "MVP",
          "title": "Result Doctor",
          "description": "Blood test results, explained well enough that a patient and their GP can both use them.",
          "buttonLabel": "View project",
          "href": "/lab"
        },
        {
          "tag": "Concept MVP",
          "title": "ELIZA",
          "description": "Where a referral is, and who has it. Built after too many phone calls asking exactly that.",
          "buttonLabel": "View project",
          "href": "/lab"
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Next step",
      "title": "Want a doctor to look at it before you build it?",
      "description": "Tell us what you're making and who it's for. We'll tell you whether we're the right people to review it.",
      "buttonLabel": "Request a review",
      "buttonHref": "/contact"
    }
  },
  "services": {
    "hero": {
      "eyebrow": "Services",
      "title": "What you can ask us for.",
      "description": "Five things, all of them a version of the same question: will a clinician actually use this?",
      "asideTitle": "Engagements",
      "asideParagraphs": [
        "Fixed price, agreed before we start.",
        "Calls, written reviews, workshops and clinician research. Ask, and we'll tell you if it isn't for us."
      ]
    },
    "serviceGroups": [
      {
        "title": "Product review",
        "description": "We read the product as the clinician who'd have to use it, and tell you where it stops being usable.",
        "outputsLabel": "Example outputs",
        "outputs": [
          "Written product review",
          "Clinical credibility commentary",
          "Decision support memo"
        ],
        "engagementsLabel": "Engagement types",
        "engagements": [
          "Advisory session",
          "Early product review",
          "Strategy discussion"
        ]
      },
      {
        "title": "Adoption review",
        "description": "Where the tool gets abandoned in week two, and who abandons it.",
        "outputsLabel": "Example outputs",
        "outputs": [
          "Workflow friction map",
          "Adoption risk summary",
          "Implementation commentary"
        ],
        "engagementsLabel": "Engagement types",
        "engagements": [
          "Feature review",
          "Service redesign input",
          "Rollout planning discussion"
        ]
      },
      {
        "title": "Clinician research",
        "description": "Structured input from other clinicians, for when you need more than our two opinions.",
        "outputsLabel": "Example outputs",
        "outputs": [
          "Interview synthesis",
          "Clinician insight summary",
          "Survey interpretation"
        ],
        "engagementsLabel": "Engagement types",
        "engagements": [
          "Clinician interviews",
          "Small insight panels",
          "Exploratory research support"
        ]
      },
      {
        "title": "AI feature review",
        "description": "Judged on who is accountable for the output, and what happens the day it's wrong.",
        "outputsLabel": "Example outputs",
        "outputs": [
          "AI use case review",
          "Risk and trust commentary",
          "Workflow suitability assessment"
        ],
        "engagementsLabel": "Engagement types",
        "engagements": [
          "AI feature review",
          "Digital health proposition review",
          "Governance discussion support"
        ]
      },
      {
        "title": "Clinical diligence",
        "description": "For investors: what this product hits when it meets a real service, before you commit.",
        "outputsLabel": "Example outputs",
        "outputs": [
          "Clinical diligence notes",
          "Implementation risk commentary",
          "Healthcare context summary"
        ],
        "engagementsLabel": "Engagement types",
        "engagements": [
          "Investor diligence call",
          "Innovation team advisory",
          "Opportunity review"
        ]
      }
    ],
    "whyTeams": {
      "eyebrow": "Credibility",
      "title": "Why teams work with us",
      "description": "We aren't consultants who used to be doctors. We're doctors.",
      "items": [
        "Both of us are still on shift",
        "We know what a bad day looks like",
        "We know where the extra clicks land",
        "We've watched rollouts fail from the inside",
        "We can ask other clinicians when we need to",
        "We explain results to patients for a living"
      ]
    },
    "finalCta": {
      "eyebrow": "Next Step",
      "title": "Not sure which one you need?",
      "description": "Tell us the product and who it's for. We'll tell you.",
      "buttonLabel": "Request a review",
      "buttonHref": "/contact"
    }
  },
  "briefings": {
    "section": {
      "eyebrow": "Briefings",
      "title": "What we've published",
      "description": "Our own work, commissioned by nobody."
    },
    "items": [
      {
        "title": "AI Integration and Blood Test Workflows",
        "description": "GP perspectives on blood test workload, opportunities for AI-supported triage and areas where clinical oversight remains essential.",
        "imageSrc": "/gp%20insight.PNG",
        "pdfSrc": "/healthtechmedics-ai-blood-test-workflows-briefing.pdf",
        "alt": "HealthTechMedics insight briefing poster on GP perspectives about AI integration and blood test workflows.",
        "viewLabel": "View briefing",
        "downloadLabel": "Download PDF"
      },
      {
        "title": "AI in the Clinic: Personal Use vs Clinical Training",
        "description": "Insight snapshot exploring the gap between widespread AI use and limited formal clinical training in healthcare settings.",
        "imageSrc": "/gap.PNG",
        "pdfSrc": "/healthtechmedics-ai-clinician-survey-2026.pdf",
        "alt": "HealthTechMedics insight briefing poster on AI use, professional training and trust in clinical practice.",
        "viewLabel": "View briefing",
        "downloadLabel": "Download PDF"
      }
    ]
  },
  "workshops": {
    "hero": {
      "eyebrow": "Workshops",
      "title": "Teaching, from two people still on shift.",
      "description": "Sessions for teams who need to understand how the NHS works before they build for it.",
      "asideText": "Useful for product, clinical and investment teams. Not inspiration."
    },
    "tracksSection": {
      "eyebrow": "Workshop tracks",
      "title": "Workshop tracks",
      "description": "Adapted for whoever is in the room.",
      "items": [
        "AI in clinical environments",
        "Frontline workflow realities",
        "Healthcare product adoption",
        "Building healthcare products with clinical insight",
        "Clinician communication and trust",
        "Transitioning clinicians into health tech"
      ]
    },
    "audienceSection": {
      "eyebrow": "Audience",
      "title": "Who these are for",
      "description": "Teams building for a service they haven't worked in.",
      "audiences": [
        "Health tech startups",
        "Innovation teams",
        "NHS groups",
        "Clinicians exploring health tech",
        "Investors and advisory teams"
      ],
      "formats": [
        "60 to 90 minute teaching session",
        "Half-day workshop",
        "Facilitated discussion",
        "Bespoke team session",
        "Conference or panel contribution"
      ]
    },
    "finalCta": {
      "eyebrow": "Discuss a Workshop",
      "title": "Need a session for your team?",
      "description": "Tell us the audience and how long you've got.",
      "buttonLabel": "Discuss a workshop",
      "buttonHref": "/contact"
    }
  },
  "lab": {
    "hero": {
      "eyebrow": "Lab",
      "title": "We build the things we'd want to use.",
      "description": "Prototypes we build to find out whether an idea survives a real pathway. Not products, and not for sale.",
      "asideText": "Building keeps us honest. It's harder to be glib about someone else's product once you've tried to ship your own."
    },
    "activeProjectsSection": {
      "eyebrow": "Active projects",
      "title": "What we're working on",
      "description": "Currently one, properly, rather than five badly.",
      "projects": [
        {
          "tag": "Active Project",
          "title": "Result Doctor",
          "description": "Interactive clinician and patient-facing NHS pathway tools designed to make healthcare guidance more usable, actionable and easier to navigate."
        }
      ],
      "studioCard": {
        "tag": "Why bother",
        "title": "Reviewing is easy",
        "description": "Building is where you find out what a workflow actually costs, and how many of your own assumptions were wrong."
      }
    },
    "prototypesSection": {
      "eyebrow": "Lab prototypes",
      "title": "Prototypes",
      "description": "Built against public NHS guidance, tested on ourselves first.",
      "caption": "Prototype screenshots. Demo only, no real patient data.",
      "items": [
        {
          "title": "Result Doctor",
          "status": "Live prototype",
          "description": "Interactive NHS pathway prototype designed to make blood test guidance easier to navigate for patients and clinicians.",
          "href": "",
          "viewMvpLabel": "View MVP",
          "viewScreenshotsLabel": "View screenshots",
          "screenshots": [
            {
              "src": "/homepage-dev.png",
              "alt": "Result Doctor homepage prototype screenshot."
            },
            {
              "src": "/pathways-dev.png",
              "alt": "Result Doctor pathways prototype screenshot."
            },
            {
              "src": "/lft-dev.png",
              "alt": "Result Doctor liver function pathway prototype screenshot."
            }
          ]
        },
        {
          "title": "ELIZA",
          "status": "Concept MVP",
          "description": "Acute referral visibility prototype showing how referrals move between GP and specialty teams, with clear status, redirects and audit trail.",
          "href": "https://drlizlondon.github.io/eliza/",
          "viewMvpLabel": "View MVP",
          "viewScreenshotsLabel": "View screenshots",
          "screenshots": [
            {
              "src": "/home.png",
              "alt": "ELIZA homepage prototype screenshot."
            },
            {
              "src": "/gp-dashboard.png",
              "alt": "ELIZA GP dashboard prototype screenshot."
            },
            {
              "src": "/gp-audit.png",
              "alt": "ELIZA GP audit trail prototype screenshot."
            }
          ]
        }
      ]
    },
    "researchAreasSection": {
      "eyebrow": "Research areas",
      "title": "What we keep coming back to",
      "description": "The places where good ideas quietly die.",
      "items": [
        "Clinical workflows",
        "Patient understanding",
        "Healthcare communication",
        "Implementation barriers",
        "Clinician burnout and operational systems",
        "Healthcare AI usability"
      ]
    },
    "collaboration": {
      "eyebrow": "Collaboration",
      "title": "Building something similar?",
      "description": "If you're working on this and want a second opinion, get in touch.",
      "buttonLabel": "Get in touch",
      "buttonHref": "/contact"
    }
  },
  "about": {
    "hero": {
      "eyebrow": "About",
      "title": "Two doctors who kept being asked the same question.",
      "description": "Founders and teams kept showing us products and asking whether they'd work. The honest answer usually depended on things nobody in the room had seen — the referral, the handover, the 3am phone call. So we started answering properly.",
      "asideEyebrow": "At a glance",
      "asideItems": [
        "Both still practising in the NHS",
        "You deal with us, not an associate",
        "We build our own prototypes"
      ]
    },
    "foundersSection": {
      "eyebrow": "Founders",
      "title": "Two practising NHS doctors",
      "description": "Between us: adult and paediatric A&E, psychiatry, stroke, acute medicine, surgery. We've seen the presentation before anyone sorted it, and the referral after it went wrong.",
      "founders": [
        {
          "name": "Dr Lizzie Soyode",
          "role": "Emergency medicine",
          "initials": "LS",
          "summary": "Works where nothing has been sorted yet and the decision still has to be made. Reviews products for what they cost a clinician mid-shift."
        },
        {
          "name": "Dr Ed Cairn",
          "role": "General practice",
          "initials": "EC",
          "summary": "Sees the same patient six weeks later, and everything that lands in the inbox when a pathway doesn't work. Reviews products for what happens after the handover."
        }
      ]
    },
    "whyBuiltSection": {
      "eyebrow": "Why we bother",
      "title": "Three things we kept seeing",
      "description": "None of this is complicated. It's just easier to see from inside the department than from outside it.",
      "items": [
        {
          "number": "01",
          "title": "The demo is not the shift",
          "text": "Products get designed against a version of the clinical day where nothing else is happening. There is no such day."
        },
        {
          "number": "02",
          "title": "Most of it was predictable",
          "text": "The tool rarely fails because the idea was bad. It fails because nobody asked who becomes responsible when it's wrong."
        },
        {
          "number": "03",
          "title": "Doctors get asked last",
          "text": "By the time a clinician sees it, the architecture is set and the money is spent. We'd rather be the awkward conversation in month one."
        }
      ]
    },
    "howWeWorkSection": {
      "eyebrow": "How we work",
      "title": "How we work",
      "description": "Small, direct, and finished when we said it would be.",
      "items": [
        "You get the two of us, not an associate",
        "We tell you what we'd tell a colleague",
        "Findings in writing",
        "No framework you have to learn",
        "Scope and price agreed before we start"
      ]
    },
    "finalCta": {
      "eyebrow": "Contact",
      "title": "Want us to look at something?",
      "description": "Send it over with a sentence on who it's for.",
      "buttonLabel": "Request a review",
      "buttonHref": "/contact"
    }
  },
  "contact": {
    "hero": {
      "eyebrow": "Contact",
      "title": "Tell us what you're building.",
      "description": "Products, pathways, or a pilot that isn't being used. If it isn't for us, we'll say so and tell you who is.",
      "asideTitle": "Email",
      "asideText": "Fixed price, agreed before we start."
    },
    "introSection": {
      "eyebrow": "Enquiries",
      "title": "What to send",
      "description": "A link or a deck, and one sentence on who is meant to use it. That's enough for us to tell you whether we can help."
    },
    "form": {
      "labels": {
        "name": "Name",
        "organisation": "Organisation",
        "email": "Email",
        "enquiryType": "Type of enquiry",
        "description": "Brief description",
        "timing": "Preferred timing"
      },
      "descriptionPlaceholder": "",
      "timingPlaceholder": "For example: this month, next quarter or flexible",
      "enquiryOptions": [
        "Advisory support",
        "Workshops",
        "Product review",
        "Research collaboration",
        "Lab / venture discussion",
        "Speaking engagement"
      ],
      "helperText": "This form opens an email draft to HealthTechMedics. You can also contact us directly at",
      "submitLabel": "Email HealthTechMedics"
    }
  },
  "notFound": {
    "eyebrow": "404",
    "title": "Page not found",
    "description": "The page you were looking for is not available. You can return to the homepage and continue browsing the site from there.",
    "buttonLabel": "Return home"
  }
} as const;

export type SiteContent = typeof defaultSiteContent;
