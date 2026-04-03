import type { GetServerSideProps } from "next";
import { createFederatedComponent } from "../src/components";

import { MainLayout } from "../src/layouts/MainLayout";

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
    <>
      <PortfolioPage />
    </>
  );
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
