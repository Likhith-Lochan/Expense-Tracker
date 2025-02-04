import { Router } from "express";
import { addIncome, deleteIncome, getIncomes } from "../controllers/transaction.controller.js";
import { addExpense, deleteExpense, getExpenses } from "../controllers/expense.controller.js";

const router=Router()


router.post('/add-income',addIncome)
router.get('/get-incomes',getIncomes)
router.delete('/delete-income/:id',deleteIncome)

router.post('/add-expense',addExpense)
router.get('/get-expenses',getExpenses)
router.delete('/delete-expense/:id',deleteExpense)


export default router