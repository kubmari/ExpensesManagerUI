import { Link, Outlet } from "react-router";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ExpensePageHeader } from "./ExpensePageHeader";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";

export function AppLayout() {
        const {t} = useTranslation();
    return (
        <>
            <ExpensePageHeader /> 
            <Stack component="nav" direction="row" spacing={2}>
                <Link to="/"> {t("dashboard")} </Link>
                <Link to="/expenses"> {t("expenses")} </Link>
                <Link to="/summary"> {t("summary")} </Link>
            </Stack>
            <main>
                <Outlet />
            </main>
            <LanguageSwitcher />
        </>
    );
}