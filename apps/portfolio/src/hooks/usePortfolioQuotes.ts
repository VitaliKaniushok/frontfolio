import { useTranslation } from "react-i18next";

export const usePortfolioQuotes = () => {
  const { t } = useTranslation();

  return t("portfolio.hero.quotes", { returnObjects: true }) as string[];
};
