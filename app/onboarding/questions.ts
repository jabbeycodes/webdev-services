export type FieldType =
  | "text"
  | "email"
  | "tel"
  | "url"
  | "textarea"
  | "select"
  | "checkbox-group";

export interface Question {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  helpText?: string;
  /** Visual sub-heading inside a section (e.g. "Contact details") */
  group?: string;
}

/** Monthly IT + marketing retainer — keep in sync with RetainerShowcase on pricing page */
export const RETAINER = {
  price: 1399,
  title: "IT management, tech support & marketing retainer",
  badge: "Monthly retainer",
  priceNote:
    "One flat monthly fee — replaces an in-house IT manager, break-fix consultants, and a social/marketing agency. Cancel anytime.",
  valueHeadline:
    "What most businesses spend $90,000–$140,000/year hiring separately — for $16,788/year.",
  savingsNote:
    "A single IT manager runs $60k–$100k plus benefits. Add a social agency at $1.5k–$3k/mo and you're past six figures before marketing admin. The retainer bundles all three roles.",
  roiNote:
    "One security incident, ransomware event, or full day of downtime often costs more than a year on this plan. Proactive support pays for itself.",
  perDayNote: "Less than $47/day for a full ops team on call.",
  includes: [
    "Dedicated IT & tech support (email, cloud, devices, SaaS, security)",
    "Team onboarding & admin setup for new hires",
    "Ongoing social media management & content",
    "Digital marketing, SEO support & monthly reporting",
    "Website, hosting & domain management",
    "24-hour priority response — no PTO, no recruiting, no benefits overhead",
  ],
  comparisons: [
    { label: "In-house IT manager (with benefits)", value: "$75k–$130k/yr" },
    { label: "Social media agency", value: "$18k–$36k/yr" },
    { label: "MSP + marketing contractor", value: "$24k–$60k/yr" },
    { label: "Hiring all three separately", value: "$90k–$140k+/yr" },
  ],
} as const;

export function formatRetainerPrice(): string {
  return `$${RETAINER.price.toLocaleString("en-US")}`;
}

export function isRetainerInterested(
  values: Record<string, string | string[] | undefined>
): boolean {
  const answer = values.retainerInterest?.toString() ?? "";
  return answer.startsWith("Yes —") || answer.startsWith("Maybe");
}

/** Social media account creation add-on — keep in sync with SocialAddonShowcase on pricing page */
export const SOCIAL_ADDON = {
  price: 250,
  retainerPrice: RETAINER.price,
  title: "Social account creation + 1 month management",
  badge: "Optional add-on",
  priceNote:
    "One-time $250 fee added to your website project — not included in build packages or the monthly retainer.",
  includes: [
    "Business account creation on your chosen platforms",
    "Profile setup — bio, links, branding, highlights",
    "1 full month of posting, scheduling & content management",
    "Captions, content ideas & creative direction",
    "Graphics, carousels & short-form video",
    "Community management & replies",
  ],
  afterMonthNote: `After month 1, continue with the ${formatRetainerPrice()}/mo retainer for ongoing social & marketing — or manage accounts yourself.`,
} as const;

export function isSocialAddonSelected(values: Record<string, string | string[] | undefined>): boolean {
  const answer = values.socialPageSetup?.toString() ?? "";
  return answer.startsWith("Yes —");
}

/** Custom business email on your domain — add-on */
export const EMAIL_ADDON = {
  price: 50,
  title: "Custom business email setup",
  badge: "Optional add-on",
  priceNote:
    "One-time $50 fee added to your website project — not included in build packages or the monthly retainer.",
  includes: [
    "Professional email on your domain (e.g. hello@yourbrand.com)",
    "Mailbox setup on Google Workspace, Microsoft 365, Zoho, or your host",
    "DNS configuration so email sends & receives correctly",
    "Tested and handed off before launch",
  ],
} as const;

export function isEmailAddonSelected(values: Record<string, string | string[] | undefined>): boolean {
  const answer = values.businessEmailAddon?.toString() ?? "";
  return answer.startsWith("Yes —");
}

export interface OnboardingSection {
  id: string;
  title: string;
  description: string;
  /** Friendly note shown at the top of a section (e.g. all questions optional) */
  sectionNote?: string;
  questions: Question[];
}

export const ONBOARDING_SECTIONS: OnboardingSection[] = [
  {
    id: "basics",
    title: "Business basics",
    description: "Who you are, what you do, and how to reach you. Only name, business name, and email are required.",
    questions: [
      {
        id: "businessName",
        label: "Business or brand name",
        type: "text",
        required: true,
        group: "Your business",
      },
      {
        id: "tagline",
        label: "Tagline or one-line description",
        type: "text",
        placeholder: "e.g. Premium web & app development for founders",
        group: "Your business",
      },
      {
        id: "industry",
        label: "Industry / niche",
        type: "text",
        placeholder: "e.g. fitness coaching, healthcare clinic, B2B SaaS",
        group: "Your business",
      },
      {
        id: "businessStage",
        label: "Where is your business today?",
        type: "select",
        options: [
          "Pre-launch — validating the idea",
          "Early stage — first customers, need credibility",
          "Growing — need better leads or conversions",
          "Established — redesigning or expanding",
          "Rebrand — new name, look, or positioning",
        ],
        group: "Your business",
      },
      {
        id: "location",
        label: "Business location & markets served",
        type: "textarea",
        placeholder: "City/country you operate from, and whether you serve local, national, or global customers.",
        group: "Your business",
      },
      {
        id: "contactName",
        label: "Your name",
        type: "text",
        required: true,
        group: "Contact details",
      },
      {
        id: "role",
        label: "Your role",
        type: "text",
        placeholder: "Founder, Marketing lead, Operations manager…",
        group: "Contact details",
      },
      {
        id: "email",
        label: "Email",
        type: "email",
        required: true,
        group: "Contact details",
      },
      {
        id: "phone",
        label: "Phone / WhatsApp",
        type: "tel",
        placeholder: "+1 (555) 000-0000",
        group: "Contact details",
      },
      {
        id: "preferredContact",
        label: "Preferred way to communicate during the project",
        type: "checkbox-group",
        options: ["Email", "Phone / video call", "WhatsApp", "Slack", "Text message"],
        group: "Contact details",
      },
      {
        id: "existingSite",
        label: "Current website (if any)",
        type: "url",
        placeholder: "https://",
        group: "Current presence",
      },
      {
        id: "currentSiteProblems",
        label: "What's wrong with your current site (if you have one)?",
        type: "textarea",
        placeholder: "Slow, outdated design, no mobile traffic, doesn't convert, hard to update…",
        group: "Current presence",
      },
      {
        id: "socialPresence",
        label: "Active social profiles today",
        type: "checkbox-group",
        options: [
          "Instagram",
          "Facebook",
          "LinkedIn",
          "TikTok",
          "X (Twitter)",
          "YouTube",
          "None yet",
        ],
        group: "Current presence",
      },
    ],
  },
  {
    id: "goals",
    title: "Project goals",
    description: "What we're building, why it matters, and how we'll know it worked.",
    questions: [
      {
        id: "projectType",
        label: "What do you need built?",
        type: "select",
        options: [
          "Single landing page",
          "Multi-page website",
          "Multi-page marketing / brochure site",
          "E-commerce store",
          "Web app / SaaS platform",
          "Mobile app (iOS & Android)",
          "Website + mobile app",
          "Website redesign",
          "Not sure — need guidance",
        ],
      },
      {
        id: "projectSummary",
        label: "Describe the project in your own words",
        type: "textarea",
        placeholder: "What problem should this solve? Who is it for? What should it do day-to-day?",
      },
      {
        id: "primaryGoal",
        label: "Primary goal for this site or app",
        type: "select",
        options: [
          "Generate leads / inquiries",
          "Sell products or services online",
          "Book appointments or consultations",
          "Build brand awareness & trust",
          "Showcase portfolio / case studies",
          "Onboard users to a product",
          "Collect email subscribers",
          "Support existing customers",
          "Other",
        ],
      },
      {
        id: "secondaryGoals",
        label: "Secondary goals (if any)",
        type: "checkbox-group",
        options: [
          "Improve SEO / Google visibility",
          "Reduce support requests",
          "Automate booking or scheduling",
          "Display pricing transparently",
          "Recruit talent",
          "Attract investors or partners",
          "Publish content / blog regularly",
          "Integrate with existing tools",
        ],
      },
      {
        id: "successMetrics",
        label: "How will you measure success in the first 90 days?",
        type: "textarea",
        placeholder: "e.g. 30 form submissions/month, 10 booked calls, $3k in online sales, 500 app downloads…",
        helpText: "Specific numbers help us design for conversion, not just aesthetics.",
      },
      {
        id: "primaryCTA",
        label: "Main action you want visitors to take",
        type: "select",
        options: [
          "Fill out a contact form",
          "Book a call / appointment",
          "Buy or checkout",
          "Sign up / create account",
          "Download an app",
          "Subscribe to newsletter",
          "Call or WhatsApp directly",
          "Request a quote",
        ],
      },
      {
        id: "features",
        label: "Must-have features",
        type: "checkbox-group",
        options: [
          "Contact form",
          "Online booking / scheduling",
          "Blog / news / resources",
          "E-commerce / payments",
          "User accounts / login",
          "Admin dashboard",
          "Photo or video gallery",
          "Testimonials / reviews",
          "Case studies / portfolio",
          "FAQ section",
          "Live chat",
          "Newsletter signup",
          "Document downloads (PDFs)",
          "Multi-language support",
          "Member portal / gated content",
          "Search functionality",
          "Maps / location finder",
        ],
      },
      {
        id: "niceToHave",
        label: "Nice-to-have features (phase 2 or later)",
        type: "textarea",
        placeholder: "Features you'd love but can launch without.",
      },
    ],
  },
  {
    id: "audience",
    title: "Audience & competition",
    description: "Optional context that helps us shape messaging and positioning.",
    sectionNote:
      "Nothing here is required — skip any question you don't have an answer for yet. A rough idea is enough; we'll fill in the rest together on our first call.",
    questions: [
      {
        id: "targetAudience",
        label: "Who do you want to reach?",
        type: "textarea",
        placeholder:
          "Rough idea is fine — e.g. small business owners, busy parents, healthcare professionals…",
      },
      {
        id: "customerProblems",
        label: "What problems do your customers usually have?",
        type: "textarea",
        placeholder: "What are they struggling with before they find you?",
      },
      {
        id: "whyChooseYou",
        label: "What makes you different?",
        type: "textarea",
        placeholder: "Experience, results, speed, niche focus, guarantee — whatever comes to mind.",
      },
      {
        id: "competitors",
        label: "Anyone you'd consider a competitor?",
        type: "textarea",
        placeholder: "Names or website URLs. Only if you already know who you're compared to.",
      },
      {
        id: "inspiration",
        label: "Sites or apps you like the look of",
        type: "textarea",
        placeholder: "Paste a few URLs if you have them. Note what you like — layout, colors, tone, etc.",
      },
      {
        id: "antiInspiration",
        label: "Anything you definitely don't want",
        type: "textarea",
        placeholder: "Looks, layouts, or vibes to avoid — only if you have a strong preference.",
      },
      {
        id: "objections",
        label: "Reasons people hesitate before buying from you",
        type: "textarea",
        placeholder: "e.g. price, trust, timing — and how you usually address it, if you know.",
      },
    ],
  },
  {
    id: "brand",
    title: "Brand & design",
    description: "Visual identity, personality, and creative direction.",
    questions: [
      {
        id: "logoStatus",
        label: "Logo status",
        type: "select",
        options: [
          "I have final logo files (SVG/PNG)",
          "I have a logo but need refinements",
          "I need a logo designed from scratch",
          "I only have a rough idea / sketch",
        ],
      },
      {
        id: "brandColors",
        label: "Brand colors",
        type: "text",
        placeholder: "Hex codes or descriptions, e.g. gold #FFD700 + black + white",
        helpText: "If unsure, list 2–3 colors you naturally use in your brand today.",
      },
      {
        id: "colorsToAvoid",
        label: "Colors or styles to avoid",
        type: "text",
        placeholder: "e.g. no red, no corporate blue, no clip art…",
      },
      {
        id: "designStyle",
        label: "Design style preference",
        type: "checkbox-group",
        options: [
          "Clean & minimal",
          "Bold & modern",
          "Luxury / premium",
          "Friendly & approachable",
          "Corporate / professional",
          "Dark mode / cinematic",
          "Light & airy",
          "Photo-heavy / visual storytelling",
          "Illustration-based",
          "Editorial / magazine feel",
        ],
      },
      {
        id: "toneOfVoice",
        label: "Tone of voice for website copy",
        type: "select",
        options: [
          "Professional & authoritative",
          "Friendly & conversational",
          "Bold & confident",
          "Warm & personal",
          "Technical & precise",
          "Luxury & refined",
          "Playful & energetic",
        ],
      },
      {
        id: "brandPersonality",
        label: "Three words that describe your brand",
        type: "text",
        placeholder: "e.g. trusted, fast, premium",
      },
      {
        id: "assetsReady",
        label: "Creative assets you already have",
        type: "checkbox-group",
        options: [
          "Logo files (SVG, PNG)",
          "Brand guidelines / style guide",
          "Professional headshots",
          "Team photos",
          "Product photos",
          "Office / location photos",
          "Video content",
          "Written copy for pages",
          "Client testimonials (written)",
          "Client testimonials (video)",
          "Icons or illustrations",
          "Nothing yet — need full creative support",
        ],
      },
      {
        id: "photographyNeeds",
        label: "Photography / imagery needs",
        type: "select",
        options: [
          "I'll provide all photos",
          "Use stock photos where needed",
          "Need custom photography arranged",
          "Mix of my photos + stock",
          "Not sure",
        ],
      },
    ],
  },
  {
    id: "content",
    title: "Content & pages",
    description: "Site structure, messaging, and what each page should communicate.",
    questions: [
      {
        id: "pagesSelected",
        label: "Pages you need",
        type: "checkbox-group",
        helpText:
          "Select any that apply — or skip this and type your full list in the box below instead.",
        options: [
          "Home",
          "About",
          "Services",
          "Products / Shop",
          "Pricing",
          "Portfolio / Case studies",
          "Blog / News",
          "FAQ",
          "Contact",
          "Careers / Jobs",
          "Team",
          "Testimonials / Reviews",
          "Book / Schedule",
          "Login / Member area",
          "Resources / Downloads",
          "Landing page(s) for campaigns",
        ],
      },
      {
        id: "pagesCustom",
        label: "Other pages, or type your full list here",
        type: "textarea",
        placeholder:
          "e.g. Home, About, Services, Pricing, Blog, Contact — or any custom pages not listed above.",
        helpText:
          "Use this to type everything yourself, add extra pages, or ignore the checklist above entirely.",
      },
      {
        id: "homepageSections",
        label: "Homepage sections you want",
        type: "checkbox-group",
        options: [
          "Hero with headline + CTA",
          "Services overview",
          "About / founder story",
          "Social proof / logos",
          "Testimonials",
          "Case studies / portfolio",
          "Pricing preview",
          "FAQ",
          "Blog preview",
          "Contact form",
          "Video embed",
          "Stats / numbers",
          "Process / how it works",
          "Team section",
        ],
      },
      {
        id: "headlineMessage",
        label: "Main headline or value proposition",
        type: "textarea",
        placeholder: "Complete this: 'We help [who] achieve [result] without [pain]…'",
      },
      {
        id: "servicesHighlight",
        label: "Products or services to feature (with short descriptions)",
        type: "textarea",
        placeholder: "List each service/product, price range if relevant, and who it's for.",
      },
      {
        id: "aboutStory",
        label: "About page — your story in 2–3 sentences",
        type: "textarea",
        placeholder: "Founder background, mission, why you started, credentials that build trust.",
      },
      {
        id: "testimonialsAvailable",
        label: "Testimonials & social proof available?",
        type: "select",
        options: [
          "Yes — I can provide quotes and names",
          "Yes — but anonymous only",
          "Some on Google Reviews / social — can link",
          "None yet — need placeholder or help collecting",
        ],
      },
      {
        id: "copywritingHelp",
        label: "Copywriting support needed?",
        type: "select",
        options: [
          "No — I'll write and provide all copy",
          "Yes — write all website copy for me",
          "Partial — I have drafts that need editing",
          "Partial — I need help with headlines and CTAs only",
        ],
      },
      {
        id: "legalPages",
        label: "Legal / policy pages needed",
        type: "checkbox-group",
        options: [
          "Privacy policy",
          "Terms of service",
          "Cookie policy",
          "Refund / cancellation policy",
          "HIPAA / healthcare disclaimer",
          "Accessibility statement",
          "None needed",
        ],
      },
      {
        id: "languages",
        label: "Languages required",
        type: "text",
        placeholder: "English only, or English + French, etc.",
      },
    ],
  },
  {
    id: "conversion",
    title: "Conversion & UX",
    description: "How visitors move through the site and what happens after they convert.",
    questions: [
      {
        id: "contactFormFields",
        label: "Contact form — what info do you need from leads?",
        type: "checkbox-group",
        options: [
          "Name",
          "Email",
          "Phone",
          "Company name",
          "Budget range",
          "Project type",
          "Message / details",
          "How they heard about you",
          "Preferred contact method",
        ],
      },
      {
        id: "formDestination",
        label: "Where should form submissions go?",
        type: "checkbox-group",
        options: [
          "Email notification",
          "Google Sheet",
          "CRM (HubSpot, etc.)",
          "Slack / WhatsApp alert",
          "Not sure",
        ],
      },
      {
        id: "bookingTool",
        label: "Booking / scheduling tool preference",
        type: "select",
        options: [
          "Not needed",
          "Calendly",
          "Cal.com",
          "Acuity",
          "Embedded custom form",
          "Other / not sure",
        ],
      },
      {
        id: "paymentNeeds",
        label: "Payments on the site?",
        type: "select",
        options: [
          "No payments on site",
          "One-time payments (Stripe / PayPal)",
          "Subscriptions / memberships",
          "Deposits or invoices only",
          "Not sure yet",
        ],
      },
      {
        id: "userJourney",
        label: "Describe the ideal visitor journey",
        type: "textarea",
        placeholder: "e.g. Land on homepage → read services → see testimonials → fill form → get email confirmation → book call…",
      },
      {
        id: "accessibility",
        label: "Accessibility or compliance requirements",
        type: "textarea",
        placeholder: "WCAG standards, screen reader support, ADA compliance, age restrictions, etc.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical, SEO & marketing",
    description:
      "Domain name, social accounts, marketing, infrastructure, and how people will find you after launch.",
    sectionNote:
      "Optional add-ons: +$50 custom business email, +$250 social (1 month management), or ongoing IT & marketing retainer at $1,399/mo after launch.",
    questions: [
      {
        id: "domainStatus",
        label: "Do you already have a domain name?",
        type: "select",
        group: "Domain & hosting",
        helpText: "Your domain is your website address (e.g. yourbrand.com). Tell us where you are today.",
        options: [
          "Yes — I already own a domain",
          "No — I need help choosing and purchasing one",
          "I have ideas but haven't bought yet",
          "Using a subdomain for now (e.g. mybrand.vercel.app)",
          "Not sure — need guidance",
        ],
      },
      {
        id: "domainCurrent",
        label: "Your current domain (if you already own one)",
        type: "text",
        group: "Domain & hosting",
        placeholder: "yourbrand.com",
        helpText: "Leave blank if you don't have a domain yet.",
      },
      {
        id: "domainName",
        label: "Preferred domain name(s) or ideas",
        type: "text",
        group: "Domain & hosting",
        placeholder: "getyourbrand.com, yourbrand.co, tryyourbrand.com…",
        helpText: "List names you'd like — we'll check availability and suggest alternatives if taken.",
      },
      {
        id: "businessEmailAddon",
        label: "Add-on: Custom business email setup ($50)",
        type: "select",
        group: "Domain & hosting",
        helpText:
          "Optional one-time add-on. We set up professional email on your domain — e.g. hello@yourbrand.com, info@, support@ — so customers reach you at a branded address, not Gmail or Yahoo.",
        options: [
          "Yes — add the $50 business email setup add-on",
          "Maybe — send me details on what's included",
          "No — I already have business email on my domain",
          "Not sure yet",
        ],
      },
      {
        id: "businessEmailAddresses",
        label: "Which email addresses do you want? (if adding the $50 add-on)",
        type: "textarea",
        group: "Domain & hosting",
        placeholder: "hello@yourbrand.com, info@yourbrand.com, support@yourbrand.com, yourname@…",
        helpText: "List every address you need — we'll set them up as part of the $50 add-on.",
      },
      {
        id: "businessEmailProvider",
        label: "Email provider preference (optional)",
        type: "select",
        group: "Domain & hosting",
        options: [
          "Google Workspace (Gmail on your domain)",
          "Microsoft 365 (Outlook on your domain)",
          "Zoho Mail",
          "Email through my web host",
          "No preference — recommend the best option",
          "Not sure",
        ],
      },
      {
        id: "domainPreferences",
        label: "Domain name preferences",
        type: "textarea",
        group: "Domain & hosting",
        placeholder:
          "e.g. must be .com, include city name, short & memorable, match business name exactly, avoid hyphens…",
        helpText:
          "Extensions (.com, .co, .app), keywords to include, naming style, backup options, or names to avoid.",
      },
      {
        id: "domainRegistrar",
        label: "Where is your domain registered? (if you have one)",
        type: "select",
        group: "Domain & hosting",
        options: [
          "GoDaddy",
          "Namecheap",
          "Google Domains / Squarespace",
          "Cloudflare",
          "Hostinger",
          "Other registrar",
          "Don't have a domain yet",
          "Not sure",
        ],
      },
      {
        id: "socialPageSetup",
        label: "Add-on: Social account creation + 1 month management ($250)",
        type: "select",
        group: "Social accounts & marketing",
        helpText:
          "Optional one-time $250 add-on — everything below is included: account creation, profile setup, posting, scheduling, content, graphics, and management for your first full month. Not part of build packages or the monthly retainer.",
        options: [
          "Yes — add the $250 package (account creation + 1 month management)",
          "Maybe — send me details on what's included",
          "No — I'll create and manage social myself",
          "Not sure yet",
        ],
      },
      {
        id: "socialPlatformsSetup",
        label: "Which social accounts should we create? (if adding the $250 package)",
        type: "checkbox-group",
        group: "Social accounts & marketing",
        helpText:
          "Select platforms for the $250 add-on — setup plus full first-month management (posting, content, scheduling) on each platform you choose.",
        options: [
          "Instagram",
          "Facebook",
          "LinkedIn",
          "TikTok",
          "X (Twitter)",
          "YouTube",
          "Pinterest",
          "WhatsApp Business",
          "Google Business Profile",
          "Not sure yet",
        ],
      },
      {
        id: "socialContentNeeds",
        label: "First-month social focus (all included in $250 add-on)",
        type: "checkbox-group",
        group: "Social accounts & marketing",
        helpText:
          "Optional — only if you're adding the $250 package. Pick what to emphasize in month one. Everything listed is included — no extra charges for posting, content, or scheduling.",
        options: [
          "Posting & scheduling",
          "Captions & content ideas",
          "Graphics, carousels & short-form video",
          "Community management & replies",
          "Balanced mix of everything above",
          "Not sure yet",
        ],
      },
      {
        id: "socialLinks",
        label: "Existing social account links (if any)",
        type: "textarea",
        group: "Social accounts & marketing",
        placeholder: "Paste links to accounts you already have — or leave blank if you need us to create them.",
      },
      {
        id: "retainerInterest",
        label: `Interested in the ${formatRetainerPrice()}/mo retainer? (after month one)`,
        type: "select",
        group: "Social accounts & marketing",
        helpText: `${RETAINER.savingsNote} ${RETAINER.roiNote}`,
        options: [
          "Yes — full retainer (IT + all business tools + social + marketing + admin)",
          "Yes — IT & tech support only (devices, apps, onboarding, website)",
          "Yes — social + marketing only (no IT / tech support)",
          "Maybe — send me the full breakdown",
          "No — one-time project only (manage social myself after month 1)",
        ],
      },
      {
        id: "adBudget",
        label: "Monthly ad budget (if running paid ads)",
        type: "select",
        group: "Social accounts & marketing",
        helpText: `Your spend on Google, Meta, etc. — separate from our $250 add-on and ${formatRetainerPrice()}/mo retainer fees.`,
        options: [
          "Not running ads",
          "Under $500/mo",
          "$500–$2,000/mo",
          "$2,000+/mo",
          "Not sure",
        ],
      },
      {
        id: "techSupportNeeds",
        label: "What IT & tech support do you need?",
        type: "checkbox-group",
        group: "IT & tech support (Retainer)",
        helpText: `Included on the ${formatRetainerPrice()}/mo retainer — select all that apply.`,
        options: [
          "Email & cloud productivity (Microsoft 365, Google Workspace, etc.)",
          "Collaboration tools (Slack, Teams, Zoom, Notion, etc.)",
          "New hire onboarding (email, accounts, devices, permissions)",
          "Team admin setup (shared drives, calendars, groups)",
          "Device troubleshooting (laptops, phones, printers)",
          "Website, hosting & domain management",
          "CRM, SaaS & business software admin",
          "Security, backups & access control",
          "Vendor / contractor IT coordination",
          "Not sure — I need an IT manager on call",
        ],
      },
      {
        id: "teamSupportSize",
        label: "How many people need IT / admin support?",
        type: "select",
        group: "IT & tech support (Retainer)",
        options: [
          "Just me / solo founder",
          "2–5 team members",
          "6–15 team members",
          "16–50 team members",
          "50+ (enterprise — custom scope)",
        ],
      },
      {
        id: "existingTools",
        label: "Tools you already use (we may integrate with)",
        type: "checkbox-group",
        group: "Integrations",
        options: [
          "Google Analytics / GA4",
          "Google Search Console",
          "Google Business Profile",
          "Meta Pixel / Facebook Ads",
          "Mailchimp",
          "Klaviyo",
          "HubSpot CRM",
          "Salesforce",
          "Zapier / Make",
          "Stripe",
          "PayPal",
          "Paystack",
          "Calendly",
          "Intercom / live chat",
          "None yet",
        ],
      },
      {
        id: "integrations",
        label: "Integrations needed for this project",
        type: "checkbox-group",
        group: "Integrations",
        options: [
          "Google Analytics 4",
          "Google Search Console",
          "Meta Pixel",
          "Mailchimp / email marketing",
          "Calendly / booking",
          "Stripe / PayPal / Paystack",
          "CRM sync",
          "Social media feed embed",
          "Google Maps",
          "Review widgets (Google, Trustpilot)",
          "Chat widget",
          "Zapier automation",
        ],
      },
      {
        id: "seoPriority",
        label: "How important is SEO for this project?",
        type: "select",
        group: "SEO & discovery",
        options: [
          "Critical — most traffic should come from Google",
          "Important — want to rank for key terms",
          "Moderate — nice to have, not primary channel",
          "Low — traffic will come from ads or social",
        ],
      },
      {
        id: "seoKeywords",
        label: "Target keywords, services, or locations",
        type: "textarea",
        group: "SEO & discovery",
        placeholder: "e.g. 'web design Accra', 'online fitness coach', 'cardiology clinic Columbia MO'…",
      },
      {
        id: "localSeo",
        label: "Do you need local SEO (Google Maps / local search)?",
        type: "select",
        group: "SEO & discovery",
        options: ["Yes — local business", "No — national or global", "Not sure"],
      },
    ],
  },
  {
    id: "timeline",
    title: "Timeline, budget & process",
    description: "When you need to launch, what you can invest, and how we'll work together.",
    questions: [
      {
        id: "launchDate",
        label: "Ideal launch date",
        type: "text",
        placeholder: "e.g. August 1, 2026, or 'ASAP within 2 weeks'",
      },
      {
        id: "launchReason",
        label: "Is there a hard deadline? Why?",
        type: "textarea",
        placeholder: "Product launch, event, funding round, seasonality, contract start date…",
      },
      {
        id: "budgetRange",
        label: "Budget range",
        type: "select",
        options: [
          "$600–$950 (Starter — landing page)",
          "$1,200–$2,500 (Growth — marketing site)",
          "$3,000–$6,000 (Pro — web app / SaaS)",
          "$2,500–$8,000 (Mobile app)",
          "$250 add-on (Social accounts + 1 month management)",
          "$50 add-on (Custom business email setup)",
          `${formatRetainerPrice()}/mo (Retainer — IT, business tools, social, marketing & admin)`,
          "Custom scope — need a quote",
          "Not sure — need recommendation",
        ],
      },
      {
        id: "paymentPreference",
        label: "Payment preference",
        type: "select",
        options: [
          "50% upfront, 50% on delivery (standard)",
          "Full payment upfront",
          "Milestone-based payments",
          "Need to discuss",
        ],
      },
      {
        id: "decisionMaker",
        label: "Who approves design, copy, and final launch?",
        type: "text",
        placeholder: "Just me / me + business partner / committee of 3…",
      },
      {
        id: "feedbackTurnaround",
        label: "Typical turnaround for your feedback",
        type: "select",
        options: [
          "Same day",
          "1–2 business days",
          "3–5 business days",
          "Varies — I'll flag delays",
        ],
      },
      {
        id: "contentReadyDate",
        label: "When will your content (copy, photos, logos) be ready?",
        type: "select",
        options: [
          "Ready now",
          "Within 1 week",
          "Within 2–4 weeks",
          "Need help creating it",
          "Not sure",
        ],
      },
      {
        id: "referralSource",
        label: "How did you hear about ShowMe Web & App?",
        type: "text",
        placeholder: "Google, referral, social media, ShowMe app, etc.",
      },
      {
        id: "additionalNotes",
        label: "Anything else we should know?",
        type: "textarea",
        placeholder: "Constraints, past bad experiences with agencies, must-haves, accessibility, competitors to beat, etc.",
      },
    ],
  },
];

export const STORAGE_KEY = "showme-onboarding-draft-v16";
