import { currentLangArray } from "@/shared/lang/data/lang";
import { useTranslation } from "react-i18next";
import lang_icon from "@/shared/assets/icons/language.svg";

const LangSelect = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang: string): void => {
    const encodeLang: { code: string; label: string } = JSON.parse(lang);
    i18n.changeLanguage(encodeLang.code);
    localStorage.setItem("spg_lang", lang);
    localStorage.setItem("spg_current_lang", encodeLang.code);
  };

  return (
    <div
      className={`p-3 border-white bg-main border rounded-[500px] flex gap-x-2 px-4 py-2 items-center`}
    >
      <img src={lang_icon} alt="Error!" />
      <select
        onChange={(e) => handleChangeLanguage(e.currentTarget.value)}
        className={`bg-main text-lg cursor-pointer`}
      >
        {currentLangArray.map((item, index) => (
          <option
            key={index}
            value={JSON.stringify({ code: item.code, label: item.label })}
          >
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export { LangSelect };
