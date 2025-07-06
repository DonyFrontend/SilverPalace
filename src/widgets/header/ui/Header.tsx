import { CustomLink } from "@/shared/ui/custom-link";
import { LangSelector } from "@/shared/ui/LangSelector";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <header className="w-full h-[70px] fixed top-0 left-0 flex items-center justify-between px-10 bg-main text-white border-b border-b-white">
      <div className="w-1/2">
        <p
          onClick={() => navigate("/")}
          className="font-bold text-[35px] cursor-pointer"
        >
          SPG
        </p>
      </div>
      <div className="w-full justify-between items-center flex">
        <nav className="flex gap-5">
          <CustomLink to="/">{t("Home")}</CustomLink>
          <CustomLink to="/news">{t("News")}</CustomLink>
          <CustomLink to="/guides">{t("Guides")}</CustomLink>
          <CustomLink to="/characters">{t("Characters")}</CustomLink>
        </nav>
        <div className="flex gap-5 items-center">
          <button className="cursor-pointer px-5 p-2 bg-blue-700 rounded-[10px]">
            {t("Sign_Up")}
          </button>
          <button className="cursor-pointer px-5 p-2 border-2 border-blue-700 rounded-[10px]">
            {t("Log_In")}
          </button>
          <LangSelector/>
        </div>
      </div>
    </header>
  );
};

export { Header };
