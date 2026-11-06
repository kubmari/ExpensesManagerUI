import { useTranslation } from "react-i18next";
import { Button, ButtonGroup } from "@mui/material";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <ButtonGroup size="small" sx={{ alignSelf: "flex-start" }}>
      <Button onClick={() => changeLanguage("pl")}>PL</Button>
      <Button onClick={() => changeLanguage("en")}>EN</Button>
    </ButtonGroup>
  );
}
