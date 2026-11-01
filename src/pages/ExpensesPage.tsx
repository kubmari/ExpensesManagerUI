import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Expense } from "@/types/Expense";
import { ExpensePageHeader } from "@/components/ExpensePageHeader";
import { ExpenseForm } from "@/components/ExpenseForm";
import { ExpenseList } from "@/components/ExpenseList";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

function ExpensesPage() {
    const { t } = useTranslation();
    const [expenses, setExpenses] = useState<Expense[]>([]);
    return (
        <div>
            <ExpensePageHeader />
            <h2>{t("expensesAddForm")}</h2>
            <ExpenseForm onAddExpense={(expense) => setExpenses([...expenses, expense])} />
            <h2>{t("expensesList")}</h2>
            <ExpenseList expenses={expenses} />
            <LanguageSwitcher />
        </div>
    )
}

export default ExpensesPage
