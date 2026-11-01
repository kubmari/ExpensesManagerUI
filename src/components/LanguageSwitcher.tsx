import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("pl")}>PL</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
    </div>
  );
}