import { useTranslation } from "react-i18next";

import type { NewsArticle } from "@/types";

export const useTechNewsArticles = (): NewsArticle[] => {
  const { t } = useTranslation();

  return t("portfolio.news.items", {
    returnObjects: true,
  }) as NewsArticle[];
};
