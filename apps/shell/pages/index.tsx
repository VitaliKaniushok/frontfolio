import type { GetServerSideProps } from "next";
import { createFederatedComponent } from "../src/components/WrapperFederatedComponent";

const PortfolioPage = createFederatedComponent({
  scope: "frontfolio_portfolio",
  module: "./PortfolioPage",
  fallback: <div>Loading portfolio...</div>,
  ssr: true,
});

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default function HomePage() {
  return (
    <main>
      <h1>Frontfolio Shell</h1>
      <p>
        This is the host application. The portfolio page is rendered below via
        module federation:
      </p>
      <PortfolioPage />
    </main>
  );
}
