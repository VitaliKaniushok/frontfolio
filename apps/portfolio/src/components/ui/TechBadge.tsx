import { type FC, type ReactNode } from "react";
import clsx from "clsx";

import styles from "./TechBadge.module.scss";

interface TechBadgeProps {
  children: ReactNode;
  className?: string;
}

export const TechBadge: FC<TechBadgeProps> = ({ children, className }) => {
  return (
    <span className={clsx(styles["tech-badge"], className)}>{children}</span>
  );
};
