import { useTranslation } from "react-i18next";
import type { Expense } from "@/types/Expense";

export function ExpenseList({ expenses }: { expenses: Expense[] }) {
    const { t } = useTranslation();

    if (expenses.length === 0) {
        return <p>{t("listEmpty")}</p>;
    }

    return (
        <ul>
            {expenses.map((expense) => (
                <li key={expense.id}>
                    <span style={{ marginRight: "10px" }}>{t("expenseTitle")}: {expense.title}</span>
                    <span style={{ marginRight: "10px" }}>{t("expenseAmount")}: {expense.amount}</span>
                    <span style={{ marginRight: "10px" }}>{t("expenseCategory")}: {expense.category}</span>
                </li>
            ))}
        </ul>
    )
}
