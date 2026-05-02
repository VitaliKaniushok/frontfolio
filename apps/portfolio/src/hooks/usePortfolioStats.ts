import { Award } from "lucide-react";
import { useTranslation } from "react-i18next";

import { STAT_ICONS } from "@/constants";
import type { Stat } from "@/types";

export const usePortfolioStats = (): Stat[] => {
  const { t } = useTranslation();
  const stats = t("portfolio.stats", {
    returnObjects: true,
  }) as Array<{ label: string; value: string }>;

  return stats.map((stat, index) => ({
    ...stat,
    icon: STAT_ICONS[index] ?? Award,
  }));
};
