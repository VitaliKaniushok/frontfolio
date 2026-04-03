import { motion } from "framer-motion";

import { STATS } from "../constants/";

import styles from "./StatsBar.module.scss";

const StatsBar = () => {
  return (
    <section className={styles.statsBar}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {STATS.map((stat, i) => (
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
      </div>
    </section>
  );
};

export default StatsBar;
