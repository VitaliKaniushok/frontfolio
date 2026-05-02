import { useTranslation } from "react-i18next";

import type { ProjectItemType } from "@/types";

export const useProjects = (): ProjectItemType[] => {
  const { t } = useTranslation();

  return t("portfolio.projects.items", {
    returnObjects: true,
  }) as ProjectItemType[];
};
