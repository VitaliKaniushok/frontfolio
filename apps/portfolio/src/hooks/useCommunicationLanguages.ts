import { useTranslation } from "react-i18next";

import type { CommunicationLanguage } from "@/types";

export const useCommunicationLanguages = (): CommunicationLanguage[] => {
  const { t } = useTranslation();

  return t("portfolio.languages.items", {
    returnObjects: true,
  }) as CommunicationLanguage[];
};
