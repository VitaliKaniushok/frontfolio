import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

import { SECTION_IDS } from "@frontfolio/constants";

import { SectionWrapper, GlassCard } from "./ui";
import { useEducation, useCourses } from "@/hooks";

import styles from "./EducationSection.module.scss";

const EducationSection = () => {
  const { t } = useTranslation();
  const educationItems = useEducation();
  const courses = useCourses();

  return (
    <SectionWrapper
      id={SECTION_IDS.education}
      title={t("portfolio.education.title")}
      overTitle={t("portfolio.education.overTitle")}
      className={styles.section}
    >
      <div className={styles.grid}>
        <div className={styles.education}>
          {educationItems.map((education, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={styles["education__card-wrapper"]}
            >
              <GlassCard className={styles.education__card}>
                <div className={styles.education__icon}>
                  <GraduationCap />
                </div>
                <div className={styles.education__content}>
                  <h3>{education.degree}</h3>
                  <p className={styles.education__meta}>
                    {education.institution} · {education.year}
                  </p>
                  <p className={styles.education__focus}>{education.focus}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className={styles.certifications}>
            <h3 className={styles.certifications__title}>
              {t("portfolio.education.coursesTitle")}
            </h3>
            <div className={styles.certifications__list}>
              {courses.map((certificate, i) => (
                <div key={i} className={styles.certifications__item}>
                  <Award />
                  <span>{certificate}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;
