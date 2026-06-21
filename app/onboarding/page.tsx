import type { Metadata } from "next";
import { OnboardingChecklist } from "./OnboardingChecklist";

export const metadata: Metadata = {
  title: "Project Brief Checklist — ShowMe Web & App",
  description:
    "Client onboarding questionnaire for ShowMe Web & App. Tell us about your business, goals, brand, and timeline so we can build the right website for you.",
};

export default function OnboardingPage() {
  return <OnboardingChecklist />;
}
