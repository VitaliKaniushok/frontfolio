import { Footer, Navbar, MainContainer } from "../components";
import styles from "./MainLayout.module.scss";

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </div>
  );
}
