"use client";

import Link from "next/link";
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Check, Copy, Download, Mail, RotateCcw } from "lucide-react";
import {
  EMAIL_ADDON,
  ONBOARDING_SECTIONS,
  SOCIAL_ADDON,
  STORAGE_KEY,
  isEmailAddonSelected,
  isSocialAddonSelected,
  type OnboardingSection,
  type Question,
} from "./questions";

type FormValues = Record<string, string | string[]>;

const EMPTY_VALUES: FormValues = {};

function getInitialValues(): FormValues {
  const values: FormValues = {};
  for (const section of ONBOARDING_SECTIONS) {
    for (const q of section.questions) {
      values[q.id] = q.type === "checkbox-group" ? [] : "";
    }
  }
  return values;
}

function formatAnswers(values: FormValues): string {
  const lines: string[] = [
    "SHOWME WEB & APP — CLIENT ONBOARDING CHECKLIST",
    `Submitted: ${new Date().toLocaleString()}`,
    "",
  ];

  for (const section of ONBOARDING_SECTIONS) {
    lines.push(`=== ${section.title.toUpperCase()} ===`);
    lines.push("");

    for (const q of section.questions) {
      const raw = values[q.id];
      const answer =
        Array.isArray(raw) ? (raw.length ? raw.join(", ") : "—") : raw?.toString().trim() || "—";
      lines.push(`${q.label}`);
      lines.push(answer);
      lines.push("");
    }
  }

  return lines.join("\n");
}

function isQuestionAnswered(
  question: Question,
  value: string | string[] | undefined
): boolean {
  if (Array.isArray(value)) return value.length > 0;
  return Boolean(value?.toString().trim());
}

/** Minimum answers needed in a section (at least 10%, rounded up, minimum 1). */
function getSectionMinimumAnswers(section: OnboardingSection): number {
  if (section.questions.length === 0) return 0;
  return Math.max(1, Math.ceil(section.questions.length * 0.1));
}

function getSectionAnsweredCount(
  section: OnboardingSection,
  values: FormValues
): number {
  return section.questions.filter((q) => isQuestionAnswered(q, values[q.id])).length;
}

function isSectionComplete(section: OnboardingSection, values: FormValues): boolean {
  const answered = getSectionAnsweredCount(section, values);
  const minimum = getSectionMinimumAnswers(section);

  // Require at least 10% of questions answered (min 1) — never mark empty sections done.
  if (answered < minimum) return false;

  const required = section.questions.filter((q) => q.required);
  // Note: [].every(...) is true in JS — only skip required check when there are none.
  if (required.length === 0) return true;

  return required.every((q) => isQuestionAnswered(q, values[q.id]));
}

function getIncompleteSections(values: FormValues): OnboardingSection[] {
  return ONBOARDING_SECTIONS.filter((section) => !isSectionComplete(section, values));
}

function isFormValid(values: FormValues): boolean {
  return ONBOARDING_SECTIONS.every((section) => isSectionComplete(section, values));
}

export function OnboardingChecklist() {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [activeStep, setActiveStep] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const initial = getInitialValues();
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setValues({ ...initial, ...JSON.parse(saved) });
      } else {
        setValues(initial);
      }
    } catch {
      setValues(initial);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
  }, [values, hydrated]);

  const completedCount = useMemo(
    () => ONBOARDING_SECTIONS.filter((s) => isSectionComplete(s, values)).length,
    [values]
  );

  const progress = Math.round((completedCount / ONBOARDING_SECTIONS.length) * 100);
  const activeSection = ONBOARDING_SECTIONS[activeStep];
  const formPanelRef = useRef<HTMLDivElement>(null);

  const activeSectionProgress = useMemo(() => {
    const answered = getSectionAnsweredCount(activeSection, values);
    const minimum = getSectionMinimumAnswers(activeSection);
    return {
      answered,
      minimum,
      total: activeSection.questions.length,
      done: isSectionComplete(activeSection, values),
    };
  }, [activeSection, values]);

  const goToStep = useCallback((step: number) => {
    const next = Math.max(0, Math.min(step, ONBOARDING_SECTIONS.length - 1));
    setActiveStep(next);
    setStatus(null);

    if (typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches) {
      requestAnimationFrame(() => {
        formPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  const setField = useCallback((id: string, value: string | string[]) => {
    setValues((prev) => ({ ...prev, [id]: value }));
    setStatus(null);
  }, []);

  const toggleCheckbox = useCallback((id: string, option: string) => {
    setValues((prev) => {
      const current = (prev[id] as string[]) || [];
      const next = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...prev, [id]: next };
    });
    setStatus(null);
  }, []);

  const handleReset = () => {
    if (!confirm("Clear all answers? This cannot be undone.")) return;
    const initial = getInitialValues();
    setValues(initial);
    localStorage.removeItem(STORAGE_KEY);
    setActiveStep(0);
    setStatus("Draft cleared.");
  };

  const handleCopy = async () => {
    const text = formatAnswers(values);
    await navigator.clipboard.writeText(text);
    setStatus("Copied to clipboard — paste into email or Slack.");
  };

  const handleDownload = () => {
    const text = formatAnswers(values);
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const name =
      (values.businessName as string)?.toString().trim().replace(/\s+/g, "-").toLowerCase() ||
      "client";
    a.href = url;
    a.download = `showme-onboarding-${name}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    setStatus("Downloaded as .txt file.");
  };

  const handleEmail = () => {
    if (!isFormValid(values)) {
      const incomplete = getIncompleteSections(values);
      const basicsMissing = ["businessName", "contactName", "email"].some(
        (id) => !isQuestionAnswered({ id, label: "", type: "text" }, values[id])
      );

      if (basicsMissing) {
        setStatus(
          "Please fill in your name, business name, and email (marked with *) before sending."
        );
      } else if (incomplete.length > 0) {
        setStatus(
          `Answer at least a few questions in each section before sending. Still need progress in: ${incomplete.map((s) => s.title).join(", ")}.`
        );
      } else {
        setStatus("Please complete the required fields before sending.");
      }
      return;
    }
    const subject = encodeURIComponent(
      `Project brief: ${(values.businessName as string) || "New client"} — ShowMe Web & App`
    );
    const body = encodeURIComponent(formatAnswers(values));
    window.location.href = `mailto:info@shwme.app?subject=${subject}&body=${body}`;
    setStatus("Opening your email app with your answers pre-filled.");
  };

  if (!hydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center text-primary/60">
        Loading checklist…
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 pt-6 pb-28 md:px-6 md:py-10 md:pb-10">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6 md:mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-primary/70 hover:text-[#E1E0CC] transition-colors mb-4 md:mb-6 min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            Back to home
          </Link>
          <p className="text-xs uppercase tracking-widest text-primary/50 mb-2">Client onboarding</p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#E1E0CC] tracking-tight mb-3">
            Project brief checklist
          </h1>
          <p className="text-primary/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            A detailed project brief covering your business, goals, audience, brand, content,
            conversion strategy, and technical needs. Your name, business name, and email are
            required to send — plus at least a few answers in every section. Progress saves
            automatically.
          </p>
        </header>

        <div className="bg-[#101010] border border-white/[0.08] rounded-2xl p-4 md:p-6 mb-4 md:mb-8">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="text-xs sm:text-sm text-primary/80">
              Section {activeStep + 1}/{ONBOARDING_SECTIONS.length}
              <span className="hidden sm:inline">
                {" "}
                · {completedCount} complete
              </span>
            </span>
            <span className="text-sm font-semibold text-[#E1E0CC]">{progress}%</span>
          </div>
          <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-xs text-primary/50 lg:hidden truncate">{activeSection.title}</p>
        </div>

        {/* Mobile: horizontal section picker */}
        <nav
          className="lg:hidden -mx-4 px-4 mb-4"
          aria-label="Form sections"
        >
          <div className="flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {ONBOARDING_SECTIONS.map((section, i) => {
              const done = isSectionComplete(section, values);
              const active = i === activeStep;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => goToStep(i)}
                  aria-current={active ? "step" : undefined}
                  className={`shrink-0 snap-start inline-flex items-center gap-2 px-3 py-2.5 min-h-[44px] rounded-full text-xs font-medium border transition-all touch-manipulation ${
                    active
                      ? "bg-primary/15 border-primary/40 text-[#E1E0CC]"
                      : "border-white/[0.08] text-primary/70 bg-black/20"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                      done ? "bg-primary text-black" : "bg-white/10 text-primary/60"
                    }`}
                  >
                    {done ? <Check className="w-3 h-3" /> : i + 1}
                  </span>
                  <span className="whitespace-nowrap max-w-[9rem] truncate">{section.title}</span>
                </button>
              );
            })}
          </div>
        </nav>

        <div className="grid lg:grid-cols-[240px_1fr] gap-4 lg:gap-8">
          {/* Desktop: sidebar nav */}
          <nav className="hidden lg:block space-y-2 lg:sticky lg:top-8 lg:self-start" aria-label="Form sections">
            {ONBOARDING_SECTIONS.map((section, i) => {
              const done = isSectionComplete(section, values);
              const active = i === activeStep;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => goToStep(i)}
                  aria-current={active ? "step" : undefined}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all border touch-manipulation ${
                    active
                      ? "bg-primary/10 border-primary/30 text-[#E1E0CC]"
                      : "border-transparent text-primary/70 hover:bg-white/[0.04] hover:text-[#E1E0CC]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                        done ? "bg-primary text-black" : "bg-white/10 text-primary/60"
                      }`}
                    >
                      {done ? <Check className="w-3 h-3" /> : i + 1}
                    </span>
                    <span>
                      {section.title}
                      <span className="block text-[10px] text-primary/40 mt-0.5">
                        {getSectionAnsweredCount(section, values)}/{section.questions.length}{" "}
                        · need {getSectionMinimumAnswers(section)}+
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </nav>

          <div
            ref={formPanelRef}
            className="bg-[#101010] border border-white/[0.08] rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 scroll-mt-20"
          >
            <div className="mb-6 md:mb-8">
              <p className="text-xs uppercase tracking-widest text-primary/45 mb-2 lg:hidden">
                Section {activeStep + 1} of {ONBOARDING_SECTIONS.length}
              </p>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#E1E0CC] mb-2">
                {activeSection.title}
              </h2>
              <p className="text-primary/60 text-sm leading-relaxed">{activeSection.description}</p>
              <p
                className={`mt-3 text-xs rounded-lg px-3 py-2 border ${
                  activeSectionProgress.done
                    ? "text-primary/70 bg-primary/5 border-primary/10"
                    : "text-primary/55 bg-white/[0.03] border-white/[0.06]"
                }`}
              >
                {activeSectionProgress.done
                  ? "Section complete"
                  : `${activeSectionProgress.answered} of ${activeSectionProgress.total} answered · answer at least ${activeSectionProgress.minimum} to complete this section`}
              </p>
              {activeSection.sectionNote && (
                <p className="mt-4 text-sm text-primary/75 bg-primary/5 border border-primary/10 rounded-xl px-3 py-3 sm:px-4 leading-relaxed">
                  {activeSection.sectionNote}
                </p>
              )}
              {activeSection.id === "technical" && (
                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  <div className="rounded-xl border border-primary/25 bg-primary/5 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-widest text-primary/70 mb-1">
                      Add-on
                    </p>
                    <p className="text-sm font-bold text-[#E1E0CC]">
                      Business email <span className="text-primary">+$50</span>
                    </p>
                    <p className="text-xs text-primary/55 mt-1">Custom addresses on your domain</p>
                  </div>
                  <div className="rounded-xl border border-primary/25 bg-primary/5 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-widest text-primary/70 mb-1">
                      Add-on
                    </p>
                    <p className="text-sm font-bold text-[#E1E0CC]">
                      Social accounts <span className="text-primary">+$250</span>
                    </p>
                    <p className="text-xs text-primary/55 mt-1">Creation + 1 month management</p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-5 sm:space-y-6">
              {activeSection.questions.map((q, idx) => {
                const prevGroup =
                  idx > 0 ? activeSection.questions[idx - 1].group : undefined;
                const showGroup = q.group && q.group !== prevGroup;
                return (
                  <Fragment key={q.id}>
                    {showGroup && (
                      <>
                        {q.group === "Domain & hosting" && (
                          <EmailAddonPricingBox values={values} />
                        )}
                        {q.group === "Social accounts & marketing" && (
                          <SocialAddonPricingBox values={values} />
                        )}
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-primary/50 pt-4 first:pt-0 border-t border-white/[0.06] first:border-0">
                          {q.group}
                        </h3>
                      </>
                    )}
                    <Field
                      question={q}
                      value={values[q.id]}
                      onChange={setField}
                      onToggleCheckbox={toggleCheckbox}
                      allValues={values}
                    />
                  </Fragment>
                );
              })}
            </div>

            <div className="hidden lg:flex flex-wrap gap-3 mt-10 pt-8 border-t border-white/[0.06]">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => goToStep(activeStep - 1)}
                className="px-5 py-2.5 min-h-[44px] rounded-full text-sm border border-primary/20 text-primary disabled:opacity-30 hover:bg-white/[0.04] transition-colors touch-manipulation"
              >
                Previous
              </button>
              {activeStep < ONBOARDING_SECTIONS.length - 1 ? (
                <button
                  type="button"
                  onClick={() => goToStep(activeStep + 1)}
                  className="px-5 py-2.5 min-h-[44px] rounded-full text-sm bg-primary text-black font-semibold hover:bg-primary/90 transition-colors touch-manipulation"
                >
                  Next section
                </button>
              ) : (
                <span className="text-sm text-primary/50 self-center">
                  Last section — send your brief below.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Mobile: sticky section navigation */}
        <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-[#0a0a0a]/95 backdrop-blur-xl px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="max-w-6xl mx-auto flex gap-3">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() => goToStep(activeStep - 1)}
              className="flex-1 min-h-[48px] rounded-full text-sm border border-primary/20 text-primary disabled:opacity-30 active:bg-white/[0.06] transition-colors touch-manipulation"
            >
              Previous
            </button>
            {activeStep < ONBOARDING_SECTIONS.length - 1 ? (
              <button
                type="button"
                onClick={() => goToStep(activeStep + 1)}
                className="flex-[1.4] min-h-[48px] rounded-full text-sm bg-primary text-black font-semibold active:bg-primary/90 transition-colors touch-manipulation"
              >
                Next · {ONBOARDING_SECTIONS[activeStep + 1].title.split(" ")[0]}
              </button>
            ) : (
              <a
                href="#send-brief"
                className="flex-[1.4] min-h-[48px] inline-flex items-center justify-center rounded-full text-sm bg-primary text-black font-semibold active:bg-primary/90 transition-colors touch-manipulation"
              >
                Send brief
              </a>
            )}
          </div>
        </div>

        <div
          id="send-brief"
          className="mt-6 md:mt-8 bg-[#101010] border border-white/[0.08] rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 scroll-mt-20"
        >
          <h3 className="text-lg font-bold text-[#E1E0CC] mb-2">Send your brief to Josh</h3>
          <p className="text-primary/60 text-sm mb-6">
            When you&apos;re done, email your answers directly or download a copy for your records.
            Name, business name, and email are required — plus at least 10% of questions answered
            in each section before you can send.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <button
              type="button"
              onClick={handleEmail}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-primary rounded-full text-black font-semibold px-6 py-3.5 min-h-[48px] hover:bg-primary/90 active:bg-primary/90 transition-colors touch-manipulation"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span className="sm:hidden">Email brief</span>
              <span className="hidden sm:inline">Email brief to info@shwme.app</span>
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full border border-primary/20 text-primary hover:bg-white/[0.04] active:bg-white/[0.06] transition-colors touch-manipulation"
            >
              <Copy className="w-4 h-4 shrink-0" />
              Copy to clipboard
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full border border-primary/20 text-primary hover:bg-white/[0.04] active:bg-white/[0.06] transition-colors touch-manipulation"
            >
              <Download className="w-4 h-4 shrink-0" />
              Download .txt
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full text-primary/50 hover:text-primary hover:bg-white/[0.04] active:bg-white/[0.06] transition-colors touch-manipulation"
            >
              <RotateCcw className="w-4 h-4 shrink-0" />
              Clear draft
            </button>
          </div>
          {status && (
            <p className="mt-4 text-sm text-primary/80 bg-primary/5 border border-primary/10 rounded-xl px-4 py-3">
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function EmailAddonPricingBox({ values }: { values: FormValues }) {
  const selected = isEmailAddonSelected(values);
  const addresses = values.businessEmailAddresses?.toString().trim();

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-5 mb-2 ${
        selected ? "border-primary/40 bg-primary/10" : "border-white/[0.1] bg-black/30"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/80">
            {EMAIL_ADDON.badge}
          </span>
          <p className="text-base sm:text-lg font-bold text-[#E1E0CC] mt-1">{EMAIL_ADDON.title}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-2xl sm:text-3xl font-bold text-primary">+${EMAIL_ADDON.price}</p>
          <p className="text-[11px] text-primary/55">one-time add-on</p>
        </div>
      </div>

      <p className="text-xs text-primary/60 mb-3">{EMAIL_ADDON.priceNote}</p>

      <ul className="space-y-1.5 mb-3">
        {EMAIL_ADDON.includes.map((item) => (
          <li key={item} className="text-xs sm:text-sm text-primary/85 flex items-start gap-2">
            <span className="text-primary shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>

      {selected && (
        <p className="mt-3 text-sm font-medium text-primary bg-black/30 rounded-xl px-3 py-2.5 border border-primary/20">
          ✓ Added to your brief — ${EMAIL_ADDON.price} email add-on
          {addresses
            ? " · addresses listed below"
            : " · list your addresses in the next question"}
        </p>
      )}
    </div>
  );
}

function SocialAddonPricingBox({
  values,
}: {
  values: FormValues;
}) {
  const selected = isSocialAddonSelected(values);
  const platformCount = ((values.socialPlatformsSetup as string[]) || []).length;

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-5 mb-2 ${
        selected
          ? "border-primary/40 bg-primary/10"
          : "border-white/[0.1] bg-black/30"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/80">
            {SOCIAL_ADDON.badge}
          </span>
          <p className="text-base sm:text-lg font-bold text-[#E1E0CC] mt-1">{SOCIAL_ADDON.title}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-2xl sm:text-3xl font-bold text-primary">+${SOCIAL_ADDON.price}</p>
          <p className="text-[11px] text-primary/55">one-time · includes 1 month management</p>
        </div>
      </div>

      <p className="text-xs text-primary/60 mb-3">{SOCIAL_ADDON.priceNote}</p>

      <ul className="space-y-1.5 mb-3">
        {SOCIAL_ADDON.includes.map((item) => (
          <li key={item} className="text-xs sm:text-sm text-primary/85 flex items-start gap-2">
            <span className="text-primary shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <p className="text-[11px] text-primary/45 border-t border-white/[0.06] pt-3">
        {SOCIAL_ADDON.afterMonthNote}
      </p>

      {selected && (
        <p className="mt-3 text-sm font-medium text-primary bg-black/30 rounded-xl px-3 py-2.5 border border-primary/20">
          ✓ Added to your brief — ${SOCIAL_ADDON.price} social add-on
          {platformCount > 0
            ? ` · ${platformCount} platform${platformCount === 1 ? "" : "s"} selected`
            : " · pick platforms in the next question"}
        </p>
      )}
    </div>
  );
}

function Field({
  question,
  value,
  onChange,
  onToggleCheckbox,
  allValues,
}: {
  question: Question;
  value: string | string[] | undefined;
  onChange: (id: string, value: string | string[]) => void;
  onToggleCheckbox: (id: string, option: string) => void;
  allValues: FormValues;
}) {
  const inputClass =
    "w-full bg-black/40 border border-white/[0.1] rounded-xl px-4 py-3.5 min-h-[48px] text-[#E1E0CC] text-base md:text-sm placeholder:text-primary/30 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-colors touch-manipulation";

  const inputMode =
    question.type === "email"
      ? "email"
      : question.type === "tel"
        ? "tel"
        : question.type === "url"
          ? "url"
          : undefined;

  return (
    <div>
      <label htmlFor={question.id} className="block text-sm font-medium text-[#E1E0CC] mb-1.5 leading-snug">
        <span>{question.label}</span>
        {question.required && <span className="text-primary/80 ml-1">*</span>}
        {!question.required && (
          <span className="block sm:inline text-primary/40 font-normal sm:ml-1.5 text-xs sm:text-sm mt-0.5 sm:mt-0">
            (optional)
          </span>
        )}
      </label>
      {question.helpText && (
        <p className="text-xs text-primary/45 mb-2">{question.helpText}</p>
      )}

      {question.id === "businessEmailAddresses" && isEmailAddonSelected(allValues) && (
        <p className="text-xs text-primary/70 bg-primary/5 border border-primary/15 rounded-lg px-3 py-2 mb-2">
          Included in your <strong>+${EMAIL_ADDON.price}</strong> business email add-on — list every
          address you want us to create.
        </p>
      )}

      {question.id === "businessEmailAddresses" &&
        !isEmailAddonSelected(allValues) &&
        !(value as string)?.trim() && (
          <p className="text-xs text-primary/45 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2 mb-2">
            Answer the $50 email add-on question above first if you need custom business email.
          </p>
        )}

      {question.id === "socialContentNeeds" && isSocialAddonSelected(allValues) && (
        <p className="text-xs text-primary/70 bg-primary/5 border border-primary/15 rounded-lg px-3 py-2 mb-2">
          All options below are included in your <strong>+${SOCIAL_ADDON.price}</strong> add-on —
          posting, scheduling, content, graphics, and management for month one.
        </p>
      )}

      {question.id === "socialContentNeeds" &&
        !isSocialAddonSelected(allValues) &&
        !(value as string[])?.length && (
          <p className="text-xs text-primary/45 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2 mb-2">
            Add the ${SOCIAL_ADDON.price} social package above first — then tell us what to focus on
            in your first month.
          </p>
        )}

      {question.id === "socialPlatformsSetup" && isSocialAddonSelected(allValues) && (
        <p className="text-xs text-primary/70 bg-primary/5 border border-primary/15 rounded-lg px-3 py-2 mb-2">
          These platforms are included in your <strong>+${SOCIAL_ADDON.price}</strong> add-on (setup
          + 1 month management each).
        </p>
      )}

      {question.id === "socialPlatformsSetup" &&
        !isSocialAddonSelected(allValues) &&
        !(value as string[])?.length && (
          <p className="text-xs text-primary/45 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2 mb-2">
            Answer the question above first if you want the ${SOCIAL_ADDON.price} social add-on.
          </p>
        )}

      {question.type === "textarea" && (
        <textarea
          id={question.id}
          rows={4}
          className={`${inputClass} resize-y min-h-[120px] py-3`}
          placeholder={question.placeholder}
          value={(value as string) || ""}
          onChange={(e) => onChange(question.id, e.target.value)}
        />
      )}

      {question.type === "select" && (
        <select
          id={question.id}
          className={`${inputClass} cursor-pointer appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%23DEDBC8' stroke-opacity='.5' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m4 6 4 4 4-4'/%3E%3C/svg%3E")`,
          }}
          value={(value as string) || ""}
          onChange={(e) => onChange(question.id, e.target.value)}
        >
          <option value="">Select an option…</option>
          {question.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {question.type === "checkbox-group" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
          {question.options?.map((opt) => {
            const selected = ((value as string[]) || []).includes(opt);
            return (
              <label
                key={opt}
                className={`flex items-center gap-3 p-3.5 min-h-[48px] rounded-xl border cursor-pointer transition-colors touch-manipulation active:scale-[0.99] ${
                  selected
                    ? "border-primary/40 bg-primary/10"
                    : "border-white/[0.08] hover:border-white/[0.15]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => onToggleCheckbox(question.id, opt)}
                  className="shrink-0 w-4 h-4 accent-[#DEDBC8]"
                />
                <span className="text-sm text-primary/90 leading-snug">{opt}</span>
              </label>
            );
          })}
        </div>
      )}

      {(question.type === "text" ||
        question.type === "email" ||
        question.type === "tel" ||
        question.type === "url") && (
        <input
          id={question.id}
          type={question.type}
          inputMode={inputMode}
          autoComplete={
            question.type === "email"
              ? "email"
              : question.type === "tel"
                ? "tel"
                : question.id === "contactName"
                  ? "name"
                  : question.id === "businessName"
                    ? "organization"
                    : undefined
          }
          className={inputClass}
          placeholder={question.placeholder}
          value={(value as string) || ""}
          onChange={(e) => onChange(question.id, e.target.value)}
        />
      )}
    </div>
  );
}
