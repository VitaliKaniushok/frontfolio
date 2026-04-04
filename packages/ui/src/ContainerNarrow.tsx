import { type FC } from "react";
import clsx from "clsx";

import style from "./ContainerNarrow.module.scss";

interface ContainerNarrowProps {
  children: React.ReactNode;
  className?: string;
}

export const ContainerNarrow: FC<ContainerNarrowProps> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx(style["container-narrow"], className)}>{children}</div>
  );
};
