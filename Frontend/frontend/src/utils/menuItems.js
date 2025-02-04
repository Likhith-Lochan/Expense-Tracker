import { dashboard, expenses, transactions, trend } from "./Icons";

export const menuItems=[
    {
        id:1,
        title: "DashBoard",
        icon: dashboard,
        link : '/dashboard'
    },
    {
        id:2,
        title: "Transactions",
        icon: transactions,
        link : '/dashboard'
    },
    {
        id:3,
        title: "Incomes",
        icon: trend,
        link : '/dashboard'
    },
    {
        id:4,
        title: "Expenses",
        icon: expenses,
        link : '/dashboard'
    }
]