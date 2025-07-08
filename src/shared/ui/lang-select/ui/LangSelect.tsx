import { langArray } from "@/shared/lang/data/lang";
import { useTranslation } from "react-i18next";
import lang_icon from "@/shared/assets/icons/Language.svg";

const LangSelect = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
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
        {langArray.map((item, index) => (
          <option key={index} value={item.code}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export { LangSelect };
