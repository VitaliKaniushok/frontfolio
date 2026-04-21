import { useTranslation } from "react-i18next";

import type { EducationEntry } from "./portfolioData.types";

export const useEducation = (): EducationEntry[] => {
  const { t } = useTranslation();

  return t("portfolio.education.items", {
    returnObjects: true,
  }) as EducationEntry[];
};
