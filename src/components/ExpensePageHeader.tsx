import { useTranslation } from "react-i18next";

export function ExpensePageHeader() {
    const { t } = useTranslation();
    return (
        <header>
            <h1>{t("appTitle")}</h1>
        </header>
    )
}
