import { useForm } from "react-hook-form";
import { useState } from "react";

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
                        required: "Title is required",
                        minLength: {
                            value: 2,
                            message: "Title must be at least 2 characters long"
                        }
                    })}
                    placeholder="Title" />
                {errors.title && <span style={{ color: "red" }}>{String(errors.title?.message)}</span>}
            </p>
            <p>
                <input type="number"
                    {...register("amount", {
                        required: "Amount is required",
                        valueAsNumber: true,
                        validate: (value) => value > 0 || "Amount must be greater than 0"
                    })} placeholder="Amount" />
                {errors.amount && <span style={{ color: "red" }}>{String(errors.amount?.message)}</span>}
            </p>
            <p>
                <input {...register("category", {
                    required: "Category is required"
                })} placeholder="Category" />
                {errors.category && <span style={{ color: "red" }} >{String(errors.category?.message)}</span>}
            </p>
            <button type="submit">Add Expense</button>
        </form>
    )
}

function ExpensesPage() {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    return (
        <div>
            <h1>Expenses Page</h1>
            <h2>Expense add form:</h2>
            <ExpenseForm onAddExpense={(expense) => setExpenses([...expenses, expense])} />
            <h2>Expenses list:</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        <span style={{ marginRight: "10px" }}>Title: {expense.title}</span>
                        <span style={{ marginRight: "10px" }}>Amount: {expense.amount}</span>
                        <span style={{ marginRight: "10px" }}>Category: {expense.category}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ExpensesPage