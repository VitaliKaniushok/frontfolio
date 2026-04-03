import style from "./GlowText.module.scss";

export const GlowText = ({ children }: { children: React.ReactNode }) => {
  return <span className={style["glow-text"]}>{children}</span>;
};
