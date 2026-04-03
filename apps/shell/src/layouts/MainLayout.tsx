import { Footer, Navbar, MainContainer } from "../components";

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
}
