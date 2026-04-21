import { motion } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

import { useTechNewsArticles } from "@/hooks";

import styles from "./TechNewsSection.module.scss";

const TechNewsSection = () => {
  const { t } = useTranslation();
  const articles = useTechNewsArticles();

  return (
    <section id="news" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.header}
        >
          <p className={styles.overline}>{t("portfolio.news.overTitle")}</p>
          <h2 className={styles.title}>{t("portfolio.news.title")}</h2>
        </motion.div>

        <div className={styles.grid}>
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href={article.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={styles.card}
            >
              <div className={styles.meta}>
                <span className={styles.source}>{article.source}</span>
                <span className={styles.separator}>·</span>
                <span className={styles.date}>
                  <Clock className={styles.icon} />
                  {article.date}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{article.title}</h3>
              <p className={styles.excerpt}>{article.excerpt}</p>
              <div className={styles.readMore}>
                {t("portfolio.news.readMore")}{" "}
                <ExternalLink className={styles.icon} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechNewsSection;
