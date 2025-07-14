import { CustomLink } from "@/shared/ui/custom-link";
import { LangSelect } from "@/shared/ui/lang-select";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <header className="w-full h-[70px] fixed top-0 left-0 flex items-center justify-between px-10 bg-main text-white border-b border-b-white">
      <div className="w-[40%]">
        <p
          onClick={() => navigate("/")}
          className="font-bold text-[35px] cursor-pointer"
        >
          SPG
        </p>
      </div>
      <div className="w-full justify-between items-center flex gap-x-4">
        <nav className="flex gap-5">
          <CustomLink to="/">{t("Home")}</CustomLink>
          <CustomLink to="/news">{t("News")}</CustomLink>
          <CustomLink to="/guides">{t("Guides")}</CustomLink>
          <CustomLink to="/characters">{t("Characters")}</CustomLink>
        </nav>
        {localStorage.getItem("spg_token") ? (
          <button className="cursor-pointer">Профиль</button>
        ) : (
          <div className="flex gap-5">
            <button
              onClick={() => navigate("/sign-up")}
              className="cursor-pointer px-5 p-2 bg-blue-700 rounded-[10px]"
            >
              {t("Sign_Up")}
            </button>
            <button
              onClick={() => navigate("/log-in")}
              className="cursor-pointer px-5 p-2 border-2 border-blue-700 rounded-[10px]"
            >
              {t("Log_In")}
            </button>
          </div>
        )}
        <LangSelect />
      </div>
    </header>
  );
};

export { Header };
