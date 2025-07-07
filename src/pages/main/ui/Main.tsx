import { Card } from "@/widgets/Cards/Card";
import { Skeleton } from "@/widgets/Cards/Skeleton";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Main = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const { t } = useTranslation();
  return (
    <div className="text-white">{t("Main")}
      <div className="flex justify-center items-center h-screen">
        {loading ? <Skeleton /> : <Card />}
      </div>
    </div>
  )
};

export { Main };
