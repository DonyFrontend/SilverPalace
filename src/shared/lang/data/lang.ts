import { type LangType, lang } from "../i18n/i18n";

const langArray: LangType[] = [
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
  { code: "kr", label: "한국인" },
  { code: "cn", label: "中国人" },
  { code: "jp", label: "日本語" },
];

const currentLangArray: LangType[] = [{ code: lang.code, label: lang.label }];

for (let i = 0; i < langArray.length; i++) {
  if (langArray[i].code !== lang.code) {
    currentLangArray.push({
      code: langArray[i].code,
      label: langArray[i].label,
    });
  } else continue;
}

export { currentLangArray };
