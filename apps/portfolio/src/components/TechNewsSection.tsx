import { motion } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";
import styles from "./TechNewsSection.module.scss";

interface Article {
  title: string;
  source: string;
  date: string;
  excerpt: string;
  url: string;
}

const articles: Article[] = [
  {
    title: "The Future of Server Components in React 19",
    source: "React Blog",
    date: "Mar 2026",
    excerpt:
      "How React Server Components are reshaping the way we build data-driven applications.",
    url: "#",
  },
  {
    title: "Scaling Kubernetes to 10,000 Nodes",
    source: "CNCF Blog",
    date: "Feb 2026",
    excerpt:
      "Lessons learned from running Kubernetes at massive scale in production environments.",
    url: "#",
  },
  {
    title: "TypeScript 6.0: What's New",
    source: "TypeScript Blog",
    date: "Feb 2026",
    excerpt:
      "Pattern matching, improved inference, and the new decorator metadata API.",
    url: "#",
  },
  {
    title: "Edge Computing: The Next Frontier",
    source: "Vercel Blog",
    date: "Jan 2026",
    excerpt:
      "Moving compute closer to users with edge functions and distributed databases.",
    url: "#",
  },
];

const TechNewsSection = () => {
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
          <p className={styles.overline}>Reading</p>
          <h2 className={styles.title}>Tech News</h2>
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
                Read more <ExternalLink className={styles.icon} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechNewsSection;
