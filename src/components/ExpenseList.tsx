import { useTranslation } from "react-i18next";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import type { Expense } from "@/types/Expense";

export function ExpenseList({ expenses }: { expenses: Expense[] }) {
    const { t } = useTranslation();

    if (expenses.length === 0) {
        return <Typography>{t("listEmpty")}</Typography>;
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{t("expenseTitle")}</TableCell>
                        <TableCell align="right">{t("expenseAmount")}</TableCell>
                        <TableCell>{t("expenseCategory")}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {expenses.map((expense) => (
                        <TableRow key={expense.id}>
                            <TableCell>{expense.title}</TableCell>
                            <TableCell align="right">{expense.amount}</TableCell>
                            <TableCell>{expense.category}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
