import { useTranslation } from "react-i18next";

export const useCourses = (): string[] => {
  const { t } = useTranslation();

  return t("portfolio.education.courses", {
    returnObjects: true,
  }) as string[];
};