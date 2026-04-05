import { type FC, type ReactNode } from "react";
import clsx from "clsx";

import style from "./SectionWrapper.module.scss";

interface SectionWrapperProps {
  className?: string;
  id: string;
  children: ReactNode;
}

export const SectionWrapper: FC<SectionWrapperProps> = ({
  className,
  id,
  children,
}) => {
  return (
    <section id={id} className={clsx(style.section, className)}>
      {children}
    </section>
  );
};
