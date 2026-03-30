import { useTheme } from "../../hooks/useTheme";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Theme: {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
};
