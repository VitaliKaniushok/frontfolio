import { type FC, type ReactNode } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import { ContainerNarrow } from "@devfolio/ui";

import styles from "./SectionWrapper.module.scss";

interface SectionWrapperProps {
  className?: string;
  id: string;
  title: string;
  overTitle: string;
  children: ReactNode;
}

export const SectionWrapper: FC<SectionWrapperProps> = ({
  className,
  id,
  title,
  overTitle,
  children,
}) => {
  return (
    <section id={id} className={clsx(styles.section, className)}>
      <ContainerNarrow>
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles["title-wrapper"]}
        >
          <p className={styles["over-title"]}>{overTitle}</p>
          <h2 className={styles.title}>{title}</h2>
        </motion.div>
        {children}
      </ContainerNarrow>
    </section>
  );
};
