import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Expense } from "@/types/Expense";

export function ExpenseForm({ onAddExpense }: { onAddExpense: (expense: Expense) => void }) {
    "use no memo";
    const { t } = useTranslation();
    const onSubmit = (data: { title: string; amount: number; category: string }) => {
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
        defaultValues: {
            title: "",
            amount: 0,
            category: ""
        }
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                    {...register("title", {
                        required:  t("titleRequired") ,
                        minLength: {
                            value: 2,
                            message:  t("titleLength")
                        }
                    })}
                    placeholder={t("expenseTitle")} />
                {errors.title && <div style={{ color: "red" }}>{String(errors.title?.message)}</div>}
            </div>
            <div>
                <input type="number"
                    {...register("amount", {
                        required: t("amountRequired"),
                        valueAsNumber: true,
                        validate: (value) => value > 0 || t("amountInvalid")
                    })} placeholder={t("expenseAmount")} />
                {errors.amount && <div style={{ color: "red" }}>{String(errors.amount?.message)}</div>}
            </div>
            <div>
                <input {...register("category", {
                    required: t("categoryRequired")
                })} placeholder={t("expenseCategory")} />
                {errors.category && <div style={{ color: "red" }}>{String(errors.category?.message)}</div>}
            </div>
            <button type="submit">{t("addExpense")}</button>
        </form>
    )
}
