import React from "react";
import { useTranslation } from "react-i18next";

const LangSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "ru", label: "Русский" },
    { code: "en", label: "English" },
    { code: "kr", label: "한국인" },
    { code: "cn", label: "中国人" },
    { code: "jp", label: "日本語" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  return (
    <select
      value={i18n.language}
      onChange={handleChange}
      className="p-2 bg-white text-black rounded cursor-pointer"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
};

export {LangSelector};