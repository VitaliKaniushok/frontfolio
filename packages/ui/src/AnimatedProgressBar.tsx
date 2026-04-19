import type { HTMLAttributes } from "react";

import { motion, type MotionProps } from "framer-motion";

import styles from "./AnimatedProgressBar.module.scss";

export interface AnimatedProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  initialValue?: number;
  viewport?: MotionProps["viewport"];
}

export const AnimatedProgressBar = ({
  value,
  initialValue = 0,
  viewport = { once: true },
  ...props
}: AnimatedProgressBarProps) => {
  const normalizedValue = Math.min(100, Math.max(0, value));
  const normalizedInitialValue = Math.min(100, Math.max(0, initialValue));

  return (
    <div
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={normalizedValue}
      className={styles["progress-track"]}
      role="progressbar"
      {...props}
    >
      <motion.div
        initial={{ width: `${normalizedInitialValue}%` }}
        whileInView={{ width: `${normalizedValue}%` }}
        viewport={viewport}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles["progress-fill"]}
      />
    </div>
  );
};
