import { useTranslation } from "react-i18next";

function ErrorPage() {
  const { t } = useTranslation();

  return <div>{t("shell.errors.generic")}</div>;
}

export default ErrorPage;
