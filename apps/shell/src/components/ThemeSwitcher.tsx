import { useTheme } from "../hooks/useTheme";
import { useTranslation } from "react-i18next";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <button onClick={toggleTheme}>
      {t("shell.theme.label")}:{" "}
      {theme === "dark" ? t("shell.theme.dark") : t("shell.theme.light")}
    </button>
  );
};
