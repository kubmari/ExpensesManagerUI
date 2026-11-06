import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

export function ExpensePageHeader() {
    const { t } = useTranslation();
    return (
        <header>
            <Typography variant="h4" component="h1">{t("appTitle")}</Typography>
        </header>
    )
}
