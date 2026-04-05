import { type FC, type ReactNode } from "react";
import clsx from "clsx";

import style from "./GlassCard.module.scss";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export const GlassCard: FC<GlassCardProps> = ({
  children,
  className,
  onClick,
  interactive,
}) => {
  return (
    <div
      className={clsx(
        style["glass-card"],
        interactive && style["glass-card--hover"],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
