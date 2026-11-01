import { useForm } from "react-hook-form";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

class Expense {
    id: string;
    title: string;
    amount: number;
    category: string;

    constructor(id: string, title: string, amount: number, category: string) {
        this.id = id;
        this.title = title;
        this.amount = amount;
        this.category = category;
    }
}

function ExpenseForm({ onAddExpense }: { onAddExpense: (expense: Expense) => void }) {
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
            <p>
                <input
                    {...register("title", {
                        required:  t("titleRequired") ,
                        minLength: {
                            value: 2,
                            message:  t("titleLength") 
                        }
                    })}
                    placeholder={t("expenseTitle")} />
                {errors.title && <span style={{ color: "red" }}>{String(errors.title?.message)}</span>}
            </p>
            <p>
                <input type="number"
                    {...register("amount", {
                        required: t("amountRequired"),
                        valueAsNumber: true,
                        validate: (value) => value > 0 || t("amountInvalid")
                    })} placeholder={t("expenseAmount")} />
                {errors.amount && <span style={{ color: "red" }}>{String(errors.amount?.message)}</span>}
            </p>
            <p>
                <input {...register("category", {
                    required: t("categoryRequired")
                })} placeholder={t("expenseCategory")} />
                {errors.category && <span style={{ color: "red" }} >{String(errors.category?.message)}</span>}
            </p>
            <button type="submit">{t("addExpense")}</button>
        </form>
    )
}

function ExpensePageHeader() {
    const { t } = useTranslation();
    return (
        <header>
            <h1>{t("appTitle")}</h1>
        </header>
    )
}

function ExpensesPage() {
    const { t } = useTranslation();
    const [expenses, setExpenses] = useState<Expense[]>([]);
    return (
        <div>
            <ExpensePageHeader />
            <h2>{t("expensesAddForm")}</h2>
            <ExpenseForm onAddExpense={(expense) => setExpenses([...expenses, expense])} />
            <h2>{t("expensesList")}</h2>
            {expenses.length === 0 ? (<p>{t("listEmpty")}</p>) : (
                <ul>
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        <span style={{ marginRight: "10px" }}>{t("expenseTitle")}: {expense.title}</span>
                        <span style={{ marginRight: "10px" }}>{t("expenseAmount")}: {expense.amount}</span>
                        <span style={{ marginRight: "10px" }}>{t("expenseCategory")}: {expense.category}</span>
                    </li>
                ))}
            </ul>
            )}         
            <LanguageSwitcher />
        </div>
    )
}

export default ExpensesPage