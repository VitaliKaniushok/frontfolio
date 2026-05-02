import { motion } from "framer-motion";

import TechItem from "./TechItem";
import { GlassCard } from "../ui";

import type { TechCategory } from "@/types";

import styles from "./TechCategoryCard.module.scss";

interface TechCategoryCardProps {
  category: TechCategory;
  index: number;
}

const TechCategoryCard = ({ category, index }: TechCategoryCardProps) => {
  return (
    <motion.div
      initial={{ y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard className={styles.card}>
        <h3 className={styles.card__title}>{category.title}</h3>
        <div className={styles.card__list}>
          {category.items.map((tech) => (
            <TechItem key={tech.name} tech={tech} />
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default TechCategoryCard;
