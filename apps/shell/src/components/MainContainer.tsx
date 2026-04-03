import styles from "./MainContainer.module.scss";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.mainContent}>{children}</main>;
};

export default MainContainer;
