import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { Button, Stack, TextField } from "@mui/material";
import { Expense } from "@/types/Expense";

const expenseSchema = z.object({
    title: z.string().min(1, "titleRequired").min(2, "titleLength"),
    amount: z.number({ error: "amountRequired" }).positive("amountInvalid"),
    category: z.string().min(1, "categoryRequired"),
});

type ExpenseFormValues = z.infer<typeof expenseSchema>;

export function ExpenseForm({ onAddExpense }: { onAddExpense: (expense: Expense) => void }) {
    "use no memo";
    const { t } = useTranslation();
    const onSubmit = (data: ExpenseFormValues) => {
        const newExpense = new Expense(
            crypto.randomUUID(),
            data.title,
            data.amount,
            data.category
        );
        onAddExpense(newExpense);
        reset();
    };
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(expenseSchema),
        defaultValues: {
            title: "",
            category: ""
        }
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2} sx={{ maxWidth: 400 }}>
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                        <TextField {...field} label={t("expenseTitle")}
                            error={!!errors.title}
                            helperText={errors.title && t(errors.title.message ?? "")} />
                    )}
                />
                <Controller
                    name="amount"
                    control={control}
                    render={({ field }) => (
                        <TextField {...field} label={t("expenseAmount")} type="number"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value === "" ? undefined : Number(e.target.value))}
                            error={!!errors.amount}
                            helperText={errors.amount && t(errors.amount.message ?? "")} />
                    )}
                />
                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                        <TextField {...field} label={t("expenseCategory")}
                            error={!!errors.category}
                            helperText={errors.category && t(errors.category.message ?? "")} />
                    )}
                />
                <Button type="submit" variant="contained">{t("addExpense")}</Button>
            </Stack>
        </form>
    )
}
