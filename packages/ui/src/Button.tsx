import { forwardRef } from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";

import styles from "./Button.module.scss";

export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export type ButtonSize = "default" | "sm" | "lg" | "icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={clsx(
          styles.button,
          styles[`button--variant-${variant}`],
          styles[`button--size-${size}`],
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
