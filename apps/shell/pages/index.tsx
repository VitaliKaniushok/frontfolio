import type { GetServerSideProps } from "next";
import { useTranslation } from "react-i18next";

import { createFederatedComponent } from "../src/components";

import { MainLayout } from "../src/layouts/MainLayout";

function PortfolioFallback() {
  const { t } = useTranslation();

  return <div>{t("shell.home.loadingPortfolio")}</div>;
}

const PortfolioPage = createFederatedComponent({
  scope: "devfolio_portfolio",
  module: "./PortfolioPage",
  fallback: <PortfolioFallback />,
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
