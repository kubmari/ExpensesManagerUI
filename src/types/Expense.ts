export class Expense {
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
