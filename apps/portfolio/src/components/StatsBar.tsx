import { motion } from "framer-motion";

import { usePortfolioStats } from "../hooks";

import { ContainerNarrow } from "@frontfolio/ui";

import styles from "./StatsBar.module.scss";

const StatsBar = () => {
  const stats = usePortfolioStats();

  return (
    <section className={styles.statsBar}>
      <ContainerNarrow className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={styles.statItem}
            >
              <stat.icon className={styles.icon} />
              <p className={styles.value}>{stat.value}</p>
              <p className={styles.label}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </ContainerNarrow>
    </section>
  );
};

export default StatsBar;
