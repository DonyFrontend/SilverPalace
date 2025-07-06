import { useTranslation } from "react-i18next";

const Main = () => {

  const { t } = useTranslation();

  return <div className="text-white">{t("Main")}</div>;
};

export { Main };
