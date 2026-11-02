import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
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
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(expenseSchema),
        defaultValues: {
            title: "",
            amount: 0,
            category: ""
        }
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("title")} placeholder={t("expenseTitle")} />
                {errors.title && <div style={{ color: "red" }}>{t(errors.title.message ?? "")}</div>}
            </div>
            <div>
                <input type="number"
                    {...register("amount", { valueAsNumber: true })}
                    placeholder={t("expenseAmount")} />
                {errors.amount && <div style={{ color: "red" }}>{t(errors.amount.message ?? "")}</div>}
            </div>
            <div>
                <input {...register("category")} placeholder={t("expenseCategory")} />
                {errors.category && <div style={{ color: "red" }}>{t(errors.category.message ?? "")}</div>}
            </div>
            <button type="submit">{t("addExpense")}</button>
        </form>
    )
}
