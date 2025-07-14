import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

    return (
        <div className="text-white flex justify-center items-center h-[100vh]">
            <div className="flex flex-col gap-y-4 mt-5 w-[70%]">
                <h1 className="text-3xl font-bold px-10 text-center">{t("About_Us")}</h1>
                <p className="">
                    {t("Welcome")}
                </p>
                <p className="">
                    {t("WhatWeDo")}
                </p>
                <p>
                    {t("WhoAreWe")}              
                    </p>
                <p>
                    {t("JoinUs")}
                </p>
            </div>
        </div>
    );
};

export { AboutUs };
