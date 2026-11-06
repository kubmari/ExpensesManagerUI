import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Stack, Typography } from "@mui/material";
import type { Expense } from "@/types/Expense";
import { ExpensePageHeader } from "@/components/ExpensePageHeader";
import { ExpenseForm } from "@/components/ExpenseForm";
import { ExpenseList } from "@/components/ExpenseList";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

function ExpensesPage() {
    const { t } = useTranslation();
    const [expenses, setExpenses] = useState<Expense[]>([]);
    return (
        <Container maxWidth="md" sx={{ py: 3 }}>
            <Stack spacing={3}>
                <ExpensePageHeader />
                <Typography variant="h6" component="h2">{t("expensesAddForm")}</Typography>
                <ExpenseForm onAddExpense={(expense) => setExpenses([...expenses, expense])} />
                <Typography variant="h6" component="h2">{t("expensesList")}</Typography>
                <ExpenseList expenses={expenses} />
                <LanguageSwitcher />
            </Stack>
        </Container>
    )
}

export default ExpensesPage
